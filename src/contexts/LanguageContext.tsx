import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { en } from '@/i18n/en';
import { fr } from '@/i18n/fr';

type Language = 'en' | 'fr';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = { en, fr };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const t = translations[language];

  const setLanguage = useCallback((lang: Language) => {
    if (lang === language) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguageState(lang);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTransitioning }}>
      <div className={isTransitioning ? 'lang-fade' : 'lang-visible'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
