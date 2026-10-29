import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ProjectCard } from '../components/ui/ProjectCard';

type CategoryFilter = 'All' | 'Android Apps' | 'Websites' | 'AI / Python Projects';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'Android Apps',
    'Websites',
    'AI / Python Projects',
  ];

  const filteredProjects = siteConfig.projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <div className="py-12 sm:py-20 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
          Portfolio &amp; Case Studies
        </p>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Featured Engineering Work
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          Explore real software applications built with modern architectural standards. Inspect technical stacks, code repositories, and problem-solving methodologies.
        </p>

        {/* Category Filter Tabs (Interactive button controls) */}
        <div className="pt-4 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                    : 'bg-[#0B1222] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-[#0B1222] border border-slate-800 rounded-2xl p-8">
            <p className="text-sm text-slate-400">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
