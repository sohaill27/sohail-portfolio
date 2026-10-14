import React from 'react';
import { MapPin, Linkedin, Github } from 'lucide-react';
import { LogoBadge } from './LogoBadge';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onPlaceholderNotice?: (title: string, type: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPlaceholderNotice }) => {
  const { personal, navigation, contact, footer } = portfolioData;

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    if (onPlaceholderNotice) {
      e.preventDefault();
      onPlaceholderNotice(label, 'Social Channel');
    }
  };

  return (
    <footer className="w-full bg-[#090e19] border-t border-[#3b4a3d]/40 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col space-y-8">
        {/* Upper Footer Grid */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#3b4a3d]/25">
          {/* Monogram Brand Identity */}
          <div className="flex items-center gap-3.5 shrink-0">
            <LogoBadge size={36} />
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] text-xl font-bold text-[#f5fff2] tracking-tight">
                {personal.name}
              </span>
              <span className="font-['Inter'] text-xs text-[#bacbb9]">
                {footer.byline}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-['Inter'] text-xs sm:text-sm text-[#bacbb9]">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="hover:text-[#39ff88] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={contact.info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-[#252a36] border border-[#3b4a3d]/50 hover:bg-[#343946] flex items-center justify-center text-[#dee2f2] hover:text-[#7bd0ff] transition-colors shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={contact.info.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-lg bg-[#252a36] border border-[#3b4a3d]/50 hover:bg-[#343946] flex items-center justify-center text-[#dee2f2] hover:text-[#39ff88] transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Telemetry & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-['JetBrains_Mono'] text-xs text-[#849584] text-center sm:text-left">
          <div>
            <span>{footer.copyright}</span>
          </div>

          <div className="flex items-center gap-2 text-[#39ff88]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39ff88] animate-pulse" />
            <span className="tracking-wider uppercase font-semibold">
              {footer.ethos}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#7bd0ff]">
            <MapPin className="w-3.5 h-3.5" />
            <span>{footer.region}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
