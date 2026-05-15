import Hero from "@/components/hackathon/Hero";
import About from "@/components/hackathon/About";
import Rewards from "@/components/hackathon/Rewards";
import Rules from "@/components/hackathon/Rules";
import FAQ from "@/components/hackathon/FAQ";
import Sponsors from "@/components/hackathon/Sponsors";
import Schedule from "@/components/hackathon/Schedule";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Rewards />
      <Rules />
      <FAQ />
      <Sponsors />
      <Schedule />
    </div>
  );
}