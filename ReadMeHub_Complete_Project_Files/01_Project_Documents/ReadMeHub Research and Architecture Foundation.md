# ReadMeHub Research and Architecture Foundation

**Prepared by:** Manus AI  
**Date:** 6 September 2026  
**Status:** Foundation phase complete; live WordPress implementation pending environment access and launch-category data.

## 1. Executive summary

ReadMeHub should be built as an **evidence-led decision platform**, not as a generic affiliate blog. Its central job is to help a reader understand what options exist, which option fits a particular situation, what the relevant trade-offs and costs are, and what action is reasonable next. The recommended product model combines editorial publication, research platform, comparison engine, buying guide, and verified-offer directory.

The architecture should be broad enough to support software and physical products, but the first publishing wedge should be narrow. The supplied brief does not identify a launch category, audience, product set, affiliate network, keyword export, or live WordPress installation. Therefore, this document defines a category-neutral system and uses query patterns rather than invented search volumes, rankings, prices, ratings, discounts, or affiliate relationships.

Public competitor research shows that leading platforms connect categories, product pages, reviews, alternatives, comparisons, and decision assistance. G2 presents a workflow built around alternatives and side-by-side comparisons using verified-user review signals.[1] Capterra combines category discovery, product profiles, reviews, ratings, methodology, and commercial disclosures.[2] AlternativeTo demonstrates the value of structured alternative discovery using categories, platform availability, pricing models, user opinions, and related software relationships.[3]

ReadMeHub’s clearest defensible advantage is **transparent decision rationale**: every recommendation should explain fit, anti-fit, evidence, price context, limitations, alternatives, regional conditions, and the date on which volatile facts were verified.

## 2. Scope, assumptions, and evidence boundaries

The requested production stack is WordPress with Hello Elementor, Elementor, ACF, lightweight custom CSS/JavaScript, and only necessary SEO, performance, analytics, newsletter, and affiliate infrastructure. No WordPress installation, staging environment, credentials, backup, keyword export, analytics, or affiliate data was available during this foundation phase. No live-site changes have been made.

| Area | Current state | Foundation decision |
|---|---|---|
| Market | Global ambition; priority markets are the United States, Canada, United Kingdom, and Australia | Design region-aware records without creating duplicate country pages |
| Vertical | Not supplied | Build category-neutral architecture; select one deep launch wedge before publishing at scale |
| Entity mix | Software and products are both mentioned | Support both, but use one dominant entity model for the first launch |
| Search data | No keyword or SERP export supplied | Use intent families and query patterns; do not claim volume or difficulty |
| WordPress | No installation access | Specify implementation; defer audit and configuration |
| Commercial data | No partner or offer data supplied | Do not publish affiliate claims, prices, coupons, or discounts until verified |
| Trust model | Brief requires transparency and no fabrication | Make evidence, methodology, authorship, disclosures, and update dates first-class data |

A **software-first** launch would require plan, seat, integration, usage-limit, security, trial, and billing fields. A **physical-product-first** launch would require variant, specification, availability, shipping, warranty, return, and retailer-offer fields. Mixing both deeply in the first wedge would increase operational complexity and weaken editorial coherence.

## 3. Strategic positioning and differentiation

### Positioning statement

> ReadMeHub helps people make better product and software decisions by combining independent editorial analysis, structured comparisons, practical use-case guidance, transparent pricing context, and verified offers.

### Decision questions the site must answer

| User question | ReadMeHub response | Primary page families |
|---|---|---|
| What kind of solution is this? | Category definition, use cases, and selection criteria | Categories, guides, use cases |
| Which options exist? | Structured products, brands, and category discovery | Categories, products, brands |
| Which option fits my situation? | Explicit fit, anti-fit, and decision criteria | Reviews, comparisons, use cases |
| What will it cost? | Plan or product pricing, total-cost notes, currency and regional context | Pricing, reviews, offers |
| What should I do next? | Clear, disclosed next action plus alternatives | Reviews, comparisons, deals, coupons |

### Competitor-derived opportunity map

