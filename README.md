# MP Studio — Business Profile

A responsive business-facing software development website built with plain HTML, CSS and JavaScript.

## Files

- `index.html` — complete website structure and content
- `css/style.css` — responsive design and visual system
- `js/script.js` — navigation, scroll progress, reveal animations and project inquiry modal

## Before publishing

1. Replace `MP Studio` with your final business/brand name.
2. Replace `hello@mohitpatel.dev` with your real business email.
3. Replace the project inquiry links with real live URLs when the projects are public.
4. Add real project screenshots/case-study pages when available.
5. Add your final domain, favicon and social links.
6. Add analytics only after deciding which privacy/cookie approach you want.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static web server.

The site is intentionally framework-free so it can be deployed directly to GitHub Pages, Netlify, Vercel or similar static hosting.


## Business profile + developer profile

The site now has two connected layers:

- `index.html` — business-facing homepage shown first.
- `developer-profile/developer-profile.html` — detailed technical/developer profile.
- The developer page also links to the existing portfolio at `https://mohittpattel.github.io/`.

### Recommended GitHub Pages structure

If this project becomes the new repository/site at your domain:

```text
/
├── index.html                  # Business profile
├── developer-profile/
│   └── developer-profile.html  # Developer profile
├── css/
│   └── style.css
└── js/
    └── script.js
```

The same domain can therefore expose:

- `https://your-domain/` → Business profile
- `https://your-domain/developer-profile/developer-profile.html` → Developer profile

You can later rename to `developer-profile/index.html` if you prefer a cleaner URL such as `/developer-profile/`.
