'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { Search, CornerDownLeft } from 'lucide-react';
import { Project } from '@/types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { featuredProjects, personalInfo } = data;

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          const evt = new CustomEvent('open-command-palette');
          window.dispatchEvent(evt);
        }
      }

      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items = [
    ...featuredProjects.map((p) => ({
      id: `proj-${p.id}`,
      type: language === 'fr' ? 'Projet' : 'Project',
      title: p.title,
      subtitle: p.shortSubtitle,
      action: () => {
        onClose();
        onSelectProject(p);
      },
    })),
    {
      id: 'sec-projects',
      type: 'Section',
      title: language === 'fr' ? 'Projets Phares (Accueil)' : 'Featured Projects (Home)',
      subtitle: language === 'fr' ? 'Voir la sélection des 4 projets phares' : 'View the 4 selected flagship projects',
      action: () => {
        onClose();
        if (window.location.pathname !== '/') {
          window.location.href = '/#projects';
        } else {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      id: 'sec-all-projects',
      type: language === 'fr' ? 'Page' : 'Page',
      title: language === 'fr' ? 'Tous les Projets (Catalogue complet)' : 'All Projects (Full Catalog)',
      subtitle: language === 'fr' ? 'Consulter les 9 projets et études de cas' : 'Explore all 9 projects and case studies',
      action: () => {
        onClose();
        window.location.href = '/projets';
      },
    },
    {
      id: 'sec-expertise',
      type: 'Section',
      title: language === 'fr' ? 'Capacités d\'Ingénierie' : 'Engineering Capabilities',
      subtitle: language === 'fr' ? 'Product Engineering, Full-Stack Engineering, IA & Architecture' : 'Product Engineering, Full-Stack Engineering, AI & Architecture',
      action: () => {
        onClose();
        if (window.location.pathname !== '/') {
          window.location.href = '/#expertise';
        } else {
          document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      id: 'sec-contact',
      type: 'Section',
      title: language === 'fr' ? 'Contacter Christian' : 'Contact Christian',
      subtitle: language === 'fr' ? 'Envoyer un message direct ou copier l\'e-mail' : 'Send an inquiry or copy direct email',
      action: () => {
        onClose();
        if (window.location.pathname !== '/') {
          window.location.href = '/#contact';
        } else {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      id: 'link-github',
      type: language === 'fr' ? 'Externe' : 'External',
      title: language === 'fr' ? 'Profil GitHub' : 'View GitHub Profile',
      subtitle: 'github.com/jkeminsi',
      action: () => {
        window.open(personalInfo.links.github, '_blank');
        onClose();
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (idx: number) => {
    const item = filteredItems[idx];
    if (item) {
      item.action();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#262626] rounded-xl shadow-2xl overflow-hidden z-10">
        
        {/* Search input bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#222222] gap-3">
          <Search className="w-4 h-4 text-[#94A3B8]" />
          <input
            type="text"
            autoFocus
            placeholder={language === 'fr' ? 'Tapez une commande, un projet ou une section...' : 'Type a command, project, or section...'}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
              } else if (e.key === 'Enter') {
                e.preventDefault();
                handleSelect(selectedIndex);
              }
            }}
            className="w-full bg-transparent text-sm font-mono text-[#F5F5F5] placeholder-[#94A3B8] focus:outline-none"
          />
          <kbd className="text-[10px] bg-[#171717] text-[#CBD5E1] px-2 py-0.5 rounded border border-[#2E2E2E]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-[#CBD5E1]">
              {language === 'fr' ? `Aucun résultat trouvé pour "${query}".` : `No matches found for "${query}".`}
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(idx)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                    isSelected ? 'bg-[#1F1F1F] text-[#F5F5F5]' : 'text-[#A3A3A3] hover:bg-[#171717]'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span
                      className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${
                        item.type === 'Project' || item.type === 'Projet'
                          ? 'bg-[#3B82F6]/10 text-[#60A5FA] border-[#3B82F6]/30'
                          : item.type === 'Section'
                          ? 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30'
                          : 'bg-[#1C1C1C] text-[#CBD5E1] border-[#2A2A2A]'
                      }`}
                    >
                      {item.type}
                    </span>

                    <div className="truncate">
                      <div className="font-mono text-xs font-bold text-[#F5F5F5] truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#CBD5E1] truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <CornerDownLeft className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Command palette footer */}
        <div className="px-4 py-2 bg-[#0E0E0E] border-t border-[#222222] flex items-center justify-between text-[11px] font-mono text-[#CBD5E1]">
          <div className="flex items-center gap-3">
            <span>{language === 'fr' ? '↑↓ Naviguer' : '↑↓ Navigate'}</span>
            <span>{language === 'fr' ? '↵ Sélectionner' : '↵ Select'}</span>
            <span>{language === 'fr' ? 'ESC Fermer' : 'ESC Close'}</span>
          </div>
          <span className="text-[#3B82F6]">{language === 'fr' ? 'Recherche Rapide' : 'Quick Navigation'}</span>
        </div>

      </div>
    </div>
  );
};
