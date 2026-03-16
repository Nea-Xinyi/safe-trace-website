import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { en } from '@/i18n/en';
import { fr } from '@/i18n/fr';
import { zh } from '@/i18n/zh';
import { ar } from '@/i18n/ar';
import { es } from '@/i18n/es';
import { it } from '@/i18n/it';

type Language = 'en' | 'fr' | 'zh' | 'ar' | 'es' | 'it';
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
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('safetrace-lang');
    return (saved === 'en' || saved === 'fr' || saved === 'zh') ? saved : 'en';
  });
  const [transitioning, setTransitioning] = useState(false);
  const t = translations[language];

  const setLanguage = useCallback((lang: Language) => {
    if (lang === language) return;
    setTransitioning(true);
    setTimeout(() => {
      setLanguageState(lang);
      localStorage.setItem('safetrace-lang', lang);
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
