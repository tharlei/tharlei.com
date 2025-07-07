import { useEffect } from 'react';

import { useFavicon } from '@/contexts/FaviconContext';

interface UseDynamicFaviconOptions {
  technologies: string[];
  interval?: number;
  autoStart?: boolean;
}

export const useDynamicFavicon = ({
  technologies,
  interval = 2000,
  autoStart = true,
}: UseDynamicFaviconOptions) => {
  const { setCurrentTech } = useFavicon();

  useEffect(() => {
    if (!autoStart || technologies.length === 0) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setCurrentTech(null);

      setTimeout(() => {
        const nextTech = technologies[currentIndex];
        setCurrentTech(nextTech);
        currentIndex = (currentIndex + 1) % technologies.length;
      }, 300);
    }, interval);

    // Inicializa com a primeira tecnologia
    setCurrentTech(technologies[0]);

    return () => {
      clearInterval(intervalId);
      setCurrentTech(null);
    };
  }, [technologies, interval, autoStart, setCurrentTech]);

  const setSpecificTech = (tech: string) => {
    setCurrentTech(tech);
  };

  const clearFavicon = () => {
    setCurrentTech(null);
  };

  return {
    setSpecificTech,
    clearFavicon,
  };
};
