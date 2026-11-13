# Manus AI Master Build Prompt — ReadMeHub WordPress + Elementor (Free-First)

## Mission

Rebuild the uploaded ReadMeHub website design into a complete, working, editable, transfer-ready WordPress website. Use both supplied files as required project inputs:

1. **Visual reference ZIP:** `website-1e7d1110-c3bf-4e84-99e1-05be4a65fe5c.zip` — contains `index.html`, a static HTML/Tailwind design reference. It is **not** an Elementor kit, WordPress theme, or importable WordPress website. Inspect the actual markup, CSS/Tailwind configuration, images, icons, responsive behavior, header, footer, and every visible section. Rebuild its visual design in WordPress rather than merely importing or embedding the HTML.
2. **Functional/content specification:** `ReadMeHub — Elementor Free-First Website Specification.md` — use this as the required architecture, content-model, reusable-component, responsive, accessibility, trust, QA, and handoff specification. Read the complete file, not just the copy-ready prompt near the end.

The final website must retain the ZIP's visual identity and reproduce its header and footer as closely as the target stack permits, while following the specification's implementation and editorial principles. It must include complete, coherent content and functioning WordPress admin editing—not just a mockup, screenshot, static HTML page, or design proposal.

## 1. Source-of-truth and conflict rules

Use this authority order:

1. **ZIP HTML is the visual source of truth** for its design language, logo/wordmark treatment, header/footer appearance, visual hierarchy, layout patterns, card styles, colors, typography, icons, borders, shadows, radii, spacing, and desktop/mobile composition.
2. **The Markdown specification is the source of truth** for information architecture principles, component ownership, WordPress/Elementor constraints, content modeling, accessibility, responsive testing, evidence rules, reusable patterns, and quality gates.
3. **This prompt's explicit requirements** extend the site with complete blog, category/archive, comparison, deal/coupon, single deal/coupon, and custom admin-field functionality.
4. If a requirement conflicts, do not silently discard it. Record the conflict, use the above hierarchy, and explain the implementation decision in the handoff.

Do not redesign the site into an unrelated visual style. Do not substitute a generic theme demo. Do not make up a new design system when the ZIP already defines one. Preserve the visual identity but fix genuine accessibility, responsiveness, semantic, performance, and content-trust problems without gratuitously changing the appearance.

### Extract and preserve the ZIP design tokens

At minimum, inspect and document the values actually used in the HTML. Initial values visible in its Tailwind configuration include:

- Brand navy: `#0F2A4A`
- Dark navy: `#0A1C33`
- Navy/light blue: `#1E3A8A`
- Brand orange: `#FF7A00`
- Orange hover: `#E66E00`
- Light orange: `#FFF4EB`
- Pastel blue: `#F0F5FA`
- Pastel mint: `#EFFBFA`
- Pastel purple: `#F5F3FF`
- Gray background: `#F8FAFC`
- Slate text: `#334155`
- Muted text: `#64748B`
- Body font: `Inter`
- Display/headings font: `Plus Jakarta Sans`
- Soft shadow: `0 4px 20px -2px rgba(15, 42, 74, 0.06)`
- Card shadow: `0 10px 30px -4px rgba(15, 42, 74, 0.08)`
- Hover shadow: `0 20px 35px -5px rgba(15, 42, 74, 0.12)`
- Orange glow: `0 8px 24px -4px rgba(255, 122, 0, 0.35)`

These are starting values observed in the HTML; inspect the entire file and use the exact source values wherever defined. Do not assume this short list captures every token. Create a token inventory for color, type scale, line-height, spacing, max-widths, border, radius, shadow, icon treatment, focus state, breakpoints, transitions, and light/dark theme. Keep tokens centralized in Elementor Site Settings/global styles and documented, scoped CSS variables where needed. Do not scatter inconsistent one-off values through pages.

**Visual parity requirements:**
- Recreate the ZIP header, navigation, wordmark/subtitle, desktop dropdown/mega-menu patterns if present, search, theme control, CTA, mobile menu, and their actual states. The header should look and behave as close to the ZIP as practical.
- Recreate the ZIP footer's layout, brand summary, link columns, social links/icons, and spacing. Keep the same visual structure, but only publish links and claims that are valid and approved.
- Recreate all relevant page sections from the source reference using editable native widgets/containers. Do not use a screenshot as the page, a single giant HTML widget, or a single flattened image.
- Match desktop, tablet, mobile, hover, focus, open/closed, and light/dark states where they exist in the reference.
- If a precise visual detail cannot be reproduced with the verified free stack, document the exact limitation and use the smallest maintainable workaround.

