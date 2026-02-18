import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { BookOpen, BarChart3, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const statColors = [
  'bg-destructive/5 dark:bg-destructive/10 border-destructive/15',
  'bg-primary/5 dark:bg-primary/10 border-primary/15',
  'bg-accent/30 dark:bg-accent/40 border-accent/40',
  'bg-[hsl(175_45%_45%/0.05)] dark:bg-[hsl(175_45%_45%/0.12)] border-[hsl(175_45%_45%/0.15)]',
];

export default function Research() {
  const { t } = useLanguage();

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
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>{t.research.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>{t.research.subtitle}</p>
        </div>
      </section>

      <section className="py-8 md:py-14 bg-destructive/5 dark:bg-destructive/10">
        <div className="container max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-destructive/10"><BarChart3 className="h-5 w-5 text-destructive" /></div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.research.keyStatistics}</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.research.stats.map((stat, i) => (
              <div key={i} className={`p-5 rounded-xl border ${statColors[i]} space-y-2.5 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 hover:shadow-md`} style={{ transitionDelay: `${i * 120}ms` }}>
                <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-foreground/90 leading-relaxed">{stat.label}</p>
                <p className="text-xs text-muted-foreground italic">{stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-14 bg-primary/8">
        <div className="container max-w-3xl space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-primary/10"><BookOpen className="h-5 w-5 text-primary" /></div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.research.researchSummary}</h2>
          </div>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>{t.research.summaryP1}</p>
            <p>{t.research.summaryP2}</p>
            <p>{t.research.summaryP3}</p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-14 bg-accent/20">
        <div className="container max-w-3xl text-center space-y-5">
          <div className="p-2.5 rounded-full bg-primary/10 w-fit mx-auto"><FileDown className="h-5 w-5 text-primary" /></div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.research.downloadTitle}</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{t.research.downloadDesc}</p>
          <Button size="lg" variant="outline" disabled>{t.research.comingSoon}</Button>
        </div>
      </section>
    </Layout>
  );
}
