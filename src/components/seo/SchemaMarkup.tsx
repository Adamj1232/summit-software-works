import { FC, memo } from "react";
import { Helmet } from "react-helmet-async";
import { generateSchemaMarkup } from "../../utils/seo";

interface SchemaMarkupProps {
  page: string;
  data?: Record<string, any>;
}

const SchemaMarkup: FC<SchemaMarkupProps> = memo(({ page, data }) => (
  <Helmet>
    <script type="application/ld+json">
      {generateSchemaMarkup(page, data)}
    </script>
  </Helmet>
));

SchemaMarkup.displayName = "SchemaMarkup";

// Expand your existing schema with AI-specific attributes
const LocalBusinessSchema: FC<{ page: string }> = memo(({ page }) => {
  const schema = generateSchemaMarkup(page, {
    // Add AI-optimized fields
    keywords:
      "AI development, web3, dapp, smart contracts, software development, Denver tech, React, TypeScript, websites, professional website design, browser extensions, SEO, web3 development, blockchain development, decentralized applications, web3 applications, blockchain solutions",
    specialty:
      "Modern web development, professional website design, browser extensions,AI interfaces, web3 applications, websites, dapps, smart contracts, legacy application troubleshooting",
    availableService: [
      {
        "@type": "Service",
        name: "AI Integration Services",
        description: "Custom AI integration solutions for modern businesses",
      },
      {
        "@type": "Service",
        name: "Web3 Development",
        description: "Blockchain and decentralized application development",
      },
    ],
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schema }}
    />
  );
});

export default LocalBusinessSchema;
