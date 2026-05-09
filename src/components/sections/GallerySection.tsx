import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { GALLERY_IMAGES } from "@/lib/constants";
import { STUDIO_CONFIG } from "@/lib/utils";

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="section-padding bg-cream-dark">
      <div className="container-max">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Our Portfolio"
            title="Gallery of Transformations"
            subtitle="Each photograph tells the story of a bride who felt her most beautiful. Browse our work and imagine your own."
            align="center"
            theme="light"
          />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_IMAGES.slice(0, 6).map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden group ${
                index === 0 || index === 3 ? "row-span-2" : ""
              }`}
              style={{ aspectRatio: index === 0 || index === 3 ? "3/4" : "4/3" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-emerald/0 group-hover:bg-emerald/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <div className="w-8 h-px bg-gold mx-auto mb-3" />
                  <p className="font-cormorant text-cream text-sm tracking-widest uppercase">
                    {image.category}
                  </p>
                  <div className="w-8 h-px bg-gold mx-auto mt-3" />
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-charcoal-muted text-sm font-jost mb-5">
            See more on Instagram
          </p>
          <Button
            variant="secondary"
            href={STUDIO_CONFIG.instagram}
          >
            @gomathibridal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
