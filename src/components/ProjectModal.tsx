'use client';

import React, { useEffect } from 'react';
import { Project } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { X, Github, Sparkles, CheckCircle2, Cpu, ExternalLink, Globe } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);

  // If project exists, find the matching localized project from the current language dataset
  const localizedProject = project
    ? data.featuredProjects.find((p) => p.id === project.id) || project
    : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (localizedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [localizedProject, onClose]);

  if (!localizedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content Window */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-[#262626] rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#141414]/95 backdrop-blur-md border-b border-[#222222] p-6 flex items-start justify-between z-20">
          <div className="space-y-1.5 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#1F1F1F] text-xs font-mono text-[#3B82F6] border border-[#2E2E2E]">
                {localizedProject.categoryLabel}
              </span>
              {localizedProject.isSignature && (
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#3B82F6]/20 text-xs font-mono text-[#60A5FA] border border-[#3B82F6]/40">
                  <Sparkles className="w-3 h-3" />
                  <span>{language === 'fr' ? 'Projet Signature' : 'Signature Project'}</span>
                </span>
              )}
              {localizedProject.projectTier === 'production' && (
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#10B981]/20 text-xs font-mono text-[#10B981] border border-[#10B981]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] status-dot-pulse" />
                  <span>{language === 'fr' ? 'En Ligne · Production' : 'Live · Production'}</span>
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] tracking-tight">
              {localizedProject.title}
            </h2>
            <p className="text-sm font-mono text-[#A3A3A3]">
              {localizedProject.shortSubtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-[#2E2E2E] text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 text-sm">
          
          {/* Confirmed Role Bar */}
          {localizedProject.role && (
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#737373]">{language === 'fr' ? 'Rôle confirmé sur ce projet :' : 'Confirmed Role:'}</span>
                <span className="text-[#3B82F6] font-bold">{localizedProject.role}</span>
              </div>
              {localizedProject.liveUrl && (
                <a
                  href={localizedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-[#10B981] hover:bg-[#059669] text-black font-mono text-xs font-bold transition-colors inline-flex items-center gap-1"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{language === 'fr' ? 'Ouvrir le site ↗' : 'View Live ↗'}</span>
                </a>
              )}
            </div>
          )}

          {/* Key Metrics Bar */}
          {localizedProject.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#171717] border border-[#262626]">
              {localizedProject.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-[11px] font-mono text-[#737373] uppercase">{m.label}</div>
                  <div className="text-base sm:text-lg font-mono font-bold text-[#3B82F6]">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* System Overview */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase text-[#3B82F6] font-semibold tracking-wider">
              {language === 'fr' ? '// 01. Problématique & Contexte Produit' : '// 01. Problem & Product Context'}
            </h3>
            <p className="text-[#A3A3A3] text-base leading-relaxed">
              {localizedProject.problem}
            </p>
          </div>

          {/* Solution & Engineering */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase text-[#3B82F6] font-semibold tracking-wider">
              {language === 'fr' ? '// 02. Solution Développée' : '// 02. Solution & Engineering'}
            </h3>
            <p className="text-[#F5F5F5] text-base leading-relaxed">
              {localizedProject.solution}
            </p>
          </div>

          {/* System Schema / Topology */}
          {localizedProject.systemSchema && (
            <div className="space-y-3 p-5 rounded-xl bg-[#0D0D0D] border border-[#222222]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#3B82F6]" />
                  <span className="text-xs font-mono font-semibold text-[#F5F5F5]">
                    {localizedProject.systemSchema.title}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#737373] hidden sm:inline">
                  {language === 'fr' ? 'Topologie Interactive des Nœuds' : 'Interactive Node Map'}
                </span>
              </div>
              <div className="text-xs font-mono text-[#737373] pb-2">
                {language === 'fr' ? 'Flux :' : 'Flow:'} <span className="text-[#A3A3A3]">{localizedProject.systemSchema.flow}</span>
              </div>

              {/* Visual Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
                {localizedProject.systemSchema.nodes.map((node) => (
                  <div
                    key={node.id}
                    className="p-3 rounded-lg bg-[#141414] border border-[#262626] text-center space-y-1"
                  >
                    <div className="text-[10px] font-mono uppercase text-[#3B82F6]">
                      {node.type}
                    </div>
                    <div className="text-xs font-bold font-mono text-[#F5F5F5] truncate">
                      {node.label}
                    </div>
                    <div className="text-[10px] text-[#737373] truncate">
                      {node.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase text-[#3B82F6] font-semibold tracking-wider">
              {language === 'fr' ? '// 03. Décisions Clés & Architecture' : '// 03. Key Architectural Decisions'}
            </h3>
            <div className="space-y-2">
              {localizedProject.architectureHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#141414] border border-[#222222]">
                  <span className="font-mono text-xs text-[#3B82F6] mt-0.5">[{idx + 1}]</span>
                  <span className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase text-[#3B82F6] font-semibold tracking-wider">
              {language === 'fr' ? '// 04. Fonctionnalités & Livrables' : '// 04. Core Capabilities & Deliverables'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {localizedProject.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded bg-[#141414] border border-[#1F1F1F]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#A3A3A3] leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase text-[#3B82F6] font-semibold tracking-wider">
              {language === 'fr' ? '// 05. Technologies & Écosystème' : '// 05. Technology & Tooling'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {localizedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-[#171717] text-[#F5F5F5] border border-[#262626] rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#141414]/95 backdrop-blur-md border-t border-[#222222] p-6 flex items-center justify-between z-20">
          <div className="text-xs font-mono text-[#737373]">
            {language === 'fr' ? 'Statut :' : 'Status:'}{' '}
            <span className="text-[#10B981]">
              {localizedProject.projectTier === 'production' ? (language === 'fr' ? 'Déployé en Production' : 'Production Live') : 'Production Ready'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {localizedProject.liveUrl && (
              <a
                href={localizedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono bg-[#10B981] hover:bg-[#059669] text-black font-bold rounded-lg transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'fr' ? 'Voir le site en direct ↗' : 'View Live Website ↗'}</span>
              </a>
            )}

            {localizedProject.githubUrl && (
              <a
                href={localizedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono bg-[#1C1C1C] hover:bg-[#262626] text-[#F5F5F5] border border-[#2E2E2E] rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{language === 'fr' ? 'Voir le Dépôt' : 'View Repository'}</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-lg transition-colors"
            >
              {language === 'fr' ? 'Fermer' : 'Close'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
