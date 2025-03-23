import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Changed from 'instant' to 'auto' which is a valid ScrollBehavior
    });
  }, [pathname]);
};

export default useScrollToTop; 