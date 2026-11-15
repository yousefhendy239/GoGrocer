
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiEdit2,
  FiTag,
  FiShield,
  FiCreditCard,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi";

const DELIVERY_FEE = 4.99;

const Checkout = ({ cartItems = [], onClearCart }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [address, setAddress] = useState({
    name: "Jamie Green",
    street: "24 Market Lane",
    city: "Greenfield, CA 90210",
    phone: "(555) 014-2026",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = cartItems.length > 0 ? DELIVERY_FEE : 0;
  const total = Math.max(0, subtotal + delivery - discount);

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const applyPromoCode = () => {
    if (promoCode.trim().toUpperCase() === "FRESH10") {
      const newDiscount = subtotal * 0.1;
      setDiscount(newDiscount);
      setPromoMessage("Promo code applied! 10% discount.");
    } else {
      setDiscount(0);
      setPromoMessage("Invalid promo code. Please try again.");
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    setOrderPlaced(true);
    onClearCart?.();
  };

  if (orderPlaced) {
    return (
      <main className="min-h-[70vh] bg-background px-4 py-16">
        <div className="mx-auto max-w-xl rounded-2xl bg-surface p-8 text-center shadow-sm">
          <FiCheckCircle className="mx-auto mb-5 text-6xl text-brand-secondary" />
          <h1 className="mb-3 text-3xl font-bold text-text-primary">
            Order placed!
          </h1>
          <p className="mb-7 text-text-secondary">
            Thank you for shopping with GoGrocer. Your order has been
            received successfully.
          </p>
          <Link
            to="/"
            className="inline-block rounded-xl bg-brand-primary px-8 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-[70vh] bg-background px-4 py-16">
        <div className="mx-auto max-w-xl rounded-2xl bg-surface p-8 text-center shadow-sm">
          <FiTruck className="mx-auto mb-5 text-5xl text-brand-secondary" />
          <h1 className="mb-3 text-2xl font-bold text-text-primary">
            Your cart is empty
          </h1>
          <p className="mb-7 text-text-secondary">
            Add some fresh groceries before checking out.
          </p>
          <Link
            to="/products"
            className="inline-block rounded-xl bg-brand-primary px-8 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Explore products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Almost at your door
          </p>
          <h1 className="mb-3 text-4xl font-extrabold text-text-primary">
            Checkout.
          </h1>
          <p className="text-text-secondary">
            Review your delivery details and place your order securely.
          </p>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Checkout details */}
            <div className="space-y-6 lg:col-span-2">
              {/* Delivery address */}
              <section className="rounded-2xl border border-border bg-surface p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-section-bg font-bold text-brand-primary">
                      1
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-text-primary">
                        Delivery address
                      </h2>
                      <p className="text-sm text-text-secondary">
                        Where should we bring your groceries?
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsEditingAddress(!isEditingAddress)}
                    className="flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-secondary"
                  >
                    <FiEdit2 />
                    {isEditingAddress ? "Cancel" : "Edit"}
                  </button>
                </div>

                {isEditingAddress ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["name", "Full name"],
                      ["phone", "Phone number"],
                      ["street", "Street address"],
                      ["city", "City and postal code"],
                    ].map(([key, label]) => (
                      <label key={key} className="block">
                        <span className="mb-2 block text-sm font-semibold text-text-primary">
                          {label}
                        </span>
                        <input
                          required
                          value={address[key]}
                          onChange={(e) =>
                            setAddress({
                              ...address,
                              [key]: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none transition focus:border-brand-secondary"
                        />
                      </label>
                    ))}

                    <button
                      type="button"
                      onClick={() => setIsEditingAddress(false)}
                      className="rounded-xl bg-brand-primary px-5 py-3 font-semibold text-white sm:col-span-2"
                    >
                      Save address
                    </button>
                  </div>
                ) : (
                  <div className="rounded-xl border border-border bg-background p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="font-bold text-text-primary">
                        {address.name}
                      </p>
                      <span className="rounded-full bg-section-bg px-3 py-1 text-xs font-bold text-brand-primary">
                        Selected
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-text-secondary">
                      {address.street}
                      <br />
                      {address.city}
                      <br />
                      {address.phone}
                    </p>
                  </div>
                )}
              </section>

              {/* Payment method */}
              <section className="rounded-2xl border border-border bg-surface p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-section-bg font-bold text-brand-primary">
                    2
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-text-primary">
                      Payment method
                    </h2>
                    <p className="text-sm text-text-secondary">
                      Choose how you'd like to pay.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                    paymentMethod === "card"
                      ? "border-brand-primary bg-section-bg/50"
                      : "border-border hover:border-brand-secondary"
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="accent-brand-primary"
                    />
                    <FiCreditCard className="text-2xl text-brand-primary" />
                    <span className="flex-1">
                      <span className="block font-bold text-text-primary">
                        Credit/Debit Card
                      </span>
                      <span className="text-sm text-text-secondary">
                        Visa ending in 4242
                      </span>
                    </span>
                    {paymentMethod === "card" && (
                      <FiCheckCircle className="text-xl text-brand-primary" />
                    )}
                  </label>

                  <label className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                    paymentMethod === "cash"
                      ? "border-brand-primary bg-section-bg/50"
                      : "border-border hover:border-brand-secondary"
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                      className="accent-brand-primary"
                    />
                    <FiTruck className="text-2xl text-brand-primary" />
                    <span className="flex-1">
                      <span className="block font-bold text-text-primary">
                        Cash on Delivery
                      </span>
                      <span className="text-sm text-text-secondary">
                        Pay when your order arrives
                      </span>
                    </span>
                    {paymentMethod === "cash" && (
                      <FiCheckCircle className="text-xl text-brand-primary" />
                    )}
                  </label>
                </div>
              </section>

              {/* Promo code */}
              <section className="rounded-2xl border border-border bg-surface p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-section-bg font-bold text-brand-primary">
                    3
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-text-primary">
                      Promo code
                    </h2>
                    <p className="text-sm text-text-secondary">
                      Have a fresh deal? Add it here.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                    <input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-sm text-text-primary outline-none focus:border-brand-secondary"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={applyPromoCode}
                    className="rounded-xl border border-brand-primary px-6 py-3 font-bold text-brand-primary transition hover:bg-section-bg"
                  >
                    Apply code
                  </button>
                </div>

                {promoMessage && (
                  <p className={`mt-3 text-sm ${
                    discount > 0 ? "text-brand-secondary" : "text-red-500"
                  }`}>
                    {promoMessage}
                  </p>
                )}
                <p className="mt-2 text-xs text-text-secondary">
                  Demo promo code: FRESH10
                </p>
              </section>
            </div>

            {/* Order summary */}
            <aside className="h-fit rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-28">
              <h2 className="mb-6 text-2xl font-extrabold text-text-primary">
                Your order
              </h2>

              <div className="mb-6 max-h-80 space-y-5 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-section-bg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute -right-0.5 -top-0.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-primary px-1 text-xs font-bold text-white">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-bold text-text-primary">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {formatPrice(item.price)} {item.unit}
                      </p>
                    </div>

                    <p className="font-bold text-text-primary">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-border pt-5 text-sm">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span className="font-semibold text-text-primary">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex justify-between text-text-secondary">
                  <span>Delivery</span>
                  <span className="font-semibold text-text-primary">
                    {formatPrice(delivery)}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-brand-secondary">
                    <span>Discount</span>
                    <span className="font-semibold">
                      -{formatPrice(discount)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between border-t border-border pt-4 text-lg font-extrabold text-text-primary">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-brand-primary px-5 py-4 font-bold text-white shadow-sm transition hover:bg-brand-secondary"
              >
                Place order · {formatPrice(total)}
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-text-secondary">
                <FiShield className="text-brand-secondary" />
                Secure checkout · Freshness guaranteed
              </div>
            </aside>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Checkout;
