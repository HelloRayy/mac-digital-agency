import React, { useState, useEffect, useRef } from 'react';
import { NavItem } from './types';
import { DEFAULT_NAV_ITEMS } from './Navbar';

interface NavLinksProps {
  items?: NavItem[];
  className?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  items = DEFAULT_NAV_ITEMS,
  className = '',
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLUListElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <ul ref={containerRef} className={`flex items-center gap-[33px] ${className}`}>
      {items.map((item) => {
        const isOpen = openDropdown === item.label;

        return (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() => {
              if (item.hasDropdown && item.dropdownItems) {
                setOpenDropdown(item.label);
              }
            }}
            onMouseLeave={() => {
              if (item.hasDropdown) {
                setOpenDropdown(null);
              }
            }}
          >
            <a
              href={item.href}
              onClick={(e) => {
                if (item.hasDropdown && item.dropdownItems) {
                  e.preventDefault();
                  setOpenDropdown((prev) => (prev === item.label ? null : item.label));
                }
              }}
              className="relative group inline-flex items-center gap-[7px] py-1 text-[14px] font-semibold text-brand-text/80 hover:text-[#010205] leading-normal transition-colors duration-200 active:scale-[0.98] select-none cursor-pointer"
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
                  className={`transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
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
              )}
              {/* Subtle animated underline indicator */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#010205] rounded-full transition-all duration-200 ease-out group-hover:w-full" />
            </a>

            {/* Dropdown Menu UI */}
            {isOpen && item.dropdownItems && (
              <>
                {/* Invisible hover bridge to prevent cursor gap */}
                <div className="absolute top-full left-0 w-full h-2" />

                <div
                  className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-[20px] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.15)] border border-black/8 p-3 z-50 flex flex-col gap-1 select-none animate-fadeIn"
                >
                  {item.dropdownItems.map((subItem) => (
                    <a
                      key={subItem.title}
                      href={subItem.href}
                      onClick={() => setOpenDropdown(null)}
                      className="group/sub flex flex-col gap-0.5 p-2.5 rounded-[12px] transition-all duration-150 hover:bg-[#fafafa] active:bg-[#f3f3f3]"
                    >
                      <span className="font-sans font-semibold text-[14px] text-[#010205] group-hover/sub:text-black">
                        {subItem.title}
                      </span>
                      {subItem.desc && (
                        <span className="font-sans text-[12px] text-[#878c91] leading-tight">
                          {subItem.desc}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};
