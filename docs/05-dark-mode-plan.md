# 05 — Dark Mode Plan (Required)

Labels: CONFIRMED / LIKELY / ASSUMED / UNVERIFIED / VERSION-DEPENDENT / PROPOSED (key in [docs/00](00-index.md)).

Dark mode is a **deliberate semantic dark theme**, not a color inversion. It preserves tactile depth,
hierarchy, readability, CTA visibility, focus states, card distinction, and accessibility. The directional
lighting model is preserved: light theme reads as "Cool Grey Surface", dark theme reads as "Dark Cool Material
Surface". Never: black + neon purple, cyberpunk, glassmorphism, generic dark SaaS dashboard.

## 5.1 Mechanism

| Aspect | Spec | Label |
| --- | --- | --- |
| Token swap scope | CSS custom properties defined once on `:root`; overridden under `[data-theme="dark"]`; initial default also honors `prefers-color-scheme: dark` when no explicit user choice exists | PROPOSED |
| Explicit user choice | `<html data-theme="light|dark">` set by the toggle | PROPOSED |
| Default | Respect `prefers-color-scheme` if achievable (via a tiny inline head snippet that sets `data-theme` before paint); otherwise default to light. The current state must be explicit to the user via the toggle label | PROPOSED |
| Persistence | `localStorage` key (e.g. `rmh-theme`) storing `light` / `dark`; restored on load before paint | PROPOSED |
| JS budget | Theme toggle + persistence ≈ 15 lines, isolated, `defer`, no dependencies (exception E1) | PROPOSED |
| CSS scope | Tokens on `<html>`/`:root` so every token swaps site-wide; verify with actual target CSS scope (Elementor widget styles consume Global Colors — those globals must resolve to the same variables or be overridden in the dark scope) | UNVERIFIED (runtime) |
| Transitions | Restrained: 150–250ms ease-out on color/background only; `prefers-reduced-motion: reduce` disables them | PROPOSED |
| Shadows | Disabled in dark mode; depth via surface tone steps + borders (elev tokens inactive under dark) | PROPOSED |
| Images / logos | Light and dark logo variants shipped; no auto-invert of editorial images/screenshots; illustrative art has a dark variant or sits on a neutral token surface | PROPOSED |
| Focus states | `focus-ring` token re-measured in dark (3:1 against adjacent colors) | PROPOSED |
| Commercial token | `accent-commercial` stays reserved and recognizable in both themes; disclosure contrast re-checked | PROPOSED |

## 5.2 Semantic dark token pairs (values deferred to decision gate)

Every semantic token has a designed light value and a designed dark value — designed together, not derived.

| Semantic token | Light role | Dark role |
| --- | --- | --- |
| surface-page | Cool grey page | Dark cool material base (NOT pure black) |
| surface-raised | Cards distinct by tone/border | One tone step lighter than page; borders carry separation |
| surface-inset | Code/callouts slightly recessed | Slightly darker/recessed; contrast re-checked |
| surface-inverse | CTA band (sparingly) | Still higher-contrast band; CTA button legibility verified |
| text-primary | ≥ 4.5:1 on all surfaces | Re-measured; never washed-out grey |
| text-muted | ≥ 4.5:1, metadata | Same floor; never lighter-for-small-text |
| border-subtle / border-strong | Hairline separators | More prominent than light (shadows absent); 3:1 for inputs |
| accent-primary | Links, primary CTA | Tuned one step for dark-bg contrast (same hue family) |
| accent-commercial | Affiliate CTA/disclosure only | Same reservation; contrast verified |
| status-* | Feedback/verdicts | Same meanings; never color-only (text labels persist) |
| focus-ring | 2px ring + 2px offset | Re-verified 3:1 against adjacent colors |

Light surface relationship: `Cool Grey Surface` ↓ `Dark Cool Material Surface`. Directional lighting model
preserved — light comes from the same direction in both themes (lighter tops, darker edges), just at lower
luminance.

## 5.3 Toggle behavior (C18)

Placement: small mode toggle in header on desktop; accessible toggle inside mobile navigation on mobile.

Behavior spec:
1. Control is a `<button>` with `aria-pressed` reflecting dark-on state and an accessible name that names the
   action/state ("Switch to dark mode" / "Switch to light mode" — label updates; visual icon + visible text
   label where space allows).
2. Keyboard operable (Enter/Space), visible `focus-ring`, ≥ 44px target.
3. On activation: set `document.documentElement.dataset.theme`, persist to `localStorage`, keep focus on the
   button.
4. Transition: restrained color transition only; under `prefers-reduced-motion: reduce`, instant swap.
5. Never traps focus; never auto-announces beyond the accessible state change.

## 5.4 Contrast re-check plan (both themes)

No WCAG claim is made anywhere until this plan is executed in the rendered site.

1. Enumerate every text/control/background pair: body text, headings, muted/meta, links, primary button,
   secondary button, commercial button, badges, disclosures, inputs, error/success messages, focus rings,
   nav, footer.
2. Measure actual computed pairs in the rendered site in **light and dark** (automated tool + manual spot
   checks — e.g. axe/Lighthouse plus a contrast picker on rendered pixels).
3. Targets: 4.5:1 body and UI text; 3:1 large text; 3:1 UI component boundaries and focus indicators.
   Supplied token values are targets, not compliance results.
4. Re-check after the decision gate sets hex values, and again after any global color change (drift control,
   master prompt §19).
5. Record results in the confidence ledger (docs/10) as CONFIRMED only after measurement.

## 5.5 Images and assets rule

- Logos: ship light and dark variants (theme parity signature S6).
- Editorial screenshots: keep as captured; no inversion, no filters implying different data.
- Illustrations: dark variant or neutral surface; if fictional UI is shown, label it as illustrative
  (honest-illustration principle).
- Decorative background art: separate light/dark variants or CSS-only shapes using tokens.

## 5.6 What dark mode must NOT be

- Simple color inversion or `filter: invert()`.
- Pure black (`#000`) surfaces with neon accents.
- Glassmorphism (translucent blur cards), cyberpunk styling, generic dark SaaS dashboard look.
- Lost affordances: cards must remain distinct from page surface via tone steps + borders.
- Hidden disclosures or de-emphasized commercial labelling (transparency holds in both themes).
