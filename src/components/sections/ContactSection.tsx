"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { STUDIO_CONFIG, WHATSAPP_BOOKING_URL } from "@/lib/utils";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Build WhatsApp message from form data
    const msg = encodeURIComponent(
      `Hi, I'd like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Date: ${form.date}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${STUDIO_CONFIG.whatsapp}?text=${msg}`, "_blank");
    setStatus("sent");
    setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" });
  };

  const inputClass =
    "w-full bg-transparent border border-gold/25 text-charcoal font-jost text-sm px-4 py-3.5 focus:outline-none focus:border-gold/70 placeholder:text-charcoal-muted/60 transition-colors";

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-max">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Book Your Appointment"
            subtitle="Ready to begin your bridal journey? Reach out to us and let's create something beautiful together."
            align="center"
            theme="light"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-cormorant text-2xl text-emerald font-medium mb-6">
                Studio Information
              </h3>
              <div className="w-8 h-px bg-gold mb-8" />
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: STUDIO_CONFIG.address },
                { icon: Phone, label: "Phone", value: STUDIO_CONFIG.phone, href: `tel:${STUDIO_CONFIG.phone}` },
                { icon: Mail, label: "Email", value: STUDIO_CONFIG.email, href: `mailto:${STUDIO_CONFIG.email}` },
                { icon: Clock, label: "Working Hours", value: STUDIO_CONFIG.workingHours },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-gold/40 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-jost tracking-widest uppercase text-charcoal-muted mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-charcoal-light text-sm font-jost hover:text-gold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-charcoal-light text-sm font-jost">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp quick button */}
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-emerald text-cream px-6 py-4 hover:bg-emerald-light transition-colors group"
            >
              <MessageCircle className="w-5 h-5 text-gold" strokeWidth={1.5} />
              <div>
                <p className="font-jost text-xs tracking-widest uppercase text-gold">Quick Book</p>
                <p className="font-cormorant text-lg text-cream">Chat on WhatsApp</p>
              </div>
            </a>

            {/* Map embed placeholder */}
            <div className="relative h-48 overflow-hidden border border-gold/20">
              <iframe
                src={`https://maps.google.com/maps?q=Coimbatore+Tamil+Nadu&output=embed&z=13`}
                className="w-full h-full"
                loading="lazy"
                title="Studio Location"
              />
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-3">
            <div className="gold-border-card rounded-sm p-8 lg:p-10">
              <h3 className="font-cormorant text-2xl text-emerald font-medium mb-2">
                Send an Enquiry
              </h3>
              <p className="text-charcoal-muted text-sm font-jost mb-8">
                Fill in the details below and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-jost tracking-widest uppercase text-charcoal-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-jost tracking-widest uppercase text-charcoal-muted mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-jost tracking-widest uppercase text-charcoal-muted mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-jost tracking-widest uppercase text-charcoal-muted mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      <option>Bridal Makeup</option>
                      <option>Engagement Makeup</option>
                      <option>Party Makeup</option>
                      <option>Hair Styling</option>
                      <option>Mehndi</option>
                      <option>Bridal Package</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-jost tracking-widest uppercase text-charcoal-muted mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-jost tracking-widest uppercase text-charcoal-muted mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your event, any special requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={status === "sending"}
                  >
                    {status === "sending"
                      ? "Opening WhatsApp..."
                      : status === "sent"
                      ? "Message Sent ✓"
                      : "Book via WhatsApp"}
                  </Button>
                  {status === "sent" && (
                    <p className="text-center text-xs text-charcoal-muted font-jost mt-3">
                      Thank you! We&apos;ll confirm your booking shortly.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
