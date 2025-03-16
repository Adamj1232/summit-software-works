// src/utils/seo.ts
interface MetaTags {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

interface SchemaMarkup {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: any;
}

const BASE_URL = 'https://summitsoftwareworks.com';
const DEFAULT_IMAGE = '/images/summit-software-og.jpg';

const ORGANIZATION_SCHEMA: SchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Summit Software Works",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
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

const SERVICE_SCHEMA: SchemaMarkup = {
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

export const generateMetaTags = (
  title: string,
  description: string,
  keywords: string,
  url: string,
  imageUrl: string = DEFAULT_IMAGE
): MetaTags => ({
  title: `${title} | Summit Software Works - Web & Software Development`,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  ogImage: imageUrl,
  ogUrl: `${BASE_URL}${url}`,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: imageUrl
});

const SCHEMA_MAPPINGS: Record<string, SchemaMarkup> = {
  home: ORGANIZATION_SCHEMA,
  services: SERVICE_SCHEMA,
  portfolio: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Portfolio | Summit Software Works",
    description: "Explore our diverse range of projects showcasing our expertise in web development, software design, and digital solutions.",
    url: `${BASE_URL}/portfolio`
  },
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us | Summit Software Works",
    description: "Get in touch with our team to discuss your project needs and how we can help bring your vision to life.",
    url: `${BASE_URL}/contact`
  }
};

export const generateSchemaMarkup = (page: string, data: Record<string, any> = {}): string => {
  const schema = SCHEMA_MAPPINGS[page] || ORGANIZATION_SCHEMA;
  return JSON.stringify({ ...schema, ...data });
}; 