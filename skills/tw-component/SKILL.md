---
name: tw-component
description: "Generate a UI component using correct Tailwind CSS v4 utility classes, CSS variable theming, and accessibility best practices. Prevents v3 syntax hallucination by grounding output in verified v4 patterns."
---

# Generate Tailwind v4 Component

## When to Use

Use this skill when:
- Creating a new UI component with Tailwind CSS v4
- Building a reusable component that should use correct v4 patterns
- The user asks for a component and the project uses Tailwind v4

## Instructions

1. Identify the component type and requirements from the user's description

2. Before generating any markup, verify the project is using Tailwind v4 by checking for `@import "tailwindcss"` in the CSS entry point. If the project uses `@tailwind` directives, it is v3 - warn the user and suggest `/tw-migrate` first.

3. Check the project's `@theme` block (if any) for custom design tokens. Prefer semantic token names over raw Tailwind colors:
   - If `--color-brand` exists, use `bg-brand` not `bg-blue-500`
   - If `--color-surface` exists, use `bg-surface` not `bg-gray-900`
   - If `--font-body` exists, use `font-body` not `font-sans`

4. Generate the component following these v4 rules:
   - Use v4 utility names (shadow-xs not shadow-sm, rounded-xs not rounded-sm, etc.)
   - Use `/` opacity modifier (bg-black/50) not opacity utilities (bg-opacity-50)
   - Use `outline-hidden` not `outline-none` for focus styles
   - Always include explicit border colors (border-gray-200, not bare border)
   - Always include `cursor-pointer` on clickable elements
   - Include `focus-visible:` styles for keyboard accessibility
   - Use `gap-*` with flex/grid instead of `space-*` where practical
   - Use container queries (`@container`, `@sm:`, `@md:`) for component-level responsiveness when appropriate
   - Do not use the `transform` class prefix

5. Always include accessibility attributes:
   - `aria-label` or visible text for interactive elements
   - `sr-only` text for icon-only buttons
   - Correct `role` attributes where semantic HTML is not used
   - `focus-visible` ring or outline styles

6. If the component uses dark mode, use the `dark:` variant:
   ```html
   <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
   ```

7. Consult the v4 component patterns reference for common patterns and best practices.

8. After generating, review the output against the anti-pattern rules to ensure no v3 syntax leaked in.
