import React from "react";
import {
  Sparkles, Heart, Star, Crown, Leaf, Scissors,
} from "lucide-react";
import { Flower2 } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Heart, Star, Crown, Leaf, Scissors, Flower2,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  duration: string;
  startingPrice: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  duration,
  startingPrice,
  className,
}) => {
  const Icon = iconMap[icon] ?? Sparkles;

  return (
    <div
      className={cn(
        "gold-border-card group rounded-sm p-8 transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-sm group-hover:border-gold/70 transition-colors">
          <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <h3 className="font-cormorant text-xl text-emerald font-medium mb-3 tracking-wide">
        {title}
      </h3>
      <p className="body-text text-charcoal-muted text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gold/20">
        <span className="text-xs text-charcoal-muted font-jost tracking-wide">
          {duration}
        </span>
        <span className="text-sm font-medium text-gold font-jost">
          from {startingPrice}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
