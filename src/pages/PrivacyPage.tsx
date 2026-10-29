import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const PrivacyPage: React.FC = () => {
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
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400">
          Last revised: October 2026 &bull; {siteConfig.brand.name}
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed bg-[#0B1222] border border-slate-800 rounded-2xl p-6 sm:p-10">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">1. Information We Collect</h2>
          <p>
            When you contact RK Solution through our project enquiry form, email, or WhatsApp, we collect information you voluntarily provide. This includes your name, email address, phone/WhatsApp number, business name, and project specifications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">2. Purpose of Information Use</h2>
          <p>
            We use your submitted data exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>Review project requirements and provide honest architectural feasibility assessments</li>
            <li>Formulate transparent milestone proposals and price quotations</li>
            <li>Communicate directly regarding ongoing project status and deliverables</li>
          </ul>
          <p>
            We never sell, rent, or lease your contact information or intellectual business property to third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. Third-Party Analytics</h2>
          <p>
            Our website may utilize privacy-respecting analytics tools (such as Google Analytics or Meta Pixel) to evaluate ad campaign effectiveness and measure user interactions. These tools collect aggregate browser details, referrer sources, and page interaction events.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">4. Confidentiality of Client Concepts</h2>
          <p>
            We treat all proprietary product concepts, software wireframes, and business ideas shared with RK Solution as strictly confidential.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">5. Contact Regarding Privacy</h2>
          <p>
            For any inquiries regarding this policy or to request removal of your contact details, please reach out directly at{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-400 underline">
              {siteConfig.contact.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};
