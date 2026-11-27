import React from "react";
import { FiMoreHorizontal, FiUser } from "react-icons/fi";
const RecentUsers = () => {
  const users = [
    {
      id: 1,
      name: "Ahmed Mohamed",
      email: "ahmed@gmail.com",
      date: "Nov 27, 2026",
      status: "User",
    },
    {
      id: 2,
      name: "Sara Ali",
      email: "sara@gmail.com",
      date: "Nov 26, 2026",
      status: "User",
    },
    {
      id: 3,
      name: "Omar Hassan",
      email: "omar@gmail.com",
      date: "Nov 25, 2026",
      status: "Admin",
    },
    {
      id: 4,
      name: "Mariam Adel",
      email: "mariam@gmail.com",
      date: "Nov 24, 2026",
      status: "User",
    },
    {
      id: 5,
      name: "Youssef Mostafa",
      email: "youssef@gmail.com",
      date: "Nov 23, 2026",
      status: "User",
    },
  ];
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-5">
        <div>
          <h2 className="text-3xl font-bold text-text-primary">Users</h2>
          <p className="mt-1 text-sm text-text-secondary">
            Latest registered customers
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <thead>
            <tr className="bg-surface-muted text-xs font-bold uppercase tracking-wide text-text-secondary">
              <th className="px-5 py-4">User</th>
              <th className="px-5 py-4">Registration Date</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-border transition hover:bg-surface-muted/50"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-section-bg text-brand-primary">
                      <FiUser size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-text-primary">
                        {user.name}
                      </p>
                      <p className="mt-1 text-xs text-text-secondary">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm text-text-secondary">
                  {user.date}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      user.status === "User"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-right">
                  <button className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-primary transition hover:bg-section-bg">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentUsers;
