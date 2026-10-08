# 04 — Elementor Architecture, Native Mapping, Tokens, Kit Checklist, CSS/JS Policy

Labels: CONFIRMED / LIKELY / ASSUMED / UNVERIFIED / VERSION-DEPENDENT / PROPOSED (key in [docs/00](00-index.md)).
Architecture principle: **native Elementor Free Containers (Flexbox) first.** Any V4/Atomic feature, Pro widget,
Xpro paid widget, Global Widget propagation, ACF dynamic mapping, and custom CSS scope is UNVERIFIED until
checked in the target installation (dialect capture runbook: docs/01 §1.5).

## 4.1 Free-stack compatibility (must be confirmed at install)

| Element | Native Free? | Note | Label |
| --- | --- | --- | --- |
| Containers (flex/grid), Heading, Text Editor, Image, Button, Icon, Icon Box, Icon List, Accordion, Divider, Spacer, HTML (small scoped snippets only) | Yes | Core Free widgets | LIKELY (verify at installed version) |
| Nav Menu widget | Yes | Launch nav; no mega-menu | LIKELY |
| Search Form widget | Yes | Header search | LIKELY |
| Forms | **No** | Free has no native Form widget; use a free form/newsletter plugin (exception E2) | LIKELY (verify absence at install) |
| Global Colors / Global Fonts | Yes | Map to tokens (docs §4.4) | LIKELY |
| Global Button Styles | Yes | Map to button tiers | LIKELY |
| Loop Grid / Posts / Query loop | **No / Limited** | Loop Grid is Pro; Free has no query loop. Free paths: Xpro Free post-grid widget (if token-stylable + accessible), or manual card duplication for small launch inventory (~8–12 URLs makes manual duplication viable) | LIKELY / VERSION-DEPENDENT |
| Theme Builder (header/footer/single) | **No** (Pro) | Fallback: Hello Elementor patterns + scoped CSS, or Xpro Theme Builder Free if verified (docs/08 E3) | LIKELY (Pro absence) / UNVERIFIED (Xpro TB Free) |
| Mega menu | No | Not used — simple menu per IA | CONFIRMED (design decision) |
| Sticky header, popups, motion effects | Pro | Sticky = scoped CSS (position: sticky); motion effects not used | LIKELY |
| Dynamic Tags / ACF binding | Pro | Free path: Shortcode widget + `[acf …]`/template helpers (docs/07, D14) | LIKELY / VERSION-DEPENDENT |
| Global Widget propagation | Pro | Free path: section templates + duplication (D16) | LIKELY |

This table reflects general knowledge of Elementor's free tier plus public docs; it must be confirmed against
the installed version (UNVERIFIED → CONFIRMED via runbook).

## 4.2 Xpro Free usage policy (UNVERIFIED until inspected)

Evaluate each candidate **before** relying on it. A widget is accepted only if (a) it is in the free tier of the
installed version, (b) it is token-stylable (consumes Global Colors/Fonts or scoped variables), and (c) its
output is accessible (headings, lists, aria, keyboard).

| Candidate widget | Purpose in ReadMeHub | Acceptance condition | Fallback if rejected |
| --- | --- | --- | --- |
| Post grid / blog cards | Collection listings on hubs | Token-stylable + accessible markup + honest output | Manual card templates (viable at launch inventory size) |
| Tabs | Comparison criteria switching (optional) | Keyboard operable, aria-correct | Accordion or stacked sections |
| Accordion | Expandable comparison details | Native Elementor Accordion preferred first | Native Accordion |
| Pricing table | NEVER used for fake pricing | Only real editor-entered pricing with source + date | Verdict box + text rows (C14/C15) |
| Testimonial | Not used at launch (no testimonials exist) | — | Omit entirely |
| Counter | Homepage evidence stat row | Only for real values; accessible markup; token-stylable | Static Heading + Text (C7) |
| Theme Builder (Xpro Theme Builder Free) | Header/footer templates | Verified free + conditions assignable + token-stylable | Hello Elementor header/footer + scoped CSS (E3) |

