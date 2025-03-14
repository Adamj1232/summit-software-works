// src/utils/seo.js
/**
 * SEO utilities for Summit Software Works website
 * Implements best practices for React-based sites
 */

// Generate meta tags for each page
export const generateMetaTags = (
  title,
  description,
  keywords,
  imageUrl = "/images/summit-software-og.jpg",
  url
) => {
  return {
    title: `${title} | Summit Software Works - Web & Software Development`,
    description,
    keywords,
    ogTitle: title,
    ogDescription: description,
    ogImage: imageUrl,
    ogUrl: `https://summitsoftwareworks.com${url}`,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl
  };
};

// Generate JSON-LD schema markup for rich results
export const generateSchemaMarkup = (page, data = {}) => {
  // Base organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Summit Software Works",
    url: "https://summitsoftwareworks.com",
    logo: "https://summitsoftwareworks.com/images/logo.png",
    sameAs: [
      "https://twitter.com/summitsoftware",
      "https://linkedin.com/company/summit-software-works",
      "https://github.com/summit-software"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "info@summitsoftwareworks.com"
    }
  };

  // Service schema for services page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "Summit Software Works"
    },
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    description: "Professional web development and software design services",
    offers: {
      "@type": "Offer",
      price: "1000.00",
      priceCurrency: "USD"
    }
  };

  // Switch based on page type
  switch (page) {
    case 'home':
      return JSON.stringify(organizationSchema);
    case 'services':
      return JSON.stringify(serviceSchema);
    case 'portfolio':
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Our Portfolio | Summit Software Works",
        description: "Explore our diverse range of projects showcasing our expertise in web development, software design, and digital solutions.",
        url: "https://summitsoftwareworks.com/portfolio"
      });
    case 'contact':
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Us | Summit Software Works",
        description: "Get in touch with our team to discuss your project needs and how we can help bring your vision to life.",
        url: "https://summitsoftwareworks.com/contact"
      });
    default:
      return JSON.stringify(organizationSchema);
  }
};
