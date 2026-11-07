import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiCheck,
  FiClock,
  FiMapPin,
  FiCreditCard,
  FiArrowRight,
} from "react-icons/fi";

import { MdDeliveryDining } from "react-icons/md";
const Trackingmain = () => {
  // Countdown: 30 Minutes
  const TOTAL_TIME = 30 * 60;

  const [seconds, setSeconds] = useState(TOTAL_TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate Time
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Progress Percentage
  const progress = ((TOTAL_TIME - seconds) / TOTAL_TIME) * 100;
  return (
    <div className=" min-h-screen bg-background px-3 py-8 sm:px-6 sm:py-12">
      <div className="w-full max-w-4xl mx-auto bg-surface border border-border rounded-3xl shadow-lg text-text-primary px-4 py-8 sm:px-8 sm:py-10 lg:px-12">
        {/* Success Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-brand-secondary text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
            <FiCheck size={28} />
          </div>

          <p className="text-brand-secondary text-xs font-bold tracking-widest mb-3">
            ORDER CONFIRMED · #GO-2048
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-5">
            Your groceries are on the move.
          </h1>

          <p className="text-text-secondary text-sm">
            Thanks, Jamie. Your fresh picks are packed and heading to 24 Market
            Lane.
          </p>
        </div>

        {/* Tracking Card */}
        <div className="max-w-[650px] mx-auto mt-8">
          <div className="bg-surface border border-border rounded-3xl p-5 md:p-7">
            {/* Delivery Time */}
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="text-brand-secondary text-xs font-bold mb-2">
                  ● ON THE WAY
                </p>

                <h2 className="text-3xl font-serif">{minutes} min</h2>

                <p className="text-text-secondary text-sm">
                  Estimated delivery window
                </p>
              </div>

              {/* Countdown */}
              <div className="bg-background border border-border rounded-xl p-3 flex gap-3 items-center">
                <FiClock size={18} className="text-brand-secondary" />

                <div>
                  <p className="text-[9px] text-text-secondary">
                    LIVE COUNTDOWN
                  </p>

                  <p className="font-mono font-bold">
                    {String(minutes).padStart(2, "0")}:
                    {String(remainingSeconds).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>

            {/* Road Animation */}
            <div className="relative h-32 bg-brand-primary rounded-2xl overflow-hidden">
              {/* Road */}
              <div className="absolute bottom-0 w-full h-10 bg-brand-secondary border-t-4 border-border">
                <div className="border-t-[3px] border-dashed border-surface absolute top-4 w-full" />
              </div>

              {/* Moving Delivery Rider */}
              <div className="absolute bottom-7 animate-motorcycle text-brand-accent">
                <MdDeliveryDining size={65} />
              </div>
            </div>

            {/* Tracking Steps */}
            <div className="flex justify-between text-[9px] text-text-secondary font-bold mt-3">
              <span>CONFIRMED</span>
              <span>OUT FOR DELIVERY</span>
              <span>AT YOUR DOOR</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-border rounded-full mt-3 overflow-hidden">
              <div
                className="h-full bg-brand-accent rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Delivery Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div className="bg-surface border border-border rounded-2xl p-4 flex items-center gap-3">
              <FiMapPin size={20} className="text-brand-secondary" />

              <div>
                <p className="text-[10px] text-text-secondary">DELIVERING TO</p>

                <p className="text-sm font-bold">24 Market Lane</p>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-4 flex items-center gap-3">
              <FiCreditCard size={20} className="text-brand-secondary" />

              <div>
                <p className="text-[10px] text-text-secondary">PAYMENT</p>

                <p className="text-sm font-bold">Cash on Delivery</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3 mt-7 flex-wrap">
            <Link
              to="/Products"
              className="bg-brand-accent text-white hover:opacity-90 px-6 py-3 rounded-full text-sm font-bold flex items-center gap-3 transition"
            >
              Keep shopping
              <FiArrowRight />
            </Link>

            <Link
              to="/"
              className="border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white px-6 py-3 rounded-full text-sm font-bold transition"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trackingmain;
