import React, { createContext, useContext, useEffect, useState } from 'react';

import { techIconsConfig } from '@/lib/tech-icons';

interface FaviconContextType {
  currentTech: string | null;
  setCurrentTech: (tech: string | null) => void;
  updateFavicon: (tech: string) => void;
}

const FaviconContext = createContext<FaviconContextType | undefined>(undefined);

export const useFavicon = () => {
  const context = useContext(FaviconContext);
  if (!context) {
    throw new Error('useFavicon must be used within a FaviconProvider');
  }
  return context;
};

interface FaviconProviderProps {
  children: React.ReactNode;
}

export const FaviconProvider: React.FC<FaviconProviderProps> = ({ children }) => {
  const [currentTech, setCurrentTech] = useState<string | null>(null);

  const updateFavicon = (tech: string) => {
    const techConfig = techIconsConfig[tech];
    if (!techConfig) return;

    // URL base para os ícones do Simple Icons
    const iconUrl = `https://cdn.simpleicons.org/${techConfig.slug}/32/000000`;

    // Remove favicon existente
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      existingFavicon.remove();
    }

    // Cria novo favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/svg+xml';
    favicon.href = iconUrl;
    document.head.appendChild(favicon);
  };

  const resetFavicon = () => {
    // Remove favicon customizado
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      existingFavicon.remove();
    }

    // Restaura favicon padrão
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/svg+xml';
    favicon.href = '/favicon.svg';
    document.head.appendChild(favicon);
  };

  useEffect(() => {
    if (currentTech) {
      updateFavicon(currentTech);
    } else {
      resetFavicon();
    }
  }, [currentTech]);

  const value: FaviconContextType = {
    currentTech,
    setCurrentTech,
    updateFavicon,
  };

  return <FaviconContext.Provider value={value}>{children}</FaviconContext.Provider>;
};
