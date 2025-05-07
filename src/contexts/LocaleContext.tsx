
import React, { createContext, useState, useContext, useEffect } from 'react';
import { en } from '../locales/en';
import { pt } from '../locales/pt';

type Locale = 'en' | 'pt';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const translations = {
  en,
  pt,
};

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');
  const [isInitialized, setIsInitialized] = useState(false);

  const getMyIp = async (): Promise<string> => {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
  }

  const detectLocationAndSetLocale = async () => {
    try {
      const storedLocale = localStorage.getItem('locale');
      if (storedLocale === 'en' || storedLocale === 'pt') {
        setLocale(storedLocale);
        setIsInitialized(true);
        return;
      }
      
      const ip = await getMyIp();

      const response = await fetch(`https://ipwho.is/${ip}`);
      const data = await response.json();
      
      const isBrazil = data.country_code === 'BR';
      const detectedLocale: Locale = isBrazil ? 'pt' : 'en';
      
      setLocale(detectedLocale);
      localStorage.setItem('locale', detectedLocale);
      setIsInitialized(true);
    } catch (error) {
      const browserLang = navigator.language.substring(0, 2);
      const fallbackLocale: Locale = browserLang === 'pt' ? 'pt' : 'en';
      
      setLocale(fallbackLocale);
      localStorage.setItem('locale', fallbackLocale);
      setIsInitialized(true);
      console.error("Error detecting location:", error);
    }
  };

  useEffect(() => {
    detectLocationAndSetLocale();
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('locale', locale);
    }
  }, [locale, isInitialized]);

  const t = (key: string): string => {
    const translation = translations[locale][key as keyof typeof translations[typeof locale]];
    return translation || key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