Every accepted Xpro usage is recorded in the exception register (docs/08) with version + reason.

## 4.3 Elementor component mapping (§11 format)

Format: Section · Semantic purpose · Layout primitive · Elementor impl · Content source · Editable fields ·
Responsive · Interaction states · Accessibility · Dependencies · Exception · Verification.

### M1 — Homepage hero
- **Section:** Homepage hero
- **Semantic purpose:** Primary value proposition + decision entry point
- **Layout primitive:** Two-column flex container (stacks on mobile)
- **Elementor impl:** Container + Heading + Text Editor + Button + nested visual containers
- **Content source:** Static page content initially; ACF only if reused
- **Editable fields:** Eyebrow, H1, Description, Primary CTA, Secondary CTA, hero visual (labelled if illustrative)
- **Responsive:** Single column on mobile; text first, visual second; visual never pushes H1 off-screen
- **Interaction:** Buttons use hover/focus/active states per docs/06
- **Accessibility:** H1 is page-level only; buttons semantic; decorative visual `aria-hidden`; illustrative UI carries an "Illustration — not a real interface" note where fictional (honest-illustration principle)
- **Dependencies:** None (native Free)
- **Exception:** None unless native controls cannot reproduce the nested "Decision → Compare → Verify → Choose" visual — then composed containers, still no HTML-widget section
- **Verification:** Desktop/tablet/mobile + keyboard + 200% zoom + reduced motion

### M2 — Decision cards section (§2.4 S04)
- **Semantic purpose:** Route visitor to their problem (replaces "Latest posts")
- **Layout primitive:** Grid container, 3–4 cards
- **Elementor impl:** Container(grid/flex) + repeated card template (C4)
- **Content source:** Static/ACF per card; one card = one decision route
- **Editable fields:** Card type label, title, summary, action
- **Responsive:** 3-up → 2-up → 1-up; equal height without clipping
- **Interaction:** Card states (C4); whole-card link via stretched action link
- **Accessibility:** H2 section + H3 cards; focus ring on links; non-color status
- **Dependencies:** None
- **Exception:** None
- **Verification:** Breakpoint stacking; keyboard order; empty-state defined

### M3 — Featured workflows (§2.4 S05)
- **Semantic purpose:** Show practical depth (task, outcome, context, evidence state, CTA)
- **Layout primitive:** Split featured block (C5) + card row
- **Elementor impl:** Flex split containers + C5 + C4 instances
- **Content source:** Instance content; evidence state from ACF `evidence_level`/`last_verified` (docs/07)
- **Editable fields:** Featured fields (C5) + card fields
- **Responsive:** Featured splits 5/7 → stacked; cards 2-up → 1-up
- **Interaction:** Evidence-state badges; stale → "Verification due"
- **Accessibility:** `<dl>` for stats; `<time datetime>` for dates
- **Dependencies:** ACF optional (D14 Shortcode surface)
- **Exception:** E4 (ACF shortcodes) if dynamic; else static
- **Verification:** Empty states; date format consistency; contrast of badges

### M4 — Featured comparison (§2.4 S07 / template 07)
- **Semantic purpose:** Model an A-vs-B decision with Best for / Evidence / Trade-off each
- **Layout primitive:** Two comparison cards + criteria rows (C15), stacked on mobile
- **Elementor impl:** Flex containers + C14 verdict boxes + C15 row pattern
- **Content source:** ACF comparison fields or editor pattern (docs/07)
- **Editable fields:** Option names, best-for lines, evidence lines, trade-off lines, criteria rows
- **Responsive:** Side-by-side cards desktop; stacked mobile; **no horizontal scroll**
- **Interaction:** Expandable details via native Accordion; stale flags
- **Accessibility:** Row semantics; labels never color-only; link names meaningful
- **Dependencies:** None required; Xpro Tabs optional (§4.2)
- **Exception:** none / E5 if a table is ever introduced (sticky column + scroll affordance)
- **Verification:** Mobile stack at 375/414/600/800px; keyboard through accordion

