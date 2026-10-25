import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div
        className={`mt-5 h-0.5 w-16 bg-gold ${align === "center" ? "mx-auto" : ""}`}
      />
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ivory/65">
          {description}
        </p>
      )}
    </Reveal>
  );
}
