import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { WHATSAPP_BOOKING_URL } from "@/lib/utils";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-emerald flex items-center overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative gold lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gold/30" />
        <div className="w-1 h-1 rounded-full bg-gold/50" />
        <div className="w-px h-24 bg-gold/30" />
      </div>

      <div className="container-max w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-gold/60" />
              <span className="font-jost text-[10px] tracking-ultra-wide uppercase text-gold/80">
                Luxury Beauty Parlour
              </span>
            </div>

            {/* Headline */}
            <h1 className="display-title text-cream mb-6">
              Your Most{" "}
              <span className="italic text-gold font-light">Beautiful</span>
              <br />
              Day Deserves{" "}
              <span className="italic text-gold font-light">the Best</span>
            </h1>

            {/* Divider */}
            <div className="w-12 h-px bg-gold mb-8" />

            {/* Subtitle */}
            <p className="body-text text-cream/70 text-base max-w-md leading-relaxed mb-10">
              Expert bridal makeup, hair styling, and beauty care crafted for
              the bride who deserves nothing less than perfection on her
              wedding day.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href={WHATSAPP_BOOKING_URL}>
                Book Appointment
              </Button>
              <Button variant="ghost" size="lg" href="#services">
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-10 border-t border-white/10">
              {[
                { value: "500+", label: "Happy Brides" },
                { value: "12+", label: "Years Experience" },
                { value: "4.9★", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-cormorant text-3xl text-gold font-light">
                    {stat.value}
                  </p>
                  <p className="text-cream/50 text-xs font-jost tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Gold frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-gold/30" />

              {/* Image container */}
              <div className="relative overflow-hidden aspect-[3/4] max-h-[580px] w-full">
                <Image
                  src="/images/wmremove-transformed.png"
                  alt="Gomathi Bridal Studio — Bridal Makeup"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-emerald-dark border border-gold/40 px-6 py-4">
                <p className="font-cormorant text-gold text-sm italic">
                  Est. 2020
                </p>
                <p className="font-jost text-cream/60 text-[9px] tracking-widest uppercase mt-0.5">
                  Puthuchathiram, Namakkal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40 hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-jost text-[9px] tracking-ultra-wide uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
