use crate::Model;
use std::collections::{BTreeMap, HashMap};
use std::marker::PhantomData;

pub trait Reference {
    fn empty() -> Self;
    fn from_id(id: usize) -> Self;

    fn accepts_type(&self, model_type: usize) -> bool {
        let _ = model_type;
        true
    }

    fn get(&self) -> Option<usize>;
    fn is_set(&self) -> bool;

    #[must_use = "Old value should be removed from Document"]
    fn set(&mut self, id: usize) -> Option<usize>;
    #[must_use = "Old value should be removed from Document"]
    fn reset(&mut self) -> Option<usize>;

    fn into_ref(self) -> Ref;
    fn as_ref(&self) -> &Ref;
    fn as_ref_mut(&mut self) -> &mut Ref;
}

#[derive(Debug, Default)]
pub struct Ref(Option<usize>);

impl Reference for Ref {
    fn empty() -> Self {
        Ref(None)
    }

    fn from_id(id: usize) -> Self {
        Ref(Some(id))
    }

    fn get(&self) -> Option<usize> {
        self.0
    }

    fn is_set(&self) -> bool {
        self.0.is_some()
    }

    fn set(&mut self, id: usize) -> Option<usize> {
        self.0.replace(id)
    }

    fn reset(&mut self) -> Option<usize> {
        self.0.take()
    }

    fn into_ref(self) -> Ref {
        self
    }

    fn as_ref(&self) -> &Ref {
        self
    }

    fn as_ref_mut(&mut self) -> &mut Ref {
        self
    }
}

#[derive(Debug, Default)]
pub struct ModelRef<T: Model> {
    inner: Ref,
    _pd: PhantomData<T>,
}

impl<T: Model> Reference for ModelRef<T> {
    fn empty() -> Self {
        ModelRef {
            inner: Ref::empty(),
            _pd: PhantomData::default(),
        }
    }

    fn from_id(id: usize) -> Self {
        ModelRef {
            inner: Ref::from_id(id),
            _pd: PhantomData::default(),
        }
    }

    fn accepts_type(&self, model_type: usize) -> bool {
        model_type == T::model_type()
    }

    fn get(&self) -> Option<usize> {
        self.inner.get()
    }

    fn is_set(&self) -> bool {
        self.inner.is_set()
    }

    fn set(&mut self, id: usize) -> Option<usize> {
        self.inner.set(id)
    }

    fn reset(&mut self) -> Option<usize> {
        self.inner.reset()
    }

    fn into_ref(self) -> Ref {
        self.inner
    }

    fn as_ref(&self) -> &Ref {
        &self.inner
    }

    fn as_ref_mut(&mut self) -> &mut Ref {
        &mut self.inner
    }
}

pub type ModelBTreeMap<K, V> = BTreeMap<K, ModelRef<V>>;
pub type ModelHashMap<K, V> = HashMap<K, ModelRef<V>>;
pub type ModelVec<T> = Vec<ModelRef<T>>;
