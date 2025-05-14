import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

import React from 'react';

import { Button } from '@/components/ui/button';

import Layout from '../components/layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <section className="container mx-auto flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md text-center">
          <h1 className="text-7xl font-bold">404</h1>
          <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
          <p className="mb-8 mt-2 text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" /> Go Home
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
