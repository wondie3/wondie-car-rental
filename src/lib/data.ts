import {
  BadgeDollarSign,
  CalendarCheck,
  CarFront,
  Clock,
  Headset,
  KeyRound,
  Search,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Vehicle = {
  id: string;
  name: string;
  category: string;
  seats: number;
  transmission: "Automatic" | "Manual";
  fuel: string;
  bags: number;
  /** Representative vehicle photo URL. */
  image: string;
  /** Example daily price in USD. NOT a real price. */
  examplePrice: number;
};

// Sample vehicles. Replace with your real fleet and prices later.
export const VEHICLES: Vehicle[] = [
  {
    id: "compact",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
    name: "City Compact",
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    bags: 2,
    examplePrice: 35,
  },
  {
    id: "sedan",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
    name: "Comfort Sedan",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    bags: 3,
    examplePrice: 55,
  },
  {
    id: "suv",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    name: "Premium SUV",
    category: "SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    bags: 4,
    examplePrice: 95,
  },
  {
    id: "executive",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
    name: "Executive Sedan",
    category: "Luxury",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    bags: 3,
    examplePrice: 130,
  },
  {
    id: "van",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85",
    name: "Family Van",
    category: "Van",
    seats: 8,
    transmission: "Automatic",
    fuel: "Diesel",
    bags: 5,
    examplePrice: 85,
  },
  {
    id: "coupe",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    name: "Signature Coupe",
    category: "Sport",
    seats: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    bags: 1,
    examplePrice: 180,
  },
];

export type Feature = { title: string; text: string; icon: LucideIcon };

// Placeholder marketing copy. Edit to match what Wondie really offers.
export const REASONS: Feature[] = [
  {
    title: "Premium Fleet",
    text: "A carefully selected range of well-maintained vehicles for every trip.",
    icon: Sparkles,
  },
  {
    title: "Transparent Pricing",
    text: "Clear rates with no confusing extras. You see what you pay.",
    icon: BadgeDollarSign,
  },
  {
    title: "Safe & Insured",
    text: "Vehicles prepared and checked before every rental.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Pickup",
    text: "Choose a pickup time and place that fits your schedule.",
    icon: Clock,
  },
  {
    title: "Friendly Support",
    text: "A real team ready to help before, during and after your rental.",
    icon: Headset,
  },
  {
    title: "Simple Handover",
    text: "Quick paperwork so you can get on the road sooner.",
    icon: KeyRound,
  },
];

export type Step = { title: string; text: string; icon: LucideIcon };

export const STEPS: Step[] = [
  {
    title: "Search",
    text: "Enter your pickup location and travel dates.",
    icon: Search,
  },
  {
    title: "Choose",
    text: "Pick the vehicle that fits your trip and budget.",
    icon: CarFront,
  },
  {
    title: "Confirm",
    text: "Review the details and confirm your reservation.",
    icon: CalendarCheck,
  },
  {
    title: "Drive",
    text: "Collect your car and enjoy the journey.",
    icon: KeyRound,
  },
];

// PLACEHOLDER contact details. Replace with your real information.
export const CONTACT = {
  phone: "+000 000 000 000",
  email: "hello@your-domain.example",
  address: "Your street address, City, Country",
  hours: "Mon–Sun, 8:00 – 20:00",
};
