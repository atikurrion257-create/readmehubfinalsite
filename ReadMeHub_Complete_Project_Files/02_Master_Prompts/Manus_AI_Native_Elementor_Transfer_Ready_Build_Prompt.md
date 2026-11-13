# MANUS AI — READ, AUDIT, BUILD & DELIVER A TRANSFER-READY NATIVE ELEMENTOR WEBSITE

## Primary mission

Act as a coordinated senior implementation team and complete the supplied WordPress website design as a genuinely editable, maintainable, transfer-ready WordPress website built primarily with native Elementor widgets and containers.

This is an implementation task, not merely a design critique, prompt-writing exercise, or plan. Inspect the supplied files and the Manus workspace first. Use the relevant available skills in this project, then implement, test, package, and report only what has actually been completed.

The final deliverable must be suitable for transfer/import into a separate WordPress installation. It must not depend on undocumented assumptions, missing assets, a page-sized HTML widget, or a custom theme.

## Important input verification — do this first

Inspect the uploaded ZIP and every other project attachment available in this conversation/workspace.

The file named `elementor-native-widget-based-website-builder` may be a skill package rather than the actual website design/export. Verify its contents instead of assuming it contains a finished site.

If it contains `SKILL.md` and reference documents, read them as implementation guidance. Do not treat them as the website itself.

Search the available workspace and attachments for the actual source material, such as:
- Elementor Kit/export JSON or ZIP
- WordPress/WXR XML export
- site/page JSON
- HTML/CSS/JS source
- screenshots or design references
- Figma exports or links
- media/assets folders
- existing website URL
- existing WordPress backup
- content and page inventory

Create an input inventory with each file, type, purpose, whether it was successfully opened, and what it proves. Do not invent missing files or claim that you inspected a source that was unavailable.

If the actual site design/export is absent, do not pretend to have reproduced it. Continue with all work that can be performed responsibly from available evidence, identify the exact missing source required, and ask one concise consolidated question only if it blocks implementation.

## Skill discovery and use

Inspect the skills already available in this Manus project/chat. Read their descriptions and instructions. Select and actually use every skill relevant to this job, including where available:
- Elementor/native-widget website building
- WordPress architecture and implementation
- design-system extraction
- UI/UX and design critique
- accessibility review
- responsive design
- Elementor Kit/global settings
- component/reusable-template architecture
- WordPress import/export and migration
- QA/testing
- technical SEO and performance
- security and privacy
- file/archive inspection

Do not claim a skill was used unless you actually opened/applied its instructions or performed the corresponding work. Do not install unrelated skills or plugins merely to increase the count. If a needed skill is unavailable, state that limitation and apply the relevant checklist from this prompt instead.

For the supplied `elementor-native-widget-based-website-builder` skill, read:
- `SKILL.md`
- `references/design-system-spec.md`
- `references/prompt-template.md`
- `references/reviewer-stack.md`
- `references/scoring-rubric.md`

Apply the reviewer stack sequentially:
1. Prompt Architect
2. Elementor Native UI Architect
3. Design System Curator
4. Elementor Kit Specialist
5. Component Reuse Architect
6. Accessibility & Responsive Reviewer
7. Verification / Red-Team Reviewer

A later reviewer may downgrade confidence or reject an unsupported mapping. Do not turn unknowns into facts.

## Required expert roles

Coordinate these roles internally and reconcile their findings before implementation:

1. Senior WordPress Architect
2. Senior Elementor Native-Widget Architect
3. Elementor Kit / Site Settings Specialist
4. Design-System Extraction Specialist
5. UI/UX Designer
6. Responsive Design Engineer
7. WordPress Import/Export and Migration Specialist
8. ACF / Structured Content Specialist, only if ACF is present or genuinely needed
9. Accessibility Specialist
10. Technical SEO Specialist
11. Web Performance Specialist
12. Security and Privacy Reviewer
13. Frontend QA / Cross-Browser Tester
14. Packaging and Handoff Engineer
15. Red-Team Reviewer for unsupported claims and hidden dependencies

These are review perspectives, not permission to invent functionality or claim certifications.

## Non-negotiable implementation constraints

