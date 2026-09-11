import React from 'react';
import { NavLogo } from './NavLogo';
import { NavLinks } from './NavLinks';
import { NavActions } from './NavActions';
import { NavMobileMenu } from './NavMobileMenu';
import { NavItem } from './types';

interface NavbarProps {
  items?: NavItem[];
  className?: string;
  onGetStarted?: () => void;
  onNotificationClick?: () => void;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Service', href: '#service', hasDropdown: true },
  { label: 'Agency', href: '#agency', hasDropdown: true },
  { label: 'Case study', href: '#case-study', hasDropdown: true },
  { label: 'Resources', href: '#resources', hasDropdown: true },
  { label: 'Contact', href: '#contact', hasDropdown: false },
];

/**
 * Navbar component cloned 1:1 from pen.dev canvas node `vijxI` (Frame 427320844)
 * - Container: max-w-[1440px], padding py-[30px] px-6 md:px-12 lg:px-[80px]
 * - Left Group: Logo + NavLinks (gap 74px)
 * - Right Group: Action Buttons (gap 9px)
 */
export const Navbar: React.FC<NavbarProps> = ({
  items = DEFAULT_NAV_ITEMS,
  className = '',
  onGetStarted,
  onNotificationClick,
}) => {
  return (
    <header className={`w-full bg-white relative z-40 ${className}`}>
      <nav
        className="max-w-[1440px] mx-auto w-full py-[24px] lg:py-[30px] px-6 md:px-12 lg:px-[80px] flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Left Section: Logo + Desktop Navigation Links (pen.dev Frame 427321469: gap 74px) */}
        <div className="flex items-center gap-8 xl:gap-[74px]">
          <NavLogo />
          <div className="hidden lg:block">
            <NavLinks items={items} />
          </div>
        </div>

        {/* Right Section: Action Buttons (pen.dev Frame 427320699: gap 9px) */}
        <div className="hidden lg:flex items-center">
          <NavActions
            onGetStarted={onGetStarted}
            onNotificationClick={onNotificationClick}
          />
        </div>

        {/* Mobile / Tablet Responsive Menu */}
        <NavMobileMenu items={items} />
      </nav>
    </header>
  );
};

export default Navbar;
