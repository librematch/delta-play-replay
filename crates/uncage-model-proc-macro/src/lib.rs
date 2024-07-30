use darling::{FromDeriveInput, FromField};
use heck::{CamelCase, ShoutySnakeCase};
use proc_macro::TokenStream;
use proc_macro2::Ident;
use syn::{parse_macro_input, AngleBracketedGenericArguments, PathArguments, Type};
use syn::{DeriveInput, GenericArgument};

#[proc_macro_derive(Model, attributes(uncage))]
pub fn derive_model(token_stream: TokenStream) -> TokenStream {
    let ast = parse_macro_input!(token_stream as DeriveInput);
    let model_ident = &ast.ident;
    let config: StructConfig = StructConfig::from_derive_input(&ast)
        .map_err(|err| format!("{}", err))
        .expect("Failed to parse attributes for struct");

    let model_type = config.model_type;
    let model_name = model_ident.to_string();

    let data = config
        .data
        .take_struct()
        .expect("A model should be a struct");

    let field_len = data.len();

    let mut field_definitions: Vec<proc_macro2::TokenStream> = vec![];
    let mut fields: Vec<Ident> = vec![];
    let mut indexes: Vec<usize> = vec![];
    let mut field_indexes = vec![];
    let mut i = 0;

    let mut extension_field_ident = None;
    let mut extension_field_model = None;

    let mut reference_fields = vec![];
    let mut reference_indexes = vec![];

    let mut map_fields = vec![];
    let mut map_indexes = vec![];
    let mut map_keys = vec![];

    let mut ref_map_fields = vec![];
    let mut ref_map_indexes = vec![];
    let mut ref_map_keys = vec![];

    let mut map_remove = vec![];

    let mut list_fields = vec![];
    let mut list_indexes = vec![];

    let mut ref_list_fields = vec![];
    let mut ref_list_indexes = vec![];

    let mut list_remove = vec![];

    let model_fields_enum_str = model_name.to_string() + "Fields";
    let model_fields_enum = syn::Ident::new(&model_fields_enum_str, proc_macro2::Span::call_site());
    let mut model_fields_enum_names = vec![];

    let mut has_fields = false;
    for field in data {
        if field.extends {
            extension_field_ident = Some(field.ident.as_ref().unwrap().clone());
            extension_field_model = Some(field.ty);
            continue;
        }

        has_fields = true;

        let field_ident = field.ident.as_ref().unwrap();
        let field_name = field_ident.to_string();
        let field_name = field_name.replace("r#", "");

        let field_type_ident =
            syn::Ident::new(&field_name.to_camel_case(), proc_macro2::Span::call_site());

        let field_index = field.index;
        let field_autofill = field.autofill;
        let field_local_type = LocalType::parse(&field.ty);
        let field_field_type = get_field_type(&field_local_type);
        let field_value_type = match &field_local_type {
            LocalType::Map { key, .. } => {
                let key_type = get_field_type(&key);
                quote::quote! { ::uncage_model::ValueType::Map { key: #key_type } }
            }
            LocalType::Vector { .. } => quote::quote! { ::uncage_model::ValueType::List },
            _ => quote::quote! { ::uncage_model::ValueType::Value },
        };

        field_definitions.push(quote::quote! {
            ::uncage_model::FieldDescription {
                value_type: #field_value_type,
                field_type: #field_field_type,
                index: #field_index,
                model_type: #model_ident::const_model_type(),
                model_name: #model_ident::const_model_name(),
                field_name: #field_name,
                autofill: #field_autofill,
            }
        });

        model_fields_enum_names.push(field_type_ident);

        indexes.push(i);
        field_indexes.push(field.index);
        fields.push(field_ident.clone());

        if let LocalType::Reference { .. } = &field_local_type {
            reference_fields.push(field_ident.clone());
            reference_indexes.push(field.index);
        }

        if let LocalType::Map { key, is_model, .. } = &field_local_type {
            map_fields.push(field_ident.clone());
            map_indexes.push(field.index);
            map_keys.push(key.ident().clone());

            if *is_model {
                ref_map_fields.push(field_ident.clone());
                ref_map_indexes.push(field.index);
                ref_map_keys.push(key.ident().clone());

                map_remove.push(quote::quote! {
                    self.#field_ident.remove(&key).map(|x| x.into_ref())
                });
            } else {
                map_remove.push(quote::quote! {
                    {
                        self.#field_ident.remove(&key);
                        None
                    }
                });
            }
        }

        if let LocalType::Vector { is_model, .. } = &field_local_type {
            list_fields.push(field_ident.clone());
            list_indexes.push(field.index);

            if *is_model {
                ref_list_fields.push(field_ident.clone());
                ref_list_indexes.push(field.index);

                list_remove.push(quote::quote! {
                    Some(self.#field_ident.remove(index).into_ref())
                });
            } else {
                list_remove.push(quote::quote! {
                    {
                        self.#field_ident.remove(index);
                        None
                    }
                });
            }
        }

        i += 1;
    }
    let model_fields_const_name = model_name.to_string().to_shouty_snake_case() + "_FIELDS";
    let model_fields_const_ident =
        syn::Ident::new(&model_fields_const_name, proc_macro2::Span::call_site());

    let model_get_fields = if let Some(extension) = &extension_field_model {
        let extension_fields = LocalType::parse(extension)
            .ident()
            .to_string()
            .to_shouty_snake_case()
            + "_FIELDS";
        let extension_fields_ident =
            syn::Ident::new(&extension_fields, proc_macro2::Span::call_site());

        quote::quote! {
            [&#extension_fields_ident[..], &#model_fields_const_ident[..]].concat()
        }
    } else {
        quote::quote! {
            #model_fields_const_ident.to_vec()
        }
    };

    let get_field_desc = if let Some(extension) = &extension_field_ident {
        quote::quote! {
            field => self.#extension.get_field_description(field)
        }
    } else {
        quote::quote! {
            _ => None
        }
    };

    let get_field_val = if let Some(extension) = &extension_field_ident {
        quote::quote! {
            field => self.#extension.get_field(field)
        }
    } else {
        quote::quote! {
            _ => None
        }
    };

    let get_field_mut_val = if let Some(extension) = &extension_field_ident {
        quote::quote! {
            field => self.#extension.get_field_mut(field)
        }
    } else {
        quote::quote! {
            _ => None
        }
    };

    let fields_len = if let Some(model) = &extension_field_model {
        quote::quote! {
            #model::fields_len() + #field_len
        }
    } else {
        quote::quote! {
            #field_len
        }
    };

    let get_ref_val = if let Some(extension) = &extension_field_ident {
        quote::quote! {
            field => self.#extension.get_model_ref(field)
        }
    } else {
        quote::quote! {
            _ => None
        }
    };

    let get_ref_val_mut = if let Some(extension) = &extension_field_ident {
        quote::quote! {
            field => self.#extension.get_model_ref_mut(field)
        }
    } else {
        quote::quote! {
            _ => None
        }
    };

    let fallthrough_to_extension =
        |function: &str, error: &str, args: &[&str]| -> proc_macro2::TokenStream {
            let args = args
                .iter()
                .map(|x| syn::Ident::new(x, proc_macro2::Span::call_site()))
                .collect::<Vec<_>>();
            let field = syn::Ident::new(function, proc_macro2::Span::call_site());

            if let Some(extension) = &extension_field_ident {
                quote::quote! {
                    field => self.#extension.#field(#(#args),*)
                }
            } else {
                quote::quote! {
                    _ => panic!(#error, field)
                }
            }
        };

    // let create_map_field = if let Some(extension) = &extension_field_ident {
    //     quote::quote! {
    //         index => self.#extension.create_map_field(index, key)
    //     }
    // } else {
    //     quote::quote! {
    //         _ => panic!("No map on field {}", index)
    //     }
    // };

    let get_map_keys = fallthrough_to_extension("get_map_keys", "No map on field {}", &["field"]);
    let create_map_field =
        fallthrough_to_extension("create_map_field", "No map on field {}", &["field", "key"]);
    let get_map_field_ref =
        fallthrough_to_extension("get_map_field_ref", "No map on field {}", &["field", "key"]);
    let get_map_field_ref_mut = fallthrough_to_extension(
        "get_map_field_ref_mut",
        "No map on field {}",
        &["field", "key"],
    );

    let get_map_field =
        fallthrough_to_extension("get_map_field", "No map on field {}", &["field", "key"]);
    let get_map_field_mut =
        fallthrough_to_extension("get_map_field_mut", "No map on field {}", &["field", "key"]);

    let swap_map_field = fallthrough_to_extension(
        "swap_map_field",
        "No map on field {}",
        &["field", "lhs", "rhs"],
    );
    let remove_map_field =
        fallthrough_to_extension("remove_map_field", "No map on field {}", &["field", "key"]);

    let create_map_field_ref = if let Some(extension) = &extension_field_ident {
        quote::quote! {
            field => self.#extension.create_map_field_ref(field, key)
        }
    } else {
        quote::quote! {
            _ => panic!("No map on field {}", field)
        }
    };

    let get_list_len = fallthrough_to_extension("get_list_len", "No list on field {}", &["field"]);
    let resize_list = fallthrough_to_extension(
        "resize_list_field",
        "No list on field {}",
        &["field", "new_len"],
    );
    let get_list_field_ref = fallthrough_to_extension(
        "get_list_field_ref",
        "No list on field {}",
        &["field", "index"],
    );
    let get_list_field_ref_mut = fallthrough_to_extension(
        "get_list_field_ref_mut",
        "No list on field {}",
        &["field", "index"],
    );
    let insert_list_field_ref = fallthrough_to_extension(
        "insert_list_field_ref",
        "No list on field {}",
        &["field", "index"],
    );
    let get_list_field =
        fallthrough_to_extension("get_list_field", "No list on field {}", &["field", "index"]);
    let get_list_field_mut = fallthrough_to_extension(
        "get_list_field_mut",
        "No list on field {}",
        &["field", "index"],
    );
    let insert_list_field = fallthrough_to_extension(
        "insert_list_field",
        "No list on field {}",
        &["field", "index"],
    );
    let remove_list_field = fallthrough_to_extension(
        "remove_list_field",
        "No list on field {}",
        &["field", "index"],
    );
    let swap_list_field = fallthrough_to_extension(
        "swap_list_field",
        "No list on field {}",
        &["field", "lhs", "rhs"],
    );

    let fields_enum = if has_fields {
        quote::quote! {
            #[derive(Debug, Copy, Clone, Eq, PartialEq, Ord, PartialOrd)]
            #[repr(usize)]
            pub enum #model_fields_enum {
                #(#model_fields_enum_names = #field_indexes),*
            }

            impl ::uncage_model::Fields for #model_fields_enum {
                fn field(&self) -> usize {
                    *self as usize
                }

                fn model(&self) -> usize {
                    #model_ident::const_model_type()
                }
            }
        }
    } else {
        quote::quote! {}
    };

    let get_parent = if let Some(extension) = &extension_field_ident {
        quote::quote! {
            Some(&self.#extension)
        }
    } else {
        quote::quote! { None }
    };

    (quote::quote! {
        impl #model_ident {
            pub const fn const_model_type() -> usize {
                #model_type
            }

            pub const fn const_model_name() -> &'static str {
                #model_name
            }

            pub const fn fields_len() -> usize {
                #fields_len
            }
        }

        #fields_enum

        const #model_fields_const_ident: [::uncage_model::FieldDescription; #i] = [#(#field_definitions),*];

        impl ::uncage_model::Model for #model_ident {
            fn model_type() -> usize {
                #model_ident::const_model_type()
            }

            fn model_name() -> &'static str {
                #model_ident::const_model_name()
            }
        }

        impl ::uncage_model::ModelDescription for #model_ident {
            fn as_any(&self) -> &dyn ::std::any::Any {
                self as &dyn ::std::any::Any
            }

            fn get_parent(&self) -> Option<&dyn ::uncage_model::ModelDescription> {
                #get_parent
            }

            fn get_model_type(&self) -> usize {
                #model_ident::const_model_type()
            }

            fn get_model_name(&self) -> &'static str {
                #model_ident::const_model_name()
            }

            fn get_fields(&self) -> Vec<::uncage_model::FieldDescription> {
                #model_get_fields
            }

            fn get_field_description(&self, field: usize) -> Option<&'static ::uncage_model::FieldDescription> {
                match field {
                    #(#field_indexes => Some(&#model_fields_const_ident[#indexes]),)*
                    #get_field_desc
                }
            }

            fn get_field(&self, field: usize) -> Option<&dyn ::std::any::Any> {
                match field {
                    #(#field_indexes => Some(&self.#fields),)*
                    #get_field_val
                }
            }

            fn get_field_mut(&mut self, field: usize) -> Option<&mut dyn ::std::any::Any> {
                match field {
                    #(#field_indexes => Some(&mut self.#fields),)*
                    #get_field_mut_val
                }
            }

            fn get_model_ref(&self, field: usize) -> Option<&Ref> {
                match field {
                    #(#reference_indexes => Some(self.#reference_fields.as_ref()),)*
                    #get_ref_val
                }
            }

            fn get_model_ref_mut(&mut self, field: usize) -> Option<&mut ::uncage_model::Ref> {
                match field {
                    #(#reference_indexes => Some(self.#reference_fields.as_ref_mut()),)*
                    #get_ref_val_mut
                }
            }

            fn get_map_keys(&self, field: usize) -> Vec<i32> {
                match field {
                    #(#map_indexes => self.#map_fields.keys().copied().collect(),)*
                    #get_map_keys
                }
            }

            fn create_map_field(&mut self, field: usize, key: i32) -> Option<&mut dyn ::std::any::Any> {
                match field {
                    #(#map_indexes => Some(self.#map_fields.entry(key).or_insert_with(|| Default::default())),)*
                    #create_map_field
                }
            }

            fn create_map_field_ref(&mut self, field: usize, key: i32) -> Option<&mut ::uncage_model::Ref> {
                match field {
                    #(#ref_map_indexes => Some(self.#ref_map_fields.entry(key).or_insert_with(|| Default::default()).as_ref_mut()),)*
                    #create_map_field_ref
                }
            }

            fn get_map_field(&self, field: usize, key: i32) -> Option<&dyn ::std::any::Any> {
                match field {
                    #(#map_indexes => Some(self.#map_fields.get(&key)?),)*
                    #get_map_field
                }
            }

            fn get_map_field_mut(&mut self, field: usize, key: i32) -> Option<&mut dyn ::std::any::Any> {
                match field {
                    #(#map_indexes => Some(self.#map_fields.get_mut(&key)?),)*
                    #get_map_field_mut
                }
            }

            fn get_map_field_ref(&self, field: usize, key: i32) -> Option<&Ref> {
                match field {
                    #(#ref_map_indexes => Some(self.#ref_map_fields.get(&key)?.as_ref()),)*
                    #get_map_field_ref
                }
            }
            fn get_map_field_ref_mut(&mut self, field: usize, key: i32) -> Option<&mut ::uncage_model::Ref> {
                match field {
                    #(#ref_map_indexes => Some(self.#ref_map_fields.get_mut(&key)?.as_ref_mut()),)*
                    #get_map_field_ref_mut
                }
            }

            fn remove_map_field(&mut self, field: usize, key: i32) -> Option<::uncage_model::Ref> {
                match field {
                    #(#map_indexes => #map_remove,)*
                    #remove_map_field
                }
            }

            fn swap_map_field(&mut self, field: usize, lhs: i32, rhs: i32) {
                match field {
                    #(#map_indexes => {
                        let mut old = self.#map_fields.remove(&lhs).unwrap();
                        ::std::mem::swap(&mut old, self.#map_fields.get_mut(&rhs).unwrap());
                        self.#map_fields.insert(lhs, old);
                    },)*
                    #swap_map_field
                }
            }

            fn get_list_len(&self, field: usize) -> usize {
                match field {
                    #(#list_indexes => self.#list_fields.len(),)*
                    #get_list_len
                }
            }

            fn resize_list_field(&mut self, field: usize, new_len: usize) {
                match field {
                    #(#list_indexes => self.#list_fields.resize_with(new_len, || { Default::default() }),)*
                    #resize_list
                }
            }

            fn get_list_field(&self, field: usize, index: usize) -> &dyn ::std::any::Any {
                match field {
                    #(#list_indexes => &self.#list_fields[index],)*
                    #get_list_field
                }
            }

            fn get_list_field_mut(&mut self, field: usize, index: usize) -> &mut dyn ::std::any::Any {
                match field {
                    #(#list_indexes => &mut self.#list_fields[index],)*
                    #get_list_field_mut
                }
            }

            fn insert_list_field(&mut self, field: usize, index: usize) -> &mut dyn ::std::any::Any  {
                match field {
                    #(#list_indexes => {
                        self.#list_fields.insert(index, Default::default());
                        &mut self.#list_fields[index]
                    },)*
                    #insert_list_field
                }
            }

            fn get_list_field_ref(&self, field: usize, index: usize) -> &::uncage_model::Ref {
                match field {
                    #(#ref_list_indexes => self.#ref_list_fields[index].as_ref(),)*
                    #get_list_field_ref
                }
            }

            fn get_list_field_ref_mut(&mut self, field: usize, index: usize) -> &mut ::uncage_model::Ref {
                match field {
                    #(#ref_list_indexes => self.#ref_list_fields[index].as_ref_mut(),)*
                    #get_list_field_ref_mut
                }
            }

            fn insert_list_field_ref(&mut self, field: usize, index: usize) -> &mut ::uncage_model::Ref {
                match field {
                    #(#ref_list_indexes => {
                        self.#ref_list_fields.insert(index, Default::default());
                        self.#ref_list_fields[index].as_ref_mut()
                    },)*
                    #insert_list_field_ref
                }
            }

            fn remove_list_field(&mut self, field: usize, index: usize) -> Option<::uncage_model::Ref> {
                match field {
                    #(#list_indexes => #list_remove,)*
                    #remove_list_field
                }
            }

            fn swap_list_field(&mut self, field: usize, lhs: usize, rhs: usize) {
                match field {
                    #(#list_indexes => self.#list_fields.swap(lhs, rhs),)*
                    #swap_list_field
                }
            }
        }
    })
        .into()
}

