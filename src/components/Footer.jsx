
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="w-full border-t border-border bg-brand-primary dark:bg-background transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 pb-16 pt-24 sm:px-10 md:grid-cols-3 md:gap-10 lg:px-12 lg:pb-24 lg:pt-32">

        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-btn-WhOr dark:bg-text-primary"></span>

            <span className="text-2xl font-extrabold tracking-tight text-btn-WhOr dark:text-text-primary">
              gogrocer
            </span>
          </div>

          <p className="max-w-[340px] text-base leading-[1.8] text-btn-WhOr/80 dark:text-text-primary/80">
            Fresh groceries, friendly people, and a little
            more joy in every bag.
          </p>
        </div>

        {/* Explore Section */}
        <div className="flex flex-col items-start">
          <h3 className="mb-6 text-sm font-extrabold tracking-[0.15em] text-brand-accent">
            EXPLORE
          </h3>

          <nav className="flex flex-col gap-4">
            <Link
              to="/products"
              className="text-base font-semibold text-btn-WhOr/90 dark:text-text-primary/90 transition-colors hover:text-brand-accent"
            >
              Shop all
            </Link>

            <Link
              to="/aboutus"
              className="text-base font-semibold text-btn-WhOr/90 dark:text-text-primary/90 transition-colors hover:text-brand-accent"
            >
              Our story
            </Link>

            <Link
              to="/contactus"
              className="text-base font-semibold text-btn-WhOr/90 dark:text-text-primary/90 transition-colors hover:text-brand-accent"
            >
              Contact us
            </Link>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-start">
          <h3 className="mb-6 text-sm font-extrabold tracking-[0.15em] text-brand-accent">
            FRESH NOTES
          </h3>

          <p className="mb-5 max-w-[340px] text-base leading-[1.8] text-btn-WhOr/80 dark:text-text-primary/80">
            Seasonal recipes and market news, twice a month.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-[340px] items-center rounded-full bg-brand-secondary dark:bg-surface p-1.5"
          >
            <input
              type="email"
              placeholder="Your email"
              aria-label="Your email"
              required
              className="min-w-0 flex-1 bg-transparent px-4 py-2 text-base text-btn-WhOr dark:text-text-primary outline-none placeholder:text-btn-WhOr/60 dark:placeholder:text-text-secondary"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-accent text-btn-WhOr dark:text-text-primary transition-transform hover:scale-105"
            >
              <FiArrowRight size={21} />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-btn-WhOr/20 dark:border-text-primary/20 px-6 py-6 text-center">
        <p className="text-sm text-btn-WhOr/70 dark:text-text-primary/70">
          © 2026 GoGrocer Market. Made fresh daily.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
