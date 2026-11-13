# ReadMeHub homepage: PROVISIONAL implementation plan (2026-10-23)

Status: PLAN ONLY. Nothing written. No Stitch screenshot was supplied, so layout, hierarchy and spacing are NOT matched to any reference. The section list is an ASSUMPTION built from the project docs. Replace it with the real screenshot before building.

## Verified facts (read-only, this session)
- Production site, owner-confirmed. WP 7.1.3, PHP 8.2.34, theme Hello Elementor 3.5.1. Elementor free 4.3.5, Rank Math 1.0.280, Xpro Addons 1.7.11, Xpro Theme Builder 1.2.16, Royal MCP 1.5.10. No ACF, no Elementor Pro.
- Homepage today: `show_on_front=posts`, `page_on_front=0` (default blog index). Content: 1 default post, 1 draft page (ID 9).
- `blog_public=0` ("Discourage search engines" on); robots `noindex, nofollow`; site title still "My Blog".
- Kit (post 6) has NO custom settings: no global colors, no typography. Only default Roboto / Roboto Slab appear in its CSS record. Inter and Plus Jakarta Sans are not set.
- Templates: only the Default Kit. Xpro Layouts (header/footer): 0. Xpro saved templates: 0. Menus: 0. No custom CSS.
- Post types: core + Elementor/Xpro internals only. No tools, comparisons or deals types. Taxonomies: core only.
- Widget registry: 204 entries; ~90 are `pro-elements` stubs (Pro not installed). No dynamic tags (0).
- Page 9 (draft): container 17c1a4d4 > heading 4761db3b + text-editor 3a5eda79. Unchanged this turn.
- AVAILABLE by test: `heading` (added via connector, read back, rendered). Container and `text-editor` exist on page 9 (saved via the editor).

## Assumptions
- Homepage sections below (not from a screenshot).
- Token values in `design-reference-tokens.md` are unconfirmed.
- Elementor default breakpoints (mobile 767, tablet 1024) apply; not read from the site.
- `container` creation through `elementor_add_widget` is untested (curated type listed by the tool, REGISTERED only).

## Blockers
1. No Stitch homepage screenshot.
2. No design tokens in the kit; fonts not loaded. Setting kit colors/fonts is a global change (R3).
3. No tools / comparisons / deals data, so cards must be static placeholders.
4. No menus, header or footer; building them is shared (R3).
5. Newsletter/forms: no form plugin; WPForms widget is registered without its plugin.
6. Going live needs: publish page (separate approval), set front page (option change, R3), and decide `blog_public` / noindex.
7. No browser tool, so visual and responsive QA stay NOT-TESTED.

## Section outline (ASSUMED) and widget mapping
Rule: one outer container per section; children are native widgets. No HTML widget for layout.

| # | Section | Containers | Native widgets (slug, status) | Data |
|---|---|---|---|---|
| 1 | Hero | boxed column > text stack; optional row with image | `heading` h1 (AVAILABLE), `text-editor` (AVAILABLE), `button` x2 (REGISTERED), `image` (REGISTERED) | Placeholder copy |
| 2 | Search | inside hero or own row | WP `wp-widget-search` or `xpro-search` (REGISTERED, untested) | WordPress search |
| 3 | Category quick links | row, wraps | `icon-box` or `button` x N (REGISTERED) | Placeholder labels |
| 4 | Featured AI tools | section heading + 3-col grid of card containers | per card: `image`, `heading`, `text-editor`, `button` | Static placeholders (no tool data) |
| 5 | Comparisons | heading + 2-3 card containers | `heading`, `text-editor`, `button` | Static placeholders |
| 6 | Deals | heading + card containers | same + text status label ("Unverified") | Placeholders only. No codes, discounts or expiry |
| 7 | Latest articles | heading + card grid | Option A: `xpro-post-grid` (REGISTERED, untested, uses real posts). Option B: static cards | WP posts (only "Hello world!" exists) |
| 8 | How we review (trust) | row of 3 | `icon-box` x3, `button` to methodology (page does not exist) | Placeholder |
| 9 | Newsletter | boxed panel | `heading`, `text-editor`, `button`. Form deferred | Blocked (no form plugin) |
| H/F | Header / footer | Xpro Theme Builder layouts | `xpro-site-logo`, `xpro-horizontal-menu`, etc. | Separate R3 task |

Do NOT use: `loop-grid`, `posts`, `form`, `price-table`, `call-to-action`, `reviews`, `theme-*` (all Pro stubs), `star-rating`/`rating` (ratings are never invented).

## Container tree (per section pattern)
```
container (full width, section class rmh-<name>)
  container (boxed, column, gap)           <- content width = ESTIMATE until the screenshot
    heading (section title)
    text-editor (intro)
    container (row, wrap)                  <- card grid, 3 -> 2 -> 1 columns
      container (card) x N: image, heading, text-editor, button
```
Repeating card = candidate for one saved template (Elementor library template, needs approval to create).

## Responsive plan (defaults, ESTIMATE)
| Viewport | Plan |
|---|---|
| 1440 / 1280 | Same desktop layout; boxed width. Separate 1280 behaviour needs a laptop breakpoint, which is a global setting (R3). |
| 768 | 2-column card grid; hero stacks. |
| 390 / 360 | 1 column; buttons full width; touch targets about 44px; no horizontal scroll. |
Status: NOT-TESTED until browser evidence exists.

## Defaults for non-visible states
Hover/focus: use Elementor defaults plus visible focus. No animation. Empty sections hide. Mobile nav comes with the header task.

## Acceptance criteria
1. Only the approved draft page changed; status stays `draft`.
2. Every text, image and button is an individual native widget.
3. No HTML widget, iframe or screenshot background.
4. All copy is real or marked `[Placeholder]`; no invented ratings, prices, discounts, codes, counts.
5. One h1, sensible heading order.
6. Outline read-back matches the container tree.
7. Rendered preview returns 200 and shows each section's text.
8. Tokens come from the confirmed palette, applied scoped (not global) unless R3 is approved.
9. Responsive and visual QA reported NOT-TESTED unless browser evidence exists.

## Open questions (max 3)
1. Attach the approved Stitch homepage screenshot (default if absent: build hero only, placeholders, generic layout).
2. Confirm tokens/fonts or approve a global kit change (default: scoped local styling only).
3. Real copy for hero/tools/deals, or placeholders (default: placeholders).
