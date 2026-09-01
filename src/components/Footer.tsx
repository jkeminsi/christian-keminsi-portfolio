'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personalInfo } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1C1C1C] bg-[#0A0A0A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1C1C1C]">
          
          {/* Left Brand info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-mono text-sm font-bold text-[#F5F5F5]">
              {personalInfo.name}
            </div>
            <div className="text-xs font-mono text-[#737373]">
              {personalInfo.title} · {personalInfo.focus}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#A3A3A3]">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B82F6] transition-colors"
            >
              GitHub
            </a>
            <span className="text-[#333333]">/</span>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B82F6] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#333333]">/</span>
            <a
              href={`mailto:${personalInfo.links.email}`}
              className="hover:text-[#3B82F6] transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] text-xs font-mono text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
          >
            <span>{personalInfo.ui.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737373]">
          <div>
            © {new Date().getFullYear()} Christian Jordan Keminsi. {personalInfo.ui.footer.rights}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] status-dot-pulse" />
            <span className="text-[#10B981]">{personalInfo.ui.footer.status}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
