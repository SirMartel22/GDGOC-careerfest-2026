"use client";

import React, { useEffect, useState, useRef } from 'react';
import { getProjects, searchProjects } from '@/lib/supabase/queries';
import { Project } from '@/types';
import SearchBar from '@/components/projects/SearchBar';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(9);
  const debounceRef = useRef<number | null>(null);

  const loadAll = async () => {
    setLoading(true);
    try {
      const data = await getProjects();
      setProjects(data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // debounce search
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(async () => {
      if (!query || query.trim().length < 3) {
        await loadAll();
        return;
      }

      setLoading(true);
      try {
        const res = await searchProjects(query.trim());
        setProjects(res || []);
      } finally {
        setLoading(false);
      }
    }, 350);

    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-white">
      <main className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="flex items-center gap-4 bg-white border-4 border-black p-6 rounded-4xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h1 className="text-4xl md:text-6xl font-anton uppercase text-[#1E1E1E]">Our Projects</h1>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-zinc-700 text-lg max-w-2xl mt-6"
          >
            Exploring the intersection of design and technology through impactful digital experiences.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6"
        >
          <div className="flex-1 min-w-0">
            <SearchBar value={query} onChange={setQuery} onClear={() => setQuery('')} count={projects.length} />
          </div>
          <div className="text-sm text-zinc-600 whitespace-nowrap">Showing {Math.min(pageSize, projects.length)} of {projects.length}</div>
        </motion.div>

        {loading ? (
          <div className="text-zinc-600">Loading projects…</div>
        ) : (
          <>
            <ProjectGrid projects={projects.slice(0, pageSize)} />

            {projects.length > pageSize && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setPageSize((s) => s + 9)}
                  className="px-8 py-3 bg-white border-2 border-black rounded-2xl font-anton uppercase hover:translate-x-0.5 hover:translate-y-0.5 transition"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </section>
  );
}
