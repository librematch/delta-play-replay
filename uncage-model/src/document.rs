use crate::{
    FieldDescription, FieldType, Model, ModelCollection, ModelDescription, ModelExt, ModelRef, Ref,
    Reference, ValueType,
};
use anyhow::Context;
use bytes::Buf;
use serde_json::{Map, Value};
use std::any::Any;
use std::cell::UnsafeCell;
use std::collections::VecDeque;
use std::fmt;
use std::fmt::{Debug, Formatter};
use std::marker::PhantomData;
use std::option::Option::Some;
use std::rc::Rc;

#[derive(Clone)]
pub struct ModelRc(Rc<UnsafeCell<Box<dyn ModelDescription>>>);

impl ModelRc {
    fn new(model: Box<dyn ModelDescription>) -> ModelRc {
        ModelRc(Rc::new(UnsafeCell::new(model)))
    }

    pub fn get(&self) -> &Box<dyn ModelDescription> {
        unsafe { &*self.0.get() }
    }

    fn get_mut(&self) -> &mut Box<dyn ModelDescription> {
        unsafe { &mut *self.0.get() }
    }
}

impl Debug for ModelRc {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        f.debug_tuple("ModelRc").field(self.get()).finish()
    }
}

#[derive(Debug)]
struct ModelHolder {
    id: usize,
    cell: ModelRc,
}

pub struct ModelBorrow<'a, R: Model, C: ModelCollection> {
    document: &'a Document<R, C>,
    model: ModelRc,
}

pub struct ModelBorrowOwned<R: Model, C: ModelCollection> {
    document: Document<R, C>,
    model: ModelRc,
}

impl<R: Model, C: ModelCollection> ModelWithDocument<R, C> for ModelBorrowOwned<R, C> {
    fn document(&self) -> &Document<R, C> {
        &self.document
    }

    fn model(&self) -> &ModelRc {
        &self.model
    }
}

impl<'a, R: Model, C: ModelCollection> ModelWithDocument<R, C> for ModelBorrow<'a, R, C> {
    fn document(&self) -> &Document<R, C> {
        self.document
    }

    fn model(&self) -> &ModelRc {
        &self.model
    }
}

pub trait ModelWithDocument<R: Model, C: ModelCollection> {
    fn document(&self) -> &Document<R, C>;
    fn model(&self) -> &ModelRc;

    fn owned(&self) -> ModelBorrowOwned<R, C> {
        ModelBorrowOwned {
            document: Document::clone(self.document()),
            model: self.model().clone(),
        }
    }

    #[must_use = "After reseting a field a model id is returned that should be cleaned up"]
    fn reset_model_field(&mut self, field: usize) -> Option<usize> {
        self.model().get_mut().get_model_ref_mut(field)?.reset()
    }

    fn get_model_id(&self, field: usize) -> Option<usize> {
        self.model()
            .get()
            .get_model_ref(field)
            .and_then(|x| x.get())
    }

    fn value_type(&self, field: usize) -> &ValueType {
        if let Some(x) = self.model().get().get_field_description(field) {
            &x.value_type
        } else {
            panic!()
        }
    }

    fn set_model(&self, field: usize, model: Box<dyn ModelDescription>) -> Option<usize> {
        let model_ref = self.model().get_mut().get_model_ref_mut(field)?;
        Some(self.document().replace_ref(model_ref, model))
    }

    fn map_create_model(
        &self,
        field: usize,
        key: i32,
        model: Box<dyn ModelDescription>,
    ) -> Option<usize> {
        let model_ref = self.model().get_mut().create_map_field_ref(field, key)?;
        Some(self.document().replace_ref(model_ref, model))
    }

    fn map_get_model_id(&self, field: usize, key: i32) -> Option<usize> {
        let model_ref = self.model().get().get_map_field_ref(field, key)?;
        model_ref.get()
    }

    fn list_create_model(
        &self,
        field: usize,
        index: i32,
        model: Box<dyn ModelDescription>,
    ) -> Option<usize> {
        let model_ref = self
            .model()
            .get_mut()
            .get_list_field_ref_mut(field, index as usize);
        Some(self.document().replace_ref(model_ref, model))
    }

    fn list_get_model_id(&self, field: usize, index: i32) -> Option<usize> {
        self.model()
            .get_mut()
            .get_list_field_ref(field, index as usize)
            .get()
    }

