import React from 'react';
import { Home } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="container" style={{ textAlign: 'center', padding: '10rem 0 6rem 0' }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 800 }} className="gradient-text">404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Button variant="primary" onClick={() => (window.location.href = '/')}>
          <Home size={18} /> Return Home
        </Button>
      </div>
    </Layout>
  );
};
