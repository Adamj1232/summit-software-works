import { FC, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../../contexts/ThemeContext';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  imageUrl?: string;
}

const generateMetaTags = (
  title = 'Summit Software Works - Web & Mobile App Development',
  description = 'Summit Software Works specializes in building innovative web and mobile applications with cutting-edge technology and exceptional user experience.',
  keywords = 'web development, mobile app development, software development, react, node.js, typescript, summit software works',
  url = 'https://summitsoftwareworks.com',
  imageUrl = 'https://summitsoftwareworks.com/og-image.png'
) => ({
  title: `${title} | Summit Software Works`,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  ogUrl: url,
  ogImage: imageUrl,
});

const MetaTags: FC<MetaTagsProps> = memo(({ title, description, keywords, url, imageUrl }) => {
  const { isDarkMode } = useTheme();
  const metaTags = generateMetaTags(title, description, keywords, url, imageUrl);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en" />
      <title>{metaTags.title}</title>
      <meta name="title" content={metaTags.title} />
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
      <meta name="author" content="Summit Software Works" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={isDarkMode ? '#0F172A' : '#F3F4F6'} />
      <meta name="rating" content="general" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaTags.ogUrl} />
      <meta property="og:title" content={metaTags.ogTitle} />
      <meta property="og:description" content={metaTags.ogDescription} />
      <meta property="og:image" content={metaTags.ogImage} />
      <meta property="og:site_name" content="Summit Software Works" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaTags.ogUrl} />
      <meta property="twitter:title" content={metaTags.ogTitle} />
      <meta property="twitter:description" content={metaTags.ogDescription} />
      <meta property="twitter:image" content={metaTags.ogImage} />
      <meta property="twitter:creator" content="@summitsoftware" />
      <meta property="twitter:site" content="@summitsoftware" />
      
      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={metaTags.ogUrl} />
      
      {/* Preconnect to important third-party domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* PWA Tags */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
    </Helmet>
  );
});

MetaTags.displayName = 'MetaTags';

export default MetaTags; 