import React from 'react';

interface NavActionsProps {
  className?: string;
  onGetStarted?: () => void;
  onNotificationClick?: () => void;
}

/**
 * Frame 427320699 - Cloned 1:1 from pen.dev canvas
 * - gap: 9px
 * - Frame 427320691: Button "Get started" (156x50px, stroke 1px #010205, cornerRadius 50, Manrope 700 16px -0.32px)
 * - Frame 427320692: Button Bell (50x50px, fill #010205, cornerRadius 50, Vector paths stroke #ffffff 2px)
 */
export const NavActions: React.FC<NavActionsProps> = ({
  className = '',
  onGetStarted,
  onNotificationClick,
}) => {
  return (
    <div
      data-name="Frame 427320699"
      className={`flex items-center gap-[9px] ${className}`}
    >
      {/* Frame 427320691: "Get started" Button */}
      <button
        type="button"
        data-name="Frame 427320691"
        onClick={onGetStarted}
        className="w-[156px] h-[50px] rounded-[50px] border border-[#010205] py-[13px] px-[16px] flex items-center justify-center bg-transparent cursor-pointer transition-all duration-150 hover:bg-black/5 active:scale-[0.98]"
      >
        <span
          data-name="Get started"
          className="font-manrope font-bold text-[16px] text-[#010205] tracking-[-0.32px] leading-[1.4] transition-all"
        >
          Get started
        </span>
      </button>

      {/* Frame 427320692: Notification Bell Button */}
      <button
        type="button"
        data-name="Frame 427320692"
        onClick={onNotificationClick}
        aria-label="Notifications"
        className="w-[50px] h-[50px] rounded-[50px] bg-[#010205] flex items-center justify-center cursor-pointer transition-all duration-150 hover:bg-[#1a1d24] active:scale-[0.98]"
      >
        {/* Exact bell vector geometry from pen.dev (node g7p4Bi: tf3aq & H9DvqJ) */}
        <svg
          data-name="bell"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8c0-1.5913-0.6321-3.11742-1.7574-4.24264C15.1174 2.63214 13.5913 2 12 2c-1.5913 0-3.1174 0.63214-4.24264 1.75736C6.63214 4.88258 6 6.4087 6 8c0 7-3 9-3 9h18s-3-2-3-9z"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.73 21c-0.1758 0.3031-0.4282 0.5546-0.7318 0.7295-0.3036 0.1749-0.6478 0.267-0.9982 0.267-0.3504 0-0.6946-0.0921-0.9982-0.267-0.3037-0.1749-0.556-0.4264-0.7318-0.7295"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
