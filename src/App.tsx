// App.tsx - Main Application Component
import { useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { routes } from './routes';
import Layout from './components/layout/Layout';
import { useScrollToTop } from './hooks/useScrollToTop';
import usePerformance from './hooks/usePerformance';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const element = useRoutes(routes);
  useScrollToTop();

  // Monitor performance metrics
  usePerformance((metrics) => {
    // Log metrics to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', {
        'First Contentful Paint': `${metrics.fcp}ms`,
        'Largest Contentful Paint': `${metrics.lcp}ms`,
        'First Input Delay': `${metrics.fid}ms`,
        'Cumulative Layout Shift': metrics.cls,
        'Time to First Byte': `${metrics.ttfb}ms`
      });
    }

    // In production, you might want to send these metrics to your analytics service
    if (process.env.NODE_ENV === 'production' && window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: window.location.pathname,
        ...metrics
      });
    }
  });

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Layout>
          {element}
        </Layout>
      </ThemeProvider>
    </HelmetProvider>
  );
}

// Add TypeScript declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default App;