import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Crafting Digital Solutions in the Pacific Northwest",
  subtitle = "Transforming ideas into elegant, scalable software solutions with a focus on user experience and performance"
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-mountain-50 to-mountain-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-mountain-pattern"></div>
      
      {/* Animated Mountain Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 w-full h-64 bg-mountain-800"
          style={{
            clipPath: 'polygon(0 100%, 100% 100%, 100% 30%, 75% 60%, 50% 30%, 25% 70%, 0 40%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-display font-bold text-mountain-900 mb-6"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-mountain-600 mb-12 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary"
          >
            Get in Touch
          </motion.button>
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
            className="w-6 h-6 text-mountain-500"
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