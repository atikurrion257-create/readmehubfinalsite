# 07 — ACF / Data Model Proposal (master prompt §14)

Labels: CONFIRMED / LIKELY / ASSUMED / UNVERIFIED / VERSION-DEPENDENT / PROPOSED (key in [docs/00](00-index.md)).

**Policy:** ACF Free is used only for genuinely structured, reusable, queryable, repeatedly displayed,
editor-owned information. Normal article content stays native WordPress. Field names below are **conceptual
PROPOSED names — verify before use**; nothing here exists in any runtime yet.

**ACF Free capability basis (CONFIRMED — ACF vendor docs, 2026-10-08):** ACF Free supports text, number,
select, true/false, URL, image, and date fields (and related basics like textarea). ACF **PRO** is required for
Repeater, Flexible Content, Options Pages, ACF Blocks, and Gallery field. Therefore pros/cons and comparison
rows use numbered fields, a taxonomy + custom post type, or plain editor content — never a Repeater.

## 7.1 Structured data domains

| Domain | Post type / home | Purpose | Displayed on |
| --- | --- | --- | --- |
| Entity / product | `software` CPT (PROPOSED) or regular posts in a `software` category at launch | Canonical product facts | Template 08 |
| Review | Post (collection `Reviews`) | Verdict, score, evidence | Template 08 / featured blocks |
| Comparison | Post (collection `Comparisons`) | A-vs-B rubric data | Template 07 |
| Workflow / guide | Post (collections `Guides`, `Workflows`) | Method metadata | Template 06 |
| Research | Post (collection `Research`) | Method, dataset, limitations | Template 09 |
| Global-ish metadata | Per-post ACF field groups (Free has no Options Pages) | Disclosure text defaults | Site components |

Launch caution (master prompt §2.3): do not create empty category hubs. CPT/taxonomy registration is only
done when real content exists for it.

## 7.2 Proposed conceptual fields (master prompt §14 list + rendering contract)

Rendering rule for every field: **empty value → defined empty state ("Not yet recorded" or omitted section),
never a fabricated default.** Stale `last_verified` past the verification interval → "Verification due".

| Field (conceptual) | Type (ACF Free) | Return format | Preview context | Fallback / empty state | Editor owner | Sanitization/escape |
| --- | --- | --- | --- | --- | --- | --- |
| `entity_name` | text | plain | entity header | Post title | Editor | escape on output |
| `entity_type` | select | plain | badge | Omit badge | Editor | whitelist |
| `short_summary` | textarea | plain | card/hero line | Post excerpt | Editor | escape |
| `primary_use_case` | text | plain | at-a-glance | "Not yet recorded" | Editor | escape |
| `best_for` | textarea | plain | verdict box | "Not yet recorded" | Editor | escape |
| `not_ideal_for` | textarea | plain | verdict box | "Not yet recorded" | Editor | escape |
| `key_features` | textarea (editor pattern or numbered `key_feature_1..6`) | plain | features section | Omit section | Editor | escape |
| `limitations` | textarea | plain | limitations section | "Not yet recorded" | Editor | escape |
| `pricing_status` | select (e.g. free / freemium / paid / unknown) | plain | pricing block | "Unknown" + prompt to verify | Editor | whitelist |
| `pricing_summary` | textarea | plain | pricing block | "Pricing not yet recorded — see source" | Editor | escape |
| `price_checked_date` | date | Y-m d (site date format) | pricing block + stale check | "Not yet recorded"; stale → badge | Editor | escape |
| `last_verified` | date | site date format | evidence block, cards | "Not yet recorded"; stale → badge | Editor | escape |
| `last_updated` | date | site date format | article header | WP modified date | Editor | escape |
| `tested_environment` | textarea | plain | evidence block | "Not yet recorded" | Editor | escape |
| `evidence_level` | select (evidence ladder values, docs/02 template 12) | plain | evidence badge | "Unspecified" | Editor | whitelist |
| `methodology_note` | textarea | plain | evidence block | Link to Methodology only | Editor | escape |
| `affiliate_url` | url | url | Affiliate CTA button | No CTA rendered | Editor | `esc_url`, `rel="sponsored nofollow"` (PROPOSED — legal/SEO review) |
| `affiliate_disclosure` | textarea | plain | C12 near CTA | Default disclosure line (C12) | Editor | escape |
| `disclosure_type` | select | plain | disclosure variant | Default variant | Editor | whitelist |
| `author` | text or user reference pattern | plain | C10 author block | WP post author | Editor | escape |
| `source_list` | textarea (numbered `source_1..8` pattern) | plain | sources section | "Sources not yet listed" | Editor | escape |
| `related_entities` | text / relationship-lite (numbered slugs or manual links) | plain | related section | Omit | Editor | escape + validate slugs |
| `related_workflows` | same as above | plain | related section | Omit | Editor | escape |
| `review_score` | number | numeric | verdict box | **Score section omitted entirely** unless a real scoring record exists | Editor | cast/escape |
| `verdict_summary` | textarea | plain | verdict box | Omit box | Editor | escape |
| `pros` | textarea (plain editor pattern in two-column Icon List) | plain | C16 | Omit module | Editor | escape |
| `cons` | textarea (same pattern) | plain | C16 | Omit module | Editor | escape |
| `tool_category` | select/taxonomy | plain | card label | Omit label | Editor | whitelist |
| `comparison_criteria` | numbered fields `criterion_1_label/value_a/value_b/evidence`… or plain editor pattern (C15) | plain | template 07 | "No verified comparison available yet." | Editor | escape |

