import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      title: "Web Development",
      description: "Full-stack solutions with modern frameworks and technologies that deliver exceptional user experiences.",
      icon: "💻",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Software Design",
      description: "Custom software applications engineered to solve complex problems and streamline operations.",
      icon: "🔧",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Web3 Integration",
      description: "Blockchain solutions, smart contracts, and decentralized applications for the future of the internet.",
      icon: "🔗",
      color: "from-orange-500 to-pink-500"
    }
  ];

  return (
    <div className="page-transition" onMouseMove={handleMouseMove}>
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
                Elevate Your Digital Presence
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-mountain-200 mb-8"
            >
              We craft exceptional web experiences that combine stunning design with powerful functionality.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
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
      <section className="py-20 bg-mountain-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mountain-800 to-forest-800">
              Our Expertise
            </h2>
            <p className="text-xl text-mountain-600 max-w-2xl mx-auto">
              We deliver comprehensive solutions that help businesses thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative group"
              >
                <motion.div
                  className={`card hover:shadow-2xl transition-all duration-300 backdrop-blur-sm 
                    ${hoveredService === index ? 'bg-gradient-to-br ' + service.color + ' text-white' : 'bg-white'}`}
                >
                  <motion.div
                    className="text-6xl mb-6"
                    animate={hoveredService === index ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] } : {}}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className={hoveredService === index ? 'text-white/90' : 'text-mountain-600'}>
                    {service.description}
                  </p>
                  
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-forest-900 via-purple-900 to-mountain-900 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Ready to Transform Your Digital Vision?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's create something extraordinary together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-white text-forest-900 rounded-lg font-semibold overflow-hidden group"
              >
                <span className="relative z-10">Start the Conversation</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
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