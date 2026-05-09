import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Learn about Gomathi Bridal Studio — Coimbatore's premier bridal makeup studio since 2010.",
};

const team = [
  { name: 'Gomathi', role: 'Founder & Lead Bridal Artist', exp: '14+ years', specialty: 'Bridal Makeup & Hair', bio: "With over 14 years of expertise, Gomathi has transformed thousands of brides. Her eye for detail and understanding of each bride's unique beauty makes her work truly special." },
  { name: 'Preethi', role: 'Senior Makeup Artist', exp: '8 years', specialty: 'HD & Airbrush Makeup', bio: 'Preethi specializes in HD and airbrush techniques, creating flawless, camera-ready looks that look stunning in photographs and in person.' },
  { name: 'Kavitha', role: 'Mehndi Specialist', exp: '10 years', specialty: 'Bridal Mehndi', bio: 'A true mehndi artiste, Kavitha creates intricate, detailed designs that tell a story. From traditional to contemporary, her work is always breathtaking.' },
];

const values = [
  { icon: '✦', title: 'Excellence in Artistry', desc: 'We continuously train and upskill to master the latest techniques and trends in bridal beauty.' },
  { icon: '♡', title: 'Personalized Experience', desc: 'Every bride is unique. We listen deeply and create looks that reflect your personality and vision.' },
  { icon: '◈', title: 'Premium Products Only', desc: 'We use only the finest, skin-safe products from trusted luxury brands for all our services.' },
  { icon: '◇', title: 'Trust & Transparency', desc: 'Honest consultations, clear pricing, and respectful service — always, with every client.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Gomathi Studio" title="Our Story of" titleHighlight="Beauty & Grace" subtitle="14 years of making brides feel extraordinary — told with love and artistry." />

      <section className="py-20 px-6 lg:px-24 bg-cream">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold"></div>
              <p className="text-gold text-xs tracking-widest uppercase font-light">Our Beginning</p>
            </div>
            <h2 className="font-display text-4xl font-light text-charcoal mb-6">A Passion Born from <span className="italic font-medium text-emerald">Love for Beauty</span></h2>
            <div className="w-12 h-0.5 bg-gold mb-8"></div>
            <div className="space-y-4 text-charcoal-muted font-light text-base leading-relaxed">
              <p>Founded with a deep passion for bridal artistry, Gomathi Bridal Studio has been transforming brides into their most radiant selves for over 14 years. What started as a small beauty parlour has grown into Coimbatore&apos;s most trusted bridal studio.</p>
              <p>Led by Gomathi, our team of expert artists combines traditional beauty techniques with modern artistry to create looks that are both timeless and uniquely personal. We understand that beauty is deeply personal, and we take pride in listening to each bride&apos;s vision before bringing it to life.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {['Premium Products', 'Expert Artists', 'Personalized Service', 'Trusted Since 2010'].map((v) => (
                <div key={v} className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-gold flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 bg-gold rounded-full"></div></div>
                  <span className="text-sm font-light text-charcoal-muted">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block animate-on-scroll animate-delay-200">
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/15"></div>
              <img src="/images/WhatsApp Image 2026-05-09 at 2.17.35 PM (3).jpeg" alt="Gomathi Bridal Studio" className="w-full aspect-[4/5] object-cover object-top" />
              <div className="absolute -bottom-4 -right-4 bg-gold p-5 text-center">
                <p className="font-display text-emerald-dark text-3xl font-semibold">2010</p>
                <p className="text-emerald-dark/60 text-xs uppercase tracking-widest font-light mt-1">Established</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-24 bg-emerald">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-display text-4xl font-light text-cream">What We <span className="italic font-medium text-gold">Stand For</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="animate-on-scroll border border-gold/20 p-6 hover:border-gold/50 transition-colors" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="text-gold text-2xl mb-4">{v.icon}</div>
                <h3 className="font-display text-cream text-xl font-medium mb-3">{v.title}</h3>
                <p className="text-cream/50 text-sm font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-24 bg-cream-light">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold"></div>
              <p className="text-gold text-xs tracking-widest uppercase font-light">Our Experts</p>
              <div className="w-8 h-px bg-gold"></div>
            </div>
            <h2 className="font-display text-4xl font-light text-charcoal">Meet Our <span className="italic font-medium text-emerald">Artists</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <div key={i} className="animate-on-scroll bg-cream border border-gold/25 p-6 hover:border-gold/50 transition-colors text-center" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-20 h-20 bg-emerald border border-gold/30 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-display text-gold text-2xl">{m.name[0]}</span>
                </div>
                <h3 className="font-display text-charcoal text-xl font-medium">{m.name}</h3>
                <p className="text-gold text-xs uppercase tracking-widest font-light mt-1">{m.role}</p>
                <p className="text-charcoal-muted/60 text-xs font-light mt-1">{m.exp} · {m.specialty}</p>
                <div className="w-8 h-px bg-gold/40 mx-auto my-4"></div>
                <p className="text-charcoal-muted/70 text-sm font-light leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
