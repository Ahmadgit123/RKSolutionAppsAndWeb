import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Palette, Wrench, ArrowRight, Check } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Globe,
  Smartphone,
  Palette,
  Wrench,
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#070B14] border-t border-slate-800/60" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Our Core Competencies
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Software &amp; Digital Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From single-page business websites to native Android applications, every solution is built with clean architecture and practical conversion goals.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <div
                key={service.id}
                className="bg-[#0B1222] border border-slate-800/90 rounded-2xl p-7 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <p className="text-xs font-medium text-slate-400">Key Advantages:</p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable For */}
                  <div className="pt-2">
                    <p className="text-[11px] text-slate-500 mb-1">Recommended for:</p>
                    <div className="text-xs text-slate-400">
                      {service.suitableFor.join(' · ')}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/services"
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
