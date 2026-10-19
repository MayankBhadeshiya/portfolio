# Code standards

These apply to every file in the repo.

## Types

- Never use `any` — not as an annotation, not as `as any`, not in generics. ESLint enforces this (`@typescript-eslint/no-explicit-any: error`).
- Reach for `unknown` plus narrowing, generics, or a proper named type instead.
- No `// @ts-ignore`. `// @ts-expect-error` is allowed only with a comment explaining why.
- Props and shared types are named types in the component's `*Types.ts` file, not inline object types.

## Logging

- No `console.log`, `console.debug` or `console.info` in committed code. ESLint enforces this (`no-console`).
- `console.warn` and `console.error` are allowed for real warnings and errors.

## Strings

- All user-facing text comes from `constants/strings.ts`. Don't write string literals for UI copy inside components.
- Group strings by feature (`strings.hero.*`, `strings.contact.*`) and keep the object `as const`.
- Résumé content (experience, skills, certifications, links, projects) belongs in `data/profile.ts`, not in `strings.ts`.

## Colors

- All colors come from `constants/colors.ts`. No hex, `rgb()`, `rgba()` or `hsl()` literals anywhere else — not in components, not in CSS modules, not in `globals.css`.
- In CSS, use the generated custom properties: `var(--color-<token>)`.
- In TS/Motion code, import `colors` directly.
- Need a new shade or a transparent variant? Add a token to `colors.ts`; don't inline it.
- One exception: official tool logos keep their brand color, which comes from Simple Icons data (`icon.hex`). Only `components/toolLogo/` turns that into a fill; register new logos in `constants/tools.ts`, never paste a brand hex anywhere.

## Formatting

- Prettier owns formatting. Don't hand-format; run `npm.cmd run format`.

## Before finishing

`npm.cmd run lint`, `npm.cmd run typecheck` and `npm.cmd run format:check` must all pass.
