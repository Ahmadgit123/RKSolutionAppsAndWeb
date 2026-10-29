import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';

export const CtaBanner: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('bottom_cta_banner');
    window.open(getWhatsAppUrl({ source: 'bottom_banner' }), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#070B14] to-[#0A1020] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
          Ready to Start?
        </p>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight text-balance max-w-3xl mx-auto">
          Let’s Build Something Exceptional Together.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you need a high-converting business website, a native Android application, or a complete digital overhaul, RK Solution is ready to turn your idea into reality.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto py-3 px-7 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto py-3 px-7 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-400 border border-emerald-500/40 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        <p className="text-xs text-slate-500 pt-2">
          Typically responds within 2–4 hours &bull; Free initial architectural assessment
        </p>
      </div>
    </section>
  );
};
