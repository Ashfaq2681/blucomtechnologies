import fs from 'fs';
import { sitemapRoutes } from './sitemap-routes.js';

const baseUrl = 'https://blucomtechnologies.com';

const sitemapEntries = sitemapRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

fs.writeFileSync('sitemap.xml', sitemap, 'utf-8');
console.log('Sitemap generated successfully!');