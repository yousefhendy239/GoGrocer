import { useContext, useState } from "react";
import { ProductsMainContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import ProductsHeader from "./ProductsHeader";
import CategoryFilter from "./CategoryFilter";
import SearchInput from "./SearchInput";

// ------
const matchesFilters = (product, category, query) => {
  const name = (product.title ?? product.name ?? "").toLowerCase();

  return (
    (category === "All" || product.category === category) &&
    name.includes(query.trim().toLowerCase())
  );
};
//------

const Products = () => {
  const {
    products: allProducts,
    productsError,
    productsLoading,
  } = useContext(ProductsMainContext);

  //-----------
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  //-----------

  //-------
  if (productsLoading) return <p className="p-10 text-center">Loading...</p>;
  if (productsError)
    return (
      <p className="p-10 text-center">Something went wrong: {productsError}</p>
    );

  //-------

  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

  const products = allProducts.filter((p) =>
    matchesFilters(p, category, query),
  );

  // ---------------
  return (
    <div className="bg-background p-3.5">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <ProductsHeader />

        <section className="flex flex-col gap-4 border-y border-border py-4 sm:flex-row sm:items-center sm:justify-between">
          <CategoryFilter
            categories={categories}
            active={category}
            onChange={setCategory}
          />
          <SearchInput value={query} onChange={setQuery} />
        </section>
        <div className="flex items-center justify-between py-4 text-[11px] font-medium text-text-primary">
          <span>{products.length} products</span>
          <span>Sort: Featured</span>
        </div>

        {products.length === 0 ? (
          <p className="py-16 text-center text-text-secondary">
            No products found.
          </p>
        ) : (
          <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default Products;
