import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, MessageCircle, ArrowLeft } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      <div className="space-y-3">
        <span className="text-6xl sm:text-7xl font-mono font-black text-cyan-400">404</span>
        <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto">
          The link you followed may be broken or the page may have been moved. Let's get you back on track.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 py-2.5 px-5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 py-2.5 px-5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium transition-colors"
        >
          <Compass className="w-4 h-4" />
          <span>Explore Projects</span>
        </Link>

        <a
          href={getWhatsAppUrl({ source: '404_page' })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-2.5 px-5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-400 border border-emerald-500/40 text-xs font-medium transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Developer</span>
        </a>
      </div>
    </div>
  );
};
