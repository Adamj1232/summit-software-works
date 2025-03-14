import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-mountain-900/80 backdrop-blur-sm border-b border-mountain-200 dark:border-mountain-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group ${
                  isActive(item.path)
                    ? 'text-brand-blue dark:text-accent-glow'
                    : 'text-mountain-600 hover:text-mountain-900 dark:text-mountain-400 dark:hover:text-white'
                }`}
              >
                <span className="relative">
                  {item.name}
                  <motion.span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-gradient transform origin-left
                      ${isActive(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    initial={false}
                    animate={{
                      scaleX: isActive(item.path) ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </span>
              </Link>
            ))}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-mountain-100 dark:hover:bg-mountain-800"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                }}
                className="w-full h-0.5 bg-mountain-600 dark:bg-mountain-400 transform origin-left"
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                className="w-full h-0.5 bg-mountain-600 dark:bg-mountain-400"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                }}
                className="w-full h-0.5 bg-mountain-600 dark:bg-mountain-400 transform origin-left"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-mountain-900"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`py-2 ${
                  isActive(item.path)
                    ? 'text-brand-blue dark:text-accent-glow'
                    : 'text-mountain-600 hover:text-mountain-900 dark:text-mountain-400 dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;