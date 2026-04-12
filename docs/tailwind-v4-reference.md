# Tailwind CSS v4 Complete Reference

This document is the ground-truth reference for Tailwind CSS v4 changes. It is used by the plugin's rules and skills to ensure accuracy.

Source: [Tailwind CSS v4 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide) and [v4 Announcement](https://tailwindcss.com/blog/tailwindcss-v4).

## Installation

### Vite (recommended)
```bash
npm install -D tailwindcss @tailwindcss/vite
```
```ts
// vite.config.ts
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
});
```

### PostCSS
```bash
npm install -D tailwindcss @tailwindcss/postcss
```
```js
// postcss.config.mjs
export default {
  plugins: { "@tailwindcss/postcss": {} },
};
```

### CLI
```bash
npx @tailwindcss/cli -i input.css -o output.css
```

### CSS entry point
```css
@import "tailwindcss";
```

## Directive Reference

| Directive | Purpose | Example |
|-----------|---------|---------|
| `@import "tailwindcss"` | Load Tailwind (replaces `@tailwind` directives) | `@import "tailwindcss";` |
| `@theme { }` | Define design tokens | `@theme { --color-brand: #ff6a00; }` |
| `@source` | Control content scanning | `@source "../node_modules/@lib";` |
| `@source not` | Exclude from scanning | `@source not "../legacy";` |
| `@source inline()` | Force-generate classes (replaces safelist) | `@source inline("bg-red-{100..900}");` |
| `@utility name { }` | Custom utility (replaces `@layer utilities`) | `@utility scrollbar-hidden { scrollbar-width: none; }` |
| `@variant name { }` | Apply variant in custom CSS | `.el { @variant dark { color: white; } }` |
| `@custom-variant` | Register reusable custom variant | `@custom-variant dark (&:where(.dark *));` |
| `@reference` | Import for scoped styles without duplication | `@reference "tailwindcss";` |
| `@config` | Load legacy JS config | `@config "../../tailwind.config.js";` |
| `@plugin` | Load JS plugin | `@plugin "@tailwindcss/typography";` |
| `@apply` | Apply utilities in custom CSS (unchanged) | `@apply px-4 py-2 rounded-sm;` |

## Breaking Changes Summary

### Syntax Changes

| Change | v3 | v4 |
|--------|----|----|
| Import | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| Important modifier | `!p-4` (prefix) | `p-4!` (suffix) |
| CSS variable arbitrary | `bg-[--var]` | `bg-(--var)` |
| Variant stacking | right-to-left (`first:*:`) | left-to-right (`*:first:`) |

### Renamed Utilities

| v3 | v4 | Notes |
|----|-----|-------|
| `shadow-sm` | `shadow-xs` | Entire shadow scale shifted down |
| `shadow` | `shadow-sm` | |
| `blur-sm` | `blur-xs` | Blur scale shifted down |
| `blur` | `blur-sm` | |
| `rounded-sm` | `rounded-xs` | Border radius scale shifted down |
| `rounded` | `rounded-sm` | |
| `outline-none` | `outline-hidden` | Semantic rename |
| `overflow-ellipsis` | `text-ellipsis` | Semantic rename |
| `flex-grow` | `grow` | Simplified |
| `flex-grow-0` | `grow-0` | |
| `flex-shrink` | `shrink` | Simplified |
| `flex-shrink-0` | `shrink-0` | |

### Removed Features

| Feature | Replacement |
|---------|-------------|
| `bg-opacity-*` | `bg-color/opacity` modifier |
| `text-opacity-*` | `text-color/opacity` modifier |
| `border-opacity-*` | `border-color/opacity` modifier |
| `ring-opacity-*` | `ring-color/opacity` modifier |
| `divide-opacity-*` | `divide-color/opacity` modifier |
| `placeholder-opacity-*` | `placeholder-color/opacity` modifier |
| `transform` class | Automatic (just use scale-*, rotate-*, etc.) |
| `transform-none` | `scale-100 rotate-0 translate-x-0 translate-y-0` |
| `transform-gpu` | Automatic (no longer needed) |

### Default Changes

| Feature | v3 Default | v4 Default |
|---------|-----------|-----------|
| `border` color | `gray-200` | `currentColor` |
| `ring` width | `3px` | `1px` |
| `ring` color | `blue-500` | `currentColor` |
| Button cursor | `pointer` | `default` |
| Placeholder color | fixed `gray-400` | 50% opacity of `currentColor` |
| `[hidden]` | `display: none` | `display: none !important` |

### Removed Config Options

| Option | v4 Alternative |
|--------|---------------|
| `content: [...]` | Auto-detection via `.gitignore` + `@source` |
| `corePlugins` | None (cannot disable individual plugins) |
| `separator` | Only `:` supported |
| `safelist` | `@source inline(...)` |
| JS config auto-detection | Must use `@config` directive explicitly |

### Build Tool Changes

| v3 | v4 |
|----|-----|
| `tailwindcss` PostCSS plugin | `@tailwindcss/postcss` or `@tailwindcss/vite` |
| `autoprefixer` required | Built-in (remove autoprefixer) |
| `postcss-import` recommended | Built-in (remove postcss-import) |
| `postcss-nesting` optional | Built-in |

## New Features

### CSS-First Configuration
```css
@theme {
  --color-*: initial; /* Clear defaults */
  --color-brand: #ff6a00;
  --font-sans: "Inter", sans-serif;
  --spacing-18: 4.5rem;
  --radius-card: 0.75rem;
  --breakpoint-sm: 40rem;
  --animate-fade-in: fade-in 0.3s ease-out;
}
```

### Container Queries (built-in)
```html
<div class="@container">
  <div class="@sm:grid-cols-2 @lg:grid-cols-3">...</div>
</div>
```

### 3D Transforms
```html
<div class="perspective-distant">
  <div class="rotate-x-12 rotate-y-6 transform-3d">...</div>
</div>
```

### Enhanced Gradients
```html
<div class="bg-linear-45 from-blue-500 to-purple-500"></div>
<div class="bg-linear-to-r/oklch from-blue-500 to-green-500"></div>
<div class="bg-radial-[at_25%_25%] from-white to-zinc-900"></div>
<div class="bg-conic from-red-500 via-yellow-500 to-red-500"></div>
```

### Inset Shadows and Rings
```html
<div class="inset-shadow-xs inset-ring inset-ring-white/10"></div>
```

### New Variants
```html
<div class="not-hover:opacity-75"></div>
<div class="nth-odd:bg-gray-50"></div>
<div class="inert:opacity-50"></div>
<div class="starting:open:opacity-0"></div>
```

### Field Sizing
```html
<textarea class="field-sizing-content"></textarea>
```

### Color Scheme
```html
<html class="color-scheme-dark"></html>
```

### CSS Variable Theme Access
All `@theme` values are available as CSS variables:
```css
.custom {
  padding: var(--spacing-4);
  color: var(--color-blue-500);
  font: var(--font-sans);
}
```

## Browser Requirements

| Browser | Minimum Version |
|---------|-----------------|
| Safari | 16.4+ |
| Chrome | 111+ |
| Firefox | 128+ |

Required CSS features: `@property`, `color-mix()`, `@layer`, CSS nesting.

## Automated Upgrade

```bash
npx @tailwindcss/upgrade
```
Requires Node.js 20+. Handles most mechanical changes but manual review is always needed.

## Color System

v4 uses OKLCH color space (wider gamut, more perceptually uniform) instead of sRGB. Colors look slightly more vivid on modern displays. The naming is identical (red-500, blue-300, etc.) but the actual color values differ slightly.

## Performance

| Scenario | v3 | v4 | Improvement |
|----------|----|----|-------------|
| Full build | 378ms | 100ms | 3.78x faster |
| Incremental (new CSS) | 44ms | 5ms | 8.8x faster |
| Incremental (no new CSS) | 35ms | 192us | 182x faster |
