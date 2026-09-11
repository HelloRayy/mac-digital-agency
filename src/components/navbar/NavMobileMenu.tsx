import React, { useState } from 'react';
import { Menu, X, Bell } from 'lucide-react';
import { NavItem } from './types';

interface NavMobileMenuProps {
  items: NavItem[];
}

export const NavMobileMenu: React.FC<NavMobileMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [expandedItem, setExpandedItem] = useState<string | null>(null);

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
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg px-6 py-6 flex flex-col gap-4 z-50 animate-fadeIn">
          <ul className="flex flex-col gap-2">
            {items.map((item) => {
              const isExpanded = expandedItem === item.label;

              return (
                <li key={item.label} className="border-b border-gray-100 pb-2">
                  {item.hasDropdown && item.dropdownItems ? (
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedItem((prev) =>
                            prev === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between text-[16px] font-semibold text-brand-text py-2 text-left select-none"
                      >
                        <span>{item.label}</span>
                        <svg
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          className={`transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        >
                          <path
                            d="M1 0.75L5 4.25L9 0.75"
                            stroke="#000000"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {isExpanded && (
                        <div className="pl-3 py-1 flex flex-col gap-2 border-l-2 border-brand-lime ml-1 mt-1 mb-2">
                          {item.dropdownItems.map((sub) => (
                            <a
                              key={sub.title}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="text-[14px] font-medium text-[#878c91] hover:text-black py-1"
                            >
                              {sub.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between text-[16px] font-semibold text-brand-text py-2"
                    >
                      <span>{item.label}</span>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full h-[48px] rounded-full border border-brand-dark bg-white font-manrope font-bold text-[16px] text-brand-dark transition-all duration-200 hover:bg-[#010205] hover:text-white active:scale-[0.98]"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
