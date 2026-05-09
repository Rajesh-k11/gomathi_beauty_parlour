import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-emerald relative overflow-hidden">
      {/* Decorative quote mark background */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 font-cormorant text-[20rem] text-gold/5 leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="container-max relative">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Bride Stories"
            title="Words From Our Brides"
            subtitle="The greatest reward is hearing a bride say she felt absolutely beautiful on her most important day."
            align="center"
            theme="dark"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-white/10">
          <div className="text-center">
            <p className="font-cormorant text-5xl text-gold font-light">4.9</p>
            <p className="text-cream/50 text-xs font-jost tracking-wide mt-1">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <p className="font-cormorant text-5xl text-gold font-light">200+</p>
            <p className="text-cream/50 text-xs font-jost tracking-wide mt-1">Reviews</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <p className="font-cormorant text-5xl text-gold font-light">500+</p>
            <p className="text-cream/50 text-xs font-jost tracking-wide mt-1">Brides Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
