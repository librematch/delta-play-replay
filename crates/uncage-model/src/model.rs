use crate::Ref;
use anyhow::Context;
use bytes::Buf;
use std::any::Any;
use std::fmt::Debug;
pub use uncage_model_proc_macro::Model;

pub trait ModelCollection: Debug {
    fn create_model(id: usize) -> Self;
    fn has_model(id: usize) -> bool;
    fn boxed(self) -> Box<dyn ModelDescription>;
}

pub trait ModelDescription: Debug + Any + 'static {
    fn as_any(&self) -> &dyn Any;

    fn get_parent(&self) -> Option<&dyn ModelDescription>;

    fn get_model_type(&self) -> usize;
    fn get_model_name(&self) -> &'static str;
    fn get_fields(&self) -> Vec<FieldDescription>;

    fn get_field_description(&self, field: usize) -> Option<&'static FieldDescription>;
    fn get_field(&self, field: usize) -> Option<&dyn Any>;
    fn get_field_mut(&mut self, field: usize) -> Option<&mut dyn Any>;

    fn get_model_ref(&self, field: usize) -> Option<&Ref>;
    fn get_model_ref_mut(&mut self, field: usize) -> Option<&mut Ref>;

    fn get_map_keys(&self, field: usize) -> Vec<i32>;
    fn create_map_field(&mut self, field: usize, key: i32) -> Option<&mut dyn Any>;
    fn create_map_field_ref(&mut self, field: usize, key: i32) -> Option<&mut Ref>;
    fn get_map_field_ref(&self, field: usize, key: i32) -> Option<&Ref>;
    fn get_map_field_ref_mut(&mut self, field: usize, key: i32) -> Option<&mut Ref>;
    fn get_map_field(&self, field: usize, key: i32) -> Option<&dyn Any>;
    fn get_map_field_mut(&mut self, field: usize, key: i32) -> Option<&mut dyn Any>;
    fn remove_map_field(&mut self, field: usize, key: i32) -> Option<Ref>;
    fn swap_map_field(&mut self, field: usize, lhs: i32, rhs: i32);

    fn get_list_len(&self, field: usize) -> usize;
    fn resize_list_field(&mut self, field: usize, new_len: usize);
    fn remove_list_field(&mut self, field: usize, index: usize) -> Option<Ref>;
    fn swap_list_field(&mut self, field: usize, lhs: usize, rhs: usize);

    fn get_list_field(&self, field: usize, index: usize) -> &dyn Any;
    fn get_list_field_mut(&mut self, field: usize, index: usize) -> &mut dyn Any;
    fn insert_list_field(&mut self, field: usize, index: usize) -> &mut dyn Any;

    fn get_list_field_ref(&self, field: usize, index: usize) -> &Ref;
    fn get_list_field_ref_mut(&mut self, field: usize, index: usize) -> &mut Ref;
    fn insert_list_field_ref(&mut self, field: usize, index: usize) -> &mut Ref;
}

impl dyn ModelDescription {
    pub fn downcast_ref<T: Model>(&self) -> Option<&T> {
        self.as_any().downcast_ref::<T>()
    }

    pub fn cast_ref<T: Model>(&self) -> Option<&T> {
        self.as_any()
            .downcast_ref::<T>()
            .or_else(|| self.get_parent().and_then(|x| x.cast_ref::<T>()))
    }

    pub fn is<T: Model>(&self) -> bool {
        self.as_any().is::<T>()
    }

    pub fn has<T: Model>(&self) -> bool {
        if self.as_any().is::<T>() {
            return true;
        }

        self.get_parent().map(|x| x.has::<T>()).unwrap_or(false)
    }
}

pub trait ModelExt: Sized {
    fn assign<B: Buf>(&mut self, index: usize, from: &mut B) -> anyhow::Result<()>;
    fn reset<B: Buf>(&mut self, index: usize) -> anyhow::Result<()>;
}

#[derive(Copy, Clone, Debug, Eq, PartialEq)]
pub enum ValueType {
    Value,
    Map { key: FieldType },
    List,
}

#[derive(Copy, Clone, Debug)]
pub struct FieldDescription {
    pub value_type: ValueType,
    pub field_type: FieldType,
    pub index: usize,
    pub model_type: usize,
    pub model_name: &'static str,
    pub field_name: &'static str,
    pub autofill: bool,
}

pub trait Fields {
    fn field(&self) -> usize;
    fn model(&self) -> usize;
}

impl FieldDescription {
    pub fn field_type(&self) -> &FieldType {
        &self.field_type
    }

    pub fn value_type(&self) -> &ValueType {
        &self.value_type
    }

    pub fn assign_value<B: Buf>(&self, target: &mut dyn Any, from: &mut B) -> anyhow::Result<()> {
        self.field_type.read(target, from).with_context(|| {
            format!(
                "Can't assign field {} (index {}) on model {} (type {})",
                self.field_name, self.index, self.model_name, self.model_type
            )
        })
    }
}

#[derive(Debug, Copy, Clone, Eq, PartialEq)]
pub enum FieldType {
    Int8,
    UInt8,
    Int16,
    UInt16,
    Int32,
    UInt32,
    Int64,
    UInt64,
    Int128,
    UInt128,
    Float,
    Double,
    String,
    Boolean,
    Model,
    TypeModel(usize),
}

