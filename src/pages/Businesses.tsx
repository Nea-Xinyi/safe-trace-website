import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: 'Thank you for your commitment',
      description: "We'll review your submission and be in touch.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/12 via-accent/20 to-background">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Commit to Safe Trace
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Doxxing isn't a niche issue — it's a governance failure. Organizations that collect personal data have a responsibility to protect the people behind it.
          </p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl space-y-8">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Why your organization should care
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 rounded-xl bg-card border border-border/60 space-y-3">
              <Building2 className="h-6 w-6 text-primary" />
              <h3 className="font-display font-semibold">Governance Gap</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most data protection policies weren't designed with technology-facilitated abuse in mind. Safe Trace fills that gap.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/60 space-y-3">
              <ShieldCheck className="h-6 w-6 text-safety" />
              <h3 className="font-display font-semibold">Beyond Compliance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our policies align with and exceed SOC 2, ISO 27001, GDPR, and Quebec Law 25 requirements for data protection.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/60 space-y-3">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="font-display font-semibold">Public Trust</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Committing to survivor-centered policies signals that your organization takes data safety seriously — beyond legal minimums.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/60 space-y-3">
              <FileText className="h-6 w-6 text-safety" />
              <h3 className="font-display font-semibold">Clear Standards</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Safe Trace policies are specific, actionable, and auditable — not vague promises buried in legal documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Alignment */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Framework Alignment
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Safe Trace policies align with the following international standards — and go further where they fall short on survivor protection.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {alignments.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/60"
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
      <section className="py-12 md:py-20">
        <div className="container max-w-xl space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
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