## 2. Required expert roles

Operate as a coordinated senior implementation team. Apply each role's review independently and resolve disagreements before release.

1. **Lead WordPress Solutions Architect** — WordPress structure, theme/plugin boundaries, portability, update safety, deployment strategy.
2. **Senior Elementor Free Architect** — native widget/container composition, editable layouts, Site Settings, global styles, reusable section strategy, verified compatibility.
3. **Xpro Addons Compatibility Specialist** — inspect the installed/available Xpro version and license; use only widgets/features actually available in the free tier. Never assume a Pro-only widget is included.
4. **Reference Design Reverse-Engineering Specialist** — inspect the ZIP HTML and reconstruct design tokens, component anatomy, page layout, responsive rules, and interactions.
5. **UI/UX and Information Architecture Lead** — blog publication experience, navigation, category/archive discovery, comparison and coupon/deal user journeys.
6. **WordPress Theme Developer** — only if needed, build the smallest maintainable theme/child-theme integration to achieve the reference header/footer and template requirements.
7. **WordPress Plugin and Content-Model Architect** — CPTs, taxonomies, ACF field groups, validation, admin usability, export/migration behavior.
8. **ACF Free Custom-Field Specialist** — design practical, clearly labeled editor fields without assuming paid Repeater/Flexible Content features.
9. **Editorial SEO and Structured Data Specialist** — canonical URLs, archive strategy, metadata, internal linking, schema only where accurate and eligible.
10. **Editorial Content Strategist and Fact-Checker** — produce complete useful starter content, verify external facts and offers, maintain source records, avoid fabricated claims.
11. **Affiliate/Coupon Operations Specialist** — offer lifecycle, coupon validity, terms, destination, affiliate disclosure, expiration and verification states.
12. **Responsive Frontend QA Engineer** — test real desktop/tablet/mobile widths, intermediate breakpoints, reflow, overflow, interactions.
13. **Accessibility Reviewer** — semantic HTML, keyboard access, focus, contrast, form labels/errors, reduced motion, non-color status cues.
14. **Performance and Security Engineer** — lean asset loading, image optimization, safe output escaping/sanitization, permissions, update-safe code.
15. **Migration/Release Engineer** — package files, dependencies, installation/import instructions, rollback and clean-site validation.
16. **Red-Team / Acceptance-Test Reviewer** — independently challenge assumptions, find broken states, test admin editing and transfer readiness.

Do not just list these roles in the report: actually use them as sequential review passes, record findings, fix critical issues, and show unresolved items.

## 3. Inspect the actual target before choosing an implementation

First inventory:
- WordPress version and PHP version, if a target site exists.
- Elementor version and editor generation (Free; V3/V4/hybrid as applicable).
- Hello Elementor/theme version, active theme, child theme, active plugins, and Xpro Addons exact version/license.
- ACF version/license and existing field groups.
- Existing Elementor Site Settings, global colors/fonts, templates, custom CSS, menus, permalinks, media, and content.
- Available hosting/server restrictions, writable directories, upload limits, and packaging/import constraints.
- Whether the deliverable is being built in a live target, staging site, or isolated workspace.

Never claim a version, plugin capability, import, or test is confirmed until inspected. If there is no WordPress target access, create the complete installable package and a precise verification checklist; clearly label runtime tests as **NOT RUN** instead of pretending they passed.

### Theme decision — native-first, not dogmatic

Preferred order:
1. Elementor Free native containers/widgets and WordPress content.
2. Verified free Xpro widgets only where they add a necessary capability.
3. Hello Elementor-compatible, update-safe child-theme or minimal template integration where necessary.
4. A minimal standalone custom theme **only if** the verified stack cannot reproduce the reference header/footer/templates reliably and a child-theme/template approach is unsuitable.
5. A small site-specific functionality plugin for custom post types/taxonomies and durable site functionality, where appropriate.

