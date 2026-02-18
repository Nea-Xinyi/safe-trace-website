import { Link } from 'react-router-dom';
import { AccessibilityControls } from './AccessibilityControls';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/ribbon-logo.png';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 transition-calm hover:opacity-80"
          aria-label="Safe Trace - Home"
        >
          <img src={logo} alt="SafeTrace" className="h-11 w-auto" />
          <span className="font-display text-lg font-semibold text-primary">SafeTrace</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/resources" className="text-sm font-medium text-foreground hover:text-primary transition-calm">{t.nav.protectYourself}</Link>
          <Link to="/policies" className="text-sm font-medium text-foreground hover:text-primary transition-calm">{t.nav.ourStandards}</Link>
          <Link to="/purpose" className="text-sm font-medium text-foreground hover:text-primary transition-calm">{t.nav.whyWeExist}</Link>
          <Link to="/businesses" className="text-sm font-medium text-foreground hover:text-primary transition-calm">{t.nav.takeAction}</Link>
          <Link to="/research" className="text-sm font-medium text-foreground hover:text-primary transition-calm">{t.nav.theData}</Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <AccessibilityControls />
        </div>
      </div>
    </header>
  );
}
