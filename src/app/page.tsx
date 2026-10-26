import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import ScrollCar from "@/components/ScrollCar";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense
  fallback={
    <section className="bg-ink py-20 text-center text-ivory">
      Loading featured vehicles...
    </section>
  }
>
  <FeaturedVehicles />
</Suspense>
        <ScrollCar />
        <WhyChoose />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
