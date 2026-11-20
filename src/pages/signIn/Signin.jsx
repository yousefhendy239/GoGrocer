import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

/* ================================================================== */
/*  SHARED: theme, icons, UI                                           */
/*  (exported so SignUp.jsx can reuse them)                            */
/* ================================================================== */
export const colors = {
  page: "#FFFDF7",
  card: "#E8ECDF",
  badge: "#DCE9D4",
  green: "#194D33",
  title: "#183D2A",
  muted: "#68746C",
  label: "#496354",
  link: "#397C55",
  border: "#DCE2D9",
  error: "#B3261E",
  errorBg: "#FBEAE8",
};

export const css = `
  .gg-input::placeholder { color: #8A9A8E; }
  .gg-input:focus { outline: none; border-color: #397C55; box-shadow: 0 0 0 3px rgba(57,124,85,.2); }
  .gg-input[aria-invalid="true"] { border-color: #B3261E; }
  .gg-input[aria-invalid="true"]:focus { box-shadow: 0 0 0 3px rgba(179,38,30,.18); }
  .gg-btn:hover:not(:disabled) { background-color: #123A26 !important; }
  .gg-btn:disabled { opacity: .65; cursor: not-allowed; }
  .gg-btn:focus-visible, .gg-check:focus-visible, .gg-ghost:focus-visible { outline: 2px solid #397C55; outline-offset: 2px; }
`;

export const UserIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5" />
  </svg>
);

export const CameraIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function FieldError({ id, children }) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium" style={{ color: colors.error }}>
      {children}
    </p>
  );
}

export function FormError({ children }) {
  if (!children) return null;
  return (
    <div role="alert" className="mb-5 rounded-xl px-4 py-3 text-sm font-medium" style={{ backgroundColor: colors.errorBg, color: colors.error }}>
      {children}
    </div>
  );
}

export function Field({ id, label, type = "text", placeholder, autoComplete, value, onChange, onBlur, error }) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold" style={{ color: colors.label }}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
        className="gg-input w-full rounded-xl border px-4 py-3.5 text-sm"
        style={{ backgroundColor: colors.page, borderColor: colors.border, color: colors.title }}
      />
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  );
}

/* ================================================================== */
/*  SHARED: validation                                                 */
/* ================================================================== */
export const MIN_PASSWORD = 6;
export const MAX_IMAGE_MB = 2;
const ALLOWED_IMAGES = ["image/jpeg", "image/png", "image/webp"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validateEmail = (value) => {
  const v = value.trim();
  if (!v) return "Enter your email address.";
  if (!EMAIL_RE.test(v)) return "Enter a valid email, like you@example.com.";
  return "";
};

const validatePassword = (value) => {
  if (!value) return "Enter your password.";
  if (value.length < MIN_PASSWORD) return `Use at least ${MIN_PASSWORD} characters.`;
  if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) return "Include at least one letter and one number.";
  return "";
};

const validateName = (value, label) => {
  const v = value.trim();
  if (!v) return `Enter your ${label}.`;
  if (v.length < 2) return `${label[0].toUpperCase() + label.slice(1)} needs at least 2 characters.`;
  return "";
};

const validatePhone = (value) => {
  const v = value.trim();
  if (!v) return "Enter your phone number.";
  if (!/^[+\d\s()-]+$/.test(v)) return "Use digits only. You can include +, spaces, dashes or brackets.";
  const digits = v.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) return "Phone number should have 8 to 15 digits.";
  return "";
};

const validateAddress = (value) => {
  const v = value.trim();
  if (!v) return "Enter your delivery address.";
  if (v.length < 6) return "Add a bit more detail, like street and area.";
  return "";
};

export const validateImage = (file) => {
  if (!file) return "";
  if (!ALLOWED_IMAGES.includes(file.type)) return "Choose a JPG, PNG or WebP image.";
  if (file.size > MAX_IMAGE_MB * 1024 * 1024) return `Image must be smaller than ${MAX_IMAGE_MB} MB.`;
  return "";
};

const clean = (errors) => Object.fromEntries(Object.entries(errors).filter(([, m]) => m));

export const validateSignIn = (v) =>
  clean({
    email: validateEmail(v.email),
    password: v.password ? "" : "Enter your password.",
  });

export const validateSignUp = (v) =>
  clean({
    firstName: validateName(v.firstName, "first name"),
    lastName: validateName(v.lastName, "last name"),
    email: validateEmail(v.email),
    phone: validatePhone(v.phone),
    address: validateAddress(v.address),
    password: validatePassword(v.password),
    terms: v.agreed ? "" : "Agree to the Terms of Service to continue.",
  });

