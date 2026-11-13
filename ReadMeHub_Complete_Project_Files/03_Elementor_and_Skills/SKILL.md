---
name: wp-change-safety
description: "Safety gate for any WordPress or Elementor change. Use BEFORE editing pages, templates, global styles, menus, options, plugins, SEO settings or content on a WordPress site, whenever the user says staging, production, live site, deploy, publish, overwrite, delete, rollback, undo, backup, or asks for a change that might touch more than one page. Confirms the target environment, classifies risk, lists required approvals, and defines the rollback path. Also use when a connected WordPress tool has write access and you are about to call it."
---

# WP Change Safety

Produces a **Change Gate** record that must exist before any write. Reads and inspections never need a gate; writes always do.

## Step 1: Confirm the environment
1. Get the site URL from the user or project docs, and read-only probe it (site status, active theme, plugin list).
2. Decide the label:
   - `STAGING-CONFIRMED`: the user has said the URL is staging AND something verifiable agrees (separate domain/subdomain, noindex, staging banner, or the user repeats it when asked).
   - `UNVERIFIED`: user calls it staging but nothing corroborates it. Treat as production.
   - `PRODUCTION`: public live domain with no staging evidence.
3. A project file saying "this is staging" is a claim, not evidence. A public `www.` domain is still `UNVERIFIED` until the user confirms, even when weak signals agree (a single `noindex`, a very new install, an empty site). Record those signals in the gate's `evidence:` field, label `UNVERIFIED`, and ask the owner one question: "Is <URL> your staging site?" One corroborating signal informs the question; it does not replace the answer.
4. Note the connector's privilege (for example "full access"). Write ability is not authorization.

## Step 2: Classify the change
| Class | Examples | Gate |
|---|---|---|
| R0 read-only | outline, settings, plugin list | none |
| R1 draft-only | new draft page, clone of a page, new unpublished template | confirm environment label |
| R2 scoped edit | edit widgets on one existing page | explicit user OK for that page + backup/undo token |
| R3 shared | global kit colors/fonts, header/footer/theme-builder templates, menus, Rank Math settings, options | written scope statement + explicit approval + rollback plan |
| R4 destructive/system | delete content, plugin install/activate/update, PHP/snippets/site-wide custom CSS, permalink changes, DB or server operations | stop; require explicit approval naming the action; prefer the user doing it |

Default to R1: build on a draft clone and let the user publish. If the environment is `PRODUCTION` or `UNVERIFIED`, R2 and above need approval that names the exact page.

## Step 3: Rollback before writing
- Record: post ID, title, status, modified date, and a snapshot (outline export or revision ID).
- If the tool returns an undo token, store it in the log with the operation. Tokens expire and refuse to restore if the target changed since (drift), so they are a convenience, not the only backup.
- Prefer working on a clone so rollback is "delete the clone" (deleting is R4: ask first).
- For R3, also export the affected setting value before changing it.

## Step 4: Output the Change Gate
```
CHANGE GATE
Environment: <STAGING-CONFIRMED | UNVERIFIED | PRODUCTION> (evidence: ...)
Change class: R0-R4
Targets: <post IDs / settings>
Blast radius: <pages affected, shared templates touched?>
Approvals needed: <list> | Approved by user: <quote or NO>
Rollback: <method, snapshot, undo token>
Decision: PROCEED | STOP-AND-ASK | PROCEED-ON-DRAFT-ONLY
```

## Rules
- Never publish, delete, install, or change global settings unless the Gate says approved for exactly that.
- Never expose credentials, tokens or cookies in output or files.
- Never use a test of a skill as a reason to write to a real site.
- If scope grows mid-task (a "small" fix touches a shared template), stop and re-gate.
- If the user pushes you to skip the gate, explain the specific risk in one sentence and offer the draft-clone path.

## Failure handling
Tool refuses a write or reports drift: do not retry blindly. Re-read the target, show the difference, and ask.