impl FieldType {
    pub fn create<B: Buf>(&self, from: &mut B) -> Box<dyn Any> {
        match self {
            FieldType::Int8 => Box::new(from.get_i8()),
            FieldType::UInt8 => Box::new(from.get_u8()),
            FieldType::Int16 => Box::new(from.get_i16_le()),
            FieldType::UInt16 => Box::new(from.get_u16_le()),
            FieldType::Int32 => Box::new(from.get_i32_le()),
            FieldType::UInt32 => Box::new(from.get_u32_le()),
            FieldType::Int64 => Box::new(from.get_i64_le()),
            FieldType::UInt64 => Box::new(from.get_u64_le()),
            FieldType::Int128 => Box::new(from.get_i128_le()),
            FieldType::UInt128 => Box::new(from.get_u128_le()),
            FieldType::Float => Box::new(from.get_f32_le()),
            FieldType::Double => Box::new(from.get_f64_le()),
            FieldType::String => {
                let length = from.get_i32_le() as usize;
                let mut str_b = vec![0; length];
                from.copy_to_slice(&mut str_b);
                Box::new(String::from_utf8(str_b).unwrap())
            }
            FieldType::Boolean => Box::new(from.get_u8() != 0),

            _ => Box::new(()),
        }
    }

    pub fn read<B: Buf>(&self, target: &mut dyn Any, from: &mut B) -> anyhow::Result<()> {
        match self {
            FieldType::Int8 => {
                if let Some(target) = target.downcast_mut::<i8>() {
                    *target = from.get_i8();
                    return Ok(());
                }
            }

            FieldType::UInt8 => {
                if let Some(target) = target.downcast_mut::<u8>() {
                    *target = from.get_u8();
                    return Ok(());
                }
            }
            FieldType::Int16 => {
                if let Some(target) = target.downcast_mut::<i16>() {
                    *target = from.get_i16_le();
                    return Ok(());
                }
            }
            FieldType::UInt16 => {
                if let Some(target) = target.downcast_mut::<u16>() {
                    *target = from.get_u16_le();
                    return Ok(());
                }
            }
            FieldType::Int32 => {
                if let Some(target) = target.downcast_mut::<i32>() {
                    *target = from.get_i32_le();
                    return Ok(());
                }
            }
            FieldType::UInt32 => {
                if let Some(target) = target.downcast_mut::<u32>() {
                    *target = from.get_u32_le();
                    return Ok(());
                }
            }
            FieldType::Int64 => {
                if let Some(target) = target.downcast_mut::<i64>() {
                    *target = from.get_i64_le();
                    return Ok(());
                }
            }
            FieldType::UInt64 => {
                if let Some(target) = target.downcast_mut::<u64>() {
                    *target = from.get_u64_le();
                    return Ok(());
                }
            }
            FieldType::Int128 => {
                if let Some(target) = target.downcast_mut::<i128>() {
                    *target = from.get_i128_le();
                    return Ok(());
                }
            }
            FieldType::UInt128 => {
                if let Some(target) = target.downcast_mut::<u128>() {
                    *target = from.get_u128_le();
                    return Ok(());
                }
            }
            FieldType::Float => {
                if let Some(target) = target.downcast_mut::<f32>() {
                    *target = from.get_f32_le();
                    return Ok(());
                }
            }
            FieldType::Double => {
                if let Some(target) = target.downcast_mut::<f64>() {
                    *target = from.get_f64_le();
                    return Ok(());
                }
            }
            FieldType::String => {
                if let Some(target) = target.downcast_mut::<String>() {
                    let length = from.get_i32_le() as usize;
                    let mut str_b = vec![0; length];
                    from.copy_to_slice(&mut str_b);
                    *target = String::from_utf8(str_b)?;
                    return Ok(());
                }
            }
            FieldType::Boolean => {
                if let Some(target) = target.downcast_mut::<bool>() {
                    *target = from.get_u8() != 0;
                    return Ok(());
                }
            }

            _ => {}
        };

        anyhow::bail!("No way to read field type {:?}", self)
    }
}

pub trait Model: Debug + Default + ModelDescription + Any {
    fn model_type() -> usize;
    fn model_name() -> &'static str;
}

#[cfg(test)]
mod tests {
    use crate::{
        FieldDescription, FieldType, Model, ModelBTreeMap, ModelDescription, ModelExt, ModelRef,
        ModelVec, Ref, ValueType,
    };
    use bytes::Bytes;
    use std::any::Any;
    use std::collections::{BTreeMap, HashMap};

    #[test]
    pub fn test_works() {
        #[derive(Debug, Default, Model)]
        #[uncage(type = 4)]
        struct Game {
            #[uncage(index = 0)]
            name: String,
        }

        let mut new_bytes = Bytes::from_static(&[5, 0, 0, 0, b'G', b'a', b'm', b'e', b'r']);
        let mut game = Game::default();
        assert_eq!(game.name, "");
        game.assign(0, &mut new_bytes)
            .expect("Failed to read assignment");
        assert_eq!(game.name, "Gamer");
    }
}
