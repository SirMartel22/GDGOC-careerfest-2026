export default function CareerFestPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pt-48">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Registration Open - May 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            CareerFest 2026
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed">
            The ultimate bridge between talent and industry. Join us for a week of networking, workshops, and career-defining opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-all active:scale-95">
              Register Now
            </button>
            <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all active:scale-95">
              View Schedule
            </button>
          </div>
        </div>

        {/* Stats / Info section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 border-t border-white/5 pt-16">
          <div className="space-y-2">
            <h3 className="text-zinc-500 font-medium">Participants</h3>
            <p className="text-2xl font-bold">5,000+</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-zinc-500 font-medium">Companies</h3>
            <p className="text-2xl font-bold">120+</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-zinc-500 font-medium">Location</h3>
            <p className="text-2xl font-bold">Lagos & Virtual</p>
          </div>
        </div>
      </main>
    </div>
  )
}
