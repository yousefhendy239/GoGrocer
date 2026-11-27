import { useState } from "react";
import {
  FiSearch,
  FiBell,
  FiSun,
  FiMoon,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";
import ThemeToggle from "../ThemeToggle";
const NavbarAdmin = ({ onMenuClick }) => {
  const [search, setSearch] = useState("");
  return (
    <header className="flex h-20 items-center justify-between gap-4 border-b border-border bg-background px-4 md:px-8">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <button
          onClick={onMenuClick}
          className="rounded-xl p-2 text-text-primary transition hover:bg-surface-muted lg:hidden"
        >
          <FiMenu size={22} />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile Search */}
        <button className="rounded-xl p-2 text-text-secondary transition hover:bg-surface-muted md:hidden">
          <FiSearch size={20} />
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <button className="relative rounded-xl border border-border p-2.5 text-text-secondary transition hover:bg-surface-muted hover:text-brand-primary">
          <FiBell size={19} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand-accent ring-2 ring-surface" />
        </button>

        {/* Admin Profile */}
        <button className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-surface-muted sm:gap-3">
          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
            Y
          </div>

          {/* User Info */}
          <div className="hidden text-left sm:block">
            <p className="text-sm font-bold text-text-primary">Admin</p>

            <p className="text-xs text-text-secondary">Administrator</p>
          </div>

          <FiChevronDown
            className="hidden text-text-secondary sm:block"
            size={16}
          />
        </button>
      </div>
    </header>
  );
};

export default NavbarAdmin;