**Pros/cons and comparison rows (Free-tier constraint):** ACF Free has no Repeater (CONFIRMED — vendor docs).
Chosen strategy in order of preference: (1) plain editor content in a fixed visual pattern (Icon List widgets,
C15 row pattern) — most editor-friendly; (2) numbered ACF fields capped at 6–8 rows where values must be
queryable later; (3) taxonomy + custom post type only when a real query requirement appears. Do not force
article body copy into ACF.

## 7.3 Surface contract (Elementor Free — no Pro dynamic tags)

Elementor Free has no ACF dynamic-tag binding (LIKELY — verify). Chosen surface: native **Shortcode widget**
with ACF shortcodes (`[acf field="field_name"]` pattern — syntax to verify against installed ACF version,
UNVERIFIED) or tiny documented template helpers. Every dynamic field must define:

```
Source              → ACF field on the post / CPT
Return format       → as table above
Preview context     → where it renders (template family + component)
Fallback            → static default (above)
Empty state         → defined text or omitted section (above)
Editor owner        → role responsible (editor / author / site owner)
Sanitization/escape → escape()/esc_url()/whitelist per type (above)
```

All dynamic mappings require runtime verification before launch (docs/09 QA). If shortcode rendering proves
unreliable at the installed version, fallback is static editor-owned content per template (the free-stack
fallback; see exception E4).

## 7.4 Evidence discipline in the data model

- Evidence slots (Tested, Verified, Last checked, Last updated, Source, Methodology, Tested environment,
  Version, Limitations, Evidence level) are **never auto-populated**. Missing values render empty states.
- `evidence_level` must use the methodology evidence ladder (commodity facts → source synthesis → expert
  analysis → verified evidence → original testing/data → proprietary tool/dataset) — labels only; values
  only when a record exists.
- Auto-labels "Tested / Verified / Hands-on / Used / Reviewed" are **prohibited** unless the underlying
  evidence record exists. The data model has no field that invents them; the `evidence_level` select only
  stores what an editor attests with a record.
- Stale rule: `last_verified` / `price_checked_date` past the agreed verification interval (interval itself is
  a decision-gate item — ASSUMED placeholder: 90 days, PROPOSED, to be confirmed) renders "Verification due".
