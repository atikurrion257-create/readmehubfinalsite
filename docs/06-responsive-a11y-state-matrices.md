# 06 — Responsive Matrix, Accessibility Matrix, Interaction / State Matrix

Labels: CONFIRMED / LIKELY / ASSUMED / UNVERIFIED / VERSION-DEPENDENT / PROPOSED (key in [docs/00](00-index.md)).

Actual Site Settings breakpoints are UNKNOWN until inspected (docs/01 §1.5). Design conceptually for
mobile/tablet/desktop plus intermediate widths. PROPOSED breakpoints: **767 (mobile)** and **1024 (tablet)**
(Elementor editor defaults — LIKELY per Elementor docs; CONFIRMED only from runtime).

## 6.1 Responsive matrix (master prompt §15)

| Region | Desktop | Tablet | Mobile | Intermediate |
| --- | --- | --- | --- | --- |
| Header | Horizontal sticky, compact nav + search + mode toggle + CTA | Compressed nav; search + toggle visible | Logo + search + toggle + hamburger; explicit open/close, keyboard, visible focus | Verify no wrap breakage |
| Hero | Two-column asymmetric | Two-column condensed | Single column: copy → CTA → visual | Verify visual does not push H1 off-screen |
| Decision cards | Multi-column | 2-column | Single column stack | Equal-height without clipping |
| Featured workflows | 1 large + row of smaller | 2-col cards | Stacked; featured first | Verify featured block text/cover order |
| Featured comparison | Side-by-side cards (no giant table) | 2-col cards | Stacked cards, **no horizontal scroll** | Verify readability at ~600–800px |
| Comparison criteria rows | 3-column rows | Condensed rows | Per-option stacked cards | Verify row labels stay visible |
| Newsletter | Wide form | 2-column | Full-width input + CTA | Error/help text remains visible |
| Footer | Multi-column | 2-column | Single column | Tap targets preserved |
| Typography | Fluid clamp (if adopted) | Intermediate | Comfortable reading size | Test 200% zoom |
| Touch targets | ≥ 44px, prefer 48px | ≥ 44px | ≥ 44px | Long labels do not truncate |

Rules: mobile-first; never simply scale down desktop; no horizontal overflow at any tested width; preserve the
core hero visual and essential information on mobile; test intermediate widths (e.g. 360, 375, 414, 600, 768,
834, 1024, 1280, 1440) in addition to the actual Site Settings breakpoints.

### 6.1.1 Fluid typography constraints (master prompt §5.3)

- When fluid type is used: `clamp(min, rem + vw, max)`. Never pure `vw`.
- Project ratio constraint: max/min ≤ 2.5 for positive sizes (project constraint — not WCAG proof).
- Body measure: 65–75ch (`reading` wrapper, max 720px).
- Test 200% zoom/reflow independently of fluid scaling.
- Exact scale values deferred to the decision gate (docs/01 B3). Role scale (PROPOSED):
  display `clamp(2.25rem, …, 3.5rem)` tight leading · heading-l/m/s 1.75 / 1.375 / 1.125rem ·
  body 1.0625rem / lh 1.65 · body-s 0.9375rem · label 0.75rem uppercase +positive tracking ·
  meta 0.8125rem · button 0.9375rem semibold.

## 6.2 Accessibility matrix (master prompt §17)

Observed in source research (content level, CONFIRMED): H1 → H2 → H3 hierarchy; alt text on key images
(some empty, consistent with decorative); required form fields marked with asterisk; consent checkbox with
linked policy. Not verifiable from source research: contrast ratios, focus indicators, keyboard order, touch
target sizes, reduced-motion support, error messaging. **No WCAG claim is made.** Baseline target: WCAG 2.1 AA.

| Area | Requirement | Verification (not yet run) |
| --- | --- | --- |
| Landmarks | `<header>`, `<nav>`, `<main>`, `<footer>`; skip link (C20) first focusable | DOM audit + keyboard |
| Headings | One meaningful H1 per page; logical order; sections use H2, cards H3 | Heading map per template |
| Links/buttons | Real `<a>`/`<button>`; meaningful accessible names ("Read the full comparison", not "Click here") | Screen reader pass |
| Focus | 2px ring + 2px offset, contrast-verified in rendered site (both themes) | Contrast measure + keyboard |
| Menus | Keyboard-operable; `aria-expanded`; Escape closes; focus returns to trigger | Keyboard-only run |
| Forms | Labels, instructions, required status (`aria-required`), validation, error recovery, `aria-describedby` | Keyboard-only submit; error injection |
| Status | Never color/icon alone — text is the signal ("Updated", "Verification due", "Sponsored") | Visual + SR check |
| Touch | ≥ 44px; prefer 48px primary | Measure rendered |
| Zoom/reflow | 200% zoom: no content loss, no forced horizontal scrolling | Browser zoom test |
| Reduced motion | `prefers-reduced-motion`: disable floating/rotation/scale/marquee; preserve state changes | Emulate setting |
| Images | Meaningful alt on informative images; empty alt on decorative | Alt audit |
| Language | `<html lang="en">` (US English primary) | DOM audit |
| Long content | Long titles, long product names, missing imagery, narrow viewports tested | Content stress test |

Measure actual foreground/background contrast pairs in the rendered site in both themes. Supplied values are
targets, not compliance results. Do not claim WCAG compliance without test evidence.

## 6.3 Interaction / state matrix (master prompt §16)

| State | Rule |
| --- | --- |
| Hover | Change surface or underline; never only color |
| Focus | 2px ring, offset 2px, `focus-ring` token |
| Active | One step darker than hover |
| Disabled | Reduced contrast plus `aria-disabled`; never the sole signal of unavailability |
| Error | Text message plus icon plus border |
| Success | Text message plus icon |
| Stale | If information is past its verification interval, display "Verification due". Never present stale as current |
| Reduced motion | Disable floating, decorative rotation, scale animations; preserve state changes without motion; pause any marquee |

| Element | Default | Hover | Focus | Active | Disabled | Empty | Loading | Error | Stale |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Primary button | Solid | Surface change | 2px ring + offset | Darker | Reduced contrast, `aria-disabled` | n/a | Inline progress | Inline error text | n/a |
| Input | Border subtle | Border strong | 2px ring + offset | n/a | Reduced contrast | Placeholder + helper | Subtle skeleton | Clear error + recovery | n/a |
| Card (interactive) | Raised surface | Elev-1 lift | Visible focus ring + accessible name | Pressed | n/a | Empty content message | Skeleton (reduced-motion aware) | Retry path | "Verification due" badge |
| Comparison row | Card / row | Hover if clickable | Focus ring on link | n/a | n/a | "No verified comparison available yet." | Skeleton row | Retry | Stale flag |
| Newsletter form | Input + CTA | Button surface change | Focus ring on input + CTA | Pressed | Disabled during submit | n/a | Inline spinner | Inline error + recovery | n/a |
| Mobile menu | Closed | n/a | Visible focus on trigger | Open state | n/a | n/a | n/a | n/a | n/a |
| Dark mode toggle | Labeled state | Surface change | Visible focus ring | Pressed | n/a | n/a | n/a | n/a | n/a |
| Affiliate CTA | Commercial card | Surface change | Ring on button | Pressed | n/a | n/a | n/a | Inline error | De-emphasized + "Verification due" |
| Evidence status block | Full rows | n/a | n/a | n/a | n/a | "Not yet recorded" per missing row | n/a | n/a | Stale date flagged |

Interaction timing (PROPOSED): 150–250ms ease-out for hover/focus/menu transitions; no entrance animation on
reading content (master prompt §5.12).
