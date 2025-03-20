import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  fid: number;
  lcp: number;
  fcp: number;
  ttfb: number;
}

const metrics: PerformanceMetrics = {
  cls: 0,
  fid: 0,
  lcp: 0,
  fcp: 0,
  ttfb: 0,
};

// Report to analytics
const reportToAnalytics = (metric: { name: string; value: number }) => {
  // Replace with your analytics service
  console.log(`Performance metric: ${metric.name} = ${metric.value}`);
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  getCLS((metric) => {
    metrics.cls = metric.value;
    reportToAnalytics(metric);
  });

  getFID((metric) => {
    metrics.fid = metric.value;
    reportToAnalytics(metric);
  });

  getLCP((metric) => {
    metrics.lcp = metric.value;
    reportToAnalytics(metric);
  });

  getFCP((metric) => {
    metrics.fcp = metric.value;
    reportToAnalytics(metric);
  });

  getTTFB((metric) => {
    metrics.ttfb = metric.value;
    reportToAnalytics(metric);
  });
};

// Get current performance metrics
export const getPerformanceMetrics = (): PerformanceMetrics => {
  return { ...metrics };
};

// Check if performance is good
export const isPerformanceGood = (): boolean => {
  return (
    metrics.cls < 0.1 && // Good CLS is under 0.1
    metrics.fid < 100 && // Good FID is under 100ms
    metrics.lcp < 2500 && // Good LCP is under 2.5s
    metrics.fcp < 1800 && // Good FCP is under 1.8s
    metrics.ttfb < 800 // Good TTFB is under 800ms
  );
}; 