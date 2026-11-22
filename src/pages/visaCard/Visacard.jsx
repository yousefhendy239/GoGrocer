
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {
  LuCreditCard,
  LuLock,
  LuMapPin,
  LuShieldCheck,
} from "react-icons/lu";

const Visacard = () => {
  const itemsPrice = 2.49;
  const deliveryPrice = 4.99;
  const total = (itemsPrice + deliveryPrice).toFixed(2);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const [paid, setPaid] = useState(false);

  const inputStyle =
    "w-full rounded-xl border bg-background px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:border-brand-secondary";

  const normalBorder = "border-border";
  const errorBorder = "border-red-500";

  const changeName = (e) => {
    setName(e.target.value);
    setErrors({ ...errors, name: "" });
  };

  const changeNumber = (e) => {
    let digits = e.target.value.replace(/\D/g, "");
    digits = digits.slice(0, 16);
    const spaced = digits.replace(/(.{4})/g, "$1 ").trim();
    setNumber(spaced);
    setErrors({ ...errors, number: "" });
  };

  const changeExpiry = (e) => {
    let digits = e.target.value.replace(/\D/g, "");
    digits = digits.slice(0, 4);

    if (digits.length > 2) {
      digits = digits.slice(0, 2) + "/" + digits.slice(2);
    }

    setExpiry(digits);
    setErrors({ ...errors, expiry: "" });
  };

  const changeCvv = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    setCvv(digits.slice(0, 4));
    setErrors({ ...errors, cvv: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const cardDigits = number.replace(/\s/g, "");
    const month = Number(expiry.slice(0, 2));

    if (name.trim() === "") {
      newErrors.name = "Please enter the cardholder name.";
    }

    if (cardDigits === "") {
      newErrors.number = "Please enter your card number.";
    } else if (cardDigits.length !== 16) {
      newErrors.number = "Card number must be 16 digits.";
    }

    if (expiry === "") {
      newErrors.expiry = "Please enter the expiry date.";
    } else if (expiry.length !== 5) {
      newErrors.expiry = "Use the format MM/YY.";
    } else if (month < 1 || month > 12) {
      newErrors.expiry = "Month must be between 01 and 12.";
    }

    if (cvv === "") {
      newErrors.cvv = "Please enter the security code.";
    } else if (cvv.length < 3) {
      newErrors.cvv = "Code must be 3 or 4 digits.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setPaid(true);
    }
  };

  const digitsOnly = number.replace(/\s/g, "");

  let previewNumber = "•••• •••• •••• 4242";

  if (digitsOnly !== "") {
    previewNumber = digitsOnly.padEnd(16, "•").match(/.{4}/g).join(" ");
  }

  const previewName = name.trim() || "Jamie Green";
  const previewExpiry = expiry || "12/29";

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-text-primary">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/Cart"
          className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary"
        >
          <FiArrowLeft />
          Back to cart
        </Link>

        <div className="mt-6 grid items-start gap-6 md:grid-cols-[1.5fr_1fr]">
          <section className="rounded-3xl border border-border bg-surface p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest text-brand-secondary">
                  SECURE PAYMENT
                </p>

                <h1 className="mt-2 font-serif text-4xl font-bold">
                  Pay with Visa.
                </h1>
              </div>

              <span className="rounded-lg bg-brand-primary px-3 py-2 text-xs font-extrabold italic text-white">
                VISA
              </span>
            </div>

            <p className="mt-3 max-w-sm text-sm text-text-secondary">
              Enter your card details to securely complete your GoGrocer order.
            </p>

            {/* 3D VISA CARD */}
            <div className="flex justify-center sm:justify-start">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover-3d my-12 mx-2 block w-full max-w-xs cursor-pointer"
              >
                <div className="card w-full overflow-hidden rounded-2xl bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] shadow-xl">
                  <div className="card-body relative min-h-[190px] p-5">
                    <div className="mb-10 flex justify-between">
                      <div className="text-sm font-bold tracking-wider">
                        GOGROCER
                      </div>

                      <div className="text-5xl opacity-10">❁</div>
                    </div>

                    <div className="mb-5 text-base tracking-widest text-white/50">
                      {previewNumber}
                    </div>

                    <div className="flex justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-[9px] text-white/40">
                          CARD HOLDER
                        </div>

                        <div className="truncate text-xs font-semibold uppercase">
                          {previewName}
                        </div>
                      </div>

                      <div className="shrink-0">
                        <div className="text-[9px] text-white/40">
                          EXPIRES
                        </div>

                        <div className="text-xs font-semibold">
                          {previewExpiry}
                        </div>
                      </div>

                      <div className="self-end text-xl font-extrabold italic">
                        VISA
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8 empty divs required for 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </a>
            </div>

            {paid ? (
              <div className="mt-8 rounded-2xl border border-border bg-background p-6 text-center">
                <LuShieldCheck className="mx-auto text-3xl text-brand-secondary" />

                <h2 className="mt-3 font-serif text-2xl font-bold">
                  Payment successful
                </h2>

                <p className="mt-1 text-sm text-text-secondary">
                  Thank you! Your order is on its way.
                </p>

                <Link
                  to="/Tracking"
                  className="mt-5 inline-block rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white"
                >
                  Track my order
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-semibold">
                    Cardholder name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Jamie Green"
                    value={name}
                    onChange={changeName}
                    className={`${inputStyle} ${errors.name ? errorBorder : normalBorder}`}
                  />

                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="number" className="mb-1 block text-xs font-semibold">
                    Card number
                  </label>

                  <input
                    id="number"
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    value={number}
                    onChange={changeNumber}
                    className={`${inputStyle} ${errors.number ? errorBorder : normalBorder}`}
                  />

                  {errors.number && (
                    <p className="mt-1 text-xs text-red-500">{errors.number}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="mb-1 block text-xs font-semibold">
                      Expiry date
                    </label>

                    <input
                      id="expiry"
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={changeExpiry}
                      className={`${inputStyle} ${errors.expiry ? errorBorder : normalBorder}`}
                    />

                    {errors.expiry && (
                      <p className="mt-1 text-xs text-red-500">{errors.expiry}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cvv" className="mb-1 block text-xs font-semibold">
                      Security code
                    </label>

                    <input
                      id="cvv"
                      type="password"
                      placeholder="CVV"
                      value={cvv}
                      onChange={changeCvv}
                      className={`${inputStyle} ${errors.cvv ? errorBorder : normalBorder}`}
                    />

                    {errors.cvv && (
                      <p className="mt-1 text-xs text-red-500">{errors.cvv}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90"
                >
                  Pay ${total} securely
                  <LuLock />
                </button>

                <p className="flex items-center justify-center gap-1 text-[11px] text-text-secondary">
                  <LuShieldCheck />
                  Encrypted and securely processed by Visa
                </p>
              </form>
            )}
          </section>

          <aside className="rounded-3xl border border-border bg-brand-primary/10 p-6">
            <h2 className="font-serif text-2xl font-bold">
              Payment summary
            </h2>

            <div className="mt-4 flex items-center gap-3 rounded-xl bg-surface p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                <LuCreditCard />
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-widest text-text-secondary">
                  PAYING WITH
                </p>

                <p className="text-xs font-bold">Visa Credit/Debit Card</p>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-xs text-text-secondary">
              <div className="flex justify-between">
                <span>Items (1)</span>

                <span className="font-bold text-text-primary">
                  ${itemsPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>

                <span className="font-bold text-text-primary">
                  ${deliveryPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="text-xs font-bold">Total due</span>

              <span className="text-2xl font-bold">${total}</span>
            </div>

            <div className="mt-4 flex items-start gap-2 border-t border-border pt-4 text-[11px] text-text-secondary">
              <LuMapPin className="mt-0.5" />

              <div>
                <p>Delivering to</p>

                <p className="font-bold text-text-primary">24 Market Lane</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Visacard;
