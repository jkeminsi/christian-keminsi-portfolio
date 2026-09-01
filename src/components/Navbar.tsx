'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { Menu, X, Search, Github, Linkedin, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const { language, setLanguage } = useLanguage();
  const data = getPortfolioData(language);
  const { personalInfo } = data;

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['projects', 'expertise', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: personalInfo.ui.nav.work, href: '/#projects', id: 'projects' },
    { name: personalInfo.ui.nav.expertise, href: '/#expertise', id: 'expertise' },
    { name: personalInfo.ui.nav.contact, href: '/#contact', id: 'contact' },
    { name: language === 'fr' ? 'Tous les Projets (9)' : 'All Projects (9)', href: '/projets', id: 'all-projects' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626]/80 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-wider text-[#F5F5F5] hover:text-[#3B82F6] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-[#171717] border border-[#262626] flex items-center justify-center group-hover:border-[#3B82F6]/50 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all">
            <span className="font-mono text-xs text-[#3B82F6] font-bold">CK</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-tight text-[#F5F5F5]">
              {personalInfo.shortName}
            </span>
            <span className="text-[10px] text-[#A3A3A3] font-mono tracking-widest uppercase hidden sm:inline">
              Full-Stack & Systems
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111111]/90 border border-[#262626] px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1 text-xs font-mono transition-all rounded-full ${
                  isActive
                    ? 'bg-[#1F1F1F] text-[#3B82F6] font-semibold border border-[#3B82F6]/30'
                    : 'text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#171717]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Status Badge & Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher Toggle */}
          <div className="flex items-center bg-[#111111] border border-[#262626] rounded-lg p-0.5 font-mono text-xs">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 rounded-md transition-all font-semibold ${
                language === 'fr'
                  ? 'bg-[#1F1F1F] text-[#3B82F6] border border-[#3B82F6]/40 shadow-sm'
                  : 'text-[#CBD5E1] hover:text-[#F5F5F5]'
              }`}
              title="Passer en Français (par défaut)"
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-md transition-all font-semibold ${
                language === 'en'
                  ? 'bg-[#1F1F1F] text-[#3B82F6] border border-[#3B82F6]/40 shadow-sm'
                  : 'text-[#CBD5E1] hover:text-[#F5F5F5]'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Quick Search / Cmd+K */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-2.5 py-1 text-xs font-mono text-[#CBD5E1] bg-[#111111] hover:bg-[#171717] border border-[#262626] rounded-md transition-colors group"
            title="Open Command Palette (Ctrl+K / Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#3B82F6]" />
            <span className="hidden xl:inline text-[11px]">{personalInfo.ui.quickSearch}</span>
            <kbd className="text-[10px] bg-[#1F1F1F] text-[#CBD5E1] px-1.5 py-0.5 rounded border border-[#2E2E2E]">
              ⌘K
            </kbd>
          </button>

          {/* Availability Status */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30">
            <span className="w-2 h-2 rounded-full bg-[#10B981] status-dot-pulse" />
            <span className="text-[11px] font-mono font-medium text-[#10B981]">
              {personalInfo.ui.available}
            </span>
          </div>

          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md bg-[#111111] border border-[#262626] text-[#CBD5E1] hover:text-[#F5F5F5] hover:border-[#3B82F6]/50 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu trigger & Lang toggle */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center bg-[#111111] border border-[#262626] rounded-md p-0.5 font-mono text-xs">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2 py-0.5 rounded text-[11px] ${
                language === 'fr' ? 'bg-[#1F1F1F] text-[#3B82F6] font-bold' : 'text-[#CBD5E1]'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded text-[11px] ${
                language === 'en' ? 'bg-[#1F1F1F] text-[#3B82F6] font-bold' : 'text-[#CBD5E1]'
              }`}
            >
              EN
            </button>
          </div>

          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-lg bg-[#111111] border border-[#262626] text-[#A3A3A3]"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#111111] border border-[#262626] text-[#A3A3A3] hover:text-[#F5F5F5]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#262626] bg-[#0E0E0E]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] status-dot-pulse" />
              <span className="text-xs font-mono text-[#10B981]">{personalInfo.status.text}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-mono text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#171717] rounded-md border border-transparent hover:border-[#262626] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-[#222222]">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-mono bg-[#171717] border border-[#262626] rounded-md text-[#F5F5F5]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-mono bg-[#171717] border border-[#262626] rounded-md text-[#F5F5F5]"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
