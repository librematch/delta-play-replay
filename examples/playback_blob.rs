use std::error::Error;
use std::fs::File;
use std::io::Read;
use uncage_client::pb::FrameSequence;
use uncage_client::prost::bytes::BytesMut;
use uncage_client::prost::{self, Message};
use uncage_model::Document;
use uncage_patcher::model::{Models, Root};
use uncage_patcher::Patcher;

fn main() -> Result<(), Box<dyn Error>> {
    let mut blob = File::open("blobs/output.bin").expect("Failed to open output bin");
    let mut data = BytesMut::with_capacity(10 * 1024 * 1024);
    data.resize(10, 0);

    let doc = Document::new();
    let mut patcher: Patcher<Root, Models> = Patcher::new(doc);

    let mut patch = 0;
    while blob.read(&mut data).expect("Failed to read") != 0 {
        let data_len = prost::decode_length_delimiter(&mut data).expect("Failed to read length");
        let to_skip = data.len();
        data.resize(data_len, 0);
        blob.read_exact(&mut data[to_skip..])
            .expect("Failed to read");
        let seq = FrameSequence::decode(&mut data).expect("Failed to decode frame sequence");

        for frame in seq.frame {
            patch += 1;
            patcher.apply_patch(frame.patch).unwrap();
        }

        data.resize(10, 0);
    }

    Ok(())
}
