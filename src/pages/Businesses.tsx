import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Building2, CheckCircle2, ShieldCheck, Globe, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const alignments = [
  { label: 'SOC 2', description: 'Security, availability, processing integrity' },
  { label: 'ISO 27001', description: 'Information security management' },
  { label: 'GDPR', description: 'EU data protection regulation' },
  { label: 'Quebec Law 25', description: 'Protection of personal information' },
];

export default function Businesses() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: 'Thank you for your commitment',
      description: "We'll review your submission and be in touch.",
    });
  };

  const cards = [
    { icon: Building2, title: 'Governance Gap', color: 'bg-primary/5 dark:bg-primary/10 border-primary/15', iconColor: 'text-primary', desc: 'Most data protection policies weren\'t designed with technology-facilitated abuse in mind. Safe Trace fills that gap.' },
    { icon: ShieldCheck, title: 'Beyond Compliance', color: 'bg-[hsl(175_45%_45%/0.05)] dark:bg-[hsl(175_45%_45%/0.12)] border-[hsl(175_45%_45%/0.15)]', iconColor: 'text-safety', desc: 'Our policies align with and exceed SOC 2, ISO 27001, GDPR, and Quebec Law 25 requirements for data protection.' },
    { icon: Globe, title: 'Public Trust', color: 'bg-accent/20 dark:bg-accent/30 border-accent/30', iconColor: 'text-primary', desc: 'Committing to survivor-centered policies signals that your organization takes data safety seriously — beyond legal minimums.' },
    { icon: FileText, title: 'Clear Standards', color: 'bg-destructive/5 dark:bg-destructive/10 border-destructive/15', iconColor: 'text-safety', desc: 'Safe Trace policies are specific, actionable, and auditable — not vague promises buried in legal documents.' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-10 md:py-14 bg-primary/5 dark:bg-primary/10">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
            Commit to Safe Trace
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            Doxxing isn't a niche issue — it's a governance failure. Organizations that collect personal data have a responsibility to protect the people behind it.
          </p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-6 md:py-10">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
            Why your organization should care
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border ${item.color} space-y-3 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 hover:shadow-md`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                <h3 className="font-display font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Alignment */}
      <section className="py-6 md:py-10 bg-gradient-to-b from-primary/8 to-accent/15">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
            Framework Alignment
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Safe Trace policies align with the following international standards — and go further where they fall short on survivor protection.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {alignments.map((a, i) => (
              <div
                key={a.label}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/60 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 hover:border-primary/30"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <CheckCircle2 className="h-5 w-5 text-safety shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{a.label}</p>
                  <p className="text-sm text-muted-foreground">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Form */}
      <section className="py-6 md:py-10">
        <div className="container max-w-xl space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
            Make Your Commitment
          </h2>
          <p className="text-muted-foreground">
            Submitting this form signals your intent to adopt Safe Trace policies. We'll review your submission before listing your organization.
          </p>

          {submitted ? (
            <div className="p-8 rounded-xl bg-safety/10 border border-safety/30 text-center space-y-3">
              <CheckCircle2 className="h-10 w-10 text-safety mx-auto" />
              <h3 className="font-display font-semibold text-lg text-foreground">
                Commitment received
              </h3>
              <p className="text-muted-foreground text-sm">
                Thank you. We'll review your submission and reach out soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="company">Organization Name</Label>
                <Input id="company" required placeholder="Your company or organization" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Email</Label>
                <Input id="contact" type="email" required placeholder="contact@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" required placeholder="Full name" />
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Checkbox id="pledge" required />
                <Label htmlFor="pledge" className="text-sm text-muted-foreground leading-relaxed">
                  I confirm that our organization intends to adopt and uphold Safe Trace's data protection and anti-doxxing policies.
                </Label>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Commit to Safe Trace
              </Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
