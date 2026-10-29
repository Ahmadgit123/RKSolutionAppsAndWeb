import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, MessageCircle, ArrowRight, Code2, Compass, Shield, Zap } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';

export const AboutPage: React.FC = () => {
  const handleWhatsAppAbout = () => {
    trackWhatsAppClick('about_page');
    window.open(getWhatsAppUrl({ source: 'about_page' }), '_blank', 'noopener,noreferrer');
  };

  const skills = [
    { category: 'Mobile Engineering', items: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Retrofit', 'MVVM', 'Coroutines', 'Material 3'] },
    { category: 'Web & Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5 / Semantic CSS', 'Responsive UI/UX'] },
    { category: 'Backend & Data', items: ['RESTful APIs', 'Python (FastAPI / Flask)', 'Express.js', 'SQL / SQLite', 'Git / GitHub'] },
    { category: 'Core Principles', items: ['Clean Architecture', 'Accessible Web Standards', 'Fast Load Times', 'No-Bloat Codebase'] },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* Hero Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            About RK Solution
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Developer-Led Software Craftsmanship
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
            RK Solution helps businesses and individuals turn their ideas into practical digital products through website and Android application development.
          </p>
        </div>
      </section>

      {/* Mission & Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0B1222] border border-slate-800 rounded-2xl p-8 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">Our Mission</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To provide small businesses, startups, and ambitious entrepreneurs with direct access to modern, high-quality software engineering. We believe every business deserves a fast, reliable website and mobile presence without the bloated price tags or bureaucratic layers of conventional agencies.
            </p>
          </div>

          <div className="bg-[#0B1222] border border-slate-800 rounded-2xl p-8 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">Development Philosophy</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We write clean, testable, maintainable code. No fragile drag-and-drop page builders that slow your site down. No inflated marketing claims. We build using industry-standard tools (Kotlin, Jetpack Compose, React, TypeScript) so your software can scale effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Spotlight (Honest, factual) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1222] border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center text-3xl font-black text-cyan-300">
                A
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{siteConfig.founder.name}</h3>
                <p className="text-xs text-cyan-400 font-medium">{siteConfig.founder.role}</p>
                <p className="text-xs text-slate-400 mt-1">{siteConfig.brand.location}</p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={siteConfig.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={`mailto:${siteConfig.founder.email}`}
                  className="py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8">
              <h4 className="text-lg font-bold text-white">Direct Engineering Leadership</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {siteConfig.founder.bio}
              </p>
              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">&bull;</span>
                  <span><strong>Zero Intermediaries:</strong> Discuss your technical requirements directly with the developer who architects and codes your project.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">&bull;</span>
                  <span><strong>Transparent Delivery:</strong> Continuous updates through GitHub or staging previews so you never wonder what stage your application is at.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">&bull;</span>
                  <span><strong>Long-Term Relationship:</strong> Available for subsequent feature iterations, version bumps, and maintenance support.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Skills Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Technical Stack
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Technologies &amp; Engineering Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-[#0B1222] border border-slate-800 rounded-xl p-5 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono text-slate-300 bg-[#070B14] px-2.5 py-1 rounded border border-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to discuss */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A0F1E] border border-cyan-500/30 rounded-2xl p-8 sm:p-12 text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Have a Project Idea in Mind?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Let’s discuss your vision, review technical requirements, and formulate an actionable implementation plan.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <span>Get in Touch Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={handleWhatsAppAbout}
              className="py-3 px-6 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-400 border border-emerald-500/40 text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp Discussion</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
