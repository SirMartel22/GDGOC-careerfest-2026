import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#FAAB00] border-y-4 border-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Alignment */}
        <div className="flex justify-between items-center mb-12">
           <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-2xl border-2 border-black w-fit">
              <Image src="/fav-icon.png" alt="GDG Logo" width={24} height={24} className="h-auto w-auto" />
              <span className="font-bold text-sm tracking-widest uppercase text-[#1E1E1E]">// about the challenge</span>
           </div>
           <Image 
              src="/solid-shape.png"
              alt="Design Shape"
              width={400}
              height={30}
              className="h-auto opacity-80 hidden md:block w-auto"
           />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <h2 className="text-6xl md:text-8xl font-anton text-[#f5f5f5] uppercase leading-[0.9] tracking-tighter">
                This Isn't <br /> Just a Hackathon.
             </h2>
             <div className="space-y-6">
                <p className="text-[#1E1E1E] text-xl md:text-2xl font-bold leading-tight">
                    The University Talent & Innovation Challenge is a 6-day build sprint where students turn ideas into working solutions using Google AI and Cloud tools to tackle real-world SDG problems.
                </p>
                <p className="text-[#1E1E1E] opacity-80 text-lg md:text-xl font-medium">
                    Whether you write code, design interfaces, create content, or just have a strong idea there's a place for you here. Top submissions get assessed by technical recruiters. The best builders walk away with more than a badge.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
             {[
               { label: "6 Days", sub: "Build Window" },
               { label: "Open to All", sub: "Every Course, Every Level" },
               { label: "Real Opportunities", sub: "Internships, Mentorship & More" }
             ].map((stat, i) => (
               <div key={i} className="bg-white border-4 border-black p-8 rounded-[2rem] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
                  <span className="text-4xl font-anton uppercase text-[#1E1E1E]">{stat.label}</span>
                  <span className="text-xl font-bold text-gray-500">{stat.sub}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
