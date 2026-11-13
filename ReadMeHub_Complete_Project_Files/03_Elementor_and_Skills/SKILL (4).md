---
name: elementor-qa
description: "Evidence-based QA for Elementor and WordPress pages. Four modes: structure audit (native vs HTML widgets, reuse, editability), visual comparison against a reference screenshot, responsive testing (1440, 1280, 768, 390, 360), and accessibility checks (headings, alt text, labels, focus, contrast). Use when the user says QA, verify, audit, compare with the design, does it match, check mobile, responsive, accessibility, a11y, regression, or after any build. Reports PASS, FAIL, BLOCKED or NOT-TESTED with evidence; never marks an untested item as passed."
---

# Elementor QA

Pick the mode(s) the request needs. A single-screenshot comparison does not require a site-wide audit.

## Evidence rules (all modes)
- Statuses: `PASS` (checked, evidence cited), `FAIL`, `BLOCKED` (tool missing), `NOT-TESTED`. No other values.
- Cite evidence per finding: screenshot file, outline excerpt, fetched HTML snippet, tool output.
- Separate observation from inference. Measured vs `ESTIMATE`.
- No browser means no visual or responsive PASS. Static HTML checks are allowed, and labeled static.
- Do not claim pixel-perfect. Say "visually compared at <viewport> using <method>".

## Mode S: Structure audit (read-only)
1. Get the page outline. List sections, containers, widgets.
2. Flag: HTML/shortcode widgets holding visible content, page-sized HTML blocks, images as text, hard-coded duplicated cards that should be a template, fixed heights, empty containers, deep nesting without reason, heading-level skips, inline CSS or `!important` clusters.
3. Editability check per element type (text, image, button/link).
4. Output a table: element, issue, severity, smallest fix.

## Mode V: Visual comparison
Inputs: reference screenshot + rendered screenshot at the same width. If either is missing: `BLOCKED`.
Compare in this order: layout/grid, hierarchy and alignment, spacing, typography (size/weight/line height), color, imagery/crops, borders/radii/shadows, CTA placement. For each difference: severity (high = changes meaning or layout; medium = visible spacing/type; low = polish), expected vs observed, cause guess (label as guess), smallest correction. Separate **material mismatches** from **acceptable responsive variation**.

## Mode R: Responsive
Targets 1440, 1280, 768, 390, 360 (state any others). Per viewport check: columns/stacking, wrapping, overflow and clipping (horizontal scroll), image crop, nav, button alignment and touch size (about 44px), tables, forms, footer. Report a viewport grid:
```
| Viewport | Status | Findings | Evidence |
```
Untested viewport = `NOT-TESTED` or `BLOCKED`. If a browser tool exists, use one session and resize through widths; jezweb `responsiveness-check` is a Claude Code-only skill (needs Playwright or Chrome MCP; it will not run in claude.ai chat) and sweeps 320/375/768/1280/1440, so run it with this project's widths (1440, 1280, 768, 390, 360) instead.

## Mode A: Accessibility (WCAG 2.2 AA oriented)
Check: one H1 and logical heading order; alt text matches purpose (decorative empty); link and button names; form labels and error text; visible keyboard focus (needs a browser, otherwise `BLOCKED`); color contrast of text vs background (compute from token values when known, `ESTIMATE` from screenshots); no color-only status; reduced-motion respect; landmark use. Static HTML covers headings, alt, names, labels.

## Output
Use `references/qa-report-template.md`. Always end with: Verified / Not verified / Blockers / Recommended next fixes (smallest first).

## Failure handling
Cannot reach the page (auth, DNS, draft not public): use a preview link if available; else `BLOCKED` and list what the user can supply (screenshots at the target widths).
