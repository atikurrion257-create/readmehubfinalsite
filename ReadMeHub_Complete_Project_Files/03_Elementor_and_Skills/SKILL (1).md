---
name: readmehub-project-pack
description: "ReadMeHub project guidance (Layer B). Use whenever the task concerns ReadMeHub or www.readmehub.com, its AI tools directory, tool reviews, comparisons, deals and coupons, blog templates, Google Stitch screenshots for this site, or its editorial and affiliate rules. Supplies verified stack facts, design constraints, content-trust rules, template scope and acceptance criteria, and tells you which core skills to chain. Load only for ReadMeHub work."
---

# ReadMeHub Project Pack

Project facts and constraints for ReadMeHub. Generic method lives in the core skills; this pack only adds what is specific to this site.

## Verified stack (read-only checks, 2026-10-22)
WordPress 7.1.3, PHP 8.2.34, Hello Elementor 3.5.1, **Elementor free 4.3.5**, Rank Math 1.0.280, Xpro Elementor Addons 1.7.11, Xpro Theme Builder 1.2.16, Royal MCP 1.5.10 (connector). **ACF is not installed. Elementor Pro is not installed** (premium widgets in the registry are unverified stubs). The WPForms widget is registered but the WPForms plugin was not in the plugin list. Install age was 0 days on first probe, 1 day on 2026-10-23. Re-verify before relying on any of this; older project notes (Elementor 4.2.4, ACF 6.8.9) are stale.

## Environment rule
Project docs call www.readmehub.com staging. Weak signals observed read-only on 2026-10-23: robots `noindex, nofollow`, install age 1 day, one default post, no pages, only the Default Kit template, default site title "My Blog". None of these proves staging. Treat it as `UNVERIFIED` (production-grade caution) until the owner confirms a staging URL. Build on draft clones; never publish. Chain `wp-change-safety` first.

## Chain by task
- New or changed section from a screenshot: `design-system-to-elementor` (once) -> `stitch-to-elementor-plan` -> `wp-change-safety` -> `elementor-native-builder` -> `elementor-qa`.
- Template needing data: add `wp-dynamic-content-model` before the plan.
- Launch review: `elementor-qa` + `wp-performance-seo-qa`.

## Design constraints
Approved Stitch homepage and existing site styles are canonical. Do not create a competing identity or alter global styles to fix a local issue. Reference tokens (unconfirmed until checked against Stitch and the Elementor kit) are in `references/design-reference-tokens.md`. Layouts may differ by content type, but share one visual language. Reuse shared components; do not clone a component with different styling without a functional reason.

## Content trust (non-negotiable)
Never invent or imply: ratings, reviews, testimonials, prices, discounts, coupon codes, expiry dates, author credentials, company history, user counts, testing claims, or verification. Prices, features and offers need a source and a last-verified date. Optional data disappears gracefully. Unverified offers must not look verified; expired offers must not look active. Affiliate relationships must be disclosed accurately. Details in `references/content-trust-and-templates.md`.

## Template scope
17 planned templates (directory, tool review, blog archive/single, category, comparisons archive/single, deals archive/single, search, About, Methodology, Affiliate Disclosure, Contact/Report error, Privacy, Terms, 404). This is a checklist, not proof any exist. Read `references/content-trust-and-templates.md` when planning any of them.

## Acceptance criteria (every ReadMeHub task)
1. Draft only, correct page, Change Gate recorded.
2. Native Elementor/installed Xpro widgets; no page-sized HTML widget.
3. Tokens reused; no new global tokens without approval.
4. Text, images, buttons editable.
5. No unsupported facts; placeholders labeled.
6. Responsive status reported per viewport with evidence or `NOT-TESTED`/`BLOCKED`.
7. Build Report and QA Report delivered.

## Missing source
`06_CLAUDE_PROJECT_INSTRUCTIONS.md` is not in the project files. Do not reconstruct it; the pasted project instructions are the working equivalent.
