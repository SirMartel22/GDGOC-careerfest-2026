// app/careerfest/page.tsx

import FAQ from "@/components/careerfest/FAQ";
import Hero from "@/components/careerfest/Hero";
import Recaps from "@/components/careerfest/Recaps";
import RegisterCTA from "@/components/careerfest/RegisterCTA";
import Sessions from "@/components/careerfest/Sessions";
import Speakers from "@/components/careerfest/Speakers";
import WhatToExpect from "@/components/careerfest/WhatToExpect";

export const metadata = {
  title: "Main CareerFest Day 2026 | GDG-OC Unilorin",
  description: "A practical employability and career-growth experience featuring CV reviews, live mock interviews, portfolio building, and visibility sessions.",
};

export default function CareerFestPage() {
  return (
    <main className="bg-[#1E1E1E] min-h-screen text-[#F5F5F5] font-outfit overflow-x-hidden">
      <Hero />
      <Recaps />
      <Sessions />
      <Speakers />
      <WhatToExpect />
      <RegisterCTA />
      <FAQ />
    </main>
  );
}