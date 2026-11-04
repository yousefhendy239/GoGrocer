import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section className="page-section relative overflow-hidden bg-[#dde9d5] rounded-2xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-start p-10
          max-lg:absolute max-lg:inset-0 max-lg:justify-center
          max-lg:p-6 max-lg:py-10 max-lg:bg-black/40 max-lg:text-white"
        >
          <span className="mb-6 bg-background text-brand-primary rounded-2xl p-2">
            Your neighborhood market
          </span>

          <h1 className="text-brand-primary text-6xl leading-tight md:text-7xl max-lg:text-5xl max-lg:leading-tight max-lg:text-white">
            Fresh feels
            <br />
            <span className="text-brand-accent">good.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 opacity-75 md:text-lg">
            Everyday groceries, market-fresh produce, and pantry favorites —
            carefully picked and delivered to your door.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-row flex-wrap gap-3">
            <Link
              to="/Products"
              className="bg-brand-primary text-surface p-3 rounded-2xl hover:bg-brand-secondary"
            >
              Shop fresh <span>→</span>
            </Link>

            <Link
              to="/Aboutus"
              className="bg-background text-brand-primary p-3 rounded-2xl hover:bg-surface"
            >
              Our story
            </Link>
          </div>

          {/* Features */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-current/10 pt-7 max-lg:hidden">
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                <CiDeliveryTruck />
              </span>

              <div>
                <p className="text-sm font-extrabold">Free delivery</p>
                <p className="text-xs opacity-60">Over $35</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🌿</span>

              <div>
                <p className="text-sm font-extrabold">Freshness</p>
                <p className="text-xs opacity-60">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-full max-lg:col-span-full max-lg:min-h-[650px]">
          <img
            src="https://images.unsplash.com/photo-1592502712628-c5219bf0bc12?auto=format&fit=crop&w=1400&q=85"
            alt="Fresh groceries and market produce"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none bg-gradient-to-r from-[#dde9d5] via-[#dde9d5]/70 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
