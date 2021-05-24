use brotli;
use std::fs::File;

pub fn main() {
    println!("{:?}", std::env::var("PWD"));
    let file = File::open("uncage-patcher/resources/rec-2021-05-22T224912.carz")
        .expect("Failed to open recording");
    let mut brotlid = brotli::Decompressor::new(file, 0);
    let mut output = File::create("uncage-patcher/resources/carz.decompressed.bin")
        .expect("Failed to open output");
    let _ = std::io::copy(&mut brotlid, &mut output);

    let file = File::open("uncage-patcher/resources/rec-2021-05-22T224912.cars")
        .expect("Failed to open recording");
    let mut brotlid = brotli::Decompressor::new(file, 0);
    let mut output = File::create("uncage-patcher/resources/cars.decompressed.bin")
        .expect("Failed to open output");
    let _ = std::io::copy(&mut brotlid, &mut output);
}
