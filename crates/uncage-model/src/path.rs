use crate::FieldDescription;

#[derive(Clone, Debug)]
pub struct Path {
    pub(crate) items: Vec<PathSegment>,
}

impl Path {
    pub fn new() -> Path {
        Path {
            items: Vec::with_capacity(5),
        }
    }

    pub fn goto_parent(&mut self) {
        let _ = self.items.pop();
    }

    pub fn goto_child(&mut self, child: PathSegment) {
        self.items.push(child);
    }

    pub fn goto_field(&mut self, model_type: usize, field: &'static FieldDescription) {
        self.items.push(PathSegment::field(model_type, field));
    }

    pub fn goto_map_field(
        &mut self,
        model_type: usize,
        field: &'static FieldDescription,
        key: i32,
    ) {
        self.items
            .push(PathSegment::map_field(model_type, field, key));
    }

    pub fn goto_list_field(
        &mut self,
        model_type: usize,
        field: &'static FieldDescription,
        index: usize,
    ) {
        self.items
            .push(PathSegment::list_field(model_type, field, index));
    }

    pub fn set_action(&mut self, action: PathAction) {
        if let Some(x) = self.items.last_mut() {
            x.action = action
        }
    }
}

#[derive(Copy, Clone, Debug)]
pub struct PathSegment {
    pub(crate) model_type: usize,
    pub(crate) field: &'static FieldDescription,
    pub(crate) sub: PathSubSegment,
    pub(crate) action: PathAction,
}

impl PathSegment {
    pub fn field(model_type: usize, field: &'static FieldDescription) -> PathSegment {
        PathSegment {
            model_type,
            field,
            sub: PathSubSegment::None,
            action: PathAction::None,
        }
    }

    pub fn map_field(model_type: usize, field: &'static FieldDescription, key: i32) -> PathSegment {
        PathSegment {
            model_type,
            field,
            sub: PathSubSegment::Key(key),
            action: PathAction::None,
        }
    }

    pub fn list_field(
        model_type: usize,
        field: &'static FieldDescription,
        index: usize,
    ) -> PathSegment {
        PathSegment {
            model_type,
            field,
            sub: PathSubSegment::Index(index),
            action: PathAction::None,
        }
    }
}

#[derive(Copy, Clone, Debug)]
pub enum PathSubSegment {
    None,
    Key(i32),
    Index(usize),
}

#[derive(Copy, Clone, Debug)]
pub enum PathAction {
    None,
    Created,
    Removed,
    Mutated,
}
