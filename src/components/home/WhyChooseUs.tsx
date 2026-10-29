import React from 'react';
import { MessageSquareCode, ShieldAlert, Cpu, HeartHandshake, Eye, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: MessageSquareCode,
      title: 'Direct Developer Collaboration',
      description: 'You speak and plan directly with the engineer writing your code—no non-technical sales reps, account managers, or miscommunicated requirements.',
    },
    {
      icon: Eye,
      title: 'Transparent Scopes & Pricing',
      description: 'Before any work begins, we agree on an itemized milestone plan with fixed pricing. Zero hidden fees, unexpected extras, or surprise costs.',
    },
    {
      icon: Cpu,
      title: 'Modern Architecture, Zero Bloat',
      description: 'We build with clean Kotlin Jetpack Compose for Android and modern React TypeScript for web. No heavy, unmaintainable page builders or fragile plugins.',
    },
    {
      icon: HeartHandshake,
      title: 'Post-Delivery Support & Training',
      description: 'We do not abandon you at launch. Every project includes dedicated handover walkthroughs and post-launch technical assistance.',
    },
  ];

  return (
    <section className="py-20 bg-[#060912] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Our Foundation
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Businesses Partner With RK Solution
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We value technical honesty, transparent communication, and software that delivers tangible business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="bg-[#0B1222] border border-slate-800/80 rounded-xl p-6 space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{pt.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pt.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
