import { useEffect } from 'react';
import { 
  AlertTriangle, 
  Shield, 
  Scale, 
  Heart, 
  CheckCircle2,
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Resources() {
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
      <div>
        {/* Header */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-destructive/8 via-accent/20 to-background">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
                Resources for Digital Safety
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
                Practical help for protecting yourself online. No account needed, no tracking on this page.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-6 md:py-10">
          <div className="container">
            <div className="max-w-3xl space-y-8">
              
              {/* Section 1: If Your Information Was Leaked */}
              <div className="space-y-4 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 p-6 rounded-2xl bg-destructive/5 dark:bg-destructive/10 border border-destructive/15">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-destructive/10">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">
                    If Your Information Was Leaked
                  </h2>
                </div>
                
                <p className="text-muted-foreground">
                  Being doxxed is frightening. Here are immediate steps you can take to protect yourself.
                </p>

                <div className="space-y-3 mt-4">
                  <ChecklistItem checked={false}>
                    <strong>Document everything.</strong> Screenshot the posts, messages, or websites where your information appears. Note the date, time, and URL.
                  </ChecklistItem>
                  <ChecklistItem checked={false}>
                    <strong>Report to the platform.</strong> Most platforms have policies against sharing personal information. Report the content directly.
                  </ChecklistItem>
                  <ChecklistItem checked={false}>
                    <strong>Request removal from Google.</strong> Use Google's{' '}
                    <a 
                      href="https://support.google.com/websearch/answer/9673730" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2"
                    >
                      personal content removal tool
                    </a>{' '}
                    to request delisting.
                  </ChecklistItem>
                  <ChecklistItem checked={false}>
                    <strong>Contact data brokers.</strong> Sites like Spokeo, WhitePages, and BeenVerified may have your data. Request removal from each.
                  </ChecklistItem>
                  <ChecklistItem checked={false}>
                    <strong>Alert trusted contacts.</strong> Let close friends or family know what's happening so they can watch for impersonation or harassment.
                  </ChecklistItem>
                  <ChecklistItem checked={false}>
                    <strong>Consider a police report.</strong> Even if they can't act immediately, having a report on file can help later.
                  </ChecklistItem>
                </div>
              </div>

              {/* Section 2: Digital Self-Defense */}
              <div className="space-y-4 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 p-6 rounded-2xl bg-[hsl(175_45%_45%/0.05)] dark:bg-[hsl(175_45%_45%/0.12)] border border-[hsl(175_45%_45%/0.15)]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-safety/10">
                    <Shield className="h-5 w-5 text-safety" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">
                    Digital Self-Defense
                  </h2>
                </div>
                
                <p className="text-muted-foreground">
                  Practical steps to make yourself harder to track and find online.
                </p>

                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value="accounts">
                    <AccordionTrigger className="text-left">
                      Secure your accounts
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 text-muted-foreground">
                      <p>• Use unique passwords for every account. A password manager can help.</p>
                      <p>• Enable two-factor authentication (2FA) on all important accounts.</p>
                      <p>• Check what apps have access to your accounts and revoke any you don't recognize.</p>
                      <p>• Review your email's forwarding and connected accounts settings.</p>
                      <p>• Consider using a separate email for sensitive accounts.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="location">
                    <AccordionTrigger className="text-left">
                      Protect your location
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 text-muted-foreground">
                      <p>• Turn off location services for apps that don't need it.</p>
                      <p>• Check your Google Location History and consider turning it off.</p>
                      <p>• Remove location metadata from photos before sharing (Settings → Privacy).</p>
                      <p>• Be careful about "check-ins" and location tags on social media.</p>
                      <p>• Review who can see your location on family sharing apps.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="social">
                    <AccordionTrigger className="text-left">
                      Lock down social media
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 text-muted-foreground">
                      <p>• Set all profiles to private if possible.</p>
                      <p>• Remove your phone number and real birthday from public profiles.</p>
                      <p>• Review tagged photos and posts—untag yourself from anything revealing.</p>
                      <p>• Disable "people you may know" features when possible.</p>
                      <p>• Consider using a nickname or variation of your name.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="ai">
                    <AccordionTrigger className="text-left">
                      AI image risks
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 text-muted-foreground">
                      <p>• Be aware that any photo of your face can potentially be used to create deepfakes.</p>
                      <p>• Limit the number of clear, well-lit photos of yourself publicly available.</p>
                      <p>• If non-consensual AI images are created of you, document and report to platforms and law enforcement.</p>
                      <p>• Some platforms now have specific policies against AI-generated intimate imagery.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="devices">
                    <AccordionTrigger className="text-left">
                      Check for stalkerware
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 text-muted-foreground">
                      <p>• Look for apps you don't recognize, especially with generic names.</p>
                      <p>• Check if your phone's battery drains unusually fast.</p>
                      <p>• Review all app permissions, especially for location, camera, and microphone.</p>
                      <p>• If you suspect monitoring, don't delete suspicious apps—it may alert the person. Seek help first.</p>
                      <p>• Consider a factory reset on a safe device if you're leaving an abusive situation.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Section 3: Legal Context */}
              <div className="space-y-4 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 p-6 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/15">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">
                    Legal Context
                  </h2>
                </div>
                
                <p className="text-muted-foreground">
                  The truth is that legal protections against doxxing are inconsistent and often inadequate. Here's what you should know.
                </p>

                <div className="p-5 rounded-xl bg-muted/50 border border-border space-y-4 mt-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">What the law sometimes covers:</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Criminal harassment (if there's a pattern of threatening behavior)</li>
                      <li>• Uttering threats (if explicit threats are made)</li>
                      <li>• Non-consensual sharing of intimate images (in many jurisdictions)</li>
                      <li>• Identity theft (if your information is used for fraud)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">What the law often fails to address:</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Simple publication of personal information (often not illegal)</li>
                      <li>• Harassment that doesn't rise to criminal thresholds</li>
                      <li>• Cross-border cases (when the perpetrator is in another country)</li>
                      <li>• Platform inaction or slow responses</li>
                    </ul>
                  </div>

                  <p className="text-sm text-muted-foreground border-t border-border pt-4">
                    <strong>In Canada:</strong> There is no specific anti-doxxing law. Legal recourse often depends on whether the behavior fits existing harassment, stalking, or privacy laws. Civil remedies may be available in some cases.
                  </p>
                </div>
              </div>

              {/* Section 4: Emotional Support */}
              <div className="space-y-4 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 p-6 rounded-2xl bg-accent/30 dark:bg-accent/40 border border-accent/40">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-primary">
                    Emotional Support
                  </h2>
                </div>
                
                <div className="prose prose-sm text-muted-foreground max-w-none space-y-4">
                  <p>
                    If you're reading this, you may be scared, overwhelmed, or exhausted. 
                    That's a completely valid response to having your safety violated.
                  </p>
                  <p>
                    <strong className="text-foreground">You are not overreacting.</strong> Digital harassment and doxxing are real threats with real consequences. 
                    Your fear is not paranoia—it's a reasonable response to an unreasonable situation.
                  </p>
                  <p>
                    <strong className="text-foreground">This is not your fault.</strong> No matter what someone claims you "did" to deserve this, 
                    sharing someone's private information to intimidate or harm them is wrong. Full stop.
                  </p>
                  <p>
                    <strong className="text-foreground">You don't have to handle this alone.</strong> Consider reaching out to:
                  </p>
                  <ul className="space-y-2">
                    <li>A trusted friend or family member</li>
                    <li>A counselor or therapist (many specialize in trauma)</li>
                    <li>Support organizations for domestic violence or tech abuse</li>
                    <li>Online communities of people who've been through similar experiences</li>
                  </ul>
                  <p>
                    <strong className="text-foreground">It's okay to step back.</strong> Reducing your online presence, even temporarily, 
                    is not "letting them win"—it's protecting yourself. Your safety matters more than staying visible.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function ChecklistItem({ children, checked }: { children: React.ReactNode; checked: boolean }) {
  return (
    <div className="flex gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-calm">
      <div className={`mt-0.5 h-5 w-5 rounded border-2 flex items-center justify-center shrink-0 ${
        checked ? 'bg-safety border-safety' : 'border-muted-foreground/30'
      }`}>
        {checked && <CheckCircle2 className="h-3 w-3 text-safety-foreground" />}
      </div>
      <p className="text-sm text-foreground/90 leading-relaxed">{children}</p>
    </div>
  );
}
