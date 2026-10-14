import React from 'react';
import { Download, Linkedin, FileText } from 'lucide-react';
import { portfolioData, RESUME_VIEW_URL, RESUME_DOWNLOAD_URL } from '../data/portfolioData';

interface ResumeCalloutProps {
  onPreviewResume?: () => void;
  onPlaceholderNotice?: (title: string, type: string) => void;
}

export const ResumeCallout: React.FC<ResumeCalloutProps> = ({
  onPreviewResume,
  onPlaceholderNotice
}) => {
  const { resumeCallout } = portfolioData;

  const handleLinkedinClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (resumeCallout.isLinkedinPlaceholder && onPlaceholderNotice) {
      e.preventDefault();
      onPlaceholderNotice("LinkedIn Profile", "Social Link");
    }
  };

  return (
    <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10" id="resume">
      <div className="relative bg-gradient-to-r from-[#161b27] via-[#1b1f2b] to-[#161b27] border border-[#39ff88]/30 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-[0_0_32px_rgba(57,255,136,0.08)] overflow-hidden">
        {/* Ambient radial glows */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#39ff88]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#7bd0ff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39ff88]/10 border border-[#39ff88]/20 text-[#39ff88] font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39ff88] animate-pulse" />
              <span>{resumeCallout.tag}</span>
            </div>

            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#f5fff2] tracking-tight">
              {resumeCallout.title}
            </h2>

            <p className="font-['Inter'] text-base sm:text-lg text-[#bacbb9] leading-relaxed">
              {resumeCallout.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 shrink-0 pt-2 lg:pt-0">
            <div className="flex flex-wrap items-center gap-3">
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#39ff88] text-[#003918] font-['JetBrains_Mono'] text-xs sm:text-sm font-semibold shadow-[0_0_24px_rgba(57,255,136,0.25)] hover:shadow-[0_0_32px_rgba(57,255,136,0.4)] hover:-translate-y-0.5 hover:bg-[#00e473] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {onPreviewResume && (
                <button
                  onClick={onPreviewResume}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#252a36] text-[#dee2f2] font-['JetBrains_Mono'] text-xs sm:text-sm hover:text-[#39ff88] hover:bg-[#343946] border border-[#3b4a3d]/50 shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Quick View</span>
                </button>
              )}

              <a
                href={resumeCallout.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#252a36] text-[#dee2f2] font-['JetBrains_Mono'] text-xs sm:text-sm hover:text-[#7bd0ff] hover:bg-[#343946] border border-[#3b4a3d]/50 shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Direct download link */}
            <a
              href={RESUME_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] text-[#7bd0ff] hover:text-[#39ff88] hover:underline transition-colors px-1 pt-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Direct download (.pdf)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
