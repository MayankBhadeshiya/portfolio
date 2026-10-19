# portfolio

Personal portfolio site for Mayank Bhadeshiya, built with Next.js, Motion and Lenis.

The signature moment is the hero, a live React Native / Expo / Next.js dev setup that builds an app as you scroll. In **sketch**, wireframes and blueprint labels appear. In **code**, a VS Code-style editor types a React Native screen while the Expo app on the phone styles itself. In **build**, Metro bundles in the terminal (with an Expo Go QR code), Fast Refresh flashes and the Next.js dashboard counts up. In **ship**, `eas build` and `vercel --prod` run, and the App Store and Google Play badges appear.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (On Windows PowerShell, use `npm.cmd` if `npm` is blocked.)

## Editing content

- [`data/profile.ts`](data/profile.ts) holds the résumé content: intro, disciplines, experience, skills, certifications and contact links. Add an `email`, `linkedin` or `resume` link under `links` to show it in the contact section.
- `profile.projects` in the same file drives the "Selected work" stack and one page per project at `/projects/<slug>`. Each project has a `slug`, `name`, `category`, `discipline` (`mobile`, `frontend` or `backend`, which picks its accent color), `tagline`, `summary`, `role`, `platforms`, `stack`, `highlights` and optional `links` (`appStore`, `playStore`, `github`, `live`).
- [`constants/strings.ts`](constants/strings.ts) holds all other UI text, including the hero scene's copy.
- [`constants/colors.ts`](constants/colors.ts) holds every color, and CSS reads them as `var(--color-*)`. The palette borrows from the stack: Expo ink, React blue (frontend), Expo indigo (mobile) and Node green (backend).
- [`constants/tools.ts`](constants/tools.ts) maps tool names to their official logos from [Simple Icons](https://simpleicons.org). Add a name there and every chip that uses it shows the logo.

## Structure

Each section is a folder in `components/` with up to five files: `<name>Screen.tsx`, `<name>Styles.module.css`, `<name>Types.ts`, `use<Name>.ts` and `index.ts`. See [`.claude/rules/component-structure.md`](.claude/rules/component-structure.md).

| Section         | What it does                                                          |
| --------------- | --------------------------------------------------------------------- |
| `hero`          | Pinned "Build" scene with a Sketch → Design → Build → Ship stepper    |
| `about`         | Intro, stats, the three disciplines and a 3D tilt "build badge"       |
| `projects`      | Project cards that stack on top of each other as you scroll           |
| `skills`        | Bento grid of skill groups, colored by discipline                     |
| `experience`    | Timeline whose line draws as you scroll; certifications and education |
| `contact`       | Closing call to action and links                                      |
| `projectDetail` | The `/projects/<slug>` page                                           |
| `nav`, `cursor` | Floating nav with cross-page links; custom cursor for mouse users     |

All motion turns off for visitors who set "reduce motion" in their OS. The hero then shows the finished app without pinning.
