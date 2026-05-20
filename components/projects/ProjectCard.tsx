"use client";

import React, { useState } from 'react';
import Modal from '@/components/ui/Modal';
import { Project } from '@/types';

interface ProjectCardProps {
	project: Project;
}


export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const [open, setOpen] = useState(false);
	const thumb = project.thumbnail_url;
	const preview = project.description.length > 120 ? `${project.description.slice(0, 120).trimEnd()}...` : project.description;

	return (
		<>
			<article
				className="group relative p-6 rounded-4xl bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all min-h-72 overflow-hidden cursor-pointer"
				onClick={() => setOpen(true)}
			>
				<div className="flex h-full flex-col gap-4">
					<div className="aspect-video w-full overflow-hidden rounded-2xl border-2 border-black bg-white/5">
						{thumb ? (
							// eslint-disable-next-line @next/next/no-img-element
							<img src={thumb} alt={project.project_name} className="h-full w-full object-cover" />
						) : (
							<div className="h-full w-full flex items-center justify-center text-zinc-600">No image</div>
						)}
					</div>

					<div className="flex-1 flex flex-col">
						<h3 className="text-lg font-anton uppercase tracking-tight">{project.project_name}</h3>
						<p className="text-xs text-zinc-500 mt-1">by {project.builder_name}{project.twitter_handle ? (<span className="text-indigo-600 ml-2">· {project.twitter_handle}</span>) : null}</p>
						
						<div className="mt-2">
							<span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold rounded uppercase">
								{project.category}
							</span>
						</div>

						<p className="mt-3 text-sm text-zinc-700 line-clamp-3 flex-1 leading-relaxed">{preview}</p>

						<div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
							{project.live_url && (
								<a onClick={(e) => e.stopPropagation()} href={project.live_url} target="_blank" rel="noreferrer" className="text-[#4285F4] font-bold hover:underline">Live</a>
							)}
							{project.github_url && (
								<a onClick={(e) => e.stopPropagation()} href={project.github_url} target="_blank" rel="noreferrer" className="text-zinc-700 font-medium hover:underline">Repo</a>
							)}
							{project.team_members && (
								<span className="text-zinc-600">Team: {project.team_members}</span>
							)}
							<span className="text-zinc-500">Submitted {new Date(project.created_at).toLocaleDateString()}</span>
						</div>

						<div className="mt-5 inline-flex self-start rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-anton uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
							View project
						</div>
					</div>
				</div>
			</article>

			<Modal isOpen={open} onClose={() => setOpen(false)} maxWidth="max-w-2xl">
				<div className="space-y-6">
					<div className="flex flex-col sm:flex-row items-start gap-6">
						<div className="w-full sm:w-36 h-48 sm:h-36 rounded-lg overflow-hidden border-2 border-black shrink-0">
							{thumb ? (
								// eslint-disable-next-line @next/next/no-img-element
								<img src={thumb} alt={project.project_name} className="w-full h-full object-cover" />
							) : (
								<div className="w-full h-full flex items-center justify-center text-zinc-600">No image</div>
							)}
						</div>

						<div className="min-w-0">
							<div className="flex items-center gap-3 flex-wrap">
								<h2 className="text-3xl font-anton uppercase leading-tight">{project.project_name}</h2>
								<span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold rounded uppercase">
									{project.category}
								</span>
							</div>
							<p className="text-zinc-600 mt-2">by {project.builder_name} {project.twitter_handle ? <a href={`https://twitter.com/${project.twitter_handle.replace(/^@/, '')}`} target="_blank" rel="noreferrer" className="text-indigo-600 ml-2">{project.twitter_handle}</a> : null}</p>
							<p className="text-zinc-500 mt-1">Submitted {new Date(project.created_at).toLocaleString()}</p>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-2">Description</h3>
						<p className="text-zinc-700 whitespace-pre-wrap">{project.description}</p>
					</div>

					<div className="flex flex-wrap gap-4">
						{project.live_url && (
							<a href={project.live_url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#4285F4] text-white rounded-2xl border-2 border-black">Live</a>
						)}
						{project.github_url && (
							<a href={project.github_url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-white rounded-2xl border-2 border-black">Repo</a>
						)}
						{project.team_members && (
							<span className="px-4 py-2 bg-white rounded-2xl border-2 border-black">Team: {project.team_members}</span>
						)}
					</div>
				</div>
			</Modal>
		</>
	);
};


export default ProjectCard;

