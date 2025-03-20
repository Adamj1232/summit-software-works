import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/brand/logo-icon-transparent_bg1.png';

interface LogoProps {
  className?: string;
  size?: 'small' | 'default' | 'large';
  showText?: boolean;
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'default', showText = false, animate = false }) => {
  const sizeClasses = {
    small: 'h-8',
    default: 'h-12',
    large: 'h-16'
  };

  const hoverAnimation = {
    scale: 1.1,
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
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <motion.div
        whileHover={hoverAnimation}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 via-brand-green/40 to-brand-purple/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <motion.img 
          src={logoIcon}
          alt="Summit Software Works Logo" 
          className={`${sizeClasses[size]} w-auto relative`}
          animate={animate ? floatAnimation : undefined}
        />
      </motion.div>
      {showText && (
        <span className="ml-3 text-xl font-bold text-white">
          Summit<span className="text-accent-glow">Software</span>
        </span>
      )}
    </Link>
  );
};

export default Logo; 