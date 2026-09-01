'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personalInfo } = data;

  const lifecycle = language === 'fr' ? [
    'Product thinking',
    'Systèmes UX/UI',
    'Architecture',
    'Frontend',
    'Backend',
    'Données & DB',
    'IA & ML',
    'Déploiement'
  ] : [
    'Product thinking',
    'UX/UI Systems',
    'Architecture',
    'Frontend',
    'Backend',
    'Data & DB',
    'AI & ML',
    'Deployment'
  ];

  const domains = language === 'fr' ? [
    { title: 'Santé & Diagnostic Clinique', desc: 'Prédictions ML génomiques & phénotypiques, validation EUCAST.' },
    { title: 'Technologies Sportives & Télémétrie', desc: 'Télémétrie de terrain offline-first, GPS et recrutement de club.' },
    { title: 'Écosystèmes Financiers & POS', desc: 'Grand livre double entrée, gestion de stocks et facturation PDF.' },
    { title: 'Systèmes Éducatifs & Académiques', desc: 'Calcul de moyennes à coefficients pondérés, plannings FullCalendar.' },
    { title: 'Intelligence Artificielle & Données', desc: 'Pipelines de classification supervisée, APIs d\'inférence temps réel.' }
  ] : [
    { title: 'Healthcare & Clinical Diagnostics', desc: 'Genomic & phenotypic ML predictions, EUCAST validation.' },
    { title: 'Sports Technology & Telemetry', desc: 'Offline-first pitch telemetry, GPS tracking, club scouting.' },
    { title: 'Financial & POS Ecosystems', desc: 'Double-entry transaction ledgers, inventory sync, PDF billing.' },
    { title: 'Academic & EdTech Systems', desc: 'Dynamic coefficient grading engines, FullCalendar scheduling.' },
    { title: 'Artificial Intelligence & Data', desc: 'Supervised classification pipelines, inference APIs, data flows.' }
  ];

  const values = language === 'fr' ? [
    {
      title: 'Architecturé pour la Scalabilité',
      desc: 'Frontières de domaine nettes, services découplés et normalisation rigoureuse des bases de données.'
    },
    {
      title: 'Résilience Offline-First',
      desc: 'Conception de systèmes fonctionnant sans interruption même lors de coupures réseau prolongées.'
    },
    {
      title: 'Intelligence Artificielle Concrète',
      desc: 'Intégration de modèles de Machine Learning résolvant de réels goulots d\'étranglement métier.'
    }
  ] : [
    {
      title: 'Architected for Scale',
      desc: 'Clean domain boundaries, decoupled services, and zero-compromise database normalization.'
    },
    {
      title: 'Offline-First Resilience',
      desc: 'Designing systems that continue operating seamlessly under unreliable network partitions.'
    },
    {
      title: 'Practical AI Integration',
      desc: 'Embedding machine learning models that solve genuine domain bottlenecks with low latency.'
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-[#1C1C1C] relative bg-[#0D0D0D]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-xs font-mono text-[#3B82F6]">
            <span>{language === 'fr' ? '// PROFIL & PHILOSOPHIE TECHNIQUE' : '// PROFILE & PHILOSOPHY'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
            {language === 'fr' 
              ? "Concevoir et développer des produits numériques complets."
              : "Building complete, high-impact digital products."}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#A3A3A3] text-base sm:text-lg leading-relaxed">
            <p className="text-[#F5F5F5] font-medium text-lg sm:text-xl leading-relaxed">
              {personalInfo.bio[0]}
            </p>
            
            <p>
              {personalInfo.bio[1]}
            </p>

            <p>
              {personalInfo.bio[2]}
            </p>

            {/* Product Lifecycle Stream */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono text-[#737373] uppercase tracking-wider">
                {language === 'fr' ? 'Maîtrise du Cycle de Vie Produit (0 à 1)' : 'Full Product Lifecycle Ownership'}
              </div>
              <div className="p-4 rounded-xl bg-[#111111] border border-[#262626] space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  {lifecycle.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className="px-2.5 py-1 text-xs font-mono bg-[#171717] text-[#F5F5F5] border border-[#2E2E2E] rounded">
                        {step}
                      </span>
                      {idx < lifecycle.length - 1 && (
                        <span className="text-[#3B82F6] font-mono text-xs font-bold">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm font-mono text-[#737373] pt-2">
              {personalInfo.bio[4]}
            </p>
          </div>

          {/* Right Column: Domains & Technical Values */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Multi-Domain Expertise Box */}
            <div className="p-5 rounded-xl bg-[#111111] border border-[#262626] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
                <span className="text-xs font-mono font-semibold text-[#F5F5F5] uppercase tracking-wider">
                  {language === 'fr' ? 'Expérience Multi-Domaines' : 'Domain Experience'}
                </span>
                <span className="text-xs font-mono text-[#3B82F6]">
                  {language === 'fr' ? 'Multi-Disciplinaire' : 'Multi-Disciplinary'}
                </span>
              </div>
              <div className="space-y-3">
                {domains.map((dom, idx) => (
                  <div key={idx} className="group p-3 rounded-lg bg-[#141414] border border-[#222222] hover:border-[#3B82F6]/40 transition-colors">
                    <div className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#3B82F6] transition-colors">
                      {dom.title}
                    </div>
                    <div className="text-xs text-[#737373] font-mono pt-1">
                      {dom.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div className="p-5 rounded-xl bg-[#141414] border border-[#262626] space-y-3">
              <div className="text-xs font-mono text-[#737373] uppercase tracking-wider pb-2 border-b border-[#222222]">
                {language === 'fr' ? 'Principes d\'Ingénierie' : 'Engineering Principles'}
              </div>
              <div className="space-y-3">
                {values.map((v, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono font-semibold text-[#F5F5F5]">{v.title}</div>
                      <div className="text-xs text-[#737373] leading-normal">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
