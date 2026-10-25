
import { ArrowRight, Fuel, Users, Settings2 } from "lucide-react";

const vehicles = [
  {
    name: "Mercedes-Benz C-Class",
    category: "LUXURY SEDAN",
    price: "4,500",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85",
    featured: true,
  },
  {
    name: "Porsche 911",
    category: "SPORTS CAR",
    price: "12,000",
    passengers: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
    featured: false,
  },
  {
    name: "BMW 5 Series",
    category: "EXECUTIVE",
    price: "6,500",
    passengers: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
    featured: false,
  },
];

export default function Vehicles() {
  return (
    <section
      id="vehicles"
      className="relative scroll-mt-24 overflow-hidden bg-[#090909] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#d6b46a]">
              Our Collection
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Find your next{" "}
              <span className="font-serif italic text-[#d6b46a]">
                drive.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/55">
              From refined executive sedans to unforgettable sports cars,
              discover a vehicle that fits your journey.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#d6b46a]/60 pb-2 text-sm text-[#e4c783] transition hover:border-[#e4c783] hover:text-white"
          >
            Need help choosing?
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition duration-300 hover:-translate-y-2 hover:border-[#d6b46a]/50 hover:shadow-[0_20px_60px_rgba(214,180,106,0.08)]"
            >
              <div className="relative h-60 overflow-hidden bg-[#1a1a1a] sm:h-64">
                <div
                  role="img"
                  aria-label={vehicle.name}
                  className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("${vehicle.image}")` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] backdrop-blur-md">
                  {vehicle.category}
                </span>

                {vehicle.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#d6b46a] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-black">
                    Featured
                  </span>
                )}

                <p className="absolute bottom-4 left-5 text-sm text-white/75">
                  Premium collection
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {vehicle.name}
                </h3>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3 border-b border-white/10 pb-5 text-xs text-white/55">
                  <span className="inline-flex items-center gap-2">
                    <Users size={15} className="text-[#d6b46a]" />
                    {vehicle.passengers} seats
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Settings2 size={15} className="text-[#d6b46a]" />
                    {vehicle.transmission}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Fuel size={15} className="text-[#d6b46a]" />
                    {vehicle.fuel}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 pt-5">
                  <div>
                    <p className="text-xs text-white/45">Starting from</p>
                    <p className="mt-1 text-xl font-semibold">
                      <span className="text-[#d6b46a]">
                        {Number(vehicle.price).toLocaleString("en-US")}
                      </span>
                      <span className="ml-1 text-xs font-normal text-white/50">
                        ETB / day
                      </span>
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#d6b46a] px-4 py-3 text-xs font-bold text-black transition hover:bg-[#e8ca87]"
                  >
                    Book now
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-xs leading-5 text-white/35">
          Illustrative vehicles and prices for the website prototype. Confirm
          actual availability, specifications, and rental rates before booking.
        </p>
      </div>
    </section>
  );
}
