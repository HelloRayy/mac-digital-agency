import React from 'react';

interface FooterBrandProps {
  className?: string;
}

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

/**
 * Footer Brand Component - Cloned 1:1 from pen.dev node Frame 427320752
 * - Logo (Frame 427320849): 51x51px lime rounded shape with inner square, "MAC" 37px
 * - Description (r3uT1P): 14px font-normal, color #9b9b9c, leading-[1.71], max-w-[534px]
 * - Socials (Frame 2007): 4x 34x34px white circles with Facebook, Twitter, LinkedIn, Instagram
 */
export const FooterBrand: React.FC<FooterBrandProps> = ({ className = '' }) => {
  return (
    <div
      data-name="Frame 427320752"
      className={`flex flex-col gap-6 sm:gap-[30px] max-w-[534px] select-none ${className}`}
    >
      {/* Frame 427320849: Logo */}
      <a href="/" className="inline-flex items-center gap-3">
        <div className="relative w-[51px] h-[51px] bg-[#99ea48] rounded-[4.6px_4.6px_81.9px_4.6px] flex items-center justify-center shrink-0">
          <div className="w-[21.6px] h-[21.6px] bg-[#191f33] rounded-[4.6px_4.6px_81.9px_4.6px]" />
        </div>
        <span className="font-manrope font-bold text-[37px] text-[#020407] tracking-[-1.85px] leading-none">
          MAC
        </span>
      </a>

      {/* Description r3uT1P */}
      <p
        data-name="Description"
        className="font-sans text-[14px] text-[#9b9b9c] leading-[1.71] max-w-[534px]"
      >
        We offers a comprehensive suite of digital marketing services that cover
        all aspects of our online presence. From SEO and social media marketing to
        content creation and PPC advertising, they have the expertise and resources
        to handle our diverse marketing needs.
      </p>

      {/* Frame 2007: Social Icons */}
      <div data-name="Frame 2007" className="flex items-center gap-3 pt-1">
        <a
          href="#facebook"
          aria-label="Facebook"
          className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center text-[#192031] shadow-sm border border-black/5"
        >
          <FacebookIcon className="w-4 h-4" />
        </a>
        <a
          href="#twitter"
          aria-label="Twitter"
          className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center text-[#192031] shadow-sm border border-black/5"
        >
          <TwitterIcon className="w-4 h-4" />
        </a>
        <a
          href="#linkedin"
          aria-label="LinkedIn"
          className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center text-[#192031] shadow-sm border border-black/5"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <a
          href="#instagram"
          aria-label="Instagram"
          className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center text-[#192031] shadow-sm border border-black/5"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;
