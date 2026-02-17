import { Layout } from '@/components/layout/Layout';
import { Shield, Lock, Eye, Bell, Smartphone } from 'lucide-react';

export default function SafeTraceApp() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              SafeTrace App
            </h1>
            <p className="text-lg text-muted-foreground">
              Your digital safety companion — practical tools to protect yourself online, all in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Privacy Scanner',
                description: 'Check your digital footprint and find exposed personal information across platforms.',
              },
              {
                icon: Lock,
                title: 'Account Lockdown Guide',
                description: 'Step-by-step instructions to secure your accounts and devices quickly.',
              },
              {
                icon: Eye,
                title: 'Harassment Documentation',
                description: 'Safely document and preserve evidence of online harassment for reporting or legal use.',
              },
              {
                icon: Bell,
                title: 'Safety Alerts',
                description: 'Get notified about new threats, platform policy changes, and safety updates relevant to you.',
              },
              {
                icon: Smartphone,
                title: 'Quick Exit',
                description: 'One-tap panic button to instantly close the app and clear recent activity.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card dark:bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              Coming Soon
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The SafeTrace App is currently in development. We're building tools designed with survivors in mind — no tracking, no data harvesting, just safety.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
