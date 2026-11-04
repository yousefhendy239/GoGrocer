import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/Products" },
    { name: "About us", path: "/Aboutus" },
    { name: "Contact", path: "/Contactus" },
    { name: "Sign in", path: "/Signin" },
  ];
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5">
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
              to="/Products"
              className="rounded-full p-2 text-text-primary transition hover:bg-background"
              aria-label="Search"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 5 5" />
              </svg>
            </Link>

            <Link
              to="/Cart"
              className="relative rounded-full p-2 text-text-primary transition hover:bg-background"
              aria-label="Cart"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M3 3h2l2.5 12h11L21 7H6" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
