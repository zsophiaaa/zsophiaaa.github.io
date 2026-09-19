# Sophia Zhang — Personal Website

A clean, minimal personal website built with plain HTML & CSS. No build step required.

## Structure

- `index.html` — home page (About, Education, Publications, Experience, Projects, Awards, Contact)
- `projects.html` — the full projects list
- `projects.js` — the project data; both pages render their cards from this, so add new projects here
- `style.css` — styling (light/dark theme)
- `cv.tex` → `CV.pdf` — CV source; rebuild with `./make.sh` (needs BasicTeX/MacTeX)

## Editing

Just open `index.html` and replace the placeholder text with your own. Everything
is plain HTML, so changes show up the moment you reload the page in a browser.

## Local preview

Open `index.html` directly in your browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

This repo is set up to deploy via GitHub Pages from the `main` branch root.
Once pushed, enable Pages under **Settings → Pages → Source: main / root**.
The site is live at <https://zsophiaaa.github.io/>.
