import { useEffect, useState } from 'react';
import { Variants } from 'framer-motion';

export interface AnimationPreferences {
  prefersReducedMotion: boolean;
  isLowPerformance: boolean;
  getAnimationVariants: (variants: Variants) => Variants;
}

const useAnimationPreference = (): AnimationPreferences => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Check for low performance devices
    const checkPerformance = () => {
      const memory = (navigator as any).deviceMemory;
      const cores = (navigator as any).hardwareConcurrency;
      
      if (memory && cores) {
        setIsLowPerformance(memory < 4 || cores <= 2);
      } else {
        // Fallback to a simple check if the APIs are not available
        const userAgent = navigator.userAgent.toLowerCase();
        setIsLowPerformance(
          userAgent.includes('mobile') || 
          userAgent.includes('android') || 
          userAgent.includes('iphone')
        );
      }
    };

    checkPerformance();
  }, []);

  const getAnimationVariants = (variants: Variants): Variants => {
    if (prefersReducedMotion || isLowPerformance) {
      // Return simplified animations for users who prefer reduced motion
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          ease: "easeInOut",
          duration: 0.2
        } as any // Type assertion needed due to Framer Motion types limitation
      };
    }
    return variants;
  };

  return {
    prefersReducedMotion,
    isLowPerformance,
    getAnimationVariants
  };
};

export default useAnimationPreference; 