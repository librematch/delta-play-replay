use prost_build::Config;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_server(false)
        .build_client(true)
        .compile_with_config(
            {
                let mut conf = Config::new();
                conf.bytes(["."]);
                conf
            },
            &["proto/cade_api.proto"],
            &["proto"],
        )?;

    Ok(())
}
