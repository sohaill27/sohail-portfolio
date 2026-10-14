import React from 'react';
import { Shield, Network, FileCheck } from 'lucide-react';
import { FocusArea } from '../data/portfolioData';

interface InfoCardProps {
  card: FocusArea;
}

export const InfoCard: React.FC<InfoCardProps> = ({ card }) => {
  const renderIcon = () => {
    switch (card.iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#39ff88]" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#7bd0ff]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#e4c36e]" />;
      default:
        return <Shield className="w-5 h-5 text-[#39ff88]" />;
    }
  };

  const getBorderHover = () => {
    switch (card.accentColor) {
      case 'primary':
        return 'hover:border-[#39ff88]/50 hover:shadow-[0_0_24px_rgba(57,255,136,0.12)]';
      case 'secondary':
        return 'hover:border-[#7bd0ff]/50 hover:shadow-[0_0_24px_rgba(123,208,255,0.12)]';
      case 'tertiary':
        return 'hover:border-[#e4c36e]/50 hover:shadow-[0_0_24px_rgba(228,195,110,0.12)]';
    }
  };

  const getIconContainerStyle = () => {
    switch (card.accentColor) {
      case 'primary':
        return 'bg-[#39ff88]/10 border-[#39ff88]/20 group-hover:bg-[#39ff88] group-hover:text-[#003918]';
      case 'secondary':
        return 'bg-[#7bd0ff]/10 border-[#7bd0ff]/20 group-hover:bg-[#7bd0ff] group-hover:text-[#00354a]';
      case 'tertiary':
        return 'bg-[#e4c36e]/10 border-[#e4c36e]/30 group-hover:bg-[#e4c36e] group-hover:text-[#241a00]';
    }
  };

  const getFirstTagColor = () => {
    switch (card.accentColor) {
      case 'primary':
        return 'text-[#39ff88]';
      case 'secondary':
        return 'text-[#7bd0ff]';
      case 'tertiary':
        return 'text-[#e4c36e]';
    }
  };

  return (
    <div
      className={`bg-[#161b27]/90 backdrop-blur-md border border-[#3b4a3d]/50 rounded-xl p-6 shadow-md transition-all duration-300 group flex flex-col justify-between ${getBorderHover()}`}
    >
      <div>
        <div
          className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 transition-all duration-300 ${getIconContainerStyle()}`}
        >
          {renderIcon()}
        </div>
        <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#f5fff2] mb-2 tracking-tight">
          {card.title}
        </h3>
        <p className="font-['Inter'] text-sm text-[#bacbb9] leading-relaxed mb-4">
          {card.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#3b4a3d]/30">
        {card.tags.map((tag, idx) => (
          <span
            key={tag}
            className={`font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded bg-[#252a36] ${
              idx === 0 ? getFirstTagColor() : 'text-[#bacbb9]'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
