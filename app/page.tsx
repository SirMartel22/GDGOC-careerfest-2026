import DPGenerator from "@/components/DPGenerator";
/*
import FAQ from "@/components/careerfest/FAQ";
import Hero from "@/components/careerfest/Hero";
import Recaps from "@/components/careerfest/Recaps";
import RegisterCTA from "@/components/careerfest/RegisterCTA";
import Sessions from "@/components/careerfest/Sessions";
import Speakers from "@/components/careerfest/Speakers";
import WhatToExpect from "@/components/careerfest/WhatToExpect";
*/

export const metadata = {
  title: "Get DP | CareerFest 2026",
  description: "Generate your unique BuildWithAI Ilorin 2025 Display Picture",
};

export default function Home() {
  return <DPGenerator />;
  /*
  return (
    <main className="bg-[#1E1E1E] min-h-screen text-[#F5F5F5] font-outfit overflow-x-hidden">
      <Hero />
      <Recaps />
      <Sessions />
      <WhatToExpect />
      <RegisterCTA />
      <FAQ />
    </main>
  );
  */
}
