import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-48 h-auto opacity-40 -rotate-12 pointer-events-none">
        <Image src="/Nano-1.png" alt="Decorative Shape" width={200} height={100} />
      </div>
      <div className="absolute top-40 right-10 w-48 h-auto opacity-40 rotate-12 pointer-events-none">
        <Image src="/Nano-2.png" alt="Decorative Shape" width={200} height={100} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Top Badges Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-xl">🚀</span>
            <span className="font-bold text-sm md:text-base text-[#1E1E1E]">Innovation Challenge · May 20 – 25, 2026</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-12">
          {/* Main Title Badge */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-4 bg-white border-4 border-black p-8 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-4xl md:text-7xl font-anton uppercase text-[#1E1E1E]">Pre Career Fest</span>
              <div className="bg-[#4285F4] p-3 rounded-2xl text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-2xl md:text-4xl">🚀</span>
              </div>
              <span className="text-4xl md:text-7xl font-anton uppercase text-[#1E1E1E]">Challenge</span>
              <div className="absolute -top-6 -right-6 bg-[#FAAB00] px-8 py-3 rounded-full text-white font-anton text-2xl md:text-3xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12">
                2026
              </div>
            </div>
          </div>

          {/* GDG Banner */}
          <div className="flex items-center gap-3 bg-white px-8 py-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/fav-icon.png" alt="GDG Logo" width={32} height={32} />
            <span className="font-bold text-lg md:text-2xl tracking-tight text-[#1E1E1E] uppercase">GDG on Campus University of Ilorin</span>
            <div className="w-8 h-8 flex items-center justify-center bg-[#34A853] rounded-full border-2 border-black text-white ml-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-sm">➡️</span>
            </div>
          </div>

          {/* Main Message */}
          <div className="max-w-5xl space-y-8">
            <h1 className="text-6xl md:text-9xl font-anton text-[#4285F4] leading-[0.9] uppercase tracking-tighter">
              Build Something <br /> That Matters.
            </h1>
            <div className="space-y-4">
              <p className="text-xl md:text-3xl text-[#1E1E1E] font-bold max-w-3xl mx-auto leading-tight">
                Six days. Real problems. Google tools. Your idea could be the one that changes everything — and lands you your next opportunity.
              </p>
              <p className="text-lg md:text-xl text-gray-500 font-medium uppercase tracking-wide">
                Open to every student. Every field. No experience required.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <Link
              href="/submit"
              className="group relative inline-flex items-center justify-center px-12 py-5 font-anton text-2xl text-white bg-[#EA4336] rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-wide"
            >
              Submit Project →
            </Link>
            <Link
              href="#about"
              className="group relative inline-flex items-center justify-center px-12 py-5 font-anton text-2xl text-[#1E1E1E] bg-white rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-wide"
            >
              Learn More ↓
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
