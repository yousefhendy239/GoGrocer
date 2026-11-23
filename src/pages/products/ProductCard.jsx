import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { CartMainContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartMainContext);
  // 1) الداتا الموجودة في fakestoreapi
  const { id, title, category, price, image } = product;

  // 2) الـ rating في fakestoreapi object ({ rate, count })
  //    بس في الـ API بتاعك ممكن يبقى رقم، فبنتعامل مع الحالتين
  const rating =
    typeof product.rating === "object" ? product.rating.rate : product.rating;

  // 3) الداتا الناقصة: قيم static تتبدل لوحدها لما الـ API يبعتها
  const { unit = "each" } = product;

  // badge تجريبي: لو التقييم 4 فأكتر يظهر Bestseller
  // (لما الـ API بتاعك يبعت badge حقيقي هيتستخدم هو)
  const badge = product.badge ?? (rating >= 4 ? "Bestseller" : null);

  return (
    <article className="rounded-2xl border border-border bg-surface p-2 shadow-sm">
      {/* الصورة + الـ badge */}
      <Link
        to={`/products/${id}`}
        className="relative block aspect-square overflow-hidden rounded-xl bg-white"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="size-full object-contain p-4"
        />

        {badge && (
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase text-brand-primary shadow-sm">
            {badge}
          </span>
        )}
      </Link>

      <div className="space-y-1 px-2 pb-2 pt-3">
        {/* القسم + التقييم */}
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wide text-text-secondary">
          <span className="truncate">{category}</span>
          <span className="flex items-center gap-1 text-star">
            <FaStar className="size-2.5" />
            {rating}
          </span>
        </div>

        {/* الاسم */}
        <h3 className="line-clamp-1 text-sm font-medium text-text-primary">
          <Link to={`/products/${id}`} className="hover:underline">
            {title}
          </Link>
        </h3>

        {/* السعر + الزرار */}
        <div className="flex items-center justify-between pt-1">
          <p className="text-sm font-bold text-text-primary">
            ${price.toFixed(2)}{" "}
            <span className="text-[10px] font-normal text-text-secondary">
              / {unit}
            </span>
          </p>

          <button
            onClick={() => addToCart?.(product)}
            aria-label={`Add ${title} to cart`}
            className="flex size-8 items-center justify-center rounded-full bg-brand-primary text-white transition hover:opacity-90"
          >
            <FiPlus className="size-4" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