Do not create a new theme merely for the sake of it. Do not replace Hello Elementor without explaining why. If custom theme work is necessary, keep it lean, documented, accessible, Elementor-compatible, and free of content/data lock-in. Keep CPTs/taxonomies in a functionality plugin rather than tying them to a visual theme. Do not duplicate the same behavior in both theme and plugin.

## 4. Required pages and templates

Build and populate all these core page families, not just the homepage:

1. **Homepage** — reproduce the reference's section hierarchy and visual design; adapt content to a credible publication and working routes.
2. **Blog index** — polished post listing with pagination or a verified load-more alternative, featured/most useful content, search/filter only if it works, and a meaningful empty state.
3. **Single blog post** — title, dek/excerpt, author, published/updated dates, category, featured image, table of contents if useful, readable article body, related posts, sources/references where claims need them, disclosure where relevant, newsletter CTA, and correction/report route.
4. **Category archive** — category title/description, real post cards, pagination, internal links, correct archive title/meta, and no empty or fabricated cards.
5. **Comparison index** — comparison cards with clear decision intent, summary, compared options, and link to each single comparison.
6. **Single comparison page** — concise verdict only when evidence supports it, best-for/use cases, criteria, side-by-side option cards or a responsive comparison layout, trade-offs, pricing only when sourced and dated, limitations, methodology, last-verified status, sources, alternatives, related articles, and visible affiliate disclosure if applicable. Never require horizontal scrolling on mobile.
7. **Deals/Coupons index** — filter/group by actual taxonomy or status only if implemented and useful; display verified offer details, validity, terms summary, destination, disclosure, and expiration/expired state. No fake countdown timers, false urgency, or invented discounts.
8. **Single deal/coupon page** — offer title, merchant/product, code only if real and confirmed, offer terms, who is eligible, exclusions, valid-from/expiry if known, last-checked date and source, clear destination link, disclosure, related guides/comparisons, and a clear expired/unverified state.
9. **Search results** — meaningful query, result count if accurate, no-results guidance, accessible form, and real WordPress search behavior.
10. **About** — factual purpose and editorial approach; no invented founder bio, credentials, company history, or testing claims.
11. **Methodology / Editorial Standards** — explain what the site actually does and what it does not claim to do.
12. **Affiliate Disclosure** — plain-language, visible and accurate.
13. **Contact / Report an Error** — working route/form or a clear contact method, with validation and error/success states if a form exists.
14. **Privacy Policy and Terms** — create editable draft pages for owner/legal review. Do not claim legal approval or jurisdictional compliance without review.
15. **404 page** — branded, helpful navigation and search.

Create only additional use-case/product hubs when content inventory justifies them. Do not leave public navigation linking to empty pages.

## 5. WordPress content model and admin custom fields

The WordPress dashboard must allow a non-developer editor to add, edit, update, expire, and verify content without touching code. Create clearly labeled menu items and field groups.

### A. Blog posts

Use the native WordPress `Posts` type unless a documented reason requires otherwise. Add/confirm:
- Standard title, slug, editor content, excerpt, featured image, author, publish date, categories, tags.
- Optional structured ACF fields only where genuinely useful: short dek/subtitle, editorial content type, source/methodology note, last reviewed date, reviewer/editor, evidence status, affiliate relationship flag, and related comparison/deal references if the field type is verified.
- Preserve the normal WordPress editor for the main article body; do not move the entire article into dozens of custom fields.
- Provide helpful field instructions, sensible optional/required rules, and neutral fallbacks.

### B. Comparisons — custom post type

Register a CPT such as `Comparisons` with:
- Public, searchable, archive-enabled configuration; clean rewrite slug such as `/compare/` or `/comparisons/` selected consistently and documented.
- Native title/editor/excerpt/featured image, author, dates, revision support, REST/editor compatibility as appropriate.
- Taxonomies only when useful, e.g. comparison category and topic.
- ACF fields, with actual field types/keys documented, such as:
  - Option A name and canonical URL
  - Option B name and canonical URL
  - One-line decision summary
  - Best for / not ideal for
  - Comparison status: Draft, Needs verification, Verified, Update due, Archived
  - Evidence/methodology note
  - Last verified date and source URL
  - Pricing status and pricing-source URL/date (never assume a price)
  - Affiliate CTA destination per option only when approved and verified
  - Disclosure requirement/relationship status
  - Related posts and related deals where compatible field types exist
