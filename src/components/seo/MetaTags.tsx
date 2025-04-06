import { FC, memo } from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../contexts/ThemeContext";
import { generateMetaTags, generateSchemaMarkup } from "../../utils/seo";

interface MetaTagsProps {
  title: string;
  description?: string;
  keywords?: string;
  url: string;
  imageUrl?: string;
  pageType: string;
  schemaData?: Record<string, any>;
}

const MetaTags: FC<MetaTagsProps> = memo(({
  title,
  description,
  keywords,
  url,
  imageUrl,
  pageType,
  schemaData
}) => {
  const { isDarkMode } = useTheme();

  const metaTags = generateMetaTags({
    title,
    description,
    keywords,
    url,
    imageUrl
  });

  const schemaJson = generateSchemaMarkup(pageType, schemaData);

  const aiOptimizedDescription = metaTags.description;
  const ogDescription = metaTags.ogDescription;

  return (
    <Helmet>
      <html lang="en" />
      <title>{metaTags.title}</title>
      <meta name="title" content={metaTags.title} />
      <meta name="description" content={aiOptimizedDescription} />
      <meta name="keywords" content={metaTags.keywords} />
      <meta name="author" content={metaTags.author} />
      <meta name="robots" content={metaTags.robots} />
      <meta name="viewport" content={metaTags.viewport} />
      <meta name="theme-color" content={isDarkMode ? "#0F172A" : "#F3F4F6"} />
      <meta name="rating" content={metaTags.rating} />

      <meta name="geo.region" content={metaTags.geoRegion} />
      <meta name="geo.placename" content={metaTags.geoPlacename} />
      <meta name="geo.position" content={metaTags.geoPosition} />
      <meta name="ICBM" content={metaTags.icbm} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaTags.ogUrl} />
      <meta property="og:title" content={metaTags.ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={metaTags.ogImage} />
      <meta property="og:site_name" content={metaTags.author} />
      <meta property="og:locale" content="en_US" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaTags.ogUrl} />
      <meta property="twitter:title" content={metaTags.twitterTitle} />
      <meta property="twitter:description" content={metaTags.twitterDescription} />
      <meta property="twitter:image" content={metaTags.twitterImage} />

      <link rel="canonical" href={metaTags.ogUrl} />

      <script type="application/ld+json">
        {schemaJson}
      </script>

      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="application-name" content={metaTags.author} />
      <meta name="msapplication-TileColor" content="#0F172A" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
    </Helmet>
  );
});

MetaTags.displayName = "MetaTags";

export default MetaTags;
