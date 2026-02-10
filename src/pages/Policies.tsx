import { Layout } from '@/components/layout/Layout';
import {
  Shield,
  Eye,
  MapPin,
  Trash2,
  Bell,
  Heart,
  Building2,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const policies = [
  {
    icon: Eye,
    title: 'Explicit, Informed Consent',
    color: 'text-primary',
    bg: 'bg-primary/10',
    content:
      "Every interaction on Safe Trace requires clear, informed consent. No dark patterns, no pre-checked boxes, no confusing language. You always know what you're agreeing to, and you can change your mind at any time.",
  },
  {
    icon: MapPin,
    title: 'Anti-Stalking Safeguards',
    color: 'text-safety',
    bg: 'bg-safety/10',
    content:
      'Location data is never stored without explicit permission. Emergency disable features let you cut off all location sharing instantly. We build alerts, not surveillance — you stay in control of who knows where you are.',
  },
  {
    icon: Shield,
    title: 'Data Minimization',
    color: 'text-primary',
    bg: 'bg-primary/10',
    content:
      'We only collect what is absolutely essential. No behavioral tracking, no advertising profiles, no selling data to third parties. If we don't need it to serve you, we don't collect it.',
  },
  {
    icon: Trash2,
    title: 'Rapid Data Deletion',
    color: 'text-destructive',
    bg: 'bg-destructive/10',
    content:
      'Request deletion of your data at any time, and we act within 48 hours — not 30 days, not "when we get around to it." Your right to disappear is non-negotiable.',
  },
  {
    icon: Bell,
    title: 'Transparency & Breach Notification',
    color: 'text-safety',
    bg: 'bg-safety/10',
    content:
      'If a breach occurs, you will know within 72 hours — the actual scope, what was exposed, and what we're doing about it. No vague statements, no corporate spin. You deserve the truth.',
  },
  {
    icon: Heart,
    title: 'Survivor-Centered Design',
    color: 'text-primary',
    bg: 'bg-primary/10',
    content:
      'Every design decision is filtered through one question: does this protect the most vulnerable user? Features that could be weaponized are redesigned or removed. Safety always outweighs convenience.',
  },
];

export default function Policies() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/40 to-background">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Clear policies. No hidden compromises.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe the platforms that protect women should hold themselves to a higher standard than the ones that fail them. Here's exactly how we operate.
          </p>
        </div>
      </section>

      {/* Policy Cards */}
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {policies.map((policy, i) => (
              <AccordionItem
                key={i}
                value={`policy-${i}`}
                className="border border-border/60 rounded-xl px-6 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4 text-left">
                    <div className={`p-2.5 rounded-full ${policy.bg}`}>
                      <policy.icon className={`h-5 w-5 ${policy.color}`} />
                    </div>
                    <span className="font-display font-semibold text-lg">
                      {policy.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-16">
                  {policy.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Why These Policies Exist */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Why these policies exist
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Current laws and platforms consistently fail survivors of technology-facilitated abuse. Most privacy policies are written to protect the company, not the user. Most platforms moderate reactively — after harm has already been done.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Safe Trace policies are preventive. They're modeled on the strongest international standards — GDPR, Quebec's Law 25, ISO 27001 — and then go further, because compliance is a floor, not a ceiling.
          </p>
        </div>
      </section>

      {/* Companies That Agree */}
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-primary/10">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Companies That Agree
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Organizations that have committed to upholding Safe Trace policies will appear here. If your company wants to take a stand for digital safety, visit our{' '}
            <a href="/businesses" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-calm">
              For Businesses
            </a>{' '}
            page.
          </p>
          <div className="p-8 rounded-xl border border-dashed border-border text-center text-muted-foreground">
            Be the first organization to commit.
          </div>
        </div>
      </section>
    </Layout>
  );
}
