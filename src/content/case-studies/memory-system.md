---
title: "A memory layer for AI agents"
slug: "memory-system"
thesis: "Production-grade memory for AI coding tools — built for myself, now powering the knowledge store at a tech-driven bank."
role: "Architect / implementer"
period: "2025-11 → 2026-04"
stack: ["Postgres", "pgvector", "Python", "MCP"]
status: "In build"
featured: true
publishedAt: "2026-04-29"
ogImage: "/og/cosine-site-social.png"
---

## The bet

AI coding tools forget. They generate code without context, repeat decisions you've already overruled, lose track of what your team agreed last week. A memory layer fixes that — but only if it survives concurrent users without corrupting itself. The first prototype didn't. This case study is what it took to make it.

## What it is

A memory layer that augments AI coding harnesses with persistent, retrievable context. Multi-agent safe, governance-aware, fast enough not to break flow. Built for personal use first; now adapted to run the knowledge store workflow at a tech-driven bank.

## Decisions that mattered

- **SQLite → Postgres for concurrency.** File-locking doesn't survive multi-agent writes.
- **Graph-over-RAG for reasoning.** Embeddings find candidates; graph edges reconstruct context.
- **Session-set admin guard.** Authority changes require a session variable + trigger — not just a flag flip. Governance in miniature.
- **97% size reduction** from prototype to production. Cleaner data model, smaller working set, no recall loss.

## Artefact

*Abstracted architecture diagram — boxes + arrows, no internal product names.*

## What's open

How AI agents share memory without stepping on each other under sustained concurrent load. Still under active research.

> In production at a tech-driven bank. Reach out if your org needs the same.
