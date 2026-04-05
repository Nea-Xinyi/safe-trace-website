import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Eye, ShieldOff, Lock, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Purpose() {
  const { t } = useLanguage();

  const sections = [
    { icon: Eye, title: t.purpose.whatWeSaw, color: 'bg-destructive/5 dark:bg-destructive/10 border-destructive/15', iconBg: 'bg-destructive/10', iconColor: 'text-destructive', content: t.purpose.whatWeSawContent },
    { icon: ShieldOff, title: t.purpose.whatWasMissing, color: 'bg-[hsl(175_45%_45%/0.05)] dark:bg-[hsl(175_45%_45%/0.12)] border-[hsl(175_45%_45%/0.15)]', iconBg: 'bg-safety/10', iconColor: 'text-safety', content: t.purpose.whatWasMissingContent },
    { icon: Lock, title: t.purpose.whySolutionsFail, color: 'bg-primary/5 dark:bg-primary/10 border-primary/15', iconBg: 'bg-primary/10', iconColor: 'text-primary', content: t.purpose.whySolutionsFailContent },
    { icon: Users, title: t.purpose.whoWeAre, color: 'bg-accent/30 dark:bg-accent/40 border-accent/40', iconBg: 'bg-accent', iconColor: 'text-accent-foreground', content: t.purpose.whoWeAreContent },
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
      <section className="py-12 md:py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>{t.purpose.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>{t.purpose.subtitle}</p>
        </div>
      </section>

      <section className="py-2 md:py-4">
        <div className="container max-w-3xl space-y-5">
          {sections.map((section, i) => (
            <div key={i} className={`space-y-4 p-8 rounded-2xl border ${section.color} animate-on-scroll opacity-0 translate-y-4 transition-all duration-700`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-full ${section.iconBg}`}><section.icon className={`h-5 w-5 ${section.iconColor}`} /></div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{section.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg pl-14">{section.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-4 md:py-6 bg-gradient-to-b from-primary/8 to-accent/15">
        <div className="container max-w-3xl text-center space-y-4">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.purpose.closingTitle}</h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">{t.purpose.closingDesc}</p>
        </div>
      </section>
    </Layout>
  );
}
