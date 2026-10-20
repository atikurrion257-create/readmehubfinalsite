# 08 — Exception / Dependency Register (master prompt §18)

Labels: CONFIRMED / LIKELY / ASSUMED / UNVERIFIED / VERSION-DEPENDENT / PROPOSED (key in [docs/00](00-index.md)).

Every custom CSS, third-party widget, Xpro Free widget, ACF field, or non-native solution is registered here
with minimal scope and an exit condition. Forbidden regardless of temptation: page-sized HTML widgets,
screenshot-as-background UI, image-based layouts, giant inline CSS/JS blocks, fake Elementor nesting,
duplicate global styles, unnecessary add-on widgets/wrappers.

## E0 — Scoped token stylesheet (baseline, not a deviation)

- **Exception:** one site-wide stylesheet, `.rmh-` namespace, token block first (docs/04 §4.6).
- **Scope:** tokens, focus/hover states, card/badge/commercial/verdict styles, reduced-motion rules,
  sticky header, table scroll (only if used).
- **Reason native rejected:** Elementor Global Colors/Fonts cannot express dark-mode token overrides,
  focus rings, elevation classes, or reduced-motion rules.
- **Dependency/availability:** Custom CSS (no plugin).
- **Version:** n/a · **License:** project-owned.
- **Owner:** design system curator · **Maintenance risk:** low (token-based, documented).
- **Exit condition:** n/a — this is the sanctioned CSS path.
- **Verification:** no per-page hardcoded values; all rules reference tokens; no page dumps inline styles.

## E1 — Theme toggle + persistence JS

- **Exception:** ~15-line isolated vanilla JS setting `<html data-theme>`, reading/writing `localStorage`
  (`rmh-theme`), plus a tiny pre-paint head snippet to avoid theme flash.
- **Scope:** theme switching only.
- **Reason native rejected:** Elementor Free has no dark-mode toggle or preference persistence
  (LIKELY — verify); master prompt §2.13 explicitly allows small isolated custom JS.
- **Dependency/availability:** Custom JS (no plugin).
- **Version:** n/a · **License:** project-owned.
- **Owner:** frontend · **Maintenance risk:** very low.
- **Exit condition:** if a verified free, accessible, token-stylable toggle capability appears in the
  installed stack (e.g. Xpro Free — UNVERIFIED), re-evaluate; otherwise permanent.
- **Verification:** toggle works keyboard-only; preference persists across reloads; reduced-motion respected;
  state explicit via `aria-pressed` + label.

## E2 — Newsletter / form capture plugin (selection pending)

- **Exception:** a free form/newsletter plugin supplies the capture form (Elementor Free has no Form widget —
  LIKELY). Rendered via its shortcode/block inside Elementor (Shortcode widget or plugin block).
- **Scope:** newsletter form(s) only (header/footer/homepage/newsletter page).
- **Reason native rejected:** no native Free Form widget; master prompt §2.14 requires newsletter from launch.
- **Selection criteria (must all pass):** free tier sufficient for email capture; accessible output
  (labels, errors, keyboard); consent/privacy support; no fake urgency patterns forced; export/ownership of
  the list; token-stylable or restylable via E0; maintained (recent updates).
- **Candidates to evaluate at install (UNVERIFIED):** MailPoet (free — owned-list with WP-native sending),
  Fluent Forms free, WPForms Lite, Forminator free. Prefer the one that best satisfies accessibility +
  styleability + list ownership; do not require a paid tier for any planned feature.
- **Version / license:** to record at install (free tier only) · **Owner:** implementation agent.
- **Maintenance risk:** low-medium (plugin dependency).
- **Exit condition:** if Elementor Free ever ships native forms in the installed version, or capture needs
  drop to a link-to-provider embed, replace the plugin.
- **Verification:** keyboard-only submit; error/success states; no frequency promises; consent line links
  Privacy; spam handling configured.

## E3 — Header/footer build path

- **Exception:** header/footer templates built outside Elementor Pro Theme Builder. Primary candidate:
  Xpro Theme Builder Free (UNVERIFIED availability/conditions/token-stylability at installed version).
  Fallback: Hello Elementor's native header/footer customization + scoped CSS (E0). Last resort: minimal
  theme template part (child of Hello Elementor patterns — do not replace Hello Elementor).
- **Scope:** site header + footer only (sticky behavior via E0 CSS).
- **Reason native rejected:** Theme Builder is Pro; brief forbids Pro.
- **Dependency/availability:** Xpro Theme Builder Free (free tier) or theme + CSS/PHP template part.
- **Version:** record at install · **License:** free tier.
- **Owner:** WordPress architect · **Maintenance risk:** medium if template-part path is taken
  (PHP knowledge needed for edits); low for Xpro path.
