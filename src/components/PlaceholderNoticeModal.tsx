import React, { useEffect } from 'react';
import { X, Info, ExternalLink, Code } from 'lucide-react';

interface PlaceholderNoticeModalProps {
  info: { title: string; linkType: string; url?: string } | null;
  onClose: () => void;
}

export const PlaceholderNoticeModal: React.FC<PlaceholderNoticeModalProps> = ({ info, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (info) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [info, onClose]);

  if (!info) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="placeholder-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-md bg-[#161b27] border border-[#3b4a3d] rounded-2xl shadow-2xl p-6 overflow-hidden flex flex-col space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7bd0ff]/10 border border-[#7bd0ff]/20 flex items-center justify-center text-[#7bd0ff]">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#7bd0ff] uppercase tracking-wider font-semibold">
                CONFIGURABLE LINK NOTICE
              </span>
              <h3 id="placeholder-title" className="font-['Space_Grotesk'] text-lg font-bold text-[#f5fff2]">
                {info.linkType}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-lg bg-[#252a36] hover:bg-[#343946] border border-[#3b4a3d]/40 flex items-center justify-center text-[#dee2f2] hover:text-[#39ff88] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="font-['Inter'] text-sm text-[#bacbb9] leading-relaxed">
          The link for <strong className="text-[#f5fff2]">{info.title}</strong> is currently set to a template URL.
        </p>

        <div className="p-3.5 rounded-lg bg-[#090e19] border border-[#3b4a3d]/50 space-y-1.5 text-xs text-[#bacbb9]">
          <div className="flex items-center gap-1.5 text-[#39ff88] font-['JetBrains_Mono'] font-medium">
            <Code className="w-3.5 h-3.5" />
            <span>How to customize:</span>
          </div>
          <p>
            Open <code className="text-[#39ff88] bg-[#161b27] px-1 py-0.5 rounded font-['JetBrains_Mono']">src/data/portfolioData.ts</code> and update the link under <strong className="text-[#f5fff2]">{info.title}</strong>.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          {info.url && (
            <a
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#252a36] text-[#dee2f2] font-['JetBrains_Mono'] text-xs hover:bg-[#343946] border border-[#3b4a3d]/40 transition-colors"
            >
              <span>Visit Link Anyway</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#39ff88] text-[#003918] font-['JetBrains_Mono'] text-xs font-semibold hover:bg-[#00e473] transition-colors cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
