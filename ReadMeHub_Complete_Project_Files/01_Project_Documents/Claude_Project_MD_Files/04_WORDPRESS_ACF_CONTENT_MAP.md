# WORDPRESS_ACF_CONTENT_MAP.md

## Purpose
Document how ReadMeHub content is stored in WordPress and rendered through Elementor. Populate this file from actual site inspection; proposed structures are not confirmation of existing functionality.

## Historical baseline
Previously reported: WordPress, Hello Elementor, Elementor, ACF, Rank Math SEO, and Xpro Elementor Addons/Theme Builder. Confirm current versions, editions, and capabilities.

## Inspect existing content
Record actual findings:
- Posts, pages, categories, tags, media usage
- Existing custom post types: display name, slug, archive/public status, supports, rewrite rules, registration source
- Existing taxonomies: name, slug, associated post types, hierarchy, registration source

## ACF field inventory
For every field group, record title/key, location rules, field label/name/type, return format, required/optional status, default value, conditional logic, and current usage.

Do not assume ACF Repeater or Flexible Content is available. Confirm the installed edition and feature support.

## Potential content model — proposal only
Depending on actual architecture, the site may use:
- Standard Posts for articles and guides
- Tools CPT for tool reviews/directories
- Comparisons CPT for comparisons
- Deals/Coupons CPT for offers

Potential fields: tool logo, official URL, short description, pricing/source/date, features, limitations, related tools, comparison relationships/criteria, coupon code, offer destination/terms/expiry, verification status, last verified date.

These are suggestions, not confirmation that fields or CPTs exist.

## Elementor dynamic mapping
For each template, document the WordPress object/query, dynamic title/content/image, taxonomy, ACF fields, related-content query, conditional display rules, missing-field behavior, and Elementor/addon dependencies.

## Change control
Inspect before creating CPTs, taxonomies, or fields. Avoid duplicates. Use native WordPress fields when sufficient. Document significant content-model changes and obtain approval. Hide optional sections when data is missing. Never fabricate ratings, prices, discounts, codes, expiry dates, or verification claims.
