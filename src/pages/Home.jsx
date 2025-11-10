import React from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import SmarterConversations from "../components/SmarterConversations";
import HumanCallSection from "../components/HumanCallSection";
import BusinessCallsSection from "../components/BusinessCallsSection";
import Robotsection from "../components/Robotsection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Robotsection />
      <HowItWorks />
      <SmarterConversations />
      <HumanCallSection />
      <BusinessCallsSection />
    </div>
  );
}
