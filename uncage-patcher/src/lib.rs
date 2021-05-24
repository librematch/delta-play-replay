mod model;

#[cfg(test)]
mod tests {
    use crate::model;
    use uncage_model::Document;

    #[test]
    fn it_works() {
        let doc: Document<model::Root> = Document::new();
    }
}
