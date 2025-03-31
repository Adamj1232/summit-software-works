import { useState, useEffect } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs');
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);

      if (currentWidth >= breakpoints['2xl']) {
        setBreakpoint('2xl');
      } else if (currentWidth >= breakpoints.xl) {
        setBreakpoint('xl');
      } else if (currentWidth >= breakpoints.lg) {
        setBreakpoint('lg');
      } else if (currentWidth >= breakpoints.md) {
        setBreakpoint('md');
      } else if (currentWidth >= breakpoints.sm) {
        setBreakpoint('sm');
      } else {
        setBreakpoint('xs');
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    breakpoint,
    width,
    isMobile: breakpoint === 'xs' || breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl',
    isLargeScreen: breakpoint === 'xl' || breakpoint === '2xl',
  };
};

export const above = (breakpoint: keyof typeof breakpoints) => 
  `@media (min-width: ${breakpoints[breakpoint]}px)`;

export const below = (breakpoint: keyof typeof breakpoints) => 
  `@media (max-width: ${breakpoints[breakpoint] - 1}px)`;

export const between = (min: keyof typeof breakpoints, max: keyof typeof breakpoints) => 
  `@media (min-width: ${breakpoints[min]}px) and (max-width: ${breakpoints[max] - 1}px)`;

export default useBreakpoint; 