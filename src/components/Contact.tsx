'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPortfolioData } from '@/data/portfolioData';
import { Copy, Check, Github, Linkedin, ArrowUpRight, Send, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personalInfo } = data;

  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Direct mailto trigger
    window.location.href = `mailto:${personalInfo.links.email}?subject=Collaboration Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headline & Direct Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-xs font-mono text-[#3B82F6]">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{personalInfo.ui.contact.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F5] tracking-tight leading-tight">
              {personalInfo.ui.contact.titlePart1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]">
                {personalInfo.ui.contact.titleHighlight}
              </span>
            </h2>

            <p className="text-base text-[#A3A3A3] leading-relaxed max-w-lg">
              {personalInfo.ui.contact.subtitle}
            </p>

            {/* Quick Email Copy Card */}
            <div className="p-4 rounded-xl bg-[#111111] border border-[#262626] space-y-2">
              <div className="text-xs font-mono text-[#CBD5E1]">{personalInfo.ui.contact.directEmail}</div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base text-[#F5F5F5] truncate">
                  {personalInfo.links.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#171717] hover:bg-[#222222] border border-[#2E2E2E] text-xs font-mono text-[#CBD5E1] hover:text-[#F5F5F5] inline-flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">{personalInfo.ui.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />
                      <span>{personalInfo.ui.contact.copy}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] text-xs font-mono text-[#F5F5F5] inline-flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4 text-[#CBD5E1]" />
                <span>{personalInfo.ui.contact.githubProfile}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8]" />
              </a>

              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] text-xs font-mono text-[#F5F5F5] inline-flex items-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#3B82F6]" />
                <span>{personalInfo.ui.contact.linkedinProfile}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8]" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Message Box */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#111111] border border-[#262626] space-y-6">
            <div className="space-y-1 pb-2 border-b border-[#222222]">
              <h3 className="font-mono text-base font-bold text-[#F5F5F5]">
                {personalInfo.ui.contact.formTitle}
              </h3>
              <p className="text-xs text-[#CBD5E1]">
                {personalInfo.ui.contact.formSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="space-y-1.5">
                <label className="text-[#CBD5E1]">{personalInfo.ui.contact.nameLabel}</label>
                <input
                  type="text"
                  required
                  placeholder={personalInfo.ui.contact.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#171717] border border-[#262626] text-[#F5F5F5] placeholder-[#94A3B8] focus:outline-none focus:border-[#3B82F6] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[#CBD5E1]">{personalInfo.ui.contact.emailLabel}</label>
                <input
                  type="email"
                  required
                  placeholder={personalInfo.ui.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#171717] border border-[#262626] text-[#F5F5F5] placeholder-[#94A3B8] focus:outline-none focus:border-[#3B82F6] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[#CBD5E1]">{personalInfo.ui.contact.msgLabel}</label>
                <textarea
                  rows={4}
                  required
                  placeholder={personalInfo.ui.contact.msgPlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#171717] border border-[#262626] text-[#F5F5F5] placeholder-[#94A3B8] focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{personalInfo.ui.contact.submitBtn}</span>
              </button>

              {formSent && (
                <div className="p-3 rounded bg-[#10B981]/10 border border-[#10B981]/30 text-emerald-400 text-center text-xs">
                  {personalInfo.ui.contact.sentNotice}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
