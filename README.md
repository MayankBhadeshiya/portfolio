# portfolio

Personal portfolio site for Mayank Bhadeshiya, built with Next.js.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing content

All text on the site — intro, experience, skills, certifications, contact links and projects — lives in [`data/profile.ts`](data/profile.ts).

- Add an `email`, `linkedin` or `resume` link under `links` to show it in the contact section.
- Add entries to `projects` to show the "Things I've built" section (it stays hidden while the list is empty).
- Add a `summary` to any job in `experience` to describe what you did there.

## Structure

- `app/page.tsx` — the page layout
- `app/globals.css` — all styles and color tokens
- `components/PhoneStack.tsx` — the phone mockups in the hero
