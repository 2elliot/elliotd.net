# Elliot — Portfolio Starter

This is a starter React + Vite portfolio with a simple project CMS (data file), routing, and a retro-adventure inspired UI.

## Quick start

1. `npm install`
2. `npm run dev`

### Adding a project
Edit `src/data/projects.js` — add an object with `id, title, type, date, thumbnail, summary, content, links, media`.

### Deploying to GitHub Pages
If you deploy to a subpath (username.github.io/repo), set `base` in `vite.config.js` to `/repo/` and build; copy the `dist` output to your gh-pages branch or use a deployment action.
