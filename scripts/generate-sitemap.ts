// Use ES Module Imports (will be compiled to CJS)
import fs from 'fs';
import path from 'path';
import { generateSitemap } from '../src/utils/sitemap'; // Use standard import path

// __dirname will be available after CJS compilation

const generateAndSaveSitemap = () => {
  console.log('Generating sitemap...');
  try {
    const sitemapContent = generateSitemap();
    // Go up two levels from dist-scripts/scripts to project root
    const publicPath = path.resolve(__dirname, '..', '..', 'public'); 
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