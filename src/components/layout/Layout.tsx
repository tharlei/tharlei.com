
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

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
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
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
    <div className="flex flex-col min-h-screen">
      <Header />
      {loading && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Progress value={100} className="w-full h-1" />
        </div>
      )}
      <main className={cn(
        "flex-1 w-full max-w-full overflow-x-hidden animate-page-transition",
        loading && "opacity-70 transition-opacity duration-300"
      )}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
