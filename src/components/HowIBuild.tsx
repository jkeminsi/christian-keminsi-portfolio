'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { Search, PenTool, GitFork, Hammer, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const stepIcons: Record<string, React.ReactNode> = {
  '01': <Search className="w-5 h-5 text-[#3B82F6]" />,
  '02': <PenTool className="w-5 h-5 text-[#3B82F6]" />,
  '03': <GitFork className="w-5 h-5 text-[#3B82F6]" />,
  '04': <Hammer className="w-5 h-5 text-[#3B82F6]" />,
  '05': <Rocket className="w-5 h-5 text-[#3B82F6]" />
};

export const HowIBuild: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { pipelineSteps, personalInfo } = data;

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = pipelineSteps[activeStepIndex];

  return (
    <section id="how-i-build" className="py-24 border-t border-[#1C1C1C] relative bg-[#0D0D0D]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-xs font-mono text-[#3B82F6]">
            <span>{personalInfo.ui.pipeline.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
            {personalInfo.ui.pipeline.title}
          </h2>
          <p className="text-sm font-mono text-[#737373] max-w-2xl">
            {personalInfo.ui.pipeline.subtitle}
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {pipelineSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#171717] border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                    : 'bg-[#111111] border-[#262626] hover:border-[#3B3B3B] hover:bg-[#141414]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#3B82F6]' : 'text-[#737373]'}`}>
                    {step.step}
                  </span>
                  <div className="w-7 h-7 rounded-md bg-[#1F1F1F] flex items-center justify-center">
                    {stepIcons[step.step]}
                  </div>
                </div>

                <div>
                  <div className="font-bold text-sm text-[#F5F5F5]">
                    {step.title}
                  </div>
                  <div className="text-[11px] text-[#737373] font-mono truncate">
                    {step.focus.split('·')[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="rounded-2xl bg-[#111111] border border-[#262626] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#3B82F6]/10 text-[#60A5FA] text-xs font-mono font-bold border border-[#3B82F6]/20">
                  {personalInfo.ui.pipeline.stageLabel} {activeStep.step} / 05
                </span>
                <span className="text-xs font-mono text-[#737373]">
                  {activeStep.focus}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5]">
                {activeStep.title}
              </h3>

              <p className="text-base text-[#A3A3A3] font-normal leading-relaxed">
                {activeStep.tagline}
              </p>

              {/* Step Navigation Next */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : pipelineSteps.length - 1))}
                  className="px-3 py-1.5 rounded bg-[#171717] hover:bg-[#222222] border border-[#262626] text-xs font-mono text-[#A3A3A3] transition-colors"
                >
                  {personalInfo.ui.pipeline.prev}
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev < pipelineSteps.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-1.5 rounded bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-mono font-medium transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{personalInfo.ui.pipeline.next} {pipelineSteps[(activeStepIndex + 1) % pipelineSteps.length].title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Deliverables Matrix */}
            <div className="lg:col-span-6 p-6 rounded-xl bg-[#171717] border border-[#262626] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#242424]">
                <span className="text-xs font-mono font-semibold text-[#F5F5F5] uppercase tracking-wider">
                  {personalInfo.ui.pipeline.coreDeliverables}
                </span>
                <span className="text-xs font-mono text-[#3B82F6]">
                  {personalInfo.ui.pipeline.strictVerification}
                </span>
              </div>

              <div className="space-y-3">
                {activeStep.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#111111] border border-[#222222]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-[#D4D4D4] font-medium leading-relaxed">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
