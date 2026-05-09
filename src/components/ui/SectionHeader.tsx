import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}) => {
  const textAlign = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = theme === "dark" ? "text-cream" : "text-emerald";
  const eyebrowColor = theme === "dark" ? "text-gold" : "text-gold-dark";
  const subtitleColor = theme === "dark" ? "text-cream/70" : "text-charcoal-muted";

  return (
    <div className={cn("flex flex-col gap-4", textAlign, className)}>
      {eyebrow && (
        <span className={cn("section-subtitle tracking-ultra-wide", eyebrowColor)}>
          {eyebrow}
        </span>
      )}

      <div className={cn("flex flex-col gap-3", align === "center" ? "items-center" : "items-start")}>
        <h2 className={cn("section-title", titleColor)}>{title}</h2>
        <div
          className={cn(
            "gold-divider",
            align === "left" && "gold-divider-left"
          )}
        />
      </div>

      {subtitle && (
        <p className={cn("body-text max-w-xl leading-relaxed", subtitleColor)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
