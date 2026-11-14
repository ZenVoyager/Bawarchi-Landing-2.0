# Bhawarchi

The marketing site for Bhawarchi, the restaurant management and QR ordering software. It's built with React 18 and Vite and has four pages:

| Page | File | What it holds |
|---|---|---|
| Home | `index.html` → `src/pages/Home.jsx` | Hero with the live orders window, the order screen, four features, the floor view and the 3 setup steps |
| Features | `features.html` → `src/pages/Features.jsx` | All nine features in three groups: guests, floor and office |
| Pricing | `pricing.html` → `src/pages/Pricing.jsx` | Starter, Growth and Enterprise, a comparison table and pricing questions |
| How it works and signup | `how-it-works.html` → `src/pages/HowItWorks.jsx` | The six guest steps and the signup form |

## Run it

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build in dist/, every page prerendered to static HTML
npm run preview   # serve the built dist/ folder
```

You can deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages). It has to be served from the domain root, because the pages link to `/assets/...`.

## Where to change things

- **Prices, plans and the feature split:** everything is in `src/data/site.js` (`PRICES`, `PLANS`, `COMPARE`). The prices there are **sample prices**: change them once and every page updates. In the code, every price is marked `data-assumed`.
- **The main button text and link:** `MAIN_ACTION` and `SIGNUP_HREF` in `src/data/site.js`.
- **The product screens** are the real design screenshots from `UI Designs Screenshots/`. `npm run shots` (`scripts/shots.mjs`) crops and shrinks them into WebP files in `public/shots/` and lists their sizes in `src/data/shots.json`. To swap a picture, or change what part of a screen shows, edit the list in `scripts/shots.mjs` and run `npm run shots` again. The pages place them with `<Screen>` (admin) and `<PhoneShot>` (guest's phone) from `src/components/Shot.jsx`. The pricing page's invoice is still live HTML (`src/components/ui/Ui.jsx`), because it follows the prices in `site.js`.
- **Nav and footer:** `src/components/Shell.jsx`.
- **Page styles:** `src/styles/site.css`. The design system (grid, type, buttons, cards, motion) is the taste-skill kit in `public/assets/`. Don't edit it; override it in `site.css`.
- **Colours:** the `:root` block at the top of each HTML file holds warm off-white `#faf6ef`, charcoal `#1f1a15` and orange `#c2410c`. The orange is a shade deeper than a bright orange so white text on buttons passes contrast.
- **Fonts:** Urbanist (headings and text) and DM Mono, self-hosted in `public/fonts/`.

## Still to connect before launch

1. **Signup form:** it currently opens a `mailto:hello@bhawarchi.example` email. Put your form endpoint in the form's `data-endpoint` attribute in `src/pages/HowItWorks.jsx`, either your own API or a service like Formspree. The kit's script will then post to it and show the confirmation.
2. **Email addresses:** `hello@bhawarchi.example` and `sales@bhawarchi.example` are stand-ins. Search the project for `.example` to find every one.
3. **Domain:** once it's live, add `<link rel="canonical">` to each HTML head (there's a comment where it goes).
4. **Real prices** in `src/data/site.js`, and the final split of features between plans.
5. **Privacy and Terms pages** if you need them (left out for now to keep the site at four pages).

## How it was built

The site follows the `design-taste-frontend` skill (taste-skill 2.5.1). Its layout, palette, fonts, hero types and motion moments were dealt by the skill's own scripts, and every page was checked with its browser-based finish gate. The plan, deal and moment for each page are in a comment at the top of each `src/pages/*.jsx` file.
