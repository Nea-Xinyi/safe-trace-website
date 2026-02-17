import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import {
  Eye,
  Trash2,
  Bell,
  Building2,
  Lock,
  Scale,
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
    sectionBg: 'bg-primary/5 dark:bg-primary/10',
    content: [
      'All data collection requires affirmative, unambiguous consent obtained through clear, plain-language disclosures prior to any processing activity.',
      'Consent interfaces must be free of dark patterns, pre-checked boxes, or manipulative design. Users must actively opt in — never be opted in by default.',
      'Consent must be granular: users can agree to specific processing activities independently (e.g., consenting to account creation without consenting to analytics).',
      'Consent can be withdrawn at any time through a process no more complex than the one used to grant it, in compliance with GDPR Article 7(3).',
      'Records of consent (timestamp, scope, method) must be maintained and auditable.',
    ],
  },
  {
    icon: Lock,
    title: 'Data Minimization & Purpose Limitation',
    color: 'text-primary',
    bg: 'bg-primary/10',
    sectionBg: 'bg-primary/5 dark:bg-primary/10',
    content: [
      'Only data strictly necessary for the stated purpose may be collected. No speculative, behavioural, or advertising-related data collection is permitted.',
      'Each data field collected must have a documented legal basis and specific purpose, reviewable upon request (aligned with GDPR Article 5(1)(b)).',
      'Data may not be repurposed beyond the original stated intent without obtaining fresh, specific consent.',
      'Third-party data sharing is prohibited except where required by law, and any such disclosure must be communicated to the user within 72 hours.',
      'Regular data audits must be conducted quarterly to identify and purge any data that no longer serves its original purpose.',
    ],
  },
  {
    icon: Trash2,
    title: 'Rapid Data Deletion & Portability',
    color: 'text-safety',
    bg: 'bg-safety/10',
    sectionBg: 'bg-[hsl(175_45%_45%/0.05)] dark:bg-[hsl(175_45%_45%/0.12)]',
    content: [
      'Users may request complete deletion of their personal data at any time. Deletion must be executed within 48 hours — not the 30-day maximum permitted under GDPR Article 17.',
      'Deletion must extend to all backups, replicas, third-party processors, and derived datasets. A certificate of deletion must be provided upon request.',
      'Users have the right to export all their data in a machine-readable, interoperable format (JSON, CSV) at any time, in compliance with GDPR Article 20.',
      'Account deletion must not require contacting support, navigating complex workflows, or providing justification. One-click deletion must be available.',
      'Automated data retention limits must be enforced: inactive account data is purged after 12 months with 30-day advance notification.',
    ],
  },
  {
    icon: Bell,
    title: 'Transparency & Breach Notification',
    color: 'text-primary',
    bg: 'bg-primary/10',
    sectionBg: 'bg-primary/5 dark:bg-primary/10',
    content: [
      'In the event of a data breach, affected users must be notified within 72 hours with a clear, non-technical disclosure of: what data was compromised, the scope of the breach, and specific remediation steps being taken.',
      'Breach notifications must not contain corporate euphemisms. Language must be direct and actionable ("Your email address and phone number were accessed by an unauthorized party" — not "a security incident may have impacted some user data").',
      'An annual transparency report must be published detailing: number of data requests received from law enforcement, number of breaches, data retention statistics, and third-party processor audits.',
      'All algorithmic decisions that affect user safety, content visibility, or data exposure must be documented and explainable to the user upon request.',
      'Security audit results from independent third parties must be published in summary form at least annually.',
    ],
  },
  {
    icon: Scale,
    title: 'Regulatory Alignment & Accountability',
    color: 'text-primary',
    bg: 'bg-primary/10',
    sectionBg: 'bg-primary/5 dark:bg-primary/10',
    content: [
      'Safe Trace policies are designed to meet or exceed the requirements of GDPR (EU), Quebec Law 25 (Canada), PIPEDA (Canada), ISO 27001, and SOC 2 Type II.',
      'Compliance is treated as a floor, not a ceiling. Where regulations fall short on survivor protection, Safe Trace policies apply the stricter standard.',
      'Organizations adopting these policies must designate a Data Protection Officer (or equivalent) responsible for ongoing compliance monitoring.',
      'Annual third-party audits against these policies must be conducted, with results made available to users in summary form.',
      'Non-compliance with any of these policies must be self-reported within 30 days and accompanied by a remediation plan with defined timelines.',
    ],
  },
];

export default function Policies() {
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
      <section className="py-10 md:py-14 bg-primary/5 dark:bg-primary/10">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
            Clear policies. No hidden compromises.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            We believe the platforms that protect women should hold themselves to a higher standard than the ones that fail them. These are the specific, enforceable commitments that Safe Trace — and every organization that signs on — must uphold.
          </p>
        </div>
      </section>

      {/* Policy Cards */}
      <section className="py-6 md:py-10">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {policies.map((policy, i) => (
              <AccordionItem
                key={i}
                value={`policy-${i}`}
                className={`border rounded-xl px-6 ${policy.sectionBg} border-primary/20 data-[state=open]:border-primary/40 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 hover:shadow-md`}
                style={{ transitionDelay: `${i * 80}ms` }}
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
                <AccordionContent className="pb-6 pl-16">
                  <ul className="space-y-3">
                    {policy.content.map((item, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-primary font-bold mt-0.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Why These Policies Exist */}
      <section className="py-6 md:py-10 bg-gradient-to-b from-primary/8 to-accent/15">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
            Why these policies exist
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Current laws and platforms consistently fail survivors of technology-facilitated abuse. Most privacy policies are written to protect the company, not the user. Most platforms moderate reactively — after harm has already been done.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Safe Trace policies are preventive. They are modeled on the strongest international standards — GDPR, Quebec's Law 25, ISO 27001, SOC 2 — and then go further, because compliance is a floor, not a ceiling.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every policy above is designed to be specific, auditable, and enforceable. Vague commitments to "user safety" are insufficient. These are the concrete standards we hold ourselves and our partners to.
          </p>
        </div>
      </section>

      {/* Companies That Agree */}
      <section className="py-6 md:py-10">
        <div className="container max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-primary/10">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
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
          <div className="p-8 rounded-xl border border-dashed border-primary/30 text-center text-muted-foreground bg-primary/5">
            Be the first organization to commit.
          </div>
        </div>
      </section>
    </Layout>
  );
}
