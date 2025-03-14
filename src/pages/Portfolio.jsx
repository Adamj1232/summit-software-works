import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Alpine Financial Dashboard",
      category: "Web Application",
      description: "A comprehensive financial dashboard for investment tracking and portfolio management with real-time data visualization.",
      technologies: ["React", "Node.js", "D3.js", "MongoDB"],
      image: "/api/placeholder/600/400",
      features: [
        "Real-time data synchronization",
        "Interactive charts and graphs",
        "Secure authentication system",
        "Responsive design across all devices"
      ]
    },
    {
      id: 2,
      title: "Horizon NFT Marketplace",
      category: "Web3 Platform",
      description: "A decentralized marketplace for digital artists to mint, sell, and trade NFTs with minimal transaction fees.",
      technologies: ["Ethereum", "Solidity", "React", "IPFS"],
      image: "/api/placeholder/600/400",
      features: [
        "Smart contract integration",
        "Decentralized storage",
        "Creator royalties",
        "Cross-chain compatibility"
      ]
    },
    {
      id: 3,
      title: "Pinnacle E-Commerce Solution",
      category: "E-Commerce Platform",
      description: "A scalable e-commerce platform with advanced inventory management and omnichannel selling capabilities.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Stripe"],
      image: "/api/placeholder/600/400",
      features: [
        "Advanced product filtering",
        "Inventory synchronization",
        "Multiple payment gateways",
        "Custom shipping rules"
      ]
    },
    {
      id: 4,
      title: "Venture CRM System",
      category: "Business Software",
      description: "A customer relationship management system tailored for venture capital firms to track deals and portfolio companies.",
      technologies: ["Vue.js", "Express", "MySQL", "AWS"],
      image: "/api/placeholder/600/400",
      features: [
        "Deal flow tracking",
        "Investor relationship management",
        "Performance analytics",
        "Document management system"
      ]
    },
    {
      id: 5,
      title: "Summit Analytics Platform",
      category: "Data Visualization",
      description: "An advanced analytics platform that transforms complex data into actionable insights through interactive visualizations.",
      technologies: ["Python", "Django", "TensorFlow", "Chart.js"],
      image: "/api/placeholder/600/400",
      features: [
        "Predictive analytics",
        "Custom reporting",
        "Data integration APIs",
        "Automated insights"
      ]
    },
    {
      id: 6,
      title: "Ascend Mobile App",
      category: "Mobile Application",
      description: "A fitness tracking mobile application with personalized workout plans and nutrition guidance.",
      technologies: ["React Native", "Firebase", "Node.js", "TensorFlow"],
      image: "/api/placeholder/600/400",
      features: [
        "AI-powered workout recommendations",
        "Progress tracking",
        "Social community features",
        "Integration with wearable devices"
      ]
    }
  ];

  // Filter categories
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Web Application', 'Web3 Platform', 'E-Commerce Platform', 'Business Software', 'Data Visualization', 'Mobile Application'];

  // Filtered projects
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Header Section with Parallax Effect */}
      <header className="relative h-64 sm:h-96 flex items-center overflow-hidden">
        {/* Mountain silhouette background */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path fill="#2A3A4A" d="M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,117.3C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path fill="#1A365D" opacity="0.7" d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        {/* Tech grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Portfolio</h1>
            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            <p className="text-xl text-gray-300">
              Explore our diverse range of projects that showcase our expertise in crafting innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Filter Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-700/10 transition duration-300 border border-gray-700 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition duration-500 transform group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-70" />
                  <div className="absolute bottom-0 w-full p-4">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-600 text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-2">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-400">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center group-hover:underline">
                    View Project Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Mountain ridge background with parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"
            style={{transform: `translateY(${scrollY * 0.1}px)`}}
          />
          <svg viewBox="0 0 1440 320" className="absolute top-0 w-full opacity-10" style={{transform: `translateY(${scrollY * -0.05}px)`}}>
            <path fill="#3B82F6" d="M0,128L40,122.7C80,117,160,107,240,106.7C320,107,400,117,480,149.3C560,181,640,235,720,245.3C800,256,880,224,960,186.7C1040,149,1120,107,1200,96C1280,85,1360,107,1400,117.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "50+", label: "Happy Clients" },
              { number: "120+", label: "Projects Completed" },
              { number: "15+", label: "Team Members" },
              { number: "4", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-400">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60" />
        
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * -0.05}px)`
          }}
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Let's collaborate to bring your vision to life with our expertise in web development and design.
            </p>
            <button className="px-8 py-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-white shadow-lg shadow-blue-600/20">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;