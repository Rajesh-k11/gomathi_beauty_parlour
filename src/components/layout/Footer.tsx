import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { STUDIO_CONFIG, WHATSAPP_BOOKING_URL } from "@/lib/utils";

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-dark text-cream">
      {/* Main footer */}
      <div className="container-max py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="font-cormorant text-gold text-2xl font-medium tracking-widest uppercase">
                Gomathi
              </p>
              <p className="font-jost text-cream/50 text-[9px] tracking-ultra-wide uppercase mt-0.5">
                Bridal Studio
              </p>
            </div>
            <div className="w-8 h-px bg-gold/40 mb-5" />
            <p className="text-cream/60 text-sm font-jost font-light leading-relaxed">
              Where every bride&apos;s beauty is celebrated with artistry, care, and grace.
            </p>
            {/* Social */}
              <a
                href={STUDIO_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold text-cream/60 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-jost text-[10px] tracking-ultra-wide uppercase text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Services", "Bridal Packages", "Gallery", "Testimonials", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-cream/60 hover:text-gold text-sm font-jost font-light transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-jost text-[10px] tracking-ultra-wide uppercase text-gold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Bridal Makeup",
                "Engagement Makeup",
                "Party Makeup",
                "Hair Styling",
                "Mehndi",
                "Facials",
                "Threading & Waxing",
              ].map((item) => (
                <li key={item}>
                  <span className="text-cream/60 text-sm font-jost font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-jost text-[10px] tracking-ultra-wide uppercase text-gold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-cream/60 text-sm font-jost font-light leading-relaxed">
                  {STUDIO_CONFIG.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={1.5} />
                <a
                  href={`tel:${STUDIO_CONFIG.phone}`}
                  className="text-cream/60 hover:text-gold text-sm font-jost font-light transition-colors"
                >
                  {STUDIO_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={1.5} />
                <a
                  href={`mailto:${STUDIO_CONFIG.email}`}
                  className="text-cream/60 hover:text-gold text-sm font-jost font-light transition-colors"
                >
                  {STUDIO_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-cream/60 text-sm font-jost font-light">
                  {STUDIO_CONFIG.workingHours}
                </span>
              </li>
            </ul>

            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-gold/40 text-gold text-[10px] font-jost tracking-widest uppercase px-5 py-3 hover:bg-gold hover:text-charcoal transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.79 23.502l4.583-1.47A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.783 9.783 0 01-5.021-1.383l-.36-.214-3.733 1.197 1.22-3.632-.234-.372A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818S17.424 21.818 12 21.818z" />
              </svg>
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-cream/40 text-xs font-jost">
            © {new Date().getFullYear()} {STUDIO_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs font-jost">
            Crafted with elegance for brides.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
