"use client";

import { motion, useReducedMotion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { STEPS } from "@/lib/data";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="how" className="scroll-mt-24 bg-coal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Simple Process"
          title="How It Works"
          description="From search to the open road in four easy steps."
        />

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* The line draws across the steps as this section enters the viewport. */}
          <motion.div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-8 hidden h-px origin-left bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block"
            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: easeOut, delay: reduceMotion ? 0 : 0.15 }}
          />

          {STEPS.map(({ title, text, icon: Icon }, i) => (
            <motion.li
              key={title}
              className="relative text-center"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : i * 0.14,
                ease: easeOut,
              }}
            >
              <motion.div
                className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-ink text-gold shadow-[0_0_30px_rgba(245,183,0,0.2)]"
                initial={reduceMotion ? false : { scale: 0.72, rotate: -12 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 16,
                  delay: reduceMotion ? 0 : i * 0.14 + 0.08,
                }}
                whileHover={reduceMotion ? undefined : { y: -4, boxShadow: "0 0 34px rgba(245,183,0,0.32)" }}
              >
                <Icon size={26} aria-hidden="true" />
                <motion.span
                  className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-black"
                  initial={reduceMotion ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 14,
                    delay: reduceMotion ? 0 : i * 0.14 + 0.2,
                  }}
                >
                  {i + 1}
                </motion.span>
              </motion.div>

              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-ivory/65">
                {text}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