- Use normal editor content for detailed reasoning, limitations, criteria, and prose. ACF Free lacks some repeater-style field types; do not assume Repeater/Flexible Content exists. If repeatable criteria are needed, choose a maintainable editor-content structure or a clearly bounded number of simple fields and explain the trade-off.
- Comparison archive cards must derive from actual published CPT records, not hard-coded fake cards.

### C. Deals/Coupons — custom post type

Register a CPT such as `Deals & Coupons` with:
- Public archive, clean rewrite slug such as `/deals/` or `/coupons/`, searchable where appropriate, native editor/excerpt/image/author/dates.
- Useful taxonomies such as merchant, offer type, and/or deal category only if each is maintainable and not empty.
- ACF fields, with field type, key, validation, instructions, and frontend behavior documented:
  - Merchant/brand name
  - Offer title and short summary
  - Offer type: Coupon code, Automatic discount, Free trial, Special pricing, Other
  - Coupon code (optional; never fabricate)
  - Destination URL
  - Affiliate URL and relationship status, if distinct and verified
  - Discount/value text (optional and source-backed)
  - Valid-from date (optional)
  - Expiry date (optional)
  - Verification status: Unverified, Verified, Expired, Terms changed, Withdrawn
  - Last checked date
  - Source/terms URL
  - Eligibility and exclusions
  - Terms summary
  - Featured/pinned status only if genuinely needed
  - Related comparison/post
- Validate URLs and dates. Expired offers must not look active. If an expiry date is unknown, do not invent one or display a false “ending soon” message.
- Add editor-side help text explaining exactly how to verify and expire offers. If safe automatic expiry cannot be implemented and tested, provide a documented manual workflow rather than claiming automation.
- Never publish a coupon code, percentage, free trial, pricing claim, or “exclusive” claim unless verified against a reliable source. If the offer cannot be verified, create it as a **Draft / Needs verification** record and do not display it as an active deal.

### D. ACF and field portability

- Prefer ACF Free for fields if available in the target. Confirm the actual installed version and supported field types.
- Register CPTs/taxonomies in a small `ReadMeHub Core` functionality plugin where possible, so content survives theme changes.
- Include ACF field groups in a portable form supported by the target (ACF Local JSON and/or documented PHP registration when appropriate). Do not invent field keys or pretend fields exist until the package includes them.
- Document each field's source, type, return format, required/optional rule, default/fallback, empty state, editor instructions, validation, output escaping/sanitization, stale-state behavior, and template usage.
- If ACF is unavailable, do not silently switch to an incompatible paid feature; provide the install requirement and a documented native fallback.
- Test that an editor can create a record, save it, preview it, publish it, edit it later, and see the correct front-end output.

## 6. Complete content: required launch seed

Deliver complete, readable content—not lorem ipsum, filler paragraphs, “coming soon,” or empty archive cards.

Minimum seed inventory:
- **3 complete blog posts** (minimum 2–3 means deliver 3), each with useful original prose, descriptive headings, summary/excerpt, category, featured image or suitable licensed/locally stored visual, relevant internal links, author/date handled truthfully, and sources for factual/current claims.
- **At least 1 complete comparison record** with full comparison-page content and structured fields populated. Prefer 2 comparisons if time and evidence allow.
- **At least 2 deal/coupon records** in the dashboard, with complete fields and terms/source notes. At least one can be shown publicly only if the offer is actually verified and currently valid. If no reliable active offer can be verified, keep the records in Draft/Needs verification and create a useful, honest “No verified offers currently available” archive state rather than fake a deal.
- **At least 3 populated categories** that each have meaningful description and real post assignment, unless the launch content strategy explicitly justifies fewer.
- About, Methodology, Editorial Standards, Affiliate Disclosure, Contact/Report Error, Privacy draft, Terms draft, and 404 content.
- Homepage sections should use real seeded posts/comparisons/deals, and every CTA must point to a working page or meaningful action.
- Include a content inventory table in the handoff with title, content type, URL/slug, publication status, category, sources, evidence/verification status, and any follow-up required.

### Editorial integrity and research

