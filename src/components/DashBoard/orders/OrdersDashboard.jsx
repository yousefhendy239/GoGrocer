import React from "react";
import {
  FiSearch,
  FiFilter,
  FiShoppingBag,
  FiClock,
  FiCheckCircle,
  FiTruck,
  FiEye,
  FiMoreVertical,
} from "react-icons/fi";
const orders = [
  {
    id: "#ORD-1001",
    customer: "Ahmed Mohamed",
    email: "ahmed@gmail.com",
    date: "Nov 27, 2026",
    items: 3,
    total: 450,
    status: "Delivered",
  },
  {
    id: "#ORD-1002",
    customer: "Sara Ali",
    email: "sara@gmail.com",
    date: "Nov 27, 2026",
    items: 5,
    total: 780,
    status: "Processing",
  },
  {
    id: "#ORD-1003",
    customer: "Omar Hassan",
    email: "omar@gmail.com",
    date: "Nov 26, 2026",
    items: 2,
    total: 320,
    status: "Pending",
  },
  {
    id: "#ORD-1004",
    customer: "Mariam Adel",
    email: "mariam@gmail.com",
    date: "Nov 26, 2026",
    items: 4,
    total: 950,
    status: "Shipped",
  },
  {
    id: "#ORD-1005",
    customer: "Youssef Mostafa",
    email: "youssef@gmail.com",
    date: "Nov 25, 2026",
    items: 1,
    total: 180,
    status: "Cancelled",
  },
  {
    id: "#ORD-1006",
    customer: "Nour Ibrahim",
    email: "nour@gmail.com",
    date: "Nov 25, 2026",
    items: 6,
    total: 1250,
    status: "Delivered",
  },
  {
    id: "#ORD-1007",
    customer: "Ali Mahmoud",
    email: "ali@gmail.com",
    date: "Nov 24, 2026",
    items: 3,
    total: 560,
    status: "Processing",
  },
  {
    id: "#ORD-1008",
    customer: "Salma Tarek",
    email: "salma@gmail.com",
    date: "Nov 24, 2026",
    items: 2,
    total: 390,
    status: "Pending",
  },
];
const OrdersDashboard = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "248",
      icon: FiShoppingBag,
      color: "text-brand-primary",
      bg: "bg-section-bg",
    },
    {
      title: "Pending",
      value: "18",
      icon: FiClock,
      color: "text-orange-500",
      bg: "bg-orange-100 dark:bg-orange-900/20",
    },
    {
      title: "Completed",
      value: "186",
      icon: FiCheckCircle,
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900/20",
    },
    {
      title: "Shipped",
      value: "24",
      icon: FiTruck,
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/20",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

      case "Processing":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";

      case "Pending":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";

      case "Shipped":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";

      case "Cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

      default:
        return "bg-surface-muted text-text-secondary";
    }
  };
  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      {/* Page Header */}
      <section className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-text-primary md:text-3xl">
            Orders
          </h1>

          <p className="mt-2 text-sm text-text-secondary">
            Track, manage and monitor your customer orders.
          </p>
        </div>
      </section>

      {/* Statistics Cards */}
      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-text-secondary">
                  {stat.title}
                </p>

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.bg}`}
                >
                  <Icon size={21} className={stat.color} />
                </div>
              </div>

              <h2 className="mt-4 text-2xl font-extrabold text-text-primary">
                {stat.value}
              </h2>
            </div>
          );
        })}
      </section>

      {/* Orders Table */}
      <section className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        {/* Table Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-border p-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-lg font-bold text-text-primary">All Orders</h2>

            <p className="mt-1 text-sm text-text-secondary">
              Manage and track all customer orders.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
              <FiSearch size={18} className="text-text-secondary" />

              <input
                type="text"
                placeholder="Search orders..."
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
          <table className="w-full min-w-[900px] text-left">
            {/* Table Head */}
            <thead>
              <tr className="bg-surface-muted text-xs font-bold uppercase tracking-wide text-text-secondary">
                <th className="px-5 py-4">Order ID</th>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Items</th>
                <th className="px-5 py-4">Total</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-center">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-border transition hover:bg-surface-muted/50"
                >
                  {/* Order ID */}
                  <td className="px-5 py-4">
                    <p className="text-sm font-bold text-brand-primary">
                      {order.id}
                    </p>
                  </td>

                  {/* Customer */}
                  <td className="px-5 py-4">
                    <div>
                      <p className="text-sm font-bold text-text-primary">
                        {order.customer}
                      </p>

                      <p className="mt-1 text-xs text-text-secondary">
                        {order.email}
                      </p>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="px-5 py-4 text-sm text-text-secondary">
                    {order.date}
                  </td>

                  {/* Items */}
                  <td className="px-5 py-4 text-sm text-text-secondary">
                    {order.items} items
                  </td>

                  {/* Total */}
                  <td className="px-5 py-4 text-sm font-bold text-text-primary">
                    EGP {order.total.toLocaleString()}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1.5 text-xs font-bold ${getStatusStyle(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        title="View Order"
                        className="rounded-lg p-2 text-brand-primary transition hover:bg-section-bg"
                      >
                        <FiEye size={17} />
                      </button>

                      <button
                        title="More Options"
                        className="rounded-lg p-2 text-text-secondary transition hover:bg-surface-muted"
                      >
                        <FiMoreVertical size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default OrdersDashboard;
