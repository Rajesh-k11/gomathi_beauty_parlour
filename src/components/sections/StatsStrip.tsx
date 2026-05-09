import { STATS } from '@/lib/data';
export function StatsStrip() {
  return (
    <section className="bg-gold py-10">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-emerald/20">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center py-4 px-6 text-center">
              <span className="font-display text-emerald-dark text-3xl lg:text-4xl font-semibold leading-none">{stat.value}</span>
              <span className="text-emerald-dark/60 text-xs tracking-widest uppercase font-light mt-2 font-sans">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
