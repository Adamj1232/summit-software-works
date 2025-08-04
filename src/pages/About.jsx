import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.02;
    const moveY = (clientY - window.innerHeight / 2) * 0.02;
    setMousePosition({ x: moveX, y: moveY });
  };

  const milestones = [
    {
      year: "2019",
      title: "Founded",
      description: "Started with a vision to transform digital landscapes through innovative software solutions."
    },
    {
      year: "2019",
      title: "Enterprise Solutions",
      description: "Launched enterprise division, delivering high-scale applications for Fortune 500 companies."
    },
    {
      year: "2022",
      title: "Web3 Innovation",
      description: "Pioneered blockchain integration services, becoming a leader in Web3 development."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded operations globally, serving clients across North America, Europe, and Asia."
    },
    {
      year: "2025",
      title: "AI Integration",
      description: "Launched AI solutions division, helping businesses leverage cutting-edge machine learning."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push technological boundaries to create solutions that define the future of digital experiences.",
      icon: "💡",
      color: "from-blue-500 to-purple-500",
      examples: [
        "Pioneered serverless architecture for enterprise",
        "Early adopters of Web3 technology",
        "Custom AI model integration"
      ]
    },
    {
      title: "Excellence",
      description: "Our commitment to quality and performance sets new standards in software development.",
      icon: "⭐",
      color: "from-green-500 to-teal-500",
      examples: [
        "99.99% application uptime",
        "Sub-second response times",
        "Comprehensive testing coverage"
      ]
    },
    {
      title: "Partnership",
      description: "We build lasting relationships, becoming an integral part of our clients' success stories.",
      icon: "🤝",
      color: "from-orange-500 to-pink-500",
      examples: [
        "24/7 dedicated support",
        "Transparent development process",
        "Long-term growth focus"
      ]
    }
  ];

  const expertise = [
    {
      area: "Frontend Excellence",
      skills: ["React", "Next.js", "Vue", "Angular"],
      level: 95
    },
    {
      area: "Backend Systems",
      skills: ["Node.js", "Python", "Java", "Go"],
      level: 90
    },
    {
      area: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes"],
      level: 88
    },
    {
      area: "Web3 & Blockchain",
      skills: ["Ethereum", "Solidity", "Web3.js", "Smart Contracts"],
      level: 92
    }
  ];

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div className="page-transition" onMouseMove={handleMouseMove}>
      <Helmet>
        <title>About Summit Software Works - Leading Software Development Company</title>
        <meta name="description" content="Learn about Summit Software Works' journey in delivering innovative software solutions. Discover our values, expertise, and commitment to excellence in software development." />
        <meta property="og:title" content="About Summit Software Works - Leading Software Development Company" />
        <meta property="og:description" content="Discover how Summit Software Works transforms businesses through innovative software solutions, Web3 integration, and AI-powered development." />
        <meta name="keywords" content="software development company, web development, blockchain solutions, AI development, custom software, enterprise solutions" />
      </Helmet>

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
              Crafting Digital Excellence
            </motion.h1>
            <motion.p
              className="text-xl text-white/90"
              style={{ y }}
            >
              A decade of innovation, hundreds of successful projects, and a commitment to pushing technological boundaries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white dark:bg-mountain-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Our Journey
              </h2>
              <p className="text-xl text-mountain-600 dark:text-mountain-300">
                From startup to industry leader, our story is one of continuous innovation and excellence.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

              {/* Milestones */}
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } mb-8`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white dark:bg-mountain-800 p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-mountain-800 dark:text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-mountain-600 dark:text-mountain-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with enhanced animations */}
      <section className="py-20 bg-mountain-50 dark:bg-mountain-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Core Values
            </h2>
            <p className="text-xl text-mountain-600 dark:text-mountain-300 max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
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
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative group hover-lift"
              >
                <motion.div
                  className="absolute -inset-2 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{
                    background: `linear-gradient(45deg, ${value.color.split(' ')[1]}, ${value.color.split(' ')[3]})`,
                  }}
                />
                <div className="relative bg-white dark:bg-mountain-900/90 rounded-xl p-8">
                  <motion.div
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-mountain-800 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-mountain-600 dark:text-mountain-300 mb-6">
                    {value.description}
                  </p>
                  <div className="space-y-2">
                    {value.examples.map((example, i) => (
                      <div key={i} className="flex items-center text-mountain-600 dark:text-mountain-400">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white dark:bg-mountain-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Technical Expertise
            </h2>
            <p className="text-xl text-mountain-600 dark:text-mountain-300 max-w-2xl mx-auto">
              Our team brings deep expertise across the full technology stack.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-mountain-50 dark:bg-mountain-800 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-mountain-800 dark:text-white">
                  {item.area}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white dark:bg-mountain-700 rounded-full text-sm text-mountain-600 dark:text-mountain-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="relative h-2 bg-mountain-200 dark:bg-mountain-700 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 text-mountain-200">
              Let's discuss how we can help transform your digital vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-website">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-mountain-900 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  🚀 Get Your FREE Website
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Start a Conversation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 