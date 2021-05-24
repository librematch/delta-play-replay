use proc_macro::TokenStream;
use proc_macro2::TokenTree;
use proc_macro_roids::DeriveInputStructExt;
use std::collections::HashMap;
use std::str::FromStr;
use syn::{
    parse_macro_input, Attribute, DeriveInput, Field, GenericArgument, Path, PathArguments, Type,
};

#[proc_macro_derive(Model, attributes(uncage))]
pub fn derive_model(token_stream: TokenStream) -> TokenStream {
    let ast: DeriveInput = parse_macro_input!(token_stream as DeriveInput);

    let name = &ast.ident;
    let data = ast.data_struct();
    let config = get_struct_config(&ast);

    let mut map = HashMap::new();
    let mut child_model_ids: Vec<usize> = vec![];
    let mut child_model_names: Vec<proc_macro2::Ident> = vec![];
    let mut child_model_field_names: Vec<proc_macro2::Ident> = vec![];

    let mut normal_field_ids: Vec<usize> = vec![];
    let mut normal_field_names: Vec<proc_macro2::Ident> = vec![];

    let mut fallback_field = None;

    for field in data.fields.iter() {
        let field_config = get_field_config(field);
        let mut is_child_model = false;

        if field_config.extends {
            fallback_field = Some(field.ident.as_ref().unwrap().clone());
            continue;
        }

        if let Type::Path(x) = &field.ty {
            let x = x.path.segments.first();
            if let Some(x) = x {
                if x.ident.to_string() == "ModelRef" {
                    if let PathArguments::AngleBracketed(args) = &x.arguments {
                        if let GenericArgument::Type(Type::Path(x)) = args.args.first().unwrap() {
                            let x = x.path.segments.first().unwrap();
                            let model_name = x.ident.clone();

                            child_model_ids.push(field_config.index);
                            child_model_names.push(model_name);
                            child_model_field_names.push(field.ident.as_ref().unwrap().clone());
                            is_child_model = true;
                        }
                    }
                }
            }
        }

        if !is_child_model {
            normal_field_ids.push(field_config.index);
            normal_field_names.push(field.ident.as_ref().unwrap().clone());
        }

        map.insert(field.ident.as_ref().unwrap().to_string(), field_config);
    }

    let (fall_through_create, fall_through_update_model, update_value) =
        if let Some(field) = fallback_field {
            (
                quote::quote! { self.#field.create_child_model(index) },
                quote::quote! { self.#field.update_child_model(index, id) },
                quote::quote! { self.#field.update_value(index, reader) },
            )
        } else {
            (
                quote::quote! { panic!("No model exists at index {}", index); },
                quote::quote! { panic!("No model exists at index {}", index); },
                quote::quote! { panic!("No field exists at index {}", index); },
            )
        };

    let type_id = config.r#type;

    return quote::quote! {
        impl ::uncage_model::Model for #name {
            fn model_type(&self) -> usize {
                #type_id
            }

            fn get_child_models(&self) -> &'static [usize] { &[ #(#child_model_ids),* ] }
            fn create_child_model(&self, index: usize) -> Box<dyn ::uncage_model::Model> {
                match index {
                    #(#child_model_ids => Box::new(#child_model_names::default()),)*
                    _ => {
                        #fall_through_create
                    }
                }
            }
            fn update_child_model(&mut self, index: usize, id: usize) {
                match index {
                    #(#child_model_ids => {
                        self.#child_model_field_names.set_instantiated(id)
                    },)*
                    _ => {
                        #fall_through_update_model
                    }
                }
            }

            fn update_value(
                &mut self,
                index: usize,
                reader: &mut Box<dyn ::std::io::Read>,
            ) -> ::std::io::Result<(usize, Option<::uncage_model::ModelId>)> {
                match index {
                    #(#child_model_ids => Ok((0, Some(self.#child_model_field_names.id()))),)*
                    #(#normal_field_ids => Ok((::uncage_model::ReadValue::read_value(&mut self.#normal_field_names, reader)?, None)),)*
                    _ => {
                        #update_value
                    }
                }
            }
        }
    }
    .into();
}

fn get_struct_config(input: &DeriveInput) -> StructConfig {
    StructConfig {
        r#type: input
            .attrs
            .iter()
            .find(|x| {
                x.path == Path::from(syn::Ident::new("uncage", proc_macro2::Span::call_site()))
            })
            .map(|x| get_parameter_as_number(x, "type".to_string()))
            .unwrap_or_default(),
    }
}

fn get_field_config(input: &Field) -> FieldConfig {
    let (index, extends) = input
        .attrs
        .iter()
        .find(|x| x.path == Path::from(syn::Ident::new("uncage", proc_macro2::Span::call_site())))
        .map(|x| {
            (
                get_parameter_as_number(x, "index".to_string()),
                has_parameter(x, "extends".to_string()),
            )
        })
        .unwrap_or_default();

    FieldConfig { extends, index }
}

fn has_parameter(attribute: &Attribute, name: String) -> bool {
    let mut token = attribute.tokens.clone();
    let mut last_ident = None;
    if let Some(TokenTree::Group(g)) = token.into_iter().next() {
        token = g.stream();
    } else {
        return false;
    }

    for item in token {
        if last_ident.is_none() {
            if let TokenTree::Ident(ident) = item {
                if ident.to_string() == name {
                    return true;
                }

                last_ident = Some(ident);
            };

            continue;
        }

        match item {
            TokenTree::Punct(p) if p.as_char() == ',' => {
                last_ident = None;
            }

            _ => {}
        }
    }

    return false;
}

fn get_parameter_as_number(attribute: &Attribute, name: String) -> usize {
    let mut token = attribute.tokens.clone();
    let mut last_ident = None;
    let mut value = 0;
    if let Some(TokenTree::Group(g)) = token.into_iter().next() {
        token = g.stream();
    } else {
        return 0;
    }

    for item in token {
        if last_ident.is_none() {
            if let TokenTree::Ident(ident) = item {
                last_ident = Some(ident)
            };

            continue;
        }

        match item {
            TokenTree::Punct(p) if p.as_char() == ',' => {
                if last_ident.as_ref().unwrap().to_string() == name {
                    break;
                }

                last_ident = None;
            }
            TokenTree::Literal(l) => {
                if last_ident.as_ref().unwrap().to_string() == name {
                    value = usize::from_str(&l.to_string())
                        .expect(&format!("Failed to parse {} as usize", l));
                }
            }

            _ => {}
        }
    }

    return value;
}

#[derive(Copy, Clone, Debug, Default)]
struct StructConfig {
    r#type: usize,
}

struct FieldConfig {
    extends: bool,
    index: usize,
}
