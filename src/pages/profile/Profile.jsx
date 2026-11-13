import React, { useState } from "react";
import { FiUser, FiCheck, FiArrowRight } from "react-icons/fi";

const initialForm = {
  firstName: "Jamie",
  lastName: "Green",
  email: "jamie@example.com",
  phone: "(555) 014-2026",
  address: "24 Market Lane, Greenfield",
};

const labelClasses =
  "block mb-1.5 text-[11px] font-semibold text-gray-600 dark:text-[#C7D3C8]";

const inputClasses =
  "w-full rounded-xl px-4 py-2.5 text-sm font-semibold " +
  "text-gray-900 dark:text-white " +
  "bg-gray-50 dark:bg-[#0F1A12] " +
  "border border-gray-300 dark:border-[#2C3F2F] " +
  "placeholder-gray-400 dark:placeholder-[#6F8171] " +
  "focus:outline-none focus:ring-2 focus:ring-[#F37A3F] focus:border-transparent transition";

const Profile = () => {
  const [form, setForm] = useState(initialForm);
  const [saved, setSaved] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (saved) setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: replace with a real API call, e.g. await api.put("/profile", form)
    setSaved(true);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    // TODO: hook up newsletter subscription
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0A140E] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Main content */}
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto w-full max-w-[520px]">
          {/* Title section */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-[#6F8171]">
            My account
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-[#F3EFE0]">
            Your <span className="text-[#F37A3F]">profile.</span>
          </h1>
          <p className="mt-3 text-xs text-gray-600 dark:text-[#C7D3C8]">
            Keep your personal and delivery details up to date.
          </p>

          {/* Personal information card */}
          <form
            onSubmit={handleSave}
            className="mt-8 rounded-3xl border border-gray-200 dark:border-[#2C3F2F] bg-white dark:bg-[#1A2B1F] p-5 sm:p-6 shadow-md dark:shadow-lg transition-colors duration-300"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-[#2C3F2F]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-[#243A2A]">
                <FiUser className="h-4 w-4 text-green-700 dark:text-[#9FD3A8]" />
              </div>
              <div>
                <h2 className="text-base font-bold text-gray-900 dark:text-white">
                  Personal information
                </h2>
                <p className="text-[11px] text-gray-600 dark:text-[#C7D3C8]">
                  These details are used for your account and order updates.
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
              <div>
                <label htmlFor="firstName" className={labelClasses}>
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="lastName" className={labelClasses}>
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="address" className={labelClasses}>
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={form.address}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-end gap-4">
              {saved && (
                <span
                  role="status"
                  className="text-xs text-green-700 dark:text-[#9FD3A8]"
                >
                  Changes saved
                </span>
              )}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#F37A3F] hover:bg-[#E56A2F] active:scale-[0.98] px-5 py-2.5 text-xs font-bold text-white transition focus:outline-none focus:ring-2 focus:ring-[#F37A3F] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#1A2B1F]"
              >
                Save changes
                <FiCheck className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-[#070F0A] border-t border-gray-200 dark:border-[#1A2B1F] transition-colors duration-300">
        <div className="mx-auto max-w-5xl px-6 py-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-[#F37A3F] dark:bg-white" />
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                gogrocer
              </span>
            </div>
            <p className="mt-4 max-w-[200px] text-[11px] leading-relaxed text-gray-600 dark:text-[#C7D3C8]">
              Fresh groceries, friendly people, and a little more joy in every
              bag.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F37A3F]">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-[11px] font-semibold text-gray-800 dark:text-[#F3EFE0]">
              <li>
                <a href="/products" className="hover:text-[#F37A3F] transition">
                  Shop all
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#F37A3F] transition">
                  Our story
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#F37A3F] transition">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Fresh notes */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F37A3F]">
              Fresh notes
            </h3>
            <p className="mt-4 max-w-[220px] text-[11px] leading-relaxed text-gray-600 dark:text-[#C7D3C8]">
              Seasonal recipes and market news, twice a month.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-3 flex items-center rounded-full bg-white dark:bg-[#0F1A12] border border-gray-300 dark:border-[#1A2B1F] pl-4 pr-1 py-1 max-w-[260px] focus-within:ring-2 focus-within:ring-[#F37A3F] transition"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Your email"
                className="flex-1 min-w-0 bg-transparent text-[11px] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#6F8171] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F37A3F] hover:bg-[#E56A2F] transition"
              >
                <FiArrowRight className="h-3.5 w-3.5 text-white" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-[#1A2B1F] py-4 text-center text-[10px] text-gray-500 dark:text-[#6F8171]">
          © {new Date().getFullYear()} GoGrocer Market. Made fresh daily.
        </div>
      </footer>
    </div>
  );
};

export default Profile;
