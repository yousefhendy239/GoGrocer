import { useState } from "react";

const Field = ({ label, id, type = "text", placeholder, value, onChange, autoComplete }) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="text-xs font-semibold text-emerald-900"
      style={{ color: "#496354" }}
    >
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="w-full rounded-xl border bg-stone-50 px-5 py-4 text-[15px] outline-none transition focus:ring-2 focus:ring-emerald-800/30 placeholder:text-[#8A9A8E]"
      style={{
        backgroundColor: "#FFFDF7",
        borderColor: "#DCE2D9",
        color: "#183D2A",
      }}
    />
  </div>
);

const UserIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#194D33"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 21v-1a6 6 0 0 1 6-6h3a6 6 0 0 1 6 6v1" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export default function CreateAccount() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [agreed, setAgreed] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!agreed || form.password.length < 6) return;
    console.log("Create account", form);
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-stone-50 px-4 py-10"
      style={{ backgroundColor: "#FFFDF7" }}
    >
      <div
        className="w-full max-w-[640px] rounded-3xl bg-[#E8ECDF] p-8"
        style={{ backgroundColor: "#E8ECDF", border: "1px solid #DCE2D9" }}
      >
        {/* Icon */}
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DCE9D4]"
          style={{ backgroundColor: "#DCE9D4" }}
        >
          <UserIcon />
        </div>

        {/* Heading */}
        <h1
          className="mt-8 font-bold tracking-tight text-emerald-950"
          style={{
            color: "#183D2A",
            fontFamily: "'DM Serif Display', 'Playfair Display', Georgia, 'Times New Roman', serif",
            fontSize: "2.6rem",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Create account
        </h1>
        <p className="mt-3 text-[15px]" style={{ color: "#68746C" }}>
          It only takes a minute.
        </p>

        {/* Fields */}
        <div className="mt-8 flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field
              label="First name"
              id="firstName"
              placeholder="Jamie"
              value={form.firstName}
              onChange={set("firstName")}
              autoComplete="given-name"
            />
            <Field
              label="Last name"
              id="lastName"
              placeholder="Green"
              value={form.lastName}
              onChange={set("lastName")}
              autoComplete="family-name"
            />
          </div>

          <Field
            label="Email address"
            id="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set("email")}
            autoComplete="email"
          />
          <Field
            label="Phone number"
            id="phone"
            type="tel"
            placeholder="(555) 014-2026"
            value={form.phone}
            onChange={set("phone")}
            autoComplete="tel"
          />
          <Field
            label="Delivery address"
            id="address"
            placeholder="24 Market Lane, Greenfield"
            value={form.address}
            onChange={set("address")}
            autoComplete="street-address"
          />
          <Field
            label="Password"
            id="password"
            type="password"
            placeholder="At least 6 characters"
            value={form.password}
            onChange={set("password")}
            autoComplete="new-password"
          />

          {/* Terms */}
          <label className="mt-1 flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-5 w-5 shrink-0 cursor-pointer rounded-md border accent-emerald-900"
              style={{ borderColor: "#8A9A8E", accentColor: "#194D33" }}
            />
            <span className="text-xs font-semibold" style={{ color: "#496354" }}>
              I agree to the Terms of Service and Privacy Policy.
            </span>
          </label>

          {/* Submit */}
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center gap-3 rounded-full bg-emerald-900 px-7 py-4 text-base font-bold text-white transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/50 focus-visible:ring-offset-2"
              style={{ backgroundColor: "#194D33", color: "#FFFFFF" }}
            >
              Create account
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-[15px]" style={{ color: "#68746C" }}>
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium hover:underline"
            style={{ color: "#397C55" }}
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
