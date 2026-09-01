'use client';

import React, { useState } from 'react';
import { Project } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { getAssetUrl } from '@/lib/utils';
import {
  Sparkles,
  ArrowRight,
  Github,
  Globe,
  ChevronDown,
  ChevronUp,
  Brain,
  Radio,
  CreditCard,
  Pill,
  GraduationCap,
  Trophy,
  BookOpen,
  Briefcase,
  Cpu,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const numString = String(index + 1).padStart(2, '0');

  // Statut badge styling
  const isSignature = project.isSignature;
  const isLive = project.projectTier === 'production';

  // Specific domain icon for projects without live screenshot
  const getProjectIcon = () => {
    switch (project.id) {
      case 'bacterial-resistance-ai':
        return <Brain className="w-6 h-6 text-[#60A5FA]" />;
      case 'afos-sports-platform':
        return <Radio className="w-6 h-6 text-[#3B82F6]" />;
      case 'mesdoh-fintech':
        return <CreditCard className="w-6 h-6 text-[#38BDF8]" />;
      case 'pharmaproxi-health':
        return <Pill className="w-6 h-6 text-[#34D399]" />;
      case 'education-management':
        return <GraduationCap className="w-6 h-6 text-[#818CF8]" />;
      case 'football-talent-platform':
        return <Trophy className="w-6 h-6 text-[#FBBF24]" />;
      case 'citis-formation':
      case 'royal-high-school-nyom':
        return <BookOpen className="w-6 h-6 text-[#10B981]" />;
      case 'gestplus-platform':
        return <Briefcase className="w-6 h-6 text-[#10B981]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#3B82F6]" />;
    }
  };

  return (
    <div
      className={`group relative rounded-xl bg-[#111111] border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isSignature
          ? 'border-[#3B82F6]/60 shadow-[0_0_30px_-10px_rgba(59,130,246,0.25)] bg-gradient-to-b from-[#131722] to-[#111111]'
          : isLive
          ? 'border-[#10B981]/40 hover:border-[#10B981]/80 hover:bg-[#131714] bg-gradient-to-b from-[#111613] to-[#111111]'
          : 'border-[#262626] hover:border-[#3B82F6]/40 hover:bg-[#141414]'
      }`}
    >
      <div className="p-5 sm:p-6 space-y-4">
        
        {/* 1. Top Bar: 3 Badges Maximum (Statut, Catégorie, 1 Techno Clé) */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#A3A3A3]">
              {numString}
            </span>
            <span className="text-[#3E3E3E]">/</span>
            {/* Badge 1: Catégorie */}
            <span className="text-xs font-mono text-[#3B82F6] font-medium uppercase tracking-wider">
              {project.categoryLabel}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Badge 2: Statut */}
            {isSignature ? (
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/40 text-[#60A5FA] text-[11px] font-mono font-medium">
                <Sparkles className="w-3 h-3" />
                <span>{language === 'fr' ? 'Signature IA' : 'Signature AI'}</span>
              </div>
            ) : isLive ? (
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-[11px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] status-dot-pulse" />
                <span>{language === 'fr' ? 'En Ligne' : 'Live'}</span>
              </div>
            ) : (
              <span className="text-[11px] font-mono text-[#A3A3A3] bg-[#171717] px-2 py-0.5 rounded border border-[#2E2E2E]">
                {project.badge}
              </span>
            )}

            {/* Badge 3: 1 Techno clé */}
            <span className="px-2 py-0.5 text-[11px] font-mono bg-[#171717] text-[#CBD5E1] border border-[#2E2E2E] rounded">
              {project.keyTech}
            </span>
          </div>
        </div>

        {/* 2. Visual Proof: 16:9 Desktop Screenshot or Styled Domain Mockup Placeholder */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-[#151515] border border-[#262626] flex flex-col justify-between p-3.5 sm:p-4 group-hover:border-[#3B82F6]/40 transition-colors">
          {project.screenshotUrl ? (
            <img
              src={getAssetUrl(project.screenshotUrl)}
              alt={project.screenshotAlt}
              loading="lazy"
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <div className="h-full flex flex-col justify-between">
              {/* Window Controls Top Header */}
              <div className="flex items-center justify-between border-b border-[#222222] pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]/60" />
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]/60" />
                  <span className="w-2 h-2 rounded-full bg-[#10B981]/60" />
                  <span className="ml-1 text-[10px] font-mono text-[#94A3B8] hidden sm:inline">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}.local
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8]">
                  Ratio 16:9 Desktop
                </span>
              </div>

              {/* Central Icon & Clean Architectural Info */}
              <div className="text-center p-2 space-y-1.5 flex flex-col items-center justify-center my-auto">
                <div className="w-12 h-12 rounded-xl bg-[#1D1D1D] border border-[#2E2E2E] flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-[#3B82F6]/50 transition-all">
                  {getProjectIcon()}
                </div>
                <div className="font-mono text-xs font-bold text-[#F5F5F5] tracking-tight">
                  {project.title}
                </div>
                <p className="text-[11px] font-mono text-[#CBD5E1] line-clamp-2 max-w-sm leading-tight">
                  {project.shortSubtitle}
                </p>
              </div>

              {/* Bottom Footer Info */}
              <div className="flex items-center justify-between border-t border-[#222222] pt-2 text-[10px] font-mono text-[#94A3B8]">
                <span>{project.keyTech}</span>
                <span className="text-[#3B82F6]">Architecture & Core System</span>
              </div>
            </div>
          )}
        </div>

        {/* 3. Metric Line under Screenshot: "[Résultat chiffré] — [contexte court]" */}
        <div className="p-2.5 rounded-lg bg-[#141414] border border-[#242424] flex items-start gap-2 text-xs font-mono">
          <span className="text-[#3B82F6] font-bold mt-0.5">↳</span>
          <div className="text-[#F5F5F5] font-medium leading-snug">
            {project.metricLine}
          </div>
        </div>

        {/* 4. Title and 2-Line Visible Description with Toggle */}
        <div className="space-y-2">
          <h3
            onClick={() => onSelect(project)}
            className="text-lg sm:text-xl font-bold text-[#F5F5F5] group-hover:text-[#3B82F6] cursor-pointer transition-colors"
          >
            {project.title}
          </h3>

          <div className="space-y-1.5">
            <p
              className={`text-xs sm:text-sm text-[#A3A3A3] leading-relaxed transition-all ${
                isExpanded ? '' : 'line-clamp-2'
              }`}
            >
              {project.summary || project.description}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#3B82F6] hover:text-[#60A5FA] transition-colors focus:outline-none"
            >
              <span>{isExpanded ? (language === 'fr' ? 'Voir moins' : 'Show less') : (language === 'fr' ? 'Voir plus' : 'Show more')}</span>
              {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
        </div>

      </div>

      {/* 5. Card Footer: Direct CTAs */}
      <div className="p-5 sm:p-6 pt-4 border-t border-[#222222] flex items-center justify-between gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#10B981] hover:bg-[#059669] text-black font-mono text-xs font-bold transition-all shadow-[0_0_12px_rgba(16,185,129,0.3)]"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Voir le site en direct ↗' : 'View Live ↗'}</span>
          </a>
        ) : (
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#3B82F6] hover:text-[#60A5FA] transition-colors group/btn"
          >
            <span>{language === 'fr' ? 'Détails & Architecture' : 'Inspect Details'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        )}

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <button
              onClick={() => onSelect(project)}
              className="p-1.5 rounded bg-[#171717] hover:bg-[#222222] border border-[#2E2E2E] text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors text-xs font-mono"
              title={language === 'fr' ? 'Inspecter les détails' : 'Inspect Details'}
            >
              ℹ️
            </button>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded bg-[#171717] border border-[#262626] text-[#A3A3A3] hover:text-[#F5F5F5] hover:border-[#3B82F6]/50 transition-all"
              aria-label={`View ${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
