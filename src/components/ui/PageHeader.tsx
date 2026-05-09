interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  dark?: boolean;
}
export function PageHeader({ eyebrow, title, titleHighlight, subtitle, dark = true }: PageHeaderProps) {
  return (
    <section className={`relative py-20 px-6 ${dark ? 'bg-emerald' : 'bg-cream'}`}>
      <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-gold/20 pointer-events-none"></div>
      <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-gold/20 pointer-events-none"></div>
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && (
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className={`w-8 h-px ${dark ? 'bg-gold/60' : 'bg-gold'}`}></div>
            <p className={`text-xs tracking-widest uppercase font-light ${dark ? 'text-gold/80' : 'text-gold'}`}>{eyebrow}</p>
            <div className={`w-8 h-px ${dark ? 'bg-gold/60' : 'bg-gold'}`}></div>
          </div>
        )}
        <h1 className={`font-display text-4xl lg:text-6xl font-light leading-tight ${dark ? 'text-cream' : 'text-charcoal'}`}>
          {title}{' '}
          {titleHighlight && <span className={`italic font-medium ${dark ? 'text-gold' : 'text-emerald'}`}>{titleHighlight}</span>}
        </h1>
        {subtitle && <p className={`mt-4 font-light text-base leading-relaxed max-w-lg mx-auto ${dark ? 'text-cream/50' : 'text-charcoal-muted'}`}>{subtitle}</p>}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className={`w-12 h-px ${dark ? 'bg-gold/30' : 'bg-gold/50'}`}></div>
          <div className={`text-sm ${dark ? 'text-gold/30' : 'text-gold/50'}`}>✦</div>
          <div className={`w-12 h-px ${dark ? 'bg-gold/30' : 'bg-gold/50'}`}></div>
        </div>
      </div>
    </section>
  );
}
