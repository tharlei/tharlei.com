import { motion } from 'framer-motion';

import React, { useEffect, useState } from 'react';

import { techIconsConfig } from '@/lib/tech-icons';
import { useDynamicFavicon } from '@/hooks/useDynamicFavicon';

import TechIcon from './TechIcon';

interface TechCarouselProps {
  technologies: string[];
  className?: string;
}

const TechCarousel: React.FC<TechCarouselProps> = ({ technologies, className }) => {
  const [visibleTech, setVisibleTech] = useState<string | null>(technologies[0]);
  const [index, setIndex] = useState(0);

  // Usa o hook personalizado para gerenciar o favicon
  useDynamicFavicon({ technologies, interval: 2000 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleTech(null);

      setTimeout(() => {
        const nextIndex = (index + 1) % technologies.length;
        const nextTech = technologies[nextIndex];
        setIndex(nextIndex);
        setVisibleTech(nextTech);
      }, 300);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [index, technologies]);

  return (
    <div className={`flex h-24 flex-col items-center justify-center ${className || ''}`}>
      {visibleTech && (
        <motion.div
          key={visibleTech}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="mb-2 text-3xl">
            <TechIcon name={visibleTech} size={40} className="text-primary" />
          </div>
          <div className="text-lg font-medium">{techIconsConfig[visibleTech].name}</div>
        </motion.div>
      )}
    </div>
  );
};

export default TechCarousel;
