import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, Shield, GraduationCap, Award, Briefcase, Phone, Mail } from 'lucide-react';
import { portfolioData, RESUME_VIEW_URL, RESUME_DOWNLOAD_URL } from '../data/portfolioData';

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({ isOpen, onClose }) => {
  const { personal, about, skills, certifications, projects } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-preview-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-4xl my-6 bg-[#161b27] border border-[#3b4a3d] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between p-5 border-b border-[#3b4a3d]/40 bg-[#1b1f2b]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#39ff88]/10 text-[#39ff88] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-preview-title" className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-[#f5fff2]">
                {personal.name} — Curriculum Vitae
              </h2>
              <span className="font-['JetBrains_Mono'] text-xs text-[#7bd0ff]">
                Cybersecurity &amp; IT Infrastructure
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_VIEW_URL || RESUME_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#39ff88] text-[#003918] font-['JetBrains_Mono'] text-xs font-semibold hover:bg-[#00e473] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Open / Download Resume</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="w-8 h-8 rounded-lg bg-[#252a36] hover:bg-[#343946] border border-[#3b4a3d]/40 flex items-center justify-center text-[#dee2f2] hover:text-[#39ff88] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 space-y-8 overflow-y-auto bg-[#0e131e] text-[#dee2f2]">
          {/* Header */}
          <div className="border-b border-[#3b4a3d]/50 pb-6">
            <h1 className="font-['Space_Grotesk'] text-3xl font-bold text-[#f5fff2]">
              {personal.name}
            </h1>
            <p className="font-['JetBrains_Mono'] text-sm text-[#39ff88] mt-1">
              {personal.role}
            </p>
            <p className="font-['Inter'] text-xs text-[#bacbb9] mt-2">
              +91-9136102512 · {portfolioData.contact.info.email} · {portfolioData.contact.info.linkedinDisplay} · {personal.locationNotice}
            </p>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#7bd0ff] uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Professional Summary</span>
            </h3>
            <p className="font-['Inter'] text-sm text-[#bacbb9] leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#7bd0ff] uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <div className="bg-[#161b27] p-4 rounded-xl border border-[#3b4a3d]/40 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-['Space_Grotesk'] font-bold text-[#f5fff2]">
                  {about.education.degree}
                </span>
                {about.education.badge && (
                  <span className="font-['JetBrains_Mono'] text-xs text-[#39ff88]">
                    {about.education.badge}
                  </span>
                )}
              </div>
              <div className="text-xs text-[#7bd0ff] font-['Inter'] font-medium">
                {about.education.specialization}
              </div>
              <div className="text-xs text-[#bacbb9] font-['Inter']">
                {about.education.institution}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#7bd0ff] uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </h3>
            <div className="space-y-3">
              <div className="bg-[#161b27] p-4 rounded-xl border border-[#3b4a3d]/40 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-['Space_Grotesk'] font-bold text-[#f5fff2]">
                    Cybersecurity Intern — IndustriAcademia Community
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#39ff88]">
                    Jul 2025 – Jan 2026
                  </span>
                </div>
                <p className="font-['Inter'] text-xs text-[#bacbb9] leading-relaxed pt-1">
                  • Facilitated student engagement by supporting internship programs, technical workshops, and industry training sessions.<br />
                  • Supported the development of educational resources for workshops and cybersecurity awareness activities.
                </p>
              </div>

              <div className="bg-[#161b27] p-4 rounded-xl border border-[#3b4a3d]/40 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-['Space_Grotesk'] font-bold text-[#f5fff2]">
                    Cybersecurity Intern — CSI CyberSecured India
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#39ff88]">
                    Apr 2025 – Jul 2025
                  </span>
                </div>
                <p className="font-['Inter'] text-xs text-[#bacbb9] leading-relaxed pt-1">
                  • Performed vulnerability assessment activities using industry-standard tools.<br />
                  • Learned ethical hacking methodologies, cyber defense techniques, and network security fundamentals.
                </p>
              </div>
            </div>
          </div>

          {/* Projects & Patents */}
          <div className="space-y-3">
            <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#7bd0ff] uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Key Projects &amp; Patents</span>
            </h3>
            <div className="space-y-3">
              {projects.items.map((proj) => (
                <div key={proj.id} className="bg-[#161b27] p-4 rounded-xl border border-[#3b4a3d]/40 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-['Space_Grotesk'] font-bold text-[#f5fff2] text-sm sm:text-base">
                      {proj.title}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#39ff88] bg-[#39ff88]/10 px-2 py-0.5 rounded border border-[#39ff88]/20 self-start sm:self-auto">
                      {proj.badge}
                    </span>
                  </div>
                  <p className="font-['Inter'] text-xs text-[#bacbb9] leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#7bd0ff] uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Industry Certifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {certifications.items.map((cert) => (
                <div key={cert.id} className="p-3 rounded-lg bg-[#161b27] border border-[#3b4a3d]/40 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#39ff88] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-['Space_Grotesk'] text-xs font-bold text-[#f5fff2]">
                      {cert.title}
                    </div>
                    <div className="text-[11px] text-[#7bd0ff]">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Competencies */}
          <div className="space-y-3">
            <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#7bd0ff] uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Core Competencies</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skills.categories.map((cat) => (
                <div key={cat.id} className="p-3 bg-[#161b27] rounded-lg border border-[#3b4a3d]/30 space-y-1">
                  <div className="font-['JetBrains_Mono'] text-[#39ff88] font-bold">
                    {cat.title}
                  </div>
                  <div className="text-[#bacbb9]">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
