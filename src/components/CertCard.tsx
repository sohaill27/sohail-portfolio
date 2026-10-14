import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CertificationItem } from '../data/portfolioData';

interface CertCardProps {
  cert: CertificationItem;
  onOpenCredential?: (cert: CertificationItem) => void;
}

export const CertCard: React.FC<CertCardProps> = ({ cert }) => {
  const getBadgeStyle = () => {
    switch (cert.accentColor) {
      case 'primary':
        return 'bg-[#39ff88]/10 text-[#39ff88] border-[#39ff88]/25';
      case 'secondary':
        return 'bg-[#7bd0ff]/10 text-[#7bd0ff] border-[#7bd0ff]/25';
      case 'tertiary':
        return 'bg-[#e4c36e]/10 text-[#e4c36e] border-[#e4c36e]/30';
      default:
        return 'bg-[#39ff88]/10 text-[#39ff88] border-[#39ff88]/25';
    }
  };

  const getHoverBorder = () => {
    switch (cert.accentColor) {
      case 'primary':
        return 'hover:border-[#39ff88]/40';
      case 'secondary':
        return 'hover:border-[#7bd0ff]/40';
      case 'tertiary':
        return 'hover:border-[#e4c36e]/40';
      default:
        return 'hover:border-[#39ff88]/40';
    }
  };

  const getTitleHoverColor = () => {
    switch (cert.accentColor) {
      case 'primary':
        return 'group-hover:text-[#39ff88]';
      case 'secondary':
        return 'group-hover:text-[#7bd0ff]';
      case 'tertiary':
        return 'group-hover:text-[#e4c36e]';
      default:
        return 'group-hover:text-[#39ff88]';
    }
  };

  return (
    <div
      className={`bg-[#161b27]/90 backdrop-blur-md border border-[#3b4a3d]/40 rounded-xl p-6 shadow-md flex flex-col justify-between transition-all duration-300 group ${getHoverBorder()}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span
            className={`font-['JetBrains_Mono'] text-[11px] px-2.5 py-0.5 rounded border uppercase tracking-wider font-semibold inline-flex items-center gap-1 ${getBadgeStyle()}`}
          >
            <CheckCircle2 className="w-3 h-3" />
            {cert.status || 'VERIFIED'}
          </span>
        </div>

        <h3
          className={`font-['Space_Grotesk'] text-lg font-bold text-[#f5fff2] transition-colors leading-snug ${getTitleHoverColor()}`}
        >
          {cert.title}
        </h3>
        <p className="font-['Inter'] text-sm text-[#7bd0ff] mt-2 font-medium">
          {cert.issuer}
        </p>
      </div>
    </div>
  );
};
