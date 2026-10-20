# 03 — Component Library, Variants, Signature Preservation, and Reuse Plan

Labels: CONFIRMED / LIKELY / ASSUMED / UNVERIFIED / VERSION-DEPENDENT / PROPOSED (key in [docs/00](00-index.md)).
Token names reference the semantic layer defined in docs/04 §4.4. All component values are PROPOSED; hex/font
values are deferred to the decision gate (docs/01, B3).

Component format: **Purpose · Anatomy · Semantics · Tokens · States · Responsive · Editable fields ·
Elementor mapping · Availability.**

## 3.1 Component library

### C1 — Header (sticky)
- **Purpose:** Wayfinding, search, theme toggle, primary audience CTA. Sticky on scroll.
- **Anatomy:** Logo (SVG, light/dark variants) · nav links (Explore, Guides, Comparisons, Research, About) ·
  Search · mode toggle · Newsletter CTA (secondary style). Mobile: logo · search · toggle · hamburger.
- **Semantics:** `<header>` landmark; `<nav aria-label="Primary">`; toggle is a `<button aria-pressed>` with a
  clear label/state; hamburger is a `<button aria-expanded aria-controls>`.
- **Tokens:** `surface-raised`, `border-subtle`, `text-primary`, `focus-ring`; sticky via scoped CSS.
- **States:** Default / hover (surface change, never color-only) / focus (2px ring + 2px offset) / mobile open.
- **Responsive:** Desktop horizontal compact; tablet compressed; mobile logo + search + toggle + hamburger with
  explicit open/close, keyboard operable, visible focus.
- **Editable fields:** Logo asset (light/dark), nav menu (WP menu), CTA label + URL, search placeholder.
- **Elementor mapping:** Header/footer built via Xpro Theme Builder Free **if verified** (docs/01 D7, docs/08 E3);
  fallback: Hello Elementor header + scoped CSS; last resort: minimal template part. Nav = Elementor Nav Menu
  widget (Free). Search = Elementor Search Form widget (Free). Toggle = small custom control + JS (docs/05).
- **Availability:** Free (with documented exception E3 for the builder path).

### C2 — Mobile menu
- **Purpose:** Same as header nav on small screens.
- **Anatomy:** Trigger button → full-width panel (or drawer) with nav links, search, mode toggle, newsletter CTA.
- **Semantics:** `<button aria-expanded aria-controls>`; panel is a labelled region; Escape closes; focus moves
  into panel on open and returns to trigger on close.
- **States:** Closed / open / focus-within; reduced-motion: no slide animation, instant state change.
- **Responsive:** Active below the nav-collapse breakpoint (target: tablet breakpoint — actual value UNVERIFIED).
- **Elementor mapping:** Native free Nav Menu widget mobile layout if sufficient (LIKELY — verify hamburger/
  accordion behavior at installed version); otherwise scoped CSS over native widget; custom JS only if truly
  required (exception E6).
- **Availability:** Free.

### C3 — Button (3 tiers + commercial)
- **Purpose:** Actions. Verb-led, specific labels ("Compare pricing", "Read the full review", "Get the checklist").
- **Anatomy:** Text label only; optional trailing arrow icon (decorative, aria-hidden).
- **Semantics:** Real `<a>` or `<button>`; never a styled `<div>`.
- **Tokens:** tier tokens `button-primary-*`, `button-secondary-*`, `button-text-*`, `button-commercial-*`.
- **Variants:** primary (solid) · secondary (outline) · text link with arrow · **commercial** (uses
  `accent-commercial`; always paired with a disclosure; label states destination: "Visit [Tool] site").
- **States:** Default / hover (surface change) / focus (2px ring + offset) / active (one step darker) /
  disabled (reduced contrast + `aria-disabled`; never the sole signal) / loading (inline progress).
- **Responsive:** Touch target ≥ 44px (prefer 48px); long labels wrap rather than truncate.
- **Editable fields:** Label, URL, tier (style), icon toggle.
- **Elementor mapping:** Elementor Button widget (Free) styled via Global Button Styles + scoped tier classes.
- **Availability:** Free. Avoid vague labels ("Submit", "Click here") — editorial rule, PROPOSED.

