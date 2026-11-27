import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  IoCartSharp,
  IoPersonCircleSharp,
  IoMenu,
  IoClose,
} from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About us", path: "/aboutus" },
    { name: "Contact", path: "/contactus" },
    { name: "Sign in", path: "/signin" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-310 items-center justify-between px-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 4C10 4 5 9 5 15c0 3 2 5 5 5 6 0 10-7 10-16Z" />
              <path d="M3 21c4-7 8-10 14-13" />
            </svg>
          </span>

          <span className="text-2xl font-extrabold tracking-tight text-text-primary">
            go<span className="text-brand-accent">grocer</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative text-sm font-bold transition-colors ${
                  isActive
                    ? "text-brand-primary after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-brand-accent"
                    : "text-text-secondary hover:text-brand-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative rounded-full p-2 text-2xl text-text-primary transition hover:bg-section-bg"
          >
            <IoCartSharp />
          </Link>

          <Link
            to="/profile"
            className="rounded-full p-2 text-2xl text-text-primary transition hover:bg-section-bg"
          >
            <IoPersonCircleSharp />
          </Link>

          <ThemeToggle />

          {/* Hamburger Button - Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 text-2xl text-text-primary transition hover:bg-section-bg md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="flex flex-col gap-2 border-t border-border bg-background px-5 py-4 lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-brand-primary/10 text-brand-primary"
                    : "text-text-secondary hover:bg-section-bg hover:text-brand-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
