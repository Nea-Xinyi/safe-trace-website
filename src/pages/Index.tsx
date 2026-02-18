import { Link } from 'react-router-dom';
import { ArrowDown, Shield, Heart, Users, Scale, BarChart3, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { AccessibilityControls } from '@/components/layout/AccessibilityControls';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { useEffect, useRef } from 'react';
import logo from '@/assets/ribbon-logo.png';

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <Layout hideHeader>
      {/* Single video background with header overlaying */}
      <div className="relative">
        {/* One single video spanning the entire hero area */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 -z-20">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-accent/30 to-background -z-10" />

        {/* Header bar overlaying the video */}
        <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/50">
          <div className="container flex h-20 items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-3 transition-calm hover:opacity-80"
              aria-label="Safe Trace - Home"
            >
              <img src={logo} alt="SafeTrace" className="h-14 w-auto" />
              <span className="font-display text-xl font-semibold text-primary">SafeTrace</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm">Protect Yourself</Link>
              <Link to="/policies" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm">Our Standards</Link>
              <Link to="/purpose" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm">Why We Exist</Link>
              <Link to="/businesses" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm">Take Action</Link>
              <Link to="/research" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm">The Data</Link>
              <Link to="/safetrace-app" className="text-sm font-semibold text-primary hover:text-primary/80 transition-calm">SafeTrace App</Link>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <AccessibilityControls />
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="container py-20 md:py-32" ref={heroRef}>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight animate-fade-up" style={{ animationDelay: '0ms' }}>
              Because Every Pixel Tells a Story.
            </h1>
            
            <p className="text-xl md:text-2xl text-primary/80 font-display font-medium animate-fade-up" style={{ animationDelay: '300ms' }}>
              Made by young women, for all women.
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '450ms' }}>
              We build digital safety tools and policy frameworks that protect women from online harassment, doxxing, and technology facilitated abuse.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: '600ms' }}>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 rounded-full"
                onClick={() => document.getElementById('values-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild size="lg" className="text-base px-8 rounded-full">
                <Link to="/safetrace-app">
                  <Camera className="mr-2 h-4 w-4" />
                  SafeTrace App
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <section id="values-section" className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4">
              See what we're building
            </h2>
            <p className="text-muted-foreground">
              Everything here is free, open, and made with you in mind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, to: '/resources', title: 'Protect Yourself', desc: 'Practical guides to lock down your accounts, remove leaked info, and take back control of your digital life.' },
              { icon: Scale, to: '/policies', title: 'Our Standards', desc: 'The specific, enforceable policies we hold ourselves and every partner organization to. No vague promises.' },
              { icon: Heart, to: '/purpose', title: 'Why We Exist', desc: 'The story behind Safe Trace and the gaps in protection that pushed us to build something better.' },
              { icon: Users, to: '/businesses', title: 'Take Action', desc: 'If your organization handles personal data, this is how you commit to doing it responsibly.' },
              { icon: BarChart3, to: '/research', title: 'The Data', desc: 'Real statistics, sourced research, and the evidence that shows why digital safety needs to change.' },
              { icon: Camera, to: '/safetrace-app', title: 'SafeTrace App', desc: 'Upload a photo before you post it and let our AI flag anything that could be used to find or identify you.' },
            ].map((card, i) => (
              <Link
                key={card.to}
                to={card.to}
                className="group p-6 rounded-2xl bg-card dark:bg-card/80 border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-on-scroll opacity-0 translate-y-4"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
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

      {/* Gentle CTA Section */}
      <section id="help-section" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/8">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              Need help right now?
            </h2>
            <Button asChild size="lg" className="mt-4">
              <Link to="/safetrace-app">
                Access SafeTrace App
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
