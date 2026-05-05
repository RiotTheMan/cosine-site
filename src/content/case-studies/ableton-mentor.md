---
title: "Ableton Mentor"
slug: "ableton-mentor"
thesis: "AI augmentation in a non-traditional place — an MCP server that listens to my music sessions and tells me why track 7 sounds dark and mono."
role: "Solo build"
period: "2026-02 → ongoing"
stack: ["Python", "MCP", "Ableton LOM", "real-time DSP"]
status: "Live"
featured: true
publishedAt: "2026-04-29"
ogImage: "/og/ableton-mentor-mcp-social.png"
---

## The bet

AI augmentation isn't just for code. A producer's tools should reason about music, not just transport bytes. The same patterns work anywhere a domain expert wants software to think alongside them.

## What it is

A daemon that traverses the Ableton Live Object Model, analyses audio in real time across three threads, and returns specific musical observations — not generic mix feedback.

## Decisions that mattered

- **Three-thread architecture.** LOM read, audio analysis, MCP server — separated so analysis never blocks the transport read.
- **Reference-track memory.** Sessions remember the reference. New tracks evaluated against what the user said sounded right.
- **Specific over generic.** Output is "EQ8 notch at 3.09 kHz" — not "the mid-range needs work." The system either has the data or stays silent.

## Artefact

*Three-thread daemon diagram + sample session-xray output.*

## What's next

A larger reference corpus. Maybe a way to teach the system new genres without retraining. Built for me; shared because it's fun.
