import React, { useState } from 'react';
import { Menu, X, Bell } from 'lucide-react';
import { NavItem } from './types';

interface NavMobileMenuProps {
  items: NavItem[];
}

export const NavMobileMenu: React.FC<NavMobileMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden flex items-center gap-3">
      {/* Quick mobile action bell */}
      <button
        type="button"
        aria-label="Notifications"
        className="w-[42px] h-[42px] rounded-full bg-brand-dark flex items-center justify-center text-white"
      >
        <Bell size={18} strokeWidth={2} />
      </button>

      {/* Hamburger Toggle */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="w-[42px] h-[42px] rounded-full border border-brand-dark flex items-center justify-center text-brand-dark cursor-pointer"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg px-6 py-6 flex flex-col gap-4 z-50">
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-[16px] font-semibold text-brand-text py-2 border-b border-gray-100"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
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

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full h-[48px] rounded-full border border-brand-dark font-manrope font-bold text-[16px] text-brand-dark transition-all duration-150 hover:bg-black/5 active:scale-[0.98]"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
