'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personalInfo } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: language === 'fr' ? 'Accueil' : 'Home', href: '/' },
    { label: personalInfo.ui.nav.work, href: '/#projects' },
    { label: language === 'fr' ? 'Tous les Projets (9)' : 'All Projects (9)', href: '/projets' },
    { label: personalInfo.ui.nav.expertise, href: '/#expertise' },
    { label: personalInfo.ui.nav.contact, href: '/#contact' },
  ];

  return (
    <footer className="border-t border-[#1C1C1C] bg-[#0A0A0A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer: Brand, Nav & Socials */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#1C1C1C]">
          
          {/* Left Brand info */}
          <div className="space-y-1">
            <Link
              href="/"
              className="font-mono text-base font-bold text-[#F5F5F5] hover:text-[#3B82F6] transition-colors"
            >
              {personalInfo.name}
            </Link>
            <div className="text-xs font-mono text-[#CBD5E1]">
              {personalInfo.title} · {personalInfo.focus}
            </div>
          </div>

          {/* Internal Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#CBD5E1]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#3B82F6] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] text-[#CBD5E1] hover:text-[#F5F5F5] hover:border-[#3B82F6]/50 transition-all"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] text-[#CBD5E1] hover:text-[#3B82F6] hover:border-[#3B82F6]/50 transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.links.email}`}
              className="p-2 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] text-[#CBD5E1] hover:text-[#3B82F6] hover:border-[#3B82F6]/50 transition-all"
              aria-label="Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] text-xs font-mono text-[#CBD5E1] hover:text-[#F5F5F5] transition-colors ml-2"
              title={personalInfo.ui.footer.backToTop}
            >
              <span className="hidden sm:inline">{personalInfo.ui.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#3B82F6]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A3A3A3]">
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
