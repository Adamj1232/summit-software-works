import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-mountain-900 to-mountain-800 overflow-hidden">
        <div className="absolute inset-0 bg-mountain-pattern opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Elevate Your Digital Presence
            </motion.h1>
            
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
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="btn btn-secondary"
              >
                View Our Work
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
            <h2 className="section-title">Our Expertise</h2>
            <p className="text-xl text-mountain-600 max-w-2xl mx-auto">
              We deliver comprehensive solutions that help businesses thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Full-stack solutions with modern frameworks and technologies that deliver exceptional user experiences.",
                icon: "💻"
              },
              {
                title: "Software Design",
                description: "Custom software applications engineered to solve complex problems and streamline operations.",
                icon: "🔧"
              },
              {
                title: "Web3 Integration",
                description: "Blockchain solutions, smart contracts, and decentralized applications for the future of the internet.",
                icon: "🔗"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:bg-forest-50"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-mountain-800">{service.title}</h3>
                <p className="text-mountain-600">{service.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Vision?</h2>
            <p className="text-xl mb-8 text-forest-100">
              Let's create something extraordinary together.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary bg-white text-forest-900 hover:bg-forest-50"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;