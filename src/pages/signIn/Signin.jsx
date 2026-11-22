import { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthMainContext} from "../../context/AuthContext";

const labelClass = "block text-[15px] font-bold text-[#3f5543] mb-2";
const inputClass = (error) =>
  `w-full h-14 rounded-[20px] bg-[#fffef9] px-5 text-[16px] text-[#2b3a2e] placeholder:text-[#8a9a8b] outline-none border transition focus:border-[#1a4d33] ${
    error ? "border-red-500" : "border-[#dfe4d3]"
  }`;
const errorClass = "text-red-600 text-sm mt-1.5 ml-1";

const Signin = () => {
  const navigate = useNavigate();
  const { login } =useContext(AuthMainContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!user.email.trim()) {
      newErrors.email = "Enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = "Enter a valid email like you@example.com";
    }

    if (!user.password) {
      newErrors.password = "Enter your password";
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setServerError("");

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // بنجيب اليوزرز اللي اتسجلوا من صفحة Signup (متخزنين في المتصفح)
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem("users")) || [];
    } catch (e) {
      console.log(e);
    }

    const found = users.find(
      (u) =>
        u.email.toLowerCase() === user.email.trim().toLowerCase() &&
        u.password === user.password
    );

    if (!found) {
      setServerError("Wrong email or password.");
      return;
    }

    // منحطش الباسورد في الـ context
    const { password, ...safeUser } = found;

    login(safeUser, "local-token", remember);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbfaf6] px-4 py-10 font-['Manrope',sans-serif]">
      <form
        onSubmit={handleLogin}
        noValidate
        className="w-full max-w-lg rounded-[32px] border border-[#dfe4d3] bg-[#e7ebdd] px-8 py-10 sm:px-12"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d6e5d1] text-[#1a4d33]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </div>

        <h1 className="mt-6 font-['DM_Serif_Display',serif] text-[44px] leading-none text-[#14301f]">
          Sign in
        </h1>
        <p className="mt-3 text-[17px] text-[#6b7a6c]">Good to see you again.</p>

        <div className="mt-8">
          <label className={labelClass}>Email address</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className={inputClass(errors.email)}
            value={user.email}
            onChange={handleChange}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div className="mt-5">
          <label className={labelClass}>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className={inputClass(errors.password)}
            value={user.password}
            onChange={handleChange}
          />
          {errors.password && <p className={errorClass}>{errors.password}</p>}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-5 w-5 rounded-md border border-[#b9c2ae] accent-[#1a4d33]"
            />
            <span className="text-sm font-bold text-[#3f5543]">Remember me</span>
          </label>

          <button type="button" className="text-sm font-bold text-[#2d7a4f] hover:underline">
            Forgot password?
          </button>
        </div>

        {serverError && (
          <div className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {serverError}
          </div>
        )}

        <button
          type="submit"
          className="mt-7 inline-flex h-14 items-center gap-3 rounded-full bg-[#1a4d33] px-8 text-[17px] font-bold text-white transition hover:bg-[#143d28] disabled:opacity-60"
        >
          Sign in
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
        </button>

        <p className="mt-8 text-center text-[16px] text-[#6b7a6c]">
          New to GoGrocer?{" "}
          <Link to="/Signup" className="text-[#2d7a4f] hover:underline">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
