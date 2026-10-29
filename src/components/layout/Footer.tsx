import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Github, Instagram, MapPin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { trackWhatsAppClick, trackEmailClick } from '../../utils/analytics';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('footer');
    window.open(getWhatsAppUrl({ source: 'footer' }), '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    trackEmailClick('footer');
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 text-white font-bold text-lg hover:text-cyan-400 transition-colors">
              <span className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-black text-white text-xs shadow-md shadow-cyan-500/20">
                RK
              </span>
              <span>{siteConfig.brand.name}</span>
            </Link>
            <p className="text-slate-300 text-sm font-medium">
              {siteConfig.brand.tagline}
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Helping businesses, local shops, startups, and entrepreneurs turn their ideas into practical digital products through bespoke website and native Android application development.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp chat"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">Navigation</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects & Case Studies</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing & Packages</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact & Enquiries</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">Services</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services#website-development" className="hover:text-cyan-400 transition-colors">Website Development</Link>
              </li>
              <li>
                <Link to="/services#android-app-development" className="hover:text-cyan-400 transition-colors">Android App Development</Link>
              </li>
              <li>
                <Link to="/services#frontend-and-uiux" className="hover:text-cyan-400 transition-colors">Responsive Frontend & UI/UX</Link>
              </li>
              <li>
                <Link to="/services#maintenance-and-support" className="hover:text-cyan-400 transition-colors">Website Redesign & Upkeep</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">Direct Contact</p>
            <div className="space-y-2.5 text-xs">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors text-left"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: Direct Chat</span>
              </button>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                onClick={handleEmailClick}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{siteConfig.brand.location}</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  <span>Project Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {siteConfig.brand.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href={siteConfig.founder.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