#[proc_macro_derive(ModelCollection)]
pub fn derive_model_collection(token_stream: TokenStream) -> TokenStream {
    let ast: DeriveInput = parse_macro_input!(token_stream as DeriveInput);
    let name = &ast.ident;
    let enum_data = if let syn::Data::Enum(enum_data) = &ast.data {
        enum_data
    } else {
        panic!("ModelCollection can only be derived from enums");
    };

    let mut names = vec![];
    let mut models = vec![];

    for variant in enum_data.variants.iter() {
        names.push(&variant.ident);
        let item = variant.fields.iter().next().unwrap();
        models.push(&item.ty);
    }

    let code = quote::quote! {
        impl ::uncage_model::ModelCollection for #name {
            fn create_model(id: usize) -> Self {
                #(if id == #models::const_model_type() { return #name::#names(#models::default()) })*
                panic!("No model in model collection with model type {}", id)
            }

            fn has_model(id: usize) -> bool {
                #(if id == #models::const_model_type() { return true })*
                false
            }

            fn boxed(self) -> Box<dyn ::uncage_model::ModelDescription> {
                match self {
                    #(#name::#names(model) => Box::new(model),)*
                }
            }
        }
    };

    code.into()
}

enum LocalType {
    Single(Ident),
    Map {
        map_type: Ident,
        is_model: bool,
        key: Box<LocalType>,
        value: Box<LocalType>,
    },
    Vector {
        vector_type: Ident,
        is_model: bool,
        value: Box<LocalType>,
    },
    Reference {
        ref_type: Ident,
        target: Option<Box<LocalType>>,
    },
}