### C4 — Card (typed content unit)
- **Purpose:** The content unit of every collection.
- **Anatomy (all types):** type label (eyebrow) · title · one-sentence summary · meta row (author, updated date) ·
  action link. Optional: cover image (one aspect ratio per card type: 16:9 articles, 3:4 report covers),
  evidence-state badge.
- **Semantics:** `<article>`; heading level consistent within a collection (H3 under an H2 section);
  the whole card is not a link — the action link is (larger hit area via CSS stretch is acceptable if the
  accessible name stays clean).
- **Tokens:** `card-bg` (= `surface-raised`), `card-border` (= `border-subtle`), radius-m, elev-1 on hover.
- **Variants (tokens only, never structure):** article · review · comparison · tool · research · workflow.
- **States:** Default / hover (elev-1 lift + border-strong) / focus-within (ring on the action link) /
  empty (defined empty-content message) / loading (skeleton, reduced-motion aware) / error (retry path) /
  **stale ("Verification due" badge)**.
- **Responsive:** Grid 3-up → 2-up → 1-up (breakpoints UNVERIFIED — use actual Site Settings values);
  equal-height without clipping; no horizontal overflow.
- **Editable fields:** Type label, title, summary, author, date, action label/URL, cover, badge.
- **Elementor mapping:** Container (flex column) + Heading + Text Editor + Button(text) + Image; repeated by
  duplicating the saved section template (D16). Dynamic listing in Free: see docs/04 §4.2 (Loop Grid is Pro;
  Xpro Free or manual duplication are the free paths).
- **Availability:** Free.

### C5 — Featured block (lead item)
- **Purpose:** Lead item of a collection (featured review, featured research, featured workflow).
- **Anatomy:** Cover (beside text on desktop) · type label · title · one-sentence summary · **evidence stats**
  · credited author · CTA.
- **Semantics:** `<article>` with `<figure>`/`<figcaption>` where a cover exists; stats as a `<dl>` or list,
  never color-only.
- **Tokens:** `surface-raised`, `band` optional; accent used once.
- **States:** Same card states + stale.
- **Responsive:** Two-column split (5/7 or 6/6) → stacked, text first.
- **Editable fields:** All card fields + stat labels/values (real values only) + credit.
- **Elementor mapping:** Split container (flex row) with nested containers; Image + content stack.
- **Availability:** Free.

### C6 — Badge
- **Purpose:** Status at a glance.
- **Anatomy:** Short text in a pill (radius-pill, border 1px).
- **Variants:** neutral · status (Updated, New research, **Verification due**) · commercial (Sponsored —
  distinct token, never styled as editorial).
- **Semantics:** `<span>`; status never conveyed by color alone (text is the signal).
- **Tokens:** `badge-*` component tokens; `status-success/warning/danger/info`.
- **Availability:** Free (Text Editor + scoped class, or Icon Box label).

### C7 — Stat row (evidence strip)
- **Purpose:** Display real evidence attributes (test counts, hours, pricing checks) — **real values only**.
- **Anatomy:** 3 headline stats: number + label + (where true) independence/method note.
- **Semantics:** `<dl>`; numbers are real text (crawlable).
- **Tokens:** `text-primary` numbers, `text-muted` labels.
- **States:** Empty state: the strip is omitted entirely if no real stats exist — never padded with placeholders.
- **Elementor mapping:** Flex row of 3 containers (Heading + Text); Xpro Free counter widget is an optional
  escalation only if token-stylable and accessible (UNVERIFIED — evaluate per docs/04 §4.2).
- **Availability:** Free.

