import { Layout } from '@/components/layout/Layout';
import { Eye, ShieldOff, Lock, Users } from 'lucide-react';

const sections = [
  {
    icon: Eye,
    title: 'What We Saw',
    content:
      'Women being tracked through their own devices. Personal photos weaponized. Addresses shared publicly as punishment. An entire ecosystem of technology designed without considering the safety of its most vulnerable users — and then blaming them when things go wrong.',
  },
  {
    icon: ShieldOff,
    title: 'What Was Missing',
    content:
      'Prevention, not just reaction. Most resources only appear after harm is done — after images are shared, after addresses are published, after someone is already in danger. We needed tools and policies that stop harm before it starts, not just respond to it after.',
  },
  {
    icon: Lock,
    title: 'Why Existing Solutions Fail Survivors',
    content:
      "Privacy tools are paywalled. Reporting mechanisms are slow and dismissive. Platform moderation is reactive and inconsistent. Legal protections vary wildly by jurisdiction and rarely keep pace with technology. The burden of proof falls on the person being harmed, not the person causing harm.",
  },
  {
    icon: Users,
    title: 'Who We Are',
    content:
      'Young women who got tired of waiting for someone else to fix it. We're researchers, designers, and advocates building what the system never did: a standard for digital safety that centers survivors, not corporations. We believe women shouldn't have to choose between participating online and being safe.',
  },
];

export default function Purpose() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/8 via-accent/20 to-background">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Safe Trace Exists
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Because the systems meant to protect women weren't built by women, and it shows.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl space-y-16">
          {sections.map((section, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-primary/10">
                  <section.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  {section.title}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg pl-14">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container max-w-3xl text-center space-y-4">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            This is just the beginning.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Safe Trace is a living project — shaped by research, survivor feedback, and the belief that digital safety is a right, not a privilege.
          </p>
        </div>
      </section>
    </Layout>
  );
}