| Observed reference model | Public strength | ReadMeHub response |
|---|---|---|
| G2 | Connected product, alternative, category, review, and comparison workflow; comparison pages describe 2–4 products and verified-user review signals.[1] | Add editorial decision rules, anti-fit guidance, evidence records, use-case segmentation, pricing interpretation, and a plain-language verdict |
| Capterra | Category discovery, profiles, ratings, reviews, research methodology, review verification, and visible sponsored/referral disclosures.[2] | Place commercial context and recommendation logic close to the recommendation, not only in a footer; separate user feedback from editorial judgment |
| AlternativeTo | Large alternatives graph with categories, platforms, pricing models, open-source labels, and user-opinion signals.[3] | Add stronger reasons for switching, migration risks, total-cost context, audience fit, and editorial verification |

These are observations of public page structures, not claims about traffic, rankings, conversion rates, or business performance.

## 4. Search-intent architecture

ReadMeHub should map one canonical page to each underlying decision. Minor wording variations should consolidate into one useful page instead of producing doorway pages or near-identical country pages.

| Intent family | Example query pattern | Funnel stage | Canonical page | Supporting links | Commercial route |
|---|---|---|---|---|---|
| Discovery | best [category]; [category] tools | Consideration | Category hub or buyer guide | Use cases, reviews, comparisons, pricing | Contextual provider/product links |
| Product evaluation | [product] review | Decision | Product review | Pricing, alternatives, methodology | Disclosed outbound action |
| Comparison | [product A] vs [product B] | Decision | Comparison | Both reviews, category, pricing | Choice-specific links |
| Alternatives | [product] alternatives | Decision | Alternatives page | Product review, migration guide, category | Substitute options |
| Pricing | [product] pricing; [category] pricing comparison | Decision | Pricing page or module | Review, plans, total-cost guide | Provider/product link |
| Use case | best [category] for [audience/use case] | Consideration | Use-case guide | Category, reviews, comparisons | Segmented recommendations |
| Deal | [product] deal; [brand] offer | Transaction | Deal page | Product, pricing, terms | Verified offer link |
| Coupon | [brand] coupon; [product] promo code | Transaction | Coupon page | Offer terms, product review | Verified coupon link |
| Education | how to choose [category]; what is [category] | Awareness | Guide | Glossary, category, comparisons | Soft conversion path |
| Entity | [brand] products; [brand] review | Discovery/decision | Brand hub | Products, reviews, category | Product or provider links |

Each brief should record primary intent, secondary intent, audience, country/region, funnel stage, commercial value, SERP pattern, recommended content type, canonical target, parent topic, supporting topics, internal links, affiliate opportunity, and offer opportunity.

## 5. GEO and answer-engine readiness

GEO should be integrated into ordinary editorial quality rather than treated as a separate collection of low-value pages. Important pages should make the answer easy to extract while preserving deeper analysis.

Every major decision page should begin with a concise summary that states the verdict, the best-fit audience, the principal limitation, the current pricing context, and the date of verification. It should then provide a comparison table, pros and cons, who should use the option, who should avoid it, alternatives, methodology, sources, and update information.

| GEO requirement | Implementation rule |
|---|---|
| Direct answer | Answer the page’s primary question in the opening section |
| Entity clarity | Use consistent names for product, brand, category, plan, region, and use case |
| Evidence | Attach claims to source URLs, source type, checked date, region, and reviewer |
| Extractability | Use descriptive headings, short paragraphs, tables, lists, and explicit definitions |
| Original value | Add decision frameworks, trade-offs, anti-fit guidance, synthesis, and interpretation |
| Regional relevance | Add currency, availability, taxes, compliance, shipping, and plan differences only when materially different |
| Freshness | Display a meaningful reviewed date tied to claim revalidation |
| Trust | Identify author, reviewer, methodology, corrections route, and commercial relationship |

The site should not generate large numbers of pages that merely change a country name or product name. Programmatic publication should be blocked when a page lacks verified data, a clear intent, a valid comparison set, or unique editorial guidance.

## 6. Information architecture and URL model

The primary navigation should be task-led: **Reviews, Compare, Alternatives, Pricing, Deals, and Guides**. Category and product browsing should be available through hubs and contextual navigation, but users should not be required to understand the taxonomy before beginning a decision.

