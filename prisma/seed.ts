
import "dotenv/config";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const vehicles = [
  {
    slug: "city-compact",
    name: "City Compact",
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    bags: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
    examplePriceEtb: 2500,
    sortOrder: 1,
  },
  {
    slug: "comfort-sedan",
    name: "Comfort Sedan",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    bags: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
    examplePriceEtb: 4000,
    sortOrder: 2,
  },
  {
    slug: "premium-suv",
    name: "Premium SUV",
    category: "SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    bags: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    examplePriceEtb: 6500,
    sortOrder: 3,
  },
  {
    slug: "executive-sedan",
    name: "Executive Sedan",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    bags: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
    examplePriceEtb: 8500,
    sortOrder: 4,
  },
  {
    slug: "family-van",
    name: "Family Van",
    category: "Van",
    seats: 8,
    transmission: "Automatic",
    fuel: "Diesel",
    bags: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85",
    examplePriceEtb: 6000,
    sortOrder: 5,
  },
  {
    slug: "signature-coupe",
    name: "Signature Coupe",
    category: "Sport",
    seats: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    bags: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    examplePriceEtb: 12000,
    sortOrder: 6,
  },
];

async function main() {
  for (const vehicle of vehicles) {
    await prisma.vehicleListing.upsert({
      where: { slug: vehicle.slug },
      update: {
        ...vehicle,
        isExample: true,
        isPublished: true,
      },
      create: {
        ...vehicle,
        isExample: true,
        isPublished: true,
      },
    });
  }

  const count = await prisma.vehicleListing.count();

  console.log(`Catalogue seed completed. Total listings: ${count}`);
}

main()
  .catch((error) => {
    console.error("Catalogue seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
