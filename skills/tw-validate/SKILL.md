---
name: tw-validate
description: "Scan a Tailwind CSS project for v3/v4 version mixing, deprecated patterns, and common mistakes. Reports issues with exact file locations and suggested fixes."
---

# Validate Tailwind v4 Project

## When to Use

Use this skill when:
- Verifying a project is fully migrated to Tailwind v4
- Checking for v3 patterns that may have been missed during migration
- Auditing a project before deployment to catch Tailwind issues
- A project is behaving unexpectedly and version mixing may be the cause

## Instructions

1. Determine the project's Tailwind version by reading `package.json`. Look for:
   - `tailwindcss` version (v4.x confirms v4)
   - Presence of `@tailwindcss/vite` or `@tailwindcss/postcss` (confirms v4 tooling)
   - Presence of `autoprefixer` (unnecessary in v4, suggests incomplete migration)
   - Presence of `postcss-import` (unnecessary in v4)

2. Check the CSS entry point for version indicators:
   - `@import "tailwindcss"` = v4 syntax (correct)
   - `@tailwind base; @tailwind components; @tailwind utilities;` = v3 syntax (needs migration)
   - Both present = version mixing (critical issue)

3. Check for `tailwind.config.js` or `tailwind.config.ts`:
   - If it exists AND the CSS uses `@import "tailwindcss"`: check if `@config` directive is present in CSS
   - If `@config` is missing: the JS config is being ignored (likely a bug)
   - If `@config` is present: this is a valid migration bridge, but flag for future conversion to `@theme`

4. Check PostCSS config:
   - Should contain only `@tailwindcss/postcss` (or no PostCSS if using Vite plugin)
   - Flag `autoprefixer`, `postcss-import`, `postcss-nesting` as unnecessary

5. Search all template files for deprecated v3 patterns. For each pattern found, report the file, line number, and suggested fix:

   **Critical (will break or produce wrong output):**
   - `bg-opacity-*`, `text-opacity-*`, `border-opacity-*`, `divide-opacity-*`, `ring-opacity-*`, `placeholder-opacity-*`
   - `!` at beginning of class names (should be at end in v4)
   - `[--` for arbitrary CSS variables (should be `(--` in v4)

   **High (renamed classes - may produce unexpected output):**
   - `shadow-sm` (should be `shadow-xs`)
   - `blur-sm` (should be `blur-xs`)
   - `rounded-sm` (should be `rounded-xs`)
   - `outline-none` (should be `outline-hidden`)
   - `overflow-ellipsis` (should be `text-ellipsis`)
   - `flex-grow` / `flex-shrink` (should be `grow` / `shrink`)

   **Medium (behavioral changes):**
   - Bare `border` without explicit color (defaults changed from gray-200 to currentColor)
   - Bare `ring` without explicit width/color (defaults changed from 3px blue to 1px currentColor)
   - `transform ` prefix (no longer needed)
   - `transform-none` (should be individual reset utilities)

   **Low (style/preference):**
   - `space-x-*` / `space-y-*` where `gap-*` with flex/grid would be more reliable
   - `theme()` function (deprecated, prefer CSS variables)
   - `@layer utilities` for simple custom utilities (prefer `@utility`)

6. Check custom CSS for deprecated patterns:
   - `theme("...")` function calls
   - `@layer utilities` blocks that could be `@utility`
   - `addVariant` in JS plugins that could be `@custom-variant`

7. Produce a summary report with:
   - **Version status:** Pure v4 / Mixed v3+v4 / Pure v3
   - **Issue count:** by severity (critical / high / medium / low)
   - **Issue list:** grouped by file, with line numbers and suggested fixes
   - **Overall assessment:** Ready for production / Needs attention / Needs migration
   - **Recommended next steps:** specific actions to take

8. If the project is pure v3 with no v4 indicators, recommend running `/tw-migrate` instead.
