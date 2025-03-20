// App.tsx - Main Application Component
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { routes } from './routes';
import Layout from './components/layout/Layout';

function App() {
  const element = useRoutes(routes);

  return (
    <HelmetProvider>
      <Layout>
        {element}
      </Layout>
    </HelmetProvider>
  );
}

export default App;