    fn map_assign<B: Buf>(&self, field: usize, index: i32, buffer: &mut B) -> anyhow::Result<()> {
        let desc = self
            .model()
            .get()
            .get_field_description(field)
            .context("no field")?;
        let item = self
            .model()
            .get_mut()
            .get_map_field_mut(field, index)
            .context("key does not exist")?;
        desc.assign_value(item, buffer)?;
        Ok(())
    }

    fn list_insert<B: Buf>(&self, field: usize, index: i32, buffer: &mut B) -> anyhow::Result<()> {
        let desc = self
            .model()
            .get()
            .get_field_description(field)
            .context("no field")?;
        let item = self
            .model()
            .get_mut()
            .insert_list_field(field, index as usize);
        desc.assign_value(item, buffer)?;
        Ok(())
    }

    fn list_assign<B: Buf>(&self, field: usize, index: i32, buffer: &mut B) -> anyhow::Result<()> {
        let desc = self
            .model()
            .get()
            .get_field_description(field)
            .context("no field")?;
        let item = self
            .model()
            .get_mut()
            .get_list_field_mut(field, index as usize);
        desc.assign_value(item, buffer)?;
        Ok(())
    }

    fn list_insert_model(
        &self,
        field: usize,
        index: i32,
        model: Box<dyn ModelDescription>,
    ) -> Option<usize> {
        let model_ref = self
            .model()
            .get_mut()
            .insert_list_field_ref(field, index as usize);
        Some(self.document().replace_ref(model_ref, model))
    }

    fn resize_list(&self, field: usize, new_len: usize) {
        self.model().get_mut().resize_list_field(field, new_len);
        let desc = self.model().get().get_field_description(field).unwrap();
        if desc.autofill {
            if let FieldType::TypeModel(type_model) = &desc.field_type {
                for i in 0..new_len {
                    let _ref = self.model().get_mut().get_list_field_ref_mut(field, i);
                    if !_ref.is_set() {
                        let model = C::create_model(*type_model).boxed();
                        self.document().replace_ref(_ref, model);
                    }
                }
            }
        }
    }

    fn list_swap(&mut self, field: usize, lhs: i32, rhs: i32) {
        self.model()
            .get_mut()
            .swap_list_field(field, lhs as usize, rhs as usize);
    }

    #[must_use = "After removing a key a model id may be returned that should be cleaned up"]
    fn list_remove(&mut self, field: usize, index: i32) -> Option<usize> {
        self.model()
            .get_mut()
            .remove_list_field(field, index as usize)
            .and_then(|x| x.get())
    }

    #[must_use = "After reseting a key a model id is returned that should be cleaned up"]
    fn list_reset_model(&mut self, field: usize, index: i32) -> Option<usize> {
        self.model()
            .get_mut()
            .get_list_field_ref_mut(field, index as usize)
            .reset()
    }

    #[must_use = "After reseting a key a model id is returned that should be cleaned up"]
    fn map_reset_model(&mut self, field: usize, key: i32) -> Option<usize> {
        self.model()
            .get_mut()
            .get_map_field_ref_mut(field, key)?
            .reset()
    }

    #[must_use = "After removing a key a model id may be returned that should be cleaned up"]
    fn map_remove(&mut self, field: usize, key: i32) -> Option<usize> {
        self.model()
            .get_mut()
            .remove_map_field(field, key)
            .and_then(|x| x.get())
    }

    fn assign<B: Buf>(&mut self, index: usize, from: &mut B) -> anyhow::Result<()> {
        let model = self.model().get_mut();
        let description = model.get_field_description(index).with_context(|| {
            format!(
                "Failed to look up field {} on model {} ({})",
                index,
                model.get_model_name(),
                model.get_model_type()
            )
        })?;
        let value = model.get_field_mut(index).unwrap();
        description.assign_value(value, from)
    }

    fn reset<B: Buf>(&mut self, _: usize) -> anyhow::Result<()> {
        Ok(())
    }
}

impl<'a, R: Model, C: ModelCollection> ModelExt for ModelBorrow<'a, R, C> {
    fn assign<B: Buf>(&mut self, index: usize, from: &mut B) -> anyhow::Result<()> {
        let model = self.model.get_mut();
        let description = model.get_field_description(index).with_context(|| {
            format!(
                "Failed to look up field {} on model {} ({})",
                index,
                model.get_model_name(),
                model.get_model_type()
            )
        })?;
        let value = model.get_field_mut(index).unwrap();
        description.assign_value(value, from)
    }

