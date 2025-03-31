import { FC, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

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
      title: 'Enterprise Solutions & Digital Transformation',
      description: 'Transform your business with enterprise-grade digital solutions. We specialize in modernizing legacy systems, implementing cloud-native architectures, and delivering scalable applications that drive operational efficiency.',
      features: [
        'Legacy System Modernization',
        'Cloud Migration & Integration',
        'Enterprise Application Development',
        'Business Process Automation',
        'Data Analytics & Business Intelligence'
      ],
      benefits: [
        '40% average reduction in operational costs',
        'Up to 99.99% system uptime',
        'Enhanced security and compliance',
        'Seamless third-party integrations'
      ],
      technologies: ['Azure', 'AWS', 'Kubernetes', 'Docker', 'Microservices']
    },
    {
      id: 'ai-ml-solutions',
      title: 'AI & Machine Learning Integration',
      description: 'Harness the power of artificial intelligence to gain competitive advantage. Our AI solutions help automate processes, extract insights from data, and create intelligent user experiences.',
      features: [
        'Custom AI Model Development',
        'Natural Language Processing',
        'Predictive Analytics',
        'Computer Vision Solutions',
        'AI-Powered Process Automation'
      ],
      benefits: [
        'Up to 60% reduction in manual tasks',
        'Real-time decision support',
        'Enhanced customer experiences',
        'Data-driven insights'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Azure ML', 'Google AI']
    },
    {
      id: 'web-development',
      title: 'Modern Web Applications',
      description: "Build scalable, high-performance web applications that deliver exceptional user experiences. Our full-stack expertise ensures your web presence stands out in today's competitive landscape.",
      features: [
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'Responsive Design & Mobile-First',
        'Real-time Features & WebSocket',
        'API Development & Integration'
      ],
      benefits: [
        '50% faster load times',
        'Improved user engagement',
        'Higher conversion rates',
        'Cross-platform compatibility'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL']
    },
    {
      id: 'web3-blockchain',
      title: 'Web3 & Blockchain Solutions',
      description: 'Stay ahead of the curve with cutting-edge blockchain technology. We help businesses implement secure, transparent, and efficient decentralized solutions.',
      features: [
        'Smart Contract Development',
        'DeFi Platform Development',
        'NFT Marketplace Creation',
        'Blockchain Integration',
        'Crypto Payment Solutions'
      ],
      benefits: [
        'Enhanced security and transparency',
        'Reduced transaction costs',
        'Automated trust mechanisms',
        'New revenue streams'
      ],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'Hardhat']
    },
    {
      id: 'mobile-development',
      title: 'Enterprise Mobile Solutions',
      description: 'Deliver seamless mobile experiences across platforms. Our mobile solutions combine native performance with cross-platform efficiency to maximize your ROI.',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Development',
        'Enterprise Mobile Solutions',
        'Mobile Security & Compliance',
        'Offline-First Architecture'
      ],
      benefits: [
        'Reduced development costs',
        '30% faster time-to-market',
        'Consistent user experience',
        'Enterprise-grade security'
      ],
      technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase']
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-mountain-900" onMouseMove={handleMouseMove}>
      <Helmet>
        <title>Custom Enterprise Software Development Services | AI, Web3, Cloud Solutions</title>
        <meta name="description" content="Transform your business with enterprise-grade software solutions. Specializing in AI/ML integration, cloud-native applications, Web3 development, and digital transformation. 10+ years of delivering scalable solutions." />
        <meta property="og:title" content="Enterprise Software Development & Digital Transformation Services | Summit Software Works" />
        <meta property="og:description" content="Leading software development company delivering AI-powered solutions, cloud-native applications, and Web3 integration. Transform your business with our enterprise-grade development services." />
        <meta name="keywords" content="enterprise software development, AI integration, cloud-native applications, digital transformation, custom software development, Web3 solutions, React development, Node.js, TypeScript, microservices architecture, DevOps automation, enterprise mobile apps" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Summit Software Works" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="Denver" />
        <link rel="canonical" href="https://summitsoftwareworks.com/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Enterprise Software Development Services",
            "description": "Transform your business with our enterprise software development services. Specializing in AI integration, cloud-native solutions, and digital transformation.",
            "provider": {
              "@type": "Organization",
              "name": "Summit Software Works",
              "url": "https://summitsoftwareworks.com"
            },
            "offers": {
              "@type": "AggregateOffer",
              "offers": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Solutions & Digital Transformation",
                    "description": "Transform your business with enterprise-grade digital solutions. Modernize legacy systems and implement cloud-native architectures.",
                    "serviceType": ["Digital Transformation", "Legacy Modernization", "Cloud Migration"],
                    "provider": {"@type": "Organization", "name": "Summit Software Works"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI & Machine Learning Integration",
                    "description": "Custom AI model development, natural language processing, and intelligent automation solutions.",
                    "serviceType": ["AI Development", "Machine Learning", "Process Automation"],
                    "provider": {"@type": "Organization", "name": "Summit Software Works"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Modern Web Applications",
                    "description": "Full-stack web development using React, Next.js, and Node.js with focus on performance and scalability.",
                    "serviceType": ["Web Development", "Full Stack Development", "API Development"],
                    "provider": {"@type": "Organization", "name": "Summit Software Works"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web3 & Blockchain Solutions",
                    "description": "Smart contract development, DeFi platforms, and blockchain integration services.",
                    "serviceType": ["Blockchain Development", "Smart Contracts", "DeFi Solutions"],
                    "provider": {"@type": "Organization", "name": "Summit Software Works"}
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Mobile Solutions",
                    "description": "Cross-platform mobile development with React Native and native iOS/Android expertise.",
                    "serviceType": ["Mobile Development", "Cross Platform Development", "Enterprise Mobile"],
                    "provider": {"@type": "Organization", "name": "Summit Software Works"}
                  }
                }
              ]
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Software Development Services",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Enterprise Software Development",
                  "description": "Custom enterprise software solutions that drive digital transformation and operational efficiency."
                },
                {
                  "@type": "Service",
                  "name": "AI & Machine Learning",
                  "description": "Intelligent automation and data-driven solutions powered by cutting-edge AI technology."
                },
                {
                  "@type": "Service",
                  "name": "Cloud-Native Development",
                  "description": "Scalable, resilient applications built on modern cloud infrastructure."
                }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-mountain-900 to-primary-600 text-white overflow-hidden">
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
              Enterprise Software Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 hover:text-white transition-colors duration-300 mb-8"
              style={{ y }}
            >
              Transform your business with cutting-edge technology solutions that drive growth and innovation.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-200">
              Schedule a free consultation to discuss your project with our experts.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-mountain-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Book Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 