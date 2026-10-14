import React from 'react';
import { Shield, Network, Wrench, CheckCircle2, Code2 } from 'lucide-react';
import { SkillCategory } from '../data/portfolioData';

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const renderIcon = () => {
    switch (category.iconName) {
      case 'Shield':
        return <Shield className="w-4 h-4 text-[#39ff88]" />;
      case 'Network':
        return <Network className="w-4 h-4 text-[#7bd0ff]" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-[#39ff88]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4 text-[#e4c36e]" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-[#7bd0ff]" />;
      default:
        return <Shield className="w-4 h-4 text-[#39ff88]" />;
    }
  };

  const getIconContainerStyle = () => {
    switch (category.accentColor) {
      case 'primary':
        return 'bg-[#39ff88]/10 text-[#39ff88]';
      case 'secondary':
        return 'bg-[#7bd0ff]/10 text-[#7bd0ff]';
      case 'tertiary':
        return 'bg-[#e4c36e]/10 text-[#e4c36e]';
    }
  };

  return (
    <div
      className={`bg-[#161b27]/90 backdrop-blur-md border border-[#3b4a3d]/40 rounded-xl p-5 shadow-md flex flex-col justify-between hover:border-[#849584]/60 transition-all duration-300 ${
        category.colSpan === 2 ? 'lg:col-span-2' : ''
      }`}
    >
      <div>
        <div className="flex items-center gap-2.5 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getIconContainerStyle()}`}>
            {renderIcon()}
          </div>
          <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-[#f5fff2]">
            {category.title}
          </h3>
        </div>
        <p className="font-['Inter'] text-xs sm:text-sm text-[#bacbb9] mb-4">
          {category.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2">
        {category.skills.map((skill) => {
          let badgeTextColor = 'text-[#f5fff2]';
          if (skill.highlight) {
            if (skill.highlightColor === 'primary') badgeTextColor = 'text-[#39ff88]';
            else if (skill.highlightColor === 'secondary') badgeTextColor = 'text-[#7bd0ff]';
            else if (skill.highlightColor === 'tertiary') badgeTextColor = 'text-[#e4c36e]';
          }

          return (
            <span
              key={skill.name}
              className={`px-2.5 py-1 rounded bg-[#252a36] font-['JetBrains_Mono'] text-xs border border-[#3b4a3d]/30 transition-colors hover:border-[#849584]/50 ${badgeTextColor}`}
            >
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};
