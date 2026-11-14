import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Four real pages (no client-side router): each HTML file is its own React entry, so every page
// has its own URL, title and share tags, and the build prerenders each one to static HTML.
// The design kit (the taste-skill system) lives in public/assets and is served as plain files at
// /assets/...; Vite's own bundles go to /static so the two never mix.
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'static',
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        features: resolve(__dirname, 'features.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        howItWorks: resolve(__dirname, 'how-it-works.html'),
      },
    },
  },
});