    fn reset<B: Buf>(&mut self, _: usize) -> anyhow::Result<()> {
        Ok(())
    }
}

pub struct Document<R: Model, C: ModelCollection>(Rc<UnsafeCell<InnerDocument<R, C>>>);

impl<R: Model, C: ModelCollection> Clone for Document<R, C> {
    fn clone(&self) -> Self {
        Document(Rc::clone(&self.0))
    }
}

impl<R: Model, C: ModelCollection> Debug for Document<R, C> {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        f.debug_struct("Document")
            .field("inner", self.get())
            .finish()
    }
}

impl<R: Model, C: ModelCollection> Document<R, C> {
    pub fn new() -> Document<R, C> {
        Document(Rc::new(UnsafeCell::new(InnerDocument::new())))
    }

    pub fn by_id(&self, id: usize) -> Option<ModelBorrow<'_, R, C>> {
        self.get().by_id(id).map(|model| ModelBorrow {
            document: self,
            model,
        })
    }

    pub fn to_json(&self, id: usize) -> serde_json::Value {
        let item = if let Some(item) = self.by_id(id) {
            item
        } else {
            return serde_json::Value::Null;
        };

        let mut map = serde_json::Map::new();
        map.insert(
            "model_type".to_string(),
            Value::Number(item.model().get().get_model_type().into()),
        );
        map.insert(
            "model_name".to_string(),
            Value::String(item.model().get().get_model_name().to_string()),
        );
        let model = item.model.get();

        let get_json_value = |desc: &FieldDescription, value: &dyn Any| -> Value {
            match desc.field_type {
                FieldType::Int8 => value
                    .downcast_ref::<i8>()
                    .map(|x| serde_json::Value::Number((*x).into()))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::UInt8 => value
                    .downcast_ref::<u8>()
                    .map(|x| serde_json::Value::Number((*x).into()))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::Int16 => value
                    .downcast_ref::<i16>()
                    .map(|x| serde_json::Value::Number((*x).into()))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::UInt16 => value
                    .downcast_ref::<i16>()
                    .map(|x| serde_json::Value::Number((*x).into()))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::Int32 => value
                    .downcast_ref::<i32>()
                    .map(|x| serde_json::Value::Number((*x).into()))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::UInt32 => value
                    .downcast_ref::<i32>()
                    .map(|x| serde_json::Value::Number((*x).into()))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::Int64 => value
                    .downcast_ref::<i64>()
                    .map(|x| serde_json::Value::String(x.to_string()))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::UInt64 => value
                    .downcast_ref::<u64>()
                    .map(|x| serde_json::Value::String(x.to_string()))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::Int128 => value
                    .downcast_ref::<i128>()
                    .map(|x| serde_json::Value::String(x.to_string()))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::UInt128 => value
                    .downcast_ref::<i128>()
                    .map(|x| serde_json::Value::String(x.to_string()))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::Float => value
                    .downcast_ref::<f32>()
                    .and_then(|x| serde_json::to_value(x).ok())
                    .unwrap_or(serde_json::Value::Null),
                FieldType::Double => value
                    .downcast_ref::<f64>()
                    .and_then(|x| serde_json::to_value(x).ok())
                    .unwrap_or(serde_json::Value::Null),
                FieldType::String => value
                    .downcast_ref::<String>()
                    .map(|x| serde_json::Value::String(x.clone()))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::Boolean => value
                    .downcast_ref::<bool>()
                    .map(|x| serde_json::Value::Bool(*x))
                    .unwrap_or(serde_json::Value::Null),
                FieldType::Model | FieldType::TypeModel(_) => model
                    .get_model_ref(desc.index)
                    .and_then(|x| x.get())
                    .map(|x| self.to_json(x))
                    .unwrap_or(serde_json::Value::Null),
            }
        };

        for field in model.get_fields() {
            let field_value = model.get_field(field.index);
            let field_value = if let Some(field_value) = field_value {
                field_value
            } else {
                map.insert(field.field_name.to_string(), serde_json::Value::Null);
                continue;
            };

            let json_value = match field.value_type {
                ValueType::Value => get_json_value(&field, field_value),
                ValueType::Map { .. } => {
                    let mut object = Map::new();
                    for key in model.get_map_keys(field.index) {
                        let value = match field.field_type {
                            FieldType::Model | FieldType::TypeModel(_) => model
                                .get_map_field_ref(field.index, key)
                                .and_then(|x| x.get())
                                .map(|x| self.to_json(x))
                                .unwrap_or(serde_json::Value::Null),
                            _ => model
                                .get_map_field(field.index, key)
                                .map_or(Value::Null, |x| get_json_value(&field, x)),
                        };
                        object.insert(key.to_string(), value);
                    }

                    Value::Object(object)
                }
                ValueType::List => {
                    let mut list = vec![];
                    for i in 0..model.get_list_len(field.index) {
                        let value = match field.field_type {
                            FieldType::Model | FieldType::TypeModel(_) => model
                                .get_list_field_ref(field.index, i)
                                .get()
                                .map(|x| self.to_json(x))
                                .unwrap_or(serde_json::Value::Null),
                            _ => get_json_value(&field, model.get_list_field(field.index, i)),
                        };
                        list.push(value)
                    }

                    Value::Array(list)
                }
            };

            map.insert(field.field_name.to_string(), json_value);
        }

        Value::Object(map)
    }

    pub fn remove(&self, id: usize) {
        self.get_mut().remove(id)
    }

    pub fn root(&self) -> ModelBorrow<'_, R, C> {
        self.by_id(0).unwrap()
    }

    fn get(&self) -> &InnerDocument<R, C> {
        unsafe { &*self.0.get() }
    }

    fn get_mut(&self) -> &mut InnerDocument<R, C> {
        unsafe { &mut *self.0.get() }
    }

    fn replace_ref(&self, _ref: &mut Ref, model: Box<dyn ModelDescription>) -> usize {
        let id = self.get_mut().register(model);
        if let Some(old_id) = _ref.set(id) {
            self.remove(old_id);
        }

        id
    }
}

