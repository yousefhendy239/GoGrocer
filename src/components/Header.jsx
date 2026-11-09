import { NavLink, Link, Links } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { IoCartSharp } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";

const Header = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/Products" },
    { name: "About us", path: "/Aboutus" },
    { name: "Contact", path: "/Contactus" },
    { name: "Sign in", path: "/Signin" },
  ];
  return (
    <header className=" sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
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

        {/* Navigation */}
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
            to="/Cart"
            className="text-2xl rounded-full p-2 text-text-primary transition hover:bg-section-bg"
          >
            <IoCartSharp />
          </Link>

          <Link
            to="/profile"
            className="text-2xl rounded-full p-2 text-text-primary transition hover:bg-section-bg"
          >
            <IoPersonCircleSharp />
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
