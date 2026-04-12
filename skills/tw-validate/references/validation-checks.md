# Tailwind v4 Validation Checks

Reference list of all patterns the validation skill should detect.

## Critical (will break or produce wrong output)

| Pattern | Regex | Severity |
|---------|-------|----------|
| Opacity utility | `bg-opacity-\|text-opacity-\|border-opacity-\|divide-opacity-\|ring-opacity-\|placeholder-opacity-` | Critical |
| Important prefix | `class="[^"]*![a-z]` (! followed by letter at class start) | Critical |
| CSS var bracket syntax | `\[--[a-z]` | Critical |
| v3 import directives | `@tailwind base\|@tailwind components\|@tailwind utilities` | Critical |

## High (renamed classes)

| Pattern | Regex | Replacement | Severity |
|---------|-------|-------------|----------|
| shadow-sm | `\bshadow-sm\b` | `shadow-xs` | High |
| blur-sm | `\bblur-sm\b` | `blur-xs` | High |
| rounded-sm | `\brounded-sm\b` | `rounded-xs` | High |
| outline-none | `\boutline-none\b` | `outline-hidden` (preferred for a11y) | Low |
| overflow-ellipsis | `\boverflow-ellipsis\b` | `text-ellipsis` | High |
| flex-grow (not -0) | `\bflex-grow\b(?!-0)` | `grow` | High |
| flex-grow-0 | `\bflex-grow-0\b` | `grow-0` | High |
| flex-shrink (not -0) | `\bflex-shrink\b(?!-0)` | `shrink` | High |
| flex-shrink-0 | `\bflex-shrink-0\b` | `shrink-0` | High |

## Medium (behavioral changes)

| Pattern | Description | Severity |
|---------|-------------|----------|
| Bare `border` | `\bborder\b` without a following color class | Medium |
| Bare `ring` | `\bring\b` without explicit width | Medium |
| transform prefix | `\btransform\s` | Medium |
| transform-none | `\btransform-none\b` | Medium |

## Low (style/preference)

| Pattern | Description | Severity |
|---------|-------------|----------|
| space-x/y utilities | `\bspace-[xy]-` where flex/grid gap is better | Low |
| theme() function | `theme\(` in CSS files | Low |
| @layer utilities | `@layer utilities` that could be `@utility` | Low |

## Config/Build Checks

| Check | What to look for | Severity |
|-------|-----------------|----------|
| Unnecessary autoprefixer | `autoprefixer` in PostCSS config | Medium |
| Unnecessary postcss-import | `postcss-import` in PostCSS config | Medium |
| Missing @config bridge | `tailwind.config.js` exists but no `@config` in CSS | High |
| Old content array | `content:` in tailwind.config.js alongside v4 imports | Medium |
| Removed corePlugins | `corePlugins` in tailwind.config.js | Medium |
| Removed separator | `separator` in tailwind.config.js | Medium |
| Removed safelist | `safelist` in tailwind.config.js | Medium |
