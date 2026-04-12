# roninforge-tailwind-v4

[![Validate Plugin](https://github.com/RoninForge/roninforge-tailwind-v4/actions/workflows/validate.yml/badge.svg)](https://github.com/RoninForge/roninforge-tailwind-v4/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/v/release/RoninForge/roninforge-tailwind-v4)](https://github.com/RoninForge/roninforge-tailwind-v4/releases)

Cursor plugin for Tailwind CSS v4. Prevents v3 hallucinations with verified v4 patterns, migration skills, and anti-pattern detection.

## The Problem

Tailwind CSS v4 shipped with breaking changes from v3. LLMs generate v3 syntax by default because their training data predates v4. The result: deprecated code that doesn't work.

Common AI mistakes this plugin prevents:
- Creating `tailwind.config.js` in a v4 project (config is CSS-first now)
- Using `@tailwind base; @tailwind components; @tailwind utilities;` (replaced by `@import "tailwindcss"`)
- Generating `bg-opacity-50` (removed, use `bg-red-500/50`)
- Using `shadow-sm` (renamed to `shadow-xs` in v4)
- Putting `!` at the start of classes (moved to end in v4)
- Adding `autoprefixer` to PostCSS config (built into v4)

## Install

Clone the repo and copy the rule/skill files into your project:

```bash
git clone https://github.com/RoninForge/roninforge-tailwind-v4.git
cp -r roninforge-tailwind-v4/rules/* your-project/.cursor/rules/
cp -r roninforge-tailwind-v4/skills/* your-project/.cursor/skills/
cp -r roninforge-tailwind-v4/agents/* your-project/.cursor/agents/
```

Or install as a local plugin (Cursor loads plugins from this directory automatically):

```bash
git clone https://github.com/RoninForge/roninforge-tailwind-v4.git ~/.cursor/plugins/local/roninforge-tailwind-v4
```

When available on the Cursor marketplace, install directly from the marketplace UI inside Cursor.

## What's Included

### Rules (5 files, auto-attached)

| Rule | Scope | What it does |
|------|-------|-------------|
| `tailwind-v4-core` | Always active | Core v4 syntax: imports, config, utility renames, opacity modifiers |
| `tailwind-v4-anti-patterns` | Always active | 12 common AI mistakes and how to avoid them |
| `tailwind-v4-config` | CSS/config files | `@theme`, `@source`, build tool setup, dark mode config |
| `tailwind-v4-utilities` | Template files | Renamed classes, container queries, gradients, new variants |
| `tailwind-v4-migration` | Agent-requested | Step-by-step v3-to-v4 migration process |

### Skills (3 commands)

| Skill | Command | What it does |
|-------|---------|-------------|
| Migration | `/tw-migrate` | Scan a v3 project, generate a complete migration plan with exact find-and-replace commands |
| Component | `/tw-component` | Generate UI components with correct v4 classes, accessibility, and dark mode |
| Validation | `/tw-validate` | Audit a project for v3/v4 version mixing and deprecated patterns |

### Agent (1 subagent)

| Agent | What it does |
|-------|-------------|
| `tailwind-reviewer` | Reviews code changes for v3 patterns, missing accessibility, and theming inconsistencies |

### Reference Docs

Bundled v4 reference documentation sourced from the official Tailwind CSS upgrade guide and v4 announcement. Provides ground-truth data so the LLM doesn't rely on stale training data.

## What Makes This Different

**vs. `.cursorrules` gists (danhollick, cursor.directory):**
- Anti-pattern rules that explicitly teach the LLM what NOT to do
- Skills for real workflows (migration, validation), not just passive rules
- Bundled reference docs for LLM grounding
- Auto-attaches via globs (CSS rules on CSS files, utility rules on templates)
- Subagent for automated code review

**vs. no plugin:**
- Prevents the top 12 AI mistakes with Tailwind v4
- Migration skill automates the v3-to-v4 upgrade process
- Validation skill catches version mixing before it ships
- Component skill generates accessible, dark-mode-ready v4 components

## Test Fixtures

The `tests/` directory includes sample v3 and v4 projects for testing:

- `tests/fixtures/v3-sample/` - a project with v3 patterns (config, CSS, components)
- `tests/fixtures/v4-sample/` - the same project migrated to v4

Use these to verify the migration skill works correctly:
1. Open `tests/fixtures/v3-sample/` in Cursor with the plugin installed
2. Run `/tw-migrate` and compare the output against `tests/fixtures/v4-sample/`

## Validation

Run the plugin validation script to check structure and content:

```bash
chmod +x tests/validation/validate-plugin.sh
./tests/validation/validate-plugin.sh
```

## Project Structure

```
roninforge-tailwind-v4/
  .cursor-plugin/
    plugin.json               Plugin manifest
  rules/
    tailwind-v4-core.mdc      Core v4 rules (always active)
    tailwind-v4-anti-patterns.mdc  Anti-pattern detection (always active)
    tailwind-v4-config.mdc    Config rules (CSS/config files)
    tailwind-v4-utilities.mdc Utility rules (template files)
    tailwind-v4-migration.mdc Migration rules (agent-requested)
  skills/
    tw-migrate/
      SKILL.md                v3-to-v4 migration assistant
      references/
        migration-checklist.md
    tw-component/
      SKILL.md                v4 component generator
      references/
        component-patterns.md
    tw-validate/
      SKILL.md                v3/v4 version mixing detector
  agents/
    tailwind-reviewer.md      Code review subagent
  docs/
    tailwind-v4-reference.md  Complete v4 reference
  tests/
    fixtures/
      v3-sample/              Sample v3 project for testing
      v4-sample/              Sample v4 project (migration target)
    validation/
      validate-plugin.sh      Plugin structure validator
```

## Contributing

1. Fork the repo
2. Create a branch for your change
3. Run `./tests/validation/validate-plugin.sh` before submitting
4. Open a PR

All rule content must be verified against the official [Tailwind v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide). Do not add patterns based on assumptions or LLM-generated content without verification.

## Accuracy Policy

Every rule and pattern in this plugin is sourced from official Tailwind CSS documentation. If you find an inaccuracy, please open an issue with a link to the official docs showing the correct behavior.

## License

MIT - see [LICENSE](LICENSE)

## Links

- [Tailwind CSS v4 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Tailwind CSS v4 Announcement](https://tailwindcss.com/blog/tailwindcss-v4)
- [Cursor Plugin Documentation](https://docs.cursor.com/plugins)
- [RoninForge](https://roninforge.org)
