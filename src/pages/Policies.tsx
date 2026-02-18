import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import {
  Eye,
  Trash2,
  Bell,
  Building2,
  Lock,
  Scale,
  ShieldCheck,
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
    title: 'Personal Information & Location Privacy',
    color: 'text-primary',
    bg: 'bg-primary/10',
    sectionBg: 'bg-primary/5 dark:bg-primary/10',
    content: [
      'The company shall not disclose a client\'s personal information without the individual\'s explicit, informed consent.',
      'Personal information includes any information that identifies, relates to, or could reasonably be linked to an individual, whether directly or indirectly. This covers names, contact details, location data, online identifiers, and similar identifying information.',
      'Location data shall not be accessible to third parties, including family members or partners, without the explicit, revocable consent of the individual being tracked.',
      'Users shall have the ability to quickly disable location sharing in emergency situations.',
    ],
  },
  {
    icon: Lock,
    title: 'Confidentiality & Access Control',
    color: 'text-primary',
    bg: 'bg-primary/10',
    sectionBg: 'bg-primary/5 dark:bg-primary/10',
    content: [
      'Ensure client information remains confidential and secure.',
      'Access to personal data is restricted to authorized personnel only.',
      'Authorized personnel include: employees who have a need to know or otherwise access Personal Data for the purposes of performing applicable services, and contractors, agents, and auditors who have a need to know or otherwise access Personal Data.',
      'Confidentiality obligations apply to employees, contractors, and collaborating organizations.',
      'Obligations bound in writing by confidentiality obligations.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Active Data Protection & Compliance',
    color: 'text-primary',
    bg: 'bg-primary/10',
    sectionBg: 'bg-primary/5 dark:bg-primary/10',
    content: [
      'Apply active and continuous data protection measures.',
      'Comply with SOC2 regulations.',
      'Comply with ISO 27000 regulations.',
    ],
  },
  {
    icon: Trash2,
    title: 'Data Minimization & Deletion',
    color: 'text-safety',
    bg: 'bg-safety/10',
    sectionBg: 'bg-[hsl(175_45%_45%/0.05)] dark:bg-[hsl(175_45%_45%/0.12)]',
    content: [
      'Collect only essential user information to the company.',
      '"Essential" data refers only to information necessary to provide or maintain a specific product or service requested by an individual (e.g., account login credentials, required contact details).',
      'Regularly review collected data to ensure it remains necessary.',
      'Personal user data is deleted or anonymized within 10 days after nonuse.',
    ],
  },
  {
    icon: Scale,
    title: 'Explicit Consent Requirements',
    color: 'text-primary',
    bg: 'bg-primary/10',
    sectionBg: 'bg-primary/5 dark:bg-primary/10',
    content: [
      'Mandatory to receive explicit consent from individuals before starting to collect information.',
      'The following do not constitute valid consent: silence or inactivity, pre-checked boxes, bundled consent buried within general terms of service, browse-wrap agreements where continued use implies acceptance, and consent obtained through obscured or inaccessible language.',
    ],
  },
  {
    icon: Bell,
    title: 'Operational Transparency & Breach Notification',
    color: 'text-primary',
    bg: 'bg-primary/10',
    sectionBg: 'bg-primary/5 dark:bg-primary/10',
    content: [
      'Ensure the company\'s operational transparency at all times.',
      'Transparency of the collection/use of personal data.',
      'In cases of severe data breaches (leaked or stolen information), inform individuals immediately within 72 hours of the breach.',
      'Take protective measures to minimize impact.',
      'Individuals will be informed about what data is collected, why it is collected, how it is used, and how long it is retained.',
      'Any changes to data practices will be clearly communicated.',
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
            We believe the platforms that protect women should hold themselves to a higher standard than the ones that fail them. These are the specific, enforceable commitments that Safe Trace and every organization that signs on must uphold.
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
            Current laws and platforms consistently fail survivors of technology facilitated abuse. Most privacy policies are written to protect the company, not the user, and most platforms only moderate reactively after harm has already been done.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Safe Trace policies are preventive. They are modeled on the strongest international standards like GDPR, Quebec's Law 25, ISO 27001, and SOC 2, and then go further because compliance is a floor, not a ceiling.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every policy above is designed to be specific, auditable, and enforceable. Vague commitments to "user safety" just aren't enough, so these are the concrete standards we hold ourselves and our partners to.
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
