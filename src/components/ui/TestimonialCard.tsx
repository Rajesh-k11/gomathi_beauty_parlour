import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating,
  image,
  className,
}) => {
  return (
    <div className={cn("gold-border-card rounded-sm p-8", className)}>
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
        ))}
      </div>

      {/* Quote mark */}
      <p className="font-cormorant text-5xl text-gold/30 leading-none mb-2">&ldquo;</p>

      {/* Content */}
      <p className="body-text text-charcoal-light text-sm leading-relaxed mb-6">
        {content}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-gold/20">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-cormorant text-base font-medium text-emerald">{name}</p>
          <p className="text-xs text-charcoal-muted font-jost tracking-wide">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
