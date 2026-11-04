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
      <main id="main-content" className="home-fullpage">
        {/* Dark */}
        <Hero />
        {/* Light */}
        <Services />
        {/* Dark */}
        <Partners />
        {/* Light */}
        <Pricing />
        {/* Dark */}
        <Approach />
        {/* Light */}
        <Industries />
        {/* Dark */}
        <About />
        <Footer />
      </main>
    </>
  );
}
