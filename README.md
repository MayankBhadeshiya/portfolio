# portfolio

Personal portfolio site for Mayank Bhadeshiya, built with Next.js, Motion and Lenis.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (On Windows PowerShell, use `npm.cmd` if `npm` is blocked.)

## Editing content

- [`data/profile.ts`](data/profile.ts) holds the résumé content: intro, experience, skills, certifications, the "What I build" chapters and contact links. Add an `email`, `linkedin` or `resume` link under `links` to show it in the contact section.
- [`constants/strings.ts`](constants/strings.ts) holds all other UI text (headings, buttons, phone mockup copy).
- [`constants/colors.ts`](constants/colors.ts) holds every color. CSS reads them as `var(--color-*)`.

## Structure

Each section is a folder in `components/` with up to five files: `<name>Screen.tsx`, `<name>Styles.module.css`, `<name>Types.ts`, `use<Name>.ts` and `index.ts`. See [`.claude/rules/component-structure.md`](.claude/rules/component-structure.md).

| Section      | What it does                                                       |
| ------------ | ------------------------------------------------------------------ |
| `hero`       | Name reveal on load; drifts and fades as you scroll away           |
| `statement`  | Pinned paragraph that lights up word by word as you scroll         |
| `showcase`   | Pinned phone that switches screens for each "What I build" chapter |
| `experience` | Timeline whose line draws as you scroll; certifications, education |
| `toolkit`    | Skill groups that scroll sideways while pinned (stacked on mobile) |
| `contact`    | Closing call to action and links                                   |

All motion is turned off for visitors who set "reduce motion" in their OS.
