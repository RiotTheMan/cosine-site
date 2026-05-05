---
title: "Sosine"
slug: "sosine"
thesis: "Shipping a real product solo with AI augmentation — and the discipline that takes."
role: "Founder / engineer"
period: "2026-04 → ongoing"
stack: ["Spring Boot", "Postgres", "PostGIS", "Vue 3", "Capacitor"]
status: "In build"
featured: true
publishedAt: "2026-04-29"
ogImage: "/og/social-sine-social.png"
---

## The bet

A real, multi-platform social product, built and shipped by one person using AI as a force multiplier. Not a demo. Not a prototype. A working app with a real database, real auth, real scope. The case study for the methodology — AI-assisted software, done with discipline.

## What it is

A social app where the product is the meet-up, not the scroll. People post public or scoped meet-up intents; the app routes intent to the right people and gets out of the way. No follower counts, no like counts, no engagement metrics surfaced.

## Decisions that mattered

- **Scope + preference split.** Scope says who *can* see; preferences say what *you* want to see. Two orthogonal axes — never collapse them.
- **Region as a primitive.** A named geographic area with a radius, independent of the user's km slider.
- **Symmetric typed connections.** No follower graph. Only the type of relationship.
- **DB-enforced admin guard.** Role changes require a session-set variable + trigger.
- **AI as a teammate, not a replacement.** Every commit reviewed before it lands. The AI generates; I decide.

## Artefact

*Core-loop diagram — post intent → route → IRL meet-up.*

## What's next

Phase 2 is the offline moment itself: arrival, identification, the "it happened" signal. The app should go quiet during the meetup window — that's the test of whether the design filter held.

[sosine.co.za →](https://sosine.co.za)
