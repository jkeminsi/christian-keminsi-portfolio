'use client';

import React from 'react';
import { Project } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { Sparkles, ArrowRight, Github, ExternalLink, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personalInfo } = data;
  const numString = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`group relative rounded-xl bg-[#111111] border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        project.isSignature
          ? 'border-[#3B82F6]/60 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] bg-gradient-to-b from-[#141824] to-[#111111]'
          : project.projectTier === 'production'
          ? 'border-[#10B981]/40 hover:border-[#10B981]/80 hover:bg-[#131714] bg-gradient-to-b from-[#111613] to-[#111111]'
          : 'border-[#262626] hover:border-[#3B82F6]/40 hover:bg-[#141414]'
      }`}
    >
      {/* Top Bar: Number & Category Badge */}
      <div className="p-6 pb-0 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#737373]">
              {numString}
            </span>
            <span className="text-[#333333]">/</span>
            <span className="text-xs font-mono text-[#3B82F6] font-medium uppercase tracking-wider">
              {project.categoryLabel}
            </span>
          </div>

          {project.isSignature ? (
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/40 text-[#60A5FA] text-[11px] font-mono font-medium">
              <Sparkles className="w-3 h-3" />
              <span>{language === 'fr' ? 'Projet Signature' : 'Signature Project'}</span>
            </div>
          ) : project.projectTier === 'production' ? (
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] text-[11px] font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] status-dot-pulse" />
              <span>{language === 'fr' ? 'En Ligne · Live' : 'Live · Production'}</span>
            </div>
          ) : (
            <span className="text-[11px] font-mono text-[#737373] bg-[#171717] px-2 py-0.5 rounded border border-[#242424]">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title and Short Subtitle */}
        <div className="space-y-1.5">
          <h3
            onClick={() => onSelect(project)}
            className="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-[#3B82F6] cursor-pointer transition-colors"
          >
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#A3A3A3] line-clamp-2 leading-relaxed">
            {project.shortSubtitle}
          </p>
        </div>

        {/* Confirmed Role if present */}
        {project.role && (
          <div className="flex items-center gap-2 text-xs font-mono text-[#737373] bg-[#141414] px-2.5 py-1 rounded border border-[#222222]">
            <span className="text-[#A3A3A3]">{language === 'fr' ? 'Rôle :' : 'Role:'}</span>
            <span className="text-[#F5F5F5] font-semibold truncate">{project.role}</span>
          </div>
        )}

        {/* Key Architecture Highlights */}
        <div className="pt-2 space-y-2">
          <div className="text-[11px] font-mono text-[#737373] uppercase tracking-wider">
            {language === 'fr' ? 'Points Clés :' : 'Key Highlights:'}
          </div>
          <ul className="space-y-1.5">
            {project.architectureHighlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#D4D4D4] leading-snug">
                <span className="text-[#3B82F6] font-mono mt-0.5">›</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics Grid */}
        {project.metrics && (
          <div className="grid grid-cols-2 gap-2 pt-2">
            {project.metrics.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="p-2 rounded bg-[#0D0D0D] border border-[#222222]">
                <div className="text-[10px] text-[#737373] font-mono uppercase">{metric.label}</div>
                <div className="text-xs font-mono font-bold text-[#F5F5F5]">{metric.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer: Tech Tags & Action CTAs */}
      <div className="p-6 pt-5 mt-4 border-t border-[#222222] space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono bg-[#171717] text-[#A3A3A3] border border-[#262626] rounded group-hover:border-[#333333]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#737373] bg-[#141414] rounded">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action CTAs */}
        <div className="flex items-center justify-between pt-1 gap-2">
          {/* Primary View Live or Inspect Button */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#10B981] hover:bg-[#059669] text-black font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              <span>{personalInfo.ui.caseStudies.viewLiveButton}</span>
            </a>
          ) : (
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#3B82F6] hover:text-[#60A5FA] transition-colors group/btn"
            >
              <span>{personalInfo.ui.caseStudies.inspectButton}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          )}

          <div className="flex items-center gap-2">
            {/* Secondary inspect details if liveUrl exists */}
            {project.liveUrl && (
              <button
                onClick={() => onSelect(project)}
                className="p-1.5 rounded bg-[#171717] hover:bg-[#222222] border border-[#262626] text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors text-xs font-mono"
                title="Inspect Details"
              >
                ℹ️
              </button>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded bg-[#171717] border border-[#262626] text-[#737373] hover:text-[#F5F5F5] hover:border-[#3B82F6]/50 transition-all"
                aria-label={`View ${project.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
