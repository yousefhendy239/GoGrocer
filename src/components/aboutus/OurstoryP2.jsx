import React from 'react'
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { LuLeaf, LuTruck, LuShieldCheck } from "react-icons/lu";

const promises = [
  {
    icon: <LuLeaf />,
    title: "Picked with care",
    text: "We partner with growers and makers who care as much about quality as we do.",
  },
  {
    icon: <LuTruck />,
    title: "Fast, friendly delivery",
    text: "Your groceries arrive carefully packed, right when you expect them.",
  },
  {
    icon: <LuShieldCheck />,
    title: "Love it or let us know",
    text: "If something isn't right, we'll make it right. No fuss, no fine print.",
  },
];

const stats = [
  { value: "64%", label: "Local produce" },
  { value: "12k+", label: "Happy homes" },
  { value: "18", label: "Farm partners" },
  { value: "0", label: "Single-use bags" },
];

const OurstoryP2 = () => {
  return (
      <main className=" bg-background text-text-primary">
      <section className="bg-brand-primary/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-xs font-semibold tracking-widest text-brand-secondary">
            WHY WE'RE DIFFERENT
          </p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            The GoGrocer promise
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {promises.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-semibold tracking-widest text-brand-secondary">
            FOOD WITH A FUTURE
          </p>
          <h2 className="font-serif text-3xl font-bold md:text-5xl">
            Better for your table. Kinder to our{" "}
            <span className="text-brand-secondary">planet.</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-surface px-4 py-6"
              >
                <p className="font-serif text-3xl font-bold text-brand-accent">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold tracking-widest text-text-secondary">
                  {stat.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurstoryP2;