- Target platform: WordPress.
- Theme: Hello Elementor. Keep it if it is already the project requirement.
- Page builder: Elementor.
- Build page layouts with native Elementor containers and widgets wherever the target installation supports them.
- Prefer native Heading, Text Editor, Image, Button, Icon, Icon Box, Image Box, Nav Menu, Accordion/Toggle, Form, Divider, Spacer, Loop/Posts widgets, and other verified native widgets as appropriate.
- Use Elementor Pro widgets only when the actual target license/version confirms availability.
- Use ACF only where structured custom fields/content genuinely require it and the plugin is available or explicitly approved.
- Do not create or activate a custom theme.
- Do not replace Hello Elementor or Elementor.
- Do not add unnecessary Elementor addon packs or plugin bloat.
- Do not create a page-sized HTML widget to imitate an entire page.
- Do not put all content and layout into a single shortcode or giant code block.
- Custom CSS is allowed only where native controls cannot faithfully implement the design; scope it to the relevant component/page and document it.
- Minimal JavaScript is allowed only when necessary. Document dependencies and fallback behavior.
- Do not invent Elementor widget IDs, control IDs, dynamic tags, ACF field names, breakpoints, Kit serialization, or import schemas.
- Never promise transfer/import compatibility until it has been tested in the target environment.
- Preserve the existing site’s Kit/global styles if the target is an existing site. Do not overwrite established globals without a documented reason.
- If the target version is unknown, inspect it if possible; otherwise mark version-dependent mappings as unverified.
- Do not remove plugins, content, templates, settings, or assets from a live site without an authorized backup and an explicit safe change plan.

## Phase 1 — Establish source of truth

1. Inventory all supplied files and project resources.
2. Identify the actual design source and the intended fidelity:
   - reference-faithful reproduction
   - preserve design while making it native/editable
   - approved redesign
3. Record the authoritative source for content, layout, assets, colors, fonts, spacing, breakpoints, and interactions.
4. Inspect the available WordPress/Elementor environment if access is provided:
   - WordPress version
   - Elementor and Elementor Pro versions
   - V3/V4/hybrid dialect where determinable
   - theme
   - license and installed add-ons
   - existing Kit and Global Colors/Fonts
   - actual Site Settings breakpoints
   - ACF and available fields
   - relevant templates and page settings
5. Label findings `CONFIRMED`, `LIKELY`, `ASSUMED`, `UNVERIFIED`, or `VERSION-DEPENDENT`.
6. Do not infer exact measurements from screenshots when they cannot be reliably measured.

## Phase 2 — Extract the design system

Create a source-backed design-system specification covering:

- visual identity and design principles
- color palette and semantic color roles
- typography families, weights, sizes, line heights and letter spacing
- spacing scale and section rhythm
- content widths and container rules
- borders, radii, shadows and elevation
- icon library and usage rules
- imagery, crops, aspect ratios and image treatment
- buttons, links, forms, cards, badges, tables, navigation and other components
- motion, hover, focus, active, disabled, loading, empty, error and success states
- responsive behavior and mobile ordering
- dark mode only if the source design supports or requires it
- source-backed distinctive visual details
- reusable component rules
- accessibility and semantic rules
- source of truth, owner, version and change log

Identify at least three genuinely distinctive details supported by the supplied source. Generic cards, gradients, shadows, or rounded corners do not count unless they are demonstrably part of the source design.

For every unknown value, state `UNKNOWN` or `PROPOSED`; do not silently guess.

## Phase 3 — Content and page inventory

Create a page-by-page and section-by-section inventory.

For each page/section, document:
- page/section name and purpose
- content hierarchy
- actual copy and media assets available
- primary and secondary user actions
- layout structure
- repeated content patterns
- mobile behavior
- relevant interaction states
- source reference
- Elementor-native implementation mapping
- dynamic data requirements
- unresolved gaps

Preserve supplied copy and meaning. Do not replace real content with lorem ipsum, generic placeholder copy, fake statistics, fake testimonials, fake reviews, fake ratings, or invented product claims. If content is absent, mark the gap clearly and only write new copy when the task and evidence support it.

## Phase 4 — Build an editable Elementor architecture

For every visible region, map:

`Purpose → Semantic role → Layout primitive → Verified native Elementor widget/element → Editable controls/data → Responsive behavior → Acceptance test`

