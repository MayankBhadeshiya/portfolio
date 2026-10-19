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
- `profile.projects` in the same file drives the "Selected work" section and one page per project at `/projects/<slug>`. Each project has a `slug`, `name`, `tagline`, `summary`, `role`, `platforms`, `stack`, `highlights`, an `accent` color (`periwinkle`, `apricot`, `mint` or `rose`) and optional `links` (`appStore`, `playStore`, `github`, `live`).
- [`constants/strings.ts`](constants/strings.ts) holds all other UI text (headings, buttons, phone mockup copy).
- [`constants/colors.ts`](constants/colors.ts) holds every color. CSS reads them as `var(--color-*)`.

## Structure

Each section is a folder in `components/` with up to five files: `<name>Screen.tsx`, `<name>Styles.module.css`, `<name>Types.ts`, `use<Name>.ts` and `index.ts`. See [`.claude/rules/component-structure.md`](.claude/rules/component-structure.md).

| Section      | What it does                                                       |
| ------------ | ------------------------------------------------------------------ |
| `hero`       | Name reveal on load; drifts and fades as you scroll away           |
| `statement`  | Pinned paragraph that lights up word by word as you scroll         |
| `showcase`   | Pinned phone that switches screens for each "What I build" chapter |
| `projects`   | "Selected work" rows; on desktop a cover card follows the cursor   |
| `experience` | Timeline whose line draws as you scroll; certifications, education |
| `toolkit`    | Skill groups that scroll sideways while pinned (stacked on mobile) |
| `contact`    | Closing call to action and links                                   |

All motion is turned off for visitors who set "reduce motion" in their OS.
