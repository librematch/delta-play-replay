use anyhow::Context;
use bytes::{Buf, Bytes};
use num_derive::FromPrimitive;
use num_traits::FromPrimitive;
use uncage_model::{
    Document, Model, ModelBorrowOwned, ModelCollection, ModelWithDocument, ValueType,
};

pub mod model;

#[derive(Debug)]
pub struct Patcher<R: Model, C: ModelCollection> {
    document: Document<R, C>,
    stack: Vec<usize>,
    path: Vec<&'static str>,
}

impl<R: 'static + Model, C: ModelCollection> Patcher<R, C> {
    pub fn new(document: Document<R, C>) -> Patcher<R, C> {
        Self {
            document,
            stack: Vec::with_capacity(10),
            path: Vec::with_capacity(10),
        }
    }

    pub fn document(&self) -> &Document<R, C> {
        &self.document
    }

    fn push_top(&mut self, id: usize) -> ModelBorrowOwned<R, C> {
        self.stack.push(id);
        self.path.push(
            self.document
                .by_id(id)
                .unwrap()
                .model()
                .get()
                .get_model_name(),
        );
        self.get_top_of_stack()
    }

    fn pop_top(&mut self) -> ModelBorrowOwned<R, C> {
        let _ = self.stack.pop();
        let _ = self.path.pop();
        self.get_top_of_stack()
    }

    fn get_top_of_stack(&self) -> ModelBorrowOwned<R, C> {
        if let Some(id) = self.stack.last() {
            self.document.by_id(*id).unwrap().owned()
        } else {
            self.document.root().owned()
        }
    }

    pub fn apply_patch(&mut self, mut buffer: Bytes) -> anyhow::Result<()> {
        let mut top = self.get_top_of_stack();

        while buffer.has_remaining() {
            let action = buffer.get_u8();
            let action: PatchAction = PatchAction::from_u8(action)
                .with_context(|| format!("{} is not a valid patch action", action))?;

            match action {
                PatchAction::Pop => {
                    top = self.pop_top();
                }
                PatchAction::AssignField => {
                    let field = buffer.get_u8();
                    top.assign(field as usize, &mut buffer)?;
                }

                PatchAction::PushCreateAndAssignField => {
                    let field = buffer.get_u8();
                    let model_type = buffer.get_u8();
                    let model = C::create_model(model_type as usize).boxed();

                    let id = top
                        .set_model(field as usize, model)
                        .context("Failed to create new model")?;
                    top = self.push_top(id);
                }

                PatchAction::PushField => {
                    let field = buffer.get_u8();
                    let id = top
                        .get_model_id(field as usize)
                        .with_context(|| format!("Couldn't find model on field {}", field))?;
                    top = self.push_top(id);
                }

                PatchAction::ResetField => {
                    let field = buffer.get_u8();
                    if let Some(id) = top.reset_model_field(field as usize) {
                        self.document.remove(id);
                    }
                }

                PatchAction::AssignKey => {
                    let field = buffer.get_u8() as usize;
                    let index = buffer.get_i32_le();

                    match top.value_type(field) {
                        ValueType::Value => {}
                        ValueType::Map { .. } => top.map_assign(field, index, &mut buffer)?,
                        ValueType::List => top.list_assign(field, index, &mut buffer)?,
                    }
                }
                PatchAction::PushKey => {
                    let field = buffer.get_u8() as usize;
                    let index = buffer.get_i32_le();

                    match top.value_type(field) {
                        ValueType::Value => {}
                        ValueType::Map { .. } => {
                            let id = top
                                .map_get_model_id(field, index)
                                .context("Couldn't find")?;
                            top = self.push_top(id);
                        }
                        ValueType::List => {
                            let id = top.list_get_model_id(field, index).context("failed")?;
                            top = self.push_top(id);
                        }
                    }
                }
                PatchAction::PushCreateAndAssignKey => {
                    let field = buffer.get_u8() as usize;
                    let model_type = buffer.get_u8() as usize;
                    let model = C::create_model(model_type as usize).boxed();
                    let index = buffer.get_i32_le();

                    match top.value_type(field) {
                        ValueType::Value => {}
                        ValueType::Map { .. } => {
                            let id = top
                                .map_create_model(field, index, model)
                                .context("failed")?;
                            top = self.push_top(id);
                        }
                        ValueType::List => {
                            let id = top
                                .list_create_model(field, index, model)
                                .context("failed")?;
                            top = self.push_top(id);
                        }
                    }
                }
                PatchAction::ResetKey => {
                    let field = buffer.get_u8() as usize;
                    let index = buffer.get_i32_le();
                    let id = match top.value_type(field) {
                        ValueType::Value => {
                            continue;
                        }
                        ValueType::Map { .. } => {
                            top.map_reset_model(field, index).context("failed")?
                        }
                        ValueType::List => top.list_reset_model(field, index).context("failed")?,
                    };

                    self.document.remove(id);
                }
                PatchAction::Insert => {
                    let field = buffer.get_u8() as usize;
                    let index = buffer.get_i32_le();
                    top.list_insert(field, index, &mut buffer)?;
                }
                PatchAction::PushCreateAndInsert => {
                    let field = buffer.get_u8() as usize;
                    let model_type = buffer.get_u8() as usize;
                    let index = buffer.get_i32_le();
                    let model = C::create_model(model_type as usize).boxed();
                    let id = top
                        .list_insert_model(field, index, model)
                        .context("Couldn't find field")?;
                    top = self.push_top(id)
                }
                PatchAction::Remove => {
                    let field = buffer.get_u8() as usize;
                    let index = buffer.get_i32_le();
                    if let Some(id) = top.list_remove(field, index) {
                        self.document.remove(id);
                    }
                }
                PatchAction::Swap => {
                    let field = buffer.get_u8() as usize;
                    let index_a = buffer.get_i32_le();
                    let index_b = buffer.get_i32_le();
                    top.list_swap(field, index_a, index_b);
                }
                PatchAction::Resize => {
                    let field = buffer.get_u8() as usize;
                    let new_size = buffer.get_i32_le();
                    top.resize_list(field, new_size as usize)
                }
            }
        }

        Ok(())
    }
}

#[derive(FromPrimitive, Copy, Clone, Debug, Ord, PartialOrd, Eq, PartialEq)]
#[repr(u8)]
enum PatchAction {
    Pop = 1,
    AssignField = 2,
    PushField = 3,
    PushCreateAndAssignField = 4,
    ResetField = 5,
    AssignKey = 6,
    PushKey = 7,
    PushCreateAndAssignKey = 8,
    ResetKey = 9,
    Insert = 10,
    PushCreateAndInsert = 11,
    Remove = 12,
    Swap = 13,
    Resize = 14,
}

#[cfg(test)]
mod tests {
    use crate::{model, Patcher};
    use bytes::Bytes;
    use std::fs;
    use std::time::Instant;
    use uncage_model::Document;

    #[test]
    fn it_works() {
        let patch_file = "resources/single-patch.bin";

        let doc: Document<model::Root, model::Models> = Document::new();
        let patch = fs::read(patch_file).expect("Failed to read single patch");
        let patch = Bytes::from(patch);
        let mut patcher = Patcher::new(doc);
        let time = Instant::now();
        let res = patcher.apply_patch(patch);
        let again = Instant::now();
        println!("{:?}", again - time);
        res.expect("Failed to apply patch");

        let json = patcher.document.to_json(0);
        fs::write(
            "resources/single-patch.json",
            serde_json::to_string_pretty(&json).expect("Failed to serialize"),
        )
        .expect("Failed to write JSON");
    }
}
