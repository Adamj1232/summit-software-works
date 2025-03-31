import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useImageLoader from '../../hooks/useImageLoader';
import useBreakpoint from '../../hooks/useBreakpoint';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  blurDataURL?: string;
}

const OptimizedImage: FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '100vw',
  priority = false,
  quality = 75,
  objectFit = 'cover',
  blurDataURL
}) => {
  const { isMobile } = useBreakpoint();
  const [localBlurDataURL, setLocalBlurDataURL] = useState(blurDataURL);
  const { isLoaded, error, blur } = useImageLoader(src, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  useEffect(() => {
    if (!blurDataURL && !localBlurDataURL) {
      const generateBlur = async () => {
        try {
          const response = await fetch(src);
          const buffer = await response.arrayBuffer();
          const base64 = Buffer.from(buffer).toString('base64');
          setLocalBlurDataURL(`data:image/jpeg;base64,${base64}`);
        } catch (error) {
          console.error('Error generating blur data URL:', error);
        }
      };
      generateBlur();
    }
  }, [src, blurDataURL, localBlurDataURL]);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  if (error) {
    console.error('Image loading error:', error);
    return (
      <div className={`bg-mountain-100 dark:bg-mountain-800 rounded-lg ${className}`}>
        <div className="flex items-center justify-center w-full h-full min-h-[200px]">
          <span className="text-mountain-500 dark:text-mountain-400">
            Failed to load image
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        {blur && localBlurDataURL && (
          <motion.div
            key="blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `url(${localBlurDataURL})`,
              backgroundSize: objectFit,
              backgroundPosition: 'center',
              filter: 'blur(20px)',
              transform: 'scale(1.2)'
            }}
          />
        )}
      </AnimatePresence>

      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        variants={imageVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        className={`w-full h-full ${
          objectFit === 'contain' ? 'object-contain' :
          objectFit === 'cover' ? 'object-cover' :
          objectFit === 'fill' ? 'object-fill' :
          objectFit === 'none' ? 'object-none' :
          'object-scale-down'
        }`}
        sizes={sizes}
        style={{
          opacity: isLoaded ? 1 : 0
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Cpath fill="%23ccc" d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.822 0-16-7.178-16-16S11.178 4 20 4s16 7.178 16 16-7.178 16-16 16z"/%3E%3C/svg%3E';
        }}
      />
    </div>
  );
};

export default OptimizedImage; 