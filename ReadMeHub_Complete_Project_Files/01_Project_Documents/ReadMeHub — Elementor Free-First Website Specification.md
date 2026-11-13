# ReadMeHub — Elementor Free-First Website Specification

**Document type:** Proposed implementation specification and copy-ready build brief; not website implementation, import data, or proof of runtime behavior.  
**Version:** Draft 1.0  
**Project:** ReadMeHub  
**Status:** Target runtime not inspected; launch niche intentionally remains a placeholder.  
**Source of truth:** User-supplied master brief, plus this specification’s explicitly labeled proposals.  
**Owner:** ReadMeHub project owner; implementation and verification owners to be assigned.

> **Important:** No site was built, imported, rendered, or tested for this document. Elementor, WordPress, Hello Elementor, ACF, Xpro, breakpoints, editor behavior, accessibility, and performance remain unverified in the target installation. This file is a handoff specification only.

## 1. Interpretation and intent

Create a maintainable, globally oriented, English-language decision-support publication using WordPress, Hello Elementor, Elementor Free, ACF Free where justified, and only verified free dependencies. The experience should help a focused launch audience understand a problem, explore evidence, compare relevant options, and make a decision. It is editorial-first and may include affiliate links, but commercial actions follow useful information and are clearly disclosed.

**Fidelity intent:** system-first. The supplied brief describes structural principles said to be informed by Jentic research; it explicitly forbids copying Jentic’s visual identity. That research is reported by the brief and was not independently re-fetched for this handoff. The brief’s launch audience/problem is not selected, so copy and examples must remain clearly marked placeholders until the owner supplies real content.

**Primary journey:** Understand → choose a problem → explore evidence → compare options → make a decision → take action.

**Non-goals:** a generic latest-posts homepage, a coupon directory, a 13-category launch portal, a ClickUp landing page, an Elementor Pro build, an import-ready kit, or an unsupported claim of testing, verification, accessibility compliance, production readiness, audience validation, or business performance.

## 2. Evidence, assumptions, blockers, and environment

### 2.1 Evidence labels

- **CONFIRMED** — explicitly supplied in the user’s brief, or directly verified in the target runtime. In this document, “confirmed” normally means supplied by the brief, not independently runtime-verified.
- **LIKELY** — strong inference, pending verification.
- **ASSUMED** — chosen temporarily to close a low-risk gap.
- **UNVERIFIED** — requires inspection or testing.
- **VERSION-DEPENDENT** — depends on installed WordPress, Elementor, theme, license, or add-on version.
- **PROPOSED** — a recommended ReadMeHub design or implementation decision, not a sourced fact.

### 2.2 Target environment register

| Item | Current status | Required verification / owner |
|---|---|---|
| WordPress version | UNVERIFIED | Inspect target admin/system information; implementer |
| Theme | Hello Elementor — CONFIRMED by brief; installed state UNVERIFIED | Confirm active theme and version; implementer |
| Elementor Free/version | Free-only requirement CONFIRMED; installed version UNVERIFIED | Inspect plugin/version; implementer |
| Elementor Pro | Not to be assumed; out of scope | Confirm absent/not used; implementer |
| Elementor dialect | UNVERIFIED (V3 Containers, V4/Atomic, hybrid, legacy) | Inspect editor and available elements before mapping; implementer |
| ACF Free/version | Availability stated in brief; installed/version UNVERIFIED | Confirm field types and license/version; implementer |
| Xpro Addons Free | Availability/version UNVERIFIED | Do not depend on it until installed widgets, license, accessibility, and output are checked |
| Xpro Theme Builder Free | Availability/version UNVERIFIED | Use only if verified in target; otherwise choose a documented Hello-compatible header/footer path |
| Existing site/Kit/globals/templates | Greenfield stated in brief; target state UNVERIFIED | Confirm site is actually new before creating Kit; implementer |
| Site Settings breakpoints | UNVERIFIED | Inspect Elementor → Site Settings → Breakpoints; record exact values |
| Newsletter provider/form | UNVERIFIED | Owner selects a free-tier provider and confirms consent/privacy requirements |
| Launch audience/problem | Intentionally not selected | Owner must choose one audience + problem + use case before publication |
| Palette, font, contrast results | Deferred; no final values | Design-system decision gate, license/performance check, contrast measurement |

### 2.3 Material assumptions and blockers

1. **PROPOSED:** Treat Elementor Free Containers as the starting composition model for a new build. Verify the target dialect and controls first; do not emit widget IDs, control IDs, serialized JSON, dynamic-tag syntax, or import schemas.
2. **PROPOSED:** Keep primary article and editorial content in native WordPress content so it remains crawlable and server-rendered. Use ACF only for stable, structured, reusable values with a genuine editor/query use case.
3. **UNVERIFIED:** Elementor Free’s exact menus, search, post display/query capabilities, Theme Builder alternatives, and any Xpro Free functionality vary by version and installation. Verify every one before implementation.
4. **PROPOSED:** Do not show future categories in public navigation until useful content exists. No empty hubs, placeholder archive grids, or invented inventory.
5. **BLOCKER before launch:** choose the launch cluster, provide real author identities and evidence records, select the newsletter service, finalize jurisdiction-specific legal copy, and settle palette/font after contrast and licensing checks.

## 3. Final information architecture and page relationships

### Launch navigation

**Explore · Guides · Comparisons · Research · About · Search · Newsletter**. No mega-menu. Navigation may omit a label if the corresponding destination is not operational at launch; do not link to empty sections.

### Page relationship map

```text
Home (decision gateway)
├── One Audience / Problem Hub [placeholder until launch niche selected]
│   ├── Use-Case Hub(s) [only where real inventory warrants]
│   ├── Guides / Workflows
│   ├── Comparisons
│   ├── Product / Software entity pages
│   └── Research / decision tools
├── Newsletter
└── Trust / editorial pages
    ├── About
    ├── Methodology
    ├── Editorial Standards
    ├── Affiliate Disclosure
    ├── Privacy
    ├── Terms
    ├── Contact
    └── Corrections / Report an Error
```

**Future-only taxonomy:** Software, Technology, AI, Digital Tools, Business Services, Education/Career, Consumer Technology, and other validated categories. Do not expose these as equal launch hubs until published content exists.

**URL intent rules (PROPOSED):** one canonical URL per primary intent; candidate patterns `/use-case/[audience]/`, `/guides/[task]/`, `/compare/[a]-vs-[b]/`, `/software/[product]/`, `/research/[topic]/`. Finalize after the launch niche and content inventory are set. Avoid duplicate-intent URLs, thin synonym pages, doorway pages, and mass-generated variants.

## 4. Homepage section map — 12 sections

This is a proposed order from the supplied brief. Every module follows the shared rhythm **label → heading → sentence → action** where appropriate. “Real” evidence/content is required before a section is populated; use a designed empty/omitted state rather than fabricated proof or placeholder claims.

| # / section | Purpose and content anatomy | Proposed Elementor composition / responsive behavior | State, editability, and verification |
|---|---|---|---|
| 01 Header | Wordmark, Explore/Guides/Comparisons/Research/About, search, labeled theme control, newsletter or explore action. Mobile: wordmark, search, theme control, menu trigger. | Header template only if a verified free route is available; otherwise a reusable Elementor section/template or theme-compatible implementation. Native containers + verified navigation/search controls; mobile menu behavior must be tested. | Editable nav items and logo. Keyboard order, open/close state, focus, long labels, sticky behavior, and exact template availability need runtime verification. Avoid mega-menu. |
| 02 Hero | Eyebrow, H1 expressing the decision value, supporting sentence, primary and secondary links, nested conceptual route visual: Decision → Compare → Verify → Choose. | Native container(s), Heading, Text Editor, Buttons, and separate editable visual blocks/icons (not a screenshot and not one HTML widget). Two-column on wide screens; copy first, visual second on narrow screens. | Hero text and links editable. Visual is explanatory, not evidence of product tests. One page-level H1. Test no crowding or H1 displacement at intermediate widths. |
| 03 Authority / evidence strip | Only actual editorial attributes: named author/editorial standards/methodology/source practice when genuinely available. No fabricated social proof, counts, testimonials, or trust logos. | Simple row/list of text/icon items, native widgets. Stack/wrap rather than horizontally overflow. | Each claim needs a source/owner; omit unavailable items. Informative icons need text equivalents; decorative icons hidden from assistive tech. |
| 04 “What are you trying to decide?” | 3–4 intent cards routing into real problem/use-case paths; replaces latest-post feed. | Container with card compositions; grid only if supported. 3/2/1 columns are conceptual until breakpoints verified. | Cards contain label, question/need, short guidance, link. Empty inventory means omit or use a transparent “launch focus” message, not dummy cards. |
| 05 Featured workflows | One lead workflow plus 2–4 supporting workflows, with task, outcome, context, evidence state, and link. | Featured split block + repeated card anatomy composed with native widgets. On mobile, lead text before visual; cards stack. | Evidence label must reflect a real record; author/date fields are content-owned. Missing images use a neutral designed fallback, never implied testing imagery. |
| 06 Compare by need | Decision routes organized by job, constraint, workflow, or audience. | Reusable intent-card component; native containers/headings/text/buttons. Responsive stack; do not introduce filters without enough real inventory. | Editable route names and explanatory copy; if no comparison exists, do not link to an empty archive. |
| 07 Featured comparison | A vs B summary with best-for, evidence level, and trade-off for each option. | Two comparison cards or paired native containers, not a giant desktop table. Stack in logical order on mobile. | No score/rating unless methodology and evidence exist. Affiliate CTA, if present, only after useful decision content and with visible disclosure. |
| 08 Original research / data | Real research item, measured question, method cue, dataset/sample only when records exist. | Featured research card + plain-language method indicator, native text/image/icon components. | If there is no original work, omit this section rather than fabricate statistics. Source/method/data ownership recorded. |
| 09 Recently verified / updated | Useful maintained items with “Last verified” or “Verification due” state. | Repeated update cards/list; dates use one fixed site-wide format. | Only show verified dates supported by records. Missing date renders “Not yet verified” only if that wording is editorially approved; otherwise omit the status. Stale records must not look current. |
| 10 Newsletter | Benefit-led invite, email field, clear privacy microcopy; no cadence promise or subscriber count. | Native section and text; form supplied by selected free form/newsletter integration (Elementor Free has no assumed native Form widget). Mobile full-width field and CTA. | Required/consent rules, validation, success/error states, privacy link, data handling, unsubscribe, and provider need verification. Avoid requiring a schedule commitment. |
| 11 Methodology / how we evaluate | Six-step tactile process, evidence ladder, clear link to full methodology. | Six short numbered items in native components; reduce columns and preserve sequence on mobile. | Process wording must match actual editorial practice. No “tested” or “independent” statement absent records. |
| 12 Footer | Primary navigation, trust/legal links, contact/corrections, modest secondary newsletter entry. | Reusable footer pattern; columns become a single ordered stack on mobile. | No oversized link farm. Links must work; legal and corrections routes must exist before publishing relevant claims. |

