import { FiX } from "react-icons/fi";
const AddProduct = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-surface shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-5">
          <div>
            <h2 className="text-xl font-bold text-text-primary">
              Add New Product
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Fill in the product information below.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-text-secondary transition hover:bg-surface-muted"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5 p-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-text-primary">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none focus:border-brand-primary"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Category
              </label>
              <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none focus:border-brand-primary">
                <option value="">Select Category</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Dairy">Dairy</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Price (EGP)
              </label>
              <input
                type="number"
                placeholder="Enter price"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none focus:border-brand-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Stock Quantity
              </label>
              <input
                type="number"
                placeholder="Enter quantity"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none focus:border-brand-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Image
              </label>
              <input
                type="file"
                placeholder="Enter image URL"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none focus:border-brand-primary"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-text-primary">
              Description
            </label>
            <textarea
              rows="3"
              placeholder="Write product description..."
              className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary outline-none focus:border-brand-primary"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 border-t border-border pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-border px-5 py-3 text-sm font-bold text-text-secondary hover:bg-surface-muted"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-brand-primary px-5 py-3 text-sm font-bold text-white hover:bg-brand-secondary"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
