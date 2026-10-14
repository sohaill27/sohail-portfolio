import React from 'react';
import { ArrowRight, Download, Radar, Linkedin, Github, Mail, Shield, CheckCircle2 } from 'lucide-react';
import { portfolioData, RESUME_VIEW_URL, RESUME_DOWNLOAD_URL } from '../data/portfolioData';

interface HeroProps {
  onPreviewResume?: () => void;
  onPlaceholderNotice?: (title: string, type: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onPreviewResume, onPlaceholderNotice }) => {
  const { personal, contact } = portfolioData;

  const handleLinkedinClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (contact.info.isLinkedinPlaceholder && onPlaceholderNotice) {
      e.preventDefault();
      onPlaceholderNotice('LinkedIn Profile', 'Social Dispatch');
    }
  };

  const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (contact.info.isGithubPlaceholder && onPlaceholderNotice) {
      e.preventDefault();
      onPlaceholderNotice('GitHub Profile', 'Code Repository');
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:py-24" id="home">
      {/* Ambient Atmospheric Radar Glow Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#39ff88]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#7bd0ff]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Primary Narrative & Profile Info */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Live Status Capsule */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#1b1f2b]/80 backdrop-blur-md shadow-sm border border-[#3b4a3d]/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff88] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39ff88]" />
            </span>
            <span className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#39ff88] tracking-widest uppercase">
              {personal.statusText}
            </span>
          </div>

          {/* Hero Headline */}
          <div className="space-y-1">
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5fff2] tracking-tight leading-[1.1]">
              {personal.headline.line1}
              <br />
              <span className="text-[#bacbb9]">{personal.headline.line2}</span>
              <br />
              <span className="text-[#39ff88]">{personal.headline.line3}</span>
            </h1>
          </div>

          {/* Introductory Narrative */}
          <p className="font-['Inter'] text-base sm:text-lg text-[#bacbb9] max-w-2xl leading-relaxed">
            I'm <strong className="text-[#f5fff2] font-semibold">{personal.name}</strong>, a Computer Engineering graduate passionate about cybersecurity, security operations, and IT infrastructure. I'm focused on building practical telemetry skills to help organizations identify threats, reduce systemic risks, and safeguard mission-critical digital assets.
          </p>

          {/* Location Telemetry Strip */}
          <div className="flex items-center gap-2 text-[#7bd0ff] font-['JetBrains_Mono'] text-xs sm:text-sm">
            <Radar className="w-4 h-4 text-[#7bd0ff] shrink-0" />
            <span>{personal.locationNotice}</span>
          </div>

          {/* Call to Action Cluster */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#39ff88] text-[#003918] font-['JetBrains_Mono'] text-xs sm:text-sm font-semibold shadow-[0_0_24px_rgba(57,255,136,0.25)] hover:shadow-[0_0_32px_rgba(57,255,136,0.4)] hover:-translate-y-0.5 hover:bg-[#00e473] transition-all"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={RESUME_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!RESUME_VIEW_URL) {
                  e.preventDefault();
                  window.open(RESUME_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#252a36] text-[#dee2f2] font-['JetBrains_Mono'] text-xs sm:text-sm hover:text-[#39ff88] hover:bg-[#343946] shadow-sm hover:-translate-y-0.5 transition-all border border-[#3b4a3d]/50"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {onPreviewResume && (
              <button
                onClick={onPreviewResume}
                className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-transparent text-[#7bd0ff] font-['JetBrains_Mono'] text-xs hover:underline cursor-pointer"
              >
                <span>&gt; Preview CV</span>
              </button>
            )}
          </div>

          {/* Social Channels & Direct Communications */}
          <div className="flex items-center gap-3 pt-2">
            <span className="font-['JetBrains_Mono'] text-xs text-[#849584] uppercase tracking-wider pr-1">
              Telemetry Links //
            </span>

            <a
              href={contact.info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-lg bg-[#252a36]/80 border border-[#3b4a3d]/40 hover:bg-[#343946] flex items-center justify-center text-[#dee2f2] hover:text-[#7bd0ff] transition-colors shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={contact.info.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-lg bg-[#252a36]/80 border border-[#3b4a3d]/40 hover:bg-[#343946] flex items-center justify-center text-[#dee2f2] hover:text-[#39ff88] transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${contact.info.email}`}
              aria-label="Direct Email Dispatch"
              className="w-10 h-10 rounded-lg bg-[#252a36]/80 border border-[#3b4a3d]/40 hover:bg-[#343946] flex items-center justify-center text-[#dee2f2] hover:text-[#39ff88] transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Abstract SOC Console Visualization */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Floating Terminal Glass Console */}
          <div className="w-full bg-[#161b27]/90 backdrop-blur-xl rounded-xl p-5 shadow-2xl relative overflow-hidden border border-[#3b4a3d]/50">
            {/* HUD Metadata Header */}
            <div className="flex items-center justify-between pb-2.5 mb-2.5 bg-[#1b1f2b]/80 p-3 rounded-lg border border-[#3b4a3d]/30">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#39ff88] animate-pulse" />
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#39ff88] tracking-wider uppercase font-semibold">
                  {personal.telemetryHero.nodeName}
                </span>
              </div>
              <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#849584]">
                <span>LATENCY: {personal.telemetryHero.latency}</span>
                <span>•</span>
                <span className="text-[#7bd0ff] font-medium">{personal.telemetryHero.encryption}</span>
              </div>
            </div>

            {/* Abstract SVG Network Radar & Security Shield Emblem */}
            <div className="relative w-full h-56 flex items-center justify-center bg-[#090e19]/80 rounded-lg my-2 overflow-hidden border border-[#3b4a3d]/30">
              {/* Grid Background Overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="radar-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#849584" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#radar-grid)" />
              </svg>

              {/* Center Shield & Concentric Scanners */}
              <svg className="w-48 h-48 relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" stroke="#3b4a3d" strokeWidth="1" strokeDasharray="4 6" className="opacity-50" />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  stroke="#7bd0ff"
                  strokeWidth="1.5"
                  strokeDasharray="110 30"
                  className="opacity-40 animate-spin"
                  style={{ animationDuration: '24s' }}
                />
                <circle
                  cx="100"
                  cy="100"
                  r="50"
                  stroke="#39ff88"
                  strokeWidth="1.5"
                  strokeDasharray="70 20"
                  className="opacity-60 animate-spin"
                  style={{ animationDuration: '16s', animationDirection: 'reverse' }}
                />
                {/* Center Shield */}
                <path
                  d="M100 45 L145 65 V105 C145 135 100 155 100 155 C100 155 55 135 55 105 V65 L100 45 Z"
                  fill="#161b27"
                  stroke="#39ff88"
                  strokeWidth="2"
                  className="shadow-lg"
                />
                <path
                  d="M100 52 L138 69 V103 C138 128 100 145 100 145 C100 145 62 128 62 103 V69 L100 52 Z"
                  fill="none"
                  stroke="#7bd0ff"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />
                {/* SB Monogram */}
                <text
                  x="100"
                  y="112"
                  fill="#f5fff2"
                  fontSize="22"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontWeight="700"
                  letterSpacing="1"
                  textAnchor="middle"
                >
                  SB
                </text>
                <circle cx="100" cy="74" r="3" fill="#39ff88" />
                <circle cx="28" cy="80" r="3" fill="#7bd0ff" />
                <line x1="28" y1="80" x2="62" y2="85" stroke="#7bd0ff" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.4" />
                <circle cx="170" cy="120" r="3" fill="#39ff88" />
                <line x1="170" y1="120" x2="138" y2="115" stroke="#39ff88" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.4" />
              </svg>

              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between font-['JetBrains_Mono'] text-[10px] text-[#849584] bg-[#252a36]/60 px-2.5 py-1 rounded">
                <span>{personal.telemetryHero.sysIntegrity}</span>
                <span className="text-[#39ff88] font-semibold">{personal.telemetryHero.state}</span>
              </div>
            </div>

            {/* Micro Terminal Command Stream */}
            <div className="bg-[#090e19]/90 rounded-lg p-3 font-['JetBrains_Mono'] text-xs space-y-1 border border-[#3b4a3d]/30">
              <div className="flex items-center justify-between text-[#849584]">
                <span className="text-[#39ff88]">{personal.telemetryHero.terminalPrompt}</span>
                <span className="text-[#7bd0ff]">{personal.telemetryHero.terminalSuccess}</span>
              </div>
              <div className="text-[#bacbb9] text-[11px] leading-tight space-y-0.5 pt-0.5">
                <div>• {personal.telemetryHero.terminalBullet1}</div>
                <div>• {personal.telemetryHero.terminalBullet2}</div>
              </div>
            </div>

            {/* Floating Ethos Stamp */}
            <div className="mt-3 p-2 rounded-lg bg-[#252a36]/70 flex items-center justify-between border border-[#3b4a3d]/30">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#39ff88] font-semibold tracking-widest pl-1 uppercase">
                {personal.telemetryHero.ethosBadge}
              </span>
              <span className="flex h-2 w-2 rounded-full bg-[#39ff88]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
