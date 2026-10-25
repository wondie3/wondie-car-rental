"use client";

import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CONTACT } from "@/lib/data";

const inputClass =
  "w-full rounded-xl border border-line bg-coal px-4 py-3.5 text-sm text-ivory outline-none transition placeholder:text-ivory/40 focus:border-gold focus:ring-2 focus:ring-gold/30";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Stage 1: UI only. A real backend / email service comes later.
    setSent(true);
    e.currentTarget.reset();
  }

  const details = [
    { icon: Phone, label: "Phone", value: CONTACT.phone },
    { icon: Mail, label: "Email", value: CONTACT.email },
    { icon: MapPin, label: "Address", value: CONTACT.address },
    { icon: Clock, label: "Hours", value: CONTACT.hours },
  ];

  return (
    <section id="contact" className="bg-coal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          description="Questions about a rental? Send us a message and we will get back to you."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <Reveal className="space-y-4 lg:col-span-2">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-line bg-ink p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {label}
                  </p>
                  <p className="mt-1 text-sm text-ivory/80">{value}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-line bg-ink p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Name
                  </label>
                  <input id="c-name" name="name" required placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Email
                  </label>
                  <input id="c-email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="c-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Message
                </label>
                <textarea id="c-message" name="message" required rows={5} placeholder="How can we help?" className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gold-soft"
              >
                <Send size={16} aria-hidden="true" />
                Send Message
              </button>

              <p role="status" aria-live="polite" className="min-h-5 text-sm text-gold">
                {sent &&
                  "Form preview only: messages are not sent yet. Email delivery will be added in a later stage."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
