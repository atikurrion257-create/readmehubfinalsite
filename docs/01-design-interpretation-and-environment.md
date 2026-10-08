# 01 — Design Interpretation, Decisions, Assumptions, and Target Environment

Labels: CONFIRMED / LIKELY / ASSUMED / UNVERIFIED / VERSION-DEPENDENT / PROPOSED (key in [docs/00](00-index.md)).

## 1.1 Design interpretation

**What ReadMeHub is.** An editorial-first, decision-support publication. The homepage is a *decision gateway*,
not a "latest posts" feed. The primary UX sequence is fixed:

> Understand → Choose a problem → Explore evidence → Compare options → Make a decision → Take action

**What the experience must make a new visitor think** (master prompt §31):
"This site helps me decide what to use, how to use it, and why I should trust the information."

**What the experience must feel like:** soft, premium, credible, editorial, exceptionally clear — in both
light and dark mode.

**What ReadMeHub is not:** a generic SEO blog, news site, content farm, coupon directory, "Top 10 tools" site,
AI-generated listicle site, or a ClickUp landing page. The single confirmed affiliate relationship (ClickUp.com)
must never dominate the visual identity, and the Affiliate CTA component is built generically for multiple
verified programs later.

**Business model shaping the design.** Content-driven affiliate promotion, editorial-first. Value flow:
User value → Evidence → Trust → Decision support → Commercial action. Never: Advertisement → Affiliate CTA →
Thin content. Trust/methodology pages are first-class surfaces built *before* serious monetization.

**Source research basis.** The design system is informed by structural research on jentic.com and
jentic.com/resources (fetched 2026-10-08). The research returned rendered content and markup-level structure
only — no stylesheets, computed CSS, variables, font files, breakpoints, or interaction behavior. What is
transferred is the **system, not the look**: typed content collections, eyebrow + H2 + one-line rhythm,
evidence stats on featured items, explicit commercial/editorial labelling, credited authorship, and a
three-layer token architecture supporting light and dark. Jentic's palette, type, copy, illustrations, and
layouts are not copied. All Jentic pixel values are UNVERIFIED and none are stated as fact.

### 1.1.1 Confirmed structural principles adopted from source research (CONFIRMED — source, 2026-10-08)

| # | Principle | Where it shows in ReadMeHub |
| --- | --- | --- |
| 1 | One idea per section (eyebrow + H2 + one-line subhead) | Every homepage section and hub module |
| 2 | Single primary action per view | CTA system: one primary CTA per view |
| 3 | Typed content collections (each type owns a header + card form) | Guides, Workflows, Comparisons, Reviews, Tools, Research |
| 4 | Credibility is displayed, not claimed | Evidence slots, author blocks, methodology links |
| 5 | Honest illustration (fictional UI labelled as invented) | Hero visual and any illustrative UI must be labelled if invented |
| 6 | Role-plus-descriptor naming | Nav items and product cards carry plain-language job descriptions |
| 7 | Theme parity (light and dark designed together) | Dark mode is a designed theme, not an inversion |

### 1.1.2 ReadMeHub design principles (PROPOSED)

Evidence first · Typed collections · Label/heading/sentence/action module anatomy · One primary action per view ·
Commercial transparency · Credited authorship · Token-driven restraint · Theme parity · Elementor Free first.

## 1.2 Design decisions (the team's calls)

