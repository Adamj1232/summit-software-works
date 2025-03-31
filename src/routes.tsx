import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy load components with chunk names for better debugging
const Home = lazy(() => import(/* webpackChunkName: "home" */ './pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ './pages/About'));
const Projects = lazy(() => import(/* webpackChunkName: "projects" */ './pages/Projects'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './pages/Contact'));
const Services = lazy(() => import(/* webpackChunkName: "services" */ './pages/Services'));

// Wrap lazy components with Suspense and ErrorBoundary
const withSuspense = (Component: React.LazyExoticComponent<any>) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingSpinner size="large" />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
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
  {
    path: '*',
    element: withSuspense(lazy(() => import(/* webpackChunkName: "not-found" */ './pages/NotFound'))),
  }
]; 