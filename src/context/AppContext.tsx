import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
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

/* First visit only: geo-locate the visitor. Brazil → Portuguese, anywhere
   else → English. The result is persisted to localStorage, so the lookup
   runs once per browser and the manual flag toggle wins afterwards. */
async function detectLang(): Promise<Lang> {
  try {
    const res = await fetch('https://api.country.is/');
    const data = (await res.json()) as { country?: string };
    return data.country === 'BR' ? 'pt' : 'en';
  } catch {
    return 'pt';
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'pt');
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'dark'
  );

  const setLang = useCallback((next: Lang) => {
    localStorage.setItem('lang', next);
    setLangState(next);
  }, []);

  // Run geo detection only when the visitor has no stored preference yet.
  useEffect(() => {
    if (localStorage.getItem('lang')) return;
    let active = true;
    detectLang().then(detected => {
      if (active) setLang(detected);
    });
    return () => {
      active = false;
    };
  }, [setLang]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  }, [lang]);

  const value = useMemo<AppContextValue>(
    () => ({ lang, setLang, theme, setTheme, t: I18N[lang] }),
    [lang, setLang, theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
