// App.tsx - Main Application Component
import { useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { routes } from './routes';
import Layout from './components/layout/Layout';
import { useScrollToTop } from './hooks/useScrollToTop';

function App() {
  const element = useRoutes(routes);
  useScrollToTop();

  return (
    <HelmetProvider>
      <Layout>
        
        {element}
      </Layout>
    </HelmetProvider>
  );
}

export default App;