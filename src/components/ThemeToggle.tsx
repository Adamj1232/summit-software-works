import React from 'react';
import { Menu } from '@headlessui/react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import useAnimationPreference from '../hooks/useAnimationPreference';

interface MenuItemProps {
  active: boolean;
}

const ThemeToggle: React.FC = () => {
  const { isDarkMode, theme, setTheme } = useTheme();
  const { getAnimationVariants } = useAnimationPreference();

  const menuVariants = getAnimationVariants({
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  });

  const iconVariants = getAnimationVariants({
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  });

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <motion.span
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {isDarkMode ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </motion.span>
      </Menu.Button>

      <Menu.Items
        as={motion.div}
        variants={menuVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div className="py-1">
          <Menu.Item>
            {({ active }: MenuItemProps) => (
              <button
                onClick={() => setTheme('light')}
                className={`${
                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } ${
                  theme === 'light' ? 'text-blue-600 dark:text-blue-400' : ''
                } group flex items-center w-full px-4 py-2 text-sm`}
              >
                <SunIcon className="w-5 h-5 mr-3" />
                Light
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }: MenuItemProps) => (
              <button
                onClick={() => setTheme('dark')}
                className={`${
                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } ${
                  theme === 'dark' ? 'text-blue-600 dark:text-blue-400' : ''
                } group flex items-center w-full px-4 py-2 text-sm`}
              >
                <MoonIcon className="w-5 h-5 mr-3" />
                Dark
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }: MenuItemProps) => (
              <button
                onClick={() => setTheme('system')}
                className={`${
                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                } ${
                  theme === 'system' ? 'text-blue-600 dark:text-blue-400' : ''
                } group flex items-center w-full px-4 py-2 text-sm`}
              >
                <ComputerDesktopIcon className="w-5 h-5 mr-3" />
                System
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default ThemeToggle; 