## 5. Page-template map — 18 families

All are **PROPOSED template definitions**, not proof that Elementor Free can provide global display conditions or query loops. Build only templates needed for the launch inventory. Do not create optional Deals/Offers, Partner, Media Kit, or Submit Product templates until they have an operational purpose.

| # | Family | Core sections / information | Key dynamic or editorial state |
|---|---|---|---|
| 01 | Header | Wordmark, launch navigation, search, labeled theme toggle, one useful CTA; mobile menu | Menu closed/open, focus, current page, search empty/results/error; header mechanism/version needs verification |
| 02 | Footer | Explore, editorial/trust, legal/contact, small newsletter entry | Missing/unpublished links must not render; newsletter integration status |
| 03 | Homepage | The 12-section sequence in §4 | Empty sections omitted; evidence and verification status only from records |
| 04 | Audience / Problem Hub | Breadcrumb, eyebrow/H1/intro, 3–6 decision routes, featured guide, comparison, research/tool, maintained resources, newsletter | Inventory-driven, no fake filters or empty category grid; methodology link |
| 05 | Use-Case Hub | Breadcrumb, use-case promise, routes, featured workflow, comparison preview, related research, maintained resources | One focused intent; filters only when inventory justifies and empty/no-results states exist |
| 06 | Workflow / How-to Article | Breadcrumb, H1/subtitle, author/update/evidence, quick outcome, context, steps, screenshots, failure cases, alternatives, related decision/comparison, sources, newsletter, correction route | Evidence before commercial CTA; screenshots have actual context/capture date where relevant; author/source/date ownership |
| 07 | Comparison | Breadcrumb, A-vs-B H1, decision summary, best-for verdicts, common criteria, detailed comparison, evidence, choose/avoid guidance, alternatives, methodology, last verified, disclosure, final CTA | No giant table requirement; mobile comparison cards; unsupported values get explicit unavailable states |
| 08 | Product / Entity | Name/category/positioning, verification status, at-a-glance facts, best-for/not-ideal, features, sourced pricing, limitations, evidence if present, workflow experience, alternatives, pros/cons, sources, methodology, disclosure, related guides | One canonical entity page per intent. Pricing and “last verified” always source/date-backed. No hands-on claims without records. |
| 09 | Research / Tool | Research label, H1, measured question, why it matters, method, dataset/sample, result, visualization/tool if justified, interpretation, limitations, changelog, sources, related comparisons, newsletter | Build interactive tool only after repeated user need exists. Missing method/sample is not filled with invented data. |
| 10 | Newsletter | Audience, benefits, what is received, no fixed schedule yet, collected data, unsubscribe, privacy, sample issue only if real, FAQ, form | Provider, consent, validation, success, error, and unsubscribe tested before launch |
| 11 | About | Editorial purpose, focus, audience, research approach, update/correction practice, disclosure philosophy, real authors | No invented founder history or credentials |
| 12 | Methodology | Evidence ladder from commodity facts through original/proprietary evidence; process, sourcing, limitations, updates | Levels describe policy; item-level labels require evidence records |
| 13 | Editorial Standards | Evaluation criteria, correction policy, source standards, commercial separation | Policies must be followed operationally; avoid claims broader than practice |
| 14 | Contact | Clear contact purpose and working route/form | If a form is used, selected free provider, spam handling, labels and errors verified |
| 15 | Privacy | Jurisdiction-appropriate data practices, cookies/analytics, newsletter, retention, contact | Legal review/owner required; no invented policy or compliance claim |
| 16 | Terms | Applicable terms for the actual service/site | Jurisdiction/legal review required; not generated as asserted legal advice |
| 17 | Affiliate Disclosure | Plain-language disclosure, how links may work, editorial separation, program-specific details only if confirmed | ClickUp.com is the only confirmed relationship in the brief; exact legal wording remains open and other programs unconfirmed |
| 18 | Corrections / Report Error | What can be reported, working contact route, expected process only if adopted | Must be functional; response-time promises only if operationally approved |

## 6. Shared component library

Component variants alter semantic tokens and content, not core anatomy. Shared structure must not globally couple page-specific copy or product records.

| Component | Purpose / anatomy | Editable instance data | Reuse, propagation, and semantics |
|---|---|---|---|
| Header / mobile navigation | Wordmark, navigation list, search, theme control, optional CTA; mobile trigger and menu | Logo, labels, destinations, CTA visibility | Shared site shell. Propagation through verified template/theme route only; ensure nav landmarks, button trigger, expanded state, keyboard escape/return focus as implemented. |
| Button/link | Primary, secondary, commercial, text link; verb-led label | Text and destination per instance | Shared visual styles via globals/classes. Use real links for navigation and buttons for actions. Commercial variant never resembles ordinary editorial navigation. |
| Typed content card | Type label, title, summary, author/date metadata, action | Collection-specific title/summary/link/author/date/image/evidence fields | Shared anatomy with explicit article/workflow/comparison/review/tool/research variants. Each card instance owns editorial data; avoid broad global overwrites of copy. |
| Featured block | Cover/visual, label, title, summary, evidence/method, credited author, CTA | Instance-specific content, evidence, source date | Reusable shell; images must not imply testing unless true. |
| Evidence / verification badge | Text label + optional icon; neutral/status/stale | Status and record reference | Status is never color-only. “Tested”, “Verified”, “Hands-on” require linked evidence record and owner. |
| Author block | Name, role, optional genuine bio/credentials, date/method link | Author-owned identity and content metadata | A shared design pattern; no fictional credentials. Meaningful reading order and link names. |
| Affiliate disclosure | Subtle but readable editorial note and policy link | Approved disclosure text and destination | Reusable near affiliate content; wording is legal-review dependent. Never silently attach to non-affiliate links or hide it. |
| Affiliate CTA | Product/tool name, why it may fit, relevant benefit, verified information, disclosure, destination-labeled button | Verified program, destination, relation, date/source | Generic across future verified programs. Only use after value/decision support; link text names destination (e.g., “Visit [Tool] site”) and is distinguished by commercial token. |
| Verdict / best-for panel | Best for, not ideal for, trade-off, evidence note | Evidence-backed recommendation data | No numeric score unless a rubric and record support it. Empty/unavailable state is explicit. |
| Comparison option card | Option name, same rubric criteria, benefits, limitations, evidence state | Structured comparison content | Shared paired anatomy; stack on mobile, no horizontal scrolling. |
| Pros / cons | Two labeled lists with icon + text | Editorial entries | ACF Free has no repeater; keep in editor content or use bounded numbered fields only if structured reuse is justified. |
| Source/method panel | Sources, method link, tested environment/version where documented, limitations | Source URLs, method/version/data | Missing data has a defined empty rendering; never default to a fictional value. |
| Newsletter form | Benefit copy, email, consent/privacy text, feedback states | Provider-owned form, wording, policy link | Free external form integration must be selected and verified; avoid custom collection of sensitive data. |
| Breadcrumbs | Canonical hierarchy and current page | Site/page hierarchy | Use crawlable links and meaningful nav label; verify native implementation. |
| Search | Search trigger/field/results | Query and result content | Candidate widget capability is version-dependent; test empty/no-results/error behavior. |
| Methodology steps | Numbered process with concise explanation | Current editorial process | Six steps are a proposed presentation; only state process actually followed. |
| Footer | Navigation/trust/legal/corrections/newsletter | Approved routes | Shared shell with compact hierarchy; must not turn into a link farm. |

