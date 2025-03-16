import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/brand/logo-icon-transparent_bg1.png';

const Logo = ({ className = '', showText = true, size = 'default' }) => {
  const sizeClasses = {
    small: 'h-8',
    default: 'h-12',
    large: 'h-16'
  };

  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 via-brand-green/40 to-brand-purple/40 rounded-full blur-xl group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative">
          <motion.img 
            src={logoIcon}
            alt="Summit Software Works Logo" 
            className={`${sizeClasses[size]} w-auto`}
            animate={{
              y: [-2, 2, -2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* {showText && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-3 text-2xl font-display"
            >
              <span className="gradient-text font-bold">Summit Software</span>
              <span className="text-brand-purple dark:text-brand-green"> Works</span>
            </motion.div>
          )} */}
        </div>
      </motion.div>
    </Link>
  );
};

export default Logo; 