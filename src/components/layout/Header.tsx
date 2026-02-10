import { Link } from 'react-router-dom';
import { Shield, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AccessibilityControls } from './AccessibilityControls';
import { SafetyModeButton } from '@/components/safety/SafetyModeButton';

export function Header() {
  const handleQuickExit = () => {
    // Clear current history entry and redirect to neutral site
    window.location.replace('https://www.google.com');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-calm hover:opacity-80"
          aria-label="Safe Trace - Home"
        >
          <Shield className="h-7 w-7 text-primary" strokeWidth={1.5} />
          <span className="font-display text-xl font-semibold text-foreground">
            Safe Trace
          </span>
        </Link>

        {/* Navigation - hidden on mobile, shown in menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/resources" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm"
          >
            Resources
          </Link>
          <Link 
            to="/policies" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm"
          >
            Policies
          </Link>
          <Link 
            to="/purpose" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm"
          >
            Our Purpose
          </Link>
          <Link 
            to="/businesses" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm"
          >
            For Businesses
          </Link>
          <Link 
            to="/research" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm"
          >
            Research
          </Link>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <AccessibilityControls />
          
          <SafetyModeButton />

          {/* Quick Exit - always visible */}
          <Button
            onClick={handleQuickExit}
            variant="outline"
            size="sm"
            className="bg-exit text-exit-foreground hover:bg-exit/90 border-none gap-1.5"
            aria-label="Quick exit - leaves this site immediately"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Exit</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
