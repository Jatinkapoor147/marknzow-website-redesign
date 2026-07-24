# Marknzow™ Website

Optimized website for **Marknzow™ - Creative Studio & Growth Partner**, ready for hosting on **GitHub Pages**.

---

## 🚀 How to Host on GitHub Pages

### Option 1: Direct GitHub Web Upload (Fastest)

1. Go to [GitHub.com](https://github.com) and click **New Repository**.
2. Name your repository (e.g. `website` or `marknzow`).
3. Set visibility to **Public** and click **Create repository**.
4. Drag and drop all files from this folder into the GitHub repository interface (`index.html`, `404.html`, `.nojekyll`, `robots.txt`, `sitemap.xml`, etc.).
5. Commit the files.
6. Go to **Settings** > **Pages** in your repository.
7. Under **Build and deployment** > **Branch**, select `main` (or `master`) and `/ (root)`.
8. Click **Save**. Your site will be live within 1–2 minutes!

---

## 📂 Repository Organization

| File / Folder | Purpose |
|---|---|
| [`index.html`](index.html) | Main optimized HTML file with preloaded CDN assets, GA4 tracking, and badge removal |
| [`404.html`](404.html) | Fallback SPA router handler for client-side navigation on GitHub Pages |
| [`js/analytics-helper.js`](js/analytics-helper.js) | Enhanced GA4 traffic origin tracking, SPA route views, and CTA click attribution |
| [`js/preserve-params.js`](js/preserve-params.js) | Preserves UTM parameters across internal link navigation |
| [`.nojekyll`](.nojekyll) | Bypasses Jekyll build processing to serve all assets as-is |
| [`.gitignore`](.gitignore) | Excludes system and temp files from Git commits |
| [`robots.txt`](robots.txt) | Search engine crawler rules |
| [`sitemap.xml`](sitemap.xml) | Complete SEO sitemap for all 11 pages |

---

## ✨ Optimizations Included

- **Google Analytics 4 Integrated (`G-PXVE0W3T5S`)**: Configured with advanced traffic origin attribution (UTM parameters, referrers, Google Ads `gclid`, Meta Ads `fbclid`), SPA page view tracking, and CTA click attribution.
- **No "Made in Framer" Badge**: Completely removed from source code and DOM.
- **Fast Load Times**: Added `preconnect` & `dns-prefetch` for CDN assets (`framerusercontent.com`).
- **Clean Meta & SEO**: Updated meta titles, open graph descriptions, and viewport settings.
- **GitHub Pages SPA Routing Support**: Includes custom `404.html` redirect logic for smooth client-side routing across subpages (`/work`, `/gallery`, `/contact`, etc.).
