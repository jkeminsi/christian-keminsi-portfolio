'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { Layers } from 'lucide-react';

export const TechStack: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { techCategories, personalInfo } = data;

  return (
    <section id="tech-stack" className="py-24 border-t border-[#1C1C1C] relative bg-[#0D0D0D]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-xs font-mono text-[#3B82F6]">
              <Layers className="w-3.5 h-3.5" />
              <span>{personalInfo.ui.stack.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
              {personalInfo.ui.stack.title}
            </h2>
          </div>
          <p className="text-sm font-mono text-[#737373] max-w-md">
            {personalInfo.ui.stack.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#111111] border border-[#262626] hover:border-[#3B82F6]/40 transition-colors space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-sm font-bold text-[#F5F5F5]">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-mono text-[#737373]">
                    {cat.items.length} Techs
                  </span>
                </div>
                <p className="text-xs text-[#737373]">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {cat.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-[#171717] text-[#D4D4D4] border border-[#262626] rounded-md hover:border-[#3B82F6]/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