### Component ownership and propagation

- **Global owner:** design-system tokens, shared structure, accessibility states, template shell.
- **Editorial owner:** titles, summaries, articles, sources, author/date, comparison judgments, update status.
- **Commercial owner:** verified affiliate program/destination, relationship disclosure, destination status, last-check record.
- **Data owner:** structured fields, field definitions, preview context, empty states, migration/version record.
- **Propagation rule:** global visual changes may propagate; instance content and commercial/product data may not. Verify propagation behavior in the selected Elementor/theme route before relying on reusable templates or global widgets.

## 7. Elementor mapping — target-aware proposal

Mappings below are conceptual until verified in the installed editor. Prefer native widgets/elements. Avoid page-sized HTML widgets and serialized/import-ready output. The most important mappings are recorded in the requested §11 structure; repeat patterns use the shared component map in §6.

### 7.1 Section mapping register

| Section | Semantic purpose | Layout primitive | Elementor implementation candidate | Content source / editable fields | Responsive / interaction / accessibility | Dependencies / verification |
|---|---|---|---|---|---|---|
| Site header | Site-wide navigation | Flex/container | Verified header/template route; native containers, site logo/image, nav mechanism, search, button; simple composed native menu if necessary | Static/nav-controlled; logo, menu labels/URLs, CTA | Mobile explicit menu trigger, focus, visible open state; header landmarks; sticky only if verified and tested | Theme Builder is not assumed in Free. Verify Hello/Xpro Free route, conditions/propagation, keyboard behavior, breakpoints. |
| Homepage hero | Value proposition + decision entry | Two-column flex, stacks | Container + Heading + Text Editor + Button(s) + nested native visual containers/icons | Static editorial content initially; eyebrow, H1, supporting sentence, CTA labels/URLs, visual step labels | Text before visual on mobile; one H1; decorative visual hidden from AT when appropriate; no hover-only meaning | No plugin required if native widgets meet needs. Verify line breaks and reflow at actual + intermediate widths. |
| Evidence strip | Trust context without social-proof fabrication | Flex/list | Container + Icon/Icon Box + Heading/Text where suitable | Editorially approved statements and actual references | Wrap/stack; icons accompanied by text; remove absent proof items | Native widget support/version-dependent. Verify contrast and content ownership. |
| Decision cards | Route users by intent | Grid or wrapped flex | Parent container + nested card containers with Heading, Text Editor, Button/link | Static or real posts; labels, title, summary, URL | 3/2/1 conceptual columns; full-card linking only if accessible; clear focus | No Loop Grid assumed. Confirm any query/repeat workflow; otherwise compose/duplicate manually. |
| Featured workflow/research | Promote maintained, useful content | Split + card list | Containers + Heading, Text, Image, Button, metadata widgets | Real post/editorial fields; author, date, evidence, image | Stack text first; image dimensions/crop; alt owner; empty image fallback | Query/display is VERSION-DEPENDENT; if manual cards, document editorial upkeep. |
| Comparison preview | Help choose with same criteria | Pair of flex cards | Native containers, headings, lists, text; Accordion only if verified and genuinely useful | Comparison editor content; structured data only if stable/justified | Paired cards stack; avoid table overflow; keyboard order follows A then B | No paid table widget. Verify accordion semantics if used; no giant HTML block. |
| Newsletter | Owned audience capture | Split or stacked | Native layout/text + selected free form/newsletter plugin embed/widget if verified | Provider controls email/consent; text and policy link in WP | Labels, required state, instructions, inline errors, success and keyboard; mobile full width | Elementor Free Form widget not assumed. Select provider, verify HTML/rendering, privacy and error behavior. |
| Footer | Trust, wayfinding, legal | Flex/grid | Reusable footer section via verified free route or theme-compatible composition | Static links and approved copy | Stack at narrow sizes, sensible focus order, skip/footer landmarks as available | Confirm template propagation and active theme behavior. |
| Article header/body | Crawlable editorial content | Reading-width column | Native WP title/content rendering preferred; Elementor template only if target permits without Pro | WP title/body, author, published/updated dates, method link | Semantic heading, text reading width, media alt/captions, links | Verify single template capability without Pro. Keep critical body server-rendered. |
| Comparison template | Decision support | Reading column + paired flex/grid | Native headings, text, lists, paired option cards, accordion only if needed/verified | Editorial content + optional structured fields | No horizontal scroll; same criterion order; clear unavailable/stale states | No giant desktop table or paid table plugin. Test 600–800px and zoom. |
| Entity template | Canonical product information | Reading column + fact/section groups | Native headings/text/lists; structured fields only after dynamic source verified | WP body + proposed ACF fields | Missing facts omitted or explicit unavailable state; sources adjacent to current facts | ACF dynamic display in Elementor Free is UNVERIFIED; prove field source/return/preview/fallback before mapping. |
| Hub template | Group by user intent | Container grid/cards | Native containers/headings/text/buttons; manual links or verified query output | Real route inventory, curated order | No empty category, no filters without true inventory; keyboard-visible links | Query loop/version-dependent. If unsupported, use curated editorial sections. |
| Search | Find crawlable content | Search field/results | Verified native search mechanism or theme/WordPress route | Search query | Label, no-results, loading/error as applicable, keyboard | Widget availability and result layout must be tested. |
| Dark-mode control | Set user display preference | Inline control | Native button/control styling plus isolated JS only if required | Stored theme preference, system preference | Explicit label/state, keyboard, focus, reduced motion; mobile in nav | No paid plugin; target document scope, CSP/caching and no-JS fallback need verification. |

### 7.2 Standard mapping record format

For every additional region, record: **Section; semantic purpose; layout primitive; Elementor implementation; content source; editable fields; responsive behavior; interaction states; accessibility; dependencies; exception; verification.** Do not mark candidate mappings as confirmed without target inspection.

## 8. Proposed design system and token map

All ReadMeHub tokens below are **PROPOSED**. The brief deliberately defers actual hex values, final font family, and final values pending target inspection, licensing/performance checks, and contrast measurement. Do not fill these with guessed values. Exact color values must be chosen and tested in light and dark modes before handoff to implementation.

### 8.1 Design principles

Evidence first; typed collections; one module anatomy; one primary action per view; visible commercial/editorial separation; credited authorship; token-driven restraint; deliberately designed theme parity; free-first Elementor composition. Visual tone: soft, premium, credible, editorial, clear, not a generic SaaS dashboard.

### 8.2 Token architecture and authority

**Primitive → Semantic → Component.** Define each final value once. Prefer semantic Elementor Global Colors/Fonts. Use scoped `--rmh-*` CSS variables only where native global controls cannot express the behavior. Do not duplicate literal hex/spacing values in page styles where a global reference exists.

| Token | Purpose | Canonical destination proposal | Value/status |
|---|---|---|---|
| `surface-page` | Page canvas | Elementor Global Color | Light/dark pair deferred; PROPOSED |
| `surface-raised` | Cards/panels | Elementor Global Color | Distinct by tone/border; deferred |
| `surface-inset` | Code/callout/forms | Global Color or scoped CSS var if needed | Deferred |
| `surface-inverse` | Rare conversion band | Elementor Global Color | Deferred; at most one major band per page proposed |
| `text-primary` | Main copy/headings | Elementor Global Color | Contrast target at least 4.5:1 for text; measure actual pairs |
| `text-muted` | Metadata | Elementor Global Color | Must remain readable; do not reduce small-text contrast |
| `border-subtle`, `border-strong` | Dividers/inputs | Scoped CSS variables where needed | Proposed; input border target 3:1, measure |
| `accent-primary` | Editorial links and primary actions | Elementor Global Color | One accent hue proposed; hex deferred |
| `accent-commercial` | Affiliate treatment only | Elementor Global Color | Reserved commercial role; hex deferred |
| `status-success/warning/danger/info` | State/verdict | Global colors or scoped vars | Always pair color with text/icon/label |
| `focus-ring` | Keyboard focus | Scoped CSS variable | 2px ring + offset proposed; contrast measure |
| `font-display`, `font-heading`, `font-body`, `font-label`, `font-meta`, `font-button` | Type roles | Elementor Global Fonts | Family and weights deferred; favor system stack or one suitable variable family after license/perf check |
| `space-1…9` | 4px-based spacing scale | Scoped `--rmh-space-*` vars if native spacing presets insufficient | Proposed scale 4, 8, 12, 16, 24, 32, 48, 64, 96px |
| `radius-s/m/pill` | Shape | Scoped CSS variables | 6px / 12px / 999px proposed; verify as design choice |
| `elev-1/elev-2` | Hover/menu depth | Scoped CSS classes | Two levels proposed; dark mode favors tone/border over shadow |
| `motion-fast/base` | State transitions | Scoped CSS variables | 150–250ms ease-out proposed; not an observed source value |
| `wrap/reading/wide` | Content widths | Elementor layout settings or scoped class | 1200 / 720 / 1000px proposed values from brief; validate in actual layout |

