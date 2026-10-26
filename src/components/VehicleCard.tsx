
import { Cog, Fuel, Luggage, Users } from "lucide-react";

type VehicleCardData = {
  id: string;
  name: string;
  category: string;
  seats: number;
  transmission: string;
  fuel: string;
  bags: number;
  imageUrl: string;
  examplePriceEtb: number;
};

export default function VehicleCard({
  vehicle,
}: {
  vehicle: VehicleCardData;
}) {
  const specs = [
    { icon: Users, label: `${vehicle.seats} seats` },
    { icon: Cog, label: vehicle.transmission },
    { icon: Fuel, label: vehicle.fuel },
    { icon: Luggage, label: `${vehicle.bags} bags` },
  ];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-coal transition duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_20px_50px_rgba(245,183,0,0.12)]">
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-graphite via-coal to-ink sm:h-56">
        <div
          role="img"
          aria-label={`${vehicle.name} representative photo`}
          className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url("${vehicle.imageUrl}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />
        <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-ink/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
          {vehicle.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">{vehicle.name}</h3>

        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-ivory/70">
          {specs.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon
                size={16}
                className="shrink-0 text-gold"
                aria-hidden="true"
              />
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold/80">
              Example price
            </p>
            <p className="mt-1">
              <span className="font-display text-2xl font-bold text-ivory sm:text-3xl">
                ETB {vehicle.examplePriceEtb.toLocaleString("en-US")}
              </span>
              <span className="text-sm text-ivory/50"> / day</span>
            </p>
          </div>
          <a
            href="#search"
            className="rounded-full border border-gold px-4 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black"
          >
            Check availability
          </a>
        </div>
      </div>
    </article>
  );
}
