import Image from "next/image";
import Link from "next/link"

const Sponsors = () => {
  return (
    <section className="py-16 bg-[#4285F4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 bg-[#FAAB00] px-4 py-2 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
                <Image src="/fav-icon.png" alt="GDG Logo" width={24} height={24} />
                <span className="font-bold text-sm tracking-widest uppercase text-[#1E1E1E]">// powered by</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-anton text-white uppercase leading-[0.9] tracking-tighter">
              Built With <br /> Support From
            </h2>
          </div>
          <div className="max-w-sm space-y-6">
            <Image 
                src="/solid-shape.png"
                alt="Design Shape"
                width={400}
                height={30}
                className="h-auto opacity-80 w-32 md:w-[400px]"
            />
            <div className="space-y-4">
                <p className="text-white font-bold text-xl leading-tight">
                  Want your brand in front of the next generation of builders?
                </p>
                <Link href="/sponsor" className="text-[#FAAB00] font-anton text-2xl hover:underline underline-offset-8 decoration-4">
                  Become a Sponsor
                </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[2/1] bg-white rounded-3xl border-4 border-black flex items-center justify-center p-8 group hover:-translate-y-1 hover:translate-x-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
              <div className="text-gray-300 font-anton text-3xl group-hover:text-black/80 transition-colors uppercase">Partner {i}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
