import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const NavLink = memo(({ item, isActive }: { item: NavItem; isActive: boolean }) => (
  <Link
    to={item.path}
    className={`relative px-4 py-2.5 text-base font-medium transition-all duration-200
      ${isActive 
        ? 'text-white font-semibold' 
        : 'text-white/90 hover:text-white'
      }`}
  >
    <span className="relative z-10">
      {item.name}
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </span>
  </Link>
));

const MobileNavLink = memo(({ item, isActive, onClick }: { item: NavItem; isActive: boolean; onClick: () => void }) => (
  <Link
    to={item.path}
    onClick={onClick}
    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive 
        ? 'text-primary-500 bg-primary-50 dark:text-secondary-400 dark:bg-mountain-800' 
        : 'text-mountain-600 hover:text-primary-500 hover:bg-primary-50/50 dark:text-mountain-300 dark:hover:text-secondary-400 dark:hover:bg-mountain-800/50'
    }`}
  >
    {item.name}
  </Link>
));

const GetStartedButton = memo(({ className = '' }: { className?: string }) => (
  <Link to="/contact">
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-2.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg 
        shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 
        transition-all duration-200 focus-ring ${className}`}
    >
      Get Started
    </motion.button>
  </Link>
));

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isDesktop;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-mountain-900/95 backdrop-blur-xl shadow-lg border-b border-white/10'
            : 'bg-mountain-900/90 backdrop-blur-lg'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Logo size={isDesktop ? "large" : "default"} className="py-2" animate={isDesktop}/>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.path} item={item} isActive={location.pathname === item.path} />
              ))}
              <GetStartedButton />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg text-white hover:bg-white/10 
                focus-ring"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <motion.span
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
                  className="w-full h-0.5 bg-white transform origin-left transition-all duration-200"
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  className="w-full h-0.5 bg-white transition-all duration-200"
                />
                <motion.span
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
                  className="w-full h-0.5 bg-white transform origin-left transition-all duration-200"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMobileMenu}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed right-0 top-0 bottom-0 w-[80vw] max-w-[320px] bg-mountain-900 
                  border-l border-white/10 z-50 md:hidden"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b border-white/10">
                    <Logo size="small" />
                    <button
                      onClick={closeMobileMenu}
                      className="p-2.5 rounded-lg text-white hover:bg-white/10 focus-ring"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <nav className="flex-1 px-4 py-6 space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                          location.pathname === item.path 
                            ? 'text-white font-semibold bg-white/10' 
                            : 'text-white/90 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="mt-6">
                      <GetStartedButton className="w-full py-3" />
                    </div>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;