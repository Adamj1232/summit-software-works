import { FC, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import MetaTags from '../components/seo/MetaTags';
import { Link } from 'react-router-dom';

const Services: FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  
  // Create transform values with increased sensitivity
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.1;
    const moveY = (clientY - window.innerHeight / 2) * 0.1;
    mouseX.set(moveX);
    mouseY.set(moveY);
  }, [mouseX, mouseY]);

  const services = [
    {
      id: 'enterprise-solutions',
      title: 'Modernize Your Business: Enterprise Software & Cloud',
      description: 'Upgrade legacy systems, migrate to the cloud (AWS, Azure), and build scalable enterprise applications. We help Denver businesses automate processes and enhance operational efficiency for significant cost savings.',
      features: [
        'Legacy System Modernization',
        'Cloud Migration & Architecture (AWS/Azure)',
        'Custom Enterprise Application Development',
        'Business Process Automation (BPA)',
        'API Development & Integration'
      ],
      benefits: [
        'Reduce operational costs by up to 40%',
        'Achieve 99.99% system uptime & reliability',
        'Enhance data security and compliance',
        'Improve scalability and future-readiness'
      ],
      technologies: ['Azure', 'AWS', 'Kubernetes', 'Docker', 'Microservices', 'Java', 'Python']
    },
    {
      id: 'ai-ml-solutions',
      title: 'Unlock Potential with AI & Machine Learning',
      description: 'Leverage AI to gain a competitive edge. We develop custom AI models, implement NLP, predictive analytics, and integrate LLMs (like OpenAI API) to automate tasks and derive actionable insights.',
      features: [
        'Custom AI/ML Model Development',
        'Natural Language Processing (NLP)',
        'Predictive Analytics & Forecasting',
        'LLM & OpenAI API Integration',
        'AI-Powered Automation'
      ],
      benefits: [
        'Automate up to 60% of manual tasks',
        'Gain real-time, data-driven insights',
        'Personalize customer experiences',
        'Improve decision-making accuracy'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Python', 'Azure ML', 'Google AI Cloud']
    },
    {
      id: 'web-development',
      title: 'High-Performance Web Applications',
      description: "Engage users with exceptional web experiences. Our Denver-based team builds fast, scalable PWAs and SPAs using React, Next.js, and TypeScript, focusing on optimal performance and conversion.",
      features: [
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'Responsive & Mobile-First Design',
        'Real-time Features (WebSocket)',
        'Headless CMS Integration'
      ],
      benefits: [
        'Achieve ~50% faster load times',
        'Increase user engagement & retention',
        'Boost conversion rates significantly',
        'Seamless cross-platform experience'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'TailwindCSS']
    },
    {
      id: 'web3-blockchain',
      title: 'Innovate with Web3 & Blockchain',
      description: 'Step into the future of the internet. We are Colorado\'s experts in secure smart contract development (Solidity), dApp creation, DeFi platforms, and integrating blockchain into your operations.',
      features: [
        'Secure Smart Contract Development & Audit',
        'Decentralized Application (dApp) Development',
        'NFT Marketplace & Platform Creation',
        'Blockchain Integration Services',
        'Custom DeFi Solutions'
      ],
      benefits: [
        'Enhance security & data transparency',
        'Reduce transaction costs & intermediaries',
        'Automate trust with smart contracts',
        'Unlock new decentralized business models'
      ],
      technologies: ['Ethereum', 'Solidity', 'Web3.js/Ethers.js', 'IPFS', 'Hardhat/Foundry', 'Polygon']
    },
    {
      id: 'mobile-development',
      title: 'Cross-Platform & Native Mobile Apps',
      description: 'Reach your users anywhere with seamless mobile apps. We build high-performance native (iOS/Android) and cross-platform (React Native) applications focused on user experience and business goals.',
      features: [
        'Native iOS (Swift) & Android (Kotlin) Apps',
        'Cross-Platform (React Native) Development',
        'Enterprise Mobile Application Strategy',
        'Mobile Backend & API Integration',
        'App Store Deployment & Maintenance'
      ],
      benefits: [
        'Reduce development costs with cross-platform',
        'Accelerate time-to-market by ~30%',
        'Deliver consistent cross-device UX',
        'Ensure enterprise-grade security & performance'
      ],
      technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase', 'AWS Amplify']
    },
    {
      id: 'browser-extensions',
      title: 'Custom Browser Extension Development',
      description: 'Enhance workflow and productivity with powerful browser extensions. We develop secure and intuitive extensions for Chrome, Firefox, and other browsers tailored to your specific needs.',
      features: [
        'Chrome Extension Development',
        'Firefox Add-on Development',
        'Cross-Browser Compatibility',
        'API Integration for Extensions',
        'Extension Security Best Practices'
      ],
      benefits: [
        'Automate repetitive tasks',
        'Integrate seamlessly with web services',
        'Improve user productivity',
        'Create unique browser-based tools'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'React', 'WebExtensions API', 'Node.js (for backend)']
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-mountain-900" onMouseMove={handleMouseMove}>
      <MetaTags 
        title="Software Development Services | Summit Software Works - Denver, CO"
        description="Summit Software Works offers expert software development services in Denver, CO including custom web apps, Web3/blockchain, AI integration, mobile apps, browser extensions, and legacy system modernization."
        keywords="software development services Denver, web development agency Colorado, Web3 development company, AI integration services, mobile app developers Denver, browser extension development, React developers, custom software solutions"
        url="/services"
        pageType="services"
      />

      {/* Hero Section */}
      <section className="relative py-32 pb-16 bg-gradient-to-b from-mountain-900 to-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated grid background */}
          <div className="absolute inset-0 animate-gradient-shift" 
            style={{
              backgroundImage: 'linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))',
              opacity: 0.1
            }}
          />
          
          {/* Geometric shapes */}
          {[...Array(40)].map((_, i) => {
            const shapeType = Math.random();
            const size = Math.random() * 40 + 20;
            const color = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 0.1)`;
            
            interface ShapeStyle {
              background?: string;
              borderRadius?: string;
              svg?: JSX.Element;
            }

            // Define different shape styles
            const shapeStyles: Record<string, ShapeStyle> = {
              circle: {
                borderRadius: '50%',
                background: color
              },
              code: {
                background: 'none',
                svg: (
                  <svg viewBox="0 0 100 100" fill={color}>
                    <path d="M0,0 L100,0 L100,100 L0,100 L0,30 L30,30 L30,0 L70,0 L70,30 L100,30 L100,70 L70,70 L70,100 L30,100 L30,70 L0,70 Z" />
                  </svg>
                )
              },
              blockchain: {
                background: 'none',
                svg: (
                  <svg viewBox="0 0 100 100" fill={color}>
                    <path d="M0,0 L100,0 L100,100 L0,100 L0,0 Z M20,20 L80,20 L80,80 L20,80 L20,20 Z M40,40 L60,40 L60,60 L40,60 L40,40 Z" />
                  </svg>
                )
              },
              cloud: {
                background: 'none',
                svg: (
                  <svg viewBox="0 0 100 100" fill={color}>
                    <path d="M20,50 C20,30 40,20 60,20 C80,20 100,30 100,50 C100,70 80,80 60,80 L40,80 C20,80 20,70 20,50 Z" />
                  </svg>
                )
              },
              database: {
                background: 'none',
                svg: (
                  <svg viewBox="0 0 100 100" fill={color}>
                    <path d="M0,0 L100,0 L100,100 L0,100 L0,0 Z M20,20 L80,20 L80,40 L20,40 L20,20 Z M20,60 L80,60 L80,80 L20,80 L20,60 Z" />
                  </svg>
                )
              },
              network: {
                background: 'none',
                svg: (
                  <svg viewBox="0 0 100 100" fill={color}>
                    <path d="M50,0 L100,50 L50,100 L0,50 L50,0 Z M50,20 L80,50 L50,80 L20,50 L50,20 Z" />
                  </svg>
                )
              },
              mobile: {
                background: 'none',
                svg: (
                  <svg viewBox="0 0 100 100" fill={color}>
                    <path d="M20,0 L80,0 L80,100 L20,100 L20,0 Z M30,10 L70,10 L70,90 L30,90 L30,10 Z" />
                  </svg>
                )
              },
              rocket: {
                background: 'none',
                svg: (
                  <svg viewBox="0 0 100 100" fill={color}>
                    <path d="M50,0 L100,50 L80,50 L80,100 L20,100 L20,50 L0,50 L50,0 Z" />
                  </svg>
                )
              },
              shield: {
                background: 'none',
                svg: (
                  <svg viewBox="0 0 100 100" fill={color}>
                    <path d="M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 L50,0 Z" />
                  </svg>
                )
              },
              terminal: {
                background: 'none',
                svg: (
                  <svg viewBox="0 0 100 100" fill={color}>
                    <path d="M0,0 L100,0 L100,100 L0,100 L0,0 Z M20,20 L80,20 L80,40 L20,40 L20,20 Z M20,60 L80,60 L80,80 L20,80 L20,60 Z" />
                  </svg>
                )
              }
            };

            const selectedShape = shapeType < 0.1 ? 'circle' :
                               shapeType < 0.2 ? 'code' :
                               shapeType < 0.3 ? 'blockchain' :
                               shapeType < 0.4 ? 'cloud' :
                               shapeType < 0.5 ? 'database' :
                               shapeType < 0.6 ? 'network' :
                               shapeType < 0.7 ? 'mobile' :
                               shapeType < 0.8 ? 'rocket' :
                               shapeType < 0.9 ? 'shield' : 'terminal';

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: size,
                  height: size,
                  ...shapeStyles[selectedShape]
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.2,
                  opacity: 0.8
                }}
              >
                {shapeStyles[selectedShape].svg}
              </motion.div>
            );
          })}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white"
              style={{ scale }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Develop Your Competitive Edge
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 hover:text-white transition-colors duration-300 mb-8"
              style={{ y }}
            >
              Explore our suite of software development services designed to propel your Denver business forward.
            </motion.p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-sm text-blue-200">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-sm text-blue-200">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm text-blue-200">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-mountain-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  {service.title}
                </h2>
                <p className="text-mountain-600 dark:text-mountain-300 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-mountain-800 dark:text-white">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features?.map((feature, i) => (
                      <div key={i} className="flex items-center text-mountain-600 dark:text-mountain-400">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-mountain-800 dark:text-white">
                    Business Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-mountain-600 dark:text-mountain-400">
                        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 dark:bg-mountain-700 rounded-full text-sm text-blue-600 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-mountain-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl mb-8 text-blue-200">
              Let's discuss how our software development expertise can achieve your specific business goals. Schedule your free consultation today.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-mountain-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Book Your Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 