Requirements:
- Use native containers and widgets for individual elements.
- Keep headings, text, images, buttons, icons, accordions, forms, lists and other elements independently editable.
- Repeated patterns should use reusable templates/components when the target installation supports them and when doing so improves maintainability.
- Clearly distinguish global/shared properties from per-instance editable content.
- Preserve sensible editor labels and Navigator structure.
- Keep the DOM/layout semantic and maintainable.
- Avoid unnecessary nested containers and duplicated markup.
- Use flex for one-dimensional layouts and grid for genuine two-dimensional layouts when supported.
- Do not make the entire page one HTML widget.
- Any exception to native widgets must be registered with the reason, rejected native alternative, scope, dependency, maintenance owner, risk, exit condition, and test.

Escalate implementation choices in this order:

1. Native Elementor widget/element
2. Composition of native widgets/containers
3. Verified native reusable/loop/dynamic feature
4. Scoped CSS
5. Minimal JavaScript
6. Verified server/data layer
7. Maintained custom widget, only if truly necessary
8. Bounded HTML exception, only as a last resort

## Phase 5 — Elementor Kit and globals

For an existing site, reuse its existing Kit and globals unless the source proves a necessary correction.

For a new site, create a proposed Kit plan and mark it as proposed until target-tested.

Map:
- Global Colors
- Global Fonts
- content width and layout settings
- buttons and form styling
- image styling
- responsive breakpoints
- custom CSS variables and their scope
- dark mode, if applicable
- reusable components
- Theme Builder templates and conditions, if required

Every design token should have one authoritative destination. Prefer Elementor Global Colors/Fonts; use scoped CSS variables only when native controls cannot express the token.

Never claim Kit importability without testing it in the target Elementor version.

## Phase 6 — Responsive behavior and accessibility

Test at the actual target breakpoints when available, plus at least one intermediate width.

Verify:
- desktop, tablet and mobile layout
- stacking and element order
- wrapping and overflow
- typography and spacing scaling
- image crop and focal point
- visibility rules
- sticky/fixed behavior
- long text and long labels
- forms and error messages
- touch target usability
- keyboard order and keyboard operation
- visible focus
- heading hierarchy and landmarks
- link versus button semantics
- meaningful alt text and decorative-image handling
- contrast using actual measured values
- reduced motion
- language and RTL behavior if relevant
- 200% zoom and reflow

Do not claim WCAG compliance merely because a checklist was reviewed. Report actual tests and failures. Treat 48px as a practical touch-target baseline where feasible, not as a universal WCAG requirement.

## Phase 7 — Implementation and data integrity

Implement the actual site using the tools and access available.

If working from a source Elementor export:
- inspect its structure before changing it
- preserve the original as a backup
- validate JSON/XML/archive integrity
- retain media references and verify files exist
- map global settings and template dependencies
- do not fabricate serialized Elementor structures
- do not silently drop content, settings or assets
- preserve source files and record modifications

If ACF is required:
- document each field group, field, return format, location rule and content type
- only use field names and return formats confirmed in the target environment
- specify sensible empty-state fallbacks
- ensure output is escaped/sanitized
- avoid creating ACF fields for content that should simply be normal Elementor text unless structured data truly benefits the project

If working directly in WordPress:
- make a backup before risky edits
- avoid destructive changes
- verify every save/publish operation
- do not report success based only on an API response if the rendered page can be checked
- do not change DNS, hosting, live production, billing, user roles, or security-sensitive settings without explicit authorization

## Phase 8 — Transfer-ready packaging

Create the most appropriate handoff package supported by the source and target environment. Do not claim that one ZIP alone guarantees a complete migration.

Where relevant, include:
1. Elementor page/template exports or Kit export generated by the actual Elementor environment.
2. WordPress WXR XML export for content, if available and needed.
3. Media assets with a manifest.
4. ACF field groups/post-type configuration export, if actually used and exportable.
5. Theme Builder templates and display conditions, if required.
6. Global styles/Kit settings.
7. Required custom CSS/JS and clear instructions for where they belong.
8. Plugin/dependency manifest with required versions and licenses.
9. Import/migration guide with exact steps.
10. Backup and rollback instructions.
11. Known limitations and target-version requirements.
12. QA report and change log.

Prefer exports generated by the actual WordPress/Elementor installation over hand-crafted import files. If the environment cannot generate or test an export, label it `UNVERIFIED` and provide the closest safe alternative without calling it fully transfer-ready.

