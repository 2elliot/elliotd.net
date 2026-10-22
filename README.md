# elliotd.net

Personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install      # once
npm run dev      # preview at http://localhost:4321 while editing
npm run build    # build the site into dist/
```

## Adding a project

Add a Markdown file to `src/content/projects/`. Its file name becomes its URL (`nocte.md` → `/projects/nocte/`). The fields are listed in `src/content.config.ts`, and a typo or missing field stops the build with an error.

```markdown
---
title: My Hackathon Project
type: hackathon          # game | software | hackathon | research
start: 2026-10           # YYYY or YYYY-MM; add `end` for longer projects
summary: One or two sentences for the project card.
tags: [Python, React]
poster: /images/my-project/Poster.png
links:
  - label: View on Devpost    # the first link is the main button
    url: https://devpost.com/...
featured: true           # also show it on the home page
---

## Overview

Write the page in Markdown. Put an image on its own line, with an optional size:

![Alt text](/images/my-project/Screenshot.png "medium")
```

- Image sizes are `small`, `medium`, `large` or `full`. If a lighter `Screenshot-small.webp` copy sits next to the image, it's shown on the page, and clicking it opens the full image.
- Links to other sites open in a new tab. Links to `/topics/...` get the dashed topic style.
- If you write nothing below the front matter, the project gets no page, and its card links straight to its first link.
- `hidden: true` builds the page but leaves it out of every list.

Images, videos, PDFs and the Guess Who game live in `public/`, and are served at the same paths (`public/images/x.png` → `/images/x.png`).

Topic pages (teams, competitions, events) work the same way, in `src/content/topics/`.
