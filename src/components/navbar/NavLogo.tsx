import React from 'react';

interface NavLogoProps {
  className?: string;
}

export const NavLogo: React.FC<NavLogoProps> = ({ className = '' }) => {
  return (
    <a href="/" className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Exact shape geometry from pen.dev: 33x33 with [3px, 3px, 53px, 3px] corner radius */}
      <div className="relative w-[33px] h-[33px] bg-brand-lime rounded-[3px_3px_53px_3px] flex items-center justify-center shrink-0">
        {/* Inner square: 14x14 with [3px, 3px, 53px, 3px] corner radius */}
        <div className="w-[14px] h-[14px] bg-[#191f33] rounded-[3px_3px_53px_3px]" />
      </div>

      {/* Brand Typography from pen.dev: Manrope 700, 24px, -1.2px tracking */}
      <span
        className="font-manrope font-bold text-[24px] text-brand-text tracking-[-1.2px] leading-none"
      >
        MAC
      </span>
    </a>
  );
};
