import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Accelerating Digital Innovation",
  subtitle = "Transforming ideas into elegant, scalable software solutions with our iAcceleration™ methodology"
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-light dark:bg-mountain-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-acceleration-pattern from-primary-500/[0.03] via-secondary-500/[0.03] to-accent-500/[0.03] opacity-50 dark:opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-light/80 dark:to-mountain-900/80"></div>
      </div>
      
      {/* Animated Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 text-mountain-500">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 rounded-full bg-accent-500"
            />
            <span className="text-lg font-medium">iAcceleration™ Powered</span>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-mountain-600 dark:text-mountain-300 mb-12 max-w-3xl mx-auto font-medium"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg 
                shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 
                transition-all duration-200 focus-ring min-w-[200px]"
            >
              View Our Work
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white dark:bg-mountain-800 text-mountain-900 dark:text-white font-semibold rounded-lg 
                shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10
                border border-mountain-200/50 dark:border-mountain-700/50
                transition-all duration-200 focus-ring min-w-[200px]"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-6 text-mountain-400 dark:text-mountain-500 hover:text-primary-500 dark:hover:text-secondary-400 
              transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 