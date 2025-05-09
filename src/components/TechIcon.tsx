import React from 'react';
import { techIconsConfig } from '@/lib/tech-icons';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ name, className = "", size = 20 }) => {
  const normalizedName = name.toLowerCase();
  const config = techIconsConfig[normalizedName];
  
  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
    >
      <img 
        src={`https://cdn.simpleicons.org/${config.slug}`}
        alt={config.name}
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export default TechIcon;
