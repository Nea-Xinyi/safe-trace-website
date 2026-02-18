import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/ribbon-logo.png';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-primary/20 bg-primary/5">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="space-y-4 flex flex-col items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="SafeTrace" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">{t.footer.quickLinks}</h4>
            <nav className="flex flex-col items-center gap-2">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-calm">{t.footer.resources}</Link>
              <Link to="/policies" className="text-sm text-muted-foreground hover:text-foreground transition-calm">{t.footer.ourPolicies}</Link>
              <Link to="/purpose" className="text-sm text-muted-foreground hover:text-foreground transition-calm">{t.footer.whyWeExist}</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">{t.footer.forOrganizations}</h4>
            <nav className="flex flex-col items-center gap-2">
              <Link to="/businesses" className="text-sm text-muted-foreground hover:text-foreground transition-calm">{t.footer.commitToSafeTrace}</Link>
              <Link to="/research" className="text-sm text-muted-foreground hover:text-foreground transition-calm">{t.footer.ourResearch}</Link>
              <Link to="/purpose" className="text-sm text-muted-foreground hover:text-foreground transition-calm">{t.footer.ourPurpose}</Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              {t.footer.madeWith} <Heart className="h-4 w-4 text-primary" /> {t.footer.byWomen}
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Safe Trace. {t.footer.allRightsReserved}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
