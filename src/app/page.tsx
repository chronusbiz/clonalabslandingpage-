import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import AtAGlance from "@/components/home/AtAGlance";
import Problems from "@/components/home/Problems";
import EngagementRows from "@/components/home/EngagementRows";
import HomeProducts from "@/components/home/HomeProducts";
import HomeIndustries from "@/components/home/HomeIndustries";
import HomeHowWeWork from "@/components/home/HomeHowWeWork";
import HomeTrust from "@/components/home/HomeTrust";
import HomeInsights from "@/components/home/HomeInsights";
import FinalCta from "@/components/home/FinalCta";
import { pageSeo } from "@/lib/constants";

const seo = pageSeo.home;

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HomeHero />
        <AtAGlance />
        <Problems />
        <EngagementRows />
        <HomeProducts />
        <HomeIndustries />
        <HomeHowWeWork />
        <HomeTrust />
        <HomeInsights />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
