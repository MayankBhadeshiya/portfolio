---
paths:
  - "components/**"
  - "app/**"
---

# Component structure

Every feature or component lives in its own camelCase folder under `components/`. Files inside are prefixed with the folder name. A folder has at most these 5 files:

```
components/hero/
  heroScreen.tsx         // JSX only                                   — always
  heroStyles.module.css  // styles                                     — when it has styles
  heroTypes.ts           // props and other types                      — when it has types
  useHero.ts             // state, effects, scroll/animation logic     — when it has logic
  index.ts               // export { default } from "./heroScreen";    — always
```

## Rules

- `<name>Screen.tsx` and `index.ts` are always present. Add the styles, types and hook files only when there is something to put in them.
- The screen file renders markup. Any state, effects, refs, scroll or animation values, or derived data go in `use<Name>.ts`, and the screen calls that hook.
- The screen's default export is the component. `index.ts` only re-exports it (plus types, if other folders need them).
- Import a component through its folder: `import Hero from "@/components/hero";` — never `@/components/hero/heroScreen`.
- Styles use CSS Modules (`<name>Styles.module.css`), importing colors as `var(--color-*)` (see `code-standards.md`).
- Text comes from `constants/strings.ts`; colors from `constants/colors.ts`.
- Small sub-parts used only by one component can be their own folder nested inside it (`components/showcase/phoneFrame/`), following the same layout.
- `app/**/page.tsx` stays thin: it imports feature folders and arranges them, with no logic or styling of its own.
