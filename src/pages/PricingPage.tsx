import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, MessageCircle, Info } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';
import { ProjectEstimator } from '../components/home/ProjectEstimator';

export const PricingPage: React.FC = () => {
  const handleWhatsAppPackage = (packageName: string) => {
    trackWhatsAppClick('pricing_package', { package: packageName });
    window.open(
      getWhatsAppUrl({ packageName, source: 'pricing_page' }),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
          Transparent Scope
        </p>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Indicative Packages &amp; Investment
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          Every project is engineered around specific business goals. We provide transparent, itemized proposals before writing a single line of code.
        </p>

        {/* Informative Note */}
        <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 flex items-start gap-3 max-w-3xl">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <span>
            <strong>Pricing Philosophy:</strong> Pricing depends on your specific project requirements, architectural complexity, and third-party integrations. Contact us for a transparent, personalized quote tailored to your timeline.
          </span>
        </div>
      </section>

      {/* Package Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.pricing.map((pkg) => {
            const isFeatured = pkg.id === 'business-website';
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-7 flex flex-col justify-between space-y-6 transition-all duration-200 ${
                  isFeatured
                    ? 'bg-[#0E172C] border-2 border-cyan-500/70 shadow-xl shadow-cyan-950/40 relative'
                    : 'bg-[#0B1222] border border-slate-800'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-cyan-400">{pkg.badge}</span>
                    <span className="text-[11px] font-mono text-slate-400">{pkg.deliveryEstimate}</span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white">{pkg.name}</h2>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{pkg.tagline}</p>
                  </div>

                  {/* Indicative Price note */}
                  <div className="pt-3 pb-2 border-y border-slate-800/80 space-y-1">
                    <div className="text-sm font-semibold text-white">
                      {pkg.indicativePrice}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {pkg.priceNote}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">Included Scope:</p>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
                    <strong className="text-slate-300">Best For:</strong> {pkg.suitableFor}
                  </div>
                </div>

                {/* Package CTAs */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppPackage(pkg.name)}
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Get Quote via WhatsApp</span>
                  </button>

                  <Link
                    to={`/contact?service=${encodeURIComponent(pkg.name)}`}
                    className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
                  >
                    <span>Request Custom Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Estimator Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectEstimator />
      </section>
    </div>
  );
};