fn get_field_type(from: &LocalType) -> proc_macro2::TokenStream {
    match from.ident().to_string().as_str() {
        "bool" => quote::quote! { ::uncage_model::FieldType::Boolean },
        "u8" => quote::quote! { ::uncage_model::FieldType::UInt8 },
        "i8" => quote::quote! { ::uncage_model::FieldType::Int8 },
        "u16" => quote::quote! { ::uncage_model::FieldType::UInt16 },
        "i16" => quote::quote! { ::uncage_model::FieldType::Int16 },
        "u32" => quote::quote! { ::uncage_model::FieldType::UInt32 },
        "i32" => quote::quote! { ::uncage_model::FieldType::Int32 },
        "u64" => quote::quote! { ::uncage_model::FieldType::UInt64 },
        "i64" => quote::quote! { ::uncage_model::FieldType::Int64 },
        "u128" => quote::quote! { ::uncage_model::FieldType::UInt128 },
        "i128" => quote::quote! { ::uncage_model::FieldType::Int128 },
        "f32" => quote::quote! { ::uncage_model::FieldType::Float },
        "f64" => quote::quote! { ::uncage_model::FieldType::Double },
        "String" => quote::quote! { ::uncage_model::FieldType::String },
        "Ref" => quote::quote! { ::uncage_model::FieldType::Model },
        "BTreeMap" | "HashMap" | "Vec" => get_field_type(from.value()),
        "ModelRef" | "ModelVec" | "ModelHashMap" | "ModelBTreeMap" => {
            let value_type = from.value().ident();
            quote::quote! { ::uncage_model::FieldType::TypeModel(#value_type::const_model_type()) }
        }
        _ => panic!("Don't have a field type for {}", from.ident()),
    }
}

impl LocalType {
    pub fn ident(&self) -> &Ident {
        match self {
            LocalType::Single(s) => s,
            LocalType::Map { map_type, .. } => map_type,
            LocalType::Vector { vector_type, .. } => vector_type,
            LocalType::Reference { ref_type, .. } => ref_type,
        }
    }

    pub fn value(&self) -> &LocalType {
        match self {
            LocalType::Map { value, .. } => value,
            LocalType::Vector { value, .. } => value,
            LocalType::Reference { target, .. } => target.as_ref().unwrap(),
            _ => panic!(),
        }
    }

    pub fn parse(ty: &Type) -> LocalType {
        let path = match ty {
            Type::Path(path) => path,
            _ => panic!("Model can only have plain types: {:?}", ty),
        };

        let first = path.path.segments.first().unwrap();

        let child =
            if let PathArguments::AngleBracketed(AngleBracketedGenericArguments { args, .. }) =
                &first.arguments
            {
                args.iter()
                    .map(|x| match x {
                        GenericArgument::Type(t) => t.clone(),
                        _ => panic!("Model types can only have type arguments"),
                    })
                    .collect::<Vec<_>>()
            } else {
                vec![]
            };

        let x = first.ident.clone();
        match x.to_string().as_str() {
            "ModelVec" | "Vec" => {
                let value_local_type = LocalType::parse(&child[0]);
                LocalType::Vector {
                    is_model: x.to_string().as_str() == "ModelVec"
                        || matches!(value_local_type, LocalType::Reference { .. }),
                    value: Box::new(value_local_type),
                    vector_type: x,
                }
            }

            "BTreeMap" | "HashMap" | "ModelHashMap" | "ModelBTreeMap" => {
                let value_local_type = LocalType::parse(&child[1]);

                LocalType::Map {
                    is_model: x.to_string().as_str() == "ModelHashMap"
                        || x.to_string().as_str() == "ModelBTreeMap"
                        || matches!(value_local_type, LocalType::Reference { .. }),
                    key: Box::new(LocalType::parse(&child[0])),
                    value: Box::new(value_local_type),
                    map_type: x,
                }
            }

            "ModelRef" => LocalType::Reference {
                ref_type: x,
                target: Some(Box::new(LocalType::parse(&child[0]))),
            },

            "Ref" => LocalType::Reference {
                ref_type: x,
                target: None,
            },

            _ => LocalType::Single(x),
        }
    }
}

#[derive(Debug, FromDeriveInput)]
#[darling(attributes(uncage))]
struct StructConfig {
    ident: Ident,
    data: darling::ast::Data<darling::util::Ignored, FieldConfig>,
    #[darling(rename = "type")]
    model_type: usize,
}

#[derive(Debug, FromField)]
#[darling(attributes(uncage))]
struct FieldConfig {
    ident: Option<Ident>,
    ty: Type,
    #[darling(default)]
    extends: bool,
    #[darling(default)]
    index: usize,
    #[darling(default)]
    autofill: bool,
}
