# Iron Logistics — Website

One-page marketing website for Iron Logistics, a landscaping, hardscaping, and debris removal company based in Wilmington, NC. Founded by Isaiah Ellis.

## Project Overview

Static single-page site built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build tools — deploy anywhere that serves static files.

## Folder Structure

```
ironlogistics/
├── index.html          # Single-page site — all sections
├── css/
│   └── styles.css      # All styles, mobile-first
├── js/
│   └── main.js         # Navigation, form validation, animations
├── images/             # All site images (renamed from PPTX exports)
├── robots.txt
├── sitemap.xml
└── README.md
```

## How to Update Images

All images live in `images/`. Replace any file with a new version using the same filename and the change takes effect immediately. If you rename a file, update the corresponding `src` attribute in `index.html`.

Key images:
- `hero-background.jpg` — hero section full-bleed background
- `logo-icon.png` — nav logo (255×84 px)
- `founder-photo.jpg` — Isaiah's photo in the About section
- `service-*.jpg` — Who We Serve section card images
- `project-*.jpg` — Our Work gallery images

## How to Update Contact Info

Open `index.html` and search for `[Phone — update before launch]` and `[Email — update before launch]`. Replace both placeholders with Isaiah's actual phone and email before going live.

Also update the `href` values on the social media links (Facebook, Instagram, Google) near the bottom of the contact section.

## Deployment

This is a static site — no server required.

**Netlify (recommended):** Drag the project folder into [app.netlify.com/drop](https://app.netlify.com/drop) or connect the GitHub repo.

**GitHub Pages:** Push to a repo, enable Pages in Settings → Pages → Deploy from branch.

**Any static host:** Upload all files to the root of your web host. Ensure `index.html` is served at the domain root.

## Notes

- Contact phone and email are placeholders — update before launch
- Social media links (Facebook, Instagram, Google) use generic URLs — update with Isaiah's actual profile links
- The faith-based messaging in the Faith Model section is positioned as a values statement; adjust prominence based on client preference
- `logo-icon.png` and `logo-icon-alt.png` are the same file — both sourced from the Iron Logistics logo in the original deck
