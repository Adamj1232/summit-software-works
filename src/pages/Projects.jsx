import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Alpine E-Commerce Platform",
      description: "A modern e-commerce solution built with Next.js and GraphQL, featuring real-time inventory management and seamless payment processing.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["Next.js", "GraphQL", "Stripe", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Summit Analytics Dashboard",
      description: "A comprehensive analytics platform providing real-time insights and data visualization for business intelligence.",
      image: "/images/projects/analytics.jpg",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Peak NFT Marketplace",
      description: "A Web3-enabled NFT marketplace for digital artists, featuring smart contract integration and secure wallet connections.",
      image: "/images/projects/nft.jpg",
      tags: ["Web3.js", "Solidity", "React", "IPFS"],
      link: "#"
    }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-mountain-900 to-mountain-800 text-white">
        <div className="absolute inset-0 bg-mountain-pattern opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-mountain-200">
              Discover how we've helped businesses transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-mountain-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="relative aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-${index + 1}?auto=format&fit=crop&w=800&q=80`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mountain-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-mountain-800">
                  {project.title}
                </h3>
                
                <p className="text-mountain-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-forest-100 text-forest-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={project.link}
                  className="text-forest-600 font-semibold hover:text-forest-700 transition-colors"
                >
                  View Project →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mountain-pattern opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-8 text-forest-100">
              Let's create your next success story together.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary bg-white text-forest-900 hover:bg-forest-50"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 