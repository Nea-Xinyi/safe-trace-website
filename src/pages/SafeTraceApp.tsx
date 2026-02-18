import { Layout } from '@/components/layout/Layout';
import { Shield, Lock, Eye, Trash2, ShieldCheck, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const featureIcons = [Camera, Lock, Trash2, Shield, Eye, ShieldCheck];

export default function SafeTraceApp() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{t.safeTraceApp.title}</h1>
            <p className="text-lg text-muted-foreground">{t.safeTraceApp.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.safeTraceApp.howItWorks}</h2>
            <div className="grid gap-6 text-left">
              {t.safeTraceApp.steps.map((item) => (
                <div key={item.step} className="flex gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.safeTraceApp.features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={i} className="p-6 rounded-2xl bg-card dark:bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">{t.safeTraceApp.comingSoonTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.safeTraceApp.comingSoonDesc}</p>
            <Button size="lg" variant="outline" disabled>{t.safeTraceApp.launchComingSoon}</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
