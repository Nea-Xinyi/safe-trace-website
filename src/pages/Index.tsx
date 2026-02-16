import { Link } from 'react-router-dom';
import { ArrowDown, Heart, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { AccessibilityControls } from '@/components/layout/AccessibilityControls';
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
              <Link to="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm">Resources</Link>
              <Link to="/policies" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm">Policies</Link>
              <Link to="/purpose" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm">Our Purpose</Link>
              <Link to="/businesses" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm">For Businesses</Link>
              <Link to="/research" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-calm">Research</Link>
            </nav>
            <div className="flex items-center gap-2">
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
              Safe Trace builds digital safety tools and policy frameworks to protect women from online harassment, doxxing, and technology-facilitated abuse.
            </p>

            <div className="pt-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 rounded-full"
                onClick={() => document.getElementById('values-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section id="values-section" className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4">
              Built on trust, not tracking
            </h2>
            <p className="text-muted-foreground">
              We believe safety tools should protect you, not monitor you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-calm animate-on-scroll opacity-0 translate-y-4 transition-all duration-500" style={{ transitionDelay: '0ms' }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Privacy First</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No tracking, no data harvesting. Your information stays yours—we don't collect what we don't need.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-calm animate-on-scroll opacity-0 translate-y-4 transition-all duration-500" style={{ transitionDelay: '150ms' }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Survivor-Centered</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every feature is designed with survivors in mind. We understand that safety looks different for everyone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-calm animate-on-scroll opacity-0 translate-y-4 transition-all duration-500" style={{ transitionDelay: '300ms' }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">By Women, For Women</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Created by young women who understand the unique digital threats women face every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gentle CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/8">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              Need help right now?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our resources page has practical guides for protecting yourself online, 
              understanding your legal options, and finding emotional support. 
              No sign-up required.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link to="/resources">
                Access Resources
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
