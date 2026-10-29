# Alfred Tackie-Quaye — Portfolio website

A portable, dependency-free first version of Alfred's professional portfolio. Built with HTML, CSS and JavaScript so it can be opened locally, hosted as static files, or migrated to Next.js later.

## Preview

Open `index.html` in a browser. For a local server, run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Deploy

Upload the contents of this folder to a static hosting service (e.g. Vercel, Netlify, or GitHub Pages). No build step is required. Do not claim a production deployment until it has been performed and tested.

## Contact form

**Current implementation:** validated form that composes a `mailto:` message. It depends on the visitor's email app and does NOT send submissions directly to the website owner. Before launch, consider integrating a trusted form backend with spam protection, rate limiting, a privacy notice, and end-to-end testing. See `docs/DEPLOYMENT_GUIDE.md`.

## Content integrity

Certifications and dates are user-provided and have **not** been independently verified. Add official credential verification URLs before describing them as verified. No work history duration, photograph, project outcomes or testimonials are invented.

## Files

- `index.html` — semantic content and page sections
- `styles.css` — responsive design system
- `script.js` — navigation and email composition
- `docs/` — brief, design decisions, status, AI handoff and deployment instructions
