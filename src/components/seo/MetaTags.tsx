import { FC, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { generateMetaTags } from '../../utils/seo';

interface MetaTagsProps {
  title: string;
  description?: string;
  keywords?: string;
  url: string;
  imageUrl?: string;
}

const MetaTags: FC<MetaTagsProps> = memo(({ title, description, keywords, url, imageUrl }) => {
  const metaTags = generateMetaTags(title, description, keywords, url, imageUrl);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={metaTags.language} />
      <title>{metaTags.title}</title>
      <meta name="title" content={metaTags.title} />
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
      <meta name="author" content={metaTags.author} />
      <meta name="robots" content={metaTags.robots} />
      <meta name="viewport" content={metaTags.viewport} />
      <meta name="theme-color" content={metaTags.themeColor} />
      <meta name="rating" content={metaTags.rating} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaTags.ogUrl} />
      <meta property="og:title" content={metaTags.ogTitle} />
      <meta property="og:description" content={metaTags.ogDescription} />
      <meta property="og:image" content={metaTags.ogImage} />
      <meta property="og:site_name" content={metaTags.author} />
      <meta property="og:locale" content={metaTags.language} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metaTags.ogUrl} />
      <meta name="twitter:title" content={metaTags.twitterTitle} />
      <meta name="twitter:description" content={metaTags.twitterDescription} />
      <meta name="twitter:image" content={metaTags.twitterImage} />
      <meta name="twitter:creator" content="@summitsoftware" />
      <meta name="twitter:site" content="@summitsoftware" />
      
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