Research current product, plan, coupon, pricing, eligibility, and terms facts from primary/official sources wherever possible. Store source URLs and the date checked in the appropriate admin fields or editorial source notes. Distinguish source-verified facts from editorial opinion. Never claim ReadMeHub purchased subscriptions, performed hands-on tests, stress-tested APIs, independently benchmarked products, interviewed customers, or gathered survey data unless those actions actually occurred and evidence is supplied.

The ZIP's current HTML contains some strong trust/test claims, review ratings, review counts, pricing, dated statements, and social/company details. Treat these as **unverified sample content**, not automatically true facts. Keep the design, not unsubstantiated claims. Remove or rewrite unsupported ratings, review counts, testimonials, author credentials, performance claims, subscriber/user counts, prices, test results, “independent authority” statements, and social links. If a page requires evidence that does not exist, state the limitation clearly and do not simulate evidence. Do not copy large blocks of competitor/product marketing text; write original editorial copy.

For the three blog posts, choose a coherent launch niche supported by the supplied spec and reference. If the owner has not selected a niche, choose a provisional content cluster, label the decision **PROVISIONAL**, justify it in the handoff, and keep it easy to change. Do not build dozens of unrelated category hubs.

## 7. Header and footer: special acceptance requirement

The header and footer must visually match the ZIP as closely as possible. Treat this as a high-priority acceptance criterion, not a suggestion.

For the header:
- Inspect the exact desktop and mobile markup, content, order, dimensions, spacing, colors, typography, borders, icons, dropdowns, theme toggle, search, and CTA.
- Rebuild as an editable Elementor-compatible reusable header if the verified free stack supports it.
- If global header template conditions are unavailable in the installed Free/Xpro configuration, implement a small theme/child-theme header template with equivalent appearance and accessible behavior. Do not fake a global header by manually duplicating inconsistent versions on every page unless there is no maintainable alternative.
- Verify dropdown keyboard behavior, focus visibility, Escape/close behavior where applicable, menu state, mobile toggle labels/expanded state, and no overflow.
- Do not leave dead menu items. Hide or disable routes not yet implemented.

For the footer:
- Match the reference structure, brand block, text width, link columns, icon/social area, background, spacing, and responsive stacking.
- Remove unverified claims in the footer copy while preserving its design anatomy.
- Every published link must work. Do not invent social profile URLs; use only confirmed links, or omit the icon/link while preserving layout balance.

Capture side-by-side screenshots of the ZIP reference and rebuilt pages at comparable desktop and mobile viewports. Document material differences and why they remain.

## 8. Elementor build rules

- Build with WordPress + Elementor Free first, and use Xpro only after verifying that a required widget/function is actually available in its free tier.
- Use native Elementor containers and native widgets for headings, text, buttons, images, icons, lists, and cards wherever practical.
- Use actual WordPress posts/CPT records for blog, category, comparison, and deals archives; do not hard-code article grids that editors cannot maintain.
- Prefer real templates/query mechanisms available in the installed stack. If Elementor Free cannot dynamically render a required archive or ACF field, choose a tested WordPress/theme template or a verified free alternative and document it.
- Do not use Elementor Pro-only widgets, paid Xpro widgets, JetEngine/Crocoblock, or paid dynamic-content plugins unless the owner explicitly approves a new dependency.
- No single giant HTML widget for an entire page, no iframe containing the reference site, no static screenshot-as-site, no giant shortcode to hide the build, and no minified unreadable code dump.
- Scoped CSS is allowed for visual parity, dark mode, or unsupported layout details. Prefix custom selectors/variables with `rmh-` / `--rmh-`, document them, and avoid broad selectors that break Elementor or WordPress admin.
- Use JavaScript only for necessary behavior unavailable in native/theme controls; keep it minimal, accessible, and resilient when JS fails.
- Do not claim a section is drag-and-drop editable unless it has actually been opened and tested in the WordPress editor.
- Preserve reusable component anatomy and global design tokens; instance-specific content must remain independently editable.

## 9. Dark mode, responsive behavior, and accessibility

Implement the light/dark appearance from the reference if present. Use semantic token overrides rather than indiscriminate color inversion. Theme control must be a real accessible control with a clear label/state, keyboard operation, focus style, and stable behavior. Test the saved preference and system preference only if implemented. Do not invert product images or logos.

