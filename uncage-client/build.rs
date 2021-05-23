fn main() {
    tonic_build::compile_protos("proto/cade_api.proto").unwrap();
}