import React, { useEffect, useState } from 'react';

import { Progress } from '@/components/ui/progress';

import { cn } from '@/lib/utils';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleTransitionStart = () => {
      setLoading(true);
    };

    const handleTransitionEnd = () => {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    document.body.addEventListener('page-transitioning', handleTransitionStart);
    window.addEventListener('popstate', handleTransitionEnd);

    return () => {
      document.body.removeEventListener('page-transitioning', handleTransitionStart);
      window.removeEventListener('popstate', handleTransitionEnd);
    };
  }, []);

  // Observer for body class changes
  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          const hasTransitionClass = document.body.classList.contains('page-transitioning');
          setLoading(hasTransitionClass);
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {loading && (
        <div className="fixed left-0 top-0 z-50 w-full">
          <Progress value={100} className="h-1 w-full" />
        </div>
      )}
      <main
        className={cn(
          'w-full max-w-full flex-1 animate-page-transition overflow-x-hidden',
          loading && 'opacity-70 transition-opacity duration-300'
        )}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
