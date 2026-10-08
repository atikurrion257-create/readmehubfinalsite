# 12 — Copy-Ready Build Prompt (self-contained)

Purpose: hand this block to the implementation agent. It is self-contained (encodes §0–§23 of the master
prompt as resolved by this design pass). It is an instruction set — **not** implementation, **not**
import-ready JSON, and **not** proof of rendering, accessibility compliance, or production readiness.

---

## READ MEHUB — BUILD PROMPT (v1.0, 2026-10-08)

### Role
You are the implementation agent for ReadMeHub, an editorial-first decision-support publication built on
WordPress + Hello Elementor + Elementor Free + ACF Free (+ verified Xpro Free where accepted) + scoped custom
CSS + minimal JS. Build exactly the design system specified below. Free stack only.

### Hard rules (non-negotiable)
1. Never present this prompt as completed work or as an importable artifact.
2. Never invent measurements from screenshots, widget IDs, control IDs, dynamic-tag syntax, breakpoints, or
   serialized Elementor JSON. Nothing conceptual becomes "verified" without runtime evidence.
3. Never use Elementor Pro, paid Xpro, JetEngine, Crocoblock, paid add-on suites, paid table/menu/form/animation
   plugins. Escalation order: Native Elementor Free → Composed Elementor Free → Xpro Free → ACF Free / WP
   content model → Scoped Custom CSS → Minimal JS (only if truly required).
4. One source of truth for style: the design system tokens + Elementor Global Colors/Fonts. No competing
   global styles, no per-page hardcoded hex/spacing.
5. Never use a page-sized HTML widget; never build a section as raw HTML; never place a page inside one HTML
   widget; no screenshot-as-UI or image-based layouts; no giant inline CSS/JS blocks.
6. Never fabricate: statistics, testimonials, user counts, ratings, pricing, product usage, hands-on claims,
   affiliate programs, research results, trust logos, verification states. Evidence slots render defined
   empty states ("Not yet recorded") — never fabricated defaults. Never auto-label content
   "Tested / Verified / Hands-on / Used / Reviewed" without an underlying evidence record.
7. Separate shared component anatomy from instance content. No global coupling of page-specific editorial
   copy or product data.
8. Keep critical article text crawlable and server-rendered. Semantic HTML, one H1 per page, real links/buttons.
9. Editorial/commercial separation: commercial CTAs use a reserved accent, carry a visible disclosure, never
   disguise as editorial links, never precede useful content, never sit in navigation or the hero.
10. Do not copy Jentic's palette, type, copy, illustrations, or layouts. Only the structural principles below.
11. Do not claim importability, rendering success, visual fidelity, accessibility compliance, production
    readiness, runtime compatibility, audience validation, or revenue performance until tested in the runtime.

### Project context
- Audience: international English (US), Tier 1–3 countries; global tech/editorial publication; no
  country-specific visual identity; pricing/currency/region must be flexible later.
- Business model: content-driven affiliate promotion, editorial-first. Value flow:
  User value → Evidence → Trust → Decision support → Commercial action.
- Launch: ONE focused audience/problem cluster (placeholder `[LAUNCH CLUSTER]` — the site owner fills it).
  Do NOT build 13 category hubs, empty archives, mega-menus, or coupon pages. Launch inventory hypothesis:
  ~8–12 genuinely useful URLs in one cluster.
- Content types: A Workflows/How-to · B Comparisons · C Product/Entity · D Research · E Explainers (deep only).
- One confirmed affiliate: ClickUp.com — but the homepage must not look like a ClickUp page; build a generic
  Affiliate CTA component for multiple programs later.
- Newsletter required from launch: "Get useful software insights, workflow tips, comparisons, and important
  updates." Benefit positioning; no cadence promises; no fake subscriber counts.

### Target environment — VERIFY FIRST (do not invent)
Before any build: record actual WordPress version, Elementor Free version + dialect (V3 Containers vs V4),
Hello Elementor, ACF Free version, Xpro Addons Free version, Xpro Theme Builder Free availability, and
Elementor → Site Settings → Layout → Breakpoints (defaults are LIKELY 767 mobile / 1024 tablet — use the
actual Site Settings values as the only responsive source of truth). Public point-in-time references
(2026-10-08, LIKELY — verify in target): WordPress 7.1.3; Elementor 3.35.x line with V4 Beta capabilities;
Xpro Addons Free 1.7.9 (50+ free widgets; paid tier OUT of scope); ACF Free 6.8.10 (Repeater/Flexible
Content/Options Pages/Blocks/Gallery are PRO-only). Brand-new site: create a fresh Kit; no existing
templates or CSS.