| Section | Suggested URL | Purpose |
|---|---|---|
| Reviews | `/reviews/` | Editorial product and software assessments |
| Comparisons | `/comparisons/` | Direct comparison of two to four options |
| Alternatives | `/alternatives/` | Replacement and switching decisions |
| Guides | `/guides/` | Selection, education, setup, and buying guidance |
| Deals | `/deals/` | Verified limited-time or evergreen offers |
| Coupons | `/coupons/` | Verified codes and coupon terms |
| Products | `/products/` | Stable product/entity records |
| Brands | `/brands/` | Vendor and brand hubs |
| Use cases | `/use-cases/` | Audience, role, workflow, or problem-led recommendations |
| Categories | `/categories/` | Topic and solution hubs |
| Pricing | `/pricing/` | Pricing references and total-cost analysis |
| Authors | `/authors/` | Editorial identity and expertise |
| Methodology | `/how-we-evaluate/` | Scoring, evidence, testing, and update method |
| Editorial policy | `/editorial-policy/` | Standards, corrections, and independence |
| Affiliate disclosure | `/affiliate-disclosure/` | Commercial relationships and compensation explanation |
| Contact | `/contact/` | Corrections, partnerships, and reader contact |

Canonical entity pages should remain stable while editorial articles and offers change. Archives should not be indexable until they contain unique, useful content. Expired offers should be archived or clearly marked according to the final search policy.

## 7. Taxonomy and entity graph

The site should use WordPress native post types and taxonomies for indexable editorial content, while ACF supplies structured fields and relationships. The article body should remain ordinary WordPress content rather than being stored entirely in custom fields.

### Recommended content types

| Content type | Role |
|---|---|
| Review | Editorial assessment of a product or software entity |
| Comparison | Structured comparison of two to four products |
| Alternative Set | Replacement options anchored to a product or category |
| Guide | Buyer, educational, setup, or decision content |
| Deal | Verified offer with terms and validity state |
| Coupon | Verified code or promotion with terms and expiration state |
| Pricing Reference | Pricing and total-cost interpretation |
| News/Update | Freshness-sensitive changes only when editorially justified |

### Core taxonomies

Category, use case, audience/role, brand, region, product type, buying criterion, pricing model, platform, and topic cluster. Products and plans should be relational records rather than uncontrolled tag values.

### Relationship model

A category contains products, brands, use cases, guides, reviews, comparisons, alternatives, pricing references, deals, and coupons. A product belongs to one or more categories and a brand, supports plans or variants, and can appear in reviews, comparisons, alternatives, offers, and use cases. A comparison connects two to four products and records criteria and decision logic. An evidence record supports one or more claims. An offer applies to a product or brand and is constrained by region, currency, dates, terms, and source.

## 8. ACF data architecture

ACF should model structured decision data, not replace WordPress editorial writing. Every volatile or commercial claim should be traceable to an evidence record.

| Field group | Required fields | Important relationships |
|---|---|---|
| Product | Name, slug, short description, product type, brand, categories, official URL, logo/image, availability, platforms, pricing model, editorial status | Brand, categories, use cases, plans, reviews, offers, evidence |
| Brand | Name, description, official URL, headquarters/region if verified, support/contact URLs, logo, disclosure notes | Products, categories, evidence, offers |
| Review | Verdict, fit summary, anti-fit summary, editorial score only if rubric exists, pros, cons, criteria, author, reviewer, reviewed date, update date, methodology, sources, disclosure | Product, category, use cases, comparisons, alternatives, evidence |
| Comparison | Product A/B/C/D, primary question, criteria, criterion weights if used, verdict, best for each audience, winner by criterion, limitations, date checked, sources, disclosure | Products, category, use cases, pricing, evidence |
| Alternative Set | Anchor product/category, switching reason, recommended alternatives, migration notes, trade-offs, best-for labels, data date, sources | Product, category, alternatives, comparisons, reviews |
| Guide | Intent, audience, decision stage, summary answer, criteria, steps, FAQ, author, reviewer, update date, sources | Category, use cases, products, reviews |
| Offer | Product/brand, offer type, code if verified, landing URL, region, currency, terms, start date, expiry date, checked date, status, source, partner ID if applicable | Product, brand, region, evidence |
| Pricing Plan/Variant | Name, billing cadence, price, currency, included limits, seats/quantity, trial, renewal notes, region, checked date, source | Product, evidence, offers |
| Evidence | Claim supported, source URL, source type, source title, checked date, region, currency, confidence, reviewer, excerpt/notes, expiration/revalidation date | Claims, products, offers, pages |
| Author/Reviewer | Name, role, biography, expertise, profile image, credentials/experience, social or professional links, editorial role | Reviews, guides, comparisons |
| Category | Definition, audience, selection criteria, featured products, use cases, related guides, comparisons, alternatives, pricing notes, region notes | All content types |

