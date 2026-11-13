# ELEMENTOR_IMPLEMENTATION_RULES.md

## Goal
Implement Google Stitch screenshots as accurate, editable, responsive sections in the existing ReadMeHub WordPress staging site.

## Priority
1. Native Elementor widgets and containers.
2. Existing reusable templates and global styles.
3. Installed and verified Xpro widgets.
4. WordPress core features and existing ACF fields.
5. Minimal scoped custom CSS.
6. Site-specific custom code only when necessary and authorized.

## Native-first requirements
Use editable containers and appropriate widgets such as headings, text, images, buttons, icons, lists, dividers, accordions, and supported forms. Use loop/archive features only if the installed edition/addons support them.

Do not put a whole page or major section into one HTML widget. Do not use an iframe or screenshot as a substitute for real content. Do not assume premium features are installed. Do not claim edits happened without verified execution.

## Before editing
1. Identify target page and section.
2. Inspect existing Elementor structure and adjacent sections.
3. Determine whether the component is reused elsewhere.
4. Check available widgets, global styles, and templates.
5. Identify data sources and interactions.
6. Prepare a concise plan.
7. Make only authorized changes.

## CSS and code
Keep CSS scoped to the target section/component. Prefer existing tokens. Avoid broad selectors, unnecessary `!important`, fixed heights that clip content, and fragile positioning. Document where CSS is added. Obtain authorization before installing plugins, editing PHP, or making high-impact shared changes.

## Editability
Text, images, links, buttons, and repeated cards should remain editable in Elementor wherever practical. Use reusable templates when supported. Explain any custom feature that reduces editability.

## Responsive QA
Check 1440px, 1280px, 768px, 390px, and 360px where practical. Verify wrapping, grid behavior, navigation, image cropping, button alignment, overflow, and footer behavior. Do not report tests as passed unless performed.

## Required report
Target page/section; widgets and containers; reusable components; ACF/dynamic data; CSS/code/plugin dependencies; responsive checks; verification evidence; known differences; blockers. If direct WordPress access is unavailable, say so and provide a supported alternative.
