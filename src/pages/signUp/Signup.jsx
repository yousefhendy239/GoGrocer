import { useRef, useState } from "react";
import {
  useAuth,
  colors,
  css,
  Field,
  FieldError,
  FormError,
  UserIcon,
  CameraIcon,
  ArrowRight,
  MAX_IMAGE_MB,
  MIN_PASSWORD,
  validateImage,
  validateSignUp,
} from "./SignIn";

const fileToDataURL = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read the image."));
    reader.readAsDataURL(file);
  });

export default function SignUp({ onSuccess }) {
  const { signUp } = useAuth();
  const fileRef = useRef(null);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [avatar, setAvatar] = useState(""); // data URL: used for preview and saved with the user
  const [avatarError, setAvatarError] = useState("");
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [serverFieldError, setServerFieldError] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const errors = validateSignUp({ ...values, agreed });
  const show = (name) => (touched[name] || submitted ? errors[name] || serverFieldError[name] : "");

  const bind = (name) => ({
    value: values[name],
    error: show(name),
    onChange: (e) => {
      setValues((v) => ({ ...v, [name]: e.target.value }));
     setServerFieldError((prev) => {
  const next = { ...prev };
  delete next[name];
  return next;
});
      setFormError("");
    },
    onBlur: () => setTouched((t) => ({ ...t, [name]: true })),
  });

  const handleImage = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    const problem = validateImage(file);
    if (problem) {
      setAvatarError(problem);
      return;
    }
    try {
      setAvatar(await fileToDataURL(file));
      setAvatarError("");
    } catch (err) {
      setAvatarError(err.message);
    }
  };

  const removeImage = () => {
    setAvatar("");
    setAvatarError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormError("");
    if (Object.keys(errors).length) return;

    setSubmitting(true);
    try {
      const user = await signUp({
        ...values,
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        address: values.address.trim(),
        avatar,
      });
      onSuccess?.(user);
    } catch (err) {
      if (err.field === "avatar") setAvatarError(err.message);
      else if (err.field) setServerFieldError({ [err.field]: err.message });
      else setFormError(err.message || "Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const termsError = show("terms");

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10" style={{ backgroundColor: colors.page }}>
      <style>{css}</style>

      <div className="w-full max-w-[640px] rounded-3xl p-8" style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}>
        <h1
          className="font-bold tracking-tight"
          style={{
            color: colors.title,
            fontFamily: "'DM Serif Display', 'Playfair Display', Georgia, 'Times New Roman', serif",
            fontSize: "2.6rem",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Create account
        </h1>
        <p className="mt-3 text-[15px]" style={{ color: colors.muted }}>
          It only takes a minute.
        </p>

        {/* Profile photo */}
        <div className="mt-8 flex items-center gap-5">
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full"
            style={{ backgroundColor: colors.badge, color: colors.green }}
          >
            {avatar ? <img src={avatar} alt="Your profile photo" className="h-full w-full object-cover" /> : <UserIcon size={32} />}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="gg-ghost inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
                style={{ borderColor: colors.green, color: colors.green }}
              >
                <CameraIcon />
                {avatar ? "Change photo" : "Add photo"}
              </button>
              {avatar && (
                <button type="button" onClick={removeImage} className="gg-ghost text-xs font-semibold hover:underline" style={{ color: colors.muted }}>
                  Remove
                </button>
              )}
            </div>
            <p className="mt-2 text-xs" style={{ color: colors.muted }}>
              Optional. JPG, PNG or WebP, up to {MAX_IMAGE_MB} MB.
            </p>
            <FieldError id="avatar-error">{avatarError}</FieldError>
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImage}
            className="hidden"
            aria-label="Upload profile photo"
          />
        </div>

        <div className="mt-6">
          <FormError>{formError}</FormError>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field id="firstName" label="First name" placeholder="Jamie" autoComplete="given-name" {...bind("firstName")} />
            <Field id="lastName" label="Last name" placeholder="Green" autoComplete="family-name" {...bind("lastName")} />
          </div>

          <Field id="email" label="Email address" type="email" placeholder="you@example.com" autoComplete="email" {...bind("email")} />
          <Field id="phone" label="Phone number" type="tel" placeholder="(555) 014-2026" autoComplete="tel" {...bind("phone")} />
          <Field id="address" label="Delivery address" placeholder="24 Market Lane, Greenfield" autoComplete="street-address" {...bind("address")} />
          <Field
            id="password"
            label="Password"
            type="password"
            placeholder={`At least ${MIN_PASSWORD} characters, with a letter and a number`}
            autoComplete="new-password"
            {...bind("password")}
          />

          <div>
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                onBlur={() => setTouched((t) => ({ ...t, terms: true }))}
                aria-invalid={termsError ? "true" : "false"}
                aria-describedby={termsError ? "terms-error" : undefined}
                className="gg-check h-5 w-5 shrink-0 cursor-pointer rounded-md"
                style={{ accentColor: colors.green }}
              />
              <span className="text-xs font-semibold" style={{ color: colors.label }}>
                I agree to the Terms of Service and Privacy Policy.
              </span>
            </label>
            <FieldError id="terms-error">{termsError}</FieldError>
          </div>

          <div>
            <button
              type="submit"
              disabled={submitting}
              className="gg-btn inline-flex items-center gap-3 rounded-full px-7 py-4 text-base font-bold text-white transition"
              style={{ backgroundColor: colors.green }}
            >
              {submitting ? "Creating account…" : "Create account"}
              {!submitting && <ArrowRight />}
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-[15px]" style={{ color: colors.muted }}>
          Already have an account?{" "}
          <a href="/signin" className="font-medium hover:underline" style={{ color: colors.link }}>
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
