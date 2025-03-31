import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.02;
    const moveY = (clientY - window.innerHeight / 2) * 0.02;
    setMousePosition({ x: moveX, y: moveY });
  };

  // Add sparkle effect on mouse move
  const [sparkles, setSparkles] = useState([]);
  
  const addSparkle = (e) => {
    const { clientX, clientY } = e;
    const newSparkle = {
      id: Date.now(),
      x: clientX,
      y: clientY,
    };
    setSparkles(prev => [...prev, newSparkle]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
    }, 1000);
  };

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
      icon: "💡",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in code quality, performance, and user experience.",
      icon: "⭐",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Partnership",
      description: "We build lasting relationships with our clients, becoming trusted technology partners.",
      icon: "🤝",
      color: "from-orange-500 to-pink-500"
    }
  ];

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div className="page-transition sparkle-container" onMouseMove={handleMouseMove} onClick={addSparkle}>
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          className="sparkle"
          initial={{ scale: 0, x: sparkle.x, y: sparkle.y }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative py-32 bg-mountain-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated grid background */}
          <div className="absolute inset-0 animate-gradient-shift opacity-30" 
            style={{
              backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)`,
              transition: 'background-position 0.3s ease-out'
            }}
          />
          
          {/* Geometric shapes */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute animate-float"
              style={{
                width: Math.random() * 40 + 20 + 'px',
                height: Math.random() * 40 + 20 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(255, 255, 255, 0.1)`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{
                scale: 1.5,
                filter: 'brightness(1.5)',
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              style={{ scale }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Story
            </motion.h1>
            <motion.p
              className="text-xl text-white/90"
              style={{ y }}
            >
              Building exceptional digital experiences with passion and precision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values Section with enhanced animations */}
      <section className="py-20 bg-mountain-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Values
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              These core principles guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative group hover-lift"
              >
                <motion.div
                  className="absolute -inset-2 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-xl animate-pulse-glow"
                  style={{
                    background: `linear-gradient(45deg, ${value.color.split(' ')[1]}, ${value.color.split(' ')[3]})`,
                  }}
                />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <motion.div
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold mb-3 gradient-text-flow"
                    whileHover={{ scale: 1.1 }}
                  >
                    {value.title}
                  </motion.h3>
                  <p className="text-blue-100">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced animations */}
      <section className="py-20 bg-gradient-to-br from-mountain-50 to-forest-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="gradient-text-flow text-4xl font-bold mb-6 animate-bounce-subtle">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-mountain-600 mb-8 hover-glow">
              Let's work together to bring your vision to life.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold overflow-hidden group animate-pulse-glow"
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 