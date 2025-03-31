import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-neutral-light dark:bg-mountain-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full text-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl mb-6"
            >
              ⚠️
            </motion.div>
            <h1 className="text-2xl font-bold mb-4 text-mountain-900 dark:text-white">
              Oops! Something went wrong
            </h1>
            <p className="text-mountain-600 dark:text-mountain-300 mb-8">
              We're sorry for the inconvenience. Please try refreshing the page or contact our support team if the problem persists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.reload()}
                className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white 
                  font-semibold rounded-lg shadow-lg shadow-primary-500/20 hover:shadow-xl 
                  hover:shadow-primary-500/30 transition-all duration-200"
              >
                Refresh Page
              </motion.button>
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-white dark:bg-mountain-800 text-mountain-900 
                    dark:text-white font-semibold rounded-lg shadow-lg shadow-black/5 
                    hover:shadow-xl hover:shadow-black/10 border border-mountain-200/50 
                    dark:border-mountain-700/50 transition-all duration-200"
                >
                  Return Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 