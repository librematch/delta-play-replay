# Requirements Analysis for Delta-Snapshot Based Replay Format

## Introduction

This document outlines the requirements for developing a new
delta-snapshot-based replay format for Age of Empires II: Definitive Edition
(AoE2DE). The new format aims to store recorded games more efficiently while
supporting both backward compatibility and new functionalities, such as quick
navigation through replays and improved spectator features.

## Background

The existing CaptureAge (CA) replay system utilizes an internal format
(`*.carz`) to play recorded games. This format supports backward compatibility
with older recorded games, allowing them to be replayed without running the
original AoE2DE simulation. However, the `*.carz` format is primarily designed
for internal debugging purposes and in-memory use, and not for long-term
storage. The goal is to create a new, standardized replay format that
accommodates the requirements for efficient storage, improved replay
functionalities, and broader community support.

## Current System Overview

### Existing CaptureAge Replay Format

- **Format**: `*.carz` (CaptureAge Replay Format)
- **Purpose**: Internal debugging, live spectating
- **Limitations**: Not optimized for long-term storage, primarily intended for
  in-memory use
- **Features**:
  - Backward compatibility with older games
  - Instant navigation to any point in the replay
  - No need for an AoE2DE instance to replay games

## New Replay Format Requirements

### Functional Requirements

1. **Backward Compatibility**
   - The new format must support existing replays recorded in previous versions
     of AoE2DE.
   - Ensure compatibility with the internal `*.carz` format used by CaptureAge.

2. **Delta-Snapshot System**
   - Implement a delta-snapshot-based approach to efficiently capture game state
     changes.
   - Generate patches representing state differences at fixed intervals
     (snapshots) and on-demand (events).

3. **Conversion and Compatibility Tools**
   - Develop a converter to transform existing recorded games into the new
     replay format.
   - Update gRPC definitions to accommodate new replay functionalities and
     formats.
   - Provide tools for converting current replays directly within AoE2DE.

4. **Long-Term Storage**
   - Optimize the format for persistent storage, ensuring that replays are
     compact and easily shareable.
   - Include metadata for versioning and compatibility checks.

5. **Improved Navigation and Spectator Features**
   - Enable quick navigation to any point in the replay, both forwards and
     backwards.
   - Integrate spectator tools to allow live game viewing without running the
     AoE2DE simulation (CaptureAge).
   - Support advanced features like timeline navigation, bookmarking, and
     synchronized casting (CaptureAge).

6. **Support for Live Games**
   - Explore server-side conversion for live games to facilitate real-time
     spectating without AoE2DE instances.
   - Stream delta-patch files to spectators to reduce local processing
     requirements.

### Non-Functional Requirements

1. **Performance**
   - Minimize performance overhead when generating and storing replays.
   - Ensure that replay playback is smooth and responsive, even for large and
     complex games.

2. **Scalability**
   - Design the format to handle a wide range of game scenarios, from short
     matches to extensive tournaments.
   - Support concurrent access by multiple users or tools, such as CaptureAge
     and third-party applications for e.g. generating live stats for overlays.

3. **Extensibility**
   - Allow for future extensions and improvements to the replay format without
     breaking existing compatibility.
   - Open the format for community contributions and integrations with other
     tools.

4. **Security**
   - Ensure that replays are stored securely, with options for encryption and
     integrity checks.
   - Prevent unauthorized manipulation of replay files.

5. **Usability**
   - Provide clear documentation and tools to assist developers and users in
     adopting the new format.
   - Offer intuitive interfaces for navigating and managing replays.

## Comparison to Existing Format

| Feature                    | Existing `*.carz` Format | New Delta-Snapshot Format |
| -------------------------- | ------------------------ | ------------------------- |
| **Backward Compatibility** | Partial                  | Full                      |
| **Long-Term Storage**      | Limited                  | Optimized                 |
| **Instant Navigation**     | Supported                | Supported                 |
| **Performance**            | ?                        | Optimized                 |

## Future Considerations

- **Community Involvement**: Engage with the AoE2DE community to gather feedback
  and suggestions for the new replay format.
- **Integration with Other Platforms**: Explore opportunities to integrate the
  new replay format with platforms like Twitch or YouTube for enhanced content
  creation and sharing.
- **Further Optimizations**: Continue researching ways to reduce the size of
  delta-snapshot files while maintaining rich functionality.

## Conclusion

The proposed delta-snapshot-based replay format aims to revolutionize how
replays are stored, shared, and consumed within the AoE2DE community. By
addressing the limitations of the existing system and incorporating advanced
features, this new format will provide a robust and future-proof solution for
both recorded and live games.