Test:
- Desktop (e.g. 1440px and 1280px)
- Tablet (e.g. 1024px and 768px)
- Mobile (e.g. 390px and 360px)
- One intermediate width where layout transitions
- 200% browser zoom/reflow
- Keyboard-only navigation
- Focus visibility, dropdown/menu open/close, search, pagination, forms, theme toggle, coupon code copy if implemented, and all CTA links
- No horizontal page overflow, no clipped headings/buttons, no overlapping cards, and no unreadable table/card comparison
- Semantic heading hierarchy, one meaningful H1 per page, landmarks, meaningful alt text, decorative-image empty alt, accessible labels and error messages, non-color-only status, reduced-motion preference, contrast checks for both themes.

Do not claim WCAG compliance based only on visual inspection. Record actual checks, tools, failures, and fixes.

## 10. SEO, performance, security, and structured data

- Clean permalinks and canonical URLs; accurate titles/meta descriptions; meaningful internal links; proper archive pagination; no indexable thin/empty pages.
- Add schema only where content genuinely qualifies (e.g. Article, BreadcrumbList, Organization only with accurate details). Do not add fabricated Review/AggregateRating/Product/Offer schema or markup for ratings/prices/discounts that are absent or unverified.
- Optimize images locally as appropriate (WebP/AVIF if supported), include dimensions and alt text, avoid unnecessary external CDN scripts, avoid loading all icon libraries if not needed, and keep CSS/JS lean.
- Use WordPress APIs and escaping/sanitization/validation for custom functionality; check capability/nonce where custom admin actions or forms require it. Do not put API keys or secrets into theme/plugin files or public HTML.
- No fake analytics, fake social proof, or fabricated performance metrics. Performance claims require a real test result with date, environment, and method.

## 11. Transfer-ready deliverable

Provide an installable, logically organized package. Recommended structure:

- `readmehub-core/` — custom functionality plugin for CPTs/taxonomies and any necessary non-visual behavior.
- `readmehub-theme/` or `readmehub-child-theme/` — only if required; minimal, update-safe, Elementor-compatible theme integration.
- `acf-json/` and/or documented ACF field-group registration.
- Elementor templates/kit/export only where the actual installed Elementor version supports reliable export/import; never label handcrafted JSON as importable without testing.
- `assets/` — local logos/icons/images/fonts only when licensing permits, with a manifest and source/license notes.
- `README-INSTALL.md` — exact clean-WordPress installation order, required plugins/versions, import steps, permalink refresh, menu assignment, homepage/posts page setup, global settings, field setup, media import, and troubleshooting.
- `CONTENT-INVENTORY.md` — seed content, source notes, statuses, slugs, categories.
- `DESIGN-TOKENS.md` — extracted ZIP tokens and where each is implemented.
- `FIELD-DICTIONARY.md` — CPTs, taxonomies, ACF fields/types/keys, validations, fallbacks and display locations.
- `QA-REPORT.md` — actual test evidence and failures.
- `KNOWN-LIMITATIONS.md` — unresolved gaps, dependency/license limits, owner decisions.
- `CHANGELOG.md` — what was implemented and changed.

Package so it can be installed on a fresh WordPress environment without depending on your temporary workspace. Do not include secrets, cache files, debug logs with private data, or unrelated files. If the actual Elementor Kit/template export cannot be generated from the installed target, say so and provide the tested alternative.

## 12. Execution phases — do not skip

### Phase 1: Input and environment audit
Read both complete inputs. Inspect every section of the HTML and Markdown specification. Inventory the actual assets, links, sections, interactions, claims, and existing environment. Report blockers, then continue with all work that does not depend on unavailable access.

### Phase 2: Reference design extraction
Create a source-grounded design token and component map. Record header/footer exact anatomy and all page sections. Capture reference screenshots if possible. Do not begin with a generic template.

### Phase 3: Architecture and content model
Define CPTs, taxonomies, field groups, archive/single relationships, URLs, content ownership, verification states, and editor workflow. Verify field types and query/template capability before implementation.

### Phase 4: Representative component proof
Build header, footer, a blog card, comparison card, deal card, and a representative single-content layout. Confirm editability, token propagation, mobile behavior, dark mode, and admin editing before replicating patterns.

### Phase 5: Full site implementation
Build all required page families and populate the launch seed content. Implement real WordPress archive/query behavior and custom fields. Use verified free dependencies only.

