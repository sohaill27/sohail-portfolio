import React, { useState, useEffect } from 'react';
import { Menu, X, User, Linkedin, Github } from 'lucide-react';
import { LogoBadge } from './LogoBadge';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { personal, navigation, contact } = portfolioData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0e131e]/90 backdrop-blur-xl border-b border-[#3b4a3d]/40 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-[#0e131e]/75 backdrop-blur-md border-b border-[#3b4a3d]/25'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3 shrink-0">
          <LogoBadge size={34} />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
                className="font-['Space_Grotesk'] text-xl font-bold text-[#f5fff2] tracking-tight hover:text-[#39ff88] transition-colors"
              >
                {personal.name}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39ff88] animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#39ff88] tracking-wider uppercase font-semibold">
                {personal.subBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
          {navigation.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3 py-1.5 rounded-lg font-['Inter'] text-xs font-medium transition-all ${
                  isActive
                    ? 'text-[#39ff88] bg-[#252a36] shadow-[0_0_12px_rgba(57,255,136,0.1)] font-semibold'
                    : 'text-[#bacbb9] hover:bg-[#252a36] hover:text-[#f5fff2]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Mobile Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={contact.info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden lg:inline-flex w-9 h-9 rounded-lg bg-[#252a36] hover:bg-[#343946] border border-[#3b4a3d]/50 items-center justify-center text-[#dee2f2] hover:text-[#7bd0ff] transition-colors shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={contact.info.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden lg:inline-flex w-9 h-9 rounded-lg bg-[#252a36] hover:bg-[#343946] border border-[#3b4a3d]/50 items-center justify-center text-[#dee2f2] hover:text-[#39ff88] transition-colors shadow-sm"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#252a36] text-[#39ff88] font-['JetBrains_Mono'] text-xs hover:bg-[#39ff88] hover:text-[#003918] shadow-[0_0_16px_rgba(57,255,136,0.12)] transition-all font-semibold"
          >
            &gt; Let's Connect
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#about');
            }}
            aria-label="View Profile Information"
            className="w-9 h-9 rounded-full bg-[#252a36] hover:bg-[#f5fff2] border border-[#3b4a3d]/60 flex items-center justify-center group transition-colors"
          >
            <User className="w-4 h-4 text-[#39ff88] group-hover:text-[#003918] transition-colors" />
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
            className="xl:hidden w-9 h-9 rounded-lg bg-[#252a36] border border-[#3b4a3d]/50 flex items-center justify-center text-[#dee2f2] hover:text-[#39ff88] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e131e]/95 backdrop-blur-2xl border-b border-[#3b4a3d]/50 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2.5 rounded-lg font-['Inter'] text-sm transition-all flex items-center justify-between ${
                    isActive
                      ? 'text-[#39ff88] bg-[#252a36] font-semibold border-l-2 border-[#39ff88]'
                      : 'text-[#bacbb9] hover:bg-[#161b27] hover:text-[#f5fff2]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39ff88]" />
                  )}
                </a>
              );
            })}

            <div className="pt-3 flex items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#39ff88] text-[#003918] font-['JetBrains_Mono'] text-sm font-semibold shadow-[0_0_16px_rgba(57,255,136,0.25)] hover:bg-[#00e473] transition-all"
              >
                &gt; Let's Connect
              </a>
              <a
                href={contact.info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-lg bg-[#252a36] border border-[#3b4a3d]/50 flex items-center justify-center text-[#dee2f2] hover:text-[#7bd0ff] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={contact.info.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-lg bg-[#252a36] border border-[#3b4a3d]/50 flex items-center justify-center text-[#dee2f2] hover:text-[#39ff88] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