### M5 — Newsletter section (§2.4 S10) + Newsletter page (template 10)
- **Semantic purpose:** Owned-audience capture on benefit, not frequency
- **Layout primitive:** Band (inverse) with inner wrap; form block (C8)
- **Elementor impl:** Container band + Heading + Text + form plugin shortcode/block (Shortcode widget) + disclosure microcopy
- **Content source:** Static promise line; form via free plugin (E2)
- **Editable fields:** Promise line, consent text, privacy URL, success/error messages
- **Responsive:** Full-width input + CTA on mobile; error/help visible
- **Interaction:** Full state matrix (docs/06) — loading, error, success, disabled-during-submit
- **Accessibility:** Labels, `aria-required`, `aria-describedby` errors, `role="status"` success
- **Dependencies:** Form plugin (E2, UNVERIFIED selection)
- **Exception:** E2 documented
- **Verification:** Keyboard-only submit; error recovery; no frequency promises in copy

### M6 — Methodology six-step process (§2.4 S11)
- **Semantic purpose:** Make trust inspectable (closely stacked steps, "tactile" modules)
- **Layout primitive:** 6 connected step modules (grid 3×2 → 2×3 → 1×6)
- **Elementor impl:** Repeated containers (step number label + heading + sentence); connectors via CSS borders
- **Content source:** Static; links to Methodology page
- **Editable fields:** Step label, heading, sentence
- **Responsive:** Grid collapses; connectors simplify to vertical rhythm on mobile
- **Interaction:** None required (static); optional hover surface change on steps
- **Accessibility:** `<ol>` of steps; numbers are text
- **Dependencies:** Scoped CSS connectors
- **Exception:** CSS connector treatment (documented, token-based)
- **Verification:** No DOM-depth blowup; reading order = visual order

### M7 — Header / Footer
- **Semantic purpose:** Wayfinding + trust
- **Layout primitive:** Flex containers
- **Elementor impl:** Xpro Theme Builder Free templates **if verified** (E3); else Hello Elementor header/footer + scoped CSS; else minimal template part
- **Content source:** WP menus; static trust links; toggle control (E1)
- **Editable fields:** Logo (light/dark), menu, CTA label/URL, footer columns, disclosure line
- **Responsive:** Nav collapses at tablet breakpoint (actual value from Site Settings); mobile menu per C2
- **Interaction:** Sticky header (CSS), toggle (E1), mobile open/close
- **Accessibility:** Landmarks, skip link (C20), `aria-expanded`, visible focus, 44px targets
- **Dependencies:** E1 (toggle JS), E3 (builder path), E6 (mobile menu JS if native widget insufficient)
- **Exception:** E1, E3, E6 as applicable
- **Verification:** Keyboard full traversal; sticky does not obscure anchors; both themes

### M8 — Evidence status block (C13) on articles/comparisons/entities
- **Semantic purpose:** Evidence level + freshness inspectable before verdicts/CTAs
- **Layout primitive:** Definition list rows
- **Elementor impl:** Icon List / Text pattern + ACF shortcodes (D14) where structured
- **Content source:** ACF fields with explicit empty states ("Not yet recorded")
- **Editable fields:** All evidence fields (docs/07)
- **Responsive:** Rows wrap; never horizontal scroll
- **Interaction:** Stale → "Verification due"
- **Accessibility:** `<dl>`; time elements; text labels
- **Dependencies:** ACF Free (docs/07)
- **Exception:** E4 (shortcode surface)
- **Verification:** Empty-state rendering; no fabricated defaults

