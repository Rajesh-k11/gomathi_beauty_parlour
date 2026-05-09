import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { SERVICES } from '@/lib/data';

export const metadata: Metadata = { title: 'Services', description: 'All bridal and beauty services at Gomathi Studio.' };

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="What We Offer" title="Premium" titleHighlight="Beauty Services" subtitle="From bridal transformations to everyday grooming — expert services crafted with care." />
      <section className="py-20 px-6 lg:px-24 bg-cream">
        <div className="max-w-8xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <div key={s.id} className="animate-on-scroll bg-cream-light border border-gold/25 p-6 hover:border-gold hover:-translate-y-1 transition-all duration-300 group" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="text-4xl mb-4">{s.icon}</div>
                <p className="text-gold text-xs tracking-widest uppercase font-light mb-2">{s.category}</p>
                <h3 className="font-display text-charcoal text-xl font-medium mb-3 group-hover:text-emerald transition-colors">{s.title}</h3>
                <p className="text-charcoal-muted/70 text-sm font-light leading-relaxed mb-5">{s.description}</p>
                <div className="pt-4 border-t border-gold/20 flex items-center justify-between">
                  <div>
                    <p className="text-gold/70 text-xs font-light">Starting from</p>
                    <p className="font-display text-emerald text-xl font-medium">₹{s.startingPrice.toLocaleString('en-IN')}</p>
                  </div>
                  <p className="text-charcoal-muted/40 text-xs font-light">{s.duration}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-emerald/5 border border-emerald/20 text-center animate-on-scroll">
            <p className="text-charcoal-muted font-light text-sm"><span className="font-medium text-emerald">Note:</span> Prices are starting prices and may vary. Contact us for a personalized quote.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
