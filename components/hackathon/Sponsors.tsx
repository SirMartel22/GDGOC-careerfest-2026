import Image from "next/image";
import Link from "next/link"

const Sponsors = () => {
  return (
    <section className="py-16 bg-[#4285F4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2 bg-[#FAAB00] px-4 py-2 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
                <Image src="/fav-icon.png" alt="GDG Logo" width={24} height={24} />
                <span className="font-bold text-sm tracking-widest uppercase text-[#1E1E1E]">// powered by</span>
            </div>
            <Image 
                src="/solid-shape.png"
                alt="Design Shape"
                width={400}
                height={30}
                className="h-auto opacity-80 hidden md:block w-auto"
            />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl font-anton text-white uppercase leading-[0.9] tracking-tighter">
              Built With <br /> Support From
            </h2>
          </div>
          <div className="max-w-sm space-y-6">
            <div className="space-y-4">
                <p className="text-white font-bold text-xl leading-tight">
                  Want your brand in front of the next generation of builders?
                </p>
                <Link 
                    href="/sponsor" 
                    className="inline-block bg-[#EA4336] text-white px-8 py-3 rounded-2xl font-anton text-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-wide"
                >
                  Become a Sponsor
                </Link>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="animate-marquee flex gap-12 py-4">
            {[1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
              <div key={index} className="flex-shrink-0 w-64 aspect-[2/1] bg-white rounded-3xl border-4 border-black flex items-center justify-center p-3 group hover:-translate-y-1 hover:translate-x-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                <Image 
                  src="/verafy-me-signature-black.png"
                  alt={`Partner ${i}`}
                  width={200}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
