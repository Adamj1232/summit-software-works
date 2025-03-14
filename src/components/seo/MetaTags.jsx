
// src/components/seo/MetaTags.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateMetaTags } from '../../utils/seo';

const MetaTags = ({ title, description, keywords, imageUrl, url }) => {
  const metaTags = generateMetaTags(title, description, keywords, imageUrl, url);

  return (
    <Helmet>
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaTags.ogUrl} />
      <meta property="og:title" content={metaTags.ogTitle} />
      <meta property="og:description" content={metaTags.ogDescription} />
      <meta property="og:image" content={metaTags.ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metaTags.ogUrl} />
      <meta name="twitter:title" content={metaTags.twitterTitle} />
      <meta name="twitter:description" content={metaTags.twitterDescription} />
      <meta name="twitter:image" content={metaTags.twitterImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={metaTags.ogUrl} />
    </Helmet>
  );
};

export default MetaTags;
