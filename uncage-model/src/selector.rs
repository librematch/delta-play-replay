use crate::{FieldType, Fields, Model, Path, PathAction};

#[derive(Debug, Clone)]
pub struct Selector {
    chain: Vec<Filter>,
}

impl Selector {
    pub fn new() -> Selector {
        Self {
            chain: Vec::with_capacity(5),
        }
    }

    pub fn add_filter(mut self, filter: Filter) -> Selector {
        self.chain.push(filter);
        self
    }

    pub fn root(self) -> Selector {
        self.add_filter(Filter::Root)
    }

    pub fn tail(self) -> Selector {
        self.add_filter(Filter::Tail)
    }

    pub fn field<F: Fields>(self, field: F) -> Selector {
        self.add_filter(Filter::Field {
            model: field.model(),
            field: field.field(),
        })
    }

    pub fn model<M: Model>(self) -> Selector {
        self.add_filter(Filter::Model(M::model_type()))
    }

    pub fn created(self) -> Selector {
        self.add_filter(Filter::Action(ActionFilter::Created))
    }

    pub fn mutated(self) -> Selector {
        self.add_filter(Filter::Action(ActionFilter::Mutated))
    }

    pub fn removed(self) -> Selector {
        self.add_filter(Filter::Action(ActionFilter::Removed))
    }

    pub fn matches(&self, path: &Path) -> bool {
        let mut idx = 0;
        'chain: for filter in &self.chain {
            while idx < path.items.len() {
                let (m, new_idx) = filter.matches(idx, path);
                if m {
                    idx = new_idx;
                    continue 'chain;
                }

                idx += 1;
            }

            return false;
        }

        true
    }
}

#[derive(Debug, Clone)]
pub enum Filter {
    Root,
    Tail,
    Field { model: usize, field: usize },
    Model(usize),
    Action(ActionFilter),
}

impl Filter {
    pub fn matches(&self, idx: usize, path: &Path) -> (bool, usize) {
        match self {
            Filter::Root => (idx == 0, idx),
            Filter::Tail => (path.items.len() == idx + 1, idx),
            Filter::Field { model, field } => {
                let fd = path.items[idx].field;
                (fd.index == *field && fd.model_type == *model, idx)
            }
            Filter::Model(m) => (
                path.items[idx].field.field_type == FieldType::TypeModel(*m),
                idx,
            ),
            Filter::Action(a) => (
                matches!(
                    (a, path.items[idx].action),
                    (ActionFilter::Created, PathAction::Created)
                        | (ActionFilter::Mutated, PathAction::Mutated)
                        | (ActionFilter::Removed, PathAction::Removed)
                ),
                idx,
            ),
        }
    }
}

#[derive(Copy, Debug, Clone)]
pub enum ActionFilter {
    Created,
    Mutated,
    Removed,
}

#[derive(Debug, Default, Clone)]
pub struct SelectorCollection {
    selectors: Vec<(Selector, usize)>,
}

impl SelectorCollection {
    pub fn new() -> SelectorCollection {
        Self { selectors: vec![] }
    }

    pub fn add_selector(&mut self, key: usize, selector: Selector) {
        self.selectors.push((selector, key));
    }

    pub fn matches(&mut self, path: &Path) -> Vec<usize> {
        let mut keys = vec![];
        for (selector, key) in &self.selectors {
            if selector.matches(path) {
                keys.push(*key)
            }
        }

        keys
    }
}
