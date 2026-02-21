import { Link, NavLink } from 'react-router-dom';
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
          <img src={logo} alt="SafeTrace" className="h-11 w-auto logo-persistent" />
          <span className="font-display text-lg font-semibold text-primary">SafeTrace</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/resources" className={({ isActive }) => `text-sm font-medium transition-calm rounded-full px-3 py-1.5 ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:text-primary'}`}>{t.nav.protectYourself}</NavLink>
          <NavLink to="/policies" className={({ isActive }) => `text-sm font-medium transition-calm rounded-full px-3 py-1.5 ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:text-primary'}`}>{t.nav.ourStandards}</NavLink>
          <NavLink to="/purpose" className={({ isActive }) => `text-sm font-medium transition-calm rounded-full px-3 py-1.5 ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:text-primary'}`}>{t.nav.whyWeExist}</NavLink>
          <NavLink to="/businesses" className={({ isActive }) => `text-sm font-medium transition-calm rounded-full px-3 py-1.5 ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:text-primary'}`}>{t.nav.takeAction}</NavLink>
          <NavLink to="/research" className={({ isActive }) => `text-sm font-medium transition-calm rounded-full px-3 py-1.5 ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:text-primary'}`}>{t.nav.theData}</NavLink>
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
