"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Use ES Module Imports (will be compiled to CJS)
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sitemap_1 = require("../src/utils/sitemap"); // Use standard import path
// __dirname will be available after CJS compilation
const generateAndSaveSitemap = () => {
    console.log('Generating sitemap...');
    try {
        const sitemapContent = (0, sitemap_1.generateSitemap)();
        // __dirname will be correct in the CJS context post-compilation
        const publicPath = path_1.default.resolve(__dirname, '..', 'public');
        const sitemapPath = path_1.default.join(publicPath, 'sitemap.xml');
        // Ensure public directory exists
        if (!fs_1.default.existsSync(publicPath)) {
            fs_1.default.mkdirSync(publicPath, { recursive: true });
            console.log(`Created directory: ${publicPath}`);
        }
        fs_1.default.writeFileSync(sitemapPath, sitemapContent);
        console.log(`Sitemap successfully generated and saved to ${sitemapPath}`);
    }
    catch (error) {
        console.error('Error generating sitemap:', error);
        process.exit(1); // Exit with error code
    }
};
generateAndSaveSitemap();
