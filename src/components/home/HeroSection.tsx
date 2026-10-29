import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Smartphone, Globe, ShieldCheck, Clock, Terminal } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';

export const HeroSection: React.FC = () => {
  const handleWhatsAppHero = () => {
    trackWhatsAppClick('hero_cta');
    window.open(getWhatsAppUrl({ source: 'hero_cta' }), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="uppercase tracking-wider">Software Development &amp; Digital Solutions</span>
            </div>

            {/* Headline as mandated */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Turn Your Business Idea Into Reality.
            </h1>

            {/* Supporting text as mandated */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              RK Solution helps businesses and entrepreneurs build modern websites and Android applications designed around their goals.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/contact"
                className="py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40 text-center"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={handleWhatsAppHero}
                className="py-3 px-6 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </button>

              <Link
                to="/projects"
                className="py-3 px-4 text-slate-300 hover:text-white text-sm font-medium transition-colors text-center"
              >
                Explore Our Work &rarr;
              </Link>
            </div>

            {/* Trust highlights (honest, uninflated) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="space-y-1">
                <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Clean Code</span>
                </div>
                <div className="text-slate-400 text-[11px]">Kotlin &amp; TypeScript</div>
              </div>

              <div className="space-y-1">
                <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Agreed Scope</span>
                </div>
                <div className="text-slate-400 text-[11px]">Milestones &amp; Timelines</div>
              </div>

              <div className="space-y-1">
                <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Modern Web</span>
                </div>
                <div className="text-slate-400 text-[11px]">Fast, Mobile-First</div>
              </div>

              <div className="space-y-1">
                <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Android Native</span>
                </div>
                <div className="text-slate-400 text-[11px]">Jetpack Compose</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/80 p-2 sm:p-3 border border-slate-700/60 shadow-2xl shadow-black/80">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/hero_software_workspace_1793287720095.jpg"
                  alt="RK Solution software development studio workstation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent" />

                {/* Quiet Floating Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#070B14]/90 backdrop-blur-md border border-slate-700/60 text-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-slate-200 font-medium">Developer-Led Delivery</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-[11px]">Direct Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
