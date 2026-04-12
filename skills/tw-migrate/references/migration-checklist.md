# Tailwind v3 to v4 Migration Checklist

Use this checklist to ensure nothing is missed during migration.

## Pre-Migration

- [ ] Verify Node.js 20+ is installed
- [ ] Verify browser support requirements (Safari 16.4+, Chrome 111+, Firefox 128+)
- [ ] Create a git branch for the migration
- [ ] Document current visual state (screenshots of key pages)

## Dependencies

- [ ] Uninstall `autoprefixer`
- [ ] Uninstall `postcss-import`
- [ ] Uninstall `@tailwindcss/container-queries` (built into v4)
- [ ] Update `tailwindcss` to v4
- [ ] Install `@tailwindcss/vite` (Vite projects) or `@tailwindcss/postcss` (PostCSS projects)
- [ ] Update `@tailwindcss/typography` to v4-compatible version if used
- [ ] Update `@tailwindcss/forms` to v4-compatible version if used

## CSS Entry Point

- [ ] Replace `@tailwind base; @tailwind components; @tailwind utilities;` with `@import "tailwindcss";`
- [ ] Convert `@layer utilities` blocks to `@utility` declarations
- [ ] Convert `addVariant` plugin calls to `@custom-variant`
- [ ] Replace `theme()` function calls with `var(--*)` CSS variables
- [ ] Add `@plugin` directives for any first-party plugins used

## Configuration

- [ ] Convert `tailwind.config.js` theme values to `@theme` block in CSS
- [ ] Remove `content` array (auto-detection) or convert to `@source` directives
- [ ] Remove `corePlugins` (not supported in v4)
- [ ] Remove `separator` option (only `:` supported)
- [ ] Convert `safelist` to `@source inline(...)` directives
- [ ] If full config conversion is not practical, add `@config` bridge directive
- [ ] Delete `tailwind.config.js` if fully converted

## PostCSS / Build Tool

- [ ] Update PostCSS config to use only `@tailwindcss/postcss`
- [ ] Or switch to `@tailwindcss/vite` and remove PostCSS config
- [ ] Remove `autoprefixer` from PostCSS config
- [ ] Remove `postcss-import` from PostCSS config
- [ ] Remove `postcss-nesting` from PostCSS config (v4 handles nesting)

## Template File Updates (High Priority - Will Break)

- [ ] Move `!` important modifiers from beginning to end of classes
- [ ] Replace `[--var]` arbitrary CSS variable syntax with `(--var)`
- [ ] Replace opacity utilities with `/` modifier syntax
- [ ] Add explicit colors to bare `border` classes (was gray-200, now currentColor)
- [ ] Add explicit width and color to bare `ring` classes (was 3px blue, now 1px currentColor)

## Template File Updates (Medium Priority - Renamed)

- [ ] `shadow-sm` -> `shadow-xs`
- [ ] `shadow` (default) -> `shadow-sm`
- [ ] `shadow-md` -> stays `shadow-md` (but verify in context of shifted scale)
- [ ] `blur-sm` -> `blur-xs`
- [ ] `blur` (default) -> `blur-sm`
- [ ] `rounded-sm` -> `rounded-xs`
- [ ] `rounded` (default) -> `rounded-sm`
- [ ] `outline-none` -> `outline-hidden`
- [ ] `overflow-ellipsis` -> `text-ellipsis`
- [ ] `flex-grow` -> `grow`
- [ ] `flex-grow-0` -> `grow-0`
- [ ] `flex-shrink` -> `shrink`
- [ ] `flex-shrink-0` -> `shrink-0`

## Template File Updates (Low Priority - Behavioral)

- [ ] Remove `transform` class prefix (no longer needed)
- [ ] Replace `transform-none` with individual reset utilities
- [ ] Add `cursor-pointer` to buttons that need pointer cursor
- [ ] Migrate `space-*` / `divide-*` to `flex gap-*` / `grid gap-*` where practical
- [ ] Fix complex variant stacking order (left-to-right in v4)

## Post-Migration Verification

- [ ] Build succeeds with no errors
- [ ] Visual comparison of all key pages against pre-migration screenshots
- [ ] Border styles correct (check forms, cards, tables, dividers)
- [ ] Button cursors correct (pointer where expected)
- [ ] Ring styles correct (focus rings on inputs, buttons)
- [ ] Shadow sizes correct (shifted by one tier)
- [ ] Placeholder text appearance correct
- [ ] Dark mode works correctly
- [ ] All responsive breakpoints work
- [ ] Container queries work (if using `@container`)
- [ ] Custom fonts load correctly
- [ ] Custom colors render correctly (OKLCH may look slightly different)
- [ ] All interactive states work (hover, focus, active, disabled)
- [ ] Animations and transitions still work
- [ ] No console warnings or errors