### C8 — Newsletter form (owned-audience capture)
- **Purpose:** Email capture positioned on benefit, not frequency.
- **Anatomy:** One-line promise ("Get useful software insights, workflow tips, comparisons, and important
  updates.") · email input (labelled, required marked) · consent line linking Privacy · submit CTA ·
  privacy microcopy · inline error/success messaging.
- **Semantics:** `<form>` with `<label>` (visible or visually-hidden with accessible name), `aria-required`,
  `aria-describedby` for helper/error, error recovery; success announced via inline text (and/or
  `role="status"`).
- **States:** Default / focus / disabled during submit / loading (inline spinner) / error (text + icon + border) /
  success (text + icon).
- **Responsive:** Full-width input + CTA on mobile; helper/error text remains visible.
- **Editable fields:** Promise line, placeholder, consent text, privacy URL, success message, error message.
- **Elementor mapping:** Free form plugin shortcode/block embedded via Elementor Shortcode widget or plugin
  block (exception E2). **No fake subscriber counts, no fake urgency, no frequency promises.**
- **Availability:** Free plugin required (UNVERIFIED selection — docs/08 E2).

### C9 — Footer
- **Purpose:** Trust and navigation.
- **Anatomy:** Primary nav columns · trust links (Methodology, Editorial Standards, Affiliate Disclosure,
  Corrections) · legal (Privacy, Terms) · contact · small secondary newsletter signup · affiliate disclosure line.
- **Semantics:** `<footer>` landmark; `<nav aria-label="Footer">`.
- **Responsive:** Multi-column → 2-column → 1-column; tap targets preserved.
- **Elementor mapping:** Same builder path as header (docs/08 E3) or Hello Elementor footer + scoped CSS.
- **Availability:** Free.

### C10 — Author block (credited authorship)
- **Purpose:** Named author, role, and method on every substantive piece.
- **Anatomy:** Headshot (real, with alt) · name · role · method note link · published + updated dates.
- **Semantics:** `<address>` or list; dates in `<time datetime>`.
- **Tokens:** `text-muted` meta; avatar radius-pill.
- **States:** Missing headshot → initials avatar (defined empty state, never a fake photo).
- **Editable fields:** Name, role, headshot, method link, dates.
- **Elementor mapping:** Flex row: Image (circle) + text stack. ACF `author` field links to author meta (docs/07).
- **Availability:** Free.

### C11 — Affiliate CTA (generic, multi-program)
- **Purpose:** Commercial action, always recognizable as commercial.
- **Anatomy:** Product/Tool name · why it may fit · relevant benefit · verified information (with date) ·
  affiliate disclosure · [Learn More / Try Tool] button.
- **Semantics:** `<aside aria-label="Affiliate recommendation">` or clearly labelled region; button label states
  destination ("Visit [Tool] site").
- **Tokens:** `accent-commercial` **only** here and in the disclosure; card uses `surface-raised` +
  `border-strong` + commercial badge.
- **States:** Default / hover / focus / stale (if "verified information" date is past interval →
  "Verification due" and the CTA is visually de-emphasized until refreshed).
- **Responsive:** Stacks; disclosure always below the CTA, never hidden behind interaction.
- **Editable fields:** Product, fit line, benefit, verified-info line + date, disclosure text (default:
  "Some links may be affiliate links. This does not change our editorial evaluation."), button label/URL.
- **Elementor mapping:** Container + Heading + Text + Button (commercial tier); disclosure via C12.
- **Availability:** Free. One confirmed program: ClickUp.com (CONFIRMED — brief); component is program-agnostic.

### C12 — Affiliate disclosure bar
- **Purpose:** Reusable, visually subtle, clearly readable disclosure.
- **Anatomy:** "Editorial note — Some links may be affiliate links. This does not change our editorial
  evaluation." + link to Affiliate Disclosure page. (Exact legal wording to be finalized per target
  jurisdictions — legal review required.)
- **Semantics:** `<aside aria-label="Affiliate disclosure">`; plain language; contrast-checked.
- **Placement:** Near the top of any page with affiliate links; repeated inline at each commercial module.
- **Tokens:** `surface-inset`, `border-subtle`, `text-muted` (still ≥ 4.5:1), never commercial accent for text.
- **Availability:** Free.

### C13 — Evidence status block (per content item)
- **Purpose:** Make evidence level and freshness inspectable.
- **Anatomy:** Rows: Evidence level · Tested environment · Version · Last checked · Last updated · Source ·
  Methodology · Limitations. Missing values render **"Not yet recorded"** (defined empty state — never a
  fabricated default).
