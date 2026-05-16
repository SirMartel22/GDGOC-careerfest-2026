export default function ProjectsPage() {
  const projects = [
    {
      title: "FinTech Dashboard",
      description: "A high-performance trading interface with real-time analytics.",
      tags: ["Next.js", "TypeScript", "D3.js"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "AI Content Engine",
      description: "Generative AI platform for automated marketing copy.",
      tags: ["OpenAI", "Node.js", "React"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "EcoTrack Mobile",
      description: "Sustainability tracking app for conscious consumers.",
      tags: ["React Native", "Firebase", "Leaflet"],
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30">
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Projects</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Exploring the intersection of design and technology through impactful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="h-6 w-6 rounded-full border-2 border-white/20" />
                </div>
                
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
