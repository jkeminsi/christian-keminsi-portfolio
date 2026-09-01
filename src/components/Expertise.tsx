'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { Boxes, Layout, Server, Database, Brain, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Boxes: <Boxes className="w-5 h-5 text-[#3B82F6]" />,
  Layout: <Layout className="w-5 h-5 text-[#3B82F6]" />,
  Server: <Server className="w-5 h-5 text-[#3B82F6]" />,
  Database: <Database className="w-5 h-5 text-[#3B82F6]" />,
  Brain: <Brain className="w-5 h-5 text-[#3B82F6]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#3B82F6]" />
};

export const Expertise: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { capabilities } = data;

  return (
    <section id="expertise" className="py-24 border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-xs font-mono text-[#3B82F6]">
              <span>{language === 'fr' ? '// CAPACITÉS D\'INGÉNIERIE' : '// ENGINEERING CAPABILITIES'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
              {language === 'fr' 
                ? "Organisé par capacité d'ingénierie, pas par simples logos."
                : "Organized by engineering capacity, not just logos."}
            </h2>
          </div>
          <p className="text-sm font-mono text-[#CBD5E1] max-w-md">
            {language === 'fr'
              ? "Couverture technique complète : architecture système, scalabilité backend, interfaces modernes et modèles de Machine Learning."
              : "Full-spectrum software engineering covering architecture, backend scalability, modern interfaces, and machine learning models."}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            return (
              <div
                key={cap.id}
                className="group relative rounded-xl bg-[#111111] border border-[#262626] p-6 hover:border-[#3B82F6]/50 hover:bg-[#141414] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top: Icon, Number, Title */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#171717] border border-[#262626] flex items-center justify-center group-hover:border-[#3B82F6]/40 transition-colors">
                      {iconMap[cap.icon] || <Cpu className="w-5 h-5 text-[#3B82F6]" />}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#A3A3A3] group-hover:text-[#3B82F6] transition-colors">
                      {cap.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#F5F5F5] group-hover:text-[#3B82F6] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs font-mono text-[#94A3B8] mt-1">
                      {cap.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[#CBD5E1] leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                {/* Bottom: Tech tags & Deliverables */}
                <div className="pt-6 mt-6 border-t border-[#222222] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono bg-[#171717] text-[#CBD5E1] border border-[#2E2E2E] rounded group-hover:border-[#3E3E3E]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] pt-1">
                    <span>{language === 'fr' ? 'Livrables clés :' : 'Key deliverables:'}</span>
                    <span className="text-[#F5F5F5]">{cap.keyOutputs.join(' • ')}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
