import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "bridal";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-jost tracking-widest uppercase text-xs transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gold text-charcoal hover:bg-gold-light active:bg-gold-dark shadow-gold hover:shadow-gold-lg",
      secondary:
        "border border-gold text-gold bg-transparent hover:bg-gold hover:text-charcoal",
      ghost:
        "border border-white/30 text-white bg-transparent hover:border-gold hover:text-gold",
      bridal:
        "bg-bridal text-white hover:bg-bridal-light",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-[10px]",
      md: "px-8 py-3.5",
      lg: "px-10 py-4 text-sm",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
