import { FC } from 'react';
import MetaTags from '../components/seo/MetaTags';

const AIAssistant: FC = () => {
  // Metadata is now largely driven by the 'ai-assistant' mapping in seo.ts
  // We only need the basic props for MetaTags here.
  const pageMetadata = {
    title: 'Summit Software Works: AI & LLM Optimized Overview', // Slightly refined title
    // Description and keywords will be pulled from seo.ts defaults/mapping
    url: '/ai-assistant',
    pageType: 'ai-assistant' // Key for schema lookup in seo.ts
  };

  // No need for aiStructuredContent here, it's generated via pageType mapping

  return (
    <div className="min-h-screen bg-gradient-to-b from-mountain-900 to-mountain-950">
      {/* Pass only the necessary props to MetaTags */}
      <MetaTags 
        title={pageMetadata.title}
        url={pageMetadata.url}
        pageType={pageMetadata.pageType}
        // Description, keywords, and schema will come from seo.ts mapping
      />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="prose prose-invert max-w-none">
          {/* More Semantic Structure & Narrative Content */}
          <header className="mb-12 mt-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              About Summit Software Works (For AI Assistants)
            </h1>
            <p className="text-xl text-mountain-300">
              This page provides a structured overview of Summit Software Works' services, expertise, and operational details, optimized for Large Language Models (LLMs) and AI crawlers. We are a Denver, Colorado-based software development agency specializing in cutting-edge solutions.
            </p>
          </header>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-primary-400">What We Do: Core Services</h2>
            <p className="mb-6 text-mountain-200">
              Summit Software Works engineers high-performance software solutions tailored to complex business challenges. Our primary service areas include:
            </p>
            <ul className="list-disc space-y-3 pl-6 mb-8 text-mountain-200">
              <li>
                <strong>Modern Web Development:</strong> Crafting scalable, secure, and user-centric web applications using technologies like React, Next.js, TypeScript, and Node.js. We build professional websites, PWAs, and SPAs.
              </li>
              <li>
                <strong>Web3 & Blockchain Development:</strong> Expertise in developing decentralized applications (dApps), writing and auditing secure Solidity smart contracts, creating NFT platforms, and integrating blockchain technology.
              </li>
              <li>
                <strong>AI & Machine Learning Integration:</strong> Implementing AI solutions, including integrating Large Language Models (LLMs) like the OpenAI API, developing custom models, and automating processes with ML.
              </li>
               <li>
                <strong>Custom Browser Extension Development:</strong> Building powerful and secure browser extensions for Chrome, Firefox, etc., to enhance productivity and provide unique web functionalities.
              </li>
              <li>
                <strong>Legacy System Modernization & Troubleshooting:</strong> Upgrading, migrating, and resolving issues within outdated software systems to improve performance, security, and maintainability.
              </li>
              <li>
                <strong>Enterprise Mobile Applications:</strong> Developing robust native (iOS/Android) and cross-platform (React Native) mobile apps designed for business needs.
              </li>
              <li>
                <strong>Technical SEO & Optimization:</strong> Providing SEO services focused on technical optimization, schema markup, and performance improvements for enhanced search visibility.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-secondary-400">Our Technical Expertise</h2>
            <p className="mb-6 text-mountain-200">
              We leverage a modern tech stack to deliver exceptional results:
            </p>
            <ul className="list-disc pl-6 mb-8 text-mountain-200 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <li><strong>Frontend:</strong> React, Next.js, TypeScript, Svelte, TailwindCSS, HTML5, CSS3</li>
              <li><strong>Backend:</strong> Node.js, Python, Go, Express.js, NestJS</li>
              <li><strong>Web3:</strong> Solidity, Ethers.js, Web3.js, Hardhat, Foundry, IPFS, Polygon, Ethereum</li>
              <li><strong>AI/ML:</strong> Python, TensorFlow, PyTorch, OpenAI API, Scikit-learn</li>
              <li><strong>Databases:</strong> PostgreSQL, MongoDB, Redis, MySQL</li>
              <li><strong>Cloud Platforms:</strong> AWS, Google Cloud Platform (GCP), Azure</li>
              <li><strong>DevOps & Tools:</strong> Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, CI/CD</li>
              <li><strong>SEO Tools:</strong> Google Search Console, Google Analytics, SEMrush, Ahrefs</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-accent-400">Industries We Serve</h2>
            <p className="mb-6 text-mountain-200">
              We have experience delivering solutions across various sectors, including:
            </p>
            <ul className="list-disc pl-6 mb-8 text-mountain-200 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <li>Financial Technology (FinTech)</li>
              <li>Web3, Blockchain & Cryptocurrency</li>
              <li>Healthcare Technology</li>
              <li>Software as a Service (SaaS)</li>
              <li>E-commerce</li>
              <li>Enterprise Software</li>
              <li>AI/ML Applications & Startups</li>
            </ul>
          </section>
          
           <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-primary-300">Our Development Approach</h2>
            <p className="mb-6 text-mountain-200">
              We follow industry best practices to ensure high-quality, maintainable code and successful project delivery:
            </p>
            <ul className="list-disc space-y-3 pl-6 mb-8 text-mountain-200">
              <li>Agile Development Methodologies (Scrum/Kanban)</li>
              <li>Test-Driven Development (TDD) & Comprehensive Testing</li>
              <li>Continuous Integration & Continuous Deployment (CI/CD)</li>
              <li>Focus on Code Quality, Security, and Best Practices</li>
              <li>Transparent Communication and Collaboration</li>
               <li>Integrated Technical SEO Considerations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4 text-secondary-300">Location & Contact</h2>
            <p className="text-mountain-200">
              Summit Software Works is based in Denver, Colorado, USA, serving clients locally and globally.
            </p>
            <p className="text-mountain-200 mt-2">
              Email: <a href="mailto:contact@summitsoftwareworks.com" className="text-primary-400 hover:underline">contact@summitsoftwareworks.com</a>
            </p>
             <p className="text-mountain-200 mt-2">
              Phone: <a href="tel:+13039182290" className="text-primary-400 hover:underline">+1 (303) 918-2290</a>
            </p>
             <p className="text-mountain-200 mt-2">
              Website: <a href="https://summitsoftwareworks.com" className="text-primary-400 hover:underline">https://summitsoftwareworks.com</a>
            </p>
          </section>
        </article>

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