| ID | Decision | Rationale | Label |
| --- | --- | --- | --- |
| D1 | Adopt the typed-collection editorial system with one module anatomy: **label, heading, sentence, action** | Repetition of few component types is the source research's strongest confirmed pattern; it is also the cheapest system to maintain in Elementor Free | PROPOSED (adopting CONFIRMED source principle) |
| D2 | Three-layer token architecture: **primitive → semantic → component**, implemented as CSS custom properties on `:root`, mirrored into Elementor Global Colors/Fonts | One source of truth; editors and CSS never diverge | PROPOSED |
| D3 | Hex palette, font families, and exact sizes are **deferred to a decision gate** with contrast testing in both themes; this deliverable ships a selection worksheet, not values | Master prompt §5.2/§5.3 defer values; inventing hex here would violate the no-fabrication rule | PROPOSED (process) |
| D4 | Light theme = cool grey surface; dark theme = dark cool material surface with tone steps; directional lighting preserved; never black + neon purple / cyberpunk / glassmorphism / generic dark SaaS | Master prompt §2.12; tone-step dark surfaces need no shadows, which suits Elementor Free | PROPOSED |
| D5 | Dark mode via semantic token overrides under `[data-theme="dark"]` + `prefers-color-scheme` default + localStorage persistence + ~15-line isolated toggle JS | Elementor Free cannot do this natively; master prompt §2.13/§13 explicitly permits small isolated custom JS | PROPOSED |
| D6 | Free-stack only. Escalation order: Native Elementor Free → Composed Elementor Free → Xpro Free → ACF Free / WP content model → Scoped Custom CSS → Minimal JS | Master prompt §2.9/§2.10 hard rule | PROPOSED (rule adoption) |
| D7 | Header/footer: primary path = Xpro Theme Builder Free **if verified available and token-stylable in target**; fallback = Hello Elementor native header/footer customization + scoped CSS; last resort = minimal template part | Elementor Pro Theme Builder is out of scope; exact Xpro Theme Builder Free capability is UNVERIFIED | PROPOSED / UNVERIFIED |
| D8 | Navigation: Elementor Free Nav Menu widget (no mega-menu). Launch nav: Explore, Guides, Comparisons, Research, About, Search, Newsletter | Master prompt §2.15; no empty future categories | PROPOSED |
| D9 | Newsletter capture: Elementor Free has **no native Form widget** (LIKELY — verify in target). Primary candidate: a free newsletter/form plugin (e.g., MailPoet free for owned-list capture, or Fluent Forms free), embedded via its form shortcode/block. Selection criteria and candidates in docs/08, exception E2 | Required from launch (master prompt §2.14); must be free, accessible, and not promise a cadence | PROPOSED / UNVERIFIED |
| D10 | Comparison UX: decision summaries, best-for labels, trade-off cards, criteria rows, expandable details, responsive stacking — **no giant desktop tables**; if a table is ever used: sticky first column, mobile scroll with visible affordance, commercial CTA in final column only | Master prompt §8.4; mobile must never require horizontal scrolling for core content | PROPOSED |
| D11 | Evidence slots (Tested, Verified, Last checked, Last updated, Source, Methodology, Tested environment, Version, Limitations, Evidence level) are **designed but never auto-populated**; missing values render a defined empty state ("Not yet recorded"), never a fabricated default | Master prompt §2.5 hard rule | PROPOSED (rule adoption) |
| D12 | Launch cluster remains a placeholder: `[LAUNCH AUDIENCE / PROBLEM — TO BE SELECTED]`. All IA, slugs, and copy frames use placeholders until the cluster is chosen | Master prompt §2.3: launch is one focused audience/problem/use case | ASSUMED (placeholder policy) |
| D13 | ACF is used only for genuinely structured, reusable, queryable, editor-owned data (entity/review/comparison metadata). Normal article copy stays native WordPress | Master prompt §14; ACF Free lacks Repeater/Flexible Content (CONFIRMED — ACF docs) | PROPOSED |
| D14 | ACF values surface in Elementor Free via the native **Shortcode widget** (`[acf field="…"]` pattern) or tiny template helpers — Elementor Free has no ACF dynamic-tag binding | Keeps structured data editable by editors while staying free-stack; small scope, documented in docs/07/08 | PROPOSED / VERSION-DEPENDENT |
| D15 | Motion is functional only (hover, focus, menu open); 150–250ms ease-out; no entrance animation on reading content; `prefers-reduced-motion` honored | Master prompt §5.12 | PROPOSED |
| D16 | Reuse mechanism in Free: Kit globals + duplicated section templates ("save as template" pattern). **Global Widget propagation is Pro and is not assumed** | Keeps propagation honest within the free tier | PROPOSED |