### Evidence status values

Use controlled values such as **Verified, Needs recheck, Expired, Disputed, Unavailable, and Editorial judgment**. A page should not display “verified” unless the corresponding source and checked date exist.

### Editorial score rule

Do not create a proprietary score until ReadMeHub has a published rubric, criterion definitions, weighting method, reviewer responsibility, and evidence basis. User ratings, editorial scores, and market signals must remain separate and clearly labeled.

## 9. Elementor design and template system

Hello Elementor should remain the active theme. Elementor should provide visual construction, reusable sections, global styles, and templates. ACF should supply dynamic structured data. Custom CSS/JavaScript should be limited to interactions and layout needs that Elementor cannot handle cleanly.

| Template | Required modules |
|---|---|
| Global header | Logo, task-led navigation, search, disclosure/accessibility links |
| Global footer | Primary navigation, trust pages, newsletter, contact, privacy, terms |
| Category archive | Definition, decision criteria, featured options, use cases, guides, comparisons, pricing, latest updates |
| Product single | Verdict, fit/anti-fit, key facts, pricing, evidence, pros/cons, alternatives, reviews, offers, methodology |
| Review single | Verdict card, score/rubric if valid, criteria, evidence, pros/cons, audience fit, pricing, alternatives, disclosure |
| Comparison single | At-a-glance table, criteria, verdict, best-for cards, trade-offs, pricing, evidence, related reviews |
| Alternatives single | Anchor context, reasons to switch, alternative cards, migration risks, comparison links |
| Guide single | Direct answer, contents, criteria, analysis, product paths, FAQs, sources, author/reviewer |
| Deal/coupon single | Offer status, terms, region, validity, source, redemption path, related review, disclosure |
| Trust module | Author, reviewer, methodology, last verified date, corrections/contact link |
| Newsletter module | Value proposition, consent language, privacy link, low-friction form |

The visual system should use restrained editorial typography, strong hierarchy, generous whitespace, accessible contrast, compact comparison tables, consistent source/date treatments, and mobile-first cards. Affiliate actions should be visually clear but should not overpower the editorial verdict.

## 10. Internal linking architecture

Internal linking should follow the entity graph and the reader’s decision sequence rather than exhaustive sitewide blocks.

| Source page | Link destinations |
|---|---|
| Category hub | Reviews, comparisons, use cases, pricing, guides, alternatives |
| Review | Product, brand, category, pricing, comparisons, alternatives, offers, methodology |
| Comparison | Each product review, category, use cases, pricing, alternatives |
| Alternatives | Anchor product, alternative reviews, comparisons, migration guide, category |
| Guide | Category, criteria, use cases, reviews, comparisons, methodology |
| Offer | Product, review, pricing, terms, disclosure, related alternatives |
| Brand | Products, category hubs, reviews, offers, evidence-aware updates |

Use descriptive anchor text, one canonical page per intent, breadcrumb navigation, related-content modules with a clear reason for inclusion, and contextual links inside the body. Avoid orphaned pages, generic “click here” anchors, and large repeated link inventories.

## 11. SEO, schema, and technical foundation

The implementation should include clean permalinks, one canonical URL per intent, XML sitemaps for indexable content, controlled robots directives, Open Graph metadata, descriptive titles and descriptions, image dimensions and alt text, responsive layouts, and a measured performance budget. The final schema implementation must be validated against current search guidance before production.

| Page/entity | Schema direction |
|---|---|
| Publisher | Organization and Person where identity is available |
| Editorial article | Article or BlogPosting when appropriate |
| Review | Review only when a genuine review basis, item, author, and visible review content exist |
| Product/offer | Product and Offer only when visible facts, price, currency, availability, and source are current |
| Navigation | BreadcrumbList |
| FAQ | FAQPage only for visible, genuine FAQs and where current eligibility is satisfied |
| Comparison | Article plus visible comparison content; do not invent unsupported aggregate review schema |

