# Portfolio

Personal portfolio site for Mayank Bhadeshiya.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Motion (`motion/react`) for animation, Lenis for smooth scrolling
- CSS Modules for component styles; `app/globals.css` for resets and base styles only
- ESLint (flat config, `eslint.config.mjs`) + Prettier (`.prettierrc.json`)

## Commands

PowerShell on this machine blocks `npm.ps1`, so always call `npm.cmd`:

```bash
npm.cmd run dev           # local server at http://localhost:3000
npm.cmd run build         # production build
npm.cmd run lint          # ESLint
npm.cmd run lint:fix      # ESLint with autofix
npm.cmd run format        # Prettier write
npm.cmd run format:check  # Prettier check
npm.cmd run typecheck     # tsc --noEmit
```

## Where things live

- `components/<feature>/` — one folder per feature or component (see `.claude/rules/component-structure.md`)
- `constants/strings.ts` — every piece of UI copy
- `constants/colors.ts` — every color token (exposed to CSS as `--color-*`)
- `data/profile.ts` — résumé content: experience, skills, certifications, links, projects
- `app/page.tsx` — composes feature components; stays thin

## Rules

Project rules are in `.claude/rules/`:

- `code-standards.md` — typing, logging, strings, colors, formatting
- `component-structure.md` — the folder and file layout for components

## Before finishing a change

1. `npm.cmd run lint`
2. `npm.cmd run typecheck`
3. `npm.cmd run format:check`
4. `npm.cmd run build`

All four must pass.
