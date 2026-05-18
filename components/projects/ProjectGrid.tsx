import React from 'react';
import { Project } from '@/types';
import ProjectCard from './ProjectCard';

type Grouped = Record<string, Project[]>;

function detectCategory(p: Project) {
	const text = `${p.project_name} ${p.description} ${p.builder_name}`.toLowerCase();
	if (/ai|ml|machine learning|chatgpt|openai|llm/.test(text)) return 'AI / ML';
	if (/cloud|aws|gcp|azure|serverless/.test(text)) return 'Cloud';
	if (/react|next|vue|svelte|frontend|tailwind|css|html/.test(text)) return 'Web';
	if (/mobile|react native|android|ios|flutter/.test(text)) return 'Mobile';
	if (/data|analytics|d3|visuali|etl|pipeline/.test(text)) return 'Data';
	return 'Other';
}

function groupProjects(projects: Project[]): Grouped {
	return projects.reduce((acc, p) => {
		const cat = detectCategory(p);
		if (!acc[cat]) acc[cat] = [];
		acc[cat].push(p);
		return acc;
	}, {} as Grouped);
}

export const ProjectGrid: React.FC<{ projects: Project[] }> = ({ projects }) => {
	const grouped = groupProjects(projects);
	const categories = Object.keys(grouped).sort((a, b) => (a === 'Other' ? 1 : a.localeCompare(b)));

	return (
		<div className="space-y-8">
			{categories.map((cat) => (
				<section key={cat}>
					<div className="mb-4 inline-flex items-center gap-3">
						<span className="px-4 py-2 bg-white border-2 border-black rounded-2xl font-anton uppercase text-sm">{cat}</span>
						<span className="text-zinc-600 text-sm">({grouped[cat].length})</span>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{grouped[cat].map((p) => (
							<ProjectCard key={p.id} project={p} />
						))}
					</div>
				</section>
			))}
		</div>
	);
};

export default ProjectGrid;

