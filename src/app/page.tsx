import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import Pricing from "@/components/Pricing";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        {/* Product pillars (#product) */}
        <Services />
        {/* Why Clonalabs (#about) */}
        <About />
        {/* Use cases / agency client verticals (#use-cases) */}
        <Industries />
        {/* Agency onboarding (#how-it-works) */}
        <Approach />
        {/* Pricing plans (#pricing) — replaces the former Insights section */}
        <Pricing />
        {/* Trust strip (#partners) */}
        <Partners />
      </main>
      <Footer />
    </>
  );
}
