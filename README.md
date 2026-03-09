## Masjidly Showcase SPA

This is the marketing SPA for **Masjidly** – a prayer time display and announcement system for masajid.  
It’s built with **Vue 3 + Vite**, using `<script setup>` SFCs and a content-first structure (`src/data/siteContent.js`).

### Tech stack
- **Frontend**: Vue 3, Vite
- **Styling**: hand-rolled CSS per section, shared design tokens in `App.vue`
- **Assets**:
  - Pattern: `public/ink-pattern.svg`
  - Showcase screenshots: `public/showcase/display.png`, `cms.png`, `wall.png`

### Local development
```bash
npm install
npm run dev
```
Then open the URL printed by Vite (usually `http://localhost:5173`).

### Content editing
- All copy and showcase configuration live in `src/data/siteContent.js`.
- Section components are presentational and read from that file only.
