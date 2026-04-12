# Tailwind v4 Component Patterns

Reference patterns for common UI components using correct Tailwind CSS v4 syntax.

## Button

```html
<button class="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-xs transition-colors hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-hidden active:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
  Button text
</button>
```

Key v4 patterns used:
- `cursor-pointer` (buttons no longer default to pointer)
- `rounded-sm` (was `rounded` in v3)
- `shadow-xs` (was `shadow-sm` in v3)
- `outline-hidden` (was `outline-none` in v3)

### Button Variants

```html
<!-- Secondary -->
<button class="cursor-pointer rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-hidden">
  Secondary
</button>

<!-- Ghost -->
<button class="cursor-pointer rounded-sm px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden">
  Ghost
</button>

<!-- Danger -->
<button class="cursor-pointer rounded-sm bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-xs transition-colors hover:bg-red-600 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:outline-hidden">
  Delete
</button>
```

## Card

```html
<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-xs dark:border-gray-800 dark:bg-gray-900">
  <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Card Title</h3>
  <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Card description text.</p>
  <div class="mt-4 flex gap-3">
    <button class="cursor-pointer rounded-sm bg-blue-500 px-3 py-1.5 text-sm text-white hover:bg-blue-600">Action</button>
    <button class="cursor-pointer rounded-sm px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">Cancel</button>
  </div>
</div>
```

Key v4 patterns:
- Explicit `border-gray-200` (no default color in v4)
- `gap-3` instead of `space-x-3`
- `shadow-xs` (was `shadow-sm`)
- `rounded-lg` (same as v3, but `rounded` alone would be `rounded-sm`)

## Input

```html
<div>
  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
    Email
  </label>
  <input
    type="email"
    id="email"
    class="mt-1 block w-full rounded-sm border border-gray-300 px-3 py-2 text-sm shadow-xs placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
    placeholder="you@example.com"
  />
</div>
```

Key v4 patterns:
- `rounded-sm` (was `rounded` in v3)
- `shadow-xs` (was `shadow-sm`)
- `outline-hidden` (was `outline-none`)
- Explicit `border-gray-300`
- Explicit `ring-1` width

## Modal / Dialog

```html
<dialog class="rounded-lg bg-white p-0 shadow-lg backdrop:bg-black/50 dark:bg-gray-900 open:animate-fade-in">
  <div class="p-6">
    <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Dialog Title</h2>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Dialog content goes here.</p>
  </div>
  <div class="flex justify-end gap-3 border-t border-gray-200 px-6 py-4 dark:border-gray-800">
    <button class="cursor-pointer rounded-sm px-4 py-2 text-sm text-gray-600 hover:text-gray-900" onclick="this.closest('dialog').close()">
      Cancel
    </button>
    <button class="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
      Confirm
    </button>
  </div>
</dialog>
```

Key v4 patterns:
- `backdrop:bg-black/50` (opacity modifier)
- Dialog no longer auto-centered by preflight (add margin: auto in CSS if needed)
- Explicit border color

## Navigation

```html
<nav class="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
  <a href="/" class="text-lg font-bold text-gray-900 dark:text-white">Brand</a>
  <div class="flex items-center gap-6">
    <a href="/features" class="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Features</a>
    <a href="/pricing" class="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Pricing</a>
    <a href="/docs" class="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Docs</a>
    <button class="cursor-pointer rounded-sm bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
      Sign up
    </button>
  </div>
</nav>
```

## Alert / Banner

```html
<div class="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900/50 dark:bg-yellow-950/50" role="alert">
  <svg class="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
  </svg>
  <div>
    <h3 class="text-sm font-medium text-yellow-800 dark:text-yellow-200">Warning</h3>
    <p class="mt-1 text-sm text-yellow-700 dark:text-yellow-300">Something needs your attention.</p>
  </div>
</div>
```

Key v4 patterns:
- `shrink-0` (was `flex-shrink-0`)
- `gap-3` (instead of `space-x-3`)
- Opacity on dark colors: `border-yellow-900/50`

## Responsive Container-Query Card Grid

```html
<div class="@container">
  <div class="grid grid-cols-1 gap-6 @md:grid-cols-2 @xl:grid-cols-3">
    <!-- Cards use container width, not viewport -->
    <div class="rounded-lg border border-gray-200 p-4 shadow-xs">
      <h3 class="font-medium text-gray-900">Item</h3>
      <p class="mt-1 text-sm text-gray-500">Description</p>
    </div>
    <!-- More cards... -->
  </div>
</div>
```

Key v4 patterns:
- Container queries (`@container`, `@md:`, `@xl:`) are built into v4, no plugin needed
- Responsive to the container's width, not the viewport

## Table

```html
<div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
    <thead class="bg-gray-50 dark:bg-gray-900">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Name</th>
        <th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
        <td class="whitespace-nowrap px-4 py-3 text-sm text-gray-900 dark:text-gray-100">Item name</td>
        <td class="whitespace-nowrap px-4 py-3">
          <span class="inline-flex rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">Active</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

Key v4 patterns:
- Explicit divide colors
- Explicit border colors on container
- Opacity modifier for dark badge background
