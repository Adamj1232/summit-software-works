import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Services = lazy(() => import('./pages/Services'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Wrap lazy components with Suspense
const withSuspense = (Component: React.LazyExoticComponent<any>) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

export const routes: RouteObject[] = [
  {
    path: '/',
    element: withSuspense(Home),
  },
  {
    path: '/about',
    element: withSuspense(About),
  },
  {
    path: '/projects',
    element: withSuspense(Projects),
  },
  {
    path: '/contact',
    element: withSuspense(Contact),
  },
  {
    path: '/services',
    element: withSuspense(Services),
  },
]; 