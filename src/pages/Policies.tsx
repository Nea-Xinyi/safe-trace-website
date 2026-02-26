import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Eye, Trash2, Bell, Building2, Lock, Scale, ShieldCheck } from 'lucide-react';
import fisherSecurityLogo from '@/assets/fisher-security-logo.png';
import theStudyLogo from '@/assets/the-study-logo.gif';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Policies() {
  const { t } = useLanguage();

  const policies = [
    { icon: Eye, title: t.policies.personalInfo, color: 'text-primary', bg: 'bg-primary/10', sectionBg: 'bg-primary/5 dark:bg-primary/10', content: t.policies.personalInfoContent },
    { icon: Lock, title: t.policies.confidentiality, color: 'text-primary', bg: 'bg-primary/10', sectionBg: 'bg-primary/5 dark:bg-primary/10', content: t.policies.confidentialityContent },
    { icon: ShieldCheck, title: t.policies.dataProtection, color: 'text-primary', bg: 'bg-primary/10', sectionBg: 'bg-primary/5 dark:bg-primary/10', content: t.policies.dataProtectionContent },
    { icon: Trash2, title: t.policies.dataMinimization, color: 'text-safety', bg: 'bg-safety/10', sectionBg: 'bg-[hsl(175_45%_45%/0.05)] dark:bg-[hsl(175_45%_45%/0.12)]', content: t.policies.dataMinimizationContent },
    { icon: Scale, title: t.policies.consent, color: 'text-primary', bg: 'bg-primary/10', sectionBg: 'bg-primary/5 dark:bg-primary/10', content: t.policies.consentContent },
    { icon: Bell, title: t.policies.transparency, color: 'text-primary', bg: 'bg-primary/10', sectionBg: 'bg-primary/5 dark:bg-primary/10', content: t.policies.transparencyContent },
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

  return (
    <Layout>
      <section className="py-10 md:py-14 bg-primary/5 dark:bg-primary/10">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>{t.policies.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>{t.policies.subtitle}</p>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {policies.map((policy, i) => (
              <AccordionItem key={i} value={`policy-${i}`} className={`border rounded-xl px-6 ${policy.sectionBg} border-primary/20 data-[state=open]:border-primary/40 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 hover:shadow-md`} style={{ transitionDelay: `${i * 80}ms` }}>
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4 text-left">
                    <div className={`p-2.5 rounded-full ${policy.bg}`}><policy.icon className={`h-5 w-5 ${policy.color}`} /></div>
                    <span className="font-display font-semibold text-lg">{policy.title}</span>
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

      <section className="py-6 md:py-10 bg-gradient-to-b from-primary/8 to-accent/15">
        <div className="container max-w-3xl space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.policies.whyExist}</h2>
          <p className="text-muted-foreground leading-relaxed">{t.policies.whyExistP1}</p>
          <p className="text-muted-foreground leading-relaxed">{t.policies.whyExistP2}</p>
          <p className="text-muted-foreground leading-relaxed">{t.policies.whyExistP3}</p>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="container max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-primary/10"><Building2 className="h-5 w-5 text-primary" /></div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.policies.companiesAgree}</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {t.policies.companiesAgreeDesc}{' '}
            <a href="/businesses" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-calm">{t.policies.forBusinesses}</a>{' '}
            {t.policies.companiesAgreeDescEnd}
          </p>
          <div className="flex flex-wrap items-center gap-10 mt-2">
             {[{ src: fisherSecurityLogo, alt: 'FisherSecurity by BlueRing' }, { src: theStudyLogo, alt: 'The Study' }].map((logo, i) => (
               <img key={i} src={logo.src} alt={logo.alt} className="h-16 object-contain opacity-0 animate-fade-in" style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'forwards' }} />
             ))}
           </div>
        </div>
      </section>
    </Layout>
  );
}
