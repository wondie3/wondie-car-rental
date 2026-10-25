
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import CarVisual from "./CarVisual";
import SearchForm from "./SearchForm";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
};

const line: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  
const carX = useTransform(scrollYProgress, [0, 0.7, 1], [0, 100, 160]);
const wheelRotation = useTransform(
  scrollYProgress,
  [0, 0.7, 1],
  [0, 360, 540]
);
const copyY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-ink pb-16 pt-28 lg:pt-36"
    >
      {/* Cinematic background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#f5b700 1px, transparent 1px), linear-gradient(90deg, #f5b700 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at 60% 30%, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 60% 30%, black 20%, transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div style={{ y: copyY }} className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Premium Car Rental
            </motion.span>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <motion.span variants={line} className="block">
                Your Journey.
              </motion.span>
              <motion.span variants={line} className="block">
                Your Freedom.
              </motion.span>
              <motion.span variants={line} className="text-gold-gradient block">
                Your Wondie.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
            >
              Step into a refined car rental experience. Choose your vehicle,
              set your dates, and drive away in comfort and style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#vehicles"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-gold-soft"
              >
                Explore Vehicles
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#how"
                className="rounded-full border border-ivory/25 px-7 py-3.5 text-sm font-semibold text-ivory transition hover:border-gold hover:text-gold"
              >
                How It Works
              </a>
            </motion.div>
          </motion.div>

          <motion.div style={{ x: carX }} className="lg:col-span-6">
            <CarVisual wheelRotation={wheelRotation} />
          </motion.div>
        </div>

        <div className="mt-12 lg:mt-16">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}
