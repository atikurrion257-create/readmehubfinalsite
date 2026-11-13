# ReadMeHub: corrections for "staging" wording

Owner confirmation (2026-10-23): https://www.readmehub.com/ is the MAIN PRODUCTION site. No staging site exists unless the owner supplies one.
Nothing below loosens safety. The old rule "never modify production" cannot be followed literally because the site is production, so it is replaced by a stricter, workable rule: draft-only, named-page, owner-approved writes.
I could not edit /mnt/project files (read-only). Apply these by hand. Only the quoted lines change; everything else stays.

## Project files

| File | Line | Current text | Replace with |
|---|---|---|---|
| 01_READMEHUB_PROJECT_CONTEXT.md | 5 | `- Staging URL: \`https://www.readmehub.com/\`` | `- Site URL: \`https://www.readmehub.com/\` (PRODUCTION, confirmed by the owner 2026-10-23; no staging site exists unless supplied)` |
| 01_READMEHUB_PROJECT_CONTEXT.md | 16 | `Only modify the authorized staging environment. Never modify production. Do not perform destructive operations, ...` | `Treat the site as production. Make only changes the owner has explicitly authorized for a named page or object, draft-only by default. Never publish, delete, undo, install or update plugins, or change global styles, menus, options, SEO settings or site-wide CSS without separate explicit approval. Do not perform destructive operations, replace the theme, remove content, change global styles, or install plugins without explicit authorization. Prefer reversible, section-scoped changes.` |
| 01_READMEHUB_PROJECT_CONTEXT.md | 41 | `...implemented in the authorized staging environment and inspected...` | `A task is complete only when the section has been implemented on the owner-approved draft page and inspected. If access is unavailable, report the blocker. Never claim execution that did not occur.` |
| 03_ELEMENTOR_IMPLEMENTATION_RULES.md | 4 | `...in the existing ReadMeHub WordPress staging site.` | `Implement Google Stitch screenshots as accurate, editable, responsive sections on owner-approved draft pages of the existing ReadMeHub production WordPress site.` |
| 05_IMPLEMENTATION_LOG_AND_QA.md | 4 | `Maintain a factual record of work on the ReadMeHub staging website. Update after each task.` | `Maintain a factual record of work on the ReadMeHub production website. Update after each task.` |
| 05_IMPLEMENTATION_LOG_AND_QA.md | 7 | `- Authorized target: staging only.` | `- Authorized target: only the draft page(s) the owner names for each task. Production is live: no publishing without separate approval.` |
| 05_IMPLEMENTATION_LOG_AND_QA.md | 8 | `- Production must remain untouched.` | `- Published pages, the existing homepage, global styles, menus and site settings stay untouched unless the owner approves that exact change.` |
| 05_IMPLEMENTATION_LOG_AND_QA.md | 66 | `- [ ] Staging URL confirmed.` | `- [ ] Environment confirmed as PRODUCTION and the draft target page ID recorded.` |
| 05_IMPLEMENTATION_LOG_AND_QA.md | 67 | `- [ ] Production untouched.` | `- [ ] Nothing published; only the approved draft page(s) changed.` |
| 07_PER_SECTION_TASK_PROMPT.md | 3 | `...my existing ReadMeHub WordPress staging website.` | `Implement the attached Google Stitch screenshot on the approved draft page of my existing ReadMeHub production WordPress website.` |
| 07_PER_SECTION_TASK_PROMPT.md | 5 | `Target staging URL: \`https://www.readmehub.com/\`` | `Site URL (PRODUCTION): \`https://www.readmehub.com/\`. Draft target page ID: <fill in>` |
| 07_PER_SECTION_TASK_PROMPT.md | 44 | `Only modify staging. Do not change production.` | `Write only to the draft page named above. Do not publish, delete, or change the live homepage, global settings, menus, plugins or SEO. Anything else needs separate approval.` |

## Project Instructions (the pasted text, not a file; edit in the Project settings)

| Section | Current sentence | Replace with |
|---|---|---|
| 3. PROJECT ENVIRONMENT | `This is the staging environment.` + `The live production website must remain untouched.` | `This is the PRODUCTION website (confirmed by the owner 2026-10-23). Only owner-approved, draft-only changes to named pages are permitted. Published content, the live homepage and site-wide settings must not change without separate approval.` |
| 4. STRICT PRODUCTION SAFETY | `Only work on the authorized staging environment.` + `Modify the live production website.` (under "Never:") | `Only write to the draft page(s) the owner has named.` + `Publish, or modify any published page, global setting, menu, plugin or SEO setting, without separate explicit approval.` |
| 3. last paragraph | `...Do not pretend to have inspected the website.` | unchanged |

## Installed skill
`readmehub-project-pack` line 14 is corrected in /mnt/user-data/outputs/skill-fixes/readmehub-project-pack/SKILL.md (not yet applied to the account).
