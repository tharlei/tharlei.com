
import React, { useEffect, useState } from 'react';
import { 
  Server, 
  FileCode,
  Code2,
  Boxes,
  Database,
  Globe,
  MonitorSmartphone,
  Layout,
  Coffee,
  Webhook
} from 'lucide-react';

// Define an interface for tech icons configuration
export interface TechIconConfig {
  name: string;
  svgPath?: string; // SVG path elements
  color?: string;
  viewBox?: string;
}

// Global configuration object for tech icons
const TECH_ICONS_CONFIG: Record<string, TechIconConfig> = {
  react: {
    name: 'React',
    svgPath: `<circle cx="12" cy="12" r="2.5" />
              <path d="M12 21.21c-3.3 0-6-7.67-6-9.21 0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.54-2.7 9.21-6 9.21z" />
              <path d="M12 21.21c3.3 0 6-7.67 6-9.21 0-3.31-2.69-6-6-6s-6 2.69-6 6c0 1.54 2.7 9.21 6 9.21z" />`,
    color: '#61DAFB',
    viewBox: '0 0 24 24'
  },
  nodejs: {
    name: 'Node.js',
    svgPath: `<path d="M12 2c-1 0-2 .25-2.85.7L3.57 6.55C2.57 7.1 2 8.1 2 9.15v5.7c0 1.05.57 2.05 1.57 2.6l5.58 3.85c.85.45 1.85.7 2.85.7s2-.25 2.85-.7l5.58-3.85c1-.55 1.57-1.55 1.57-2.6v-5.7c0-1.05-.57-2.05-1.57-2.6L14.85 2.7C14 2.25 13 2 12 2z" />
              <path d="M6.5 15.5v-7l11 7v-7" />`,
    color: '#68A063',
    viewBox: '0 0 24 24'
  },
  javascript: {
    name: 'JavaScript',
    svgPath: `<rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M12 12v6c0 1-1 2-2 2s-2-1-2-2" />
              <path d="M17 12v6c0 1-1 2-2 2s-2-1-2-2v-6" />`,
    color: '#F7DF1E',
    viewBox: '0 0 24 24'
  },
  typescript: {
    name: 'TypeScript',
    svgPath: `<rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M12 3v18" />
              <path d="M3 12h18" />`,
    color: '#3178C6',
    viewBox: '0 0 24 24'
  },
  php: {
    name: 'PHP',
    svgPath: `<ellipse cx="12" cy="12" rx="10" ry="9" />
              <path d="M5.5 15 8 9" />
              <path d="M6 9h3.5" />
              <path d="M7.5 9v6" />
              <path d="M12 9v6" />
              <path d="M12 9h3.5" />
              <path d="M12 12h2.5" />
              <path d="M16.5 15 19 9" />
              <path d="M17 9h3.5" />
              <path d="M18.5 9v6" />`,
    color: '#777BB3',
    viewBox: '0 0 24 24'
  },
  laravel: {
    name: 'Laravel',
    svgPath: `<path d="M11.131 20.15L1.95 9.901a.448.448 0 0 1 0-.601L11.131 3.6" />
              <path d="M21.209 9.901l-9.565 10.25-.513-.5 9.565-10.25a.448.448 0 0 0 0-.601L11.644 3.1" />
              <path d="m7.473 11.059l3.658 3.65 7.973-7.973-3.658-3.65z" />`,
    color: '#FF2D20',
    viewBox: '0 0 24 24'
  },
  mysql: {
    name: 'MySQL',
    svgPath: `<path d="M3 17h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" />
              <path d="M3 12h18" />
              <path d="M3 7h18" />
              <path d="M5 17V5c0-1.1.9-2 2-2h4l2 2h5a2 2 0 012 2v10" />`,
    color: '#4479A1',
    viewBox: '0 0 24 24'
  },
  mongodb: {
    name: 'MongoDB',
    svgPath: `<path d="M12 3v19" />
              <path d="M5 7.5C5 5 7 3 12 3s7 2 7 4.5c0 1.5-1.056 2.5-2 3h0c-1.055.5-7 2.5-7 5v1.5" />
              <path d="M12 3c-5 0-7 2-7 4.5 0 1.5.8 3 4 4.5C13 13.5 19 16 19 18.5c0 1-2 2.5-7 2.5" />`,
    color: '#47A248',
    viewBox: '0 0 24 24'
  },
  vue: {
    name: 'Vue.js',
    svgPath: `<path d="m12 4 6.52 11.27a.949.949 0 0 1-.32 1.31c-.08.05-.17.08-.26.1H6.1c-.55 0-1-.44-1-.99 0-.09.01-.18.05-.27L11.67 4c.19-.33.63-.44.97-.24.13.08.23.18.29.31L12 4Z" />
              <path d="M8.5 4h7L12 12" />`,
    color: '#4FC08D',
    viewBox: '0 0 24 24'
  }
};

// Function to register a new tech icon
export const registerTechIcon = (key: string, config: TechIconConfig) => {
  TECH_ICONS_CONFIG[key.toLowerCase()] = config;
};

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ name, className = "", size = 20 }) => {
  const normalizedName = name.toLowerCase();
  const [iconConfig, setIconConfig] = useState<TechIconConfig | null>(null);
  
  useEffect(() => {
    // Look for the icon config in our registry
    const config = TECH_ICONS_CONFIG[normalizedName] || 
                   TECH_ICONS_CONFIG[normalizedName.replace('.js', '')] ||
                   TECH_ICONS_CONFIG[normalizedName.replace(/\s/g, '')];
                   
    if (config) {
      setIconConfig(config);
    }
  }, [normalizedName]);
  
  // Map for Lucide icons as fallback
  const iconMap: Record<string, React.ElementType> = {
    'docker': Boxes,
    'aws': Server,
    'redis': Database,
    'postgresql': Database,
    'express': Server,
    'next.js': Globe,
    'nextjs': Globe,
    'tailwind': Layout,
    'sass': Layout,
    'css': Layout,
    'html': FileCode,
    'git': Webhook,
    'github': Webhook,
  };
  
  // If we have a custom SVG icon
  if (iconConfig && iconConfig.svgPath) {
    return (
      <div 
        className={`inline-flex items-center justify-center ${className}`} 
        style={{ width: size, height: size }}
      >
        <svg
          viewBox={iconConfig.viewBox || "0 0 24 24"}
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          dangerouslySetInnerHTML={{ __html: iconConfig.svgPath }}
        />
      </div>
    );
  }
  
  // If it's in our Lucide map
  const IconComponent = iconMap[normalizedName];
  if (IconComponent) {
    return <IconComponent size={size} className={className} />;
  }
  
  // Default fallback - display the first letter
  return (
    <div 
      className={`inline-flex items-center justify-center rounded-full bg-primary/10 ${className}`} 
      style={{ width: size, height: size }}
    >
      <span className="text-xs font-medium text-primary">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  );
};

export default TechIcon;