- **Semantics:** `<dl>`; stale values get the "Verification due" badge (C6) per the stale-state rule.
- **Elementor mapping:** Text Editor/Icon List with a fixed row pattern; values from ACF fields via Shortcode
  widget where structured (docs/07, D14).
- **Availability:** Free.

### C14 — Verdict box (comparison / review)
- **Purpose:** Score or recommendation, who it suits, who should skip, price checked on a date.
- **Anatomy:** Verdict label · score (only if a real scoring record exists) · Best for · Not ideal for ·
  price-checked date · methodology link.
- **Semantics:** `<section aria-labelledby>`; score as text, never color-only.
- **States:** Stale → "Verification due".
- **Availability:** Free.

### C15 — Comparison criteria rows
- **Purpose:** Same visible rubric across comparisons (use case, workflow, features, limitations, pricing,
  evidence, support, ease of use, trade-offs).
- **Anatomy:** Row: criterion label · A value · B value · evidence state per cell.
- **Semantics:** On desktop a grid of rows (NOT a giant table); if a table is ever used: `<table>` with
  `<th scope>`, sticky first column, mobile scroll container with visible affordance, commercial CTA in the
  final column only.
- **Responsive:** Rows stack to per-option cards on mobile; **no horizontal scrolling for core content**.
- **Elementor mapping:** Grid/flex containers; ACF numbered criteria fields (docs/07) or editor pattern.
- **Availability:** Free.

### C16 — Pros / cons module
- **Purpose:** Balanced trade-offs with icons plus text (never icon-only).
- **Anatomy:** Two lists (Pros / Cons), each item = icon (aria-hidden) + text.
- **Semantics:** `<ul>`; headings "Pros" / "Cons".
- **Data strategy (ACF Free has no repeater):** plain editor content in a fixed two-column pattern
  (Icon List widgets) — keeps it editor-owned without ACF Pro (docs/07).
- **Availability:** Free.

### C17 — Breadcrumbs
- **Purpose:** Orientation + crawlable hierarchy.
- **Anatomy:** Home › Collection › Item (current page not a link).
- **Semantics:** `<nav aria-label="Breadcrumb">` + `<ol>`.
- **Elementor mapping:** Text Editor with a fixed pattern, or a free breadcrumb capability if the header
  builder path provides one (UNVERIFIED — do not assume).
- **Availability:** Free (pattern-based).

### C18 — Mode toggle (dark/light)
- **Purpose:** Explicit theme control.
- **Anatomy:** Icon + label ("Dark mode" / "Light mode") or icon-only with accessible name; `aria-pressed`.
- **Semantics:** `<button>`; state explicit to the user; keyboard operable; visible focus.
- **Behavior:** full spec in docs/05 (localStorage persistence, prefers-color-scheme default, reduced-motion aware).
- **Elementor mapping:** Custom HTML snippet in a small widget (scoped, not page-sized) + docs/05 JS (exception E1).
- **Availability:** Free (tiny custom JS, documented).

### C19 — Empty / error / loading states (pattern, not a widget)
- **Purpose:** Defined behavior for every dynamic region.
- **Empty:** "No verified comparison available yet." (honest, links to methodology).
- **Error:** Inline message + retry path.
- **Loading:** Skeleton, reduced-motion aware.
- **Stale:** "Verification due" badge; never present stale as current.
- **Availability:** Free (scoped CSS + pattern).

### C20 — Skip link
- **Purpose:** Keyboard users bypass the header.
- **Anatomy:** First focusable element: "Skip to content" → `#main`.
- **Semantics:** Visible on focus; target landmark receives focus (`tabindex="-1"`).
- **Elementor mapping:** Small custom snippet in the header builder path (exception E3 scope) or theme template part.
- **Availability:** Free.

## 3.2 Variant summary

| Component | Variants (token-level only) |
| --- | --- |
| Card | article · review · comparison · tool · research · workflow |
| Button | primary · secondary · text · commercial |
| Badge | neutral · status · commercial |
| Band | default · inverse (inverse reserved for ONE conversion module per page) |
| Form | newsletter · (tool submission — future, not at launch) |

