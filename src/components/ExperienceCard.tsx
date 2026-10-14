import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { ExperienceItem } from '../data/portfolioData';

interface ExperienceCardProps {
  item: ExperienceItem;
  isLast?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, isLast = false }) => {
  return (
    <div className="relative flex items-start gap-4 sm:gap-6 group">
      {/* Timeline Spine and Node */}
      <div className="flex flex-col items-center shrink-0 self-stretch">
        {/* Node */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#1b1f2b] border border-[#39ff88]/60 shadow-[0_0_12px_rgba(57,255,136,0.3)] z-10 transition-transform duration-300 group-hover:scale-110">
          <div className="w-2.5 h-2.5 rounded-full bg-[#39ff88]" />
        </div>
        {/* Spine Line */}
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-[#39ff88]/50 via-[#3b4a3d]/50 to-[#3b4a3d]/20 my-2" />
        )}
      </div>

      {/* Experience Content Card */}
      <div className="flex-1 bg-[#161b27]/90 backdrop-blur-md border border-[#3b4a3d]/50 rounded-xl p-5 sm:p-7 shadow-lg transition-all duration-300 hover:border-[#849584]/60 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-[#3b4a3d]/30">
          <div>
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#f5fff2] tracking-tight">
              {item.role}
            </h3>
            <div className="font-['Inter'] text-sm sm:text-base text-[#7bd0ff] font-medium pt-0.5">
              {item.organization}
            </div>
          </div>

          <div className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#39ff88]/10 text-[#39ff88] border border-[#39ff88]/25 font-['JetBrains_Mono'] text-xs font-semibold shrink-0">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.period}</span>
          </div>
        </div>

        {/* Bullets without added metrics or logos */}
        <ul className="space-y-2.5">
          {item.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#bacbb9] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39ff88] mt-2 shrink-0" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
