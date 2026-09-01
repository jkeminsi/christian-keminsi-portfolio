'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { Cpu, Network, ShieldCheck } from 'lucide-react';

export const EngineeringLab: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { architectureLabItems, personalInfo } = data;

  const [selectedArchId, setSelectedArchId] = useState<string>('offline-first');

  const currentArch = architectureLabItems.find((item) => item.id === selectedArchId) || architectureLabItems[0];

  return (
    <section id="engineering-lab" className="py-24 border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-xs font-mono text-[#3B82F6]">
            <Network className="w-3.5 h-3.5" />
            <span>{personalInfo.ui.lab.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
            {personalInfo.ui.lab.title}
          </h2>
          <p className="text-sm font-mono text-[#737373] max-w-2xl">
            {personalInfo.ui.lab.subtitle}
          </p>
        </div>

        {/* Architecture Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {architectureLabItems.map((item) => {
            const isSelected = selectedArchId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedArchId(item.id)}
                className={`p-5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-[#171717] border-[#3B82F6] shadow-[0_0_25px_rgba(59,130,246,0.2)]'
                    : 'bg-[#111111] border-[#262626] hover:border-[#3B3B3B] hover:bg-[#141414]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-0.5 rounded border border-[#3B82F6]/20">
                    {item.badge}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />}
                </div>

                <div className="font-bold text-base text-[#F5F5F5]">
                  {item.title}
                </div>

                <div className="text-xs text-[#737373] line-clamp-2">
                  {item.summary}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Blueprint Card */}
        <div className="rounded-2xl bg-[#111111] border border-[#262626] p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Blueprint Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#222222] gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#3B82F6]" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                  {currentArch.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-mono text-[#A3A3A3]">
                {currentArch.diagramTitle}
              </p>
            </div>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
              {currentArch.stack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono bg-[#171717] text-[#D4D4D4] border border-[#2E2E2E] rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Step-by-Step Flow Simulation (Visual Pipeline) */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-[#737373] uppercase tracking-wider">
              {personalInfo.ui.lab.sequenceLabel}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {currentArch.flowSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative p-4 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#3B82F6]/50 transition-colors flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#3B82F6]">
                        {step.number}
                      </span>
                      <span className="text-[10px] font-mono text-[#737373] bg-[#1F1F1F] px-1.5 py-0.5 rounded">
                        STEP
                      </span>
                    </div>

                    <div className="text-sm font-bold text-[#F5F5F5]">
                      {step.label}
                    </div>

                    <p className="text-xs text-[#A3A3A3] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#222222]">
                    <div className="text-[10px] font-mono text-[#3B82F6] truncate">
                      {step.tech}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Key Takeaways */}
          <div className="p-5 rounded-xl bg-[#171717] border border-[#262626] space-y-3">
            <div className="text-xs font-mono font-semibold text-[#F5F5F5] uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>{personalInfo.ui.lab.guaranteesLabel}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {currentArch.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#A3A3A3]">
                  <span className="text-[#3B82F6] font-mono font-bold">•</span>
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
