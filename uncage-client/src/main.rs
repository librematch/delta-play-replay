use crate::pb::cade_remote_client::CadeRemoteClient;
use crate::pb::FramesRequest;
use hyper::client::HttpConnector;
use hyper::Uri;
use hyper_openssl::HttpsConnector;
use openssl::ssl::{SslConnector, SslMethod};
use openssl::x509::X509;
use std::env::args;
use tonic_openssl::ALPN_H2_WIRE;

pub mod pb {
    include!(concat!(env!("OUT_DIR"), "/cade_api.rpc.rs"));
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let server_root_ca_cert = include_bytes!("../cert/certificate-authority.pem");
    let client_cert = include_bytes!("../cert/cade-client.pem");
    let client_key = include_bytes!("../cert/cade-client.key");

    let ca = X509::from_pem(server_root_ca_cert)?;

    let client_cert = X509::from_pem(client_cert)?;
    let client_key = PKey::private_key_from_pem(client_key)?;

    let mut connector = SslConnector::builder(SslMethod::tls())?;
    connector.cert_store_mut().add_cert(ca)?;
    connector.set_alpn_protos(ALPN_H2_WIRE)?;

    connector.set_certificate(&client_cert)?;
    connector.set_private_key(&client_key)?;

    let mut http = HttpConnector::new();
    http.enforce_http(false);
    let mut https = HttpsConnector::with_connector(http, connector)?;

    // This is set because we are currently sending
    // `[::1]:50051` as the hostname but the cert was
    // originally signed with `example.com`. This will
    // disable hostname checking and it is BAD! DON'T DO IT!
    https.set_callback(|c, _| {
        c.set_verify_hostname(false);
        Ok(())
    });

    // Configure hyper's client to be h2 only and build with the
    // correct https connector.
    let hyper = Client::builder().http2_only(true).build(https);

    let uri = Uri::from_static("https://[::1]:4341");

    // Hyper's client requires that requests contain full Uris include a scheme and
    // an authority. Tonic's transport will handle this for you but when using the client
    // manually you need ensure the uri's are set correctly.
    let add_origin = tower::service_fn(|mut req: hyper::Request<tonic::body::BoxBody>| {
        let uri = Uri::builder()
            .scheme(uri.scheme().unwrap().clone())
            .authority(uri.authority().unwrap().clone())
            .path_and_query(req.uri().path_and_query().unwrap().clone())
            .build()
            .unwrap();

        *req.uri_mut() = uri;

        hyper.request(req)
    });

    let mut client = CadeRemoteClient::new(add_origin);

    let request = tonic::Request::new(FramesRequest {
        desired_resolutions: vec![],
        ..Default::default()
    });

    let mut response: tonic::Response<tonic::Streaming<_>> = client.frames(request).await?;
    while let Some(seq) = response.get_mut().message().await? {
        tokio::fs::write("single-patch.bin", &seq.frame[0].patch).await?;
    }

    println!("RESPONSE={:#?}", response);

    Ok(())
}
