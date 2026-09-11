import React from 'react';
import { NavItem } from './types';

interface NavLinksProps {
  items?: NavItem[];
  className?: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Service', href: '#service', hasDropdown: true },
  { label: 'Agency', href: '#agency', hasDropdown: true },
  { label: 'Case study', href: '#case-study', hasDropdown: true },
  { label: 'Resources', href: '#resources', hasDropdown: true },
  { label: 'Contact', href: '#contact', hasDropdown: false },
];

export const NavLinks: React.FC<NavLinksProps> = ({
  items = DEFAULT_NAV_ITEMS,
  className = '',
}) => {
  return (
    <ul className={`flex items-center gap-[33px] ${className}`}>
      {items.map((item) => (
        <li key={item.label} className="relative">
          <a
            href={item.href}
            className="inline-flex items-center gap-[7px] text-[14px] font-semibold text-brand-text py-1"
          >
            <span>{item.label}</span>
            {item.hasDropdown && (
              <svg
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 0.75L5 4.25L9 0.75"
                  stroke="#000000"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};
