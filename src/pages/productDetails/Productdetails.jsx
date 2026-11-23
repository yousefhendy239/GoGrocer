import { CartMainContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {
  FiArrowLeft,
  FiMinus,
  FiPlus,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import { ProductsMainContext } from "../../context/ProductContext";
import ProductCard from "../products/ProductCard";

const Productdetails = () => {
  // 1) الـ id من الرابط
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // 2) الداتا من الـ Context
  const { getProductById, getRelatedProducts, productsLoading, productsError } =
    useContext(ProductsMainContext);

  const { addToCart } = useContext(CartMainContext);

  // 3) الكمية
  const [quantity, setQuantity] = useState(1);

  // 4) لما تفتح منتج تاني يرجع لأول الصفحة ويصفّر الكمية
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [id]);

  // 5) زرار الرجوع
  const handleBack = () => {
    if (location.key !== "default") navigate(-1);
    else navigate("/products");
  };

  // 6) loading / error
  if (productsLoading) return <p className="p-10 text-center">Loading...</p>;
  if (productsError)
    return (
      <p className="p-10 text-center">Something went wrong: {productsError}</p>
    );

  // 7) دور على المنتج
  const product = getProductById(id);

  if (!product) {
    return (
      <main className="min-h-[60vh] bg-background px-5 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold text-text-primary">
          Product not found
        </h1>
        <Link to="/products" className="text-brand-accent underline">
          Back to products
        </Link>
      </main>
    );
  }

  // 8) فك الداتا
  const { title, category, price, image, description } = product;

  const rating =
    typeof product.rating === "object" ? product.rating.rate : product.rating;
  const reviews = product.rating?.count ?? product.reviews ?? 0;

  // قيم static لحد ما الـ API الجديد يبعتها
  const { unit = "each" } = product;
  const badge = product.badge ?? (rating >= 4 ? "Bestseller" : null);

  const related = getRelatedProducts(id);

  const handleAddToCart = () => {
    addToCart?.(product, quantity);
  };

  return (
    <main className="bg-background px-5 py-8 text-text-primary">
      <div className="mx-auto max-w-310">
        {/* زرار الرجوع */}
        <button
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-xs text-text-secondary transition hover:text-brand-primary"
        >
          <FiArrowLeft /> Back to products
        </button>

        {/* تفاصيل المنتج */}
        <section className="grid gap-10 md:grid-cols-[320px_1fr]">
          {/* الصورة */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
            <img
              src={image}
              alt={title}
              className="size-full object-contain p-6"
            />
            {badge && (
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase text-brand-primary shadow-sm">
                {badge}
              </span>
            )}
          </div>

          {/* البيانات */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">
              {category}
            </p>

            <h1 className="font-heading text-4xl text-text-primary md:text-5xl">
              {title}
            </h1>

            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 font-bold text-star">
                <FaStar /> {rating}
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="text-text-secondary">{reviews} reviews</span>
            </div>

            <p className="text-2xl font-bold">
              ${price.toFixed(2)}{" "}
              <span className="text-xs font-normal text-text-secondary">
                / {unit}
              </span>
            </p>

            <p className="max-w-lg text-sm leading-relaxed text-text-secondary">
              {description}
            </p>

            {/* الكمية + زرار الإضافة */}
            <div className="flex items-center gap-4 border-y border-border py-4">
              <div className="flex items-center gap-4 rounded-full border border-border px-3 py-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <FiMinus />
                </button>
                <span className="w-4 text-center text-sm font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <FiPlus />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 rounded-full bg-brand-primary py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                Add to cart · ${(price * quantity).toFixed(2)}
              </button>
            </div>

            {/* معلومات التوصيل */}
            <div className="grid gap-4 text-xs sm:grid-cols-2">
              <div className="flex items-start gap-2">
                <FiTruck className="mt-0.5 text-lg" />
                <div>
                  <p className="font-bold">Delivery in 60 minutes</p>
                  <p className="text-text-secondary">Free on orders over $35</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FiShield className="mt-0.5 text-lg" />
                <div>
                  <p className="font-bold">Freshness guaranteed</p>
                  <p className="text-text-secondary">Or your money back</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* منتجات مشابهة */}
        <section className="mt-16">
          <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
            You may also like
          </p>
          <h2 className="mb-6 font-heading text-3xl">More fresh finds</h2>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Productdetails;
