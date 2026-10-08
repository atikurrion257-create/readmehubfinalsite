# 09 — Implementation Sequence, QA Checklist, Final QA Answers, Unresolved Items

Labels: CONFIRMED / LIKELY / ASSUMED / UNVERIFIED / VERSION-DEPENDENT / PROPOSED (key in [docs/00](00-index.md)).

## 9.1 Implementation sequence (master prompt §32 order)

Each phase ends with a gate: do not proceed until the phase's verification passes and the confidence ledger
(docs/10) is updated.

| Phase | Work | Gate |
| --- | --- | --- |
| 0. **Verify the stack** | Run the capture runbook (docs/01 §1.5). Record WordPress/Elementor/Hello/ACF/Xpro versions, dialect (V3/V4), Site Settings breakpoints, Xpro Theme Builder Free availability, form-plugin shortlist. Update docs/01 §1.4 and the Kit checklist (docs/04 §4.8) | All target-environment rows moved to CONFIRMED or explicitly documented as unavailable |
| 1. **Choose the launch cluster** | One audience, one problem, one cluster. Replace every placeholder in docs/02 and all copy frames. Finalize slugs | Homepage can answer "who is this for" with real content; cluster documented |
| 2. **Resolve the design-system decision gate** | Choose hex values, font family(s), exact sizes with contrast testing in **both themes**. Update docs/04 §4.4 and docs/05 §5.2 | Contrast worksheet complete for both themes (targets met or deviations documented) |
| 3. **Build Globals** | Create Elementor Global Colors/Fonts/Buttons from the semantic set; enqueue the scoped token stylesheet (E0) with `:root` + dark overrides | Global panel matches docs/04 §4.4; tokens resolve in rendered CSS |
| 4. **Build reusable components** | Section templates for C3–C16 per docs/03 + mappings in docs/04 §4.3. No one-off page sections | Each component renders with empty/stale states; templates contain no instance data |
| 5. **Build pages** | Templates 01–18 per docs/02. Homepage sections in the fixed 12-section order. Launch inventory: ~8–12 useful URLs in one cluster | Every template passes the structure audit; editors can edit all intended fields without code |
| 6. **Add dark mode** | E1 toggle + persistence + pre-paint snippet; header + mobile placements; image/logo dark variants | Toggle keyboard-operable, persisted, reduced-motion aware; both themes look designed |
| 7. **Verify against §25 acceptance tests** | Run the QA checklist §9.2 in the actual runtime; update the confidence ledger as items move UNVERIFIED → CONFIRMED | Test evidence recorded; failures have fixes or documented deferrals |
| 8. **Run reviewer passes (§26)** | Prompt Architect → Elementor Native UI Architect → Design System Curator → Elementor Kit Specialist → Component Reuse Architect → Accessibility & Responsive Reviewer → Verification / Red-Team | Each pass signed off; downgrades recorded in docs/10 |
| 9. **Pre-launch trust completion** | Methodology, Editorial Standards, Affiliate Disclosure (legal review), Privacy, Terms, Corrections routes live; affiliate CTAs carry disclosures; verification intervals configured | No commercial page live before trust/methodology pages |

## 9.2 QA checklist (master prompt §25 acceptance tests — ALL NOT RUN at design time)

Status key: **NOT RUN** = no runtime testing has occurred. Each item must be marked PASS/FAIL with evidence.

### Architecture (NOT RUN)
- [ ] Structural regions use appropriate native Elementor Free elements
- [ ] No page-sized HTML widgets; no images-as-UI; no screenshot-as-background layouts
- [ ] Reusable patterns are actually reusable (section templates contain no instance content)
- [ ] Dynamic content separated from presentation
- [ ] Editors can update intended content without code (spot-check 10 field types from docs/07)

### Design system (NOT RUN)
- [ ] Global Colors consistent; Global Fonts consistent (one source of truth; no duplicates)
- [ ] Radius, border, elevation, CTA hierarchy consistent across templates
- [ ] Typed-collection structure preserved in light and dark mode
- [ ] Six signatures (docs/03 §3.3) preserved at desktop/tablet/mobile/intermediate widths

### Free-stack discipline (NOT RUN)
- [ ] No Pro dependency used; no paid Xpro / JetEngine / Crocoblock / paid addon
- [ ] Every Xpro Free usage documented with version + reason (docs/08)
- [ ] Every custom CSS scoped, documented, token-based
- [ ] Every JS usage minimal and isolated (E1/E6 only)

### Dark mode (NOT RUN)
- [ ] Semantic, not inverted; directional lighting preserved
- [ ] Toggle: label/state, keyboard, visible focus, persistence, reduced-motion
- [ ] Contrast re-measured for all text/control/background pairs in both themes (docs/05 §5.4)
- [ ] Logos/art have dark variants; no auto-inverted editorial images

### Responsive (NOT RUN)
- [ ] Mobile is not shrunk desktop
- [ ] No horizontal overflow at any tested width (incl. actual Site Settings breakpoints + intermediates)
- [ ] Comparison UX usable without horizontal scrolling
- [ ] Hero remains visually strong; H1 never pushed off-screen
- [ ] Touch targets ≥ 44px; long labels do not truncate

### Accessibility (NOT RUN)
- [ ] Semantic headings; one H1 per page; logical order
- [ ] Keyboard navigation complete; visible focus everywhere
- [ ] Meaningful labels and link names
- [ ] Contrast measured in rendered site (not assumed)
- [ ] Reduced-motion behavior verified
- [ ] Forms usable with validation and error recovery
- [ ] 200% zoom / reflow: no content loss, no forced horizontal scrolling

