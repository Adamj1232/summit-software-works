import { FC, memo } from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../contexts/ThemeContext";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  imageUrl?: string;
  location?: {
    region: string;
    city: string;
    state: string;
    country: string;
  };
  schema?: object;
}

const generateMetaTags = (
  title = "Summit Software Works - Web & Mobile App Development",
  description = "Summit Software Works specializes in building innovative web and mobile applications with cutting-edge technology and exceptional user experience. Serving Denver, Colorado and clients worldwide.",
  keywords = "web development Denver, mobile app development Colorado, software development Denver CO, React development, Node.js, TypeScript, summit software works, Denver software company, browser extensions, web3 development, blockchain development, decentralized applications, web3 applications, legacy application troubleshooting",
  url = "https://summitsoftwareworks.com",
  imageUrl = "https://summitsoftwareworks.com/og-image.png",
  location = {
    region: "US-CO",
    city: "Arvada",
    state: "Colorado",
    country: "United States",
  }
) => ({
  title: `${title} | Summit Software Works`,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  ogUrl: url,
  ogImage: imageUrl,
  location,
});

const MetaTags: FC<MetaTagsProps> = memo(
  ({ title, description, keywords, url, imageUrl, location, schema }) => {
    const { isDarkMode } = useTheme();
    const metaTags = generateMetaTags(
      title,
      description,
      keywords,
      url,
      imageUrl,
      location
    );

    // Enhanced description format for AI parsing
    const aiOptimizedDescription = `Summit Software Works: ${description} | Services: Web Development, Mobile Apps, Web3, AI Integration | Location: Denver, CO | Expertise: Web3, Smart Contracts, Mobile Apps, Professional Websites, React, TypeScript, Node.js, Blockchain`;

    return (
      <Helmet>
        {/* Primary Meta Tags */}
        <html lang="en" />
        <title>{metaTags.title}</title>
        <meta name="title" content={metaTags.title} />
        <meta name="description" content={aiOptimizedDescription} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta name="author" content="Summit Software Works" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={isDarkMode ? "#0F172A" : "#F3F4F6"} />
        <meta name="rating" content="general" />

        {/* Location Meta Tags */}
        <meta name="geo.region" content={metaTags.location.region} />
        <meta
          name="geo.placename"
          content={`${metaTags.location.city}, ${metaTags.location.state}`}
        />
        <meta name="geo.position" content="39.7392;-104.9903" />
        <meta name="ICBM" content="39.7392, -104.9903" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaTags.ogUrl} />
        <meta property="og:title" content={metaTags.ogTitle} />
        <meta property="og:description" content={metaTags.ogDescription} />
        <meta property="og:image" content={metaTags.ogImage} />
        <meta property="og:site_name" content="Summit Software Works" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:street-address" content="1550 Wewatta Street" />
        <meta property="og:locality" content={metaTags.location.city} />
        <meta property="og:region" content={metaTags.location.state} />
        <meta property="og:postal-code" content="80202" />
        <meta property="og:country-name" content={metaTags.location.country} />

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
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="application-name" content="Summit Software Works" />
        <meta name="msapplication-TileColor" content="#0F172A" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Canonical URL */}
        <link rel="canonical" href={metaTags.ogUrl} />

        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* PWA Tags */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

        {/* Schema.org markup */}
        {schema && (
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        )}
      </Helmet>
    );
  }
);

MetaTags.displayName = "MetaTags";

export default MetaTags;