### Design system — Typed-Collection Editorial System
Principles: Evidence first · Typed collections · One module anatomy (label, heading, sentence, action) ·
One primary action per view · Commercial transparency · Credited authorship · Token-driven restraint ·
Theme parity (light and dark designed together) · Elementor Free first.

**Tokens (three layers: primitive → semantic → component; CSS custom properties on `:root`, mirrored into
Elementor Global Colors/Fonts).** Names are fixed; **hex values, font families, and exact sizes are a DECISION
GATE**: choose them with contrast testing in BOTH themes before build, then fill the table.

| Token | Destination |
| --- | --- |
| surface-page / surface-raised / surface-inset / surface-inverse | Global Colors (+ scoped var for inset if needed) |
| text-primary / text-muted (both ≥ 4.5:1 — verify) | Global Colors |
| accent-primary (one hue) | Global Color |
| accent-commercial (RESERVED: affiliate CTA + disclosure only) | Global Color |
| border-subtle / border-strong (1px hairline; 3:1 inputs) | Scoped CSS vars |
| focus-ring (2px ring + 2px offset, 3:1) | Scoped CSS var |
| status-success/warning/danger/info (never color-only) | Global Colors or scoped vars |
| Display font / Body font | Global Fonts |
| radius: 6px / 12px / 999px | Scoped CSS vars |
| elevation 1–2 (hover cards / menus; DISABLED in dark mode) | Scoped classes |
| spacing scale 4, 8, 12, 16, 24, 32, 48, 64, 96 px | Scoped CSS vars |
| Breakpoints | Actual Site Settings values ONLY |

Typography roles: display (H1, clamp 2.25→3.5rem, tight leading) · heading-l/m/s (1.75/1.375/1.125rem) ·
body (1.0625rem, lh 1.65, measure 65–75ch) · body-s (0.9375rem) · label (0.75rem uppercase, positive
tracking) · meta (0.8125rem) · button (0.9375rem semibold). Fluid type: clamp(min, rem + vw, max), never pure
vw; max/min ≤ 2.5; test 200% zoom independently. Personality: precise, editorial, neutral — no decorative faces.

Layout primitives: wrap (max 1200px) · reading (720px) · wide (1000px) · 12-col grid → 3-up/2-up/1-up ·
split (6/6 or 5/7) · band (full width, inner wrap; inverse band = ONE conversion module per page).
Motion: functional only; 150–250ms ease-out; no entrance animations on content; honor prefers-reduced-motion.

### Dark mode (required — semantic, never inverted)
- Light: cool grey surface. Dark: dark cool material surface. Directional lighting preserved. Dark depth via
  tone steps + borders (no shadows). Never: pure black + neon, cyberpunk, glassmorphism, generic dark SaaS.
- Mechanism: semantic token overrides under `[data-theme="dark"]`; default respects `prefers-color-scheme`;
  user choice persists in `localStorage`; ~15-line isolated toggle JS; pre-paint snippet prevents flash.
- Toggle: small control in desktop header and inside mobile nav; `<button aria-pressed>`, clear label/state,
  keyboard operable, visible focus, restrained transition, reduced-motion aware.
- Ship light/dark logo variants; never auto-invert editorial images.
- Re-measure ALL text/control/background contrast pairs in BOTH themes after hex selection and after any
  global change. No WCAG claim without measured evidence.

### Site structure
Nav (launch): Explore · Guides · Comparisons · Research · About · Search · Newsletter. No mega-menu.
IA: Home → [LAUNCH CLUSTER] Audience/Problem Hub → Use-Case Hub → Guides/Workflows → Comparisons →
Software/Entity → Research/Tools → Newsletter → Trust pages (About, Contact, Editorial Standards,
Methodology, Affiliate Disclosure, Privacy, Terms, Corrections/Report an Error). Trust pages are first-class.
URL rules: one canonical URL per intent. Slugs: `/use-case/[audience]/`, `/guides/[task]/`,
`/compare/[a]-vs-[b]/`, `/software/[product]/`, `/research/[topic]/`. No duplicate-intent URLs, doorways,
thin variants, or empty coupon pages.

