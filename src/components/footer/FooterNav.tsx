import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterNavProps {
  className?: string;
}

const NAV_LINKS = [
  { label: 'Service', href: '#service' },
  { label: 'Agency', href: '#agency' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Resource', href: '#resource' },
  { label: 'Contact', href: '#contact' },
];

const LICENCE_LINKS = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Copyright', href: '#copyright' },
  { label: 'Email Address', href: '#email-address' },
];

/**
 * Footer Navigation & Contact Columns - Cloned 1:1 from pen.dev node Frame 427321780
 * - Groups: Navigation (Group 2011), Licence (Group 2013), Contact (Group 2009)
 * - Header font: 18px font-semibold, color #192031, tracking-[-0.18px]
 * - Link font: 14px font-normal, color #9b9b9c, tracking-[-0.28px]
 * - Gap: 115px between columns on desktop
 */
export const FooterNav: React.FC<FooterNavProps> = ({ className = '' }) => {
  return (
    <div
      data-name="Frame 427321780"
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 lg:gap-[115px] select-none ${className}`}
    >
      {/* Group 2011: Navigation */}
      <div data-name="Group 2011" className="flex flex-col gap-6">
        <h4 className="font-sans font-semibold text-[18px] text-[#192031] tracking-[-0.18px]">
          Navigation
        </h4>
        <ul className="flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-sans text-[14px] text-[#9b9b9c] tracking-[-0.28px]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Group 2013: Licence */}
      <div data-name="Group 2013" className="flex flex-col gap-6">
        <h4 className="font-sans font-semibold text-[18px] text-[#192031] tracking-[-0.18px]">
          Licence
        </h4>
        <ul className="flex flex-col gap-3">
          {LICENCE_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-sans text-[14px] text-[#9b9b9c] tracking-[-0.28px]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Group 2009: Contact */}
      <div data-name="Group 2009" className="flex flex-col gap-6">
        <h4 className="font-sans font-semibold text-[18px] text-[#192031] tracking-[-0.18px]">
          Contact
        </h4>
        <div className="flex flex-col gap-4">
          {/* Phone */}
          <div className="flex items-center gap-2 text-[#9b9b9c]">
            <Phone className="w-5 h-5 text-[#192031] shrink-0" />
            <span className="font-sans text-[14px] tracking-[-0.28px]">
              (406) 555-0120
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-[#9b9b9c]">
            <Mail className="w-5 h-5 text-[#192031] shrink-0" />
            <span className="font-sans text-[14px] tracking-[-0.28px]">
              Hey@boostim.com
            </span>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 text-[#9b9b9c]">
            <MapPin className="w-5 h-5 text-[#192031] shrink-0 mt-0.5" />
            <span className="font-sans text-[14px] tracking-[-0.28px] leading-[1.71] max-w-[208px]">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
