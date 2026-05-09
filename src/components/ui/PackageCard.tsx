import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_BOOKING_URL } from "@/lib/utils";

interface PackageCardProps {
  name: string;
  subtitle: string;
  price: string;
  popular: boolean;
  includes: string[];
  note: string;
  tier: "silver" | "gold" | "platinum";
}

// Per-tier design tokens
const TIER_CONFIG = {
  silver: {
    badge: "bg-[#C0C0C0]/15 text-[#888] border border-[#C0C0C0]/40",
    badgeLabel: "Silver",
    accentColor: "#9E9E9E",
    priceColor: "text-emerald",
    checkColor: "text-[#9E9E9E]",
    topBorder: "from-transparent via-[#C0C0C0]/50 to-transparent",
    hoverShadow: "hover:shadow-[0_8px_40px_rgba(160,160,160,0.12)]",
  },
  gold: {
    badge: "bg-gold/15 text-gold border border-gold/40",
    badgeLabel: "Most Popular",
    accentColor: "#D4AF37",
    priceColor: "text-gold",
    checkColor: "text-gold",
    topBorder: "from-transparent via-gold to-transparent",
    hoverShadow: "hover:shadow-[0_8px_40px_rgba(212,175,55,0.22)]",
  },
  platinum: {
    badge: "bg-emerald/10 text-emerald border border-emerald/30",
    badgeLabel: "Platinum",
    accentColor: "#043927",
    priceColor: "text-emerald",
    checkColor: "text-emerald",
    topBorder: "from-transparent via-emerald/60 to-transparent",
    hoverShadow: "hover:shadow-[0_8px_40px_rgba(4,57,39,0.12)]",
  },
};

const PackageCard: React.FC<PackageCardProps> = ({
  name,
  subtitle,
  price,
  popular,
  includes,
  note,
  tier,
}) => {
  const config = TIER_CONFIG[tier];

  return (
    <div
      className={cn(
        "relative flex flex-col bg-white border border-[#e8e4d9]",
        "transition-all duration-400 group",
        config.hoverShadow,
        "hover:-translate-y-1",
        popular && "ring-1 ring-gold/30 shadow-[0_12px_60px_rgba(212,175,55,0.14)]"
      )}
    >
      {/* ── Gradient top accent bar ── */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r",
          config.topBorder
        )}
      />

      {/* ── Popular ribbon ── */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="flex items-center gap-1.5 bg-gold text-charcoal font-jost text-[9px] tracking-[0.2em] uppercase px-5 py-1.5 shadow-md">
            <Sparkles className="w-2.5 h-2.5" />
            Most Popular
          </span>
        </div>
      )}

      {/* ── Card body ── */}
      <div className="p-8 flex flex-col flex-1 gap-6 pt-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-jost text-[10px] tracking-[0.22em] uppercase text-charcoal-muted mb-1">
              {subtitle}
            </p>
            <h3 className="font-cormorant text-4xl font-light text-charcoal tracking-wide leading-none">
              {name}
            </h3>
          </div>
          {/* Tier badge */}
          <span
            className={cn(
              "flex-shrink-0 font-jost text-[9px] tracking-widest uppercase px-3 py-1 mt-1",
              config.badge
            )}
          >
            {config.badgeLabel}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2 pb-5 border-b border-[#e8e4d9]">
          <span
            className={cn(
              "font-cormorant text-5xl md:text-6xl font-light leading-none",
              config.priceColor
            )}
          >
            {price}
          </span>
          <span className="font-jost text-xs text-charcoal-muted pb-2">/ full package</span>
        </div>

        {/* Features list */}
        <ul className="flex flex-col gap-3 flex-1">
          {includes.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className={cn(
                  "flex-shrink-0 w-4 h-4 mt-0.5 rounded-full flex items-center justify-center",
                  popular
                    ? "bg-gold/15"
                    : tier === "platinum"
                    ? "bg-emerald/10"
                    : "bg-[#C0C0C0]/20"
                )}
              >
                <Check
                  className={cn("w-2.5 h-2.5", config.checkColor)}
                  strokeWidth={2.5}
                />
              </span>
              <span className="font-jost text-sm text-charcoal-light font-light leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Note */}
        <p className="font-jost text-xs text-charcoal-muted italic leading-relaxed border-l-2 border-gold/30 pl-3">
          {note}
        </p>

        {/* CTA */}
        <a
          href={WHATSAPP_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group/btn flex items-center justify-center gap-2 w-full py-3.5 font-jost text-[11px] tracking-[0.18em] uppercase transition-all duration-300",
            popular
              ? "bg-gold text-charcoal hover:bg-[#C5283D] hover:text-cream"
              : tier === "platinum"
              ? "border border-emerald text-emerald hover:bg-emerald hover:text-cream"
              : "border border-gold/60 text-gold hover:bg-gold hover:text-charcoal"
          )}
        >
          {popular ? "Book This Package" : "Enquire Now"}
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default PackageCard;