Homepage (decision gateway — 12 sections in fixed order):
01 Sticky header (logo, nav, search, mode toggle, newsletter CTA; mobile: logo, search, toggle, hamburger)
02 Hero (left: eyebrow, H1, support, primary+secondary CTA; right: nested "Decision → Compare → Verify →
   Choose" visual — label any fictional UI as illustrative)
03 Authority/evidence strip (real attributes ONLY — omit entirely if no real stats; never fake social proof)
04 "What are you trying to decide?" (3–4 decision cards; replaces "Latest posts")
05 Featured workflows (1 large + 2–4 smaller: task, outcome, context, evidence state, CTA)
06 Compare by need (best for [job]/[constraint]/[workflow]/[audience])
07 Featured comparison (A vs B with Best for / Evidence / Trade-off each; stacks on mobile)
08 Original research/data (featured research card + methodology indicator)
09 Recently verified/updated (visible "Last verified"; stale shows "Verification due")
10 Newsletter (deep inset input, accent CTA, benefit line, privacy microcopy)
11 Methodology / how we evaluate (six-step process)
12 Footer (nav, trust, legal, contact, small secondary signup, disclosure line)
Hero copy communicates better decisions through useful evidence. FORBIDDEN hero copy:
"Your ultimate source for everything", "Discover the best tools", "The internet's best blog",
"Everything you need in one place".

Template families (18): Header · Footer · Homepage · Audience/Problem Hub · Use-Case Hub · Workflow/How-To ·
Comparison · Product/Entity · Research/Tool · Newsletter · About · Methodology · Editorial Standards ·
Contact · Privacy · Terms · Affiliate Disclosure · Corrections. (Deals/Partner/Media Kit/Submit Product:
NOT built.) Key template rules: workflow articles show evidence/updated status + quick answer BEFORE any CTA;
comparisons use decision summaries + stacked rows/verdicts (NO giant desktop tables; no horizontal scroll on
mobile); entity pages are canonical with pricing source + review date and evidence only when records exist;
research pages include method, dataset, limitations, changelog; newsletter page answers who/what/why/often
("no fixed schedule yet")/data/unsubscribe.

### Components (build as reusable Elementor section templates; duplication is the reuse mechanism — Global
Widget propagation is Pro and must NOT be assumed)
Header · Mobile menu · Button (primary/secondary/text/commercial) · Card (typed variants: article, review,
comparison, tool, research, workflow) · Featured block (with evidence stats + credit) · Badge (neutral/status/
commercial) · Stat row (real values only) · Newsletter form · Footer · Author block (name, role, method link,
dates) · Affiliate CTA (product, why it may fit, benefit, verified info + date, disclosure, "Visit [Tool]
site" button) · Affiliate disclosure bar ("Editorial note — Some links may be affiliate links. This does not
change our editorial evaluation." + policy link; legal wording finalized per jurisdiction) · Evidence status
block (evidence level, tested environment, version, last checked/updated, source, methodology, limitations —
empty = "Not yet recorded") · Verdict box (best for / not ideal for / price-checked date; score only with a
real scoring record) · Comparison criteria rows (shared rubric: use case, workflow, features, limitations,
pricing, evidence, support, ease of use, trade-offs) · Pros/cons (icons + text, never icon-only) ·
Breadcrumbs · Mode toggle · Skip link ("Skip to content").

Six signatures that MUST survive desktop/tablet/mobile/intermediate AND dark mode:
1 Typed collections (each type owns a card form + archive) · 2 One module anatomy (label, heading, sentence,
action) · 3 Evidence on the surface (stats/sample sizes/independence in featured blocks) · 4 Credited
authorship (named author, role, method) · 5 Commercial transparency (reserved token, disclosure bar, last-
verified labels) · 6 Theme parity (light and dark designed together).

States (all interactive elements): default · hover (surface change, never color-only) · focus (2px ring +
2px offset) · active (one step darker) · disabled (reduced contrast + aria-disabled) · empty (defined
message, e.g. "No verified comparison available yet.") · loading (skeleton/reduced-motion aware) ·
error (text + icon + border, with recovery) · stale ("Verification due" badge; never present stale as current).

### Elementor architecture
Native Free widgets first: Containers (flex/grid), Heading, Text Editor, Image, Button, Icon/Icon Box,
Icon List, Accordion, Nav Menu, Search Form, Shortcode (small scoped snippets only). Forms: Elementor Free has
no Form widget (LIKELY) — pick a free form/newsletter plugin (evaluate: MailPoet free, Fluent Forms free,
WPForms Lite, Forminator free) against: accessibility, styleability, consent support, list ownership, free
tier sufficiency. Header/footer: Xpro Theme Builder Free IF verified free + token-stylable; else Hello
Elementor native header/footer + scoped CSS; else minimal template part. Xpro Free widgets (post grid, tabs,
accordion, counter…) accepted ONLY if free-tier, token-stylable, and accessible — document each with version
and reason. ACF values surface via Shortcode widget (`[acf field="…"]` — verify syntax at installed version)
or tiny documented helpers; every dynamic field defines source, return format, preview context, fallback,
empty state, editor owner, and escaping.

ACF data model (structured data only; article copy stays native WP; ACF Free has NO Repeater — use plain
editor patterns or numbered fields for pros/cons and comparison rows): entity_name, entity_type,
short_summary, primary_use_case, best_for, not_ideal_for, key_features, limitations, pricing_status,
pricing_summary, price_checked_date, last_verified, last_updated, tested_environment, evidence_level
(methodology ladder), methodology_note, affiliate_url, affiliate_disclosure, disclosure_type, author,
source_list, related_entities, related_workflows, review_score, verdict_summary, pros, cons, tool_category,
comparison_criteria. Every missing value → defined empty state; never auto-populate evidence fields.

Custom CSS policy: ONE stylesheet (or small documented set), `.rmh-` namespace, token block first: tokens +
theme overrides → focus/hover → card/badge/commercial/verdict → table scroll (only if used) → reduced-motion
→ sticky header/menu. Minimal JS: theme toggle (~15 lines) · optional marquee pause · optional mobile menu
focus management. Nothing else. Everything else is CSS.

### Accessibility baseline (target — verify; do not claim compliance without evidence)
WCAG 2.1 AA targets · semantic landmarks + skip link · one meaningful H1 per page · logical headings ·
real links/buttons with meaningful names · visible focus (2px + 2px, contrast-verified) · keyboard-operable
menus/forms/toggle · labelled inputs with validation + error recovery · status never color/icon-only ·
touch targets ≥ 44px (prefer 48px) · 200% zoom reflow with no horizontal scrolling · reduced-motion support ·
meaningful alt text (empty alt decorative) · long titles/missing imagery/narrow widths tested ·
measure real contrast pairs in the rendered site in both themes.

### Build order
1. Verify the stack (record versions, dialect, breakpoints) → 2. Choose the launch cluster (fill
`[LAUNCH CLUSTER]`) → 3. Decision gate: choose hex + fonts + exact sizes with dual-theme contrast testing →
4. Build Globals (Global Colors/Fonts/Buttons + token stylesheet) → 5. Build reusable component templates →
6. Build the 18 template families and pages (launch inventory ~8–12 URLs) → 7. Dark mode (toggle, persistence,
variants) → 8. Run acceptance tests and record evidence → 9. Reviewer passes (prompt architect → native UI →
design system → kit → reuse → a11y/responsive → red team) → 10. Trust pages live BEFORE any serious
monetization; every affiliate CTA accompanied by disclosure.

### Acceptance gates (all must be tested; none are pre-verified)
Architecture (native elements; no HTML-widget pages; reusable patterns; editors edit without code) ·
Design system (globals consistent; signatures preserved in both themes at all breakpoints) · Free-stack
(no paid dependency; every Xpro/CSS/JS usage documented) · Dark mode (semantic; toggle complete; contrast
re-measured) · Responsive (mobile-first; no overflow; comparisons usable without horizontal scroll) ·
Accessibility (keyboard, focus, labels, measured contrast, reduced motion, 200% zoom) · Content (one intent
per URL; stale ≠ current; editorial vs commercial distinguishable; trust surfaces present) · Performance
(lean DOM, optimized images, minimal fonts/JS/plugins, crawlable text) · Trust (no fabrication anywhere;
every tested/verified claim backed by a record; useful with zero ads).

### Final sentence the finished site must earn
"This site helps me decide what to use, how to use it, and why I should trust the information."
The visual system should feel: soft, premium, credible, editorial, exceptionally clear — in both light and
dark mode.

---

*End of copy-ready build prompt. This block is a specification and instruction set, not implementation.*
