
type LogoProps = { className?: string };

export default function Logo({ className = "" }: LogoProps) {
  return (
    <a
      href="#home"
      aria-label="Wondie Car Rental, home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <svg
        width="42"
        height="42"
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="text-gold transition-transform duration-300 group-hover:scale-105"
      >
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="12"
          fill="currentColor"
        />
        <path
          d="M10 15 L16.5 34 L24 20 L31.5 34 L38 15"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-[0.18em] text-ivory">
          WONDIE
        </span>
        <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.35em] text-gold">
          Car Rental
        </span>
      </span>
    </a>
  );
}
