# READMEHUB_PROJECT_CONTEXT.md

## Project identity
- Project: ReadMeHub — WordPress and Elementor Implementation
- Staging URL: `https://www.readmehub.com/stagging`
- Goal: Reconstruct approved Google Stitch designs as editable, responsive sections and templates in the existing WordPress website.
- This is an implementation project, not a new website or branding redesign.

## Workflow
For each screenshot: identify the target page/section; inspect the current page and Elementor structure; inspect the approved design system and nearby sections; identify widgets, templates, global styles, and ACF data; plan; implement only the authorized section; verify; report changes and limitations.

## Historical environment baseline
Previously reported: WordPress, Hello Elementor, Elementor 4.2.4, ACF 6.8.9, Rank Math SEO, Xpro Elementor Addons/Theme Builder, and Elementor Pro not installed. These are historical values. Verify the actual environment before relying on them.

## Safety
Only modify the authorized staging environment. Never modify production. Do not perform destructive operations, replace the theme, remove content, change global styles, or install plugins without explicit authorization. Prefer reversible, section-scoped changes.

## Implementation priority
1. Native Elementor widgets and containers.
2. Existing reusable templates and global styles.
3. Compatible installed Xpro widgets.
4. WordPress native functionality and existing ACF fields.
5. Scoped custom CSS.
6. Minimal custom code only when necessary and authorized.

Do not use a single HTML widget to recreate an entire page. Keep the result maintainable and editable wherever practical.

## Design system
The approved Google Stitch homepage and ReadMeHub design system are the visual source of truth. Preserve existing colors, typography, spacing, content widths, buttons, cards, radii, shadows, icons, header, footer, and responsive rules. Confirm exact tokens against the approved reference.

## Dynamic content
Use standard WordPress fields where appropriate. Use existing ACF fields only after verifying names, types, location rules, and values. Potential content types include Posts, Tools, Comparisons, and Deals/Coupons; these are possibilities, not confirmation that they exist.

## Responsive QA
Target viewports: 1440px, 1280px, 768px, 390px, and 360px. Do not claim responsive QA passed unless performed.

## Reporting
Record date, page URL, section, screenshot reference, structure inspected, widgets changed, CSS/code changes, ACF dependencies, responsive checks, evidence, differences, and next action. Separate confirmed facts from assumptions.

## Completion standard
A task is complete only when the section has been implemented in the authorized staging environment and inspected. If access is unavailable, report the blocker. Never claim execution that did not occur.