**Type scale proposal:** display H1 clamp 2.25–3.5rem; H2 1.75rem; H3 1.375rem; H4 1.125rem; body 1.0625rem with 1.65 line-height and 65–75ch reading width; card text 0.9375rem; label 0.75rem uppercase with positive tracking; metadata 0.8125rem; button 0.9375rem semibold. These are proposals, not Jentic measurements or runtime-confirmed values.

**Fluid type constraint if implemented:** `clamp(min, rem + vw, max)`, never pure `vw`; positive-size max/min ratio ≤2.5 as a project constraint. Verify 200% zoom and reflow separately. Typography fluidity is not proof of accessibility.

**Spacing/layout proposal:** 4px base scale; section rhythm roughly 64–96px desktop and one step less on mobile; content width concepts `wrap` 1200px, `wide` 1000px, `reading` 720px; 12-column framework only if useful and supported. All are proposals; actual responsive behavior must be designed at the real Site Settings breakpoints plus intermediate widths.

**Shape/depth proposal:** 1px hairline borders as primary surface separators; 2px focus/selected treatment; card radius 12px; modest 6px control radius; pill tags 999px; two elevation levels. Dark mode favors surface tones and borders, not heavy shadows.

### 8.3 Token → Elementor mapping

| Token group | Elementor / CSS destination | Status / note |
|---|---|---|
| Semantic surface/text/accent/status colors | New Kit → Global Colors, using semantic names | PROPOSED; palette values deferred and need contrast check |
| Typography roles | New Kit → Global Fonts | PROPOSED; font family/license/performance check first |
| Global button hierarchy | Global/button styles using primary, secondary, text, commercial variants | Needs target test; no duplicate page-level definitions |
| Borders/focus/radii/spacing/motion | Scoped namespace classes and CSS vars (`.rmh-*`, `--rmh-*`) only where native settings cannot express them | PROPOSED; document stylesheet and scope |
| Breakpoints | Elementor Site Settings | UNVERIFIED; inspect actual values, do not set from assumed defaults without owner approval |
| Content widths | Site settings where available, otherwise documented reusable classes | Proposed values; verify on representative pages |

## 9. Elementor Kit checklist

| Kit element | Status | Verification/implementation note |
|---|---|---|
| Greenfield site and new Kit | Proposed / needs verification | Confirm no existing site design system before creating a new Kit |
| Global Colors | Proposed | Add semantic set after palette decision and contrast review |
| Global Fonts | Proposed | Add roles after font selection/license/performance check |
| Global button styles | Proposed | Set one consistent hierarchy; test all states including dark mode |
| Layout/content width | Proposed | Validate real Site Settings and section/container behavior |
| Breakpoints | Needs verification | Inspect target Site Settings; record actual values before responsive configuration |
| Theme Style / image defaults | Needs verification | Review Hello Elementor + Elementor defaults; avoid conflicting theme styles |
| V3/V4/hybrid dialect | Needs verification | Inspect target editor, do not force migration |
| Header/footer templates | Needs verification | Pro is excluded; confirm free Xpro Theme Builder or another maintainable free route; do not claim display conditions until tested |
| Search/form/query/loop elements | Version-dependent | Test specific target controls; do not assume Elementor Free includes Pro features |
| ACF field display | Needs verification | Verify source, return format, preview context, empty state, sanitization, and Free compatibility |
| Custom CSS scope | Proposed | Use namespaced reusable `.rmh-*` classes and tokens, not page-by-page literals |
| Dark-mode token scope | Proposed / needs verification | Root-level scope and cascade must be proven against theme/Elementor CSS |
| Sample component test | Required | Build one representative card, button, form, header, and content page; test editability and states before scaling |
| Kit import/export | Not applicable until tested | No importable artifact or successful import claim in this document |

## 10. Dark-mode plan

**Required; semantic, not inverted.** Light and dark palettes must be designed as a pair after color selection. The brief proposes defining shared semantic variables on `:root` with dark overrides under `[data-theme="dark"]`, but the actual root scope, cascade, and compatibility with Elementor/Hello must be verified. Do not auto-invert editorial imagery, logos, screenshots, or illustrations. Provide an appropriate dark logo/asset or neutral background where required.

- **Trigger:** visible theme control in desktop header and mobile navigation. State must be explicit (e.g. “Dark theme” / “Light theme”), not an unlabeled icon.
- **Default:** respect `prefers-color-scheme` if reliable in target; otherwise use a clear light default. Explicit user choice takes precedence.
- **Persistence:** minimal isolated JavaScript may persist preference in local storage. Define sensible behavior if storage is unavailable or JavaScript does not run; baseline page must remain readable.
- **Transition:** restrained color/surface transition only; honor `prefers-reduced-motion` and avoid entrance effects.
- **Design:** dark cool material surfaces in tone steps; preserve hierarchy, tactile depth, focus, card distinction, CTA visibility. No black/neon-purple, cyberpunk, glassmorphism, or generic dashboard treatment.
- **Verification:** measure each actual foreground/background pair and controls in both themes; check focus ring, status labels, borders, images, form states, and affiliate elements. Do not claim contrast conformance before rendered testing.

## 11. Signature-preservation map

The source-backed structural observations below are reported in the user’s brief as drawn from Jentic page-content/markup research dated 8 Oct 2026. They are not independent measurements or proof of source styling/behavior. The visual system remains original to ReadMeHub.

| Signature | Evidence/confidence | ReadMeHub adaptation | Location and responsive preservation |
|---|---|---|---|
| Typed content collections with distinct labels/card forms | CONFIRMED-from-supplied-brief/source report: Reports/Blog/Webinars/Newsletter were separate collection patterns. ReadMeHub-specific collections are PROPOSED. | Guides, Workflows, Comparisons, Reviews, Tools, Research receive their own type label and appropriate metadata/action, not one undifferentiated feed. | Home sections, hubs, archives, related-content modules; labels and card distinction remain visible when cards stack on mobile and in dark mode. |
| Eyebrow + heading + one-line support rhythm | CONFIRMED-from-supplied-brief/source report: repeated introductory module pattern. | Shared module anatomy: label → heading → sentence → action. Keep headings clear and copy concise. | Homepage sections and trust/hub introductions; stack naturally at mobile widths; do not hide labels needed to identify the collection. |
| Evidence/credibility displayed with attribution rather than asserted | CONFIRMED-from-supplied-brief/source report: credited authors, auditor-named badges and stats appeared in source; ReadMeHub evidence rules are PROPOSED. | Surface methodology, source, date, evidence level, and author only when real records exist. Never use fabricated counts/badges. | Featured workflow/research/comparison/entity, article header; metadata remains readable at all widths/themes. If evidence is missing, render a defined neutral state or omit the claim. |
| Explicit editorial vs commercial labeling | CONFIRMED-from-supplied-brief/source report: labelled-honesty pattern; ReadMeHub adaptation PROPOSED. | Affiliate disclosure and reserved commercial styling are separate from editorial links; disclose beside CTAs and near relevant content. | Any commercial page/CTA; on mobile, disclosure stays adjacent and legible, never hidden behind an inaccessible interaction. |
| Credited authorship / role | CONFIRMED-from-supplied-brief/source report: named authors/hosts; application PROPOSED. | Named author and role on substantive content; method link and dates where appropriate. | Article and featured blocks; wraps cleanly; no fictional identity or credentials. |
| Light/dark theme parity | CONFIRMED-from-supplied-brief/source report: theme toggle and theme-specific assets; ReadMeHub implementation PROPOSED. | Paired semantic token sets and image/logo treatment, not one-click inversion. | Entire system, including header, cards, forms, evidence badges, affiliate CTAs and footer; test both modes at each responsive class. |

**Signature review:** at least the first three derive from specific structural observations in the supplied research summary. Do not copy source palette, fonts, illustrations, copy, or layouts. “Soft, premium, credible, editorial, exceptionally clear” is the ReadMeHub target tone in the supplied brief, not an observation attributed to Jentic.

## 12. ACF / content-data proposal

Keep ordinary article body copy in native WordPress editor fields. ACF Free is considered only for values that are structured, reusable, queryable, repeatedly displayed, and editor-owned. All proposed names below are conceptual suggestions—not existing field keys or final schema. Confirm actual ACF Free field types in the installed version. Free does not provide Repeater/Flexible Content per the supplied brief; verify current target behavior before designing around a field type.

