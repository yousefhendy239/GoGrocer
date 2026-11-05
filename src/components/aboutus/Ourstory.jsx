import React from 'react'
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { LuLeaf, LuTruck, LuShieldCheck } from "react-icons/lu";

const Ourstory = () => {
  return (
     <main className=" bg-background text-text-primary">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-widest text-brand-secondary">
            OUR STORY
          </p>

          <h1 className="font-serif text-5xl font-bold md:text-6xl">
            Small market.
            <span className="block text-brand-accent">Big heart.</span>
          </h1>

          <p className="mt-6 max-w-md leading-relaxed text-text-secondary">
            GoGrocer started with a simple belief: fresh, honest food should be
            easy to find and a joy to shop for. So we built the neighborhood
            market we always wanted.
          </p>

          <Link
            to="/Products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white"
          >
            Shop our picks
            <FiArrowRight />
          </Link>
        </div>

        <div className="relative">
          <img
            src="/about-hero.jpg"
            alt="Vendor at a neighborhood market"
            className="h-96 w-full rounded-3xl object-cover"
          />

          <div className="absolute -bottom-5 left-4 rounded-2xl bg-yellow-300 px-5 py-3 text-brand-primary shadow-lg">
            <p className="font-serif text-2xl font-bold">8 years</p>
            <p className="text-xs font-medium">of good groceries</p>
          </div>
        </div>
      </section>

    </main>
    
      
    
  )
}

export default Ourstory
