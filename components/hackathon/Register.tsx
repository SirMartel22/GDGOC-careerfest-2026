import Image from "next/image";

const Register = () => {
  return (
    <section id="register" className="py-16 bg-[#34A853] border-y-4 border-black relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit mx-auto md:mx-0">
              <Image src="/fav-icon.png" alt="GDG Logo" width={24} height={24} />
              <span className="font-bold text-sm tracking-widest uppercase text-[#1E1E1E]">// registration</span>
            </div>
            <Image 
                src="/solid-shape.png"
                alt="Design Shape"
                width={400}
                height={30}
                className="h-auto opacity-80 hidden md:block"
            />
        </div>

        <div className="space-y-8 max-w-4xl mx-auto py-12">
          <h2 className="text-6xl md:text-8xl font-anton text-white uppercase leading-[0.9] tracking-tighter">
            Ready to <br /> Start Building?
          </h2>
          
          <p className="text-white text-xl md:text-2xl font-bold leading-tight max-w-2xl mx-auto">
            Registration for the Pre Career Fest Challenge is opening soon. Secure your spot and get ready to solve real-world problems with Google technology.
          </p>

          <div className="pt-12">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] inline-block w-full max-w-2xl">
              <div className="space-y-6">
                <div className="text-4xl md:text-5xl font-anton text-[#34A853] uppercase">Opening Soon</div>
                <p className="text-gray-500 font-bold text-lg">
                  We're finalizing the registration portal. Follow us for the official announcement!
                </p>
                <div className="pt-6">
                    <button className="w-full bg-[#EA4336] text-white py-6 rounded-2xl font-anton text-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-50 cursor-not-allowed uppercase">
                        Registration Closed
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