| Content entity | Candidate structured values (all PROPOSED) | Prefer native editorial content for |
|---|---|---|
| Product / entity | Display name, entity type, concise summary, primary use case, best-for/not-ideal, key feature notes, limitations, pricing status/summary, last-verified date, tested environment, evidence level, methodology note, affiliate URL/relationship, sources, related entities/workflows | Narrative evaluation, detailed explanation, evidence interpretation, pros/cons where a list is not worth a custom numbered field set |
| Comparison | Compared entities, shared criteria labels, best-for summary, trade-offs, evidence status, verified/pricing dates, methodology and sources | Full comparison reasoning, rubric explanation, limitations, recommendation prose |
| Workflow | Task, audience/use case, outcome summary, evidence state, tested environment/version only when recorded, update date, source/method link | Step-by-step instructions, screenshots/captions, failure cases, alternatives |
| Research | What measured, method, sample/dataset references, result summary, limitations, changelog | Interpretation, full methodology narrative, source notes |
| Editorial item | Collection type, author relationship, published/updated date, summary, featured image | Article body, section order, headings, citations |

### Dynamic-field specification required before wiring a field

For every field, document all of the following before connecting it to a display: **source; verified field type/key; return format; preview context; fallback; empty state; editor owner; sanitization/escaping; stale-state rule; version/license dependency.** If the source or return format is unknown, do not fabricate dynamic-tag syntax or claim the mapping works.

**Fallback rules:** optional values absent → omit the block or show a clear neutral “Not available” state approved by editorial; missing verified dates → do not display a current-looking default; stale date → “Verification due” when threshold and owner are defined; missing image → designed neutral fallback; unresolved relationship → no affiliate CTA. ACF Free has no repeaters, so pros/cons/comparison rows remain editor content unless numbered fields are deliberately adopted and their editor burden is accepted. Do not force body copy into ACF.

## 13. Responsive matrix

Actual breakpoints are **UNVERIFIED** until read from Site Settings. The user brief lists 767px and 1024px as proposed/default reference values only; treat them as conceptual, not installed facts. Test every major page at the actual breakpoint values and at least one intermediate width (including around 600–800px where comparison layouts can fail), plus 200% zoom.

| Region | Wide desktop | Tablet / intermediate | Mobile | Observable checks |
|---|---|---|---|---|
| Header | Horizontal launch nav, search, theme control, restrained CTA; sticky only if justified | Prevent nav wrapping; collapse only at verified threshold | Wordmark, search, theme control, menu button; open/close state visible | No clipped labels; keyboard order; menu focus; no horizontal overflow |
| Hero | Two columns, copy and explanatory visual | Condense columns or stack if text becomes cramped | Single column: copy → CTA → visual | H1 and primary action appear early; no visual pushing H1 off-screen; focus order matches visual order |
| Intent/decision cards | 3–4 columns if legible | 2 columns or wrapped cards | Single stack | Long titles, equal-height behavior without clipping, visible action, no layout shift |
| Featured content | Split lead + supporting cards | Condensed split or sequential layout | Text-first stacked feature; cards stack | Real image dimensions/alt; no fake evidence visual |
| Comparison | Two side-by-side option cards with aligned criteria | Keep paired cards only while readable, otherwise stack | Stacked A then B with concise same-criterion sequence | No horizontal scrolling; decision summary still clear; CTA and disclosure order correct |
| Newsletter | Wide copy/form composition | Two-column only if field remains comfortable | Full-width email/control and CTA | Labels/help/error remain visible; no sideways scroll; targets remain usable |
| Footer | Compact columns | Two columns where legible | One ordered column | All legal/trust links reachable; touch areas not crowded |
| Typography | Proposed fluid scale, not pure `vw` | Check intermediate scaling/wrapping | Comfortable body text and line length | 200% zoom/reflow without content loss; no text clipping |
| Controls | Project target ≥44px, prefer 48px for primary controls | Same target, preserve spacing | Same target; avoid adjacent mis-taps | Measure actual rendered size and spacing; these are project targets, not an accessibility certification |

**Mobile-first rule:** do not shrink desktop composition unchanged. Preserve task, evidence, editorial/commercial distinction, and primary action. Hide content only where there is a documented equivalent. Use no horizontally scrolling comparison table; if any horizontal region is considered later, a clearly visible affordance and test would be required, but preferred design is zero horizontal scrolling.

## 14. Interaction and state matrix

| Element | Default | Hover | Focus | Active | Disabled | Empty / loading / error / stale |
|---|---|---|---|---|---|---|
| Links/buttons | Clear hierarchy and verb-led label | Surface/underline or other non-color-only cue | Visible 2px ring + offset proposal; contrast-test | Pressed/darker state | Reduced contrast plus semantic disabled state where applicable | Loading progress and clear error/recovery text when an action can fail |
| Inputs | Label, helper/required marker, clear border | Stronger border or equivalent | Visible ring, label remains | N/A | Clearly disabled and not color-only | Empty prompt/help, inline loading, descriptive error and recovery; do not rely on placeholder as label |
| Interactive cards | Raised surface, explicit title/link | Modest surface/elevation change | Whole interactive target has discernible focus/name | Pressed state if appropriate | Not applicable unless truly unavailable | Empty content message, loading placeholder if necessary, retry route; stale content marked “Verification due” |
| Evidence / status badge | Text label + optional icon | No meaning conveyed only through color | If interactive, visible ring | N/A | N/A | Unknown/unavailable is distinct from verified; stale is not current |
| Comparison pair | Same criterion order and evidence note | Only interactive subcontrols respond | Keyboard link/action order A then B | Clear selected state if selection exists | Ineligible option text state if needed | “No verified comparison available yet” only when truthful; no fabricated loading/data |
| Newsletter form | Labeled email + consent/privacy text as required | Standard control cue | Field/button visible focus | Submit state | Disabled during actual submission only | Loading, success confirmation, actionable error, consent error, provider failure path |
| Mobile menu | Closed state and labeled trigger | Surface cue | Trigger focus and menu item order | Expanded/collapsed state | Only when unavailable | Open/close behavior, escape and return focus where implemented; test target behavior |
| Theme control | Explicit current/action state | Surface change | Visible focus | State changes visibly | N/A | Storage failure/system preference has a readable fallback; no theme flash claim until tested |
| Search | Labeled search | Standard field response | Visible focus | Submit | N/A | Empty query, no results, loading and failure states as supported by target search mechanism |

**Reduced motion:** disable decorative floating/rotation/scale and any marquee; do not animate content entrance. Preserve state change affordance without motion. Honor `prefers-reduced-motion` in CSS and any JS-controlled behavior.

## 15. Accessibility matrix

Target is a verification plan aimed at WCAG 2.1 AA practices; it is **not a claim of compliance**. Measure actual rendered UI with automated checks plus keyboard and assistive-technology review before publication.

| Area/component | Proposed semantics / operation | Verification before launch |
|---|---|---|
| Whole document | Semantic header/nav/main/footer landmarks, skip link, one meaningful H1 per page, logical H2/H3 order | Inspect rendered markup and heading outline on each template |
| Navigation/search | Real links, labeled search; menu trigger is a button with state conveyed; keyboard operation | Tab/Shift+Tab, Enter/Space, Escape where supported, focus return, screen-reader name/state |
| Cards/actions | Real links/buttons, meaningful destination/action names, no clickable div as sole control | Keyboard reachability and focus visibility; no duplicate/ambiguous “Read more” names without context |
| Images/icons | Meaningful alt for content images, empty alt for decorative images; icons paired with text where informative | Editorial alt ownership; confirm decorative graphics are ignored; avoid fake product/testing visuals |
| Evidence/affiliate | Text state in addition to color/icon; commercial disclosure readable and adjacent | Contrast and reading order in both themes; disclosure links work and are understandable |
| Forms | Persistent label, instructions, required state, consent/privacy explanation, error association and recovery | Keyboard-only completion, invalid/valid submit, provider error, success; screen-reader announcement as feasible |
| Comparison | Logical sequence and headings, no table-only dependency, meaningful paired content | Mobile and zoom, screen-reader order, no horizontal overflow, status not color-only |
| Focus/contrast | Visible focus (2px ring/offset is proposal); contrast target per actual pair: body text 4.5:1, relevant controls/boundaries 3:1 | Measure every foreground/background pair in both themes in rendered target; record results, not estimates |
| Motion | Reduced-motion preference respected; no meaning depends on movement | Test system setting and motion-off state; check JS does not re-enable animation |
| Reflow / zoom | 200% zoom/reflow; no loss of content/function; long names and copy supported | Test page families at narrow widths and zoom with keyboard; inspect intermediate widths |
| Language | English language metadata; future translated/expanded copy must reflow; RTL not required by brief but should not be accidentally hard-coded where easy to avoid | Verify document language and avoid assumptions that break expanded labels |

## 16. Exception and dependency register

Use the escalation order **native Elementor Free → composed native → verified Xpro Free/other free widget → WordPress/ACF content model → scoped CSS → minimal JS only if necessary**. No paid widget/add-on, Elementor Pro, JetEngine, Crocoblock, paid table/menu/form/animation package is a dependency in this plan.

