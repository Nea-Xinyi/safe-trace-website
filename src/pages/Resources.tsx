import { useEffect } from 'react';
import { AlertTriangle, Shield, Scale, Heart, CheckCircle2, ExternalLink } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Resources() {
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-visible');
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
      <div>
        <section className="py-12 md:py-16 bg-primary/5 dark:bg-primary/10">
          <div className="container max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>{t.resources.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>{t.resources.subtitle}</p>
          </div>
        </section>

        <section className="py-2 md:py-4">
          <div className="container max-w-3xl space-y-5">

            {/* Leaked Info */}
            <div className="space-y-4 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 p-6 rounded-2xl bg-destructive/5 dark:bg-destructive/10 border border-destructive/15">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-destructive/10"><AlertTriangle className="h-5 w-5 text-destructive" /></div>
                <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">{t.resources.leakedTitle}</h2>
              </div>
              <p className="text-muted-foreground">{t.resources.leakedDesc}</p>
              <div className="space-y-3 mt-4">
                <ChecklistItem><strong>{t.resources.documentEverything}</strong> {t.resources.documentDesc}</ChecklistItem>
                <ChecklistItem><strong>{t.resources.reportPlatform}</strong> {t.resources.reportDesc}</ChecklistItem>
                <ChecklistItem>
                  <strong>{t.resources.requestRemoval}</strong> {t.resources.requestDesc}{' '}
                  <a href="https://support.google.com/websearch/answer/9673730" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{t.resources.personalContentTool}</a>{' '}
                  {t.resources.requestDescEnd}
                </ChecklistItem>
                <ChecklistItem><strong>{t.resources.contactBrokers}</strong> {t.resources.contactDesc}</ChecklistItem>
                <ChecklistItem><strong>{t.resources.alertContacts}</strong> {t.resources.alertDesc}</ChecklistItem>
                <ChecklistItem><strong>{t.resources.policeReport}</strong> {t.resources.policeDesc}</ChecklistItem>
              </div>
              {/* Helpful Links */}
              <div className="mt-6 space-y-3">
                <h3 className="font-display text-lg font-semibold text-primary">{t.resources.helpfulLinks}</h3>
                <p className="text-sm text-muted-foreground">{t.resources.helpfulLinksDesc}</p>
                <div className="grid gap-2 mt-3">
                  {t.resources.helpfulLinksItems.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-calm group">
                      <ExternalLink className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-primary group-hover:underline">{link.name}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Digital Self-Defense */}
            <div className="space-y-4 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 p-6 rounded-2xl bg-[hsl(175_45%_45%/0.05)] dark:bg-[hsl(175_45%_45%/0.12)] border border-[hsl(175_45%_45%/0.15)]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-safety/10"><Shield className="h-5 w-5 text-safety" /></div>
                <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">{t.resources.digitalDefense}</h2>
              </div>
              <p className="text-muted-foreground">{t.resources.digitalDefenseDesc}</p>
              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="accounts">
                  <AccordionTrigger className="text-left">{t.resources.secureAccounts}</AccordionTrigger>
                  <AccordionContent className="space-y-3 text-muted-foreground">
                    {t.resources.secureAccountsContent.map((item, i) => <p key={i}>• {item}</p>)}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="location">
                  <AccordionTrigger className="text-left">{t.resources.protectLocation}</AccordionTrigger>
                  <AccordionContent className="space-y-3 text-muted-foreground">
                    {t.resources.protectLocationContent.map((item, i) => <p key={i}>• {item}</p>)}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="social">
                  <AccordionTrigger className="text-left">{t.resources.lockSocial}</AccordionTrigger>
                  <AccordionContent className="space-y-3 text-muted-foreground">
                    {t.resources.lockSocialContent.map((item, i) => <p key={i}>• {item}</p>)}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ai">
                  <AccordionTrigger className="text-left">{t.resources.aiRisks}</AccordionTrigger>
                  <AccordionContent className="space-y-3 text-muted-foreground">
                    {t.resources.aiRisksContent.map((item, i) => <p key={i}>• {item}</p>)}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="devices">
                  <AccordionTrigger className="text-left">{t.resources.stalkerware}</AccordionTrigger>
                  <AccordionContent className="space-y-3 text-muted-foreground">
                    {t.resources.stalkerwareContent.map((item, i) => <p key={i}>• {item}</p>)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Legal Context */}
            <div className="space-y-4 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 p-6 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/15">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10"><Scale className="h-5 w-5 text-primary" /></div>
                <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">{t.resources.legalContext}</h2>
              </div>
              <p className="text-muted-foreground">{t.resources.legalContextDesc}</p>
              <div className="p-5 rounded-xl bg-muted/50 border border-border space-y-4 mt-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-medium text-foreground mb-2">{t.resources.canadaNote}</h4>
                  <p className="text-sm text-muted-foreground">{t.resources.canadaDesc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {t.resources.canadaLinks.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                        <ExternalLink className="h-3 w-3" />
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">{t.resources.lawCovers}</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {t.resources.lawCoversItems.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">{t.resources.lawFails}</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {t.resources.lawFailsItems.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* Emotional Support */}
            <div className="space-y-4 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 p-6 rounded-2xl bg-accent/30 dark:bg-accent/40 border border-accent/40">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10"><Heart className="h-5 w-5 text-primary" /></div>
                <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">{t.resources.emotionalSupport}</h2>
              </div>
              <div className="prose prose-sm text-muted-foreground max-w-none space-y-4">
                <p>{t.resources.emotionalP1}</p>
                <p><strong className="text-foreground">{t.resources.notOverreacting}</strong> {t.resources.emotionalP2}</p>
                <p><strong className="text-foreground">{t.resources.notYourFault}</strong> {t.resources.emotionalP3}</p>
                <p><strong className="text-foreground">{t.resources.notAlone}</strong> {t.resources.reachOut}</p>
                <ul className="space-y-2">
                  {t.resources.reachOutItems.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <p><strong className="text-foreground">{t.resources.okToStepBack}</strong> {t.resources.stepBackDesc}</p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </Layout>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-calm">
      <div className="mt-0.5 h-5 w-5 rounded border-2 flex items-center justify-center shrink-0 border-muted-foreground/30" />
      <p className="text-sm text-foreground/90 leading-relaxed">{children}</p>
    </div>
  );
}
