'use client';

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Expertise } from '@/components/Expertise';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { HowIBuild } from '@/components/HowIBuild';
import { EngineeringLab } from '@/components/EngineeringLab';
import { TechStack } from '@/components/TechStack';
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

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About & Profile */}
      <About />

      {/* 3. Engineering Capabilities & Expertise */}
      <Expertise />

      {/* 4. Featured Case Studies & Projects */}
      <FeaturedProjects />

      {/* 5. How I Build (Pipeline) */}
      <HowIBuild />

      {/* 6. Architecture & Engineering Lab */}
      <EngineeringLab />

      {/* 7. Curated Tech Stack */}
      <TechStack />

      {/* 8. Contact & Transmission */}
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
