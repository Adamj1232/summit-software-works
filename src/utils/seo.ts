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
  author: string;
  language: string;
  robots: string;
  viewport: string;
  themeColor: string;
  rating: string;
}

interface SchemaMarkup {
  "@context": "https://schema.org";
  "@type": string | string[];
  [key: string]: any;
}

export const BASE_URL = 'https://summitsoftwareworks.com';
const DEFAULT_IMAGE = '/images/summit-software-og.jpg';
const COMPANY_NAME = 'Summit Software Works';
const DEFAULT_DESCRIPTION = 'Professional web development, software design, and AI interface solutions. We craft exceptional digital experiences with modern technologies.';
const DEFAULT_KEYWORDS = 'web development, software design, AI interfaces, React development, TypeScript, modern web applications, custom software solutions, digital transformation';

const ORGANIZATION_SCHEMA: SchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description: DEFAULT_DESCRIPTION,
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
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US"
  }
};

const SERVICE_SCHEMA: SchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development and Software Design",
  provider: {
    "@type": "Organization",
    name: COMPANY_NAME,
    description: DEFAULT_DESCRIPTION
  },
  areaServed: {
    "@type": "Country",
    name: "United States"
  },
  description: DEFAULT_DESCRIPTION,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    offerCount: "3",
    highPrice: "50000",
    lowPrice: "1000"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description: "Full-stack solutions with modern frameworks and technologies that deliver exceptional user experiences."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Design",
          description: "Custom software applications engineered to solve complex problems and streamline operations."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Interface Development",
          description: "Cutting-edge AI-powered interfaces and integrations that bring intelligent automation and natural interactions to your applications."
        }
      }
    ]
  }
};

export const generateMetaTags = (
  title: string,
  description: string = DEFAULT_DESCRIPTION,
  keywords: string = DEFAULT_KEYWORDS,
  url: string,
  imageUrl: string = DEFAULT_IMAGE
): MetaTags => ({
  title: `${title} | ${COMPANY_NAME} - Web & Software Development`,
  description: description.slice(0, 160), // Ensure description is not too long
  keywords: `${keywords}, web development, software design, AI interfaces`,
  ogTitle: title,
  ogDescription: description.slice(0, 160),
  ogImage: imageUrl,
  ogUrl: `${BASE_URL}${url}`,
  twitterTitle: title,
  twitterDescription: description.slice(0, 160),
  twitterImage: imageUrl,
  author: COMPANY_NAME,
  language: 'en-US',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  themeColor: '#1a1a1a',
  rating: 'General'
});

const SCHEMA_MAPPINGS: Record<string, SchemaMarkup> = {
  home: {
    ...ORGANIZATION_SCHEMA,
    "@type": ["Organization", "WebSite"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },
  services: SERVICE_SCHEMA,
  portfolio: {
    "@context": "https://schema.org",
    "@type": ["CollectionPage", "CreativeWork"],
    name: "Our Portfolio | Summit Software Works",
    description: "Explore our diverse range of projects showcasing our expertise in web development, software design, and digital solutions.",
    url: `${BASE_URL}/portfolio`,
    creator: {
      "@type": "Organization",
      name: COMPANY_NAME
    },
    about: {
      "@type": "Thing",
      name: "Software Development Portfolio"
    }
  },
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us | Summit Software Works",
    description: "Get in touch with our team to discuss your project needs and how we can help bring your vision to life.",
    url: `${BASE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: COMPANY_NAME,
      contactPoint: ORGANIZATION_SCHEMA.contactPoint
    }
  }
};

export const generateSchemaMarkup = (page: string, data: Record<string, any> = {}): string => {
  const schema = SCHEMA_MAPPINGS[page] || ORGANIZATION_SCHEMA;
  return JSON.stringify({ ...schema, ...data });
};