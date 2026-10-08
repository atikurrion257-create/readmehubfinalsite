# ReadMeHub — Design System & Build Specification

**Project:** ReadMeHub — an editorial-first, decision-support publication for choosing and using software.
**Deliverable status:** SPECIFICATION / DESIGN DELIVERABLE. This repository contains a design system and
build specification. It is **not** an implementation, **not** import-ready Elementor JSON, **not** a tested
or production-ready site, and **not** evidence of rendering, accessibility compliance, performance, audience
validation, or revenue performance.
**Date:** 2026-10-08 · **Branch:** `arena/b2f363d6-readmehubfinalsite`
**Governing spec:** "Design System Revision: Jentic-Informed Typed-Collection Editorial System" (master prompt,
sections §0–§32), applied by the combined senior team (frontend UI/UX, visual design, typography, WordPress
architecture, Elementor native architecture, theme builder, information architecture, conversion UX,
accessibility & responsive review, content architecture, verification / red-team review).

## What this site is

A decision gateway, not a blog: **Understand → Choose a problem → Explore evidence → Compare options →
Make a decision → Take action.** Content-driven affiliate promotion, editorial-first. One confirmed affiliate
relationship (ClickUp.com) with a generic, multi-program Affiliate CTA component. Launch phase is intentionally
narrow: one audience / one problem / one content cluster (placeholders until the launch cluster is chosen).

## Hard rules (non-negotiable, inherited from the master prompt)

- This spec is never presented as completed work or as an importable artifact.
- No invented measurements, widget IDs, control IDs, dynamic-tag syntax, breakpoints, or serialized Elementor JSON.
- No Elementor Pro, paid Xpro, JetEngine, Crocoblock, or paid add-on assumptions. Free stack only:
  WordPress + Hello Elementor + Elementor Free + ACF Free + Xpro Free (where verified) + custom CSS + minimal JS.
- One source of truth for style: this design system + Elementor Global Colors/Fonts. No competing global styles.
- No page-sized HTML widgets; no section built as raw HTML; no screenshot-as-UI.
- No fabricated statistics, testimonials, ratings, pricing, testing claims, trust logos, or verification states.
  Evidence slots are designed; they are never auto-populated.
- Affiliate CTAs never visually deceive; editorial and commercial elements are always distinguishable.
- Critical article text stays crawlable and server-rendered.
- Jentic's palette, type, copy, illustrations, and layouts are **not** copied. Only structural and behavioral
  principles extracted from research are used.

## Evidence labels used throughout

| Label | Meaning |
| --- | --- |
| CONFIRMED | Directly supplied or verified in the target runtime (or directly observed in source research). |
| LIKELY | Strong inference from a citable source; not yet verified in the target runtime. |
| ASSUMED | Chosen deliberately to close a gap. |
| UNVERIFIED | Requires runtime testing in the target installation. |
| VERSION-DEPENDENT | Varies by Elementor/WordPress/theme/license/add-on version. |
| PROPOSED | ReadMeHub team decision, not from source research. |

## Document index

All design deliverables live in [`docs/`](docs/):

| # | Document | Covers (master prompt §) |
| --- | --- | --- |
| 00 | [docs/00-index.md](docs/00-index.md) | How to read this deliverable, global status, review-pass map |
| 01 | [docs/01-design-interpretation-and-environment.md](docs/01-design-interpretation-and-environment.md) | Design interpretation, decisions, assumptions/unknowns/blockers, target environment (§24, §4) |
| 02 | [docs/02-ia-templates-homepage.md](docs/02-ia-templates-homepage.md) | Final IA, URL rules, 18 page-template families, homepage 12-section map (§7, §8) |
| 03 | [docs/03-component-library-and-reuse.md](docs/03-component-library-and-reuse.md) | Component library, variants, signature preservation map, reuse plan (§9, §6, §24) |
| 04 | [docs/04-elementor-architecture-and-tokens.md](docs/04-elementor-architecture-and-tokens.md) | Free-stack compatibility, Elementor native mappings, token→Elementor mapping, Kit checklist, CSS/JS policy (§10–§12, §24) |
| 05 | [docs/05-dark-mode-plan.md](docs/05-dark-mode-plan.md) | Dark-mode plan: semantic overrides, toggle, persistence, contrast re-check (§13) |
| 06 | [docs/06-responsive-a11y-state-matrices.md](docs/06-responsive-a11y-state-matrices.md) | Responsive matrix, accessibility matrix, interaction/state matrix (§15–§17) |
| 07 | [docs/07-acf-data-model.md](docs/07-acf-data-model.md) | ACF Free data model, per-field metadata, Free-tier limits strategy (§14) |
| 08 | [docs/08-exception-dependency-register.md](docs/08-exception-dependency-register.md) | Exception / dependency register (§18) |
| 09 | [docs/09-implementation-sequence-qa-unresolved.md](docs/09-implementation-sequence-qa-unresolved.md) | Implementation sequence, QA checklist, final QA answers, known unresolved items (§24, §25, §30, §32) |
| 10 | [docs/10-confidence-ledger.md](docs/10-confidence-ledger.md) | Confidence ledger: claim → label → basis → owner (§28) |
| 11 | [docs/11-scoring-rubric.md](docs/11-scoring-rubric.md) | Scoring rubric result across all rubric dimensions (§27) |
| 12 | [docs/12-copy-ready-build-prompt.md](docs/12-copy-ready-build-prompt.md) | Self-contained copy-ready build prompt for the implementation agent (§24) |

## What is deliberately NOT decided yet (decision gates)

1. **Launch cluster** — one audience / one problem / one cluster. Placeholders used throughout.
2. **Visual identity values** — hex palette, font families, exact sizes. Deferred to a decision gate with
   contrast testing in both themes (see docs/01 and docs/04).
3. **Runtime facts** — WordPress/Elementor/ACF/Xpro versions, Elementor dialect (V3 Containers vs V4),
   and Site Settings breakpoints must be captured from the target installation before implementation.

## Verification status

No runtime testing has been performed. Every acceptance test in docs/09 is **NOT RUN**. Nothing in this
repository claims importability, visual fidelity, accessibility compliance, production readiness, audience
validation, or revenue performance.
