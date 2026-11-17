# Deploy Kaliyona on Vercel

Kaliyona is a **Vite + React** SPA. Deploy the **`kaliyona/web`** folder as the Vercel project root (not the parent `fun` folder).

## 1. Push code to GitHub

From `kaliyona/web` (or the repo that contains it):

```bash
git init
git add .
git commit -m "Kaliyona LTA exam prep — ready for Vercel"
git remote add origin https://github.com/YOUR_USER/kaliyona.git
git push -u origin main
```

## 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import the GitHub repository.
3. **Root Directory:** set to `web` if the repo root is `kaliyona/`, or `.` if the repo is only the `web` app.
4. Vercel should detect **Vite** automatically.

| Setting            | Value              |
| ------------------ | ------------------ |
| Framework Preset   | Vite               |
| Build Command      | `npm run build`    |
| Output Directory   | `dist`             |
| Install Command    | `npm install`      |
| Node.js Version    | 20.x or 22.x       |

`vercel.json` in this folder already sets build output, SPA rewrites, and asset caching.

## 3. Verify after deploy

- Home loads: `/`
- Deep link works: `/subjects/lta/p/lta-2025/q/11` (refresh should not 404)
- Backbencher / Full answer toggles work
- Optional images: `public/backbencher/*.webp` are served at `/backbencher/...`

## 4. Local production check

```bash
npm run build
npm run preview
```

Open the URL shown (usually `http://localhost:4173`) and test the same routes.

## Environment variables

None required for the current static app (all answers are in the repo). If you add an API later, set variables in **Vercel → Project → Settings → Environment Variables**.

## Custom domain

Vercel → **Domains** → add your domain → follow DNS instructions.