---
name: design-system-to-elementor
description: "Extract a design system (colors, fonts, type scale, spacing, radii, shadows, buttons, cards, breakpoints) from Google Stitch screenshots, a Figma or style export, design docs, or an existing site, and map it to the site's actual Elementor global settings. Use when the user says design tokens, design system, brand colors, global styles, typography scale, match the existing style, extract the palette, or before implementing any screenshot where tokens must be reused rather than invented."
---

# Design System to Elementor

Output: a **Token Inventory** and a **Token-to-Elementor Mapping**, with every value labeled by evidence. Never invent a palette.

## Sources, in priority order
1. Values the owner stated or approved design-system docs.
2. Actual Elementor site settings (active kit global colors/typography, theme customizer values), read through a connected tool or exported JSON.
3. Computed styles from the live page, if a browser is available.
4. Values sampled from screenshots (always `ESTIMATE`; say how sampled).

If sources conflict, record both and ask which is canonical. Do not merge silently.

## Workflow
1. List what you can actually read: connected WP/Elementor tools, browser, files. Mark each `AVAILABLE` or `NOT AVAILABLE`.
2. Read the kit (not `wp_get_global_styles`, which returns WordPress core defaults on classic themes): find the active kit post, read its settings (global colors, typography, container width, breakpoints, button defaults). Check whether this Elementor version exposes extra token systems (variables, global classes); do not assume.
3. Extract tokens from the reference into this table:
```
| Token | Value | Source | Status (VERIFIED/ESTIMATE/CONFLICT) | Existing Elementor global? | Action |
```
Cover: colors (brand, text, muted, border, surfaces, status), fonts and weights, heading/body scale with line height, container widths, section and card spacing, radii, shadows, button variants and states, input styles, icons, breakpoints.
4. Map each token: `REUSE global X`, `MATCHES a global within tolerance`, `NEW (needs approval)`, or `LOCAL ONLY (scoped override)`.
5. Inventory reusable components (header, footer, cards, badges, CTA blocks): where they exist (template ID or page) and whether they are real templates or copies.
6. List unresolved ambiguities as questions with a recommended default.

## Rules
- Reuse before creating. Adding or editing a global token is R3 under `wp-change-safety`; propose it, do not do it.
- A tolerance match (screenshot `#112234` vs global `#112233`) maps to the global and is noted.
- Fonts: confirm they are loaded on the site (kit or theme) before assuming they render.
- Hover, focus, and mobile states are usually not visible in a screenshot. Mark them `NOT VISIBLE`, default to existing site patterns.
- Do not recolor to "improve" contrast; report contrast failures to the user instead.

## Output
`design-tokens.md` (inventory + mapping + questions). Keep the table columns exactly as above so other skills can consume it.
