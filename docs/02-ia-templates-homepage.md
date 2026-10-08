# 02 — Information Architecture, Page Templates, and Homepage Map

Labels: CONFIRMED / LIKELY / ASSUMED / UNVERIFIED / VERSION-DEPENDENT / PROPOSED (key in [docs/00](00-index.md)).
Launch-cluster placeholder used throughout: **[LAUNCH CLUSTER: audience / problem — TO BE SELECTED]**.

## 2.1 Final IA (launch)

```
Home  (decision gateway — not "latest posts")
│
├── [LAUNCH CLUSTER] Audience / Problem Hub        (placeholder until cluster chosen)
├── Use-Case Hub                                   (one hub per chosen use case)
├── Guides / Workflows
├── Comparisons
├── Software / Product Entities
├── Research / Tools
├── Newsletter
└── Trust / Editorial Pages
    ├── About
    ├── Contact
    ├── Editorial Standards
    ├── Methodology
    ├── Affiliate Disclosure
    ├── Privacy
    ├── Terms
    └── Corrections / Report an Error
```

Navigation (launch, per master prompt §2.15 — no mega-menu, no empty future categories):

```
Explore · Guides · Comparisons · Research · About · Search · Newsletter
```

Design notes on the IA:

- **One audience/problem hub at launch.** Not 13 equal category hubs. Future categories (Software, Technology,
  AI, Digital Tools, Business Services, Education, Consumer Technology, …) are future expansion and are **not**
  in public navigation until real content exists (PROPOSED, adopting master prompt §2.3).
- **Trust pages are first-class surfaces**, linked from footer and from every money page's methodology area —
  they must not look like forgotten footer pages (master prompt §8.8).
- **Newsletter is an owned-audience component** in primary navigation, positioned on benefit, not frequency.

## 2.2 URL / IA rules

- One primary URL owns one primary intent. No duplicate-intent URLs, doorway pages, thin synonym pages,
  mass AI-generated variants, or empty coupon pages.
- Descriptive titles, breadcrumbs, crawlable links, deliberate internal linking, server-rendered critical
  content, clear update dates. Canonical URL discipline: one canonical owner per intent.
- Slug patterns (finalize after launch niche is chosen — PROPOSED):

| Intent | Pattern | Example shape |
| --- | --- | --- |
| Audience/problem hub | `/use-case/[audience]/` | `/use-case/[launch-audience]/` |
| Workflow / how-to | `/guides/[task]/` | `/guides/[task-slug]/` |
| Comparison | `/compare/[a]-vs-[b]/` | `/compare/[tool-a]-vs-[tool-b]/` |
| Product entity | `/software/[product]/` | `/software/[product-slug]/` |
| Research | `/research/[topic]/` | `/research/[topic-slug]/` |
| Newsletter | `/newsletter/` (+ `/newsletter/[issue]/` archive) | fixed |
| Trust | `/about/`, `/methodology/`, `/editorial-standards/`, `/affiliate-disclosure/`, `/privacy/`, `/terms/`, `/corrections/`, `/contact/` | fixed |

- Launch inventory hypothesis: **~8–12 genuinely useful URLs across one cluster.** This is a hypothesis, not a
  quota (PROPOSED, master prompt §7).

## 2.3 Page-template families (18)

All 18 are specified. Optional templates (Deals/Offers, Partner, Media Kit, Submit Product) are explicitly
**not** built until operationally ready.

