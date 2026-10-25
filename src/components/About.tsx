import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const VALUES = ["Reliability", "Comfort", "Honesty", "Service"];

export default function About() {
  return (
    <section id="about" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Driven by Service, Defined by Trust"
          />
          {/* Placeholder copy: replace with Wondie's real story. */}
          <Reveal delay={0.1} className="mt-6 space-y-4 text-base leading-relaxed text-ivory/70">
            <p>
              Wondie Car Rental was created to make renting a car feel simple,
              dependable and a little more special. We focus on well-kept
              vehicles, clear communication and a smooth handover.
            </p>
            <p>
              Whether you are travelling for business, family or leisure, our
              goal is the same: to give you the freedom to go where you need,
              with confidence.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {VALUES.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-gold/40 px-5 py-2 text-sm font-medium text-gold"
                >
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center rounded-3xl border border-gold/30 bg-gradient-to-br from-graphite to-ink p-10">
            <div
              aria-hidden="true"
              className="absolute inset-6 rounded-2xl border border-line"
            />
            <div
              aria-hidden="true"
              className="absolute h-56 w-56 rounded-full bg-gold/15 blur-3xl"
            />
            <div className="relative text-center">
              <p className="font-display text-6xl font-bold text-gold-gradient">
                W
              </p>
              <p className="mt-3 font-display text-2xl tracking-[0.25em]">
                WONDIE
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.4em] text-gold">
                Car Rental
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
