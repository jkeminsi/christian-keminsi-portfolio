'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { ArrowRight, Github, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personalInfo } = data;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-grid-tech">
      {/* Subtle radial glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[250px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status & Availability Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#262626] shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-[#F5F5F5] font-medium tracking-tight">
                {personalInfo.status.text}
              </span>
              <span className="text-[#3B3B3B] text-xs">|</span>
              <span className="text-[11px] font-mono text-[#A3A3A3] hidden sm:inline">
                {personalInfo.status.subtext}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base font-mono text-[#3B82F6] font-medium tracking-wide">
                {personalInfo.heroHeadline.greeting}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-[1.14]">
                {personalInfo.heroHeadline.part1} <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#E2E8F0] to-[#94A3B8]">
                  {personalInfo.heroHeadline.part1Highlight}
                </span>
                ,<br />
                {personalInfo.heroHeadline.part2} <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]">
                  {personalInfo.heroHeadline.part2Highlight}
                </span>
                .
              </h1>
            </div>

            {/* Sub-Headline / Roles */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-[#A3A3A3] font-normal leading-relaxed max-w-2xl">
                {personalInfo.heroSub}
              </p>

              {/* Roles Badge List */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {personalInfo.heroPills.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono bg-[#141414] text-[#D4D4D4] border border-[#262626] rounded-md"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white font-mono text-sm font-semibold shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all transform hover:-translate-y-0.5"
              >
                <span>{personalInfo.ui.exploreWork}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] hover:border-[#3B82F6]/50 text-[#F5F5F5] font-mono text-sm font-medium transition-all transform hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4 text-[#A3A3A3]" />
                <span>{personalInfo.ui.viewGithub}</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#1F1F1F]">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#F5F5F5] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#737373] font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Column: Interactive Engineering Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl bg-[#111111] border border-[#262626] shadow-2xl p-5 overflow-hidden hairline-border-hover group">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                  <span className="ml-2 font-mono text-xs text-[#737373]">engineer@keminsi-core:~</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-0.5 rounded border border-[#3B82F6]/20">
                  <Sparkles className="w-3 h-3" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Code / System View */}
              <div className="py-4 space-y-4 font-mono text-xs">
                
                {/* Active Architecture Badge */}
                <div className="p-3 rounded-lg bg-[#171717] border border-[#262626] space-y-2">
                  <div className="flex items-center justify-between text-[#A3A3A3]">
                    <span className="text-[#3B82F6] font-semibold">// TOPOLOGIE SYSTÈME</span>
                    <span className="text-[10px] text-[#10B981]">STATUT: OPTIMAL</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="p-2 rounded bg-[#0D0D0D] border border-[#242424]">
                      <div className="text-[10px] text-[#737373]">FRONTEND</div>
                      <div className="font-bold text-[#F5F5F5] text-[11px]">Next / Angular</div>
                    </div>
                    <div className="p-2 rounded bg-[#0D0D0D] border border-[#242424]">
                      <div className="text-[10px] text-[#737373]">BACKEND</div>
                      <div className="font-bold text-[#3B82F6] text-[11px]">FastAPI / Node</div>
                    </div>
                    <div className="p-2 rounded bg-[#0D0D0D] border border-[#242424]">
                      <div className="text-[10px] text-[#737373]">INTELLIGENCE</div>
                      <div className="font-bold text-[#10B981] text-[11px]">Scikit / XGB</div>
                    </div>
                  </div>
                </div>

                {/* Live Output Simulation */}
                <div className="space-y-1.5 text-[#A3A3A3] text-[11px]">
                  <div className="flex items-center gap-2 text-[#737373]">
                    <span>$</span>
                    <span className="text-[#F5F5F5]">keminsi-cli verify --stack full</span>
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'fr' ? 'Architecture Domaine : Scalable & Modulaire' : 'Domain Architecture: Scalable & Modular'}</span>
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'fr' ? 'Pipeline ML : Validé Seuils EUCAST' : 'ML Pipeline: EUCAST Breakpoints Validated'}</span>
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'fr' ? 'Résilience : Synchronisation Offline-First' : 'Data Resilience: Offline-First SQLite Sync'}</span>
                  </div>
                </div>

                {/* Highlight card */}
                <div className="pt-2 border-t border-[#222222]">
                  <div className="flex items-center justify-between text-[11px] text-[#737373]">
                    <span>{language === 'fr' ? 'CYCLE : Du cadrage au déploiement' : 'STATUS: 0 to 1 Lifecycle Execution'}</span>
                    <span className="text-[#3B82F6]">v2.4.0</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
