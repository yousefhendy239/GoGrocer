import { NavLink, Link } from "react-router-dom";
import {
  FiGrid,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiHome,
  FiX,
} from "react-icons/fi";
const SideBar = ({ isOpen, onClose }) => {
  const links = [
    { name: "Overview", path: "/admin", icon: FiGrid },
    { name: "Products", path: "/admin/productsadmin", icon: FiShoppingBag },
    { name: "Orders", path: "/admin/ordersadmin", icon: FiShoppingCart },
    { name: "Customers", path: "/admin/customersadmin", icon: FiUsers },
    { name: "Home", path: "/", icon: FiHome },
  ];
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-border bg-background transition-transform duration-300 lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-border px-6">
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

          {/* Close Mobile Sidebar */}
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-muted lg:hidden"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 px-6 py-8">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-brand-primary text-white shadow-md"
                      : "text-text-secondary hover:bg-section-bg hover:text-brand-primary"
                  }`
                }
              >
                <Icon size={22} />
                {link.name}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
