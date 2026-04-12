---
name: tw-migrate
description: "Analyze a Tailwind CSS v3 project and generate a complete migration plan to v4. Scans config, CSS, and template files for v3 patterns and produces a prioritized checklist with exact find-and-replace commands."
---

# Tailwind v3 to v4 Migration

## When to Use

Use this skill when:
- Upgrading an existing Tailwind CSS v3 project to v4
- You encounter v3 patterns in a project that should be on v4
- A project has version mixing (some v3, some v4 patterns)

## Instructions

1. Read the project's package.json to identify installed Tailwind version and related packages (`tailwindcss`, `autoprefixer`, `postcss-import`, `@tailwindcss/typography`, `@tailwindcss/forms`, `@tailwindcss/container-queries`)

2. Read the CSS entry point file (usually `src/index.css`, `src/app.css`, `src/globals.css`, or `styles/globals.css`) and check for `@tailwind` directives vs `@import "tailwindcss"`

3. Check for `tailwind.config.js` or `tailwind.config.ts` and read its contents. Note: theme customizations, plugins, content paths, and any advanced config (safelist, corePlugins, separator)

4. Read `postcss.config.js`, `postcss.config.mjs`, or `postcss.config.cjs` if it exists

5. Read `vite.config.ts`, `vite.config.js`, or the equivalent build tool config

6. Search template files (`.html`, `.jsx`, `.tsx`, `.vue`, `.svelte`, `.blade.php`, `.erb`) for these v3 patterns:
   - `bg-opacity-`, `text-opacity-`, `border-opacity-`, `ring-opacity-`, `divide-opacity-`, `placeholder-opacity-`
   - `shadow-sm` (will need rename to `shadow-xs`)
   - `blur-sm` (will need rename to `blur-xs`)
   - `rounded-sm` (will need rename to `rounded-xs`)
   - `outline-none` (will need rename to `outline-hidden`)
   - `overflow-ellipsis` (will need rename to `text-ellipsis`)
   - `flex-grow`, `flex-shrink` (will need rename to `grow`, `shrink`)
   - `transform ` (the transform class prefix, no longer needed)
   - `!` at the beginning of utility classes (needs to move to end)
   - `[--` for arbitrary CSS variable syntax (needs to become `(--`)

7. Check browser support requirements. v4 requires Safari 16.4+, Chrome 111+, Firefox 128+. If the project needs older browser support, warn that migration may not be appropriate.

8. Generate a migration report with:
   - **Dependency changes** - exact npm commands to run
   - **Config changes** - what to convert from JS to CSS `@theme`, what `@config` bridge is needed
   - **CSS changes** - import syntax, custom utilities, custom variants
   - **Template changes** - count of each v3 pattern found, with exact find-and-replace commands
   - **Build tool changes** - PostCSS or Vite config updates
   - **Risk assessment** - which changes are safe to automate vs need manual review
   - **Post-migration verification** - what to visually check

9. Offer to run the automated upgrade tool first:
   ```bash
   npx @tailwindcss/upgrade
   ```
   Then review what it changed and handle remaining manual fixes.

10. Consult the migration checklist in the references directory for completeness.
