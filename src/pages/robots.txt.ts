import type { APIRoute } from 'astro';
import withBase from '../utils/withBase';

const robotsTxt = (sitemapURL: string) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL}
`.trim();

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(withBase('sitemap-index.xml'), site).href;
  
  return new Response(robotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
