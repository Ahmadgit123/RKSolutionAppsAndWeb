import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { ProjectCard } from '../ui/ProjectCard';

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-20 bg-[#070B14] border-t border-slate-800/60" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Selected Showcase
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real Work &amp; Engineering Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Explore our mobile applications, responsive web interfaces, and algorithmic software solutions.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {siteConfig.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