### M9 — Affiliate CTA (C11) + disclosure (C12)
- **Semantic purpose:** Honest commercial action with disclosure
- **Layout primitive:** Card container + commercial button + disclosure line
- **Elementor impl:** Container + Heading + Text + Button(commercial tier) + Text(disclosure)
- **Content source:** ACF `affiliate_url`, `affiliate_disclosure`, `price_checked_date` or editor pattern
- **Editable fields:** Product, fit, benefit, verified-info + date, disclosure, button
- **Responsive:** Stacks; disclosure always visible below CTA
- **Interaction:** Hover/focus; stale de-emphasis when verification overdue
- **Accessibility:** `<aside aria-label>`; button states destination; commercial distinction is textual + token
- **Dependencies:** None required
- **Exception:** none
- **Verification:** Disclosure adjacent to every CTA; commercial token reserved; DOM audit both themes

## 4.4 Design token architecture and Token → Elementor mapping (master prompt §5.20, §12)

Layers: **Primitive → Semantic → Component.** Each value defined exactly once. Implementation: CSS custom
properties on `:root`, mirrored into Elementor Global Colors and Global Fonts so editors use the same source
of truth. Hex values, font families, and exact sizes are **deferred to the decision gate** (B3); the mapping
below fixes destinations and names now.

### 4.4.1 Primitive layer (names PROPOSED)

```
color-neutral-0 … color-neutral-900        (cool grey ramp)
color-accent-500 (+ 600/700 for active)    (one hue)
color-commercial-500                       (reserved commercial hue)
color-success / warning / danger / info
space-1..9   (4, 8, 12, 16, 24, 32, 48, 64, 96 px — 4px base)
radius-1 (6px) / radius-2 (12px) / radius-pill (999px)
font-size-1..8 (display, heading-l/m/s, body, body-s, label, meta, button roles)
```

### 4.4.2 Semantic + component layer → destinations (master prompt §12 table)

| Token | Value | Elementor destination | Status |
| --- | --- | --- | --- |
| surface-page | Deferred (cool grey) | Global Color: surface-page | PROPOSED |
| surface-raised | Deferred | Global Color: surface-raised | PROPOSED |
| surface-inset | Deferred | Scoped CSS var `--rmh-surface-inset` (or Global Color) | PROPOSED |
| surface-inverse | Deferred | Global Color: surface-inverse | PROPOSED |
| text-primary | Deferred (≥ 4.5:1 on surfaces — verify by test) | Global Color: text-primary | PROPOSED |
| text-muted | Deferred (≥ 4.5:1; never lighter for small text) | Global Color: text-muted | PROPOSED |
| accent-primary | Deferred (one hue) | Global Color: accent-primary | PROPOSED |
| accent-commercial | Deferred (reserved: affiliate CTA + disclosure only) | Global Color: accent-commercial | PROPOSED |
| border-subtle / border-strong | Deferred (1px hairline; 3:1 for input borders) | Scoped CSS var `--rmh-border-subtle` / `--rmh-border-strong` | PROPOSED |
| focus-ring | Deferred (3:1 against adjacent colors) | Scoped CSS var `--rmh-focus-ring` | PROPOSED |
| status-success/warning/danger/info | Deferred (never color-only) | Global Colors or scoped vars | PROPOSED |
| Display font | Deferred (one variable family or system stack) | Global Font: display | PROPOSED |
| Body font | Deferred | Global Font: body | PROPOSED |
| radius-s/m/pill | 6px / 12px / 999px | Scoped CSS vars | PROPOSED |
| elevation-1/2 | Deferred (hover cards / menus+dialogs; disabled in dark) | Scoped CSS classes `.rmh-elev-1/2` | PROPOSED |
| spacing scale | 4–96px | Scoped CSS vars | PROPOSED |
| card-bg, card-border, button-primary-bg… | Derived from semantic layer | Component CSS vars | PROPOSED |
| Breakpoints | Actual site values | Elementor Site Settings | CONFIRMED only from runtime (defaults LIKELY 767/1024) |

Rule: never duplicate literal token values when a global reference exists; prefer semantic Global Colors/Fonts;
use scoped CSS custom properties only where native controls cannot express the token.

