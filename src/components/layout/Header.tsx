import { Link } from 'react-router-dom';
import { AccessibilityControls } from './AccessibilityControls';
import { ThemeToggle } from './ThemeToggle';
import logo from '@/assets/ribbon-logo.png';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 transition-calm hover:opacity-80"
          aria-label="Safe Trace - Home"
        >
          <img src={logo} alt="SafeTrace" className="h-11 w-auto" />
          <span className="font-display text-lg font-semibold text-primary">SafeTrace</span>
        </Link>

        {/* Navigation - hidden on mobile, shown in menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/resources" 
            className="text-sm font-medium text-foreground hover:text-primary transition-calm"
          >
            Protect Yourself
          </Link>
          <Link 
            to="/policies" 
            className="text-sm font-medium text-foreground hover:text-primary transition-calm"
          >
            Our Standards
          </Link>
          <Link 
            to="/purpose" 
            className="text-sm font-medium text-foreground hover:text-primary transition-calm"
          >
            Why We Exist
          </Link>
          <Link 
            to="/businesses" 
            className="text-sm font-medium text-foreground hover:text-primary transition-calm"
          >
            Take Action
          </Link>
          <Link 
            to="/research" 
            className="text-sm font-medium text-foreground hover:text-primary transition-calm"
          >
            The Data
          </Link>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <AccessibilityControls />
        </div>
      </div>
    </header>
  );
}
