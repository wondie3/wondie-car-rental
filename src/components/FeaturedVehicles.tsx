
import { connection } from "next/server";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import VehicleCard from "./VehicleCard";
import { prisma } from "@/lib/prisma";

export default async function FeaturedVehicles() {
  // Load vehicle listings at request time, not during the build.
  await connection();

  const vehicles = await prisma.vehicleListing.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      sortOrder: "asc",
    },
  });

  return (
    <section id="vehicles" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Featured Vehicles"
          description="A preview of the kinds of vehicles you can choose from."
        />

        <p className="mx-auto mt-6 w-fit rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-center text-xs font-medium text-gold">
          Sample vehicles and example prices only. Final rates will be confirmed
          at booking.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle, i) => (
            <Reveal
              key={vehicle.id}
              delay={(i % 3) * 0.1}
              className="h-full"
            >
              <VehicleCard vehicle={vehicle} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
