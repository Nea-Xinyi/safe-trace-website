import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { BookOpen, BarChart3, FileDown, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '1 in 4', label: 'women experience online harassment that makes them fear for their safety', source: 'Pew Research Center, 2021', color: 'bg-destructive/5 border-destructive/15' },
  { value: '73%', label: 'of women who experienced online abuse reported anxiety, stress, or panic attacks', source: 'The Economist Intelligence Unit, 2021', color: 'bg-primary/5 border-primary/15' },
  { value: '58%', label: 'of teen girls have experienced some form of technology-facilitated abuse', source: 'Plan International, 2020', color: 'bg-accent/30 border-accent/40' },
  { value: '$0', label: 'is the cost of most "privacy tools" that actually work — because they don\'t exist yet', source: 'Safe Trace Research, 2025', color: 'bg-[hsl(175_45%_45%/0.05)] border-[hsl(175_45%_45%/0.15)]' },
];

export default function Research() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/12 via-accent/25 to-background">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
            Our Research
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            The data behind Safe Trace — plain language, clear sources, no jargon.
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-primary/10">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              Key Statistics
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border ${stat.color} space-y-3 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 hover:shadow-md`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <p className="font-display text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground italic">
                  {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/8 to-accent/15">
        <div className="container max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              Research Summary
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our research examines how existing digital platforms and legal frameworks fail to protect women from technology-facilitated abuse — specifically doxxing, non-consensual image sharing, and location tracking.
            </p>
            <p>
              Through interviews, case studies, and policy analysis, we identified critical gaps: most platforms moderate reactively rather than preventively, privacy tools are either paywalled or require technical expertise, and legal protections vary dramatically across jurisdictions.
            </p>
            <p>
              The Safe Trace framework proposes a new standard — one that treats digital safety as a design requirement, not an afterthought. Our policies are informed by survivor experiences and built to be adoptable by organizations of any size.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl space-y-6 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-safety/10">
              <FlaskConical className="h-5 w-5 text-safety" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              Methodology
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            This research uses a feminist epistemological framework with a survivor-informed lens. We center the experiences of those most affected by technology-facilitated abuse, recognizing that traditional "neutral" research often reproduces the power dynamics it claims to study.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our methodology combines qualitative analysis of survivor narratives, policy comparison across jurisdictions (Canada, EU, Australia, US), and technical auditing of platform safety features.
          </p>
        </div>
      </section>

      {/* Download */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-accent/15 to-primary/8">
        <div className="container max-w-3xl text-center space-y-6">
          <div className="p-2.5 rounded-full bg-primary/10 w-fit mx-auto">
            <FileDown className="h-5 w-5 text-primary" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
            Download the Full Paper
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Our complete research paper is available as a free PDF. No email required, no tracking.
          </p>
          <Button size="lg" variant="outline" disabled>
            Coming Soon
          </Button>
        </div>
      </section>
    </Layout>
  );
}
