import { Link, NavLink } from 'react-router-dom';
import { ArrowDown, Shield, Heart, Users, Scale, BarChart3, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { AccessibilityControls } from '@/components/layout/AccessibilityControls';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import logo from '@/assets/ribbon-logo.png';

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const cards = [
    { icon: Shield, to: '/resources', title: t.nav.protectYourself, desc: t.index.protectYourselfDesc },
    { icon: Scale, to: '/policies', title: t.nav.ourStandards, desc: t.index.ourStandardsDesc },
    { icon: Heart, to: '/purpose', title: t.nav.whyWeExist, desc: t.index.whyWeExistDesc },
    { icon: Users, to: '/businesses', title: t.nav.takeAction, desc: t.index.takeActionDesc },
    { icon: BarChart3, to: '/research', title: t.nav.theData, desc: t.index.theDataDesc },
    { icon: Camera, to: '/safetrace-app', title: t.index.safeTraceApp, desc: t.index.safeTraceAppDesc },
  ];

  return (
    <Layout hideHeader>
      <div className="relative">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 -z-20">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-accent/30 to-background -z-10" />

        <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/50">
          <div className="container flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-3 transition-calm hover:opacity-80" aria-label="Safe Trace - Home">
              <img src={logo} alt="SafeTrace" className="h-14 w-auto" />
              <span className="font-display text-xl font-semibold text-primary">SafeTrace</span>
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
        </div>

        <div className="container py-20 md:py-32" ref={heroRef}>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight animate-fade-up" style={{ animationDelay: '0ms' }}>
              {t.index.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 font-display font-medium animate-fade-up" style={{ animationDelay: '300ms' }}>
              {t.index.heroSubtitle}
            </p>
            <p className="text-base md:text-lg text-foreground font-semibold max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '450ms' }}>
              {t.index.heroDesc}
            </p>
            <div className="pt-4 flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: '600ms' }}>
              <Button size="lg" variant="outline" className="text-base px-8 rounded-full" onClick={() => document.getElementById('values-section')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.index.explore}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section id="values-section" className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4">{t.index.seeBuilding}</h2>
            <p className="text-muted-foreground">{t.index.everythingFree}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cards.map((card, i) => (
              <Link key={card.to} to={card.to} className="group p-6 rounded-2xl bg-card dark:bg-card/80 border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-on-scroll opacity-0 translate-y-4" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-primary transition-colors">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="help-section" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/8">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.index.needHelp}</h2>
            <Button asChild size="lg" className="mt-4">
              <Link to="/resources">
                {t.index.protectYourself}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
