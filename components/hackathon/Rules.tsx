import Image from "next/image";

const guidelines = [
  {
    num: "01",
    title: "Use Google Tools",
    desc: "Your project must incorporate at least one Google AI or Cloud product. The workshop will show you which ones to use."
  },
  {
    num: "02",
    title: "Solve a Real Problem",
    desc: "Pick an SDG challenge that matters to you. Build something that actually addresses it not just an idea, a solution."
  },
  {
    num: "03",
    title: "Submit What Works",
    desc: "Your project should be functional. A live link, demo, or prototype that someone can actually interact with."
  },
  {
    num: "04",
    title: "Original Work Only",
    desc: "Everything submitted must be built during the challenge window. Pre-built projects won't be considered."
  },
  {
    num: "05",
    title: "Anyone Can Build",
    desc: "You don't need to be a CS student. Every field has something to contribute. Bring your perspective."
  }
];

const Rules = () => {
  return (
    <section id="rules" className="py-16 bg-[#E1F5FE] border-y-4 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/fav-icon.png" alt="GDG Logo" width={24} height={24} />
            <span className="font-bold text-sm tracking-widest uppercase text-[#1E1E1E]">// rules</span>
          </div>
          <Image 
            src="/solid-shape.png"
            alt="Design Shape"
            width={400}
            height={30}
            className="h-auto opacity-80 hidden md:block w-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-anton text-[#1E1E1E] uppercase leading-[0.9] tracking-tighter mb-10">
              How to <br /> Build Right.
            </h2>
            <div className="relative aspect-video group mt-12">
              <Image 
                src="/Nano-3.png" 
                alt="Rule Design" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain opacity-90 group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          </div>

          <div className="space-y-12">
            {guidelines.map((rule, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-4xl font-anton text-[#4285F4] leading-none group-hover:scale-110 transition-transform">{rule.num}</span>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#1E1E1E] uppercase tracking-tight">{rule.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
