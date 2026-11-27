import React from "react";
import { useState } from "react";
import StatsCard from "./cards/StatsCard";
import RecentUsers from "../users/RecentUsers";

const OverView = () => {
  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-text-primary md:text-3xl">
            {greeting}, Admin! 👋
          </h1>

          <p className="mt-2 text-sm text-text-secondary">
            Here's what's happening with your store today.
          </p>
        </div>

        <div className="text-sm text-text-secondary">{today}</div>
      </section>

      {/* Statistics Cards */}
      <StatsCard />
      <RecentUsers />
    </div>
  );
};

export default OverView;
