use cairo::{Format, ImageSurface};
use nalgebra::Point3;
use nalgebra_glm as glm;
use std::collections::HashMap;
use std::error::Error;
use std::f64::consts::PI;
use std::fs::File;
use std::io::Read;
use uncage::model::{Entity, EntityFields, Models, Root, World, WorldFields};
use uncage_client::pb::FrameSequence;
use uncage_client::prost::bytes::BytesMut;
use uncage_client::prost::{self, Message};
use uncage_model::patcher::Patcher;
use uncage_model::{Document, ModelWithDocument, Reference, Selector};

const _VILLAGER_IDS: &[i16] = &[
    56, 57, 83, 118, 120, 122, 123, 124, 156, 206, 212, 214, 216, 218, 220, 222, 259, 293, 354,
    579, 581, 590, 592,
];

fn main() -> Result<(), Box<dyn Error>> {
    let _colors = vec![
        "FFFFFF", "405BFE", "FF0000", "00FF00", "FFFF00", "00FFFF", "FF57B3", "797979", "FF9600",
    ]
    .into_iter()
    .map(|x| {
        (
            (u8::from_str_radix(&x[0..2], 16).unwrap() as f64 / u8::MAX as f64),
            (u8::from_str_radix(&x[2..4], 16).unwrap() as f64 / u8::MAX as f64),
            (u8::from_str_radix(&x[4..6], 16).unwrap() as f64 / u8::MAX as f64),
        )
    })
    .collect::<Vec<_>>();

    let mut blob = File::open("blobs/output.bin").expect("Failed to open output bin");
    let mut data = BytesMut::with_capacity(10 * 1024 * 1024);
    data.resize(10, 0);

    let doc = Document::new();
    let mut patcher: Patcher<Root, Models> = Patcher::new(doc);

    let mut map = HashMap::new();
    let mut prev_value = HashMap::new();

    // Track entity hp
    patcher.add_selector(1, Selector::new().field(EntityFields::Hp));
    // Track new villagers
    patcher.add_selector(2, Selector::new().created().field(WorldFields::Entities));

    let mut _patch = 0;
    while blob.read(&mut data).expect("Failed to read") != 0 {
        let data_len = prost::decode_length_delimiter(&mut data).expect("Failed to read length");
        let to_skip = data.len();
        data.resize(data_len, 0);
        blob.read_exact(&mut data[to_skip..])
            .expect("Failed to read");
        let seq = FrameSequence::decode(&mut data).expect("Failed to decode frame sequence");
        for frame in seq.frame {
            _patch += 1;
            let matches = patcher.apply_patch(frame.patch).unwrap();
            for _match in matches {
                if _match.selector_key == 2 {
                    if let Some(x) = patcher.document().by_id(_match.object_id) {
                        let model_type = x.model().get().get_model_type();
                        if model_type == 14 || model_type == 13 {
                            continue;
                        }

                        if let Some(ent) = x.cast_ref::<Entity>() {
                            if ent.owner_id == 0 {
                                continue;
                            }

                            prev_value.entry(ent.id).or_insert(ent.hp);
                        }
                    }
                }

                if _match.selector_key == 1 {
                    if let Some(x) = patcher.document().by_id(_match.object_id) {
                        let model_type = x.model().get().get_model_type();
                        if model_type == 14 || model_type == 13 {
                            continue;
                        }

                        if let Some(ent) = x.cast_ref::<Entity>() {
                            if let Some(p) = prev_value.get(&ent.id) {
                                if *p > ent.hp {
                                    let hp_shed = map
                                        .entry((
                                            ent.world_x.floor() as i32,
                                            ent.world_y.floor() as i32,
                                        ))
                                        .or_insert(0.0);

                                    *hp_shed += *p - ent.hp;

                                    prev_value.insert(ent.id, ent.hp);
                                }
                            }
                        }
                    }
                }
            }
        }

        data.resize(10, 0);
    }

    let root_m = patcher.document().root();
    let root = root_m.cast_ref::<Root>().unwrap();
    let world_m = patcher.document().by_id(root.world.get().unwrap()).unwrap();
    let world = world_m.cast_ref::<World>().unwrap();

    let w = world.map_width as f64;
    let h = world.map_height as f64;

    // set up Matrix for AoE2 style rendering
    let t = glm::identity::<f64, 4>();
    let t = glm::scale(&t, &glm::DVec3::from([15.0, 5.0, 1.0]));
    let t = glm::rotate(&t, -45.0 * PI / 180.0, &glm::TVec::z());

    let get_base_position = |x: f64, y: f64| -> (f64, f64) {
        let x = t.transform_point(&Point3::new(x, y, 0.0));
        println!("{:?} ", x);
        (x.x, x.y)
    };

    let corners = [
        get_base_position(0.0, 0.0),
        get_base_position(w + 1.0, h + 1.0),
        get_base_position(w + 1.0, 0.0),
        get_base_position(0.0, h + 1.0),
    ];

    let mut min_x = 0.0f64;
    let mut min_y = 0.0f64;
    let mut max_x = 0.0f64;
    let mut max_y = 0.0f64;
    for (x, y) in corners.iter() {
        min_x = min_x.min(*x);
        min_y = min_y.min(*y);
        max_x = max_x.max(*x);
        max_y = max_y.max(*y);
    }

    let bbox_x = max_x - min_x;
    let bbox_y = max_y - min_y;

    let offset_x = 0.0 - min_x;
    let offset_y = 0.0 - min_y;

    println!("{} {}", offset_y, offset_x);

    let get_position = |x: f64, y: f64| -> (f64, f64) {
        let (x, y) = get_base_position(x, y);
        (x + offset_x, y + offset_y)
    };

    let get_rectangle = |x: f64, y: f64, w: f64, h: f64| -> [(f64, f64); 4] {
        [
            get_position(x, y),
            get_position(x + w, y),
            get_position(x + w, y + h),
            get_position(x, y + h),
        ]
    };

    let svg = ImageSurface::create(Format::ARgb32, 1200, 400).unwrap();
    let max = map.values().copied().reduce(|a, b| a.max(b)).unwrap_or(0.0);
    let context = cairo::Context::new(&svg);

    context.scale(1200.0 / bbox_x.ceil(), 400.0 / bbox_y.ceil());

    let border = get_rectangle(0.0, 0.0, w + 1.0, h + 1.0);
    // Draw map
    context.new_path();
    context.move_to(border[0].0, border[0].1);
    context.line_to(border[1].0, border[1].1);
    context.line_to(border[2].0, border[2].1);
    context.line_to(border[3].0, border[3].1);
    context.line_to(border[0].0, border[0].1);
    context.set_source_rgb(0.0, 0.0, 0.0);
    context.stroke();
    context.move_to(border[0].0, border[0].1);
    context.line_to(border[1].0, border[1].1);
    context.line_to(border[2].0, border[2].1);
    context.line_to(border[3].0, border[3].1);
    context.line_to(border[0].0, border[0].1);
    context.set_source_rgb(1.0, 1.0, 1.0);
    context.fill();

    map.insert((0, 0), max);
    map.insert((world.map_width, 0), max);
    map.insert((world.map_width, world.map_height), max);
    map.insert((0, world.map_height), max);

    for ((x, y), lost) in map {
        let rect = get_rectangle(x as f64, y as f64, 1.0, 1.0);
        let [(x1, y1), (x2, y2), (x3, y3), (x4, y4)] = rect;

        // Draw tile
        context.new_path();
        context.move_to(x1, y1);
        context.line_to(x2, y2);
        context.line_to(x3, y3);
        context.line_to(x4, y4);
        context.line_to(x1, y1);

        let color = pastel::Color::from_hsl(0.0, 1.0, 1.0 - (0.5 * (lost as f64 / max as f64)))
            .to_rgba_float();
        context.set_source_rgb(color.r, color.g, color.b);
        context.fill();
    }

    svg.write_to_png(&mut std::fs::File::create("output.png").unwrap())
        .unwrap();
    svg.flush();

    println!("MAX: {}", max);

    Ok(())
}
