import { Layout } from '@/components/layout/Layout';
import { Shield, Lock, Eye, Trash2, ShieldCheck, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
              Upload a photo before you post it. Our AI scans for details that could be used to stalk, locate, or identify you so you can share safely.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              How It Works
            </h2>
            <div className="grid gap-6 text-left">
              {[
                { step: '1', title: 'Verify Your Identity', desc: 'Complete our multistep security protocol to confirm you are a real person seeking protection, not someone misusing the tool.' },
                { step: '2', title: 'Upload Your Photo', desc: 'Choose any image you\'re about to post on social media. It never leaves the secure analysis environment.' },
                { step: '3', title: 'AI Scans for Risks', desc: 'Our AI detects location markers, reflections, background details, metadata, and other information that could be used to track or identify you.' },
                { step: '4', title: 'Get Your Results', desc: 'Receive a clear, plain language report of what was found along with suggestions for how to post more safely.' },
                { step: '5', title: 'Data Deleted', desc: 'Your photo and all analysis data are permanently deleted immediately after your session. We keep nothing.' },
              ].map((item) => (
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
            {[
              {
                icon: Camera,
                title: 'AI Photo Analysis',
                description: 'Scans for street signs, reflections, landmarks, license plates, and other identifying details hiding in your photos.',
              },
              {
                icon: Lock,
                title: 'Multistep Security',
                description: 'A verification protocol ensures only real users can access the tool, protecting against misuse.',
              },
              {
                icon: Trash2,
                title: 'Instant Data Deletion',
                description: 'Your photo and all analysis results are permanently erased the moment your session ends, with absolutely zero retention.',
              },
              {
                icon: Shield,
                title: '100% Free',
                description: 'No subscriptions, no paywalls, no hidden fees. Safety tools should never cost money.',
              },
              {
                icon: Eye,
                title: 'No Tracking',
                description: 'We don\'t collect analytics, track usage, or store any personal data, and we never will.',
              },
              {
                icon: ShieldCheck,
                title: 'Built for Survivors',
                description: 'Designed with input from people who\'ve experienced stalking and technology-facilitated abuse.',
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

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              Coming Soon
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The SafeTrace App is currently in development. We're building it with survivors in mind, with no tracking, no data harvesting, and nothing but safety.
            </p>
            <Button size="lg" variant="outline" disabled>
              Launch Coming Soon
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