| Exception / candidate | Scope and reason | Native option considered | Dependency / status | Owner, maintenance risk, exit condition, verification |
|---|---|---|---|---|
| Scoped `.rmh-*` CSS | Tokens/states/layout behavior native controls cannot express consistently (focus, dark semantic overrides, selected card styles, responsive refinements, reduced motion) | Global Colors/Fonts and native widget controls first | Custom CSS; proposed, not written or target-tested | Design-system owner; risk of cascade drift. Exit if native settings can express it. Verify scoped selectors, no global conflict, responsive/dark regression. |
| Minimal theme-toggle JS | Preference state/persistence if native/theme mechanism cannot meet requirement | CSS `prefers-color-scheme` and native controls considered first | Minimal isolated JS only; proposed | Developer owner; risk of storage/cascade/theme flash. Exit if verified native route meets label/state/persistence. Test keyboard, no-JS fallback, storage unavailable, reduced-motion, dark contrast. |
| Newsletter form integration | Elementor Free form widget not assumed; launch requires newsletter capture | Verify target’s native free functionality first | Free-tier third-party provider/plugin to be selected; currently UNVERIFIED | Marketing/privacy owner; vendor/privacy and maintenance risk. Exit if platform-native free form is verified. Test deliverability/provider errors/consent/unsubscribe and mobile. |
| Header/footer composition | Theme Builder conditions may be Pro/version/add-on dependent | Native Hello theme or normal templates/composed sections | Free route UNVERIFIED; Xpro Free only after inspection | WordPress implementer; risk duplicated shells/template drift. Verify global propagation, all routes, responsive behavior, keyboard access. |
| Repeated/post cards | Elementor Free query loops may be limited/version-dependent | Curated native card composition first; verify free loop option | Xpro Free or other free route only if inspected and documented | Content editor + implementer; manual update burden vs widget output. Verify actual widget, semantic markup, pagination/query, editability, empty state. |
| Structured entity fields | ACF for genuinely structured repeated facts | Native WordPress content if no proven dynamic need | ACF Free availability stated, exact dynamic display path UNVERIFIED | Data owner; risk of editor burden and display mapping. Verify field type/source/return/preview/fallback/escaping and migration path. |
| Comparison display | Custom visual composition of criteria and paired cards | Native containers, headings, lists, text; no table plugin | No external table dependency | Editorial owner; risk of divergent criteria. Exit if a verified accessible native pattern exists. Test mobile and content completeness. |
| Search | Site search may use theme/native feature | Verify current native WordPress/Elementor route | Version-dependent | Implementer; test no results, long query, keyboard and semantics. |

For each concrete departure added during build, record exception, minimal scope, rejected native option, availability/version/license, owner, maintenance risk, exit condition, and observable verification. Do not mark Xpro Free as used until exact widget and version are verified.

## 17. Implementation sequence and ownership

1. **Runtime inventory (implementer):** record WordPress, theme, Elementor version/dialect/license, ACF/Xpro versions, available free widgets, existing Kit, globals, reusable templates, CSS, and actual breakpoints. Stop before mapping any version-sensitive feature.
2. **Launch cluster and operations (owner/editor):** select one audience/problem/use case; inventory authentic sources/evidence/authors; decide newsletter provider; establish correction/update ownership; begin trust/legal pages. Keep non-selected categories hidden.
3. **Design-system decision gate (design owner + accessibility reviewer):** select original semantic palette and font, confirm licensing/performance, calculate light/dark contrast pairs, resolve sizes/layout tokens, document each as PROPOSED until approved/tested.
4. **Create Kit (implementer):** add Global Colors/Fonts and standard button styles only after decision gate; inspect Hello/Elementor theme defaults for conflicts; configure documented CSS variables and scope.
5. **Build representative components (implementer):** header, button variants, one typed card, evidence badge, disclosure/affiliate CTA, comparison pair, author block, newsletter state, footer. Check editing and propagation before repeating.
6. **Build one real content template first (editor + implementer):** workflow or comparison from chosen cluster with real content. Validate crawlable/server-rendered article body, sources, author, dates, and missing-field states.
7. **Build homepage and hub(s) (implementer/editor):** use §4 and §5; omit sections without genuine content/evidence; avoid inventing 12 filled modules.
8. **Add structured data only after content model review (data owner):** verify ACF free fields, editor ownership, field outputs, empty/stale behavior, and future migration. Keep prose in WP editor.
9. **Add theme toggle/dark mode (implementer):** configure semantic overrides, persistence/fallback and reduced motion; do not ship until contrast is measured in target rendering.
10. **QA and reviewer passes (all owners):** run §18 acceptance tests and §21 sequence; log failures and correct them before publication. Update confidence labels only from actual evidence.
11. **Release gate (owner):** confirm launch scope, content truth, working forms/policies/correction route, actual dependency inventory, and tests. This document alone cannot pass release.

## 18. QA checklist and observable acceptance tests

### Architecture / editing

- [ ] Inspect each selected page/template in the target editor; verify header/footer route and no Elementor Pro dependency.
- [ ] Confirm no page-sized HTML widget, screenshot-as-UI, image-based layout, fake nesting, or hidden third-party widget.
- [ ] Edit a representative headline, body, comparison value, pricing/date/source, CTA, author, newsletter wording, and methodology note without CSS/code where intended.
- [ ] Change a shared component visual property and verify only intended instances update; change one instance’s editorial copy and confirm it does not leak to others.
- [ ] Verify critical article text appears in crawlable/server-rendered output.
- [ ] Verify each used Xpro/free plugin/widget’s name, installed version, license, output semantics, and reason in the exception register.

### Design system / themes

- [ ] Compare each global color and font use to the approved token list; no competing global style or page-specific literal token drift.
- [ ] Check button, card, badge, disclosure, border, radius, and elevation consistency across all selected templates.
- [ ] Inspect light and dark modes for semantic surface/text hierarchy, logos/images, cards, forms, evidence states, focus, and commercial CTAs.
- [ ] Measure actual contrast for all text/control/background pairs in rendered light and dark themes; record outcomes.
- [ ] Confirm theme toggle has an accessible label/state, keyboard support, visible focus, persistence behavior, and reduced-motion-compatible transitions.

### Responsive / accessible interaction

- [ ] Test actual Elementor Site Settings breakpoints and at least one intermediate width; include narrow viewport and 200% zoom/reflow.
- [ ] Confirm no horizontal overflow or clipped content; comparison remains usable without horizontal scrolling.
- [ ] Test long product names, long titles, absent images, expanded/translated-length copy, and narrow form/error messages.
- [ ] Complete all navigation, search (if implemented), theme control, cards, forms, accordions (if any), and comparison actions with keyboard only.
- [ ] Confirm one meaningful H1 and logical headings; semantic landmarks, meaningful link names, image alt ownership, form labels and errors.
- [ ] Test visible focus, reduced motion, disabled/error/success/empty/loading states, touch targets against project goals, and status messages without color-only meaning.

### Editorial / commercial trust

- [ ] Every “tested”, “verified”, “hands-on”, “used”, “reviewed”, score, stat, and price claim links to an authentic evidence record/source and has a responsible owner.
- [ ] Stale records visibly say “Verification due” according to an approved interval; stale data is not styled as current.
- [ ] Affiliate CTAs occur only after useful information/decision support, have a visible adjacent disclosure, name the destination, and use confirmed program data.
- [ ] Confirm ClickUp is not overrepresented or treated as permanent lead affiliate; no other affiliate relationship is presented as confirmed without evidence.
- [ ] Methodology, editorial standards, affiliate disclosure, privacy, terms, author identity, update dates, contact, and corrections routes are accurate and operational before relevant claims publish.
- [ ] Newsletter form consent/privacy, data handling, validation, provider success/failure and unsubscribe path are tested.

### Performance / SEO

- [ ] Check DOM depth and unnecessary nested containers; remove unnecessary add-on widgets, animation libraries, heavy carousels and duplicate dependencies.
- [ ] Optimize images and provide dimensions where possible; limit font variants and JS.
- [ ] Validate canonical URL ownership, descriptive page titles, internal links, breadcrumbs, semantic headings, and accurate structured data only where justified.
- [ ] Confirm empty/future categories are not exposed and no mass-generated near-duplicate pages exist.

**Status of every checklist item at handoff:** NOT TESTED in the target runtime. Update each item to pass/fail with evidence only after execution.

## 19. Known unresolved items

1. The launch audience/problem/use-case is intentionally not selected; homepage copy, IA labels, and example content must remain placeholders pending owner input.
2. Actual WordPress, Elementor, theme, ACF, and Xpro versions, license, editor dialect, widgets, and capabilities are unknown.
3. Actual Site Settings breakpoints and container/layout settings are unknown.
4. No approved brand hex values, font family, final typography measurements, or contrast results exist. The brief defers these decisions.
5. Header/footer global rendering and post/template display need a verified Elementor Free-compatible route; no Pro assumptions.
6. Newsletter provider, form/consent implementation, deliverability, privacy terms, and unsubscribe workflow are unselected.
7. Jurisdiction-specific affiliate wording, privacy, and terms have not been legally finalized.
8. No named authors, credentials, source records, research datasets, original testing, prices, product facts, or verification intervals were supplied. All such content is conditional on genuine records.
9. Proposed ACF conceptual fields are not finalized or created; dynamic Elementor Free display/preview/fallback behavior is unverified.
10. Any Xpro Free feature is uninspected and must not be used until tested and documented.
11. Jentic structural research is supplied as a summary in the brief and not independently revalidated here; all visual values remain explicitly unverified/deferred.
12. “18 template families” includes the shared header and footer. Implement only necessary templates for the launch inventory; do not overbuild future categories.

