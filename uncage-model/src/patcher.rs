use crate::selector::SelectorCollection;
use crate::{
    Document, Model, ModelBorrowOwned, ModelCollection, ModelWithDocument, Path, PathAction,
    PathSegment, Selector, ValueType,
};
use anyhow::Context;
use bytes::{Buf, Bytes};
use num_derive::FromPrimitive;
use num_traits::FromPrimitive;

#[derive(Debug)]
pub struct Patcher<R: Model, C: ModelCollection> {
    document: Document<R, C>,
    stack: Vec<usize>,
    path: Path,
    selectors: SelectorCollection,
}

#[derive(Debug, Clone)]
pub struct PatcherSelectorMatch {
    pub object_id: usize,
    pub path: Path,
    pub selector_key: usize,
}

impl<R: 'static + Model, C: ModelCollection> Patcher<R, C> {
    pub fn new(document: Document<R, C>) -> Patcher<R, C> {
        Self {
            document,
            stack: Vec::with_capacity(10),
            path: Path::new(),
            selectors: SelectorCollection::new(),
        }
    }
    pub fn add_selector(&mut self, key: usize, selector: Selector) {
        self.selectors.add_selector(key, selector)
    }

    pub fn document(&self) -> &Document<R, C> {
        &self.document
    }

    fn push_top(&mut self, segment: PathSegment, id: usize) -> ModelBorrowOwned<R, C> {
        self.path.goto_child(segment);
        self.stack.push(id);
        self.get_top_of_stack()
    }

    fn pop_top(&mut self) -> ModelBorrowOwned<R, C> {
        let _ = self.stack.pop();
        self.path.goto_parent();
        self.get_top_of_stack()
    }

    fn get_top_of_stack(&self) -> ModelBorrowOwned<R, C> {
        if let Some(id) = self.stack.last() {
            self.document.by_id(*id).unwrap().owned()
        } else {
            self.document.root().owned()
        }
    }

    pub fn apply_patch(&mut self, mut buffer: Bytes) -> anyhow::Result<Vec<PatcherSelectorMatch>> {
        self.document.flush();

        let mut top = self.get_top_of_stack();
        let mut matches = vec![];

        while buffer.has_remaining() {
            let action = buffer.get_u8();
            let action: PatchAction = PatchAction::from_u8(action)
                .with_context(|| format!("{} is not a valid patch action", action))?;

            match action {
                PatchAction::Pop => {
                    top = self.pop_top();
                    continue;
                }
                PatchAction::AssignField => {
                    let field = buffer.get_u8() as usize;
                    top.assign(field, &mut buffer)?;

                    {
                        let mut path = self.path.clone();
                        path.goto_field(
                            top.model().get().get_model_type(),
                            top.model().get().get_field_description(field).unwrap(),
                        );
                        path.set_action(PathAction::Mutated);
                        for key in self.selectors.matches(&path) {
                            matches.push(PatcherSelectorMatch {
                                object_id: top.object(),
                                path: path.clone(),
                                selector_key: key,
                            })
                        }
                    }
                }

                PatchAction::PushCreateAndAssignField => {
                    let field = buffer.get_u8() as usize;
                    let model_type = buffer.get_u8() as usize;
                    let model = C::create_model(model_type).boxed();

                    let id = top
                        .set_model(field, model)
                        .context("Failed to create new model")?;
                    top = self.push_top(
                        PathSegment::field(
                            top.model().get().get_model_type(),
                            top.model().get().get_field_description(field).unwrap(),
                        ),
                        id,
                    );

                    self.path.set_action(PathAction::Created);
                }

                PatchAction::PushField => {
                    let field = buffer.get_u8() as usize;
                    let id = top
                        .get_model_id(field)
                        .with_context(|| format!("Couldn't find model on field {}", field))?;
                    top = self.push_top(
                        PathSegment::field(
                            top.model().get().get_model_type(),
                            top.model().get().get_field_description(field).unwrap(),
                        ),
                        id,
                    );

                    continue;
                }

                PatchAction::ResetField => {
                    let field = buffer.get_u8() as usize;
                    if let Some(id) = top.reset_model_field(field) {
                        self.document.remove(id);

                        let mut path = self.path.clone();
                        path.goto_field(
                            top.model().get().get_model_type(),
                            top.model().get().get_field_description(field).unwrap(),
                        );
                        path.set_action(PathAction::Removed);
                        for key in self.selectors.matches(&path) {
                            matches.push(PatcherSelectorMatch {
                                object_id: top.object(),
                                path: path.clone(),
                                selector_key: key,
                            })
                        }
                    }
                    continue;
                }

                PatchAction::AssignKey => {
                    let field = buffer.get_u8() as usize;
                    let index = buffer.get_i32_le();

                    self.path.set_action(PathAction::Mutated);

                    let mut path = self.path.clone();
                    match top.value_type(field) {
                        ValueType::Value => {
                            unreachable!()
                        }
                        ValueType::Map { .. } => {
                            top.map_assign(field, index, &mut buffer)?;
                            path.goto_map_field(
                                top.model().get().get_model_type(),
                                top.model().get().get_field_description(field).unwrap(),
                                index,
                            );
                        }
                        ValueType::List => {
                            top.list_assign(field, index, &mut buffer)?;
                            path.goto_list_field(
                                top.model().get().get_model_type(),
                                top.model().get().get_field_description(field).unwrap(),
                                index as usize,
                            );
                        }
                    }

                    path.set_action(PathAction::Mutated);
                    for key in self.selectors.matches(&path) {
                        matches.push(PatcherSelectorMatch {
                            object_id: top.object(),
                            path: path.clone(),
                            selector_key: key,
                        })
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
                            top = self.push_top(
                                PathSegment::map_field(
                                    top.model().get().get_model_type(),
                                    top.model().get().get_field_description(field).unwrap(),
                                    index,
                                ),
                                id,
                            );
                        }
                        ValueType::List => {
                            let id = top.list_get_model_id(field, index).context("failed")?;
                            top = self.push_top(
                                PathSegment::list_field(
                                    top.model().get().get_model_type(),
                                    top.model().get().get_field_description(field).unwrap(),
                                    index as usize,
                                ),
                                id,
                            );
                        }
                    }

                    continue;
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
                            top = self.push_top(
                                PathSegment::map_field(
                                    top.model().get().get_model_type(),
                                    top.model().get().get_field_description(field).unwrap(),
                                    index,
                                ),
                                id,
                            );
                        }
                        ValueType::List => {
                            let id = top
                                .list_create_model(field, index, model)
                                .context("failed")?;
                            top = self.push_top(
                                PathSegment::list_field(
                                    top.model().get().get_model_type(),
                                    top.model().get().get_field_description(field).unwrap(),
                                    index as usize,
                                ),
                                id,
                            );
                        }
                    }

                    self.path.set_action(PathAction::Created);
                }
                PatchAction::ResetKey => {
                    let field = buffer.get_u8() as usize;
                    let index = buffer.get_i32_le();
                    let mut path = self.path.clone();
                    let id = match top.value_type(field) {
                        ValueType::Value => {
                            unreachable!();
                        }
                        ValueType::Map { .. } => {
                            path.goto_map_field(
                                top.model().get().get_model_type(),
                                top.model().get().get_field_description(field).unwrap(),
                                index,
                            );
                            top.map_reset_model(field, index).context("failed")?
                        }
                        ValueType::List => {
                            path.goto_map_field(
                                top.model().get().get_model_type(),
                                top.model().get().get_field_description(field).unwrap(),
                                index,
                            );
                            top.list_reset_model(field, index).context("failed")?
                        }
                    };

                    self.document.remove(id);

                    path.set_action(PathAction::Removed);
                    for key in self.selectors.matches(&path) {
                        matches.push(PatcherSelectorMatch {
                            object_id: id,
                            path: path.clone(),
                            selector_key: key,
                        })
                    }
                }
                PatchAction::Insert => {
                    let field = buffer.get_u8() as usize;
                    let index = buffer.get_i32_le();
                    self.path.set_action(PathAction::Mutated);
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
                    top = self.push_top(
                        PathSegment::list_field(
                            top.model().get().get_model_type(),
                            top.model().get().get_field_description(field).unwrap(),
                            index as usize,
                        ),
                        id,
                    );

                    self.path.set_action(PathAction::Created);
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
                    self.path.set_action(PathAction::Mutated);
                    top.list_swap(field, index_a, index_b);
                }
                PatchAction::Resize => {
                    let field = buffer.get_u8() as usize;
                    let new_size = buffer.get_i32_le();
                    self.path.set_action(PathAction::Mutated);
                    top.resize_list(field, new_size as usize)
                }
            }

            for key in self.selectors.matches(&self.path) {
                matches.push(PatcherSelectorMatch {
                    object_id: top.object(),
                    path: self.path.clone(),
                    selector_key: key,
                })
            }
        }

        Ok(matches)
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
