import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';
import { Link } from 'react-router-dom';

interface FeatureOption {
  id: string;
  label: string;
  priceInr: number;
}

export const ProjectEstimator: React.FC = () => {
  const [projectType, setProjectType] = useState<'website' | 'android' | 'fullstack'>('website');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'responsive_ui',
    'contact_form',
    'seo',
  ]);
  const [timeline, setTimeline] = useState<'standard' | 'express'>('standard');

  const basePricing = {
    website: { label: 'Modern Responsive Website', baseInr: 12000, days: 10 },
    android: { label: 'Native Android App (Kotlin)', baseInr: 25000, days: 20 },
    fullstack: { label: 'Website + Android App Ecosystem', baseInr: 40000, days: 30 },
  };

  const featureOptions: FeatureOption[] = [
    { id: 'responsive_ui', label: 'Bespoke UI/UX Design System', priceInr: 4000 },
    { id: 'contact_form', label: 'WhatsApp & Email Lead Capture', priceInr: 2500 },
    { id: 'seo', label: 'SEO Setup & Social Sharing Cards', priceInr: 3000 },
    { id: 'database', label: 'Database & Local Offline Caching', priceInr: 6000 },
    { id: 'api_integration', label: 'RESTful API & Backend Integration', priceInr: 7000 },
    { id: 'admin_dashboard', label: 'Admin Management Panel', priceInr: 8000 },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const calculateEstimate = () => {
    let total = basePricing[projectType].baseInr;
    selectedFeatures.forEach((fId) => {
      const match = featureOptions.find((o) => o.id === fId);
      if (match) total += match.priceInr;
    });

    if (timeline === 'express') {
      total = Math.round(total * 1.2);
    }

    return total;
  };

  const estimateInr = calculateEstimate();
  const estimateUsd = Math.round(estimateInr / 85);

  const handleWhatsAppQuote = () => {
    const featureLabels = selectedFeatures
      .map((id) => featureOptions.find((o) => o.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const summaryMsg = `Hello RK Solution, I used your Project Cost Estimator for a ${basePricing[projectType].label}. Estimated scope: ₹${estimateInr.toLocaleString('en-IN')}. Features: ${featureLabels || 'Standard base'}. I would like to discuss this project.`;

    trackWhatsAppClick('cost_estimator');
    window.open(
      getWhatsAppUrl({ customMessage: summaryMsg, source: 'cost_estimator' }),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="bg-[#0B1222] border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-black/40">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
        {/* Left Side: Controls */}
        <div className="w-full lg:w-7/12 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Interactive Quote Estimator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Estimate Your Project Cost Transparently
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Select your requirements to see an indicative estimate. Every quote is transparent with zero hidden fees.
            </p>
          </div>

          {/* 1. Project Type Selector */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-300">1. Select Project Type</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {(['website', 'android', 'fullstack'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProjectType(type)}
                  className={`text-left p-3 rounded-lg border text-xs font-medium transition-colors ${
                    projectType === type
                      ? 'bg-blue-950/70 border-cyan-500 text-white shadow-sm'
                      : 'bg-[#070B14] border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-semibold text-white">{basePricing[type].label.split('(')[0]}</div>
                  <div className="text-[11px] text-cyan-400/90 mt-0.5">Est. {basePricing[type].days} days</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Feature Checklist */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-300">2. Additional Capabilities & Modules</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {featureOptions.map((feat) => {
                const isSelected = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-left text-xs transition-colors ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-500/50 text-white'
                        : 'bg-[#070B14] border-slate-800/80 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-cyan-500 border-cyan-400 text-[#070B14]'
                          : 'border-slate-700 bg-slate-800'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="flex-1 truncate">{feat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Timeline Choice */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-300">3. Delivery Pace</span>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setTimeline('standard')}
                className={`flex-1 p-2.5 rounded-lg border text-xs font-medium text-center transition-colors ${
                  timeline === 'standard'
                    ? 'bg-blue-950/60 border-cyan-500 text-white'
                    : 'bg-[#070B14] border-slate-800 text-slate-400'
                }`}
              >
                Standard Milestone Pace
              </button>
              <button
                type="button"
                onClick={() => setTimeline('express')}
                className={`flex-1 p-2.5 rounded-lg border text-xs font-medium text-center transition-colors ${
                  timeline === 'express'
                    ? 'bg-blue-950/60 border-cyan-500 text-white'
                    : 'bg-[#070B14] border-slate-800 text-slate-400'
                }`}
              >
                Priority Fast-Track (+20%)
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Estimate Card */}
        <div className="w-full lg:w-5/12 bg-[#070B14] border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Indicative Investment Range</p>
            
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                ₹{estimateInr.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                (~${estimateUsd.toLocaleString()} USD)
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Based on {basePricing[projectType].label} with {selectedFeatures.length} configured modules.
            </p>

            <ul className="text-xs text-slate-300 space-y-1.5 pt-2 border-t border-slate-800/80">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Zero hidden fees or surprise charges</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Direct developer collaboration with Ahmad</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Milestone-based delivery with regular demos</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <button
              onClick={handleWhatsAppQuote}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Discuss This Scope on WhatsApp</span>
            </button>

            <Link
              to="/contact"
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-slate-800"
            >
              <span>Submit Formal RFP Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
