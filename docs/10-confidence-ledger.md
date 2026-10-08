# 10 — Confidence Ledger (master prompt §28)

Format: Claim → Label → Basis → Owner. For every significant claim in the deliverable. Labels:
CONFIRMED / LIKELY / ASSUMED / UNVERIFIED / VERSION-DEPENDENT / PROPOSED (key in [docs/00](00-index.md)).

## 10.1 Project context claims

| # | Claim | Label | Basis | Owner |
| --- | --- | --- | --- | --- |
| C1 | Audience is international English (US) across Tier 1–3 countries; no country-specific visual identity | CONFIRMED | Master prompt brief §2.1 | Site owner |
| C2 | Business model: content-driven affiliate promotion, editorial-first; value flow user-value → evidence → trust → decision support → commercial action | CONFIRMED | Brief §2.2 | Site owner |
| C3 | Launch phase is ONE focused audience/problem/use case, not yet selected | CONFIRMED (state) / ASSUMED (placeholder content) | Brief §2.3 | Site owner |
| C4 | Content types A–E (workflows, comparisons, product entities, research, explainers) | CONFIRMED | Brief §2.4 | Editorial |
| C5 | Evidence slots must render defined empty states; never auto-populated | CONFIRMED (rule) | Brief §2.5 | Content architect |
| C6 | One confirmed affiliate: ClickUp.com; generic Affiliate CTA component required | CONFIRMED | Brief §2.6 | Site owner |
| C7 | Affiliate UX order: useful info → decision support → CTA; disclosure component required | CONFIRMED | Brief §2.7 | Conversion UX |
| C8 | WordPress + Hello Elementor + Elementor Free + ACF Free; no Pro | CONFIRMED | Brief §2.8 | Implementation agent |
| C9 | Dark mode required; deliberate semantic dark theme, not inversion | CONFIRMED (requirement) | Brief §2.12 | Design team |
| C10 | Newsletter required from launch; benefit positioning; no cadence promises | CONFIRMED | Brief §2.14 | Editorial |
| C11 | Launch nav: Explore, Guides, Comparisons, Research, About, Search, Newsletter; no mega-menu | CONFIRMED | Brief §2.15 | IA |
| C12 | Homepage is a decision gateway with the 12-section order | CONFIRMED (spec) | Brief §8.1 | IA |

## 10.2 Source-research claims (jentic.com, fetched 2026-10-08)

| # | Claim | Label | Basis | Owner |
| --- | --- | --- | --- | --- |
| R1 | Typed content collections with own headers and card forms exist on the resources page | CONFIRMED | Source research (rendered content) | Design system curator |
| R2 | Eyebrow + H2 + one-line subhead rhythm repeats across sections | CONFIRMED | Source research | Design system curator |
| R3 | Evidence stats, auditor-named badges, credited authors displayed | CONFIRMED | Source research | Design system curator |
| R4 | Explicit commercial/editorial labelling pattern (e.g. invented-data disclosure) | CONFIRMED | Source research | Design system curator |
| R5 | Light and dark theme variants exist (toggle + dual assets) | CONFIRMED | Source research | Design system curator |
| R6 | Logo row behaves as a looping marquee | INFERRED | Repeated logo row observed; behavior not verified | Design system curator |
| R7 | Principles 8–12 (restraint, scannable hierarchy, editorial voice, low commercial pressure, moderate density) | INFERRED | Repeated patterns, not stated | Design system curator |
| R8 | All Jentic colors, fonts, sizes, spacing, radii, shadows | UNVERIFIED | Research returned no stylesheets/computed CSS; none stated as fact | n/a (never claimed) |
| R9 | Jentic breakpoints, motion timings, interaction states | UNVERIFIED | Not observable in research | n/a (never claimed) |
| R10 | Jentic accessibility compliance | UNVERIFIED | Not measurable from research; no claim made | n/a |

## 10.3 Environment claims

