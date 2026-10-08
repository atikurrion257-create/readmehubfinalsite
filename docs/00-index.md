# 00 — Deliverable Index, Status, and How to Read

**Deliverable:** ReadMeHub design system + build specification (master prompt §24 "Required output").
**Produced by:** combined senior team (10 roles; reviewer passes per master prompt §26).
**Date:** 2026-10-08 · **Status:** SPECIFICATION — design deliverable only.

## 0.1 What this deliverable is

The complete design output required by the master prompt §24: design interpretation, IA, homepage section map,
page-template map, component library, Elementor native mapping, token mapping, Kit checklist, dark-mode plan,
signature preservation map, reuse plan, ACF proposal, responsive/accessibility/state matrices, exception register,
implementation sequence, QA checklist, unresolved items, confidence ledger, copy-ready build prompt, and the
scoring rubric result.

## 0.2 What this deliverable is NOT

- Not an implementation, not import-ready Elementor JSON, not a theme, not a plugin.
- Not proof of rendering, import success, visual fidelity, accessibility compliance, performance,
  production readiness, audience validation, or revenue performance.
- Not a claim that any value marked PROPOSED / LIKELY / UNVERIFIED is a fact.

## 0.3 Evidence label key (used in every document)

| Label | Meaning |
| --- | --- |
| CONFIRMED | Directly supplied, verified in the target runtime, or directly observed in source research. |
| LIKELY | Strong inference from a citable source; not yet verified in the target runtime. |
| ASSUMED | Chosen deliberately to close a gap. |
| UNVERIFIED | Requires runtime testing in the target installation. |
| VERSION-DEPENDENT | Varies by Elementor/WordPress/theme/license/add-on version. |
| PROPOSED | ReadMeHub team decision, not from source research. |

Rule: downgrade confidence rather than invent facts. A later reviewer pass may reject or downgrade a mapping;
it never silently converts unknowns to facts.

## 0.4 Document map and reading order

| Order | Document | Read when you… |
| --- | --- | --- |
| 1 | [01-design-interpretation-and-environment.md](01-design-interpretation-and-environment.md) | need the design decisions, assumptions, unknowns, blockers, and the target-environment capture plan |
| 2 | [02-ia-templates-homepage.md](02-ia-templates-homepage.md) | need the site structure, URL rules, template families, homepage map |
| 3 | [03-component-library-and-reuse.md](03-component-library-and-reuse.md) | need component anatomy, variants, reuse boundaries, signature map |
| 4 | [04-elementor-architecture-and-tokens.md](04-elementor-architecture-and-tokens.md) | need Elementor Free mappings, token→global mapping, Kit checklist, CSS/JS policy |
| 5 | [05-dark-mode-plan.md](05-dark-mode-plan.md) | need the dark theme, toggle behavior, persistence, contrast plan |
| 6 | [06-responsive-a11y-state-matrices.md](06-responsive-a11y-state-matrices.md) | need responsive, accessibility, and interaction-state requirements |
| 7 | [07-acf-data-model.md](07-acf-data-model.md) | need the structured data model and ACF Free limits strategy |
| 8 | [08-exception-dependency-register.md](08-exception-dependency-register.md) | need every non-native departure, its scope, risk, and exit condition |
| 9 | [09-implementation-sequence-qa-unresolved.md](09-implementation-sequence-qa-unresolved.md) | are about to build, or about to QA |
| 10 | [10-confidence-ledger.md](10-confidence-ledger.md) | need to audit any claim in this deliverable |
| 11 | [11-scoring-rubric.md](11-scoring-rubric.md) | need the self-assessment and its corrections |
| 12 | [12-copy-ready-build-prompt.md](12-copy-ready-build-prompt.md) | are the implementation agent picking up the build |

## 0.5 Reviewer-pass map (master prompt §26)

The deliverable was produced through sequential reviewer passes. Each pass may revise the prior draft; a later
pass may downgrade confidence or reject a mapping.

| Pass | Reviewer | What was applied | Where visible |
| --- | --- | --- | --- |
| 1 | Prompt Architect | Intent, evidence, scope discipline; evidence labels on every claim | docs/01, docs/10 |
| 2 | Elementor Native UI Architect | Dialect awareness (V3 Containers / V4 / hybrid — UNVERIFIED until inspected), widget mapping, editability | docs/04 |
| 3 | Design System Curator | Canonical tokens, signatures, consistency, drift control | docs/03, docs/04, docs/05 |
| 4 | Elementor Kit Specialist | Globals, breakpoints, CSS scope, version/license assumptions | docs/04, docs/01 |
| 5 | Component Reuse Architect | Anatomy, instance-editable boundaries, propagation, coupling | docs/03 |
| 6 | Accessibility & Responsive Reviewer | Semantics, focus, contrast testing plan, reflow, reduced motion, states | docs/05, docs/06 |
| 7 | Verification / Red-Team Reviewer | Invented IDs/tags, unsupported claims, hidden dependencies, missing tests | docs/08, docs/10, docs/11 |

## 0.6 Global status banner

- **Runtime facts:** NOT CAPTURED. No target WordPress installation was available to this design pass.
  Public point-in-time versions are recorded as LIKELY in docs/01 with a capture runbook.
- **Decision gates open:** launch cluster; hex palette; font families; exact type scale values.
- **Tests:** ALL NOT RUN (docs/09).
- **Paid dependencies:** NONE required by this design. Every escalation is documented in docs/08.
- **Fabrication check:** no statistics, testimonials, ratings, pricing, user counts, trust logos, testing
  claims, or verification states appear anywhere in this deliverable. Evidence slots are specified with
  defined empty states only.
