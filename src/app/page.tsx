"use client";

import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatDemo from "@/components/ChatDemo";
import ValueProps from "@/components/ValueProps";
import SocialProof from "@/components/SocialProof";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    trackPageView();
    // Force enable scrolling in case any legacy classes remain
    document.body.style.overflow = "auto";
  }, []);

  return (
    <>
      <CustomCursor />
      {/* Section 1: Navigation */}
      <Navbar />

      <main>
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: Interactive Chat Demo */}
        <ChatDemo />

        {/* Section 4: Value Proposition Cards */}
        <ValueProps />

        {/* Section 5: Social Proof / Credibility */}
        <SocialProof />

        {/* Section 6: Waitlist Capture */}
        <WaitlistForm />
      </main>

      {/* Section 7: Footer */}
      <Footer />
    </>
  );
}
