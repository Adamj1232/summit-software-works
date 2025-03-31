import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MetaTags from '../components/seo/MetaTags';

const NotFound = () => {
  return (
    <>
      <MetaTags
        title="Page Not Found | Summit Software Works"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our software development services."
        url="/404"
        keywords="404, not found, summit software works, software development"
      />
      <div className="min-h-screen flex items-center justify-center p-4 bg-neutral-light dark:bg-mountain-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-8xl mb-6"
          >
            🏔️
          </motion.div>
          <h1 className="text-4xl font-bold mb-4 text-mountain-900 dark:text-white">
            404 - Peak Not Found
          </h1>
          <p className="text-mountain-600 dark:text-mountain-300 mb-8">
            Looks like you've ventured off the mapped trail. Let's get you back to familiar territory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white 
                  font-semibold rounded-lg shadow-lg shadow-primary-500/20 hover:shadow-xl 
                  hover:shadow-primary-500/30 transition-all duration-200 w-full sm:w-auto"
              >
                Return to Base Camp
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-white dark:bg-mountain-800 text-mountain-900 
                  dark:text-white font-semibold rounded-lg shadow-lg shadow-black/5 
                  hover:shadow-xl hover:shadow-black/10 border border-mountain-200/50 
                  dark:border-mountain-700/50 transition-all duration-200 w-full sm:w-auto"
              >
                Contact Support
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound; 