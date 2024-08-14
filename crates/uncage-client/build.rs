fn main() {
    tonic_build::configure()
        .build_server(false)
        .compile(&["proto/cade_api.proto"], &["proto"])
        .unwrap();
}
