import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { en } from '@/i18n/en';
import { fr } from '@/i18n/fr';
import { zh } from '@/i18n/zh';

type Language = 'en' | 'fr' | 'zh';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  transitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = { en, fr, zh };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [transitioning, setTransitioning] = useState(false);
  const t = translations[language];

  const setLanguage = useCallback((lang: Language) => {
    if (lang === language) return;
    setTransitioning(true);
    setTimeout(() => {
      setLanguageState(lang);
      setTransitioning(false);
    }, 200);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, transitioning }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
