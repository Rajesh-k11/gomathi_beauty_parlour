import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Star } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { PACKAGES } from '@/lib/data';

export const metadata: Metadata = { title: 'Bridal Packages', description: 'Explore Silver, Gold and Platinum bridal packages.' };

export default function PackagesPage() {
  const faqs = [
    { q: 'What is included in a free consultation?', a: 'A 30-minute session to discuss your wedding date, look preferences, skin type, and specific requirements.' },
    { q: 'Can I customize a package?', a: 'Absolutely! All packages can be customized. Contact us to discuss a tailored package.' },
    { q: 'How far in advance should I book?', a: 'We recommend booking 3–6 months in advance, especially during peak season (Nov–Mar).' },
    { q: 'Do you provide services at the wedding venue?', a: 'Yes, we offer on-location bridal services for an additional travel charge.' },
    { q: 'What is your cancellation policy?', a: 'A 50% advance confirms bookings. Cancellations 30+ days before receive a full refund; within 30 days forfeit the advance.' },
    { q: 'Do you offer group discounts?', a: 'Yes! We offer special pricing for bridal party bookings. Contact us for a group quote.' },
  ];
  return (
    <>
      <PageHeader eyebrow="Bridal Collections" title="Our Bridal" titleHighlight="Packages" subtitle="Curated packages for a seamless and luxurious bridal experience." />
      <section className="py-20 px-6 lg:px-24 bg-cream">
        <div className="max-w-8xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {PACKAGES.map((pkg, i) => (
              <div key={pkg.id} className={`animate-on-scroll relative flex flex-col ${i > 0 || !pkg.isFeatured ? '' : ''}`} style={{ animationDelay: `${i * 100}ms` }}>
                {pkg.isFeatured && <div className="absolute -inset-px bg-gradient-to-b from-gold via-gold/50 to-gold/30 -z-10"></div>}
                <div className={`flex flex-col h-full border ${pkg.isFeatured ? 'bg-emerald border-transparent' : 'bg-cream-light border-gold/25'}`}>
                  <div className={`p-6 border-b ${pkg.isFeatured ? 'border-gold/20' : 'border-gold/15'}`}>
                    {pkg.badge && (
                      <div className={`inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium px-3 py-1 mb-4 ${pkg.isFeatured ? 'bg-gold text-emerald-dark' : 'bg-bridal/10 text-bridal border border-bridal/20'}`}>
                        {pkg.isFeatured && <Star size={10} className="fill-current" />}{pkg.badge}
                      </div>
                    )}
                    <p className={`text-xs tracking-widest uppercase font-light mb-1 ${pkg.isFeatured ? 'text-gold/60' : 'text-charcoal-muted/60'}`}>{pkg.name}</p>
                    <h3 className={`font-display text-2xl font-medium mb-1 ${pkg.isFeatured ? 'text-gold' : 'text-charcoal'}`}>{pkg.subtitle}</h3>
                    <p className={`text-xs font-light ${pkg.isFeatured ? 'text-cream/50' : 'text-charcoal-muted/60'}`}>{pkg.note}</p>
                    <div className="mt-4">
                      <span className={`font-display text-4xl font-semibold ${pkg.isFeatured ? 'text-cream' : 'text-emerald'}`}>₹{pkg.price.toLocaleString('en-IN')}</span>
                      <span className={`text-sm font-light ml-1 ${pkg.isFeatured ? 'text-cream/40' : 'text-charcoal-muted/60'}`}>/package</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <ul className="space-y-3">
                      {pkg.services.map((svc, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className={`w-4 h-4 border flex items-center justify-center mt-0.5 shrink-0 ${pkg.isFeatured ? 'border-gold bg-gold/10' : 'border-emerald/40 bg-emerald/5'}`}>
                            <Check size={10} className={pkg.isFeatured ? 'text-gold' : 'text-emerald'} />
                          </div>
                          <span className={`text-sm font-light ${pkg.isFeatured ? 'text-cream/70' : 'text-charcoal-muted'}`}>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href="/contact" className={`block w-full text-center text-xs tracking-widest uppercase font-medium py-3.5 transition-all duration-200 ${pkg.isFeatured ? 'bg-gold text-emerald-dark hover:bg-gold-light' : 'border border-emerald text-emerald hover:bg-emerald hover:text-cream'}`}>
                      Book {pkg.name} Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal-muted/50 text-xs font-light mt-8 animate-on-scroll">* All packages include complimentary consultation. Custom packages available on request.</p>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-24 bg-cream-light">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-display text-3xl font-light text-charcoal">Frequently Asked <span className="italic font-medium text-emerald">Questions</span></h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="animate-on-scroll border border-gold/20 p-6 hover:border-gold/40 transition-colors" style={{ animationDelay: `${i * 60}ms` }}>
                <h3 className="font-display text-charcoal text-lg font-medium mb-2">{f.q}</h3>
                <p className="text-charcoal-muted/70 font-light text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
