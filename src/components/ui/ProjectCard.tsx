import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { Project } from '../../config/siteConfig';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group bg-[#0B1222] border border-slate-800/80 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Preview Image with fallback */}
        <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-800/70">
          <img
            src={project.previewImage}
            alt={`${project.title} preview`}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222] via-transparent to-transparent opacity-80" />

          {/* Quiet status marker */}
          <div className="absolute top-3 right-3 text-[11px] font-medium px-2.5 py-1 rounded bg-[#070B14]/80 backdrop-blur-sm text-slate-300 border border-slate-700/60 flex items-center gap-1.5">
            {project.demoStatus === 'available' ? (
              <>
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                <span>Source Available</span>
              </>
            ) : (
              <>
                <Clock className="w-3 h-3 text-amber-400" />
                <span>Active Project</span>
              </>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Unboxed clean metadata (zero-pill rule) */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-cyan-400 font-medium">{project.category}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{project.techStack.slice(0, 3).join(', ')}</span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
            {project.summary}
          </p>

          {/* Tech stack highlights */}
          <div className="pt-2 border-t border-slate-800/60 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-5 pt-0 mt-3 flex items-center justify-between border-t border-slate-800/40 gap-3">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-2"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors py-2"
            title="View code on GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        ) : (
          <span className="text-[11px] text-slate-500 italic">Architecture ready</span>
        )}
      </div>
    </article>
  );
};
