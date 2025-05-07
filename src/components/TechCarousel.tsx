
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TechIcon from './TechIcon';

interface TechCarouselProps {
  technologies: string[];
  className?: string;
}

const TechCarousel: React.FC<TechCarouselProps> = ({ technologies, className }) => {
  const [visibleTech, setVisibleTech] = useState<string | null>(technologies[0]);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Set to null briefly for a fade out effect
      setVisibleTech(null);
      
      // After a short delay, change to the next tech
      setTimeout(() => {
        setIndex(prevIndex => (prevIndex + 1) % technologies.length);
        setVisibleTech(technologies[(index + 1) % technologies.length]);
      }, 300);
    }, 2000);
    
    return () => clearInterval(intervalId);
  }, [index, technologies]);
  
  return (
    <div className={`flex flex-col items-center justify-center h-24 ${className || ''}`}>
      {visibleTech && (
        <motion.div
          key={visibleTech}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="text-3xl mb-2">
            <TechIcon name={visibleTech} size={40} className="text-primary" />
          </div>
          <div className="text-lg font-medium">{visibleTech}</div>
        </motion.div>
      )}
    </div>
  );
};

export default TechCarousel;
