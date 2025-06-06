import { BASE_URL, normalizeUrl } from './seo';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const routes = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/about', changefreq: 'monthly', priority: 0.8 },
  { path: '/services', changefreq: 'monthly', priority: 0.9 },
  { path: '/projects', changefreq: 'weekly', priority: 0.9 },
  { path: '/contact', changefreq: 'monthly', priority: 0.7 },
  { path: '/ai-assistant', changefreq: 'monthly', priority: 0.8 },
] as const;

export const generateSitemap = (): string => {
  const today = new Date().toISOString();
  
  const urls: SitemapUrl[] = routes.map(route => ({
    loc: normalizeUrl(route.path),
    lastmod: today,
    changefreq: route.changefreq,
    priority: route.priority
  }));

  const xmlUrls = urls
    .map(url => `
      <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>
    `)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${xmlUrls}
    </urlset>`;
}; 