## 1.3 Assumptions, unknowns, and blockers

### 1.3.1 Blockers (must resolve before implementation)

| # | Blocker | Why it blocks | Owner | Label |
| --- | --- | --- | --- | --- |
| B1 | Target runtime not inspected: WordPress version, Elementor Free version, Elementor dialect (V3 Containers vs V4 Atomic/hybrid), ACF Free version, Xpro Addons Free version, Xpro Theme Builder Free availability, Site Settings breakpoints | Every native mapping, breakpoint behavior, and widget availability depends on these | Implementation agent | UNVERIFIED |
| B2 | Launch cluster not selected (audience / problem / cluster) | Homepage decision cards, hub pages, slugs, and all copy frames are placeholders until chosen | Site owner | ASSUMED (placeholder) |
| B3 | Visual identity decision gate not run (hex palette, font families, exact sizes) | Global Colors/Fonts cannot be finalized; contrast cannot be tested | Design team | PROPOSED (deferred by spec) |
| B4 | Newsletter capture plugin not selected/verified | Newsletter is required from launch; Elementor Free has no Form widget | Implementation agent | UNVERIFIED |

### 1.3.2 Assumptions (deliberate gap-closers)

| # | Assumption | Basis | Label |
| --- | --- | --- | --- |
| A1 | Hello Elementor is installed and remains the theme (not replaced) | Master prompt §2.8 (CONFIRMED) | CONFIRMED |
| A2 | Elementor Pro is NOT installed and will not be required | Master prompt §2.8 (CONFIRMED) | CONFIRMED |
| A3 | Site is greenfield: no existing Kit, templates, custom CSS, or variables | Master prompt §4 (CONFIRMED) | CONFIRMED |
| A4 | Editors are non-developers; all ordinary content must be editable without code | Master prompt §20 | ASSUMED |
| A5 | English (US) primary locale; international audience; pricing/currency/region display must be flexible later | Master prompt §2.1 | CONFIRMED (brief) |
| A6 | One confirmed affiliate program: ClickUp.com; more may be added later via the generic Affiliate CTA | Master prompt §2.6 | CONFIRMED (brief) |
| A7 | No existing design system to preserve; this spec creates the system | Master prompt §2.8 | CONFIRMED |

### 1.3.3 Unknowns (UNVERIFIED until runtime capture)

- Elementor dialect in target: V3 Containers / V4 Atomic / hybrid / legacy (V4 Beta behavior is VERSION-DEPENDENT).
- Actual Site Settings breakpoints (defaults are LIKELY 767 mobile / 1024 tablet — see §1.4).
- Which Xpro Free widgets exist in the installed version and whether each is token-stylable and accessible.
- Whether Xpro Theme Builder Free is available and can build header/footer in the installed version.
- Whether Elementor Free Global Fonts in the installed version supports the planned custom font roles.
- Mobile nav behavior of the free Nav Menu widget (hamburger/accordion) at the installed version.
- Form plugin landscape at install time (free options, accessibility, spam handling).

## 1.4 Target environment

Public point-in-time facts below were gathered 2026-10-08 from public sources. They describe the **public
latest releases**, not the target installation. Every value must be re-verified in the target runtime before
implementation (capture runbook §1.5). Labels: LIKELY (public source, point-in-time).

