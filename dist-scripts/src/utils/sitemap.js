"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSitemap = void 0;
const seo_1 = require("./seo");
const routes = [
    { path: '/', changefreq: 'weekly', priority: 1.0 },
    { path: '/about', changefreq: 'monthly', priority: 0.8 },
    { path: '/services', changefreq: 'monthly', priority: 0.9 },
    { path: '/projects', changefreq: 'weekly', priority: 0.9 },
    { path: '/contact', changefreq: 'monthly', priority: 0.7 },
];
const generateSitemap = () => {
    const today = new Date().toISOString();
    const urls = routes.map(route => ({
        loc: `${seo_1.BASE_URL}${route.path}`,
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
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xmlUrls}
    </urlset>`;
};
exports.generateSitemap = generateSitemap;
