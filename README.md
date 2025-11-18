# VitAir — Minimal Product Site (Vite + React + Tailwind)

This is a minimal, white, editorial site for the VitAir product family. It includes a single-page overview plus product subpages rendered from structured data.

What you get
- Single-page sections: Hero, Product Suite, How It Works, Key Features, Use Cases, App & Platform, Compare Products, FAQ, Contact/Demo
- Product pages at /products/:slug
- Data-first content from /public/data/products.json
- Accessible, responsive UI with soft shadows and a subtle tech-blue accent
- SEO tags helper and sitemap.xml

Getting started
1. Install dependencies and start the dev server
   - Already running in this environment. Locally: `npm install && npm run dev`
2. Open the app
   - Development server runs on port 3000
3. Build for production
   - `npm run build` then `npm run preview`

Data model
- products.json fields: name, oneLiner, long, coreFunctions[], specs{ key:value }, modes?, useCases[], designEditions?

Notes
- Images are placeholders in /public. Product image paths follow `/placeholder-<slug>.jpg` with fallback.
- No medical claims. “Under development” appears in the footer.
- Contact form is client-only and does not send email in this demo.

Deploy
- Any static host that supports Vite builds. Export then deploy the `dist` folder.
