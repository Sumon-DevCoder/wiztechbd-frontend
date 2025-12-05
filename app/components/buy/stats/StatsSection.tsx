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
      className="relative py-16 px-4 overflow-hidden"
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
            backgroundImage: `radial-gradient(1.5px 1.5px at 15% 25%, rgba(255,255,255,0.8), transparent),
                             radial-gradient(1px 1px at 35% 45%, rgba(255,255,255,0.6), transparent),
                             radial-gradient(2px 2px at 55% 15%, rgba(255,255,255,0.7), transparent),
                             radial-gradient(1px 1px at 75% 65%, rgba(255,255,255,0.6), transparent),
                             radial-gradient(1.5px 1.5px at 25% 75%, rgba(255,255,255,0.7), transparent),
                             radial-gradient(1px 1px at 45% 35%, rgba(255,255,255,0.5), transparent),
                             radial-gradient(2px 2px at 65% 85%, rgba(255,255,255,0.8), transparent),
                             radial-gradient(1px 1px at 85% 25%, rgba(255,255,255,0.6), transparent),
                             radial-gradient(1.5px 1.5px at 10% 50%, rgba(255,255,255,0.7), transparent),
                             radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.5), transparent),
                             radial-gradient(2px 2px at 50% 5%, rgba(255,255,255,0.8), transparent),
                             radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.6), transparent),
                             radial-gradient(1.5px 1.5px at 90% 70%, rgba(255,255,255,0.7), transparent),
                             radial-gradient(1px 1px at 5% 90%, rgba(255,255,255,0.5), transparent),
                             radial-gradient(2px 2px at 95% 10%, rgba(255,255,255,0.8), transparent)`,
            backgroundSize: "100% 100%",
            opacity: 0.4,
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          {/* BUILD FOR YOU Tag */}
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <span className="text-white text-xs font-semibold">
              BUILD FOR YOU
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
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
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Create and sell courses, consulting services, and communities - with
            Zero marketing cost and a built-in sales network.
          </p>

          {/* Email Input Section */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
            <div className="relative flex items-center justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Here"
                className="w-full h-16 bg-[#3B3B4B] border border-white/20 rounded-full pr-32 sm:pr-36 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 text-white font-semibold rounded-full px-6 py-3 transition-all text-sm whitespace-nowrap"
                style={{
                  background: "linear-gradient(to right, #9d4edd, #f75eff)",
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-base font-bold leading-tight">
                    Start for Free
                  </span>
                  <span className="text-xs font-normal leading-tight">
                    No credit card Required
                  </span>
                </div>
              </button>
            </div>
          </form>

          {/* Legal Disclaimer */}
          <p className="text-white/60 text-xs">
            By proceeding you agree to our Platform terms & Privacy Notice
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-[#1a0f1a]/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 relative">
          {/* Open Calculator Button */}
          <button className="absolute top-4 right-4 border border-white/30 rounded-lg px-4 py-2 text-white text-xs hover:bg-white/10 transition-colors">
            Open calculator
          </button>

          {/* Section Title */}
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 pr-32">
            Sell from day one - even with zero audience
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
          <div className="mt-8 bg-[#FFF3D8]/60 rounded-lg py-4 w-full overflow-hidden">
            <div className="overflow-hidden">
              <p className="text-white/70 text-sm whitespace-nowrap inline-block marquee">
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
