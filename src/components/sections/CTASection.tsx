import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { WHATSAPP_BOOKING_URL } from "@/lib/utils";

const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/WhatsApp Image 2026-05-09 at 2.17.21 PM (1).jpeg"
          alt="Bridal beauty"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald/85" />
      </div>

      {/* Decorative border */}
      <div className="absolute inset-6 border border-gold/20 pointer-events-none hidden md:block" />

      <div className="relative container-max text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gold/50" />
          <span className="font-jost text-[10px] tracking-ultra-wide uppercase text-gold">
            Your Special Day Awaits
          </span>
          <div className="w-12 h-px bg-gold/50" />
        </div>

        <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight mb-6 max-w-2xl mx-auto">
          Begin Your{" "}
          <span className="italic text-gold">Bridal Journey</span>{" "}
          With Us
        </h2>

        <div className="w-10 h-px bg-gold mx-auto mb-6" />

        <p className="body-text text-cream/70 max-w-md mx-auto mb-10">
          Every booking includes a complimentary consultation to understand
          your vision, style, and the look you&apos;ve always dreamed of.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href={WHATSAPP_BOOKING_URL}>
            Book Appointment
          </Button>
          <Button variant="ghost" size="lg" href={`tel:+918220125481`}>
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
