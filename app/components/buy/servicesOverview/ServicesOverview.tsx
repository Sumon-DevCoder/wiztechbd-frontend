"use client";

import { useState } from "react";
import CompanyLogo from "./CompanyLogo";
import FeatureDetail from "./FeatureDetail";
import FeatureNavItem from "./FeatureNavItem";

const ServicesOverview = () => {
  const [activeFeature, setActiveFeature] = useState("Courses");

  const companyLogos = [
    "HLEVELS",
    "KODNET",
    "UiA",
    "PlannIT",
    "K",
    "Innovation Norge",
    "TERMOCON",
  ];

  const features = [
    {
      id: "Courses",
      label: "Courses",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: "Communities",
      label: "Communities",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "Coaching",
      label: "Coaching & Consulting",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      id: "Merchandise",
      label: "Merchandise",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      id: "Podcasts",
      label: "Podcasts",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
    },
    {
      id: "Events",
      label: "Events",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "Brokerage",
      label: "Brokerage",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  const coursesDescription = [
    "Turn your knowledge into structured, sellable products.",
    "Build online, drip, academic, or challenge-based courses with built-in tools for gamification, accountability, and engagement.",
    "Every course is optimized to deliver value and generate recurring income.",
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Trust Section */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm font-medium mb-6">
            TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {companyLogos.map((logo, index) => (
              <CompanyLogo key={index} name={logo} />
            ))}
          </div>
        </div>

        {/* Banner & Headline Section */}
        <div className="text-center mb-12">
          {/* DIVERSIFY REVENUE STREAM Banner */}
          <div
            className="inline-block px-6 py-2 rounded-md mb-6"
            style={{
              background: "linear-gradient(89.85deg, #FAC1FD 0%, #F75EFF 100%)",
            }}
          >
            <span className="text-white font-bold text-sm">
              DIVERSIFY REVENUE STREAM
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight max-w-4xl mx-auto">
            Maximise earnings with limitless revenue streams.
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Create and sell courses, consulting services, and communities - with
            Zero marketing cost and a built-in sales network.
          </p>

          {/* Feature Navigation Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 bg-gray-50 rounded-lg p-2 max-w-5xl mx-auto">
            {features.map((feature) => (
              <FeatureNavItem
                key={feature.id}
                icon={feature.icon}
                label={feature.label}
                isActive={activeFeature === feature.id}
                onClick={() => setActiveFeature(feature.id)}
              />
            ))}
          </div>
        </div>

        {/* Feature Detail Section - Courses */}
        {activeFeature === "Courses" && (
          <FeatureDetail
            title="Courses"
            description={coursesDescription}
            buttonText="Learn More"
            gradientColors="from-[#59344F] to-[#42232B]"
            showLaptop={true}
          />
        )}
      </div>
    </section>
  );
};

export default ServicesOverview;
