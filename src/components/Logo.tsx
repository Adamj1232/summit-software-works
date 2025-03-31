import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/brand/logo-icon1.png';

interface LogoProps {
  className?: string;
  size?: 'small' | 'default' | 'large' | 'xl' | 'xxl' | 'xxxl';
  showText?: boolean;
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'default', showText = false, animate = false }) => {
  const sizeClasses = {
    small: 'h-8',
    default: 'h-12',
    large: 'h-16',
    xl: 'h-20',
    xxl: 'h-28',
    xxxl: 'h-32'
  };

  const hoverAnimation = {
    scale: 1.02,
    transition: { duration: 0.2 }
  };

  const floatAnimation = {
    y: [-2, 2, -2],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-3 flex-col ${className}`}>
      <motion.div
        whileHover={hoverAnimation}
        whileTap={{ scale: 0.98 }}
        className="relative group"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-full blur-xl 
            group-hover:opacity-100 transition-opacity duration-300"
        />
        <motion.img 
          src={logoIcon}
          alt="Summit Software Works Logo" 
          className={`${sizeClasses[size]} w-auto relative drop-shadow-lg`}
          animate={animate ? floatAnimation : undefined}
        />
      </motion.div>
      {showText && (
        <motion.span 
          className="ml-3 text-2xl font-bold text-mountain-900 dark:text-white flex items-center"
          whileHover={hoverAnimation}
        >
          <span className="gradient-text">Summit</span>
          <span className="mx-1 text-primary-500">Software</span>
          <span className="text-secondary-500">Works</span>
          <motion.div
            className="ml-1 w-1.5 h-1.5 rounded-full bg-accent-500"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.span>
      )}
    </Link>
  );
};

export default Logo; 