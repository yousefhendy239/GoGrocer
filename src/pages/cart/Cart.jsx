import { useContext } from "react";
import { CartMainContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
  } = useContext(CartMainContext);
  
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <main className="min-h-[70vh] bg-background px-5 py-16 transition-colors duration-300">
      <div className="mx-auto max-w-310">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-primary">
          Your basket
        </p>

        <h1 className="mb-12 text-3xl font-extrabold text-text-primary md:text-4xl">
          Shopping cart.
        </h1>

        {cartItems.length === 0 ? (
          <div className="flex min-h-[420px] w-full flex-col items-center justify-center rounded-3xl border border-border bg-surface px-6 py-16 text-center shadow-sm transition-colors duration-300">
            <h2 className="mb-3 text-2xl font-bold text-text-primary">
              Your cart is feeling light.
            </h2>

            <p className="mb-8 max-w-md text-base leading-relaxed text-text-secondary">
              Let's fill it with something fresh and delicious.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-3 rounded-full bg-brand-accent px-7 py-3 font-bold text-white transition-transform duration-300 hover:scale-105"
            >
              Browse products
              <FiArrowRight size={20} />
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <section className="space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors duration-300 sm:flex-row sm:items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase text-text-secondary">
                      {item.category}
                    </p>

                    <h2 className="mt-1 font-bold text-text-primary">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-sm text-text-secondary">
                      ${item.price.toFixed(2)} / {item.unit}
                    </p>

                    <p className="mt-1 text-xs text-text-secondary">
                      Rating: {item.rating}
                      {item.badge && ` • ${item.badge}`}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 rounded-full border border-border px-3 py-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                        className="text-text-primary disabled:opacity-30"
                        aria-label="Decrease quantity"
                      >
                        <FiMinus />
                      </button>

                      <span className="min-w-5 text-center font-semibold text-text-primary">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="text-text-primary"
                        aria-label="Increase quantity"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <p className="min-w-20 text-right font-bold text-text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label={`Remove ${item.name}`}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </article>
              ))}
            </section>

            <aside className="h-fit rounded-2xl border border-border bg-surface p-6">
              <h2 className="mb-5 text-xl font-bold text-text-primary">
                Order summary
              </h2>

              <div className="flex justify-between text-text-secondary">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="my-4 border-t border-border" />

              <div className="flex justify-between text-lg font-bold text-text-primary">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link
                to="/checkout"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-brand-accent px-5 py-3 font-bold text-white transition-transform duration-300 hover:scale-105"
              >
                Proceed to checkout
                <FiArrowRight size={20} />
              </Link>

              <Link
                to="/products"
                className="mt-4 block text-center text-sm font-semibold text-brand-primary hover:underline"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