## 20. Confidence ledger

| Claim / decision | Label | Basis | Verification owner |
|---|---|---|---|
| Editorial-first affiliate publication and user-value sequence | CONFIRMED (brief) | User-supplied project context | Project owner confirms still current |
| ClickUp.com is one confirmed affiliate relationship | CONFIRMED (brief only) | User-supplied brief; not independently checked | Commercial owner verifies current relationship/destination before any publication |
| Launch niche is not selected | CONFIRMED (brief) | Explicitly marked not yet selected | Project owner |
| WordPress + Hello Elementor + Elementor Free + ACF Free target stack | CONFIRMED as intended stack; installation UNVERIFIED | User-supplied brief | Implementer inspects target |
| No Elementor Pro/paid dependency | CONFIRMED as constraint | User-supplied brief | Implementer audits actual plugins/widgets |
| Elementor Free template/search/query/ACF capabilities | VERSION-DEPENDENT / UNVERIFIED | Varies by installed build; not inspected | Implementer in target editor |
| Actual breakpoints/dialect | UNVERIFIED | No runtime access or screenshots/export supplied | Implementer inspects Site Settings/editor |
| Proposed page hierarchy and 18 template families | PROPOSED | User-supplied IA/template list normalized into a build map | Owner/editor trims to launch scope |
| Homepage 12-section order | PROPOSED from supplied brief | Explicit §8.1 in attachment | Owner/editor checks content inventory and omits unsupported sections |
| Structural signatures attributed to Jentic | CONFIRMED only as statements in supplied research summary | Attachment’s reported source research; not re-fetched for this deliverable | Research owner if independently needed |
| Color/font/spacing/radius/layout values | PROPOSED / UNVERIFIED | Values in supplied brief are proposals; palette/font deferred | Design owner + accessibility reviewer |
| Dark mode required | CONFIRMED (brief) | Explicit requirement | Implementer verifies behavior in runtime |
| ACF conceptual fields | PROPOSED | Supplied conceptual list and content architecture | Data/editor owner finalizes only if useful |
| Newsletter at launch | CONFIRMED (brief) | Explicit requirement; provider unknown | Owner selects provider; implementer tests |
| Accessibility targets / 44px touch target | PROPOSED project targets | Supplied brief; not measured | Accessibility reviewer tests rendered site |
| Site is accessible, performant, production-ready or audience-validated | UNVERIFIED; no such claim made | No implementation/testing performed | Relevant reviewer after target tests |

## 21. Sequential reviewer passes

1. **Prompt architect:** scope is a proposed free-first implementation specification; user value and blockers are explicit; no niche invented.
2. **Elementor native UI architect:** mappings are conceptual candidates; no IDs/tags/import JSON generated; Pro and paid widgets excluded; version-sensitive paths flagged.
3. **Design-system curator:** one token authority, semantic layers, paired themes, visual-source copying prohibited; hex/font selection deferred.
4. **Elementor Kit specialist:** new Kit is conditional on confirming greenfield target; breakpoints/globals/template routes are verification items; no importability promise.
5. **Component reuse architect:** shared anatomy separated from instance content, data, commercial relations and ownership; propagation requires testing.
6. **Accessibility/responsive reviewer:** includes keyboard, focus, labels, contrast, reduced motion, zoom/reflow, theme parity, mobile comparison behavior; no compliance claim.
7. **Verification/red-team reviewer:** checked for fabricated measurements, IDs, dynamic syntax, data, statistics, affiliate claims, version assumptions, unsupported success statements; unresolved environment values remain open.

### Reviewer issues list

| Severity | Section / claim | Correction or control | Runtime check still required? |
|---|---|---|---|
| High / launch blocker | Audience/problem and example content | Keep placeholders; select one real cluster and source content before publication | Yes |
| High / implementation blocker | Elementor dialect, versions, breakpoints, template routes | Inspect target first; downgrade any unsupported mapping | Yes |
| High / trust risk | Evidence, authors, pricing, “tested/verified”, affiliate detail | Populate only from authentic records; no default claim | Yes |
| High / privacy/legal | Newsletter provider and policy language | Select provider; obtain jurisdiction-appropriate review and test workflow | Yes |
| Medium | Palette/font and dark contrast | Resolve decision gate, license/performance check, then measure rendered pairs | Yes |
| Medium | ACF/Xpro dynamic behavior | Verify exact free capability and fallback/preview/escaping before use | Yes |
| Medium | Jentic-derived design rationale | Structural principles only; no copying; research summary was not independently revalidated here | Only if independent source verification is requested |

## 22. Copy-ready implementation prompt

The following block is intended to be copied to the implementation agent after confirming the target environment. It remains a specification, not proof of implementation.

---

### Build brief: ReadMeHub decision-support publication (Elementor Free-first)

**Role:** Act as a senior WordPress/Elementor implementation team covering UI/UX, information architecture, typography/design system, accessibility/responsiveness, content modeling, and verification. Build only after inspecting the target. Return implementation evidence and unresolved issues; never substitute a prompt/specification for a completed site.

**Goal:** Create an editable, maintainable, original, editorial-first decision-support publication for an international English-language audience. Help visitors understand one focused launch problem, explore evidence, compare options, decide, and act. The launch audience/problem is not selected; preserve placeholders until the project owner supplies it. Do not build a generic latest-posts homepage, coupon site, or broad 13-category portal.

**Target constraints:** Intended stack is WordPress + Hello Elementor + Elementor Free + ACF Free + optional verified Xpro Free only. Confirm installed WordPress/Elementor/theme/plugin versions, license, V3/V4/hybrid editor dialect, existing Kit/globals/templates/CSS, Xpro Free widgets and free Theme Builder availability, and actual Site Settings breakpoints before relying on any capability. Elementor Pro, paid Xpro, JetEngine, Crocoblock, paid add-ons, paid form/table/menu/animation plugins are out of scope. If a proposed feature is not available in the verified free stack, escalate native → composed native → verified free widget → WP/ACF → scoped CSS → minimal JS, and document the exception.

**Evidence rules:** Label material claims CONFIRMED, LIKELY, ASSUMED, UNVERIFIED, VERSION-DEPENDENT, or PROPOSED. Never invent measurements, widget/control IDs, serialized Elementor JSON, dynamic-tag syntax, field names, breakpoints, ratings, statistics, pricing, testimonials, user counts, hands-on tests, research results, trust logos, affiliate programs, or verification states. “Tested”, “Verified”, “Hands-on”, “Used”, and “Reviewed” require a real evidence record. Missing/stale data gets an explicit neutral state; never silently default to current.

**Editorial/commercial rules:** Useful information first → decision support → commercial CTA. ClickUp.com is the only relationship stated as confirmed in the source brief; verify it before use and do not treat it as permanent/primary. Generic affiliate components must support multiple programs only after each program is verified. Every affiliate CTA names the destination and is visibly disclosed. Never style commercial links as ordinary editorial navigation. Legal disclosure/privacy/terms wording needs owner/jurisdiction review.

**Information architecture:** Launch navigation is Explore, Guides, Comparisons, Research, About, Search, Newsletter, with no mega-menu and no empty categories. Site map: Home → one Audience/Problem Hub → justified Use-Case Hubs → Guides/Workflows, Comparisons, Product/Entity, Research/Tools; plus Newsletter and About, Methodology, Editorial Standards, Affiliate Disclosure, Privacy, Terms, Contact, Corrections. Future categories remain unpublished until real useful content exists. One canonical URL owns one intent.

**Homepage sequence (12 modules):** 1 Header; 2 decision-value hero with a separate editable “Decision → Compare → Verify → Choose” visual; 3 real authority/evidence strip; 4 “What are you trying to decide?” routes; 5 featured workflows; 6 compare by need; 7 featured A-vs-B comparison; 8 original research/data only when real; 9 recently verified/updated with stale state; 10 benefit-led newsletter without cadence promise; 11 actual methodology process; 12 compact footer. Omit any module that would otherwise require fabricated content. Do not replace this gateway with an undifferentiated latest-post feed.

**Templates:** Plan the 18 families—header, footer, home, audience/problem hub, use-case hub, workflow/how-to, comparison, product/entity, research/tool, newsletter, About, Methodology, Editorial Standards, Contact, Privacy, Terms, Affiliate Disclosure, Corrections/Report Error—but build only what launch inventory needs. Follow the attached specification’s sections for each family. Comparisons must be decision cards/paired criteria, not a giant desktop table; mobile must not require horizontal scrolling.