## 3.3 Signature preservation map (6 required signatures)

All six must survive at desktop, tablet, and mobile widths (master prompt §6). ≥3 are source-backed.

| # | Signature | Source backing | Where it lives | How it survives responsive + dark mode | Verification |
| --- | --- | --- | --- | --- | --- |
| S1 | **Typed collections** — Guides, Workflows, Comparisons, Reviews, Tools, Research each own a card form and archive | CONFIRMED (source: typed collections with own header + card form) | C4 card variants; collection sections on hubs; archives | Card grid 3→2→1-up; type label is text (never color-only); dark mode swaps `surface-raised`/`border-subtle` only | Visual check at 3 breakpoints × 2 themes |
| S2 | **One module anatomy** — label, heading, sentence, action | CONFIRMED (source: eyebrow + H2 + one-line rhythm) | Every section on homepage, hubs, and articles | Anatomy is structural (container stack), independent of width; mobile keeps the same order | Structure audit per template |
| S3 | **Evidence on the surface** — stats, sample sizes, independence statements in featured blocks | CONFIRMED (source: evidence stats on featured items) | C5 featured block, C7 stat row, §2.4 sections 03/08/09 | Stats are a `<dl>`/list — reflows naturally; real values only; omitted entirely if none exist | Content audit: no fabricated stats |
| S4 | **Credited authorship** — named author, role, method | CONFIRMED (source: credited authors) | C10 author block on every substantive piece | Flex row stacks on mobile; initials-avatar empty state; token-based | Template audit |
| S5 | **Commercial transparency** — reserved accent-commercial token; disclosure bar; "Last verified" labels | CONFIRMED (source: explicit commercial/editorial labelling pattern) | C11, C12, C6 stale badge, C13 | Commercial token reserved in both themes; disclosure below CTA, never hidden; stale badge is text | Visual + DOM audit in both themes |
| S6 | **Theme parity** — light and dark designed together, not derived | CONFIRMED (source: light/dark asset variants; toggle exists) | docs/05 token pairs; logo light/dark variants | Semantic token overrides; tone-step dark surfaces; no inversion; toggle in header + mobile nav | Both themes at 3 breakpoints + contrast re-measure |

## 3.4 Reuse plan (shared anatomy vs instance content)

**Rule:** separate shared component anatomy from instance-specific content. Never globally couple page-specific
editorial copy or product data.

| Layer | What is shared | Mechanism (Free) | Propagation | Owner |
| --- | --- | --- | --- | --- |
| Global style | Colors, fonts, button styles | Elementor Kit Global Colors/Fonts (mirrored to tokens, docs/04 §4.4) | Kit-wide, one source of truth | Design system curator |
| Token CSS | Semantic + component CSS variables, utility classes | One scoped stylesheet, `.rmh-` namespace (docs/04 §4.6) | Site-wide via enqueued stylesheet | Design system curator |
| Component anatomy | Card, featured block, verdict box, disclosure, author block, form | Elementor **section templates** (save-as-template, duplicated per use — D16). Global Widget propagation is Pro and is NOT assumed | Manual: update the template, then update instances (documented per instance) | Component reuse architect |
| Instance content | Titles, copy, product data, dates, images | Native post/page content + ACF fields (docs/07) | n/a — instance-owned | Editors |
| Template families | 18 page structures | Elementor page templates / theme template parts (docs/08 E3 path) | Per family | WordPress architect |

**Coupling rules:**
- A component template never contains instance editorial copy or product data — only structure + placeholder frames.
- ACF fields carry structured data only; article body copy stays native WordPress (docs/07).
- No component may reach into another component's content (no global coupling of page-specific data).
- Drift control (master prompt §19): Detect → Compare against tokens → Determine intentional vs unintentional →
  Update global token/component → Regression test → Document. Never silently introduce one-off spacing, color,
  radius, shadow, font, or CTA treatments; never silently overwrite intentional deviations.
