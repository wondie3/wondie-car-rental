"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import CarVisual from "./CarVisual";

export default function ScrollCar() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // left goes 0% -> 100% of the container; x goes -100% -> 0% of the car's own width.
  // Result: fully off-screen left at the start, fully off-screen right at the end.
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const wheelRotation = useTransform(scrollYProgress, [0, 1], [0, 1440]);

  return (
    <section
      ref={ref}
      aria-label="Decorative road animation"
      className="relative overflow-hidden border-y border-line bg-coal py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-gold/5 blur-3xl"
      />

      <p className="relative mb-6 text-center font-display text-xl text-ivory/70 sm:text-2xl">
        Wherever the road leads, <span className="text-gold">Wondie</span> goes
        with you.
      </p>

      <div className="relative h-40 sm:h-52 lg:h-64">
        <motion.div
          style={{ left, x }}
          className="absolute bottom-3 w-56 sm:w-80 lg:w-[26rem]"
        >
          <CarVisual wheelRotation={wheelRotation} />
        </motion.div>

        {/* road */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-3 border-t border-line bg-ink"
        >
          <div
            className="mx-auto mt-1 h-px w-full opacity-60"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #f5b700 0 24px, transparent 24px 48px)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
