import React from "react";

const ProductsHeader = () => {
  return (
    <header className="mb-8 space-y-3">
      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-900">
        The good stuff
      </p>
      <h1 className="font-display text-5xl font-bold  text-emerald-900">
        Fresh picks, <span className="text-amber-600">every day.</span>
      </h1>
      <p className="max-w-md text-sm text-slate-500">
        From farm-fresh produce to pantry staples, everything here earns its
        spot on the shelf.
      </p>
    </header>
  );
};

export default ProductsHeader;
