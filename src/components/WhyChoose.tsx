import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { REASONS } from "@/lib/data";

export default function WhyChoose() {
  return (
    <section id="why" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Wondie"
          title="Why Choose Wondie"
          description="A rental experience built around comfort, clarity and trust."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ title, text, icon: Icon }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.1}>
              <div className="group h-full rounded-2xl border border-line bg-coal p-7 transition duration-300 hover:border-gold/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-black">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
