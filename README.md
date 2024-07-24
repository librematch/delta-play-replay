# age-replay

A hobby project to communicate with the gRPC api exposed by AoE2DE during replays.

## Goals

- create a specification and tooling around a delta-based replay format for AoE2DE,
that doesn't break each new game engine version

- automate the conversion process of recorded games to this delta-based replay format
from game engine versions since the release of AoE2DE

- implement a parser and create a package to be pulled in by node.js via https://neon-rs.dev/

- at the end there should be the possibility for others to implement a WebPlayer
(CA in the browser) to replay recorded games from all game engine versions of AoE2DE
since release (think of it like a Youtube for recorded games)

## Non-goals

- reimplement a desktop tool like CaptureAge

- enable people to cheat by exposing information of live games, our effort is totally
focussed on recorded games

## License

AGPL-3.0-or-later; see [LICENSE](./LICENSE).
