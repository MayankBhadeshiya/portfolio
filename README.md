# portfolio

Personal portfolio site for Mayank Bhadeshiya, built with Next.js, Motion and Lenis.

**Live:** https://mayankbhadeshiya.vercel.app — deployed on Vercel; every push to `main` goes to production.

The signature moment is the hero, a live React Native / Expo / Next.js dev setup that builds an app over about one screen of scrolling:

- **Sketch:** wireframes and blueprint labels appear.
- **Code:** a VS Code-style editor types a React Native screen while the Expo app on the phone styles itself.
- **Build:** Metro bundles in the terminal (with an Expo Go QR code), Fast Refresh flashes and the Next.js dashboard counts up.
- **Ship:** `eas build` and `vercel --prod` run, and the App Store and Google Play badges appear.

The scene is drawn on a fixed canvas and scaled to fit, so it keeps its proportions at every screen size. Phones get their own portrait layout. The copy column also carries the official AWS Certified Solutions Architect – Associate badge, which links to Credly.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (On Windows PowerShell, use `npm.cmd` if `npm` is blocked.)

## Editing content

- [`data/profile.ts`](data/profile.ts) holds the résumé content: intro, disciplines, experience (with highlights), skills (including the "AI & agentic coding" group), certifications and contact links. Add an `email`, `linkedin` or `resume` link under `links` to show it in the contact section.
- `profile.projects` in the same file drives the "Selected work" stack and one page per project at `/projects/<slug>`. Set `client: true` for NDA work: its preview is a blurred, code-made mock (`preview`: `web`, `mobile` or `tv`) and the Preview button shows a "preview locked" notice instead of screens. Client projects use codenames and have no links. Never put a real client product name here.
- [`constants/strings.ts`](constants/strings.ts) holds all other UI text, including the hero scene's copy and the "How I build with AI" panel (its `.claude/` file tree and MCP list).
- [`public/badges/aws-saa.png`](public/badges/aws-saa.png) is the official AWS SAA badge from Credly.
- [`constants/colors.ts`](constants/colors.ts) holds every color, and CSS reads them as `var(--color-*)`. The palette borrows from the stack: Expo ink, React blue (frontend), Expo indigo (mobile) and Node green (backend).
- [`constants/tools.ts`](constants/tools.ts) maps tool names to their official logos from [Simple Icons](https://simpleicons.org). Add a name there and every chip that uses it shows the logo.

## Structure

Each section is a folder in `components/` with up to five files: `<name>Screen.tsx`, `<name>Styles.module.css`, `<name>Types.ts`, `use<Name>.ts` and `index.ts`. See [`.claude/rules/component-structure.md`](.claude/rules/component-structure.md).

| Section         | What it does                                                                                                               |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `hero`          | Pinned "Build" scene with a Sketch → Code → Build → Ship stepper and the AWS badge                                         |
| `about`         | Intro, stats, the three disciplines, a 3D tilt "build badge" and the "How I build with AI" panel                           |
| `projects`      | Stacked project cards: each scroll gesture or swipe slides exactly one card, and the stack scrolls off together at the end |
| `skills`        | Bento grid of skill groups colored by discipline, with a full-width "AI & agentic coding" card                             |
| `experience`    | Timeline whose line draws as you scroll; certifications and education                                                      |
| `contact`       | Closing call to action and links                                                                                           |
| `projectDetail` | The `/projects/<slug>` page                                                                                                |
| `nav`, `cursor` | Floating nav with cross-page links; custom cursor for mouse users                                                          |

Every section shares one container: content up to `--max` (80rem) with the same `--gutter`, so edges line up at every width.

Animations move composited layers (`will-change: transform`), so card slides hold 60fps.

All motion turns off for visitors who set "reduce motion" in their OS. The hero then shows the finished app without pinning.
