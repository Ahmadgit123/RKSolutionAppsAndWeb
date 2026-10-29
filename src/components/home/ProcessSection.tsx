import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#070B14] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Structured Execution
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Build Your Digital Product
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A predictable, milestone-driven development process ensuring clarity at every step from initial concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {siteConfig.processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-[#0B1222] border border-slate-800/80 rounded-xl p-6 space-y-3 relative hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-2xl font-black font-mono text-cyan-400/80">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
