# Hisham Ahmad · portfolio

Personal portfolio site. React, TypeScript, Vite, and one runtime dependency beyond React (`react-router-dom`). No UI library, no CSS framework.

Not deployed. Run it locally:

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check and produce dist/
npm run preview    # serve the production build locally
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/content/site.ts` | Your name, headline, intro, current activities, education, and contact links. **Fill in `links` here.** |
| `src/content/experience.ts` | The Experience list on the home page, newest first. |
| `src/content/projects/*.ts` | One file per case study. Same shape for all of them. |
| `src/content/projects/index.ts` | Display order. First project is the flagship. |
| `src/content/types.ts` | The TypeScript shapes the content must match. |
| `src/pages/` | Home, case study page, 404. |
| `src/components/` | Layout, project card, status chip, small hooks. |
| `src/styles/global.css` | All styling. Design tokens at the top; dark mode follows the system setting. |

## Editing a case study

Open the project's file in `src/content/projects/`. Each has the same seven sections (problem, role, approach, decisions, challenges, evidence, currentStatus). Each section is a list of paragraphs plus optional bullets. Change the text, save, and the dev server reloads.

## Adding a project

1. Copy `src/content/projects/launchpad.ts` to a new file.
2. Change `slug`, `name`, and the content. The slug becomes the URL: `/projects/<slug>`.
3. Import it in `src/content/projects/index.ts` and add it to the `projects` array.

TypeScript will refuse to build if a required field is missing.

## House rules for the content

- No private repository links. `links` is for public things only.
- Status is one of `in-development`, `delivered`, `live`. The `statusNote` next to it should be honest.
- No invented metrics. If a number is on the site, it should be something you can back up.
