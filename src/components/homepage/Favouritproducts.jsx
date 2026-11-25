import { useContext } from "react";
import { ProductsMainContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";

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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {getHighestRatedProducts.map((product) => (
          <div
            key={product.id}
            className="group rounded-[26px] border border-border bg-surface p-2 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[1.15] overflow-hidden rounded-[22px] bg-white p-4">
              {product.badge && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-background px-3 py-1 text-xs font-bold text-text-primary">
                  {product.badge}
                </span>
              )}

              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="px-2 pb-2 pt-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                  {product.category}
                </span>

                <span className="text-xs font-bold text-brand-accent">
                  ★ {product.rating.rate}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-text-primary">
                {product.name}
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <p className="font-extrabold text-text-primary">
                  ${product.price.toFixed(2)}
                  <span className="ml-1 text-xs font-normal text-text-secondary">
                    / {product.unit}
                  </span>
                </p>

                <button
                  type="button"
                  aria-label={`Add ${product.name} to cart`}
                  className="cursor-pointer"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-primary text-2xl text-white transition hover:scale-110">
                    +
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favouritproducts;
