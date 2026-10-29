import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { trackProjectEnquirySubmission, trackWhatsAppClick } from '../../utils/analytics';

interface EnquiryFormProps {
  defaultService?: string;
  defaultProjectName?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultService = 'Website Development',
  defaultProjectName,
  className = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [service, setService] = useState(defaultService);
  const [budgetRange, setBudgetRange] = useState('₹15,000 – ₹35,000 (Standard Business)');
  const [projectDescription, setProjectDescription] = useState(
    defaultProjectName ? `Hi, I would like to discuss building a project similar to ${defaultProjectName}.` : ''
  );
  const [contactMethod, setContactMethod] = useState<'WhatsApp' | 'Email' | 'Phone'>('WhatsApp');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    service: string;
    contactMethod: string;
    summary: string;
  } | null>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please enter your name.';
    }

    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!phone.trim()) {
      errs.phone = 'Please enter your phone or WhatsApp number.';
    } else if (phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number with digits.';
    }

    if (!projectDescription.trim()) {
      errs.projectDescription = 'Please describe your project or business idea.';
    } else if (projectDescription.trim().length < 15) {
      errs.projectDescription = 'Please provide at least a few details (min 15 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const inquirySummary = `
*New Project Enquiry for RK Solution*
• Name: ${fullName}
• Email: ${email}
• WhatsApp/Phone: ${phone}
• Business: ${businessName || 'N/A'}
• Service: ${service}
• Budget: ${budgetRange}
• Preferred Contact: ${contactMethod}
• Description: ${projectDescription}
    `.trim();

    try {
      // If external form endpoint is configured in .env, send POST request
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName,
            email,
            phone,
            businessName,
            service,
            budgetRange,
            contactMethod,
            projectDescription,
            source: 'rk_solution_website',
          }),
        });
      }

      // Track lead conversion for Meta / GA4
      trackProjectEnquirySubmission({
        service,
        budgetRange,
        contactMethod,
      });

      setSubmittedData({
        fullName,
        service,
        contactMethod,
        summary: inquirySummary,
      });
    } catch (err) {
      console.warn('Direct POST endpoint error:', err);
      // Even if external POST fails, we do NOT lose the inquiry: we present the direct WhatsApp/Email instant dispatch!
      setSubmittedData({
        fullName,
        service,
        contactMethod,
        summary: inquirySummary,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInstantWhatsAppSend = () => {
    if (!submittedData) return;
    trackWhatsAppClick('enquiry_form_success');
    const waUrl = getWhatsAppUrl({
      customMessage: submittedData.summary,
      source: 'enquiry_form',
    });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectEmailSend = () => {
    if (!submittedData) return;
    const subject = encodeURIComponent(`Project Enquiry: ${submittedData.service} - ${submittedData.fullName}`);
    const body = encodeURIComponent(submittedData.summary);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  if (submittedData) {
    return (
      <div className={`p-8 bg-[#0D1527] border border-cyan-500/30 rounded-xl space-y-6 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Thank You, {submittedData.fullName}!</h3>
            <p className="text-slate-300 text-sm">
              Your project enquiry for <strong className="text-cyan-400">{submittedData.service}</strong> has been prepared.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-[#070B14] border border-slate-800 space-y-2 text-xs text-slate-300">
          <p className="text-slate-400 font-medium">Quick Confirmation Summary:</p>
          <div className="grid grid-cols-2 gap-2 text-slate-300">
            <div><span className="text-slate-500">Service:</span> {submittedData.service}</div>
            <div><span className="text-slate-500">Channel:</span> {submittedData.contactMethod}</div>
          </div>
          <p className="text-slate-400 pt-1">
            Founder Ahmad reviews every enquiry personally and typically responds within 2–4 hours on business days.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <p className="text-xs text-slate-400">
            For fastest priority review, tap below to send this enquiry directly to developer WhatsApp:
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleInstantWhatsAppSend}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Forward to WhatsApp (Instant)</span>
            </button>
            <button
              onClick={handleDirectEmailSend}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-lg transition-colors border border-slate-700"
            >
              <span>Open in Email App</span>
            </button>
          </div>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={() => {
              setSubmittedData(null);
              setFullName('');
              setEmail('');
              setPhone('');
              setBusinessName('');
              setProjectDescription('');
            }}
            className="text-xs text-cyan-400 hover:text-cyan-300 underline"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      {/* Full Name & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1.5">
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
              errors.fullName
                ? 'border-rose-500/80 focus:ring-rose-500'
                : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
            }`}
          />
          {errors.fullName && <p className="mt-1 text-xs text-rose-400">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="businessName" className="block text-xs font-medium text-slate-300 mb-1.5">
            Business / Brand Name <span className="text-slate-500">(Optional)</span>
          </label>
          <input
            id="businessName"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="e.g. Apex Cafe or Startup Name"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
          />
        </div>
      </div>

      {/* Email & Phone / WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
            Email Address <span className="text-cyan-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="rahul@example.com"
            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
              errors.email
                ? 'border-rose-500/80 focus:ring-rose-500'
                : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1.5">
            WhatsApp / Phone Number <span className="text-cyan-400">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
              errors.phone
                ? 'border-rose-500/80 focus:ring-rose-500'
                : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>}
        </div>
      </div>

      {/* Service Selection & Budget Range */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-xs font-medium text-slate-300 mb-1.5">
            Required Service <span className="text-cyan-400">*</span>
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
          >
            <option value="Website Development">Website Development</option>
            <option value="Android App Development">Android App Development (Kotlin / Compose)</option>
            <option value="Responsive Frontend & UI/UX">Responsive Frontend & UI/UX Design</option>
            <option value="Website Redesign & Maintenance">Website Redesign & Maintenance</option>
            <option value="Custom Software Solution">Custom Software Solution / AI System</option>
          </select>
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-xs font-medium text-slate-300 mb-1.5">
            Approximate Budget Range
          </label>
          <select
            id="budgetRange"
            value={budgetRange}
            onChange={(e) => setBudgetRange(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
          >
            <option value="Under ₹15,000 (Starter / Single-page)">Under ₹15,000 (Starter / Single-page)</option>
            <option value="₹15,000 – ₹35,000 (Standard Business)">₹15,000 – ₹35,000 (Standard Business)</option>
            <option value="₹35,000 – ₹75,000 (Full-Featured / Android App)">₹35,000 – ₹75,000 (Full-Featured / Android App)</option>
            <option value="₹75,000+ (Custom Architecture / Complex)">₹75,000+ (Custom Architecture / Complex)</option>
            <option value="Flexible / Need Consultation First">Flexible / Need Consultation First</option>
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="projectDescription" className="block text-xs font-medium text-slate-300 mb-1.5">
          Project Description & Goals <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="projectDescription"
          rows={3}
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Briefly describe what you want to build (e.g., A restaurant website with digital menu and WhatsApp ordering, or an Android notes utility)..."
          className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
            errors.projectDescription
              ? 'border-rose-500/80 focus:ring-rose-500'
              : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
          }`}
        />
        {errors.projectDescription && (
          <p className="mt-1 text-xs text-rose-400">{errors.projectDescription}</p>
        )}
      </div>

      {/* Preferred Contact Method */}
      <div>
        <span className="block text-xs font-medium text-slate-300 mb-2">Preferred Response Channel</span>
        <div className="grid grid-cols-3 gap-3">
          {(['WhatsApp', 'Email', 'Phone'] as const).map((method) => (
            <label
              key={method}
              className={`flex items-center justify-center gap-2 p-2.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                contactMethod === method
                  ? 'bg-blue-950/60 border-blue-500 text-white'
                  : 'bg-[#070B14] border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={contactMethod === method}
                onChange={() => setContactMethod(method)}
                className="sr-only"
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2 py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-950/50 disabled:opacity-60 cursor-pointer"
      >
        {isSubmitting ? (
          <span>Sending Enquiry...</span>
        ) : (
          <>
            <span>Submit Project Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center pt-1">
        We respect your privacy. No spam. Transparent pricing and rapid response.
      </p>
    </form>
  );
};
