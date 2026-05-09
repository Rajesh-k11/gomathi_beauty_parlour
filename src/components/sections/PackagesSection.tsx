import React from "react";
import PackageCard from "@/components/ui/PackageCard";
import { PACKAGES } from "@/lib/constants";
import { WHATSAPP_BOOKING_URL } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const TIER_MAP: Record<string, "silver" | "gold" | "platinum"> = {
  silver: "silver",
  gold: "gold",
  platinum: "platinum",
};

const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="relative py-24 md:py-32 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#f9f7f2]" />
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            #D4AF37 0px,
            #D4AF37 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />
      {/* Top decorative edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      {/* Bottom decorative edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative container-max">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/50" />
            <span className="font-jost text-[10px] tracking-[0.3em] uppercase text-gold">
              Bridal Packages
            </span>
            <div className="w-12 h-px bg-gold/50" />
          </div>

          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-charcoal tracking-wide leading-tight mb-5">
            Choose Your Perfect{" "}
            <span className="italic text-emerald">Package</span>
          </h2>

          <p className="font-jost text-sm font-light text-charcoal-muted max-w-xl mx-auto leading-relaxed">
            Thoughtfully curated packages designed to give every bride a complete,
            stress-free experience — from first trial to the final touch on her big day.
          </p>
        </div>

        {/* ── Package Cards Grid ── */}
        {/* Gold card intentionally taller via more items — no extra height hack needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 border border-[#e8e4d9] md:border-none max-w-2xl mx-auto">
          {PACKAGES.map((pkg, index) => (
            <div
              key={pkg.id}
              className={
                // Popular (gold) card sits slightly elevated on desktop
                pkg.popular
                  ? "md:-mt-4 md:-mb-4 z-10 relative"
                  : "relative"
              }
            >
              <PackageCard
                name={pkg.name}
                subtitle={pkg.subtitle}
                price={pkg.price}
                popular={pkg.popular}
                includes={pkg.includes}
                note={pkg.note}
                tier={TIER_MAP[pkg.id] ?? "silver"}
              />
              {/* Vertical divider between cards (desktop only) */}
              {index < PACKAGES.length - 1 && (
                <div className="hidden md:block absolute top-8 bottom-8 right-0 w-px bg-[#e8e4d9] z-20" />
              )}
            </div>
          ))}
        </div>

        {/* ── Value ribbon ── */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[#e0dbd0] bg-white">
          {[
            { icon: "✦", label: "Premium Products Only", desc: "International brands, skin-safe formulas" },
            { icon: "✦", label: "Fully Customisable", desc: "Mix services across packages" },
            { icon: "✦", label: "Travel Available", desc: "We come to your venue — T&C apply" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 px-7 py-5 ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-[#e0dbd0]" : ""}`}
            >
              <span className="text-gold text-sm mt-0.5">{item.icon}</span>
              <div>
                <p className="font-jost text-[11px] tracking-widest uppercase text-charcoal font-medium mb-0.5">
                  {item.label}
                </p>
                <p className="font-jost text-xs text-charcoal-muted font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Disclaimer + Custom CTA ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-1">
          <p className="text-charcoal-muted text-xs font-jost font-light max-w-md leading-relaxed text-center sm:text-left">
            All packages can be customised to your specific requirements. Prices may vary
            based on travel and event location.
          </p>
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-emerald text-cream font-jost text-[11px] tracking-[0.18em] uppercase px-7 py-3.5 hover:bg-emerald-light transition-colors duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Get a Custom Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default PackagesSection;
