use std::collections::BTreeMap;
use std::fmt::Debug;
use std::io;
use std::io::Read;
use std::marker::PhantomData;

pub use uncage_model_proc_macro::*;

pub trait Model: Debug {
    fn model_type(&self) -> usize;

    fn get_child_models(&self) -> &'static [usize];
    fn create_child_model(&self, index: usize) -> Box<dyn Model>;
    fn update_child_model(&mut self, index: usize, id: usize);

    fn update_value(
        &mut self,
        index: usize,
        reader: &mut Box<dyn Read>,
    ) -> io::Result<(usize, Option<ModelId>)>;
}

impl Model for () {
    fn model_type(&self) -> usize {
        usize::MAX
    }

    fn get_child_models(&self) -> &'static [usize] {
        &[]
    }

    fn create_child_model(&self, _: usize) -> Box<dyn Model> {
        unimplemented!()
    }

    fn update_child_model(&mut self, _: usize, _: usize) {
        unimplemented!()
    }

    fn update_value(
        &mut self,
        _: usize,
        _: &mut Box<dyn Read>,
    ) -> io::Result<(usize, Option<ModelId>)> {
        unimplemented!()
    }
}

#[derive(Debug, Clone, Copy)]
pub struct ModelRef<T: Model> {
    id: usize,
    initialized: bool,
    _pd: PhantomData<T>,
}

impl<T: Model> ModelRef<T> {
    pub fn set_instantiated(&mut self, id: usize) {
        self.id = id;
        self.initialized = true;
    }

    pub fn id(&self) -> ModelId {
        ModelId(self.id)
    }
}

#[derive(Debug, Clone, Copy)]
pub struct ModelId(usize);

impl<T: Model> Default for ModelRef<T> {
    fn default() -> Self {
        ModelRef {
            id: 0,
            initialized: false,
            _pd: Default::default(),
        }
    }
}

#[derive(Debug, Clone, Default)]
pub struct ModelMap<T: Model> {
    _pd: PhantomData<T>,
}

#[derive(Debug, Clone, Default)]
pub struct ModelVec<T: Model> {
    _pd: PhantomData<T>,
}

#[derive(Debug, Clone, Default)]
pub struct ModelOption<T: Model> {
    _pd: PhantomData<T>,
}

#[derive(Debug)]
pub struct ModelHolder {
    id: usize,
    initialized: bool,
    value: Box<dyn Model>,
}

impl ModelHolder {
    pub fn new<T: 'static + Model>(model: T) -> ModelHolder {
        ModelHolder {
            id: 0,
            initialized: false,
            value: Box::new(model),
        }
    }

    pub fn get_ref<T: Model>(&self) -> ModelRef<T> {
        ModelRef {
            id: self.id,
            initialized: true,
            _pd: Default::default(),
        }
    }
}

#[derive(Debug)]
pub struct Document<T: Model> {
    id: usize,
    models: BTreeMap<usize, ModelHolder>,
    root: ModelRef<T>,
}

impl<T: 'static + Model + Default> Document<T> {
    pub fn new() -> Document<T> {
        let root = T::default();
        let mut map = BTreeMap::new();
        let holder = ModelHolder::new(root);
        let root = holder.get_ref();
        map.insert(root.id, holder);
        let root_id = root.id;

        let mut doc = Document {
            id: 1,
            models: map,
            root,
        };

        doc.initialize_references(root_id);

        doc
    }

    fn initialize_references(&mut self, id: usize) {
        let root = self.models.get_mut(&id).expect("Can't find root");
        let mut id = self.id;
        let mut new_models = vec![];
        let mut new_model_ids = vec![];
        for child in root.value.get_child_models() {
            let model = root.value.create_child_model(*child);
            root.value.update_child_model(*child, id);
            new_models.push((id, model));
            new_model_ids.push(id);
            id += 1;
        }

        root.initialized = true;

        for (id, value) in new_models {
            self.models.insert(
                id,
                ModelHolder {
                    id,
                    initialized: false,
                    value,
                },
            );
        }

        self.id = id;

        for id in new_model_ids {
            self.initialize_references(id);
        }
    }
}

pub trait ReadValue {
    fn read_value(&mut self, reader: &mut Box<dyn Read>) -> io::Result<usize>;
}

impl ReadValue for () {
    fn read_value(&mut self, _: &mut Box<dyn Read>) -> io::Result<usize> {
        Ok(0)
    }
}

impl ReadValue for String {
    fn read_value(&mut self, reader: &mut Box<dyn Read>) -> io::Result<usize> {
        let mut length = [0; 4];
        reader.read_exact(&mut length)?;
        let length = u32::from_le_bytes(length) as usize;
        let mut bytes = vec![0; length];
        reader.read_exact(&mut bytes)?;
        *self = String::from_utf8(bytes).map_err(|e| io::Error::new(io::ErrorKind::Other, e))?;
        Ok(length + 4)
    }
}

macro_rules! make_read_value {
    ($ty:ty, $length:expr) => {
        impl ReadValue for $ty {
            fn read_value(&mut self, reader: &mut Box<dyn Read>) -> io::Result<usize> {
                let mut data = [0; $length];
                reader.read_exact(&mut data)?;
                *self = <$ty>::from_le_bytes(data);
                Ok($length)
            }
        }
    };
}

make_read_value!(f32, 4);
make_read_value!(f64, 8);
make_read_value!(i16, 2);
make_read_value!(u16, 2);
make_read_value!(i32, 4);
make_read_value!(u32, 4);
make_read_value!(i64, 8);
make_read_value!(u64, 8);
