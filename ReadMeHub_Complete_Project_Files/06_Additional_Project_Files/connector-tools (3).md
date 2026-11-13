# Connector tools (Royal MCP). Read-only subset TESTED 2026-10-23; all writes still untested

Load this file only when the execution mechanism is the Royal MCP WordPress connector.
Status: read-only tools named below as TESTED succeeded in a live session on 2026-10-23. Everything else is `REGISTERED` only. Mark `TESTED` only after a successful call in your own session.
TESTED (read-only): `royal_mcp_connection_health`, `wp_get_site_status`, `wp_get_plugins`, `elementor_list_widget_schemas` (204 entries incl. ~90 Pro stubs), `elementor_list_dynamic_tags` (0), `elementor_list_local_templates` (Default Kit only), `elementor_get_page_outline` (errors cleanly with "Target post does not have Elementor data" on non-Elementor posts), `wp_get_post_meta`, `wp_get_global_styles`, `wp_get_taxonomies`, `wp_get_post_types`, `wp_get_posts`, `seo_audit_meta_tags`.
TESTED (draft-only writes, production site, owner-authorized, 2026-10-23):
- `wp_create_page` with `status:"draft"` WORKS (returned page ID, saved status confirmed `draft` by an independent read). It returns NO undo token and does not appear in `mcp_list_recent_changes`; discarding the page means deleting it (R4, needs separate approval). Rank Math and Elementor add their own meta rows to the new page automatically.
- `elementor_add_widget` on that new page was REJECTED: "Target post does not have Elementor data". A page made by `wp_create_page` is not Elementor-edited, and `elementor_get_page_outline` also errors on it. Do not improvise `_elementor_*` meta writes to get around this. Seed it by opening the page's `edit_url` once in the Elementor editor and saving the draft, or by `elementor_apply_template_to_page` with a real library template, or clone an existing Elementor page.
- `wp_create_preview_link` (5 min) + `wp_verify_rendered_page` WORKS: preview returned 200 with the draft's title and body text rendered. The anonymous URL of the same draft returned 404. The preview token appears in tool output, so keep the TTL short and never put it in files or reports.
- Seeding route CONFIRMED: after the owner opened page 9 once in the Elementor editor (edit_mode became `builder`), `elementor_add_widget` with `widget_type:"heading"`, `parent_id` (an existing container ID), `position:0`, curated `title` + `header_size` SUCCEEDED. It returned the new element ID and a 72h undo token. Independent verification: `elementor_get_page_outline` showed the heading ahead of the existing text-editor inside the same container; `elementor_get_widget_settings` returned exactly `title` and `header_size`; the preview render (200) showed the heading text before the paragraph; `mcp_list_recent_changes` listed the change with `undo_possible:true`; page status stayed `draft`. Each `wp_create_preview_link` call also creates a revision.
NOT TESTED: `elementor_clone_page`, `elementor_apply_template_to_page`, `elementor_replace_*`, undo (`mcp_undo_last_operation`), `mcp_get_change` (no tracked change existed).

## Read-only (safe probes)
- `royal_mcp_connection_health`: auth type, access level, which builders are active
- `wp_get_site_status`, `wp_get_site_info`, `wp_get_plugins`, `wp_get_active_theme`
- `elementor_list_widget_schemas` (registry), `elementor_get_widget_schema` (controls for one widget; atomic widgets are opaque)
- `elementor_get_page_outline`, `elementor_get_widget_settings` (needs post_id and element_id)
- `elementor_list_local_templates`, `elementor_list_dynamic_tags`
- `wp_get_global_styles` (WARNING: on a classic theme, `block_theme:false`, this returns WordPress core defaults such as `#ff6900` orange and an 800px content size, NOT the Elementor kit. Never treat it as the site's design tokens; read the kit post meta instead), `wp_get_theme_mods`, `wp_get_post_meta`, `wp_get_option`
- `wp_verify_rendered_page`, `wp_create_preview_link` (draft preview), `seo_audit_meta_tags`
- `mcp_list_recent_changes`, `mcp_get_change`

## Writes (need a Change Gate)
- `elementor_clone_page` (creates a draft copy: preferred first write)
- `elementor_add_widget`, `elementor_replace_text`, `elementor_replace_image`
- `elementor_import_template`, `elementor_apply_template_to_page`
- `elementor_rebuild_post_content`, `elementor_rebuild_post_content_bulk` (bulk is broad: R3)
- `wp_create_page`, `wp_update_page`, `wp_update_post`, `wp_update_post_meta`
- `mcp_undo_last_operation(token)`: tokens live 72 hours, one-shot, refused on drift

## Not for this workflow without R3/R4 approval
Options, theme mods, custom CSS, menus, plugin settings, snippets, redirects, WooCommerce, security, backup, cache tools, deletes.

## Gotchas
- All tools are deferred: load schemas with the tool search mechanism before first use; parameter names above are not guaranteed.
- `access_level: full` is capability, not permission.
- A widget registry can list premium-category widgets even when the premium plugin is absent (observed once on a free-Elementor site); confirm usability per widget.
- Sensitive plugin settings are redacted by the connector; do not try to work around that.
