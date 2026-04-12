# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-04-12

### Added

- 5 rule files covering core v4 syntax, anti-patterns, configuration, utilities, and migration
- `/tw-migrate` skill for v3-to-v4 project migration with step-by-step instructions
- `/tw-component` skill for generating v4-correct UI components with accessibility
- `/tw-validate` skill for detecting v3/v4 version mixing in projects
- `tailwind-reviewer` subagent for automated code review of Tailwind usage
- Complete v4 reference documentation sourced from official Tailwind docs
- Test fixtures with sample v3 and v4 projects
- Plugin validation script
- CI workflow for automated validation on push/PR