Schema must never contain data that is absent from visible page content. Ratings, prices, availability, discounts, and review values must be synchronized with their evidence records.

## 12. Affiliate, deals, and newsletter UX

Commercial relationships should be disclosed in plain language near the relevant recommendation and linked to a complete affiliate-disclosure page. The public Capterra model demonstrates why methodology, review verification, sponsored-profile context, and referral-fee disclosure should be treated as user-facing trust features.[2]

Deals and coupons require an operational owner, source URL, region, currency, terms, start/check/expiry state, and revalidation cadence. If an offer cannot be verified, it should not be presented as active. A coupon page without a current valid offer should be clearly marked, archived, or excluded from indexing under the final SEO policy.

The newsletter should promise a specific value, request only necessary consent, link to privacy terms, and avoid using urgency or manipulative copy. A suitable initial promise is a periodic digest of researched comparisons, price changes, and verified decision guides—not a generic promotional mailing list.

## 13. Launch sequence

The first launch should be deep rather than broad. Choose the initial vertical using evidence availability, commercial coverage, differentiation potential, audience clarity, and operational maintainability rather than apparent search demand alone.

| Sequence | Deliverable | Publication gate |
|---:|---|---|
| 1 | Methodology, editorial policy, affiliate disclosure, About, contact/corrections | Trust and governance pages are complete |
| 2 | One category hub and one buyer guide | Clear category definition, criteria, and supporting entities |
| 3 | Three to five verified product or software reviews | Evidence records, authorship, fit/anti-fit, pricing context |
| 4 | Three to five comparisons | At least two verified options and explicit criteria |
| 5 | One alternatives page for a major incumbent or category anchor | Switching rationale and trade-offs are documented |
| 6 | Two to four use-case pages | Each serves a distinct audience/problem and links to products |
| 7 | Pricing or total-cost reference | Current source, currency, region, and checked date |
| 8 | Deals and coupons, only if operationally maintainable | Offer terms, validity, disclosure, and revalidation owner |

## 14. Quality-assurance gates

A page should not be indexed or monetized merely because its template renders. The following gates should be automated where possible and manually reviewed where judgment is required.

| QA area | Pass condition |
|---|---|
| Editorial integrity | No fabricated reviews, testing, prices, ratings, statistics, discounts, coupons, or relationships |
| Search intent | One clear primary intent and canonical URL |
| Evidence | Commercial and volatile claims map to dated sources |
| Comparison | At least two verified products and understandable criteria |
| Review | Published rubric and evidence basis exist before a score appears |
| Offers | Region, terms, source, status, and revalidation date are present |
| GEO/AEO | Direct answer, entities, source context, and deeper analysis are all present |
| Accessibility | Keyboard navigation, semantic headings, labels, focus states, contrast, alt text, and responsive behavior pass review |
| Performance | Images optimized, scripts limited, layout stable, and mobile experience tested |
| Schema | Markup reflects visible, accurate content and validates without material errors |
| Affiliate UX | CTA does not obscure verdict, alternatives, limitations, or disclosure |
| Programmatic content | Unique guidance exists beyond substituting a product, country, or keyword |

## 15. Unresolved inputs required for the next phase

The foundation is ready for specialization, but the following inputs are required before category-specific research or implementation:

1. The initial launch vertical: software, consumer technology, home products, finance tools, hosting, or another defined category.
2. The initial audience: consumer, small business, enterprise, creator, developer, professional role, or another segment.
3. The first market and currency priority.
4. The intended affiliate networks, direct partnerships, or non-affiliate monetization model.
5. Any existing keyword exports, analytics, content, product lists, or competitor list.
6. WordPress staging/admin access, backup, or export for the installation audit.
7. The intended editorial team, reviewer credentials, testing capability, and update ownership.

## 16. Foundation conclusion

ReadMeHub should be implemented as a maintained **evidence graph wrapped in an editorial decision experience**. The broad architecture is now defined, but the project should not move directly into mass content production. The correct next step is to choose a narrow launch wedge, obtain the relevant product and affiliate data, validate country-specific search demand, and then implement the WordPress/Hello Elementor/Elementor/ACF system on staging.

