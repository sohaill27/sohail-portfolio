import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  sectionNum?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  sectionNum,
  title,
  description,
  className = ""
}) => {
  return (
    <div className={`flex flex-col space-y-2 mb-8 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#39ff88] uppercase tracking-widest">
          {eyebrow} {sectionNum ? `// ${sectionNum}` : ""}
        </span>
        <span className="w-8 h-px bg-[#3b4a3d]" aria-hidden="true"></span>
      </div>
      <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#f5fff2] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="font-['Inter'] text-sm sm:text-base text-[#bacbb9] max-w-2xl leading-relaxed pt-1">
          {description}
        </p>
      )}
    </div>
  );
};
