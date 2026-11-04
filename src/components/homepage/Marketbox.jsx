import React from "react";

const Marketbox = () => {
  return (
    <section className="relative overflow-hidden py-20 md:px-12 lg:px-20 rounded-2xl bg-[#f47b43]">
      <div className="grid lg:grid-cols-2 items-center">
        {/* Text Content */}
        <div
          className="relative z-10 flex flex-col items-start
          px-8 py-16 md:px-12 lg:px-16 text-white"
        >
          <span
            className="mb-5 text-xs font-bold uppercase
            tracking-[2px] text-white/60"
          >
            Meet the market box
          </span>

          <h2
            className="text-4xl md:text-5xl font-serif
            font-bold leading-tight"
          >
            The best of the season,
            <br />
            in one box.
          </h2>

          <p
            className="mt-5 max-w-lg text-sm md:text-base
            leading-7 text-white/80"
          >
            A rotating edit of farm-fresh produce. No guesswork, less waste, and
            something new to cook every week.
          </p>

          {/* <Link
            to="/Products"
            className="mt-7 rounded-full bg-[#064b35]
            px-6 py-4 text-sm text-white
            transition hover:bg-[#033b29]"
          >
            Explore the box <span className="ml-2">→</span>
          </Link> */}
        </div>

        {/* Image */}
        <div className="relative ">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85"
            alt="Fresh seasonal fruits and vegetables"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0
            bg-brand-accent
            to-transparent
            pointer-events-none"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Marketbox;
