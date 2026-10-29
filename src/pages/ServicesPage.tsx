import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Palette, Wrench, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';

const serviceIcons = {
  'website-development': Globe,
  'android-app-development': Smartphone,
  'frontend-and-uiux': Palette,
  'maintenance-and-support': Wrench,
};

export const ServicesPage: React.FC = () => {
  const handleWhatsAppService = (serviceTitle: string) => {
    trackWhatsAppClick('services_page', { service: serviceTitle });
    window.open(
      getWhatsAppUrl({ serviceName: serviceTitle, source: 'services_page' }),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Capabilities &amp; Solutions
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tailor-Made Digital Services Designed Around Your Goals
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From modern responsive websites to high-performance Android applications, we deliver robust, production-ready software without unnecessary overhead.
          </p>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {siteConfig.services.map((service, index) => {
          const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Globe;
          return (
            <div
              key={service.id}
              id={service.id}
              className="bg-[#0B1222] border border-slate-800 rounded-2xl p-6 sm:p-10 lg:p-12 space-y-8 scroll-mt-24"
            >
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-cyan-400">0{index + 1} — Specialized Capability</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppService(service.title)}
                    className="py-2.5 px-4 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Enquiry</span>
                  </button>

                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span>Discuss Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
                {service.fullDesc}
              </div>

              {/* Grid breakdown of Benefits, Deliverables, and Audience */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {/* Benefits */}
                <div className="bg-[#070B14] border border-slate-800/80 rounded-xl p-5 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Core Benefits
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="bg-[#070B14] border border-slate-800/80 rounded-xl p-5 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    What You Receive
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {service.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suitable Use Cases */}
                <div className="bg-[#070B14] border border-slate-800/80 rounded-xl p-5 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Ideal For
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {service.suitableFor.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">&bull;</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                    Estimated Timeline: <span className="text-slate-200 font-mono">{service.timelineGuide}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950/40 via-slate-900 to-cyan-950/40 border border-slate-800 rounded-2xl p-8 sm:p-10 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Need a Custom Software Solution?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Have a specialized requirement such as an internal tool, API integration, or multi-platform project? Let’s evaluate the feasibility together.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              <span>Request a Custom Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
