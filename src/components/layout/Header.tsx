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
            className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-calm"
          >
            Protect Yourself
          </Link>
          <Link 
            to="/policies" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-calm"
          >
            Our Standards
          </Link>
          <Link 
            to="/purpose" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-calm"
          >
            Why We Exist
          </Link>
          <Link 
            to="/businesses" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-calm"
          >
            Take Action
          </Link>
          <Link 
            to="/research" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-calm"
          >
            The Data
          </Link>
          <Link 
            to="/safetrace-app" 
            className="text-sm font-semibold text-primary px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-calm"
          >
            SafeTrace App
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
