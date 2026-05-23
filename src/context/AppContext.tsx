import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { I18N } from '../data/i18n';
import type { Dict, Lang } from '../data/i18n';

type Theme = 'dark' | 'light';

interface AppContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: Dict;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'pt');
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
  }, [lang, theme]);

  const value = useMemo<AppContextValue>(
    () => ({ lang, setLang, theme, setTheme, t: I18N[lang] }),
    [lang, theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
