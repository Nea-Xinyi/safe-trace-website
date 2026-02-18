import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Building2, CheckCircle2, ShieldCheck, Globe, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Businesses() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const alignments = [
    { label: 'SOC 2', description: t.businesses.soc2 },
    { label: 'ISO 27001', description: t.businesses.iso27001 },
    { label: 'GDPR', description: t.businesses.gdpr },
    { label: 'Quebec Law 25', description: t.businesses.law25 },
  ];

  const cards = [
    { icon: Building2, title: t.businesses.governanceGap, color: 'bg-primary/5 dark:bg-primary/10 border-primary/15', iconColor: 'text-primary', desc: t.businesses.governanceGapDesc },
    { icon: ShieldCheck, title: t.businesses.beyondCompliance, color: 'bg-[hsl(175_45%_45%/0.05)] dark:bg-[hsl(175_45%_45%/0.12)] border-[hsl(175_45%_45%/0.15)]', iconColor: 'text-safety', desc: t.businesses.beyondComplianceDesc },
    { icon: Globe, title: t.businesses.publicTrust, color: 'bg-accent/20 dark:bg-accent/30 border-accent/30', iconColor: 'text-primary', desc: t.businesses.publicTrustDesc },
    { icon: FileText, title: t.businesses.clearStandards, color: 'bg-destructive/5 dark:bg-destructive/10 border-destructive/15', iconColor: 'text-safety', desc: t.businesses.clearStandardsDesc },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('animate-visible'); }); },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: t.businesses.toastTitle, description: t.businesses.toastDesc });
  };

  return (
    <Layout>
      <section className="py-10 md:py-14 bg-primary/5 dark:bg-primary/10">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>{t.businesses.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>{t.businesses.subtitle}</p>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.businesses.whyCare}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((item, i) => (
              <div key={i} className={`p-6 rounded-xl border ${item.color} space-y-3 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 hover:shadow-md`} style={{ transitionDelay: `${i * 100}ms` }}>
                <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                <h3 className="font-display font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 bg-gradient-to-b from-primary/8 to-accent/15">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.businesses.frameworkAlignment}</h2>
          <p className="text-muted-foreground leading-relaxed">{t.businesses.frameworkAlignmentDesc}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {alignments.map((a, i) => (
              <div key={a.label} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/60 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 hover:border-primary/30" style={{ transitionDelay: `${i * 80}ms` }}>
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

      <section className="py-6 md:py-10">
        <div className="container max-w-xl space-y-6 p-6 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/15">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.businesses.makeCommitment}</h2>
          <p className="text-muted-foreground">{t.businesses.makeCommitmentDesc}</p>
          {submitted ? (
            <div className="p-8 rounded-xl bg-safety/10 border border-safety/30 text-center space-y-3">
              <CheckCircle2 className="h-10 w-10 text-safety mx-auto" />
              <h3 className="font-display font-semibold text-lg text-foreground">{t.businesses.commitReceived}</h3>
              <p className="text-muted-foreground text-sm">{t.businesses.commitThanks}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="company">{t.businesses.orgName}</Label>
                <Input id="company" required placeholder={t.businesses.orgPlaceholder} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">{t.businesses.contactEmail}</Label>
                <Input id="contact" type="email" required placeholder="contact@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">{t.businesses.yourName}</Label>
                <Input id="name" required placeholder={t.businesses.fullName} />
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Checkbox id="pledge" required />
                <Label htmlFor="pledge" className="text-sm text-muted-foreground leading-relaxed">{t.businesses.pledgeLabel}</Label>
              </div>
              <Button type="submit" size="lg" className="w-full">{t.businesses.commitButton}</Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
