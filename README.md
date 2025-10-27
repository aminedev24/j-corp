# J-Corp Venture Hub

A React + Vite single-page experience introducing J-Corp (Johnny Corp) and its focus pillars across IT innovation, sports ventures, food concepts, and essential hands-on services.

## Prerequisites

- Node.js >= 18
- npm (bundled with Node) or pnpm/yarn if you prefer

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Launch the development server:
   ```bash
   npm run dev
   ```
3. Open the printed local URL (defaults to http://localhost:5173/) to explore and iterate.

## Build For Production

```bash
npm run build
npm run preview
```

`npm run preview` serves the built assets locally so you can verify before deploying to your hosting provider of choice.

## Customize The Content

- `src/App.tsx` orchestrates the main layout, including focus areas, the GitHub portfolio showcase, and service highlights.
- `src/components/*.tsx` contains the hero, grid sections with media, portfolio cards with preview media & repo/page links, service highlights, contact CTA with external links, and the footer with partner URLs.
- `src/styles.css` centralizes the landing-page styling. Adjust colors, imagery, typography, or spacing to match your brand.

## Deployment Tips

- Any static hosting platform that supports serving the `dist` directory (Netlify, Vercel, Cloudflare Pages, S3/CloudFront, etc.) will work.
- For bundled backends (e.g., PHP on XAMPP), build the app and copy the `dist` files into your public web root.

### Deploy to GitHub Pages

1. Create a GitHub repository (e.g., `j-corp-site`) and push this project to the `main` branch.
2. Update `vite.config.ts` with your repo name as the base path:
   ```ts
   export default defineConfig({
     base: "/j-corp-site/",
     plugins: [react()],
     server: { port: 5173 }
   });
   ```
   Replace `j-corp-site` with your actual repository name. If you plan to use a custom domain, you can keep `base` as `"/"`.
3. Install the GitHub Pages helper and add deployment scripts:
   ```bash
   npm install --save-dev gh-pages
   npm pkg set scripts.predeploy="npm run build"
   npm pkg set scripts.deploy="gh-pages -d dist"
   ```
4. Deploy by running `npm run deploy`. This publishes the contents of `dist` to the `gh-pages` branch, which GitHub serves automatically.
5. In the repository settings, set GitHub Pages to use the `gh-pages` branch. Your site will appear at `https://<username>.github.io/<repo>/`.
