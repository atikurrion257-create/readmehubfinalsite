# IMPLEMENTATION_LOG_AND_QA.md

## Purpose
Maintain a factual record of work on the ReadMeHub staging website. Update after each task.

## Safety
- Authorized target: staging only.
- Production must remain untouched.
- Record high-impact changes and rollback options.
- Never mark a task complete without actual verification.

## Task log template
### Task [number] — [section]
- Date:
- Target page URL:
- Reference screenshot/file:
- Task type: New section / Replacement / Adjustment / Reusable component
- Existing structure inspected:
- Planned implementation:
- Actual changes:
- Elementor widgets/containers:
- Reusable components:
- ACF fields/dynamic data:
- Custom CSS location:
- Custom code/plugin dependencies:
- Responsive viewports inspected:
- Accessibility checks:
- Visual comparison result:
- Functional verification:
- Evidence:
- Known differences:
- Rollback/recovery notes:
- Status: Planned / In progress / Implemented, not fully verified / Verified / Blocked
- Next action:

## QA checklist
### Visual
- [ ] Layout/alignment resembles the reference.
- [ ] Approved colors and typography are preserved.
- [ ] Spacing and container widths are consistent.
- [ ] Images, icons, buttons, and cards render correctly.
- [ ] Header/footer and neighboring sections remain intact.

### Elementor editability
- [ ] Text is editable.
- [ ] Images are editable.
- [ ] Buttons and links are editable.
- [ ] Repeated content uses reusable structures where practical.
- [ ] No full-page HTML-widget shortcut was introduced.

### Dynamic content
- [ ] Data source confirmed.
- [ ] ACF names and return formats confirmed.
- [ ] Missing optional values handled gracefully.
- [ ] No unsupported facts presented as verified.

### Responsive
- [ ] 1440px desktop checked where practical.
- [ ] 1280px laptop checked where practical.
- [ ] 768px tablet checked where practical.
- [ ] 390px mobile checked where practical.
- [ ] 360px small mobile checked where practical.
- [ ] No obvious overflow or clipped content.

### Safety/regression
- [ ] Staging URL confirmed.
- [ ] Production untouched.
- [ ] No unrelated sections changed.
- [ ] Shared templates/global styles checked for impact.
- [ ] Rollback approach considered for significant edits.

## Reporting standard
Separate verified facts, changes actually performed, tests actually run, inferences, blockers, and recommended next actions. Do not claim success based solely on generated code or a plan.
