import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// بيحوّل الصورة لنص (base64) عشان نقدر نخزنها في المتصفح
const readFile = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

// كلاسات مشتركة عشان الكود ميتكررش
const labelClass = "block text-[15px] font-bold text-[#3f5543] mb-2";
const inputClass = (error) =>
  `w-full h-14 rounded-[20px] bg-[#fffef9] px-5 text-[16px] text-[#2b3a2e] placeholder:text-[#8a9a8b] outline-none border transition focus:border-[#1a4d33] ${
    error ? "border-red-500" : "border-[#dfe4d3]"
  }`;
const errorClass = "text-red-600 text-sm mt-1.5 ml-1";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const [picture, setPicture] = useState(null); // الملف اللي هيتبعت
  const [preview, setPreview] = useState(""); // رابط المعاينة بس
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handlePicture = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors({ ...errors, picture: "Choose an image file" });
      return;
    }

    if (file.size > 1024 * 1024) {
      setErrors({ ...errors, picture: "Image must be smaller than 1MB" });
      return;
    }

    setPicture(file);
    setPreview(URL.createObjectURL(file));
    setErrors({ ...errors, picture: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!user.firstName.trim()) newErrors.firstName = "Enter your first name";
    if (!user.lastName.trim()) newErrors.lastName = "Enter your last name";

    if (!user.email.trim()) {
      newErrors.email = "Enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = "Enter a valid email like you@example.com";
    }

    if (!user.phone.trim()) {
      newErrors.phone = "Enter your phone number";
    } else if (!/^[0-9+\-\s()]{8,15}$/.test(user.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!user.address.trim()) {
      newErrors.address = "Enter your delivery address";
    } else if (user.address.trim().length < 8) {
      newErrors.address = "Address is too short";
    }

    if (!user.password) {
      newErrors.password = "Enter a password";
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!agree) newErrors.agree = "Agree to the terms to continue";

    return newErrors;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setServerError("");

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      let users = JSON.parse(localStorage.getItem("users")) || [];

      const exists = users.find(
        (u) => u.email.toLowerCase() === user.email.trim().toLowerCase()
      );

      if (exists) {
        setServerError("That email is already registered. Try signing in.");
        return;
      }

      const pictureData = picture ? await readFile(picture) : "";

      users.push({
        firstName: user.firstName.trim(),
        lastName: user.lastName.trim(),
        email: user.email.trim(),
        phone: user.phone.trim(),
        address: user.address.trim(),
        password: user.password,
        picture: pictureData,
      });

      localStorage.setItem("users", JSON.stringify(users));

      navigate("/Signin");
    } catch (e) {
      console.log(e);
      setServerError("Couldn't save your account. Try a smaller photo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbfaf6] px-4 py-10 font-['Manrope',sans-serif]">
      <form
        onSubmit={handleRegister}
        noValidate
        className="w-full max-w-lg rounded-[32px] border border-[#dfe4d3] bg-[#e7ebdd] px-8 py-10 sm:px-12"
      >
        {/* دايرة الأيقونة = اختيار صورة اليوزر */}
        <div className="flex items-center gap-4">
          <label
            htmlFor="picture"
            title="Add a profile photo"
            className="relative flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#d6e5d1] text-[#1a4d33]"
          >
            {preview ? (
              <img src={preview} alt="Your profile" className="h-full w-full object-cover" />
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            )}
          </label>
          <input
            id="picture"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePicture}
          />
          <div>
            <label htmlFor="picture" className="cursor-pointer text-sm font-bold text-[#2d7a4f]">
              {preview ? "Change photo" : "Add a profile photo"}
            </label>
            {errors.picture && <p className="text-red-600 text-sm">{errors.picture}</p>}
          </div>
        </div>

        <h1 className="mt-6 font-['DM_Serif_Display',serif] text-[44px] leading-none text-[#14301f]">
          Create account
        </h1>
        <p className="mt-3 text-[17px] text-[#6b7a6c]">It only takes a minute.</p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>First name</label>
            <input
              name="firstName"
              type="text"
              placeholder="Jamie"
              className={inputClass(errors.firstName)}
              value={user.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className={errorClass}>{errors.firstName}</p>}
          </div>

          <div>
            <label className={labelClass}>Last name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Green"
              className={inputClass(errors.lastName)}
              value={user.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className={errorClass}>{errors.lastName}</p>}
          </div>
        </div>

        <div className="mt-5">
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
          <label className={labelClass}>Phone number</label>
          <input
            name="phone"
            type="tel"
            placeholder="(555) 014-2026"
            className={inputClass(errors.phone)}
            value={user.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>

        <div className="mt-5">
          <label className={labelClass}>Delivery address</label>
          <input
            name="address"
            type="text"
            placeholder="24 Market Lane, Greenfield"
            className={inputClass(errors.address)}
            value={user.address}
            onChange={handleChange}
          />
          {errors.address && <p className={errorClass}>{errors.address}</p>}
        </div>

        <div className="mt-5">
          <label className={labelClass}>Password</label>
          <input
            name="password"
            type="password"
            placeholder="At least 6 characters"
            className={inputClass(errors.password)}
            value={user.password}
            onChange={handleChange}
          />
          {errors.password && <p className={errorClass}>{errors.password}</p>}
        </div>

        <label className="mt-6 flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="h-5 w-5 rounded-md border border-[#b9c2ae] accent-[#1a4d33]"
          />
          <span className="text-sm font-bold text-[#3f5543]">
            I agree to the Terms of Service and Privacy Policy.
          </span>
        </label>
        {errors.agree && <p className={errorClass}>{errors.agree}</p>}

        {serverError && (
          <div className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {serverError}
          </div>
        )}

        <button
          type="submit"
          className="mt-7 inline-flex h-14 items-center gap-3 rounded-full bg-[#1a4d33] px-8 text-[17px] font-bold text-white transition hover:bg-[#143d28] disabled:opacity-60"
        >
          Create account
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
        </button>

        <p className="mt-8 text-center text-[16px] text-[#6b7a6c]">
          Already have an account?{" "}
          <Link to="/Signin" className="text-[#2d7a4f] hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;