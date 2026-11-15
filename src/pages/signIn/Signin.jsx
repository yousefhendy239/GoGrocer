import { useState } from "react";

const colors = {
  page: "#FFFDF7",
  card: "#E8ECDF",
  badge: "#DCE9D4",
  green: "#194D33",
  title: "#183D2A",
  muted: "#68746C",
  label: "#496354",
  link: "#397C55",
  border: "#DCE2D9",
};

/* Pseudo-states can't be set inline, so they live in a tiny scoped stylesheet */
const css = `
  .gg-input::placeholder { color: #8A9A8E; }
  .gg-input:focus { outline: none; border-color: #397C55; box-shadow: 0 0 0 3px rgba(57,124,85,.2); }
  .gg-btn:hover { background-color: #123A26 !important; }
  .gg-btn:focus-visible, .gg-check:focus-visible { outline: 2px solid #397C55; outline-offset: 2px; }
`;

const UserIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Field({ id, label, type = "text", placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold" style={{ color: colors.label }}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="gg-input w-full rounded-xl border px-4 py-3.5 text-sm"
        style={{ backgroundColor: colors.page, borderColor: colors.border, color: colors.title }}
      />
    </div>
  );
}

export default function SignIn() {
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log({ ...data, remember });
    // TODO: call your API here
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{ backgroundColor: colors.page }}
    >
      <style>{css}</style>

      <div
        className="w-full max-w-md rounded-3xl p-8 sm:p-10"
        style={{ backgroundColor: colors.card, boxShadow: "0 10px 40px -12px rgba(25,77,51,0.15)" }}
      >
        {/* Header */}
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{ backgroundColor: colors.badge, color: colors.green }}
        >
          <UserIcon />
        </div>
        <h1 className="mt-5 font-serif text-3xl font-bold" style={{ color: colors.title }}>
          Sign in
        </h1>
        <p className="mb-7 mt-1.5 text-sm" style={{ color: colors.muted }}>
          Good to see you again.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <Field id="email" label="Email address" type="email" placeholder="you@example.com" autoComplete="email" />
            <Field id="password" label="Password" type="password" placeholder="Enter your password" autoComplete="current-password" />
          </div>

          <div className="mb-6 mt-4 flex items-center justify-between text-xs">
            <label className="flex cursor-pointer items-center gap-2 font-semibold" style={{ color: colors.label }}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="gg-check h-4 w-4 rounded border-gray-300 bg-white"
                style={{ accentColor: colors.green }}
              />
              Remember me
            </label>
            <a href="/forgot-password" className="font-semibold hover:underline" style={{ color: colors.link }}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="gg-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition"
            style={{ backgroundColor: colors.green }}
          >
            Sign in
            <ArrowRight />
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-xs" style={{ color: colors.muted }}>
          New to GoGrocer?{" "}
          <a href="/signup" className="font-medium hover:underline" style={{ color: colors.link }}>
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