| # | Template | Purpose | Core anatomy (top → bottom) | Primary CTA policy |
| --- | --- | --- | --- | --- |
| 01 | **Header** | Wayfinding + mode toggle + search | Logo · nav (Explore/Guides/Comparisons/Research/About) · Search · mode toggle · Newsletter CTA; mobile: logo, search, toggle, hamburger | One CTA (Newsletter). No affiliate CTAs in navigation |
| 02 | **Footer** | Trust + nav + legal + secondary signup | Primary nav columns · trust links (Methodology, Editorial Standards, Affiliate Disclosure, Corrections) · legal (Privacy, Terms) · contact · small secondary newsletter signup · disclosure line | Secondary signup only |
| 03 | **Homepage** | Decision gateway | 12 sections — see §2.4 | One primary CTA in hero; one commercial CTA maximum per view |
| 04 | **Audience / Problem Hub** | Route the visitor to their decision | Breadcrumbs → eyebrow → H1 → intro/promise → decision routes (3–6 cards) → featured guide → comparison preview → research/tool preview → latest maintained resources → newsletter CTA | One primary; affiliate CTA only after useful content |
| 05 | **Use-Case Hub** | Same as 04, narrower | Same anatomy as 04; grouped by reader intent; filters only if real inventory justifies them (define empty + no-results states); show update status; link to methodology | Same |
| 06 | **Workflow / How-To Article** | Teach a setup/config/migration/troubleshooting workflow | Breadcrumbs → H1 + subtitle → evidence/updated status + author + last updated/verified → quick answer/outcome → required context → step-by-step (Step 01, 02, …) → screenshots/evidence → common failure cases → alternative methods → related decision → recommended comparison → source list → newsletter CTA → correction/feedback CTA | **Evidence before CTA.** Affiliate CTA never precedes the useful answer |
| 07 | **Comparison** | Support an A-vs-B decision | Breadcrumbs → H1: A vs B → decision summary → quick verdict (Best for A / Best for B) → comparison criteria (same visible rubric) → detailed comparison → real-world workflow evidence → who should choose A / B / avoid both → alternatives → methodology → last verified → affiliate/commercial disclosure → final CTA | Final CTA after methodology + disclosure |
| 08 | **Product / Entity** | Canonical entity page | Breadcrumbs → product name + category + positioning → verification status + last verified → at-a-glance facts → best for / not ideal for → key features → pricing (source + review date) → limitations → hands-on evidence (only if records exist) → workflow experience → alternatives → compare with → pros/cons → sources → methodology → affiliate disclosure → related guides → newsletter | One canonical entity per intent; no thin variants |
| 09 | **Research / Tool** | Publish original evidence | Research label → H1 → what was measured → why it matters → method → dataset/sample → result → interactive tool or visualization → interpretation → limitations → changelog → sources → related comparisons → newsletter | Tool only when repeated user need exists |
| 10 | **Newsletter** | Owned-audience capture | Who it's for / what you receive / why useful / how often ("no fixed schedule yet") / data collected / unsubscribe → large editorial headline → tactile email form → benefit cards → sample issue preview **only if genuine** → privacy note → FAQ → final CTA | No subscriber counts unless real and dynamic |
| 11 | **About** | Editorial purpose + trust | Purpose, audience, research approach, testing principles, update practices, disclosure philosophy, authors, correction policy. **No fictional founder credentials** | n/a |
| 12 | **Methodology** | First-class trust surface | Evidence ladder: commodity facts → source synthesis → expert analysis → verified evidence → original testing/data → proprietary tool/dataset. Money pages target strong evidence levels and never claim tested/used/verified/purchased/contacted unless records exist | n/a |
| 13 | **Editorial Standards** | Evaluation criteria | Evaluation criteria, correction policy, disclosure policy | n/a |
| 14 | **Contact** | Reach the team | Working contact route | n/a |
| 15 | **Privacy** | Legal | Jurisdiction-final wording (legal review required) | n/a |
| 16 | **Terms** | Legal | Jurisdiction-final wording (legal review required) | n/a |
| 17 | **Affiliate Disclosure** | Commercial transparency | Legal wording finalized per target jurisdictions (legal review required); links to policy from every commercial module | n/a |
| 18 | **Corrections / Report an Error** | Working correction route | A working route, not a dead link; ties into the correction policy | n/a |

## 2.4 Homepage — 12-section map (master prompt §8.1)

The homepage is ReadMeHub's decision gateway. Section order is fixed:

| # | Section | Job (one idea per section) | Key components | CTA policy | Signature served |
| --- | --- | --- | --- | --- | --- |
| 01 | **Sticky header** | Wayfinding, search, mode toggle | Header (logo, nav, search, toggle, newsletter CTA; mobile hamburger) | Newsletter CTA only | — |
| 02 | **Hero** | Communicate the decision-support promise | Eyebrow, H1, support line, primary + secondary CTA; right: nested "Decision → Compare → Verify → Choose" visual (labelled if illustrative) | One primary + one secondary | One primary action; honest illustration |
| 03 | **Authority / evidence strip** | Show real attributes only | Stat row / credential strip — **real attributes only, no fake social proof** | None | Evidence on the surface |
| 04 | **"What are you trying to decide?"** | Route the visitor to their problem | 3–4 decision cards (replaces "Latest Posts") | Card links | Typed collections; decision-first |
| 05 | **Featured workflows** | Show the depth of practical guidance | 1 large featured block + 2–4 smaller cards (task, outcome, context, evidence state, CTA) | Per-card action | Typed collections; evidence state visible |
| 06 | **Compare by need** | Route by job / constraint / workflow / audience | Best-for cards ("Best for [job]", "[constraint]", "[workflow]", "[audience]") | Card links | Decision support |
| 07 | **Featured comparison** | Model what a comparison looks like | A vs B with Best for / Evidence / Trade-off each; stacks on mobile | One link to full comparison | Evidence first; no giant tables |
| 08 | **Original research / data** | Prove original evidence exists | Featured research card + methodology indicator | Link to research | Evidence on the surface |
| 09 | **Recently verified / updated** | Distinguish current from stale | Card row with visible "Last verified" status; "Verification due" state defined | Card links | Commercial transparency; stale ≠ current |
| 10 | **Newsletter** | Capture owned audience | Deep inset input, accent CTA, clear benefit, privacy microcopy | One CTA | Owned audience, not decoration |
| 11 | **Methodology / how we evaluate** | Make trust inspectable | Six-step tactile process | Link to Methodology | Credibility displayed, not claimed |
| 12 | **Footer** | Trust + legal + secondary signup | Footer (nav, trust, legal, contact, small signup, disclosure line) | Secondary signup | Commercial transparency |

**Homepage copy guardrails** (master prompt §8.1): hero copy must communicate *better decisions through useful
evidence*. Avoid: "Your ultimate source for everything", "Discover the best tools", "The internet's best blog",
"Everything you need in one place". All hero copy frames are placeholders until the launch cluster is chosen
(ASSUMED placeholder policy).

**Affiliate placement on homepage:** at most one commercial module per view, positioned after useful content,
carrying the reserved commercial token and a visible disclosure. Never in the hero, never in navigation,
never repeated per card.

## 2.5 IA rules that protect the launch

- No empty category archives. No mega-menu. No future categories in navigation.
- Filters on hubs only if real inventory justifies them; always define empty and no-results states.
- Show update status everywhere money-adjacent content appears; link to methodology.
- Related content: same collection first, then adjacent collection (master prompt §5.16).
- Breadcrumbs on all sub-pages; one meaningful H1 per page; logical heading order.
