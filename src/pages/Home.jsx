import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MetaTags from '../components/seo/MetaTags';

const Home = () => {
  const [hoveredService, setHoveredService] = useState(null);

  // Parallax mouse movement effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.05;
    const moveY = (clientY - window.innerHeight / 2) * 0.05;
    setMousePosition({ x: moveX, y: moveY });
  };

  const services = [
    {
      title: "Custom Web Development",
      description: "Drive growth with scalable, high-performance web applications. We build secure, user-focused experiences using React, Next.js, and Node.js, tailored for Denver businesses and beyond.",
      icon: "💻",
      color: "from-blue-500 to-forest-500",
      features: ["User-Centric Design", "Scalable Architecture", "API Integration", "Cloud Deployment"]
    },
    {
      title: "Enterprise Software Solutions",
      description: "Streamline operations and cut costs with robust custom software. We modernize legacy systems and architect cloud-native solutions that adapt and scale with your enterprise.",
      icon: "🔧",
      color: "from-forest-500 to-forest-600",
      features: ["Legacy Modernization", "Microservices", "Cloud Solutions", "Process Automation"]
    },
    {
      title: "Web3 & Blockchain Development",
      description: "Leverage the power of decentralization. We build secure smart contracts, develop dApps, and integrate blockchain technology to unlock new opportunities for your business.",
      icon: "🔗",
      color: "from-forest-400 to-blue-500",
      features: ["Smart Contracts (Solidity)", "dApp Development", "DeFi Solutions", "Blockchain Integration"]
    },
    {
      title: "AI Integration & Development",
      description: "Enhance your applications with artificial intelligence. We integrate LLMs, build custom AI models, and develop intelligent automation to boost efficiency and user engagement.",
      icon: "🤖",
      color: "from-blue-400 to-purple-500",
      features: ["LLM Integration (OpenAI)", "Custom AI Models", "Data Analytics", "Workflow Automation"]
    }
  ];

  return (
    <div className="page-transition" onMouseMove={handleMouseMove}>
      <MetaTags 
        title="Summit Software Works | Denver Web Development & Custom Software"
        description="Expert Denver software development agency specializing in custom web applications, Web3/blockchain, AI integration, and professional website design. Partner with us to transform your digital future."
        url="/"
        pageType="home"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-mountain-900 to-mountain-800 overflow-hidden">
        {/* Dynamic mountain peaks background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              style={{
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                background: `linear-gradient(${45 + i * 30}deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`,
                transform: `translate(${mousePosition.x * (i + 1)}px, ${mousePosition.y * (i + 1)}px) scale(${1 + i * 0.2})`,
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-mountain-pattern opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Build Your Digital Advantage
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-mountain-200 mb-6"
            >
              Partner with Summit Software Works, your expert Denver software development team. We craft high-performance web applications, Web3 solutions, and AI integrations that deliver measurable results.
            </motion.p>

            {/* Limited Time Free Website Offer Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full text-white font-bold text-lg mb-8 shadow-lg"
            >
              <span className="mr-2">🎉</span>
              LIMITED TIME: Get Your Professional Website FREE!
            </motion.div>

            {/* Add social proof metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">98%</div>
                <div className="text-sm text-mountain-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-mountain-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">24/7</div>
                <div className="text-sm text-mountain-300">Support & Maintenance</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/free-website">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10">🚀 Get Your FREE Website</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400/10 transition-colors"
                >
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-light dark:bg-mountain-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-secondary-400 dark:to-primary-400">
              Solutions We Engineer
            </h2>
            <p className="text-xl text-mountain-700 dark:text-mountain-200 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end software development services tailored to your unique goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className={`relative group ${
                  services.length % 2 !== 0 && index === services.length - 1 
                    ? 'md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-[400px]' 
                    : ''
                }`}
              >
                <motion.div
                  className={`card hover:shadow-2xl transition-all duration-300 backdrop-blur-sm 
                    ${hoveredService === index 
                      ? 'bg-gradient-to-br ' + service.color + ' text-white' 
                      : 'bg-white dark:bg-mountain-800/90'}`}
                >
                  <motion.div
                    className="text-6xl mb-6"
                    animate={hoveredService === index ? { scale: [1, 1.4, 1], rotate: [0, 20, 0] } : {}}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className={`text-xl font-semibold mb-3 ${
                    hoveredService === index 
                      ? 'text-white' 
                      : 'text-mountain-900 dark:text-white'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={
                    hoveredService === index 
                      ? 'text-white/90' 
                      : 'text-mountain-600 dark:text-mountain-300'
                  }>
                    {service.description}
                  </p>
                  
                  {/* Add feature tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className={`text-sm px-3 py-1 rounded-full ${
                          hoveredService === index
                            ? 'bg-white/20 text-white'
                            : 'bg-mountain-100 dark:bg-mountain-700 text-mountain-600 dark:text-mountain-300'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 -z-10 blur-xl transition-all duration-500"
                    animate={hoveredService === index ? { scale: [0.8, 1.2], opacity: [0, 0.2] } : {}}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-mountain-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-secondary-400 dark:to-primary-400">
              What Our Clients Say
            </h2>
            <p className="text-xl text-mountain-700 dark:text-mountain-200 max-w-2xl mx-auto">
              Real results from real businesses we've helped grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                title: "CEO, TechFlow Solutions",
                image: "/api/placeholder/80/80",
                rating: 5,
                text: "Summit Software Works delivered exactly what we needed. Their expertise in React and Node.js helped us launch 2 months ahead of schedule. The free website offer was incredible!",
                result: "2 months ahead of schedule"
              },
              {
                name: "Mike Rodriguez",
                title: "Founder, Denver Digital",
                image: "/api/placeholder/80/80", 
                rating: 5,
                text: "Working with Summit Software Works was a game-changer. They built our entire platform and the results speak for themselves. Professional, reliable, and truly experts in their field.",
                result: "300% increase in leads"
              },
              {
                name: "Lisa Chen",
                title: "CTO, Mountain View Analytics",
                image: "/api/placeholder/80/80",
                rating: 5,
                text: "The team at Summit Software Works understood our complex requirements and delivered a solution that exceeded expectations. Their Web3 integration was flawless.",
                result: "99.9% uptime achieved"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-mountain-50 dark:bg-mountain-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-primary-200"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=3b82f6&color=ffffff&size=64`;
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-mountain-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-mountain-600 dark:text-mountain-300">{testimonial.title}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-mountain-700 dark:text-mountain-200 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="text-sm font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full inline-block">
                  ✅ {testimonial.result}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-mountain-600 dark:text-mountain-300 mb-8">
              Trusted by businesses across Colorado and beyond
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[
                "TechFlow Solutions",
                "Denver Digital", 
                "Mountain Analytics",
                "Colorado Consulting",
                "Summit Ventures",
                "Boulder Tech"
              ].map((company, index) => (
                <div
                  key={index}
                  className="text-mountain-500 dark:text-mountain-400 font-medium px-4 py-2 border border-mountain-200 dark:border-mountain-600 rounded-lg"
                >
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-forest-900 via-purple-900 to-mountain-900 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(5, 122, 85, 0.15) 0%, transparent 70%)",
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-xl mb-8 text-blue-400 dark:text-blue-400">
              Join industry leaders who trust us with their digital transformation. Schedule a free consultation today.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-white mb-2">10+</div>
                <div className="text-sm text-blue-800 dark:text-blue-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-white mb-2">200+</div>
                <div className="text-sm text-blue-800 dark:text-blue-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-white mb-2">99%</div>
                <div className="text-sm text-blue-800 dark:text-blue-300">Project Success</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-white mb-2">24/7</div>
                <div className="text-sm text-blue-800 dark:text-blue-300">Expert Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-website">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-white rounded-lg font-semibold overflow-hidden group"
                >
                  <span className="relative z-10 text-forest-800">🎉 Claim Your FREE Website</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-200 to-blue-200"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-mountain-600 dark:border-white text-mountain-600 dark:text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;