Never include passwords, API keys, private tokens, or other secrets in the package.

## Phase 9 — Functional and visual QA

Do not stop after building the desktop screenshot.

Test:
- every requested page/section exists
- content and assets are present
- headings/text/images/buttons are independently editable in Elementor
- links and buttons point to intended destinations
- forms and interactions work where configured
- reusable components propagate changes correctly
- global styles are applied consistently
- no unexpected horizontal overflow
- desktop/tablet/mobile rendering
- keyboard and focus behavior
- contrast and zoom/reflow
- console/runtime errors where accessible
- missing assets and broken links
- layout shift and performance issues where measurable
- SEO basics: title, meta description if managed, headings, canonical/indexability where accessible, alt text, internal links, sitemap readiness and schema only where appropriate
- transfer package integrity and import steps

Use screenshots or other evidence for representative viewports. Record test environment, date, viewport, result, and any limitation.

For each failed test, fix it and retest when possible. If it cannot be fixed, document it as unresolved.

## Phase 10 — Final reviewer stack

Run the seven reviewers in order:
1. Prompt Architect
2. Elementor Native UI Architect
3. Design System Curator
4. Elementor Kit Specialist
5. Component Reuse Architect
6. Accessibility & Responsive Reviewer
7. Verification / Red-Team Reviewer

The Red-Team Reviewer must search specifically for:
- page-sized HTML widgets
- invented widget/control IDs
- invented dynamic tags or ACF field names
- unsupported Pro/add-on dependencies
- fabricated breakpoints or token values
- missing assets
- unverified import assumptions
- untested accessibility claims
- false claims of completion
- hard-coded values that should use globals
- hidden third-party dependencies
- missing rollback or migration steps

## Required deliverables

Return these outputs, with real files when the environment supports file creation:

A. `01-input-inventory.md`
- files inspected, what they contain, source-of-truth decision, missing inputs

B. `02-design-system-spec.md`
- source-backed design tokens, components, signatures, responsive and accessibility rules, confidence labels

C. `03-page-section-inventory.md`
- complete page/section inventory and content/asset map

D. `04-elementor-native-widget-map.md`
- every section mapped to native Elementor elements/widgets, editable fields, responsive rules and justified exceptions

E. `05-kit-and-global-settings.md`
- Global Colors/Fonts, layout, breakpoints, reusable components, version/license status

F. `06-implementation-package/`
- actual Elementor exports, media, configuration, custom CSS/JS and manifests that can be generated and verified

G. `07-wordpress-transfer-guide.md`
- exact transfer/import steps, dependencies, validation and rollback

H. `08-qa-report.md`
- tests performed, evidence, results, failures, fixes and unresolved issues

I. `09-change-log.md`
- source-preserving changes and reasons

J. `10-final-handoff.md`
- exact package contents, verified status, unverified status, prerequisites and next action

Also include a concise completion matrix:

| Requirement | Status | Evidence | Remaining limitation |
|---|---|---|---|

Use only:
- `COMPLETED AND VERIFIED`
- `COMPLETED BUT NOT TARGET-VERIFIED`
- `PARTIAL`
- `BLOCKED`
- `NOT APPLICABLE`

## Acceptance criteria

The work is complete only when:
- the actual source design has been identified and its evidence recorded
- the design system and distinctive details are preserved
- pages are built with independently editable native Elementor widgets wherever feasible
- all non-native exceptions are justified and documented
- the site responds correctly across tested desktop/tablet/mobile widths
- accessibility checks have actual recorded results
- required assets and dependencies are included or explicitly identified
- a transfer package has been generated from a valid source and its importability has been tested, or the limitation is explicitly stated
- an exact transfer guide and rollback plan exist
- the final report distinguishes verified facts from proposals and unknowns

## Final behavior rules

- Work autonomously through all non-blocked steps; do not repeatedly ask what to do next.
- Ask only one consolidated clarification if a missing fact genuinely blocks implementation.
- Do not claim the site is complete, imported, responsive, accessible, optimized, or transfer-ready unless evidence supports that exact claim.
- Do not invent content, assets, versions, fields, test results, or successful imports.
- If a tool or permission is unavailable, complete the work that is possible and document the exact limitation.
- Optimize for fidelity, native editability, portability, maintainability, performance, accessibility, and honest verification—not for a superficial screenshot.
