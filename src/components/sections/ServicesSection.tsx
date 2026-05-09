import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-emerald relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-max relative">
        <div className="mb-14">
          <SectionHeader
            eyebrow="What We Offer"
            title="Our Beauty Services"
            subtitle="From bridal transformations to everyday beauty care — every service is delivered with precision, artistry, and a deep respect for your individual beauty."
            align="center"
            theme="dark"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              duration={service.duration}
              startingPrice={service.startingPrice}
              className="bg-emerald-light/50"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
