import { useContext, useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiPackage,
  FiMoreVertical,
  FiFilter,
} from "react-icons/fi";
import AddProduct from "./productsFunctions/AddProduct";
import { ProductsMainContext } from "../../../context/ProductContext";
import { DeleteProduct } from "./productsFunctions/DeleteProduct";

const ProductsDashboard = () => {
  const { products } = useContext(ProductsMainContext);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-text-primary md:text-3xl">
            Products
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            Manage your store products, inventory and pricing.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-secondary"
        >
          <FiPlus size={19} />
          Add New Product
        </button>
      </div>

      {/* Overview Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-text-secondary">
              Total Products
            </p>
            <FiPackage className="text-brand-primary" size={22} />
          </div>
          <h2 className="mt-3 text-2xl font-extrabold text-text-primary">
            {products.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-sm font-semibold text-text-secondary">In Stock</p>
          <h2 className="mt-3 text-2xl font-extrabold text-green-600">23</h2>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-sm font-semibold text-text-secondary">
            Low / Out of Stock
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-brand-accent">62</h2>
        </div>
      </div>

      {/* Products Table */}
      <section className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        {/* Table Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-border p-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-lg font-bold text-text-primary">
              All Products
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Manage and monitor your inventory.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
              <FiSearch className="text-text-secondary" size={18} />
              <input
                onChange={() => getProductById()}
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent text-sm text-text-primary outline-none placeholder:text-text-secondary sm:w-48"
              />
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-text-secondary transition hover:bg-surface-muted">
              <FiFilter size={17} />
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead>
              <tr className="bg-surface-muted text-xs font-bold uppercase tracking-wide text-text-secondary">
                <th className="px-5 py-4">Product</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Price</th>
                <th className="px-5 py-4">Stock</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-border transition hover:bg-surface-muted/50"
                >
                  {/* Product */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-12 w-12 rounded-xl border border-border object-cover"
                      />
                      <div>
                        <p className="text-sm font-bold text-text-primary">
                          {product.title}
                        </p>
                        <p className="mt-1 text-xs text-text-secondary">
                          ID: #{product.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-4 text-sm text-text-secondary">
                    {product.category}
                  </td>

                  {/* Price */}
                  <td className="px-5 py-4 text-sm font-bold text-text-primary">
                    EGP {product.price}
                  </td>

                  {/* Stock */}
                  <td className="px-5 py-4 text-sm font-semibold text-text-primary">
                    100 units
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                        product.status === "In Stock"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : product.status === "Low Stock"
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      instock
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        title="Edit Product"
                        className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      >
                        <FiEdit2 size={17} />
                      </button>

                      <button
                        onClick={() => DeleteProduct(products)}
                        title="Delete Product"
                        className="rounded-lg p-2 text-red-600 transition hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        <FiTrash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {showAddForm && <AddProduct onClose={() => setShowAddForm(false)} />}
    </main>
  );
};

export default ProductsDashboard;