### Content architecture (NOT RUN)
- [ ] One intent per canonical URL; no empty category architecture
- [ ] Editorial and commercial elements distinguishable (DOM + visual audit)
- [ ] Last-verified information structured where applicable; stale states render "Verification due"
- [ ] Methodology, author identity, update dates, affiliate disclosure, privacy/terms, correction path present where applicable

### Performance (NOT RUN)
- [ ] Reasonable DOM depth; optimized imagery with explicit dimensions
- [ ] Limited font variants; minimal animations; minimal plugins; minimal JS
- [ ] Critical article text crawlable and server-rendered

### Trust (NOT RUN)
- [ ] No fabricated evidence, statistics, reviews, testimonials, pricing, or verification states
- [ ] Every "tested/verified" statement backed by an underlying source or record
- [ ] Every affiliate CTA accompanied by a visible disclosure
- [ ] Site is still useful if all commercial modules are removed

## 9.3 Final QA answers (master prompt §30) — answered against this design

| # | Question | Answer at design stage |
| --- | --- | --- |
| 1 | Does the homepage immediately communicate who ReadMeHub is for? | Designed to (hero + decision cards + cluster placeholder); **not provable until launch cluster is chosen** (B2) and rendered (untested) |
| 2 | Can a visitor understand what decision ReadMeHub helps solve? | Designed to — section 04 "What are you trying to decide?" is the routing device; runtime untested |
| 3 | Is the primary journey decision-oriented? | Yes by construction: Understand → Decide → Evidence → Compare → Act (docs/02 §2.4) |
| 4 | Are comparisons easier to understand than static tables? | Designed so — stacked decision rows/verdicts (C14/C15), no giant tables; user testing not run |
| 5 | Is original evidence visually visible? | Yes by design — signatures S3/S5 and sections 03/08/09; requires real evidence records at launch |
| 6 | Can stale information be distinguished from current? | Yes — "Verification due" badge + last-verified labels (state matrix, docs/06) |
| 7 | Can editors update structured info without code? | Designed so via ACF Free + static patterns (docs/07); editor walkthrough NOT RUN |
| 8 | Is every repeated pattern reusable? | Yes — section templates + tokens (docs/03 §3.4); propagation is manual by design (D16) |
| 9 | Is the design system globally consistent? | Yes by construction (single token source, drift control); rendered check NOT RUN |
| 10 | Do typed-collection + theme-parity signatures survive mobile and dark mode? | Mapped with preservation rules (docs/03 §3.3); rendered check NOT RUN |
| 11 | Are commercial placements clearly distinguishable, with disclosure? | Yes — reserved `accent-commercial`, C11/C12 adjacency rule, no nav/hero placement |
| 12 | Is the interface useful if ads are completely removed? | Yes — editorial-first architecture has no ad dependency anywhere in the design |
| 13 | Does every major CTA have a genuine user purpose? | Yes — verb-led, one primary per view; no vague "Submit/Click here" |
| 14 | Is every "tested/verified" statement backed by a record? | Policy enforced (docs/07 §7.4); no such claims exist in this deliverable |
| 15 | Does the site feel like a focused publication? | Intended — narrow launch cluster, typed collections, 12-section homepage; subjective, untested |
| 16 | Is the build achievable without Pro/paid plugins? | Yes — every mapping in docs/04 is Free-tier or registered in docs/08 |
| 17 | If a paid feature was avoided, was the free path documented? | Yes — docs/08 register (E1–E7) with reasons and exit conditions |
| 18 | Is the launch cluster intentionally narrow? | Yes by policy (B2 remains open until chosen) |
| 19 | Are PROPOSED values clearly marked as deferred? | Yes — docs/04 §4.4, docs/05 §5.2, docs/01 B3 |
| 20 | Is Jentic's visual identity avoided? | Yes — only structural principles transferred (docs/01 §1.1.1); no palette/type/copy/layout copied |

## 9.4 Known unresolved items (master prompt §24)

| # | Item | Blocked by | Owner | Next action |
| --- | --- | --- | --- | --- |
| U1 | Target runtime facts (versions, dialect, breakpoints) | B1 — no target install inspected | Implementation agent | Run docs/01 §1.5 runbook first |
| U2 | Launch cluster (audience/problem/use case) | B2 — site owner decision | Site owner | Choose one cluster; replace placeholders |
| U3 | Hex palette + font families + exact type scale | B3 — decision gate | Design team | Contrast worksheet, both themes |
| U4 | Newsletter plugin selection | B4 + E2 criteria | Implementation agent | Evaluate candidates at install; register choice in docs/08 |
| U5 | Xpro Free widget-by-widget acceptance | Runtime inspection | Implementation agent | §4.2 acceptance conditions |
| U6 | Xpro Theme Builder Free availability (header/footer path) | Runtime inspection | WordPress architect | E3 path selection |
| U7 | Verification interval for "Verification due" state | Business decision (placeholder: 90 days — PROPOSED) | Editorial | Confirm before content ops start |
| U8 | Affiliate disclosure legal wording | Legal review per jurisdictions | Site owner + legal | Finalize before serious monetization |
| U9 | Comparison rubric weightings / scoring method (if scores used) | Editorial methodology | Editorial | Define in Methodology before any score renders |
| U10 | Marquee usage decision (logo row on homepage?) | Design choice | Design team | Optional; if used, pause control + reduced-motion required |
| U11 | Exact ACF shortcode syntax at installed ACF version | Runtime verification | Content architect | E4 verification |
| U12 | Search behavior (native WP search vs enhanced) | Scope decision | Product | Launch with native Search Form; no paid search plugin |
