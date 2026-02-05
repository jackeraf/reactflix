# ReactFlix

A responsive movie discovery app built with **React** (TypeScript). Browse films by category (Action, Comedy, Sci‑Fi), view details, and save favorites to a **wishlist** (persisted in `localStorage`). Supports **SSR** (server-side rendering) for production.

---

## Features

- **Movie categories** – Carousels for Action, Comedy, and Sci‑Fi
- **Detail page** – Poster, description, year, runtime, rating, director
- **Wishlist** – Add/remove films; persisted in `localStorage`
- **Responsive layout** – Mobile and desktop (Netflix-style UI)
- **SSR** – Optional server-side rendering for production
- **Lazy loading** – Route-based code splitting for Detail and Wishlist pages

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** (dev server and build)
- **React Router 6**
- **Zustand** (wishlist store)
- **TanStack Query** (used by app shell)
- **SCSS** (styles)
- **Express** (SSR server)
- **Vitest** + **React Testing Library** (tests)

---

## Requirements

- **Node.js** – **v18.0.0 or higher** (v20+ recommended for Vite 7)
- **npm** (or yarn / pnpm)

Check your version:

```bash
node -v
```

If needed, install a supported Node version via [nvm](https://github.com/nvm-sh/nvm) 

---

## Local development

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open the URL shown in the terminal (e.g. **http://localhost:5173/**).

### 3. (Optional) Environment variables

- **Port (SSR)** – For production SSR you can set `PORT` (default `5174`) in a `.env` file in the project root.
- The app uses **mock film data**; no API key is required for development or production.

---

## Production

### Option A: Static build (SPA only)

Build and serve the client-only app:

```bash
npm run build
npm run preview
```

Preview is usually at **http://localhost:4173/**.

To deploy: upload the contents of the **`dist/`** folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

### Option B: SSR (recommended for production)

Build both client and server, then run the Node server:

```bash
npm run build:ssr
npm run serve:ssr
```

The app will be available at **http://localhost:5174/** (or the value of `PORT` in `.env`).

To deploy SSR:

1. Run `npm run build:ssr` on the server or in CI.
2. Run `node dist-ssr/server.js` (or `npm run serve:ssr`).
3. Ensure the process has access to both **`dist/`** (client assets) and **`dist-ssr/`** (server bundle). The server reads the HTML template from `dist/index.html` and serves static files from `dist/`.

---

## Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start Vite dev server                |
| `npm run build`   | Build client bundle → `dist/`        |
| `npm run preview` | Serve `dist/` locally                |
| `npm run build:ssr` | Build client + SSR server bundle  |
| `npm run serve:ssr` | Run SSR server (`dist-ssr/server.js`) |
| `npm run test`    | Run tests (Vitest)                    |
| `npm run test:server` | Run server tests only             |
| `npm run lint`    | Run ESLint                           |

---

## Tests

```bash
npm test
```

Watch mode: `npm run test:watch`  
Server tests only: `npm run test:server`

---

## Troubleshooting

| Issue | What to do |
|--------|------------|
| **`crypto.getRandomValues is not a function`** (tests) | Use Node **18+** (or 20+). Older Node can cause this with Vite/Vitest. |
| **Port in use** | Run dev on another port: `npm run dev -- --port 5174` |
| **Modules not found** | Delete `node_modules` and run `npm install` again |
| **SSR: blank or wrong HTML** | Ensure you ran `npm run build:ssr` and that `dist/` and `dist-ssr/` exist; the server needs both. |

---