### 4.5 Global Kit structure (preferred site Kit)

```
Site Kit
├── Header template (E3 path — Xpro TB Free if verified, else Hello Elementor + CSS)
├── Footer template (same condition)
├── Global Colors (semantic set from §4.4.2)
├── Global Fonts (roles: display, body)
├── Global Button Styles (primary, secondary; commercial via scoped class)
├── Shared utility classes / CSS variables (single stylesheet, .rmh- namespace)
├── Homepage
├── Audience / Problem Hub
├── Use-Case Hub
├── Workflow Template
├── Comparison Template
├── Product / Entity Template
├── Research / Tool Template
├── Newsletter Template
└── Trust / Policy Templates (About, Methodology, Editorial Standards, Contact, Privacy, Terms, Affiliate Disclosure, Corrections)
```

### 4.6 Custom CSS policy (master prompt §2.11, §2.4)

One stylesheet (or a small, documented set), `.rmh-` namespace, token block at the top. Contents, in order:
1. Token definitions (`:root`) + theme overrides (`[data-theme="dark"]`, `prefers-color-scheme`).
2. Focus rings and hover states.
3. Card variants, badges, commercial label, verdict box.
4. Sticky table column + responsive table scroll (only if a table is ever used — E5).
5. `prefers-reduced-motion` handling.
6. Sticky header; mobile menu behavior if required.

Must be: scoped · reusable · documented · token-based · maintainable · responsive · minimal.
Never: one giant inline CSS block per page; per-page hardcoded hex; competing global styles.

### 4.7 Minimal JS policy (master prompt §2.5)

| JS | Size target | Purpose | Isolation |
| --- | --- | --- | --- |
| Theme toggle + localStorage persistence | ~15 lines | Dark mode | Own script, `defer`, no dependencies |
| Marquee pause control | Optional, small | Only if a logo row is ever used | Own script; CSS animation paused via `prefers-reduced-motion` |
| Mobile menu | Only if native widget insufficient | Menu open/close, focus management, Escape | Own script (E6) |
| Everything else | — | CSS | — |

No animation libraries. No carousels. All JS is documented in docs/08 with scope, risk, and exit condition.

## 4.8 Kit checklist (Confirmed / Proposed / N/A / Needs verification)

| Kit item | Status | Note |
| --- | --- | --- |
| Theme = Hello Elementor, not replaced | CONFIRMED (brief) | No competing theme styles |
| Elementor Pro absent | CONFIRMED (brief) | No Pro features mapped |
| New Kit created | Needs verification | Greenfield — create at build (CONFIRMED none exists) |
| Global Colors = semantic set | Proposed | Names fixed; hex at decision gate |
| Global Fonts = display + body | Proposed | Family at decision gate |
| Global Button Styles | Proposed | Primary/secondary; commercial scoped |
| Site Settings breakpoints recorded | Needs verification | Defaults LIKELY 767/1024; runbook docs/01 §1.5 |
| Elementor dialect (V3/V4) recorded | Needs verification | Affects widget mapping (VERSION-DEPENDENT) |
| Xpro Addons Free installed version recorded | Needs verification | Public latest 1.7.9 (LIKELY) |
| Xpro Theme Builder Free availability recorded | Needs verification | Determines E3 path |
| ACF Free installed version recorded | Needs verification | Public latest 6.8.10 (LIKELY) |
| Form/newsletter plugin selected | Needs verification | E2 criteria; free only |
| Scoped stylesheet with token block | Proposed | `.rmh-` namespace |
| Toggle JS isolated (~15 lines) | Proposed | E1 |
| Skip link + landmarks | Proposed | C20 |
| Section templates for reusable components | Proposed | D16 (no Global Widget propagation) |
| Mega-menu | N/A | Not used by design |
| Popups / motion effects / sticky (Pro) | N/A | Replaced by scoped CSS / not used |
| Paid add-ons of any kind | N/A | Prohibited by brief |
