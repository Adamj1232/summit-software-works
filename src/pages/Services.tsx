import { FC, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';

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
      id: 'web',
      title: 'Web Development',
      description: 'We craft robust, scalable web applications that drive business growth. Our expertise spans modern frameworks like React, Next.js, and Node.js, ensuring your digital presence is both powerful and performant.',
      features: [
        'Custom Web Application Development',
        'Progressive Web Apps (PWAs)',
        'API Development & Integration',
        'Cloud-Native Solutions',
        'Performance Optimization'
      ]
    },
    {
      id: 'software',
      title: 'Software Design',
      description: 'Our software design approach combines architectural excellence with practical implementation. We create maintainable, scalable systems that evolve with your business needs.',
      features: [
        'System Architecture Design',
        'Microservices Architecture',
        'Cloud Infrastructure Design',
        'Database Design & Optimization',
        'Security-First Approach'
      ]
    },
    {
      id: 'web3',
      title: 'Web3 Integration',
      description: 'We bridge traditional web applications with the future of decentralized technology. Our team specializes in blockchain integration, smart contracts, and decentralized applications (dApps).',
      features: [
        'Smart Contract Development',
        'Blockchain Integration',
        'NFT Implementation',
        'DeFi Solutions',
        'Web3 Authentication'
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      description: 'We build high-performance, native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile solutions combine cutting-edge technology with intuitive design to ensure maximum engagement and ROI.',
      features: [
        'Native iOS & Android Development',
        'Cross-Platform Solutions (React Native)',
        'App Store Optimization',
        'Push Notification Systems',
        'Offline-First Architecture',
        'Mobile Analytics Integration'
      ]
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      description: 'Our technical SEO expertise ensures your digital presence ranks at the top. We combine technical optimization with content strategy to maximize your online visibility.',
      features: [
        'Technical SEO Audit',
        'Performance Optimization',
        'Schema Markup Implementation',
        'Mobile-First Optimization',
        'Core Web Vitals Enhancement'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-mountain-900" onMouseMove={handleMouseMove}>
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
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 hover:text-white transition-colors duration-300"
              style={{ y }}
            >
              Elevating businesses through innovative software solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      <div className="container mx-auto px-6 py-16">
        {services.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id}
            className="mb-24 scroll-mt-20 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative line */}
              <motion.div
                className="absolute -left-8 top-0 w-1 h-full bg-primary/20 dark:bg-secondary/40"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              />

              <div className="relative">
                <motion.div
                  className="absolute -left-4 -top-4 w-8 h-8 bg-primary/10 dark:bg-secondary/30 rounded-full"
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <h2 className="text-3xl font-heading font-bold text-mountain-900 dark:text-white mb-6 relative">
                  {service.title}
                </h2>
              </div>
              
              <p className="text-lg text-mountain-600 dark:text-neutral-light/90 mb-8 max-w-3xl">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex}
                    className="group flex items-start space-x-3 p-4 bg-white dark:bg-mountain-800 rounded-lg hover:bg-primary/5 dark:hover:bg-secondary/10 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg 
                        className="w-6 h-6 text-primary dark:text-secondary-400 mt-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </motion.div>
                    <span className="text-mountain-700 dark:text-neutral-light/90 group-hover:text-primary dark:group-hover:text-secondary-400 transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative corner elements */}
              <motion.div
                className="absolute -right-4 -top-4 w-16 h-16 border-t-2 border-r-2 border-primary/20 dark:border-secondary/40"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute -left-4 -bottom-4 w-16 h-16 border-b-2 border-l-2 border-primary/20 dark:border-secondary/40"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services; 