
// src/components/layout/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollPosition > 50;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-blue-500 text-3xl">⛰️</span>
          <span className="text-xl font-bold text-white">Summit Software</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'About', path: '/about' },
            { name: 'Blog', path: '/blog' },
            { name: 'Contact', path: '/contact' },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-gray-300 hover:text-white transition duration-200 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link 
          to="/contact"
          className="hidden md:block px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 shadow-lg shadow-blue-600/20"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'About', path: '/about' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block py-2 text-gray-300 hover:text-white transition duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium text-center transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
