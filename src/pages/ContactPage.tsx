import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageCircle, Mail, Phone, Instagram, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick, trackEmailClick } from '../utils/analytics';
import { EnquiryForm } from '../components/ui/EnquiryForm';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || 'Website Development';

  const handleWhatsAppContact = () => {
    trackWhatsAppClick('contact_page_direct');
    window.open(getWhatsAppUrl({ source: 'contact_page' }), '_blank', 'noopener,noreferrer');
  };

  const handleEmailContact = () => {
    trackEmailClick('contact_page_direct');
  };

  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* Page Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
          Get in Touch
        </p>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Let’s Discuss Your Project
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          Have an idea for a website, Android app, or custom software? Fill out the project enquiry form or reach out through your preferred messaging channel.
        </p>
      </section>

      {/* Main Grid: Contact Options & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels & trust signals */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B1222] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-lg font-bold text-white">Direct Communication Channels</h2>

              <div className="space-y-4">
                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/40 transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-900/60 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-300">WhatsApp Chat</div>
                      <div className="text-xs text-slate-400">Fastest direct response</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400">Open &rarr;</span>
                </button>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  onClick={handleEmailContact}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-[#070B14] border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-white transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-300">Email Address</div>
                      <div className="text-xs text-slate-400 break-all">{siteConfig.contact.email}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400">Send &rarr;</span>
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-[#070B14] border border-slate-800 text-slate-300 hover:border-pink-500/50 hover:text-white transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 text-pink-400">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-pink-300">Instagram DM</div>
                      <div className="text-xs text-slate-400">@rksolution.dev</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-pink-400">Visit &rarr;</span>
                </a>

                {/* Optional Phone if configured */}
                {siteConfig.contact.phone && (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-[#070B14] border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 text-slate-300">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Telephone Call</div>
                        <div className="text-xs text-slate-400">{siteConfig.contact.phone}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-400">Call &rarr;</span>
                  </a>
                )}
              </div>

              {/* Service Commitments */}
              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Response Expectation:</strong> {siteConfig.contact.responseTime}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Operating Location:</strong> {siteConfig.brand.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Confidentiality:</strong> Your project ideas and business specifications remain strictly private.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7 bg-[#0B1222] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">Project Enquiry Form</h2>
              <p className="text-xs text-slate-300 mt-1">
                Tell us about your project goals. We will review the requirements and follow up with a proposal.
              </p>
            </div>

            <EnquiryForm defaultService={preselectedService} />
          </div>
        </div>
      </section>
    </div>
  );
};
