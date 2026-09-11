export interface DropdownSubItem {
  title: string;
  desc?: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownSubItem[];
}
