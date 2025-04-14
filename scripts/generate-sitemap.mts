import fs from 'fs';
import path from 'path';
import { generateSitemap } from '../src/utils/sitemap.ts'; // Use original path

// Get the directory name in an ES module context
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateAndSaveSitemap = () => {
  console.log('Generating sitemap...');
  try {
    const sitemapContent = generateSitemap();
    // Use ES Module __dirname
    const publicPath = path.resolve(__dirname, '..', 'public'); 
    const sitemapPath = path.join(publicPath, 'sitemap.xml');

    // Ensure public directory exists
    if (!fs.existsSync(publicPath)) {
      fs.mkdirSync(publicPath, { recursive: true });
      console.log(`Created directory: ${publicPath}`);
    }

    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log(`Sitemap successfully generated and saved to ${sitemapPath}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1); // Exit with error code
  }
};

generateAndSaveSitemap(); 