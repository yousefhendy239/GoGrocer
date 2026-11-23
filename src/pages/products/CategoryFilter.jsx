import { Button } from "@heroui/react";

const baseStyle =
  "h-7 min-w-0 rounded-full px-3 text-xs font-medium capitalize";
const activeStyle = "bg-brand-primary text-white";
const idleStyle = "bg-surface-muted text-text-secondary";

const CategoryFilter = ({ categories, active, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          size="sm"
          onPress={() => onChange(category)}
          className={`${baseStyle} ${category === active ? activeStyle : idleStyle}`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
