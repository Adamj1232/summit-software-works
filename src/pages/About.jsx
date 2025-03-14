import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-mountain-200">
              Building exceptional digital experiences with passion and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-mountain-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Mission</h2>
              <p className="text-lg text-mountain-600 mb-6">
                At Summit Software Works, we're dedicated to helping businesses reach new heights through innovative digital solutions. Our mission is to create software that not only meets technical excellence but also delivers real business value.
              </p>
              <p className="text-lg text-mountain-600">
                We believe in the power of technology to transform businesses and enhance user experiences. Every line of code we write is crafted with purpose, precision, and a deep understanding of our clients' needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/mission.jpg"
                  alt="Team collaboration"
                  className="object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-forest-100 max-w-2xl mx-auto">
              These core principles guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
                icon: "💡"
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in code quality, performance, and user experience.",
                icon: "⭐"
              },
              {
                title: "Partnership",
                description: "We build lasting relationships with our clients, becoming trusted technology partners.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-forest-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mountain-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="section-title">Ready to Start Your Journey?</h2>
            <p className="text-xl text-mountain-600 mb-8">
              Let's work together to bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 