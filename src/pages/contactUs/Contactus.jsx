import React, { useState } from "react";
import Header from "../../components/Header";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiCheck,
  FiChevronDown,
} from "react-icons/fi";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "Order inquiry",
  message: "",
};

const inputClasses =
  "w-full rounded-xl px-4 py-2.5 text-sm bg-white dark:bg-[#222D23] border border-gray-300 dark:border-[#384939] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#7F8F81] focus:outline-none focus:ring-2 focus:ring-[#F3A83B] focus:border-transparent transition";

const labelClasses =
  "block mb-1.5 text-sm font-medium text-gray-600 dark:text-[#C7D3C8]";

const Contactus = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (isSubmitted) setIsSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (form.phone && !/^[\d\s()+-]{7,}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!form.message.trim()) newErrors.message = "Please write a message";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }
    // TODO: replace with a real API call, e.g. await api.post("/contact", form)
    setIsSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  const FieldError = ({ name }) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-red-500 dark:text-red-400">
        {errors[name]}
      </p>
    ) : null;

  const contactInfo = [
    { icon: FiMail, label: "Email", value: "support@gogrocer.com" },
    { icon: FiPhone, label: "Phone", value: "(555) 014-2026" },
    {
      icon: FiMapPin,
      label: "Store Address",
      value: "24 Market Lane, Greenfield",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1D281E] text-gray-900 dark:text-white transition-colors duration-300">
      <Header />

      <section className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="max-w-3xl w-full">
          {/* Main Contact Card */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#3A543B] border border-gray-200 dark:border-[#4A664B] shadow-sm p-6 sm:p-8">
            {/* Card Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-[#588157]">
                <FiMail className="h-6 w-6 text-green-700 dark:text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Contact us
                </h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-[#C7D3C8]">
                  Have a question or need help with your order? Send us a
                  message.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className={labelClasses}>
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Jamie"
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <FieldError name="firstName" />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClasses}>
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Green"
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <FieldError name="lastName" />
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jamie@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <FieldError name="email" />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 014-2026"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <FieldError name="phone" />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="subject" className={labelClasses}>
                    Subject / Topic
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none pr-10 cursor-pointer`}
                    >
                      <option>Order inquiry</option>
                      <option>Delivery support</option>
                      <option>General question</option>
                    </select>
                    <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-[#C7D3C8]" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className={labelClasses}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                  <FieldError name="message" />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-h-[2.5rem] flex items-center">
                  {isSubmitted && (
                    <div role="status" className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-[#588157]">
                        <FiCheck className="h-5 w-5 text-green-700 dark:text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                          Message sent
                        </p>
                        <p className="text-xs text-gray-600 dark:text-[#C7D3C8]">
                          We have received your message and will get back to you
                          shortly.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F3A83B] hover:bg-[#E09628] active:scale-[0.98] px-7 py-3 text-sm font-bold text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-[#F3A83B] focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-[#3A543B]"
                >
                  Send message
                  <FiCheck className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Quick Contact Info Strip */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-gray-50 dark:bg-[#222D23] border border-gray-200 dark:border-[#384939] px-4 py-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-[#588157]">
                  <Icon className="h-5 w-5 text-green-700 dark:text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-600 dark:text-[#C7D3C8]">
                    {label}
                  </p>
                  <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
