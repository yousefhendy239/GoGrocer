import React from "react";
import { useContext } from "react";
import {
  FiDollarSign,
  FiShoppingCart,
  FiPackage,
  FiUsers,
} from "react-icons/fi";
import { ProductsMainContext } from "../../../../context/ProductContext";
const StatsCard = () => {
  const { products, productsLoading } = useContext(ProductsMainContext);
  const stats = [
    {
      title: "Total Revenue",
      value: "EGP 24,500",
      description: "Total store revenue",
      icon: FiDollarSign,
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-brand-primary",
      trend: "+12.5%",
      demo: true,
    },
    {
      title: "Total Orders",
      value: "128",
      description: "Orders received",
      icon: FiShoppingCart,
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-brand-accent",
      trend: "+8.2%",
      demo: true,
    },
    {
      title: "Total Products",
      value: products.length,
      description: "Available products",
      icon: FiPackage,
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-brand-secondary",
      demo: false,
    },
    {
      title: "Total Customers",
      value: "86",
      description: "Registered customers",
      icon: FiUsers,
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-brand-accent",
      trend: "+5.4%",
      demo: true,
    },
  ];
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg}`}
              >
                <Icon size={23} className={stat.iconColor} />
              </div>

              {stat.trend && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  {stat.trend}
                </span>
              )}
            </div>

            {/* Card Content */}
            <div className="mt-5">
              <p className="text-sm font-semibold text-text-secondary">
                {stat.title}
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-text-primary">
                {stat.value}
              </h2>

              <p className="mt-2 text-xs text-text-secondary">
                {stat.description}
              </p>

              {stat.demo && (
                <span className="mt-3 inline-block text-[10px] font-semibold text-brand-accent">
                  Demo data
                </span>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StatsCard;
