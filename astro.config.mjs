// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isFinalProduction = process.env.IS_FINAL === 'true';

const siteUrl = isFinalProduction ? 'https://de-parelvisser.be' : (process.env.SITE_URL || 'https://be-skrt.github.io');

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: isFinalProduction ? '/': '/De-Parelvisser',
  integrations: [sitemap()],
});