| Item | Public point-in-time value (2026-10-08) | Label | Verify in target |
| --- | --- | --- | --- |
| WordPress version | 7.1.3 (released 2026-10-06; 7.1 branch shipped 2026-08-19) — per wordpress.org release archive [1](https://wordpress.org/download/releases/) | LIKELY | `wp core version` / Dashboard → Updates |
| Theme | Hello Elementor (choice CONFIRMED by brief; installed version unknown) | CONFIRMED choice / UNVERIFIED version | Appearance → Themes |
| Elementor Free version | 3.35.x line current publicly; 3.35 marked the "V4 Beta" milestone (Atomic components, CSS-first); official 4.0 announced as upcoming and expected to turn on automatically for new sites — per [3](https://edywerder.ch/elementor-current-version/) | LIKELY / VERSION-DEPENDENT | Plugins → Installed; note V4 opt-in state |
| Elementor Pro | Not installed, not required | CONFIRMED (brief) | Plugins → Installed |
| Elementor dialect | Unknown — V3 Containers vs V4 Atomic/hybrid | UNVERIFIED | Elementor → Settings/Features; inspect editor UI for Containers vs Atomic |
| Default breakpoints | Mobile 767px, Tablet 1024px (Elementor editor defaults; customizable in Site Settings → Layout → Breakpoints) — per Elementor help [2](https://elementor.com/help/mobile-editing/) | LIKELY | Elementor → Site Settings → Layout → Breakpoints (record actual values) |
| Xpro Addons Free | 1.7.9 (2026-09-08), "tested up to" WordPress 7.1, 40,000+ active installs, 50+ free widgets; a paid Xpro tier exists and is out of scope — per wordpress.org [4](https://wordpress.org/plugins/xpro-elementor-addons/) | LIKELY | Plugins → Installed |
| Xpro Theme Builder Free | Free tier exists per vendor; exact widgets/conditions in free tier unknown | UNVERIFIED | Inspect Xpro → Theme Builder after install |
| ACF Free | 6.8.10 (2026-09-10), tested up to WP 7.1.2. ACF's own docs: Repeater, Flexible Content, Options Pages, ACF Blocks, and Gallery are **PRO-only**; Free includes field groups UI + basic field types — per [5](https://www.advancedcustomfields.com/download/) | LIKELY (version) / CONFIRMED (Free-vs-PRO feature split, vendor docs) | Plugins → Installed; confirm field-type list in UI |
| Existing Kit | None — create new Kit | CONFIRMED (greenfield) | Elementor → Tools / Site Kit |
| Existing reusable templates | None | CONFIRMED (greenfield) | Elementor → Templates |
| Existing custom CSS / variables | None | CONFIRMED (greenfield) | — |

### 1.5 Runtime capture runbook (run first in the target, before any build)

Record each result into the Kit checklist (docs/04) and confidence ledger (docs/10), upgrading labels from
UNVERIFIED to CONFIRMED.

1. **WordPress:** Dashboard → Updates, or WP-CLI `wp core version`. Record PHP version and server stack.
2. **Plugins:** `wp plugin list` — record Elementor Free, Hello Elementor (theme: `wp theme list`), ACF, Xpro, form plugin.
3. **Elementor dialect:** Elementor → Settings (Site Settings) → Features/Experiments: note whether V4/Atomic
   components are active, whether Containers (Flexbox) are the default layout primitive, and any V4 auto-on state for new sites.
4. **Breakpoints:** Elementor → Site Settings → Layout → Breakpoints. Record mobile/tablet values and any
   additional active breakpoints. These become the only responsive source of truth.
5. **Kit:** confirm a fresh Kit exists; list Global Colors and Global Fonts currently defined (expected: defaults only).
6. **Xpro:** list installed Xpro Free widgets relevant to this design (post grid/blog cards, tabs, accordion, pricing table, testimonial, counter, theme builder). For each candidate widget: check token-stylability (can it consume Global Colors/Fonts?) and output semantics (headings, lists, aria).
7. **Theme:** confirm Hello Elementor active; inspect its header/footer customization surface (Customizer options, theme hooks) for the header/footer fallback path (docs/08, E3).
8. **Forms:** confirm no Elementor native Form widget; shortlist free form/newsletter plugins against the criteria in docs/08 (E2).
9. **Media/performance baseline:** record default image sizes, any caching/optimization plugins already present (none expected — greenfield).

## 1.6 Out-of-scope by design (do not build at launch)

Deals/Offers, Partner, Media Kit, Submit Product templates; mega-menu; empty future category hubs; coupon
archives; 13-category navigation; tools built for visual novelty; any paid plugin; Elementor Pro features
(Theme Builder, Loop Grid, dynamic tags, global widget propagation, motion effects, popups, sticky).