### Phase 6: Editorial and offer verification
Verify all current facts, product terms, prices, coupon codes, expiry dates, destinations, author details, and claims. Store source and last-checked details. Unverified offers remain Draft/Needs verification and cannot be shown as active.

### Phase 7: QA and correction
Run responsive, accessibility, interaction, content, SEO, security, performance, admin-editing, and migration tests. Compare screenshots with the ZIP. Fix all critical and high-severity issues; retest.

### Phase 8: Independent reviewer passes
Run the 16 roles listed above as real review passes. Produce issue IDs, severity, evidence, resolution, and residual risk. Do not mark a problem fixed without retesting.

### Phase 9: Packaging and handoff
Create and verify the package. Test installation on a clean WordPress environment if possible. If not possible, mark that test **NOT RUN** and give exact manual verification steps. Provide a concise summary of what is complete, what is not, and what the owner must decide.

## 13. Acceptance criteria

The job is complete only when all applicable items below are demonstrably true:

- [ ] ZIP and Markdown spec fully inspected.
- [ ] Reference visual identity is retained; token values documented.
- [ ] Header and footer match the reference closely, with screenshots and difference notes.
- [ ] Home, blog index, single post, category archive, comparison index/single, deals index/single, search, about, methodology, disclosure, contact/report error, legal drafts, and 404 are implemented.
- [ ] Minimum 3 complete blog posts exist and render correctly.
- [ ] Minimum 1 complete comparison record exists and renders correctly.
- [ ] Minimum 2 deal/coupon records exist in the admin; only verified current offers appear publicly active.
- [ ] Custom post types/taxonomies and ACF fields are visible and usable in WordPress admin.
- [ ] A non-developer can create/edit/preview/publish a post, comparison, and deal without code.
- [ ] Archives pull real records; no hard-coded fake cards or broken links.
- [ ] All major sections are editable; no page-sized HTML widget or flattened screenshot.
- [ ] Responsive, dark-mode, keyboard, forms, menu, search, and coupon/deal states are tested.
- [ ] Unsupported ratings, reviews, test claims, pricing, testimonials, credentials, and social links are removed or verified.
- [ ] SEO/schema does not introduce unsupported claims.
- [ ] Package includes installation guide, field dictionary, content inventory, design tokens, QA report, known limitations, and changelog.
- [ ] Clean-install/import test has an evidence-based status.
- [ ] No critical/high severity QA issue remains unresolved without explicit disclosure.

## 14. Required final report format

Return these sections in the final handoff:

1. **Executive summary** — what was actually built and the current status.
2. **Source audit** — what the ZIP contains and how the specification was applied.
3. **Environment/dependency inventory** — exact versions and free/pro status confirmed.
4. **Design-system extraction** — actual values, source locations, and implementation destinations.
5. **Header/footer parity report** — desktop/mobile screenshots, match notes, differences.
6. **Page/template inventory** — each required page, route, source/template mechanism, and status.
7. **Content inventory** — 3+ posts, comparisons, deals/coupons, categories, sources, publication/verification state.
8. **Admin content model** — CPTs, taxonomies, ACF field groups, field types/keys, validations, fallback behavior.
9. **Elementor editability report** — what uses native widgets, what uses Xpro, what uses theme templates/custom code, and why.
10. **QA matrix** — test, environment, result, evidence, issue ID, retest result.
11. **Installation and migration guide** — exact steps for a clean WordPress install and target deployment.
12. **Known limitations and owner decisions** — explicit, actionable, no vague “may need work.”
13. **Final file manifest** — each package file and purpose, plus package validation status.

Use explicit statuses: `PASS`, `FAIL`, `PARTIAL`, `BLOCKED`, `NOT RUN`, `NEEDS OWNER DECISION`. Never call a feature complete simply because code was generated. Never claim a site is live, importable, responsive, accessible, secure, or tested unless the corresponding verification was actually performed.

## Final instruction

Begin now by inspecting both supplied files completely. Then execute the phases in order and produce the working, editable, transfer-ready ReadMeHub website. Do not stop after producing another plan or prompt. Do not ask the owner to repeat information already contained in the files. If an essential environment access or decision is missing, identify it precisely, complete all independent work, and deliver the strongest verifiable package possible without fabricating success.
