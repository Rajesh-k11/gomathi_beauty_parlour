import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { WHATSAPP_BOOKING_URL } from "@/lib/utils";
import { Sparkles, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We use only internationally acclaimed, skin-safe makeup brands.",
  },
  {
    icon: Award,
    title: "Certified Artists",
    description: "Our team holds professional certifications in bridal artistry.",
  },
  {
    icon: Heart,
    title: "Bride-First Approach",
    description: "Every detail is tailored to your vision, skin tone, and style.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Primary image */}
            <div className="relative overflow-hidden aspect-[4/5]">
              <Image
                src="/images/WhatsApp Image 2026-05-09 at 2.17.35 PM (3).jpeg"
                alt="Gomathi Bridal Studio"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Secondary image — overlapping */}
            <div className="absolute -bottom-8 -right-6 w-48 h-56 hidden md:block overflow-hidden border-4 border-cream shadow-elegant-lg">
              <Image
                src="/images/WhatsApp Image 2026-05-09 at 2.17.35 PM (2).jpeg"
                alt="Bridal transformation"
                fill
                className="object-cover object-top"
                sizes="200px"
              />
            </div>

            {/* Gold decorative corner */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-gold/50" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-gold/50 hidden md:block" />
          </div>

          {/* Content side */}
          <div className="lg:pl-4">
            <SectionHeader
              eyebrow="Our Story"
              title="Beauty Through Artistry & Care"
              align="left"
              theme="light"
              className="mb-8"
            />

            <div className="space-y-5 mb-10">
              <p className="body-text text-charcoal-muted leading-relaxed">
                Gomathi Bridal Studio was founded over a decade ago with one simple belief:{" "}
                <em className="font-cormorant text-emerald text-lg not-italic">
                  every bride deserves to feel extraordinary.
                </em>
              </p>
              <p className="body-text text-charcoal-muted leading-relaxed">
                From intimate home weddings to grand celebration halls, we have
                had the honour of adorning more than 500 brides across Tamil Nadu.
                Our approach blends traditional bridal aesthetics with modern
                techniques — ensuring your look is timeless, not trendy.
              </p>
              <p className="body-text text-charcoal-muted leading-relaxed">
                Founded by Gomathi, a certified makeup artist with 12+ years of
                experience, our studio has grown into a trusted name in bridal
                beauty in Coimbatore.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-5 mb-10 pt-8 border-t border-gold/20">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feature.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-cormorant text-base font-medium text-emerald mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-charcoal-muted text-sm font-jost font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary" href={WHATSAPP_BOOKING_URL}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
