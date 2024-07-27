# age-replay

A (hobby) project to communicate with the gRPC api exposed by AoE2DE during
replays and creating a new replay format for Age of Empires II: Definitive
Edition (AoE2DE).

## Background

The existing CaptureAge (CA) replay system utilizes an internal format
(`*.carz`) to play recorded games. This format supports backward compatibility
with older recorded games, allowing them to be replayed without running the
original AoE2DE simulation. However, the `*.carz` format is primarily designed
for internal debugging purposes and in-memory use. It is not easily accessible
to the broader community, and it is not designed to be shared or stored for long
periods.

The goal is to create a new, standardized replay format that accommodates the
requirements for efficient storage, improved replay functionalities, and broader
community support.

## Goals

- create a specification and tooling around a delta-based replay format for
  AoE2DE, that doesn't break each new game engine version

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

## Non-goals

- reimplement a desktop tool like CaptureAge

- enable people to cheat by exposing information of live games, our effort is
  totally focussed on recorded games

## License

AGPL-3.0-or-later; see [LICENSE](./LICENSE).