/* ================================================================== */
/*  SHARED: auth context                                               */
/*  DEMO BACKEND (localStorage): replace the functions in `api` with   */
/*  real fetch/axios calls. Never store plain passwords in production. */
/* ================================================================== */
const USERS_KEY = "gg_users";
const SESSION_KEY = "gg_session";
const wait = (ms = 600) => new Promise((r) => setTimeout(r, ms));

const read = (storage, key, fallback) => {
  try {
    const raw = storage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const fail = (message, field) => Object.assign(new Error(message), { field });
const publicUser = ({ password, ...rest }) => rest;

const api = {
  async signUp(data) {
    await wait();
    const users = read(localStorage, USERS_KEY, []);
    const email = data.email.trim().toLowerCase();
    if (users.some((u) => u.email === email)) {
      throw fail("An account with this email already exists.", "email");
    }
    const user = { id: crypto.randomUUID(), ...data, email };
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
    } catch {
      throw fail("Could not save your account. Try a smaller profile photo.", "avatar");
    }
    return { user: publicUser(user), token: "demo-token" };
  },

  async signIn({ email, password }) {
    await wait();
    const users = read(localStorage, USERS_KEY, []);
    const user = users.find((u) => u.email === email.trim().toLowerCase());
    if (!user || user.password !== password) throw fail("Email or password is incorrect.");
    return { user: publicUser(user), token: "demo-token" };
  },

  async signOut() {
    await wait(150);
  },
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = read(localStorage, SESSION_KEY, null) || read(sessionStorage, SESSION_KEY, null);
    if (saved?.user) setUser(saved.user);
    setLoading(false);
  }, []);

  const persist = useCallback((session, remember) => {
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    try {
      (remember ? localStorage : sessionStorage).setItem(SESSION_KEY, JSON.stringify(session));
    } catch {
      /* storage full or blocked: user stays signed in until refresh */
    }
  }, []);

  const signIn = useCallback(
    async ({ email, password, remember = false }) => {
      const session = await api.signIn({ email, password });
      persist(session, remember);
      setUser(session.user);
      return session.user;
    },
    [persist]
  );

  const signUp = useCallback(
    async (data) => {
      const session = await api.signUp(data);
      persist(session, true);
      setUser(session.user);
      return session.user;
    },
    [persist]
  );

  const signOut = useCallback(async () => {
    await api.signOut();
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, loading, isAuthenticated: !!user, signIn, signUp, signOut }),
    [user, loading, signIn, signUp, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}

/* ================================================================== */
/*  SIGN IN PAGE                                                       */
/* ================================================================== */
export default function SignIn({ onSuccess }) {
  const { signIn } = useAuth();
  const [values, setValues] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [serverFieldError, setServerFieldError] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const errors = validateSignIn(values);
  const show = (name) => (touched[name] || submitted ? errors[name] || serverFieldError[name] : "");

  const bind = (name) => ({
    value: values[name],
    error: show(name),
    onChange: (e) => {
      setValues((v) => ({ ...v, [name]: e.target.value }));
      setServerFieldError({});
      setFormError("");
    },
    onBlur: () => setTouched((t) => ({ ...t, [name]: true })),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormError("");
    if (Object.keys(errors).length) return;

    setSubmitting(true);
    try {
      const user = await signIn({ ...values, remember });
      onSuccess?.(user);
    } catch (err) {
      if (err.field) setServerFieldError({ [err.field]: err.message });
      else setFormError(err.message || "Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4" style={{ backgroundColor: colors.page }}>
      <style>{css}</style>

      <div
        className="w-full max-w-md rounded-3xl p-8 sm:p-10"
        style={{ backgroundColor: colors.card, boxShadow: "0 10px 40px -12px rgba(25,77,51,0.15)" }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: colors.badge, color: colors.green }}>
          <UserIcon />
        </div>
        <h1 className="mt-5 font-serif text-3xl font-bold" style={{ color: colors.title }}>
          Sign in
        </h1>
        <p className="mb-7 mt-1.5 text-sm" style={{ color: colors.muted }}>
          Good to see you again.
        </p>

        <FormError>{formError}</FormError>

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-5">
            <Field id="email" label="Email address" type="email" placeholder="you@example.com" autoComplete="email" {...bind("email")} />
            <Field id="password" label="Password" type="password" placeholder="Enter your password" autoComplete="current-password" {...bind("password")} />
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
            disabled={submitting}
            className="gg-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition"
            style={{ backgroundColor: colors.green }}
          >
            {submitting ? "Signing in…" : "Sign in"}
            {!submitting && <ArrowRight />}
          </button>
        </form>

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
