import React, { useState } from "react";
import { CATEGORIES, PRODUCTS } from "./productsData";
import ProductsHeader from "./ProductsHeader";
import CategoryFilter from "./CategoryFilter";
import SearchInput from "./SearchInput";
import ProductCard from "./ProductCard";

const matchesFilters = (product, category, query) =>
  (category === "All" || product.category === category) &&
  product.name.toLowerCase().includes(query.trim().toLowerCase());

const Products = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const products = PRODUCTS.filter((p) => matchesFilters(p, category, query));

  return (
    <div className="p-3.5 bg-background">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <ProductsHeader />

        <section className="flex flex-col gap-4 border-y border-line py-4 sm:flex-row sm:items-center sm:justify-between">
          <CategoryFilter
            categories={CATEGORIES}
            active={category}
            onChange={setCategory}
          />
          <SearchInput value={query} onChange={setQuery} />
        </section>

        <div className="flex items-center justify-between py-4 text-[11px] font-medium">
          <span>{products.length} products</span>
          <span>Sort: Featured</span>
        </div>

        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Products;
