import type { APIRoute } from 'astro';

const robotsTxt = (sitemapURL: string) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL}
`.trim();

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site).href;
  
  return new Response(robotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
