# Youssef Studio Website

Premium dark-themed agency website for selling small business websites, booking systems, and AI automation packages.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations)
- React Router (5 pages)
- Lucide icons

## Structure

```
/
├─ index.html
├─ vite.config.ts
├─ tailwind.config.js
├─ vercel.json              # Vercel deployment config
├─ public/
│  └─ hero.mp4              # Hero background video — replace this file to swap globally
└─ src/
   ├─ main.tsx
   ├─ App.tsx               # Router + page transitions
   ├─ index.css
   ├─ components/
   │  ├─ Navbar.tsx
   │  ├─ Footer.tsx
   │  ├─ VideoBackground.tsx  # Reusable cinematic video bg
   │  ├─ FloatingCTA.tsx
   │  ├─ MobileCTABar.tsx
   │  ├─ Counter.tsx
   │  └─ FAQ.tsx
   └─ pages/
      ├─ Home.tsx
      ├─ Pricing.tsx
      ├─ Reviews.tsx
      ├─ Portfolio.tsx
      └─ Contact.tsx
```

## How to Replace the Hero Video

Drop a new `.mp4` at `public/hero.mp4` (same name) and redeploy. To use a different filename, pass `src="/your-file.mp4"` to `<VideoBackground>`.

## How to Edit Pricing / Copy

- Pricing tiers: `src/pages/Pricing.tsx` (`tiers` array near the top)
- Reviews: `src/pages/Reviews.tsx` (`reviews` array)
- Portfolio entries: `src/pages/Portfolio.tsx` (`works` array)
- FAQ: `src/components/FAQ.tsx`
- Contact info: `src/components/Footer.tsx`, `src/pages/Contact.tsx`

## Local Dev

```bash
npm install
npm run dev
```

## Deploy to Vercel

The repo root is the build root. Push to GitHub and import in Vercel — `vercel.json` is preconfigured for Vite + SPA routing. No extra setup required.
