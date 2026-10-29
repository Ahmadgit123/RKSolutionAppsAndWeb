import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>

      <div className="space-y-4">
        <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
          Legal &amp; Compliance
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-400">
          Last revised: October 2026 &bull; {siteConfig.brand.name}
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed bg-[#0B1222] border border-slate-800 rounded-2xl p-6 sm:p-10">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">1. Engagement &amp; Scope of Work</h2>
          <p>
            All custom development engagements undertaken by RK Solution are governed by an agreed project specification outlining deliverables, milestone timelines, and pricing before code execution begins.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">2. Intellectual Property &amp; Code Ownership</h2>
          <p>
            Upon receipt of full payment for agreed milestones, full ownership of the bespoke source code, assets, and application deliverables is transferred to the client, excluding any third-party open-source libraries or components licensed separately under permissive open-source licenses (e.g., MIT, Apache 2.0).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. Quotes &amp; Cost Estimates</h2>
          <p>
            Estimates generated via our website calculator or initial consultations are indicative and subject to written confirmation upon complete review of functional specifications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">4. Post-Delivery Warranty &amp; Support</h2>
          <p>
            We stand behind our code. Every delivered project includes an agreed post-launch technical support window to fix unforeseen defects within the defined scope of work.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">5. Governing Jurisdiction</h2>
          <p>
            These terms are governed in accordance with the laws of India. For any questions, please contact{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-400 underline">
              {siteConfig.contact.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};
