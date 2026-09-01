'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { CommandPalette } from '@/components/CommandPalette';
import { getPortfolioData } from '@/data/portfolioData';
import { Project } from '@/types';
import { ArrowLeft, Sparkles } from 'lucide-react';

function ProjectsContent() {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { featuredProjects } = data;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleOpenCommand = () => setCommandPaletteOpen(true);
    window.addEventListener('open-command-palette', handleOpenCommand);
    return () => window.removeEventListener('open-command-palette', handleOpenCommand);
  }, []);

  const categories = language === 'fr' ? [
    { id: 'all', label: 'Tous les Projets (9)' },
    { id: 'tier-flagship', label: '⚡ Signatures & IA (3)' },
    { id: 'tier-production', label: '🟢 En Ligne · Production (3)' },
    { id: 'tier-lab', label: '🧪 Systèmes Métier & Lab (3)' },
  ] : [
    { id: 'all', label: 'All Projects (9)' },
    { id: 'tier-flagship', label: '⚡ Flagship & AI (3)' },
    { id: 'tier-production', label: '🟢 Live · Production (3)' },
    { id: 'tier-lab', label: '🧪 Domain & Lab (3)' },
  ];

  const filteredProjects = [...featuredProjects]
    .filter((project) => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'tier-flagship') return project.projectTier === 'flagship';
      if (selectedCategory === 'tier-production') return project.projectTier === 'production';
      if (selectedCategory === 'tier-lab') return project.projectTier === 'lab';
      return true;
    })
    .sort((a, b) => {
      // Prioritize projects with real screenshots
      if (a.screenshotUrl && !b.screenshotUrl) return -1;
      if (!a.screenshotUrl && b.screenshotUrl) return 1;
      return 0;
    });

  return (
    <main className="relative bg-[#0A0A0A] min-h-screen text-[#F5F5F5]">
      {/* Top Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      <section className="pt-32 pb-24 border-b border-[#1C1C1C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Breadcrumb / Back Link */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] hover:border-[#3B82F6]/50 text-xs font-mono text-[#A3A3A3] hover:text-[#F5F5F5] transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#3B82F6] group-hover:-translate-x-1 transition-transform" />
              <span>{language === 'fr' ? '← Retour à l’accueil' : '← Back to Home'}</span>
            </Link>
          </div>

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1C1C1C]">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-xs font-mono text-[#3B82F6]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'fr' ? '// ARCHIVES & CATALOGUE COMPLET' : '// FULL PROJECT ARCHIVE'}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-[#F5F5F5] tracking-tight">
                {language === 'fr' ? 'Tous les Projets & Systèmes' : 'All Projects & Systems'}
              </h1>
              <p className="text-sm font-mono text-[#A3A3A3] max-w-2xl">
                {language === 'fr'
                  ? 'Catalogue exhaustif des 9 architectures et produits développés, couvrant la santé, la FinTech, l’EdTech, le sport et l’IA.'
                  : 'Complete catalog of all 9 architectures and platforms engineered across Healthcare, FinTech, EdTech, Sports, and AI.'}
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
                      : 'text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#171717]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onSelect={(p) => setActiveProjectModal(p)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={(proj) => setActiveProjectModal(proj)}
      />

      {/* Global Project Case Study Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <LanguageProvider>
      <ProjectsContent />
    </LanguageProvider>
  );
}
