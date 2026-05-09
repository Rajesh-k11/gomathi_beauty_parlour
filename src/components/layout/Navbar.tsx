"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { STUDIO_CONFIG, WHATSAPP_BOOKING_URL } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll(); // run on mount to handle page refresh mid-scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-[#043927] shadow-[0_4px_24px_rgba(0,0,0,0.18)] py-3 border-b border-gold/10"
            : "bg-transparent py-5"
        )}
      >
        <nav className="container-max flex items-center justify-between gap-6">

          {/* ── Logo ── */}
          <Link href="/" className="flex-shrink-0 flex flex-col leading-none">
            <span className="font-cormorant text-gold text-xl font-medium tracking-widest uppercase leading-none">
              Gomathi
            </span>
            <span className="font-jost text-cream/60 text-[9px] tracking-ultra-wide uppercase mt-0.5">
              Beauty Parlour
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden lg:flex items-center gap-7 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative font-jost text-[11px] tracking-widest uppercase transition-colors duration-200",
                    "text-cream hover:text-gold",
                    "after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px after:bg-gold",
                    "after:transition-all after:duration-300 hover:after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex flex-shrink-0 items-center gap-5">
            <a
              href={`tel:${STUDIO_CONFIG.phone}`}
              className="flex items-center gap-1.5 text-cream/70 hover:text-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-jost text-xs tracking-wide">{STUDIO_CONFIG.phone}</span>
            </a>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-charcoal font-jost text-[10px] tracking-widest uppercase px-5 py-2.5 hover:bg-gold/80 transition-colors duration-200"
            >
              Book Now
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden text-cream p-1 flex-shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* ── Gold accent line at bottom of scrolled navbar ── */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        )}
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-[#043927] transition-transform duration-300 ease-in-out lg:hidden flex flex-col",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="pt-28 px-8 flex flex-col gap-7">
          <div className="w-12 h-px bg-gold/40 mb-2" />
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-cormorant text-3xl text-cream hover:text-gold transition-colors flex items-center gap-3"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="text-gold/40 font-jost text-xs">{String(i + 1).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
          <div className="w-12 h-px bg-gold/40 mt-2" />
          <a
            href={`tel:${STUDIO_CONFIG.phone}`}
            className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors mt-2"
          >
            <Phone className="w-4 h-4" />
            <span className="font-jost text-sm tracking-wide">{STUDIO_CONFIG.phone}</span>
          </a>
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-charcoal font-jost text-xs tracking-widest uppercase px-6 py-3.5 text-center mt-2 hover:bg-gold/80 transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
