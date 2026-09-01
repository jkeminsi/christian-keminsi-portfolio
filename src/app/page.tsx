'use client';

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Expertise } from '@/components/Expertise';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';
import { ProjectModal } from '@/components/ProjectModal';
import { Project } from '@/types';

function PortfolioApp() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleOpenCommand = () => setCommandPaletteOpen(true);
    window.addEventListener('open-command-palette', handleOpenCommand);
    return () => window.removeEventListener('open-command-palette', handleOpenCommand);
  }, []);

  return (
    <main className="relative bg-[#0A0A0A] min-h-screen text-[#F5F5F5]">
      {/* Top Navbar with Language Switcher */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* 1. Hero Section (Positionnement unique & 1 CTA) */}
      <Hero />

      {/* 2. 4 Projets Phares */}
      <FeaturedProjects />

      {/* 3. Capacités d'Ingénierie (3 cards consolidées) */}
      <Expertise />

      {/* 4. Contact & Transmission (1 CTA) */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Global Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={(proj) => setActiveModalProject(proj)}
      />

      {/* Global Project Case Study Modal (when triggered via Command Palette) */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
