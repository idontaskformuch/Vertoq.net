import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vertoq.net',
  integrations: [
    sitemap({
      // "/" är en noindex JS-redirect till /{lang}/ -- att lista den i
      // sitemapen skulle säga "indexera mig" samtidigt som robots-metan
      // säger motsatsen. Uteslut den, de riktiga /en/, /sv/ osv-sidorna
      // täcks redan via de vanliga statiska rutterna.
      filter: (page) => new URL(page).pathname !== '/',
    }),
  ],
});