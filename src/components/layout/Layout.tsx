import { ReactNode } from 'react';

import { Camera } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

export function Layout({ children, hideHeader }: LayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeader && <Header />}
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <a
        href="https://app.safetrace.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-calm font-medium text-sm"
        aria-label="Open SafeTrace App"
      >
        <Camera className="h-4 w-4" />
        {t.index.safeTraceApp}
      </a>
    </div>
  );
}
