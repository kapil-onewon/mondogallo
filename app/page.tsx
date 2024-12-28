"use client";

import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { AboutSection } from "@/components/home/about-section";
import PoultryRevolutions from "@/components/home/poultry-revolutions";
import VerifyUser from "@/components/home/verify-user";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <PoultryRevolutions />
      <AboutSection />
      <VerifyUser />
    </main>
  );
}