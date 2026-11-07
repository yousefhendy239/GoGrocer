import React from "react";
import { Link } from "react-router-dom";

const Marketbox = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-brand-accent">
      <div className="grid items-center lg:grid-cols-2">
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start px-8 py-16 text-white md:px-12 lg:px-16 lg:py-20">
          <span className="mb-5 text-xs font-bold uppercase tracking-[2px] text-white/70">
            Meet the market box
          </span>

          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            The best of the season,
            <br />
            in one box.
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/85 md:text-base">
            A rotating edit of farm-fresh produce. No guesswork, less waste, and
            something new to cook every week.
          </p>

          <Link
            to="/Products"
            className="mt-7 rounded-full bg-background px-6 py-4 text-sm font-semibold text-brand-primary transition hover:bg-surface"
          >
            Explore the box <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Image */}
        <div className="relative h-full">
          <img
            src="/marketphoto.avif"
            alt="Fresh market box"
            className="absolute inset-0 h-full w-full object-cover rounded-2xl"
          />

          {/* Gradient Shadow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-accent via-brand-accent/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Marketbox;
