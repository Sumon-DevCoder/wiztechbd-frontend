"use client";

import React, { useState } from "react";
import StatCard from "./StatCard";

const StatsSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <section
      className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(89, 52, 79, 1) 0%, rgba(66, 35, 43, 1) 100%)",
      }}
    >
      {/* Star Speckles Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/stats/stats-img.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.4,
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          {/* BUILD FOR YOU Tag */}
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#1B162699] backdrop-blur-sm rounded-full mb-3 sm:mb-4">
            <span className="text-white text-[10px] sm:text-xs font-semibold">
              BUILD FOR YOU
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2"
            style={{
              background:
                "linear-gradient(93.35deg, #FFFFFF 17.83%, #A5C5DD 80.08%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Built for Creators.
            <br />
            Powered for Profit.
          </h1>

          {/* Sub-headline */}
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Create and sell courses, consulting services, and communities - with
            Zero marketing cost and a built-in sales network.
          </p>

          {/* Email Input Section */}
          <form
            onSubmit={handleSubmit}
            className="max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-3 sm:mb-4 px-2"
          >
            <div className="relative flex items-center justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Here"
                className="w-full h-12 sm:h-14 md:h-16 bg-[#3B3B4B] border border-white/20 rounded-full pr-24 sm:pr-32 md:pr-36 pl-3 sm:pl-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 text-xs sm:text-sm"
                required
              />
              <button
                type="submit"
                className="absolute cursor-pointer right-0.5 sm:right-1 top-1/2 -translate-y-1/2 text-white font-semibold rounded-full px-3 sm:px-4 md:px-6 py-3.5 sm:py-2 md:py-3 transition-all duration-300 text-xs sm:text-sm whitespace-nowrap hover:shadow-lg hover:shadow-purple-500/50 hover:brightness-110 active:scale-100"
                style={{
                  background:
                    "linear-gradient(214.18deg, rgba(105, 63, 255, 0.99) 20.22%, #C02EE5 77.53%)",
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-xs sm:text-sm md:text-base font-bold leading-tight">
                    Start for Free
                  </span>
                  <span className="text-[10px] sm:text-xs font-normal leading-tight hidden sm:block">
                    No credit card Required
                  </span>
                </div>
              </button>
            </div>
          </form>

          {/* Legal Disclaimer */}
          <p className="text-white/60 text-[10px] sm:text-xs px-4">
            By proceeding you agree to our Platform terms & Privacy Notice
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-[#1a0f1a]/50 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 relative">
          {/* Open Calculator Button */}
          <button className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 border border-white/30 rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-colors">
            <span className="hidden sm:inline">Open calculator</span>
            <span className="sm:hidden">Calculator</span>
          </button>

          {/* Section Title */}
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 pr-16 sm:pr-24 md:pr-32">
            Sell from day one - even with zero audience
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <StatCard
              label="CO-SELLERS IN NETWORK"
              value="21,500+"
              description="People who can co-promote"
            />
            <StatCard
              label="EXPECTED BUYERS / MONTH"
              value="86"
              description="With zero personal audience"
            />
            <StatCard
              label="EST. MRR AT US$9/MO"
              value="US$774"
              description="From membership sales"
            />
            <StatCard
              label="EARN W/O A PRODUCT"
              value="US$300"
              description="Just by co-selling"
            />
          </div>

          {/* Bottom Text */}
          <div className="mt-4 sm:mt-6 md:mt-8 bg-[#FFF3D8]/60 rounded-lg py-3 sm:py-4 w-full overflow-hidden">
            <div className="overflow-hidden">
              <p className="text-[#0b0803] text-xs sm:text-sm whitespace-nowrap inline-block marquee">
                Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and
                convert clients inside the platform so you can sell from day
                one. • Unlike Kajabi, Teachable, or Skool, Growhubs helps you
                find and convert clients inside the platform so you can sell
                from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
