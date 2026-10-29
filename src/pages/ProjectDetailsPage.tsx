import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';
import { EnquiryForm } from '../components/ui/EnquiryForm';

export const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = siteConfig.projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const handleWhatsAppAction = () => {
    trackWhatsAppClick('project_details_page', { project: project.title });
    window.open(
      getWhatsAppUrl({ projectName: project.title, source: 'project_details' }),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>

        {/* Header Block */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-cyan-400 font-semibold">{project.category}</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-medium">
            {project.tagline}
          </p>

          {/* Action Links & Repo */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>View Source on GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            ) : (
              <div className="py-2.5 px-4 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 text-xs font-medium">
                Code Repository: Private / Architecture Available on Request
              </div>
            )}

            <button
              onClick={handleWhatsAppAction}
              className="py-2.5 px-4 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-400 border border-emerald-500/40 text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Discuss Similar Application</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Preview */}
        <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative aspect-[16/9] max-h-[500px]">
          <img
            src={project.previewImage}
            alt={`${project.title} detailed visual mockup`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/70 via-transparent to-transparent" />
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#0B1222] border border-slate-800">
          {project.highlights.map((h, i) => (
            <div key={i} className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{h.label}</span>
              <p className="text-sm font-bold text-white font-mono">{h.value}</p>
            </div>
          ))}
        </div>

        {/* Two-Column Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Problem */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>The Challenge &amp; Problem Statement</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-[#0B1222] border border-slate-800/80 rounded-xl p-6">
                {project.problem}
              </p>
            </div>

            {/* 2. Solution */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Our Technical Solution</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-[#0B1222] border border-slate-800/80 rounded-xl p-6">
                {project.solution}
              </p>
            </div>

            {/* 3. Architecture & Key Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                <span>Key Engineering Capabilities</span>
              </h2>

              <div className="bg-[#0B1222] border border-slate-800/80 rounded-xl p-6 space-y-4">
                <ul className="space-y-3 text-sm text-slate-200">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {project.architecture && (
                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Architecture Blueprint
                    </p>
                    <div className="p-3 bg-[#070B14] rounded-lg border border-slate-800 font-mono text-xs text-cyan-300/90 leading-relaxed">
                      {project.architecture}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack & Lead Form */}
          <div className="lg:col-span-4 space-y-8 sticky top-24">
            {/* Tech Stack card */}
            <div className="bg-[#0B1222] border border-slate-800 rounded-xl p-6 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Technology Stack Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#070B14] border border-slate-800 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Inquire about a similar project */}
            <div className="bg-[#0B1222] border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">
                  Want to Build a Similar Application?
                </h3>
                <p className="text-xs text-slate-300">
                  Get a personalized quotation and architecture plan for your custom use case.
                </p>
              </div>

              <EnquiryForm defaultProjectName={project.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
