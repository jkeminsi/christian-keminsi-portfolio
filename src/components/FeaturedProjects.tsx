'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '@/types';
import { Sparkles, Globe, Cpu, Layers } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { featuredProjects, personalInfo } = data;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = language === 'fr' ? [
    { id: 'all', label: 'Tous les Projets (9)' },
    { id: 'tier-flagship', label: '⚡ Signatures & IA' },
    { id: 'tier-production', label: '🟢 En Ligne · Production' },
    { id: 'tier-lab', label: '🧪 Systèmes Métier & Lab' },
  ] : [
    { id: 'all', label: 'All Projects (9)' },
    { id: 'tier-flagship', label: '⚡ Flagship & AI' },
    { id: 'tier-production', label: '🟢 Live · Production' },
    { id: 'tier-lab', label: '🧪 Domain & Lab' },
  ];

  // Tier groupings
  const flagshipProjects = featuredProjects.filter((p) => p.projectTier === 'flagship');
  const productionProjects = featuredProjects.filter((p) => p.projectTier === 'production');
  const labProjects = featuredProjects.filter((p) => p.projectTier === 'lab');

  return (
    <section id="projects" className="py-24 border-t border-[#1C1C1C] relative">
      {/* Background glow behind featured project */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#1C1C1C]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-xs font-mono text-[#3B82F6]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{personalInfo.ui.caseStudies.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
              {personalInfo.ui.caseStudies.title}
            </h2>
            <p className="text-sm font-mono text-[#737373] max-w-xl">
              {personalInfo.ui.caseStudies.subtitle}
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111111] border border-[#262626] rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#1F1F1F] text-[#3B82F6] font-semibold border border-[#3B82F6]/30 shadow-sm'
                    : 'text-[#737373] hover:text-[#D4D4D4] hover:bg-[#171717]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─────────────── TIER 1: SELECTED WORK (Flagship & AI) ─────────────── */}
        {(selectedCategory === 'all' || selectedCategory === 'tier-flagship') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>{personalInfo.ui.caseStudies.tier1Title}</span>
                </div>
                <p className="text-xs text-[#737373] font-mono">
                  {personalInfo.ui.caseStudies.tier1Subtitle}
                </p>
              </div>
              <span className="text-xs font-mono text-[#737373] hidden sm:inline">01 — 03</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flagshipProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onSelect={(p) => setActiveProjectModal(p)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ─────────────── TIER 2: CLIENT & PRODUCTION WORK (Live Online) ─────────────── */}
        {(selectedCategory === 'all' || selectedCategory === 'tier-production') && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#10B981]/30">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                  <Globe className="w-4 h-4" />
                  <span>{personalInfo.ui.caseStudies.tier2Title}</span>
                </div>
                <p className="text-xs text-[#737373] font-mono">
                  {personalInfo.ui.caseStudies.tier2Subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] status-dot-pulse" />
                <span className="text-xs font-mono text-[#10B981] font-bold">Live Deployments</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productionProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx + 3}
                  onSelect={(p) => setActiveProjectModal(p)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ─────────────── TIER 3: OTHER PROJECTS & SYSTEMS LAB ─────────────── */}
        {(selectedCategory === 'all' || selectedCategory === 'tier-lab') && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#A3A3A3] uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>{personalInfo.ui.caseStudies.tier3Title}</span>
                </div>
                <p className="text-xs text-[#737373] font-mono">
                  {personalInfo.ui.caseStudies.tier3Subtitle}
                </p>
              </div>
              <span className="text-xs font-mono text-[#737373] hidden sm:inline">07 — 09</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx + 6}
                  onSelect={(p) => setActiveProjectModal(p)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#111111] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-mono font-semibold text-[#F5F5F5]">
              {personalInfo.ui.caseStudies.lookingForSource}
            </div>
            <div className="text-xs text-[#737373]">
              {personalInfo.ui.caseStudies.lookingForSourceSub}
            </div>
          </div>
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-mono bg-[#171717] hover:bg-[#222222] text-[#F5F5F5] border border-[#2E2E2E] rounded-lg transition-colors shrink-0"
          >
            {personalInfo.ui.caseStudies.exploreRepos}
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
