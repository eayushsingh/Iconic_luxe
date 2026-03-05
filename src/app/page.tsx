"use client";

import { useState } from "react";
import Curtain from "@/components/Curtain";
import ScrollProgress from "@/components/ScrollProgress";
import LuxuryCursor from "@/components/LuxuryCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import CollectionGrid from "@/components/CollectionGrid";
import InsideIconic from "@/components/InsideIconic";
import BrandStatement from "@/components/BrandStatement";
import WhyIconicLuxe from "@/components/WhyIconicLuxe";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  const [curtainDone, setCurtainDone] = useState(false);

  return (
    <>
      <Curtain onComplete={() => setCurtainDone(true)} />
      <ScrollProgress />
      <LuxuryCursor />
      <Navbar curtainDone={curtainDone} />
      <main>
        <HeroSection curtainDone={curtainDone} />
        <MarqueeTicker />
        <CollectionGrid />
        <InsideIconic />
        <BrandStatement />
        <WhyIconicLuxe />
        <ContactSection />
        <ReviewsSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
