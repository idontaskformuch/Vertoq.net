import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// VIKTIGT: byt ut "site" till din riktiga domän innan du deployar.
// Det styr canonical-URLer, sitemap.xml och hreflang-länkar.
export default defineConfig({
  site: 'https://vertoq.net',
  integrations: [], // Ta bort
});
