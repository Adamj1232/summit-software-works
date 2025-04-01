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
  geoRegion: string;
  geoPlacename: string;
  geoPosition: string;
  icbm: string;
}

interface SchemaMarkup {
  "@context": "https://schema.org";
  "@type": string | string[];
  [key: string]: any;
}

interface Location {
  region: string;
  city: string;
  state: string;
  country: string;
  address: string;
  postalCode: string;
  latitude: string;
  longitude: string;
}

export const BASE_URL = 'https://summitsoftwareworks.com';
const DEFAULT_IMAGE = '/images/summit-software-og.jpg';
const COMPANY_NAME = 'Summit Software Works';
const DEFAULT_DESCRIPTION = 'Professional web development, website design, web3, browser extension, smart contracts, software design, and AI interface solutions. We craft exceptional digital experiences with modern technologies. Serving Denver, Colorado and clients worldwide.';
const DEFAULT_KEYWORDS = 'web development Denver, software design Colorado, AI interfaces Denver CO, React, dapps, smart contracts, TypeScript, modern web applications, custom software solutions Denver, digital transformation Colorado, websites, SEO, browser extensions';

const LOCATION: Location = {
  region: 'US-CO',
  city: 'Denver',
  state: 'Colorado',
  country: 'United States',
  address: '1550 Wewatta Street',
  postalCode: '80202',
  latitude: '39.7392',
  longitude: '-104.9903'
};

const ORGANIZATION_SCHEMA: SchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description: DEFAULT_DESCRIPTION,
  sameAs: [
    "https://summitsoftwaredesign.com",
    // "https://github.com/summit-software",
    // "https://www.linkedin.com/company/summit-software-works",
    // "https://twitter.com/summitsoftware",
    // "https://www.crunchbase.com/organization/summit-software-works",
    // "https://clutch.co/profile/summit-software-works",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-303.918.2290",
    contactType: "customer service",
    email: "contact@summitsoftwareworks.com",
    areaServed: LOCATION.country,
    availableLanguage: ["English"]
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: LOCATION.address,
    addressLocality: LOCATION.city,
    addressRegion: LOCATION.state,
    postalCode: LOCATION.postalCode,
    addressCountry: LOCATION.country
  },
};

const SERVICE_SCHEMA: SchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development and Software Design",
  provider: {
    "@type": "Organization",
    name: COMPANY_NAME,
    description: DEFAULT_DESCRIPTION,
    areaServed: [
      {
        "@type": "City",
        name: LOCATION.city,
        containedInPlace: {
          "@type": "State",
          name: LOCATION.state
        }
      },
      {
        "@type": "Country",
        name: LOCATION.country
      }
    ]
  },
  areaServed: {
    "@type": "Country",
    name: LOCATION.country
  },
  description: DEFAULT_DESCRIPTION,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    offerCount: "3",
    highPrice: "50000",
    lowPrice: "500",
    areaServed: {
      "@type": "State",
      name: LOCATION.state
    }
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
          description: "Full-stack solutions with modern frameworks and technologies that deliver exceptional user experiences.",
          areaServed: {
            "@type": "City",
            name: LOCATION.city
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Design",
          description: "Custom software applications engineered to solve complex problems and streamline operations.",
          areaServed: {
            "@type": "State",
            name: LOCATION.state
          }
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Interface Development",
          description: "Cutting-edge AI-powered interfaces and integrations that bring intelligent automation and natural interactions to your applications.",
          areaServed: {
            "@type": "Country",
            name: LOCATION.country
          }
        }
      }
    ]
  }
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org" as "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What web3 development services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide comprehensive web3 development including smart contracts, dApps, and blockchain integration."
      }
    }
  ]
} as const;

export const generateMetaTags = (
  title: string,
  description: string = DEFAULT_DESCRIPTION,
  keywords: string = DEFAULT_KEYWORDS,
  url: string,
  imageUrl: string = DEFAULT_IMAGE
): MetaTags => ({
  title: `${title} | ${COMPANY_NAME} - Web & Software Development in ${LOCATION.city}`,
  description: description.slice(0, 160),
  keywords: `${keywords}, ${LOCATION.city} web development, ${LOCATION.state} software design`,
  ogTitle: title,
  ogDescription: description.slice(0, 160),
  ogImage: imageUrl,
  ogUrl: `${BASE_URL}${url}`,
  twitterTitle: title,
  twitterDescription: description.slice(0, 160),
  twitterImage: imageUrl,
  author: COMPANY_NAME,
  language: 'en-US',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  themeColor: '#1a1a1a',
  rating: 'General',
  geoRegion: LOCATION.region,
  geoPlacename: `${LOCATION.city}, ${LOCATION.state}`,
  geoPosition: `${LOCATION.latitude};${LOCATION.longitude}`,
  icbm: `${LOCATION.latitude}, ${LOCATION.longitude}`
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
    name: `Our Portfolio | ${COMPANY_NAME} - ${LOCATION.city} Software Development`,
    description: `Explore our diverse range of projects showcasing our expertise in web development, software design, browser extensions and digital solutions in ${LOCATION.city}, ${LOCATION.state}.`,
    url: `${BASE_URL}/portfolio`,
    creator: {
      "@type": "Organization",
      name: COMPANY_NAME,
      location: {
        "@type": "Place",
        address: ORGANIZATION_SCHEMA.address
      }
    },
    about: {
      "@type": "Thing",
      name: "Software Development Portfolio"
    }
  },
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact Us | ${COMPANY_NAME} - ${LOCATION.city} Software Development`,
    description: `Get in touch with our team in Denver or ${LOCATION.city} to discuss your project needs and how we can help bring your vision to life.`,
    url: `${BASE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: COMPANY_NAME,
      contactPoint: ORGANIZATION_SCHEMA.contactPoint,
      address: ORGANIZATION_SCHEMA.address,
      geo: ORGANIZATION_SCHEMA.geo
    }
  },
  faq: FAQ_SCHEMA
};

export const generateSchemaMarkup = (page: string, data: Record<string, any> = {}): string => {
  const schema = SCHEMA_MAPPINGS[page] || ORGANIZATION_SCHEMA;
  return JSON.stringify({ ...schema, ...data });
};