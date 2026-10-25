
"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { CalendarDays, MapPin, Search } from "lucide-react";

function Field({
  id,
  label,
  icon,
  children,
}: {
  id: string;
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.18em] text-gold"
      >
        {label}
      </label>
      <div className="flex items-center gap-3 rounded-xl border border-line bg-coal px-4 py-3.5 transition focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
        <span className="text-gold/80" aria-hidden="true">
          {icon}
        </span>
        {children}
      </div>
    </div>
  );
}

const inputClass =
  "w-full bg-transparent text-sm text-ivory outline-none placeholder:text-ivory/40";

export default function SearchForm() {
  const [location, setLocation] = useState("");
  const [pickup, setPickup] = useState("");
  const [ret, setRet] = useState("");
  const [today, setToday] = useState("");
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(
    null
  );

  // Compute today's date in the browser.
  useEffect(() => {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    setToday(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (ret < pickup) {
      setMessage({
        ok: false,
        text: "The return date must be on or after the pickup date.",
      });
      return;
    }

    setMessage({
      ok: true,
      text: "Search preview only: live availability and booking arrive in a later stage of this project.",
    });
  }

  return (
    <motion.div
      id="search"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-24 rounded-2xl border border-line bg-graphite/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-7"
    >
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto] lg:items-end">
          <Field
            id="pickup-location"
            label="Pickup location"
            icon={<MapPin size={18} />}
          >
            <input
              id="pickup-location"
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, airport or address"
              autoComplete="off"
              className={inputClass}
            />
          </Field>

          <Field
            id="pickup-date"
            label="Pickup date"
            icon={<CalendarDays size={18} />}
          >
            <input
              id="pickup-date"
              type="date"
              required
              min={today}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className={inputClass}
            />
          </Field>

          <Field
            id="return-date"
            label="Return date"
            icon={<CalendarDays size={18} />}
          >
            <input
              id="return-date"
              type="date"
              required
              min={pickup || today}
              value={ret}
              onChange={(e) => setRet(e.target.value)}
              className={inputClass}
            />
          </Field>

          <button
            type="submit"
            className="group inline-flex h-[54px] items-center justify-center gap-2 rounded-xl bg-gold px-7 text-sm font-semibold text-black transition hover:bg-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:col-span-2 lg:col-span-1"
          >
            <Search
              size={18}
              className="transition-transform group-hover:scale-110"
            />
            Search Cars
          </button>
        </div>

        <p
          role="status"
          aria-live="polite"
          className={`mt-4 min-h-5 text-sm ${
            message?.ok ? "text-gold" : "text-red-400"
          }`}
        >
          {message?.text}
        </p>
      </form>
    </motion.div>
  );
}
