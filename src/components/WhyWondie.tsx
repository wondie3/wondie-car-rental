
import {
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Confidence on Every Journey",
    description:
      "Enjoy a straightforward rental experience with clear information and a focus on your peace of mind.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "Quality You Can Feel",
    description:
      "Explore a premium vehicle collection designed to make everyday travel and special occasions feel different.",
  },
  {
    number: "03",
    icon: Headphones,
    title: "Here When You Need Us",
    description:
      "Get help with your questions and rental arrangements throughout the booking process.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "A Better Rental Experience",
    description:
      "From choosing your vehicle to planning your route, we aim to make each step simple and convenient.",
  },
];

export default function WhyWondie() {
  return (
    <section
      id="why-wondie"
      className="relative scroll-mt-24 overflow-hidden bg-[#0e0e0e] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#d6b46a]/[0.06] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#d6b46a]">
            The Wondie Difference
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            More than a car.
            <span className="mt-2 block font-serif italic text-[#d6b46a]">
              It&apos;s your journey.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
            The right car can change how a journey feels. We&apos;re building a
            rental experience centered on comfort, convenience, and confidence
            from the first click to the final destination.
          </p>

          <a
            href="#vehicles"
            className="group mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium text-[#e4c783] transition hover:text-white"
          >
            Explore our collection
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          <div className="mt-12 border-l border-[#d6b46a]/50 pl-5">
            <p className="font-serif text-2xl italic text-white/85">
              “Every journey deserves a better beginning.”
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/35">
              The Wondie philosophy
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.number}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:border-[#d6b46a]/40 hover:bg-white/[0.045] sm:p-7"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d6b46a]/25 bg-[#d6b46a]/[0.08] text-[#d6b46a] transition group-hover:bg-[#d6b46a] group-hover:text-black">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="font-mono text-xs text-white/25">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold leading-snug">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {benefit.description}
                </p>

                <div className="mt-6 h-px w-10 bg-[#d6b46a]/60 transition-all duration-300 group-hover:w-20" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
