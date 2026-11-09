import React from "react";

const Shopbycategoreis = () => {
  const aisles = [
    {
      name: "Fresh Fruits",
      description: "Nature's sweetest picks",
      image: "../Meat.jpg",
    },
    {
      name: "Fresh Vegetables",
      description: "Fresh from the farm",
      image: "../Meat.jpg",
    },
    {
      name: "Dairy & Eggs",
      description: "Everyday freshness",
      image: "../Meat.jpg",
    },
    {
      name: "Meat & Seafood",
      description: "Quality you can trust",
      image: "../Meat.jpg",
    },
  ];
  return (
    <section className=" px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm font-bold uppercase tracking-[3px] text-brand-primary">
            Explore our store
          </span>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-heading text-4xl font-normal text-text-primary md:text-5xl">
              Shop by Aisle
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aisles.map((aisle) => (
            <div
              key={aisle.name}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={aisle.image}
                  alt={aisle.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="font-heading text-lg text-text-primary">
                  {aisle.name}
                </h3>

                <p className="mt-1 text-xs text-text-primary">
                  {aisle.description}
                </p>

                <span className="mt-4 inline-block text-sm font-bold text-text-primary">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shopbycategoreis;
