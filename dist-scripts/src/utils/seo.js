"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSchemaMarkup = exports.generateMetaTags = exports.normalizeUrl = exports.BASE_URL = void 0;
exports.BASE_URL = 'https://www.summitsoftwareworks.com';
const DEFAULT_IMAGE = '/images/summit-software-og.jpg';
const COMPANY_NAME = 'Summit Software Works';
const DEFAULT_DESCRIPTION = 'Expert Denver-based software development specializing in professional website design, custom web applications, Web3/blockchain solutions (dapps, smart contracts), AI integration, browser extensions, and legacy application troubleshooting. We build high-performance, scalable software.';
const DEFAULT_KEYWORDS = 'Denver web development, custom software development Colorado, professional website design Denver, React developers Denver, TypeScript experts, Web3 development Colorado, blockchain development Denver, smart contract audit, dapps development, AI integration services, browser extension development, legacy system modernization, SEO optimization services Denver, software agency Colorado';
const PHONE_NUMBER = "+1-303-918-2290";
const EMAIL = "contact@summitsoftwareworks.com";
const LOCATION = {
    region: 'US-CO',
    city: 'Denver',
    state: 'Colorado',
    country: 'United States',
    address: '1550 Wewatta Street',
    postalCode: '80202',
    latitude: '39.7392',
    longitude: '-104.9903'
};
const ORGANIZATION_SCHEMA_BASE = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: COMPANY_NAME,
    url: exports.BASE_URL,
    logo: `${exports.BASE_URL}/logo192.png`,
    description: DEFAULT_DESCRIPTION,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    address: {
        "@type": "PostalAddress",
        streetAddress: LOCATION.address,
        addressLocality: LOCATION.city,
        addressRegion: LOCATION.state,
        postalCode: LOCATION.postalCode,
        addressCountry: LOCATION.country
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: LOCATION.latitude,
        longitude: LOCATION.longitude
    },
    priceRange: "$$$",
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            opens: "09:00",
            closes: "17:00"
        }
    ],
    sameAs: [
        "https://www.linkedin.com/company/summit-software-works",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_NUMBER,
        contactType: "customer service",
        email: EMAIL,
        areaServed: LOCATION.country,
        availableLanguage: ["English"]
    },
    keywords: DEFAULT_KEYWORDS,
    areaServed: {
        "@type": "AdministrativeArea",
        name: LOCATION.state
    }
};
const SERVICE_LIST = [
    {
        "@type": "Service",
        serviceType: "Custom Web Development",
        name: "Modern Web Application Development",
        description: "Building high-performance, scalable web applications using React, Next.js, TypeScript, and modern frameworks tailored to your business needs.",
        areaServed: { "@type": "AdministrativeArea", name: LOCATION.state },
        provider: { "@type": "Organization", name: COMPANY_NAME },
        keywords: ["React development", "Next.js development", "TypeScript", "PWA", "SPA", "custom web application Denver"]
    },
    {
        "@type": "Service",
        serviceType: "Web3 & Blockchain Development",
        name: "Web3 and Blockchain Solutions",
        description: "Expert development of dApps, smart contracts (Solidity), NFT platforms, and blockchain integrations to leverage decentralized technology.",
        areaServed: { "@type": "Country", name: LOCATION.country },
        provider: { "@type": "Organization", name: COMPANY_NAME },
        keywords: ["Web3 development", "blockchain development Colorado", "smart contract development", "Solidity", "dApps", "NFT marketplace"]
    },
    {
        "@type": "Service",
        serviceType: "AI & Machine Learning Integration",
        name: "AI & Machine Learning Solutions",
        description: "Integrating AI and ML capabilities like LLMs (ChatGPT/OpenAI API), predictive analytics, and automation into your software.",
        areaServed: { "@type": "Country", name: LOCATION.country },
        provider: { "@type": "Organization", name: COMPANY_NAME },
        keywords: ["AI integration Denver", "machine learning development", "OpenAI API", "LLM integration", "predictive analytics"]
    },
    {
        "@type": "Service",
        serviceType: "Browser Extension Development",
        name: "Custom Browser Extension Development",
        description: "Creating powerful and secure browser extensions for Chrome, Firefox, and other platforms to enhance productivity or offer unique functionality.",
        areaServed: { "@type": "Country", name: LOCATION.country },
        provider: { "@type": "Organization", name: COMPANY_NAME },
        keywords: ["browser extension development", "Chrome extension", "Firefox addon", "web extension development"]
    },
    {
        "@type": "Service",
        serviceType: "Legacy System Modernization",
        name: "Legacy Application Troubleshooting & Modernization",
        description: "Updating, migrating, and troubleshooting outdated software systems to improve performance, security, and maintainability.",
        areaServed: { "@type": "AdministrativeArea", name: LOCATION.state },
        provider: { "@type": "Organization", name: COMPANY_NAME },
        keywords: ["legacy system modernization", "application migration", "software troubleshooting", "code refactoring"]
    },
    {
        "@type": "Service",
        serviceType: "Mobile Application Development",
        name: "Enterprise Mobile Solutions",
        description: "Developing cross-platform (React Native) and native mobile applications for iOS and Android focused on enterprise needs.",
        areaServed: { "@type": "Country", name: LOCATION.country },
        provider: { "@type": "Organization", name: COMPANY_NAME },
        keywords: ["mobile app development Denver", "React Native development", "iOS development", "Android development", "enterprise mobile apps"]
    },
    {
        "@type": "Service",
        serviceType: "Search Engine Optimization",
        name: "Technical SEO & Optimization",
        description: "Implementing technical SEO best practices, schema markup, and performance optimization to improve search engine visibility.",
        areaServed: { "@type": "AdministrativeArea", name: LOCATION.state },
        provider: { "@type": "Organization", name: COMPANY_NAME },
        keywords: ["technical SEO services Denver", "schema markup implementation", "website performance optimization", "SEO audit"]
    }
];
const SERVICE_SCHEMA_CATALOG = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development Services",
    provider: {
        "@type": "Organization",
        name: COMPANY_NAME,
    },
    areaServed: {
        "@type": "Place",
        name: "Denver Metro Area and Worldwide"
    },
    description: DEFAULT_DESCRIPTION,
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom Software Development Services",
        itemListElement: SERVICE_LIST.map(service => ({
            "@type": "Offer",
            itemOffered: service
        }))
    }
};
const FAQ_SCHEMA_MAIN = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What types of software development does Summit Software Works specialize in?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Summit Software Works specializes in custom web development (React, Next.js, TypeScript), Web3/blockchain solutions (dApps, smart contracts), AI/ML integration, browser extension development, legacy system modernization, and enterprise mobile applications. We serve businesses primarily in Denver, Colorado, but work with clients globally."
            }
        },
        {
            "@type": "Question",
            name: "Do you build websites for small businesses in Denver?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer professional website design and development services for businesses of all sizes in the Denver area and beyond. We focus on creating high-performance, SEO-friendly websites using modern technologies like React and Next.js."
            }
        },
        {
            "@type": "Question",
            name: "Can you help integrate AI like ChatGPT into our existing application?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. We have expertise in integrating Large Language Models (LLMs) like the OpenAI API (ChatGPT) into existing software to enhance functionality, automate tasks, or create intelligent user experiences."
            }
        },
        {
            "@type": "Question",
            name: "What is your process for developing Web3 applications?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Our Web3 development process typically involves requirements gathering, smart contract design and auditing (using tools like Hardhat/Foundry), dApp frontend development (React/Next.js with Ethers.js/Web3.js), rigorous testing on testnets, and deployment to mainnet with ongoing support."
            }
        },
        {
            "@type": "Question",
            name: "How much does custom software development cost in Denver?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom software development costs vary significantly based on project scope, complexity, required features, and timeline. We offer tailored quotes after an initial consultation. Our price range is generally considered moderate to high ($$$) reflecting our expertise and the quality of enterprise-grade solutions we deliver. Contact us for a free estimate."
            }
        }
    ]
};
const SCHEMA_MAPPINGS = {
    home: Object.assign(Object.assign({}, ORGANIZATION_SCHEMA_BASE), { "@type": ["Organization", "LocalBusiness", "WebSite"], mainEntityOfPage: {
            "@type": "WebPage",
            "@id": exports.BASE_URL
        }, potentialAction: {
            "@type": "SearchAction",
            target: `${exports.BASE_URL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }, hasOfferCatalog: SERVICE_SCHEMA_CATALOG.hasOfferCatalog }),
    services: Object.assign(Object.assign({}, SERVICE_SCHEMA_CATALOG), { mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${exports.BASE_URL}/services`
        }, "@additionalProperty": {
            "@type": "FAQPage",
            mainEntity: FAQ_SCHEMA_MAIN.mainEntity.filter((q) => q.name.toLowerCase().includes('service') || q.name.toLowerCase().includes('build'))
        } }),
    projects: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `Software Development Portfolio | ${COMPANY_NAME}`,
        description: `Explore projects by ${COMPANY_NAME}, showcasing expertise in web development, Web3, AI, and browser extensions built for clients in Denver and worldwide.`,
        url: `${exports.BASE_URL}/projects`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${exports.BASE_URL}/projects`
        },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: []
        },
        creator: {
            "@type": "Organization",
            name: COMPANY_NAME
        }
    },
    contact: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: `Contact ${COMPANY_NAME} | Denver Software Development Experts`,
        description: `Get in touch with ${COMPANY_NAME} in Denver, Colorado to discuss your custom software, web development, Web3, or AI project needs.`,
        url: `${exports.BASE_URL}/contact`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${exports.BASE_URL}/contact`
        },
        mainEntity: Object.assign(Object.assign({}, ORGANIZATION_SCHEMA_BASE), { "@type": ["Organization", "LocalBusiness"] })
    },
    'ai-assistant': {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `AI Optimized Overview | ${COMPANY_NAME}`,
        description: `Detailed overview of ${COMPANY_NAME}'s technical capabilities, services (WebDev, Web3, AI, Mobile, Legacy Modernization), technologies (React, Node, Solidity, Python), and industry expertise for AI crawlers. Located in Denver, CO.`,
        url: `${exports.BASE_URL}/ai-assistant`,
        mainEntity: Object.assign(Object.assign({}, ORGANIZATION_SCHEMA_BASE), { hasOfferCatalog: SERVICE_SCHEMA_CATALOG.hasOfferCatalog }),
        keywords: `${DEFAULT_KEYWORDS}, AI crawler optimization, LLM visibility, technical capabilities`,
        about: {
            "@type": "Organization",
            name: COMPANY_NAME,
            description: DEFAULT_DESCRIPTION
        }
    },
};
const normalizeUrl = (url) => {
    // Remove trailing slashes except for root URL
    const normalized = url === '/' ? url : url.replace(/\/+$/, '');
    // Remove index.html if present
    const withoutIndex = normalized.replace(/\/index\.html$/, '');
    // Ensure no double slashes
    const cleanUrl = withoutIndex.replace(/([^:]\/)\/+/g, '$1');
    return `${exports.BASE_URL}${cleanUrl}`;
};
exports.normalizeUrl = normalizeUrl;
const generateMetaTags = (pageDetails) => {
    const { title, description = DEFAULT_DESCRIPTION, keywords = DEFAULT_KEYWORDS, url, imageUrl = DEFAULT_IMAGE } = pageDetails;
    const normalizedUrl = (0, exports.normalizeUrl)(url);
    return {
        title: `${title} | Summit Software Works`,
        description,
        keywords,
        canonical: normalizedUrl,
        og: {
            title: `${title} | Summit Software Works`,
            description,
            url: normalizedUrl,
            image: (0, exports.normalizeUrl)(imageUrl),
            type: 'website',
            siteName: 'Summit Software Works'
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | Summit Software Works`,
            description,
            image: (0, exports.normalizeUrl)(imageUrl)
        }
    };
};
exports.generateMetaTags = generateMetaTags;
const generateSchemaMarkup = (page, dynamicData = {}) => {
    const baseSchema = SCHEMA_MAPPINGS[page.toLowerCase()] || ORGANIZATION_SCHEMA_BASE;
    const finalSchema = Object.assign(Object.assign({}, baseSchema), dynamicData);
    Object.keys(finalSchema).forEach(key => (finalSchema[key] === undefined || finalSchema[key] === null) && delete finalSchema[key]);
    return JSON.stringify(finalSchema, null, 2);
};
exports.generateSchemaMarkup = generateSchemaMarkup;
