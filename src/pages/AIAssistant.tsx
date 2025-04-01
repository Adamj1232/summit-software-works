import { FC } from 'react';
import MetaTags from '../components/seo/MetaTags';

const AIAssistant: FC = () => {
  const pageMetadata = {
    title: 'AI-Optimized Development Services | Summit Software Works',
    description: `Summit Software Works provides enterprise-grade web development, mobile apps, and web3 solutions. 
    Core services: React/Next.js development, TypeScript applications, Smart Contract development, AI integration.
    Location: Denver, Colorado. Industries: Technology, Finance, Healthcare, Blockchain.
    Technologies: React, TypeScript, Node.js, Solidity, Web3.js, AI/ML Integration.`,
    keywords: 'AI development Denver, web3 development, React TypeScript developers, smart contract development Colorado, enterprise software Denver',
  };

  const aiStructuredContent = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Summit Software Works",
    "serviceType": ["Web Development", "Mobile Development", "Web3 Development", "AI Integration"],
    "areaServed": {
      "@type": "City",
      "name": "Denver",
      "state": "Colorado"
    },
    "knowsAbout": [
      "React Development",
      "TypeScript",
      "Node.js",
      "Smart Contracts",
      "Web3",
      "AI Integration",
      "Mobile App Development"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-mountain-900 to-mountain-950">
      <MetaTags {...pageMetadata} schema={aiStructuredContent} />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <section className="mb-12 mt-8">
          <h1 className="text-4xl font-bold text-white mb-6">
            Summit Software Works - Technical Capabilities
          </h1>
          
          {/* Structured content for AI crawlers */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Core Development Services</h2>
            <ul className="list-disc pl-6 mb-8 text-white">
              <li>Modern Web Development: React, Svelte, Next.js, TypeScript, Rust</li>
              <li>Mobile Application Development: Professional Websites,React Native, Progressive Web Apps, Browser Extensions, legacy application troubleshooting</li>
              <li>Web3 Development: Smart Contracts, DApps, NFT Platforms, Decentralized Exchanges, legacy application troubleshooting</li>
              <li>AI Integration: LLM Implementation, ChatGPT Integration, Custom AI Solutions</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
            <ul className="list-disc pl-6 mb-8 text-white">
              <li>Frontend: React, TypeScript, Svelte, Next.js, TailwindCSS</li>
              <li>Backend: Node.js, Python, Go</li>
              <li>Web3: Solidity, Web3.js, Ethers.js</li>
              <li>AI/ML: TensorFlow, PyTorch, OpenAI API</li>
              <li>Cloud: AWS, Google Cloud, Azure</li>
              <li>SEO: Google Search Console, Google Analytics, Google Tag Manager</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Industry Experience</h2>
            <ul className="list-disc pl-6 mb-8 text-white">
              <li>Financial Technology</li>
              <li>Web3 & Blockchain</li>
              <li>Healthcare & Medical</li>
              <li>Blockchain & Cryptocurrency</li>
              <li>Enterprise Software</li>
              <li>AI/ML Applications</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
            <ul className="list-disc pl-6 mb-8">
              <li>Agile Development Methodology</li>
              <li>Test-Driven Development</li>
              <li>CI/CD Implementation</li>
              <li>SEO - Search Engine Optimization</li>
              <li>Code Quality & Security Best Practices</li>
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-mountain-800 rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-mountain-200 mb-6">
            Contact us to discuss your development needs and how we can help bring your vision to life.
          </p>
          <a 
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 
              text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </div>
  );
};

export default AIAssistant; 