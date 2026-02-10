import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import logo from '@/assets/SafeTrace_Company_Logo.png';

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-primary/5">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="SafeTrace" className="h-8 w-auto mix-blend-multiply dark:mix-blend-screen opacity-90" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built by young women, for women. Your digital safety is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-calm">
                Resources
              </Link>
              <Link to="/policies" className="text-sm text-muted-foreground hover:text-foreground transition-calm">
                Our Policies
              </Link>
              <Link to="/purpose" className="text-sm text-muted-foreground hover:text-foreground transition-calm">
                Why We Exist
              </Link>
            </nav>
          </div>

          {/* For Organizations */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">For Organizations</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/businesses" className="text-sm text-muted-foreground hover:text-foreground transition-calm">
                Commit to Safe Trace
              </Link>
              <Link to="/research" className="text-sm text-muted-foreground hover:text-foreground transition-calm">
                Our Research
              </Link>
              <Link to="/purpose" className="text-sm text-muted-foreground hover:text-foreground transition-calm">
                Our Purpose
              </Link>
            </nav>
          </div>

          {/* Safety Note */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Your Safety</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you're in immediate danger, please contact local emergency services. 
              The Quick Exit button will take you away from this site instantly.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-primary" /> by women, for women
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Safe Trace. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
