# Shaina Portfolio

Static multipage portfolio for Shaina Gonzales. The GitHub Pages entry point is `index.html`; relative links work with both a custom domain and repository hosting.

## Pages

- `index.html`: concise introduction and three featured projects.
- `work.html`: complete project index.
- `project-*.html`: eight dedicated project stories.
- `about.html`: background, approach, and experience.
- `contact.html`: email, LinkedIn, resume, and UX portfolio.

`Home.css` defines the shared cream/plum/coral visual design on top of the base styles in `Style.css`. `Site.js` handles mobile navigation and redirects legacy case-study hashes. `Script.js` retains original portfolio data for reference and the Safari extension resources.

## Local preview

Run `python3 -m http.server 8765 --bind 127.0.0.1` from this directory, then open `http://127.0.0.1:8765/`.

Project thumbnails are labeled representative concepts. They are not production screenshots. The UX portfolio is an explicit external destination.
