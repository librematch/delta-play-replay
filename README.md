# Delta Play Replay

A (hobby) project to communicate with the gRPC api exposed by e.g. AoE2DE during
replays and creating a specification and tooling for a new replay format
`*.dlpr` for Age of Empires II: Definitive Edition (AoE2DE) and other games.

## Background

The existing CaptureAge (CA) replay system utilizes an internal format
(`*.cars/*.carz`) to play recorded games. This format supports backward
compatibility with older recorded games, allowing them to be replayed without
running the original AoE2DE simulation. However, the `*.cars/*.carz` formats are
currently primarily designed for internal debugging purposes and in-memory use.
It is not easily accessible to the broader community, and it is not clear if
it's designed to be shared or stored for long periods.

The goal is to create a new, standardized replay format `*.dlpr` that
accommodates the requirements for efficient storage, improved replay
functionalities, and broader community support. Or in case, the original formats
are already designed for long-term storage, to create a specification and
tooling around it.

## Goals

- create a specification and tooling around a delta-based replay format `*.dlpr`
  for AoE2DE, that doesn't break each new game engine version

- automate the conversion process of recorded games to this delta-based replay
  format from game engine versions since the release of AoE2DE

- implement a parser and create a package to be pulled in by node.js via
  <https://neon-rs.dev/>

- at the end there should be the possibility for others to implement a WebPlayer
  (CA in the browser) to replay recorded games from all game engine versions of
  AoE2DE since release (think of it like a Youtube for recorded games)

- the project should be open source and free to use for everyone
  (AGPL-3.0-or-later)

- check the [requirements](./docs/requirements.md) for more details

### Optional Goals/Design Decisions

- is it viable, to make the delta-based replay format game independent

  - e.g., what if AoE4, AoM:R and AoE3DE would also have a gRPC Api. Should
    there be a one-fits-all format where the game is a property or should each
    game have their own standalone formats?

### Non-goals

- reimplement a desktop tool like CaptureAge

- enable people to cheat by exposing information of live games, our effort is
  totally focussed on (stored) recorded games

  - exception: if the franchise would convert into the format server-side and
    stream it to CaptureAge directly to be able to spectate games without having
    the game engine running

## Building

### Prerequisites

- [Build Tools for Visual Studio](https://visualstudio.microsoft.com/downloads)
  for `msvc`, `clang`, `cmake`, etc.
- [Rust](https://www.rust-lang.org/tools/install)
- [protobuf](https://github.com/google/protobuf) for `protoc` compiler (e.g.
  `scoop install protobuf`)
- [perl](https://www.perl.org/get.html) for `openssl-sys` (e.g.
  `scoop install perl`)
- [openssl](https://www.openssl.org/source/) for `openssl-sys` (e.g.
  `scoop install openssl`)

## License

AGPL-3.0-or-later; see [LICENSE](./LICENSE).
