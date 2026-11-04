import React from "react";

const Favouritproducts = () => {
  const favourites = [
    {
      id: 1,
      name: "Creamy Avocado",
      category: "Fruits",
      price: "2.49",
      unit: "each",
      rating: "4.9",
      badge: "Bestseller",
      image: "../Avocado.avif",
    },
    {
      id: 2,
      name: "Garden Harvest",
      category: "Vegetables",
      price: "6.25",
      unit: "bundle",
      rating: "4.8",
      badge: "Farm fresh",
      image: "../Avocado.avif",
    },
    {
      id: 3,
      name: "Orchard Mix",
      category: "Fruits",
      price: "5.95",
      unit: "box",
      rating: "4.7",
      badge: "",
      image: "../Avocado.avif",
    },
    {
      id: 4,
      name: "Country Sourdough",
      category: "Bakery",
      price: "4.75",
      unit: "loaf",
      rating: "4.9",
      badge: "Baked today",
      image: "../Avocado.avif",
    },
  ];
  return (
    <section className="page-section px-6 py-20 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-secondary">
            Picked for you
          </p>

          <h2 className="font-heading text-4xl text-brand-primary sm:text-5xl">
            This week's favorites
          </h2>
        </div>

        <a
          href="/Products"
          className="hidden font-bold text-brand-primary hover:text-brand-accent sm:block"
        >
          See all products →
        </a>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {favourites.map((product) => (
          <div
            key={product.id}
            className="group rounded-[26px] border border-border bg-surface p-2 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative aspect-[1.15] overflow-hidden rounded-[22px] bg-background">
              {product.badge && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-background px-3 py-1 text-xs font-bold text-brand-primary">
                  {product.badge}
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Details */}
            <div className="px-2 pb-2 pt-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                  {product.category}
                </span>

                <span className="text-xs font-bold text-brand-accent">
                  ★ {product.rating}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-text-primary">
                {product.name}
              </h3>

              {/* Price */}
              <div className="mt-3 flex items-center justify-between">
                <p className="font-extrabold text-text-primary">
                  ${product.price}
                  <span className="ml-1 text-xs font-normal text-text-secondary">
                    / {product.unit}
                  </span>
                </p>

                <button className=" cursor-pointer ">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-primary text-2xl text-white">
                    +
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Link */}
      <div className="mt-7 text-center sm:hidden">
        <a href="/Products" className="font-bold text-brand-primary">
          See all products →
        </a>
      </div>
    </section>
  );
};

export default Favouritproducts;