**Design system:** Preserve typed collections; label→heading→sentence→action module rhythm; evidence and authorship when real; commercial transparency; paired light/dark semantic themes. Do not copy Jentic’s palette, typography, copy, layout or illustrations. The brief reports structural Jentic research; treat it as source-summary evidence, not a style reference. Use a three-layer primitive→semantic→component token architecture. Create Elementor Global Colors/Fonts as the single source of truth after palette/font decision. The brief’s sample colors are not specified; exact hex values/font family are deliberately deferred for contrast, licensing, and performance review. Proposed base spacing is 4px; proposed radii 6/12/999px; all candidate sizes/layout values remain proposals until approved. Use scoped documented `.rmh-*` CSS variables only when native controls cannot express a requirement.

**Elementor implementation:** Use native Elementor Free widgets/elements first: containers, headings, text, image, buttons, icons/lists, and only verified controls. Keep article text in native WordPress content where possible. No page-sized HTML widget, giant inline CSS/JS, screenshot-as-UI, flattened images, fake nesting, or invented importer. For each section document purpose, layout, exact verified/candidate widget, content source, editable fields, responsive behavior, states, accessibility, dependency, exception, and tests. Dynamic mapping only after source/field type/return/preview/fallback/escaping is tested.

**Reusable components:** Header, navigation, buttons (primary/secondary/text/commercial), typed card variants, featured block, evidence/status badge, author block, affiliate disclosure, affiliate CTA, verdict/best-for panel, comparison pair, source/method panel, newsletter form, breadcrumbs, search, methodology steps, footer. Share anatomy and style; keep product data, editorial copy, author/date and affiliate relationships instance-owned. Verify template/global propagation before relying on it.

**Content model:** Use ACF Free only for stable, structured, editor-owned values that are genuinely reused/queryable. Keep article body, step-by-step workflows, evaluation reasoning, sources and narrative in WordPress content. ACF repeater/flexible fields are not assumed. For every proposed structured value, record source/type/return/preview/fallback/empty state/owner/escaping/stale rule/version. Do not fabricate field keys or dynamic syntax.

**Responsive/accessibility:** Inspect and use actual Site Settings breakpoints; test an intermediate width, mobile, and 200% zoom/reflow. Mobile is a deliberate composition, not scaled desktop. No horizontal overflow. Use semantic headings/landmarks, one meaningful H1, real links/buttons, meaningful alt (empty for decorative), visible keyboard focus, labeled inputs/errors, reduced-motion support, non-color-only status, and measured light/dark contrast. Proposed project touch target is ≥44px (prefer 48px for primary controls); measure actual rendering. These targets do not establish WCAG compliance. Do not claim conformance without testing.

**Dark mode:** Required; semantic token overrides, not inversion. Desktop header toggle and accessible mobile-nav toggle with explicit label/state, keyboard/focus, preference persistence if needed, reduced-motion behavior, system preference/fallback, and contrast re-check. Do not invert editorial imagery. Confirm CSS variable scope and behavior against Hello/Elementor in target.

**Newsletter:** Required from launch; benefit-led content and email capture, no invented subscriber count or frequency promise. Select/verify a free provider/form route; test labels, consent/privacy text, validation, success/failure, data use and unsubscribe before publishing.

**Output and release gate:** Return target inventory, design interpretation, assumptions/blockers, final launch IA, homepage map, 18-family template map, component anatomy/editability/propagation, Elementor mapping, token map, Kit checklist, dark-mode plan, signature map, reuse plan, ACF proposal, responsive/accessibility/state matrices, exceptions/dependencies, sequence, QA checklist with actual pass/fail evidence, unresolved items, confidence ledger, and scores across all rubric dimensions. Never claim importability, rendering, production readiness, accessibility compliance, audience validation, performance targets or revenue outcome unless corresponding tests/evidence exist. This brief does not authorize fabrication or bypassing runtime checks.

---

## 23. Scoring rubric result

The attachment says “9 dimensions” in one place but its detailed scoring table lists **10** (the tenth is Free-Stack Discipline). This handoff scores all ten listed dimensions to avoid omitting an explicit rubric category. Scores assess specification quality only, not site quality or runtime execution.

| Dimension | Score (1–5) | Basis / correction if below 4 |
|---|---:|---|
| Intent & Evidence | 5 | Goal, user journey, scope, labels, and blockers explicit. |
| Native Elementor Fit | 4 | Native-first mappings and free-stack escalation are defined; target widget availability remains unverified. |
| Design System Depth | 5 | Semantic/primitive/component tokens, paired dark mode, states, responsiveness, signatures, drift, and accessibility plan included; exact values deferred responsibly. |
| Mapping Accuracy | 4 | Mappings are conceptual and clearly labeled; no fabricated Elementor internals. Target-specific verification remains necessary. |
| Kit Alignment | 3 | **Correction:** before implementation, inventory the target Kit and approve exact Global Colors/Fonts after design decision gate; actual Kit/breakpoints were not inspectable here. |
| Component Reuse | 4 | Shared anatomy separated from instance content, data ownership and propagation checks specified; actual propagation behavior must be tested. |
| Signature Preservation | 5 | Six signature patterns mapped from the brief’s source summary and retained responsively, without copying Jentic’s look. |
| Responsive & Accessible States | 4 | Matrices and observable checks are included; rendered contrast, keyboard, screen reader, zoom, and breakpoints remain untested. |
| Verification & Handoff | 4 | Sequence, test checklist, owner roles, unresolved items, confidence ledger and reviewer issues are explicit; actual owners/runtime evidence remain open. |
| Free-Stack Discipline | 5 | No paid dependency required; optional free exceptions gated by target verification and documentation. |

**Concrete corrections for scores below 4:** Kit Alignment (3) — inspect the actual target Kit, theme defaults, breakpoints, and editor dialect; record the approved semantic global values before building components. No other dimension scored below 4.

## 24. Final QA questions and status

| Final question | Handoff answer/status |
|---|---|
| Does the homepage communicate a decision-support purpose? | The proposed hero and journey are designed to do so; actual copy is pending launch niche. |
| Can a visitor understand the decision the site helps solve? | Not yet answerable until the audience/problem is selected and real copy is written. |
| Is the primary journey decision-oriented rather than article-oriented? | Yes, in the proposed IA and homepage sequence. |
| Are comparisons easier than conventional static tables? | The proposed paired-card/criterion design avoids dependence on giant tables; usability must be tested with real content. |
| Is original evidence visible? | Only if actual source/evidence records exist; no evidence was provided for this handoff. |
| Can stale information be distinguished from current? | A “Verification due” state is specified; interval and runtime rendering remain to be set/tested. |
| Can editors update structured information without code? | Intended; not verified until target editor and field mapping are tested. |
| Is every repeated pattern reusable? | Candidate shared components are mapped; actual Elementor propagation is unverified. |
| Is the design globally consistent? | Token plan provides one source of truth; no implementation exists to inspect. |
| Do collection/theme signatures survive mobile and dark mode? | Responsive/theme behavior is specified; no rendered validation yet. |
| Are commercial placements distinguished and disclosed? | Required by component rules; no commercial instance is approved by this document. |
| Is the interface useful with ads removed? | Yes by design intent; the editorial decision-support journey does not depend on affiliate CTAs. |
| Does each CTA have a user purpose? | Proposed CTAs are verb-led and tied to routes; each instance needs editorial review. |
| Are tested/verified statements backed by records? | This is a hard acceptance rule; no such statements are authorized absent records. |
| Does it feel like a focused publication, not a portal? | Proposed launch navigation is narrow; owner must select one cluster and keep future categories hidden. |
| Is the build achievable without Pro/paid plugin? | Likely for proposed visual patterns, but header/footer, forms, queries, and dynamic data require target tests. |
| Are free/native alternatives documented? | Yes; each exception class includes a native-first route and verification gate. |
| Is the launch cluster intentionally narrow? | Yes as requirement; actual cluster is still unresolved. |
| Are visual values deferred rather than copied/invented? | Yes; exact hex and font remain a decision gate. |
| Is Jentic identity avoided? | Yes; only structural principles in the supplied summary are carried forward. |

## 25. Drift control and maintenance

**Source of truth:** approved design-system tokens + Elementor Global Colors/Fonts + documented component anatomy. **Process:** Detect → compare against tokens → decide intentional/unintentional → update canonical global/component → regression test → document version, change, deprecation, and migration path. Never silently add one-off color, spacing, radius, font, shadow, or CTA treatment. Never overwrite intentional deviations without owner review.

**Change log template:** date/version; changed token/component/content schema; reason; affected templates; owner; migration/deprecation; tests run; observed regressions; confidence changes. Re-audit any version-sensitive Elementor, theme, ACF, or Xpro upgrade before retaining a mapping.

## 26. Handoff summary

This deliverable is a build-ready **specification**, not an importable artifact or implemented site. Start with target runtime inspection and the launch-cluster decision, then settle the design-system values and verify free features. Build a small representative component set first, prove editability/propagation and dark-mode behavior in the real editor, and expand only after the acceptance tests pass. Unknowns stay unknown until measured or directly confirmed.