#[derive(Debug)]
struct ItemStore<T> {
    items: Vec<Option<T>>,
    free: VecDeque<usize>,
}

impl<T> Default for ItemStore<T> {
    fn default() -> Self {
        ItemStore {
            items: Vec::with_capacity(100_000),
            free: VecDeque::with_capacity(10_000),
        }
    }
}

impl<T> ItemStore<T> {
    pub fn insert(&mut self, item: T) -> usize {
        if let Some(id) = self.free.pop_front() {
            self.items[id] = Some(item);
            return id;
        }

        self.items.push(Some(item));
        self.items.len() - 1
    }

    pub fn remove(&mut self, index: usize) -> Option<T> {
        if index >= self.items.len() {
            None
        } else {
            if let Some(x) = self.items[index].take() {
                self.free.push_back(index);
                Some(x)
            } else {
                None
            }
        }
    }

    pub fn get(&self, index: usize) -> Option<&T> {
        if index >= self.items.len() {
            None
        } else {
            self.items[index].as_ref()
        }
    }

    pub fn get_mut(&mut self, index: usize) -> Option<&mut T> {
        if index >= self.items.len() {
            None
        } else {
            self.items[index].as_mut()
        }
    }
}

#[derive(Debug)]
struct InnerDocument<R: Model, C: ModelCollection> {
    id: usize,
    models: ItemStore<ModelHolder>,
    root: ModelRef<R>,
    _pb: PhantomData<C>,
}

impl<R: Model, C: ModelCollection> InnerDocument<R, C> {
    pub fn new() -> InnerDocument<R, C> {
        let mut inner = InnerDocument {
            id: 0,
            models: Default::default(),
            root: ModelRef::empty(),
            _pb: Default::default(),
        };

        let model = C::create_model(R::model_type()).boxed();
        let id = inner.register(model);
        inner.root = ModelRef::from_id(id);
        inner
    }

    pub fn register(&mut self, model: Box<dyn ModelDescription>) -> usize {
        let holder = ModelHolder {
            id: 0,
            cell: ModelRc::new(model),
        };

        let id = self.models.insert(holder);
        self.models.get_mut(id).unwrap().id = id;

        id
    }

    pub fn by_id(&self, id: usize) -> Option<ModelRc> {
        self.models.get(id).map(|x| x.cell.clone())
    }

    pub fn remove(&mut self, id: usize) {
        self.models.remove(id);
    }
}
