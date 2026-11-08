import React from "react";
import { Button, Chip } from "@heroui/react";
import { FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const ProductCard = ({ product, onAdd }) => {
  const { name, category, price, unit, rating, badge, image } = product;

  return (
    <article className="rounded-2xl border border-line bg-white p-2 shadow-sm">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-sage">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="size-full object-cover"
        />
        {badge && (
          <Chip
            size="sm"
            className="absolute left-2 top-2 bg-white/90 text-[10px] font-semibold uppercase text-ink"
          >
            {badge}
          </Chip>
        )}
      </div>

      <div className="space-y-1 px-2 pb-2 pt-3">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wide text-muted">
          <span>{category}</span>
          <span className="flex items-center gap-1 text-star">
            <FaStar className="size-2.5" />
            {rating}
          </span>
        </div>

        <h3 className="text-sm font-medium">{name}</h3>

        <div className="flex items-center justify-between pt-1">
          <p className="text-sm font-bold">
            ${price.toFixed(2)}{" "}
            <span className="text-[10px] font-normal text-muted">/ {unit}</span>
          </p>
          <Button
            isIconOnly
            size="sm"
            aria-label={`Add ${name} to cart`}
            onPress={() => onAdd?.(product)}
            className="size-8 min-w-0 rounded-full bg-emerald-950 text-white"
          >
            <FiPlus className="size-4" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
