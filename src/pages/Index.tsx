import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Richer purple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-accent/30 to-background -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-lavender opacity-20 blur-3xl -z-10" />
        
        <div className="container py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
            {/* Primary headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your digital safety is our priority.
            </h1>
            
            {/* Supporting line */}
            <p className="text-xl md:text-2xl text-primary font-display font-medium">
              Made by young women, to protect women.
            </p>
            
            {/* Subtext */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Designed for moments when privacy means survival.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/policies">
                  Read Our Policies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/resources">
                  Find Support Resources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Built on trust, not tracking
            </h2>
            <p className="text-muted-foreground">
              We believe safety tools should protect you, not monitor you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Value 1 */}
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-calm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Privacy First</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No tracking, no data harvesting. Your information stays yours—we don't collect what we don't need.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-calm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Survivor-Centered</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every feature is designed with survivors in mind. We understand that safety looks different for everyone.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-calm">
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
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Need help right now?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our resources page has practical guides for protecting yourself online, 
              understanding your legal options, and finding emotional support. 
              No sign-up required.
            </p>
            <Button asChild variant="secondary" size="lg" className="mt-4">
              <Link to="/resources">
                Access Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
