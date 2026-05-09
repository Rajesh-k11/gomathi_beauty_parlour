import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';
import { TESTIMONIALS } from '@/lib/data';

export const metadata: Metadata = { title: 'Testimonials', description: 'Read what brides say about Gomathi Bridal Studio.' };

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader eyebrow="Bride Stories" title="Real Brides," titleHighlight="Real Stories" subtitle="The most meaningful reviews come from the brides whose lives we have been a small part of." />
      <section className="py-10 bg-gold">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-2">{[...Array(5)].map((_, i) => <Star key={i} size={24} className="text-emerald fill-emerald" />)}</div>
          <p className="font-display text-emerald-dark text-5xl font-semibold">4.9 / 5.0</p>
          <p className="text-emerald-dark/60 text-xs font-light mt-2 tracking-widest uppercase">Based on 500+ reviews across Google, Facebook & Instagram</p>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-24 bg-cream">
        <div className="max-w-8xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className="animate-on-scroll bg-cream-light border border-gold/25 p-7 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="flex gap-0.5 mb-5">{[...Array(t.rating)].map((_, j) => <Star key={j} size={13} className="text-gold fill-gold" />)}</div>
                <p className="text-charcoal-muted/80 text-sm font-light leading-relaxed mb-6">&ldquo;{t.review}&rdquo;</p>
                <div className="w-10 h-px bg-gold/40 mb-5"></div>
                <div className="flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-emerald flex items-center justify-center"><span className="text-gold font-display text-sm">{t.name[0]}</span></div>
                    <div>
                      <p className="text-charcoal font-medium text-sm">{t.name}</p>
                      <p className="text-charcoal-muted/50 text-xs font-light">{t.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gold text-xs font-light">{t.service}</p>
                    <p className="text-charcoal-muted/40 text-xs font-light mt-0.5">{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14 animate-on-scroll">
            <p className="text-charcoal-muted/60 font-light mb-4 text-sm">Were you a bride at Gomathi Studio? We&apos;d love to hear your story!</p>
            <a href="https://g.page/r/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-emerald text-emerald hover:bg-emerald hover:text-cream text-xs tracking-widest uppercase font-medium px-8 py-3 transition-colors">Leave a Google Review</a>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
