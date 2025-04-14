import fs from 'fs';
import path from 'path';
// Note: require() might handle the import from seo.ts differently depending on tsconfig.
// We might need to adjust this if there's a follow-up error.
import { generateSitemap } from '../src/utils/sitemap';
// Get the directory name in an ES module context
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const generateAndSaveSitemap = () => {
    console.log('Generating sitemap...');
    try {
        const sitemapContent = generateSitemap();
        const publicPath = path.resolve(__dirname, '..', 'public'); // Assumes script is in /scripts
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
