'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '@/types';
import { Sparkles, ArrowRight } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { featuredProjects, personalInfo } = data;

  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // 4 projets phares retenus pour la vitrine principale
  const selectedProjectIds = [
    'bacterial-resistance-ai',
    'afos-sports-platform',
    'mesdoh-fintech',
    'citis-formation',
  ];

  const primaryProjects = selectedProjectIds
    .map((id) => featuredProjects.find((p) => p.id === id))
    .filter((p): p is Project => Boolean(p));

  return (
    <section id="projects" className="py-24 border-t border-[#1C1C1C] relative">
      {/* Background glow behind featured project */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#1C1C1C]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-xs font-mono text-[#3B82F6]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? '// PROJETS PHARES & RÉALISATIONS' : '// FEATURED PROJECTS & CASE STUDIES'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
              {language === 'fr' ? 'Sélection de Projets Phares' : 'Selected Flagship Projects'}
            </h2>
            <p className="text-sm font-mono text-[#A3A3A3] max-w-2xl">
              {language === 'fr'
                ? 'Architectures logicielles complètes, modèles de décision IA, synchronisation distribuée et plateformes déployées.'
                : 'Full-stack software architectures, applied AI decision models, distributed offline-first sync, and production platforms.'}
            </p>
          </div>

          <Link
            href="/projets"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] hover:border-[#3B82F6]/50 text-xs font-mono text-[#F5F5F5] transition-all group shrink-0"
          >
            <span>{language === 'fr' ? 'Voir tous les projets (9)' : 'View all projects (9)'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {primaryProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => setActiveProjectModal(p)}
            />
          ))}
        </div>

        {/* Bottom Navigation CTA towards /projets */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between p-6 rounded-xl bg-[#111111] border border-[#262626] gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-mono font-semibold text-[#F5F5F5]">
              {language === 'fr' ? 'Explorer l’ensemble des architectures et systèmes métier' : 'Explore all domain architectures and specialized systems'}
            </div>
            <div className="text-xs text-[#A3A3A3]">
              {language === 'fr'
                ? 'Accédez au catalogue complet des 9 projets incluant la santé géolocalisée, l’éducation et les médias sportifs.'
                : 'Access the complete catalog of 9 projects spanning geolocation health, edtech, and sports media.'}
            </div>
          </div>
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white font-mono text-xs font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all shrink-0"
          >
            <span>{language === 'fr' ? 'Voir tous les projets →' : 'View all projects →'}</span>
          </Link>
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
