import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Shield, Layers, BookOpen, Activity } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenPlaceholderNotice?: (title: string, type: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenPlaceholderNotice
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { modalContent } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-3xl my-8 bg-[#161b27] border border-[#3b4a3d] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#3b4a3d]/40 bg-[#1b1f2b]">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#7bd0ff] uppercase tracking-wider">
                {project.subTag}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#39ff88]" />
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#39ff88]">
                {project.badge}
              </span>
            </div>
            <h2 id="modal-title" className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#f5fff2]">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 rounded-lg bg-[#252a36] hover:bg-[#343946] border border-[#3b4a3d]/40 flex items-center justify-center text-[#dee2f2] hover:text-[#39ff88] transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-[#dee2f2]">
          {/* Executive Overview */}
          <div className="space-y-2">
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#39ff88] flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Project Synopsis</span>
            </h3>
            <p className="font-['Inter'] text-sm sm:text-base text-[#bacbb9] leading-relaxed">
              {modalContent.overview}
            </p>
          </div>

          {/* Technical Architecture */}
          <div className="space-y-3">
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#7bd0ff] flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Architecture &amp; Core Pipeline</span>
            </h3>
            <ul className="space-y-2">
              {modalContent.architectureDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#dee2f2]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] mt-2 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology & Testing */}
          <div className="space-y-3">
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#f5fff2] flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Methodology &amp; Verification</span>
            </h3>
            <ul className="space-y-2">
              {modalContent.methodology.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#bacbb9]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39ff88] mt-2 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Controls & Mitigation */}
          <div className="space-y-3">
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#e4c36e] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Defensive Controls &amp; Hardening</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {modalContent.securityControls.map((sc, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#1b1f2b] border border-[#3b4a3d]/40 text-xs text-[#dee2f2]">
                  {sc}
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Outcomes */}
          <div className="p-4 rounded-xl bg-[#090e19] border border-[#39ff88]/30 space-y-2">
            <div className="font-['JetBrains_Mono'] text-xs text-[#39ff88] uppercase tracking-wider font-semibold">
              KEY OUTCOMES &amp; IMPACT
            </div>
            <ul className="space-y-1.5">
              {modalContent.outcomes.map((outcome, idx) => (
                <li key={idx} className="text-sm text-[#f5fff2] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39ff88]" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-6 border-t border-[#3b4a3d]/40 bg-[#1b1f2b] flex flex-wrap items-center justify-between gap-3">
          {project.githubUrl && !project.repoComingSoon ? (
            <a
              href={project.githubUrl}
              onClick={(e) => {
                if (project.isGithubPlaceholder && onOpenPlaceholderNotice) {
                  e.preventDefault();
                  onOpenPlaceholderNotice(project.title, 'GitHub Repository');
                }
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#252a36] hover:bg-[#343946] text-[#dee2f2] font-['JetBrains_Mono'] text-xs sm:text-sm border border-[#3b4a3d]/50 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Open Repository</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#252a36]/60 border border-[#3b4a3d]/40 font-['JetBrains_Mono'] text-xs text-[#849584]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#849584]" />
              Repository coming soon
            </span>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#39ff88] text-[#003918] font-['JetBrains_Mono'] text-xs sm:text-sm font-semibold hover:bg-[#00e473] transition-colors cursor-pointer"
          >
            Close Documentation
          </button>
        </div>
      </div>
    </div>
  );
};
