import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Eye, ShieldOff, Lock, Users } from 'lucide-react';

const sections = [
  {
    icon: Eye,
    title: 'What We Saw',
    color: 'bg-destructive/5 border-destructive/15',
    iconBg: 'bg-destructive/10',
    iconColor: 'text-destructive',
    content:
      'Women being tracked through their own devices. Personal photos weaponized. Addresses shared publicly as punishment. An entire ecosystem of technology designed without considering the safety of its most vulnerable users — and then blaming them when things go wrong.',
  },
  {
    icon: ShieldOff,
    title: 'What Was Missing',
    color: 'bg-[hsl(175_45%_45%/0.05)] border-[hsl(175_45%_45%/0.15)]',
    iconBg: 'bg-safety/10',
    iconColor: 'text-safety',
    content:
      'Prevention, not just reaction. Most resources only appear after harm is done — after images are shared, after addresses are published, after someone is already in danger. We needed tools and policies that stop harm before it starts, not just respond to it after.',
  },
  {
    icon: Lock,
    title: 'Why Existing Solutions Fail Survivors',
    color: 'bg-primary/5 border-primary/15',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    content:
      "Privacy tools are paywalled. Reporting mechanisms are slow and dismissive. Platform moderation is reactive and inconsistent. Legal protections vary wildly by jurisdiction and rarely keep pace with technology. The burden of proof falls on the person being harmed, not the person causing harm.",
  },
  {
    icon: Users,
    title: 'Who We Are',
    color: 'bg-accent/30 border-accent/40',
    iconBg: 'bg-accent',
    iconColor: 'text-accent-foreground',
    content:
      "Young women who got tired of waiting for someone else to fix it. We're researchers, designers, and advocates building what the system never did: a standard for digital safety that centers survivors, not corporations. We believe women shouldn't have to choose between participating online and being safe.",
  },
];

export default function Purpose() {
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/15 via-accent/25 to-background">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
            Why Safe Trace Exists
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            Because the systems meant to protect women weren't built by women, and it shows.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl space-y-8">
          {sections.map((section, i) => (
            <div
              key={i}
              className={`space-y-4 p-8 rounded-2xl border ${section.color} animate-on-scroll opacity-0 translate-y-4 transition-all duration-700`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-full ${section.iconBg}`}>
                  <section.icon className={`h-5 w-5 ${section.iconColor}`} />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
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
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/8 to-accent/15">
        <div className="container max-w-3xl text-center space-y-4">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
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