| # | Claim | Label | Basis | Owner |
| --- | --- | --- | --- | --- |
| E1 | WordPress 7.1.3 is the public latest release (2026-10-06) | LIKELY | wordpress.org release archive (2026-10-08 lookup) | Implementation agent verifies target |
| E2 | Elementor Free is on the 3.35.x line publicly; 3.35 is the "V4 Beta" milestone; official 4.0 announced as upcoming with auto-on for new sites | LIKELY / VERSION-DEPENDENT | Public changelog commentary (2026-10-08 lookup) | Implementation agent verifies target |
| E3 | Elementor default breakpoints are mobile 767 / tablet 1024 | LIKELY | Elementor help docs (2026-10-08 lookup) | Implementation agent captures Site Settings values |
| E4 | Xpro Addons Free public latest 1.7.9 (2026-09-08), tested up to WP 7.1, 50+ free widgets; paid tier exists and is out of scope | LIKELY | wordpress.org plugin page (2026-10-08 lookup) | Implementation agent verifies installed |
| E5 | Xpro Theme Builder Free exists in some free form | UNVERIFIED | Vendor marketing mentions free theme builder; capability at install unknown | WordPress architect |
| E6 | ACF Free public latest 6.8.10 (2026-09-10); Repeater/Flexible Content/Options Pages/Blocks/Gallery are PRO-only | LIKELY (version) / CONFIRMED (PRO-only features) | ACF vendor download page + docs (2026-10-08 lookup) | Implementation agent verifies installed |
| E7 | Elementor Free has no native Form widget | LIKELY | General knowledge of Free widget list; verify at install | Implementation agent |
| E8 | Elementor Free has no Loop Grid / dynamic tags / Theme Builder / global widget propagation (Pro features) | LIKELY | General knowledge of Free tier; verify at install | Implementation agent |
| E9 | Hello Elementor is the installed theme | CONFIRMED (choice) | Brief §2.8 | Implementation agent |
| E10 | Actual Site Settings breakpoints in target | UNVERIFIED | Not inspected | Implementation agent |
| E11 | Elementor dialect in target (V3 Containers / V4 / hybrid) | UNVERIFIED | Not inspected | Implementation agent |

## 10.4 Design decisions (PROPOSED — team decisions, not facts)

| # | Claim | Label | Basis | Owner |
| --- | --- | --- | --- | --- |
| D1–D16 | All design decisions in docs/01 §1.2 (module anatomy, token architecture, deferred palette, dark-surface model, toggle mechanism, free-stack escalation, header/footer path, nav model, newsletter plugin path, comparison UX, evidence slots, placeholder policy, ACF policy, ACF surface, motion policy, reuse mechanism) | PROPOSED (each; D5 mechanism additionally UNVERIFIED until built) | Team decisions applying brief rules and source principles | Design team / implementation agent |
| T1 | All token names and layer architecture (docs/04 §4.4) | PROPOSED | Team decision (brief §5.20 allows naming now, values deferred) | Design system curator |
| T2 | All hex values, font families, exact sizes | UNVERIFIED / DEFERRED | Decision gate B3 not run; values deliberately absent | Design team |
| T3 | Radius 6/12/999px; spacing 4px base 4–96px | PROPOSED | Brief §5.4/§5.6 proposed scale | Design system curator |
| T4 | Motion 150–250ms ease-out; no entrance animation | PROPOSED | Brief §5.12 | Frontend |
| M1 | All component mappings (docs/04 §4.3) | PROPOSED / VERSION-DEPENDENT (widget availability) | Team mapping; free-tier knowledge | Implementation agent confirms |
| M2 | ACF field list and rendering contract (docs/07) | PROPOSED | Team data model; Free capability CONFIRMED, exact shortcode syntax UNVERIFIED | Content architect |
| S1 | Six signatures preserved via docs/03 §3.3 map | PROPOSED (preservation plan); signatures themselves CONFIRMED as required | Brief §6 | Design team |
| A1 | WCAG 2.1 AA is the target baseline | PROPOSED (target) | Brief §17; compliance NOT claimed | Accessibility reviewer |

## 10.5 Anti-claims (explicitly NOT asserted)

| # | Non-claim | Status |
| --- | --- | --- |
| N1 | Importability of any artifact | NOT CLAIMED — this repo is a spec, not importable data |
| N2 | Successful rendering / visual fidelity | NOT CLAIMED — nothing rendered |
| N3 | Accessibility compliance | NOT CLAIMED — no tests run; targets only |
| N4 | Production readiness | NOT CLAIMED |
| N5 | Runtime compatibility of mappings | NOT CLAIMED — UNVERIFIED until install inspection |
| N6 | Audience validation / revenue performance | NOT CLAIMED |
| N7 | Any statistic, testimonial, rating, pricing figure, user count, trust logo | NONE EXIST in this deliverable |
| N8 | Any "tested/verified/used/hands-on" product claim | NONE EXIST; evidence slots specified with empty states only |
| N9 | Jentic pixel values of any kind | NONE STATED as fact |

## 10.6 Ledger maintenance

Runbook: after each implementation phase gate (docs/09 §9.1), move rows from UNVERIFIED/LIKELY to CONFIRMED
only with recorded evidence (test output, screenshot, measured contrast value). A reviewer pass may downgrade
any row; it never silently converts unknowns to facts.
