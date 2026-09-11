import React from 'react';
import { Bell } from 'lucide-react';

interface NavActionsProps {
  className?: string;
  onGetStarted?: () => void;
  onNotificationClick?: () => void;
}

export const NavActions: React.FC<NavActionsProps> = ({
  className = '',
  onGetStarted,
  onNotificationClick,
}) => {
  return (
    <div className={`flex items-center gap-[9px] ${className}`}>
      {/* "Get started" button from pen.dev Frame 427320691: width 156px, stroke 1px #010205, cornerRadius 50 */}
      <button
        type="button"
        onClick={onGetStarted}
        className="w-[156px] h-[50px] rounded-full border border-brand-dark flex items-center justify-center bg-transparent cursor-pointer"
      >
        <span className="font-manrope font-bold text-[16px] text-brand-dark tracking-[-0.32px] leading-[1.4]">
          Get started
        </span>
      </button>

      {/* Bell Notification button from pen.dev Frame 427320692: 50x50, fill #010205, cornerRadius 50 */}
      <button
        type="button"
        onClick={onNotificationClick}
        aria-label="Notifications"
        className="w-[50px] h-[50px] rounded-full bg-brand-dark flex items-center justify-center cursor-pointer"
      >
        <Bell size={20} className="text-white" strokeWidth={2} />
      </button>
    </div>
  );
};
