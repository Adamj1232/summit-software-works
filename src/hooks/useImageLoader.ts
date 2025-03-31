import { useState, useEffect } from 'react';

interface ImageLoaderOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useImageLoader = (
  src: string,
  options: ImageLoaderOptions = {}
) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const { threshold = 0.1, rootMargin = '50px' } = options;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    let element: HTMLImageElement | null = null;

    if (isInView && !isLoaded && !error) {
      element = new Image();
      element.src = src;

      element.onload = () => {
        setIsLoaded(true);
        setError(null);
      };

      element.onerror = () => {
        setError(new Error(`Failed to load image: ${src}`));
      };
    }

    return () => {
      if (element) {
        element.onload = null;
        element.onerror = null;
      }
      observer.disconnect();
    };
  }, [src, isInView, isLoaded, error, options]);

  return {
    isLoaded,
    isInView,
    error,
    blur: !isLoaded,
  };
};

export const generateBlurDataURL = async (src: string): Promise<string> => {
  try {
    const response = await fetch(src);
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:image/jpeg;base64,${base64}`;
  } catch (error) {
    console.error('Error generating blur data URL:', error);
    return '';
  }
};

export default useImageLoader; 