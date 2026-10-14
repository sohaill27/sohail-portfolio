import React from 'react';

interface LogoBadgeProps {
  className?: string;
  size?: number;
}

export const LogoBadge: React.FC<LogoBadgeProps> = ({ className = "h-8 w-8", size = 32 }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`} 
      style={{ width: size, height: size }}
      aria-label="Sohail Bagwan Shield Monogram"
    >
      <svg 
        viewBox="0 0 100 100" 
        width={size} 
        height={size} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* Outer Shield Border with cyber glow */}
        <path 
          d="M50 8 L88 24 V52 C88 74 50 92 50 92 C50 92 12 74 12 52 V24 L50 8 Z" 
          fill="#161b27" 
          stroke="#39ff88" 
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Inner subtle cyan guide line */}
        <path 
          d="M50 16 L80 29 V51 C80 68 50 82 50 82 C50 82 20 68 20 51 V29 L50 16 Z" 
          fill="none" 
          stroke="#7bd0ff" 
          strokeOpacity="0.45" 
          strokeWidth="1.5"
        />
        {/* Monogram SB */}
        <text 
          x="50" 
          y="58" 
          fill="#f5fff2" 
          fontFamily="'Space Grotesk', system-ui, sans-serif" 
          fontSize="22" 
          fontWeight="700" 
          letterSpacing="0.5" 
          textAnchor="middle"
        >
          SB
        </text>
        {/* Radar ping node on top */}
        <circle cx="50" cy="23" r="2.5" fill="#39ff88" />
      </svg>
    </div>
  );
};
