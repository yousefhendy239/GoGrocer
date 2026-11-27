import { useContext } from "react";
import { ProductsMainContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const Favouritproducts = () => {
  const { getHighestRatedProducts } = useContext(ProductsMainContext);
  return (
    <section className="page-section px-6 py-20 md:px-12 lg:px-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-secondary">
            Picked for you
          </p>

          <h2 className="font-heading text-4xl text-text-primary sm:text-5xl">
            This week's favorites
          </h2>
        </div>

        <Link
          to="/products"
          className="hidden font-bold text-text-primary hover:text-brand-accent sm:block"
        >
          See all products →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {getHighestRatedProducts.map((product) => (
          <article
            key={product.id}
            className="rounded-2xl border border-border bg-surface p-2 shadow-sm"
          >
            <Link
              to={`/products/${product.id}`}
              className="relative block aspect-square overflow-hidden rounded-xl bg-white"
            >
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="size-full object-contain p-4"
              />

              {product.badge && (
                <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase text-brand-primary shadow-sm">
                  {product.badge}
                </span>
              )}
            </Link>

            <div className="space-y-1 px-2 pb-2 pt-3">
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wide text-text-secondary">
                <span className="truncate text-md">{product.category}</span>

                <span className="flex items-center gap-1 text-star">
                  <FaStar className="size-2.5" />
                  {product.rating.rate}
                </span>
              </div>

              <h3 className="line-clamp-1 text-md font-medium text-text-primary">
                <Link
                  to={`/products/${product.id}`}
                  className="hover:underline"
                >
                  {product.title}
                </Link>
              </h3>

              <div className="flex items-center justify-between pt-1">
                <p className="text-lg font-bold text-text-primary">
                  ${product.price.toFixed(2)}{" "}
                  <span className="text-[10px] font-normal text-text-secondary">
                    / {product.unit}
                  </span>
                </p>

                <button className="flex size-8 items-center justify-center rounded-full bg-brand-primary text-white transition hover:opacity-90">
                  <FiPlus className="size-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Favouritproducts;
