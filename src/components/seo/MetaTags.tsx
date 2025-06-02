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
  const { theme } = useTheme();
  const metaTags = generateMetaTags({ title, description, keywords, url, imageUrl });
  const schema = generateSchemaMarkup(pageType, schemaData);

  return (
    <Helmet>
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={metaTags.canonical} />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={metaTags.og.title} />
      <meta property="og:description" content={metaTags.og.description} />
      <meta property="og:url" content={metaTags.og.url} />
      <meta property="og:image" content={metaTags.og.image} />
      <meta property="og:type" content={metaTags.og.type} />
      <meta property="og:site_name" content={metaTags.og.siteName} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={metaTags.twitter.card} />
      <meta name="twitter:title" content={metaTags.twitter.title} />
      <meta name="twitter:description" content={metaTags.twitter.description} />
      <meta name="twitter:image" content={metaTags.twitter.image} />
      
      {/* Theme Color */}
      <meta name="theme-color" content={theme === 'dark' ? '#1a1a1a' : '#ffffff'} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">{schema}</script>
    </Helmet>
  );
});

export default MetaTags;