- **Exit condition:** if Elementor Pro becomes available/authorized, migrate to Theme Builder; until then permanent.
- **Verification:** header/footer render on all templates; nav keyboard-operable; skip link works; both themes;
  sticky header does not obscure anchor targets.

## E4 — ACF values surfaced via Shortcode widget / template helpers

- **Exception:** structured ACF values render through ACF shortcodes (or tiny documented helpers) because
  Elementor Free lacks dynamic-tag binding (LIKELY — verify at installed version).
- **Scope:** evidence blocks, verdict boxes, pricing rows, affiliate CTA fields (docs/07 lists).
- **Reason native rejected:** Pro-only dynamic tags.
- **Dependency/availability:** ACF Free (free) + Elementor Shortcode widget (native Free).
- **Version:** ACF 6.8.x public (LIKELY); verify installed · **License:** free tier.
- **Owner:** content architect · **Maintenance risk:** low if fields stay few and documented.
- **Exit condition:** if the installed stack offers verified native dynamic binding, or if shortcode rendering
  proves unreliable — fallback is static editor-owned content per template.
- **Verification:** every field renders or shows its defined empty state; escape/whitelist per docs/07; no
  fabricated defaults; editors can update values without code.

## E5 — Comparison table treatment (conditional — only if a table is ever used)

- **Exception:** responsive table behavior (sticky first column, horizontal scroll container with visible
  affordance) via scoped CSS.
- **Scope:** comparison criteria presentation only.
- **Reason native rejected:** Elementor Free has no accessible responsive-table widget; the design prefers
  stacked decision rows (C15) so this exception should rarely trigger.
- **Dependency/availability:** Custom CSS (E0 scope).
- **Owner:** frontend · **Maintenance risk:** low.
- **Exit condition:** avoid entirely by using stacked cards/rows (C15) — preferred default.
- **Verification:** mobile core content readable without horizontal scroll; commercial CTA only in final
  column; keyboard scroll reachable.

## E6 — Mobile menu JS (conditional)

- **Exception:** small isolated JS for open/close + focus management + Escape if the native free Nav Menu
  widget's mobile behavior is insufficient at the installed version (UNVERIFIED).
- **Scope:** mobile navigation panel only.
- **Reason native rejected:** only if native widget fails accessibility/UX checks.
- **Dependency/availability:** Custom JS (no plugin).
- **Owner:** frontend · **Maintenance risk:** low.
- **Exit condition:** native widget passes the keyboard/aria checks at the installed version.
- **Verification:** `aria-expanded`, Escape closes, focus returns to trigger, visible focus, 44px targets.

## E7 — Accent/commercial token styling on native buttons

- **Exception:** scoped `.rmh-btn-commercial` class applied to Elementor Button widgets to enforce the
  reserved commercial treatment beyond Global Button Styles.
- **Scope:** commercial buttons only (Affiliate CTA).
- **Reason native rejected:** Global Button Styles cover primary/secondary; the reserved commercial tier must
  be structurally distinguishable (master prompt §2.7).
- **Dependency/availability:** Custom CSS (E0).
- **Owner:** design system curator · **Maintenance risk:** very low.
- **Exit condition:** if Global Button Styles can express a third tier cleanly at the installed version.
- **Verification:** commercial token never used for editorial links; disclosure adjacent to every instance.

## Register summary

| ID | Item | Free? | Risk | Status |
| --- | --- | --- | --- | --- |
| E0 | Scoped token stylesheet | Yes (CSS) | Low | Baseline |
| E1 | Theme toggle JS | Yes (JS) | Very low | Planned |
| E2 | Newsletter plugin | Yes (free plugin) | Low–med | Selection pending (B4) |
| E3 | Header/footer path | Yes (Xpro Free or theme+CSS) | Low–med | Path pending verification |
| E4 | ACF shortcode surface | Yes (ACF Free) | Low | Planned |
| E5 | Table scroll/sticky CSS | Yes (CSS) | Low | Conditional, discouraged |
| E6 | Mobile menu JS | Yes (JS) | Low | Conditional |
| E7 | Commercial button class | Yes (CSS) | Very low | Planned |

**Prohibited (no exception will be granted):** Elementor Pro, paid Xpro widgets, JetEngine, Crocoblock,
premium add-on suites, paid table/mega-menu/form-builder/animation plugins — unless a genuine functional
requirement cannot reasonably be achieved with the free stack AND the master prompt escalation order has been
exhausted AND the exception is re-registered here with justification (per master prompt §2.9, this path is
expected never to trigger at launch).
