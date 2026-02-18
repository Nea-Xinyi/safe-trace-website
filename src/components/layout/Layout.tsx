import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

export function Layout({ children, hideHeader }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeader && <Header />}
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Link
        to="/safetrace-app"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-calm font-medium text-sm"
        aria-label="Open SafeTrace App"
      >
        <Camera className="h-4 w-4" />
        SafeTrace App
      </Link>
    </div>
  );
}