This document does not claim that WordPress, Hello Elementor, Elementor, ACF, SEO infrastructure, affiliate systems, or QA have been installed or configured. Those remain implementation tasks pending access to the actual environment.

## References

[1]: https://www.g2.com/compare "G2 Compare: product alternatives and side-by-side comparisons"

[2]: https://www.capterra.com/ "Capterra: software discovery, reviews, methodology, and commercial disclosures"

[3]: https://alternativeto.net/ "AlternativeTo: software alternatives and structured discovery"

[4]: /home/ubuntu/skills/content-strategy/SKILL.md "Content strategy guidance consulted for intent and content planning"

[5]: /home/ubuntu/skills/seo-aeo-best-practices/SKILL.md "SEO and AEO guidance consulted for metadata, structured content, and answer readiness"

**Source note:** G2, Capterra, and AlternativeTo observations are based on publicly accessible pages reviewed on 6 September 2026. Counts, ratings, labels, prices, offers, and other volatile page values should be revalidated before publication.

**Author:** Manus AI

**Document status:** Research and architecture foundation only; live-site audit and implementation pending.
- 

## Appendix A — Category-neutral content brief fields

Every future brief should record the target query family, primary question, audience, region, funnel stage, canonical page, supporting pages, entities, criteria, claims, evidence URLs, data date, author, reviewer, disclosure requirement, internal links, CTA context, and update owner.

## Appendix B — Recommended initial dashboard metrics

Once analytics and search data are available, measure indexed pages by intent, organic impressions and clicks by page family, assisted conversions by content type, outbound click-through rate by disclosed CTA, offer verification age, correction rate, content freshness, and pages failing evidence or schema QA. Do not optimize for affiliate clicks alone; pair commercial metrics with engagement, return visits, reader corrections, and decision-content usefulness.

## Appendix C — Implementation boundary

The supplied target technology remains WordPress, Hello Elementor, Elementor, ACF, and lightweight custom CSS/JavaScript. The next implementation phase should begin with a staging audit of WordPress version, active theme and plugins, Elementor and ACF versions, pages, posts, media, menus, templates, SEO, permalinks, robots, sitemap, schema, performance, caching, analytics, newsletter, and affiliate infrastructure. No assets should be deleted or deactivated without a documented safety review.

> ReadMeHub should not optimize merely to rank or to generate affiliate clicks. It should optimize to become useful enough to deserve ranking and trustworthy enough to support informed decisions.

## References

[1]: https://www.g2.com/compare "G2 Compare"
[2]: https://www.capterra.com/ "Capterra"
[3]: https://alternativeto.net/ "AlternativeTo"
[4]: /home/ubuntu/skills/content-strategy/SKILL.md "Content Strategy guidance"
[5]: /home/ubuntu/skills/seo-aeo-best-practices/SKILL.md "SEO and AEO guidance"

---

**End of foundation document.**

## Appendix D — Source-backed competitor notes

G2 publicly describes a workflow in which a visitor selects a current product, receives alternatives, and compares top choices side by side. It also presents category navigation, trending products, alternatives, and review-backed product comparisons.[1]

Capterra publicly presents category discovery, product profiles, user reviews, ratings, methodology, review verification, sponsored-profile context, and a referral-fee disclosure. These visible trust mechanisms support the recommendation that ReadMeHub expose commercial context and methodology near decision content.[2]

AlternativeTo publicly organizes software alternatives through categories, platforms, pricing models, open-source status, user opinions, and related applications. This supports the recommendation that ReadMeHub treat alternatives as a structured entity relationship rather than a paragraph appended to a review.[3]

These observations are limited to public page structures. They do not establish competitor traffic, rankings, conversion performance, or business results.

## Appendix E — Research limitations and next validation pass

The current foundation did not include a reliable keyword database, country-specific SERP export, backlink dataset, analytics, affiliate agreement, product catalog, or live WordPress audit. The next research pass should therefore validate the chosen launch vertical against actual keyword and SERP data, review at least the leading category-specific publishers, and replace query patterns with sourced keyword records. All implementation decisions should then be tested on staging before production deployment.

## References

[1]: https://www.g2.com/compare "G2 Compare"
[2]: https://www.capterra.com/ "Capterra"
[3]: https://alternativeto.net/ "AlternativeTo"

**Final status:** Foundation delivered. No production implementation has been performed.
