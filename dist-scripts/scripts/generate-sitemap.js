"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Use CommonJS require
const fs = require('fs');
const path = require('path');
// Adjust require path relative to the compiled output location
const { generateSitemap } = require('../src/utils/sitemap');
// __dirname is globally available in CommonJS
const generateAndSaveSitemap = () => {
    console.log('Generating sitemap...');
    try {
        const sitemapContent = generateSitemap();
        // Use global __dirname directly
        const publicPath = path.resolve(__dirname, '..', 'public');
        const sitemapPath = path.join(publicPath, 'sitemap.xml');
        // Ensure public directory exists
        if (!fs.existsSync(publicPath)) {
            fs.mkdirSync(publicPath, { recursive: true });
            console.log(`Created directory: ${publicPath}`);
        }
        fs.writeFileSync(sitemapPath, sitemapContent);
        console.log(`Sitemap successfully generated and saved to ${sitemapPath}`);
    }
    catch (error) {
        console.error('Error generating sitemap:', error);
        process.exit(1); // Exit with error code
    }
};
generateAndSaveSitemap();
