import React, { useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { Featured } from "@/components/sections/Featured";
import { Catalog } from "@/components/sections/Catalog";
import { Community } from "@/components/sections/Community";
import { CTA } from "@/components/sections/CTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { clientLogger } from "@/lib/logger";

export default function Home() {
  useEffect(() => {
    clientLogger.info("page_view", "User visited BestUGCs home page", {
      referrer: document.referrer || "direct",
      userAgent: navigator.userAgent.slice(0, 100),
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Featured />
        <Catalog />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
