"use client";

import React, { useState } from "react";
import "./FilterSidebar.css";

interface FilterSidebarProps {
  rentBudget: [number, number];
  onRentBudgetChange: (range: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
  suburbs: { name: string; checked: boolean }[];
  onSuburbChange: (index: number) => void;
  propertyTypes: { name: string; checked: boolean }[];
  onPropertyTypeChange: (index: number) => void;
  amenities: { name: string; checked: boolean }[];
  onAmenityChange: (index: number) => void;
  onResetFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  rentBudget,
  onRentBudgetChange,
  minPrice,
  maxPrice,
  suburbs,
  onSuburbChange,
  propertyTypes,
  onPropertyTypeChange,
  amenities,
  onAmenityChange,
  onResetFilters,
}) => {
  const [isRentBudgetOpen, setIsRentBudgetOpen] = useState(true);
  const [isSuburbOpen, setIsSuburbOpen] = useState(true);
  const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(true);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(true);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [showAllSuburbs, setShowAllSuburbs] = useState(false);
  const [showAllPropertyTypes, setShowAllPropertyTypes] = useState(false);

  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = parseInt(e.target.value);
    if (index === 0) {
      onRentBudgetChange([Math.min(newValue, rentBudget[1]), rentBudget[1]]);
    } else {
      onRentBudgetChange([rentBudget[0], Math.max(newValue, rentBudget[0])]);
    }
  };

  return (
    <div className="w-full md:w-full space-y-4">
      {/* Property Preference */}
      <div className="bg-white rounded-lg border border-[#E6E9ED] px-4 py-2.5 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <span className="text-gray-700 font-medium text-sm">
          Property Preference
        </span>
        <button
          onClick={onResetFilters}
          className="bg-[#F4F6F8] border border-gray-300 rounded-md px-3 py-2 sm:py-3 hover:bg-gray-200 hover:border-gray-400 transition-colors text-sm font-medium flex items-center gap-2 text-gray-700 cursor-pointer w-full sm:w-auto"
        >
          Reset Filter
          <svg
            className="w-4 h-4 text-gray-600"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M22.719 12A10.719 10.719 0 0 1 1.28 12h.838a9.916 9.916 0 1 0 1.373-5H8v1H2V2h1v4.2A10.71 10.71 0 0 1 22.719 12z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </g>
          </svg>
        </button>
      </div>

      {/* Rent Budget */}
      <div className="bg-gray-50 rounded-lg p-4">
        <button
          onClick={() => setIsRentBudgetOpen(!isRentBudgetOpen)}
          className="w-full flex items-center justify-between mb-3"
        >
          <h3 className="font-semibold text-gray-800">Rent Budget</h3>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 12H19.25"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isRentBudgetOpen && (
          <div className="space-y-4">
            {/* Dual Range Slider */}
            <div className="relative h-8 flex items-center">
              <div className="absolute w-full h-2 bg-[#59344F]/20 rounded-lg"></div>
              <div
                className="absolute h-2 bg-[#59344F] rounded-lg"
                style={{
                  left: `${
                    ((rentBudget[0] - minPrice) / (maxPrice - minPrice)) * 100
                  }%`,
                  width: `${
                    ((rentBudget[1] - rentBudget[0]) / (maxPrice - minPrice)) *
                    100
                  }%`,
                }}
              ></div>
              {/* Min Circle Indicator */}
              <div
                className="absolute w-4 h-4 bg-[#59344F] rounded-full border-2 border-white shadow-md z-20 pointer-events-none"
                style={{
                  left: `calc(${
                    ((rentBudget[0] - minPrice) / (maxPrice - minPrice)) * 100
                  }% - 8px)`,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              ></div>
              {/* Max Circle Indicator */}
              <div
                className="absolute w-4 h-4 bg-[#59344F] rounded-full border-2 border-white shadow-md z-20 pointer-events-none"
                style={{
                  left: `calc(${
                    ((rentBudget[1] - minPrice) / (maxPrice - minPrice)) * 100
                  }% - 8px)`,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              ></div>
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={rentBudget[0]}
                onChange={(e) => handleSliderChange(e, 0)}
                className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-30 slider-thumb"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={rentBudget[1]}
                onChange={(e) => handleSliderChange(e, 1)}
                className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-30 slider-thumb"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs text-gray-600 mb-1">
                  Minimum
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    min={minPrice}
                    max={maxPrice}
                    value={rentBudget[0]}
                    onChange={(e) => {
                      const value = Math.max(
                        minPrice,
                        Math.min(maxPrice, parseInt(e.target.value) || minPrice)
                      );
                      onRentBudgetChange([value, rentBudget[1]]);
                    }}
                    className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59344F] text-sm"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-600 mb-1">
                  Maximum
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    min={minPrice}
                    max={maxPrice}
                    value={rentBudget[1]}
                    onChange={(e) => {
                      const value = Math.max(
                        rentBudget[0],
                        Math.min(maxPrice, parseInt(e.target.value) || maxPrice)
                      );
                      onRentBudgetChange([rentBudget[0], value]);
                    }}
                    className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59344F] text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suburb */}
      <div className="bg-gray-50 rounded-lg p-4">
        <button
          onClick={() => setIsSuburbOpen(!isSuburbOpen)}
          className="w-full flex items-center justify-between mb-3"
        >
          <h3 className="font-semibold text-gray-800">Suburb</h3>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 12H19.25"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isSuburbOpen && (
          <div className="space-y-2">
            {(showAllSuburbs ? suburbs : suburbs.slice(0, 4)).map((suburb) => {
              const actualIndex = suburbs.findIndex((s) => s === suburb);
              return (
                <label
                  key={actualIndex}
                  className="flex items-center gap-2 cursor-pointer hover:text-[#59344F] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={suburb.checked}
                    onChange={() => onSuburbChange(actualIndex)}
                    className="w-4 h-4 text-[#59344F] border-gray-300 rounded focus:ring-[#59344F] focus:ring-2"
                  />
                  <span className="text-sm">{suburb.name}</span>
                </label>
              );
            })}
            {suburbs.length > 4 && (
              <button
                onClick={() => setShowAllSuburbs(!showAllSuburbs)}
                className="text-[#6C0443] font-bold text-sm cursor-pointer underline"
              >
                {showAllSuburbs ? "see less" : "see more"}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Property Type */}
      <div className="bg-gray-50 rounded-lg p-4">
        <button
          onClick={() => setIsPropertyTypeOpen(!isPropertyTypeOpen)}
          className="w-full flex items-center justify-between mb-3"
        >
          <h3 className="font-semibold text-gray-800">Property Type</h3>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 12H19.25"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isPropertyTypeOpen && (
          <div className="space-y-2">
            {(showAllPropertyTypes
              ? propertyTypes
              : propertyTypes.slice(0, 4)
            ).map((type) => {
              const actualIndex = propertyTypes.findIndex((t) => t === type);
              return (
                <label
                  key={actualIndex}
                  className="flex items-center gap-2 cursor-pointer hover:text-[#59344F] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={type.checked}
                    onChange={() => onPropertyTypeChange(actualIndex)}
                    className="w-4 h-4 text-[#59344F] border-gray-300 rounded focus:ring-[#59344F] focus:ring-2"
                  />
                  <span className="text-sm">{type.name}</span>
                </label>
              );
            })}
            {propertyTypes.length > 4 && (
              <button
                onClick={() => setShowAllPropertyTypes(!showAllPropertyTypes)}
                className="text-[#59344F] text-sm font-medium hover:underline"
              >
                {showAllPropertyTypes ? "see less" : "see more"}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Amenities */}
      <div className="bg-gray-50 rounded-lg p-4">
        <button
          onClick={() => setIsAmenitiesOpen(!isAmenitiesOpen)}
          className="w-full flex items-center justify-between mb-3"
        >
          <h3 className="font-semibold text-gray-800">Amenities</h3>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 12H19.25"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isAmenitiesOpen && (
          <div className="space-y-2">
            {(showAllAmenities ? amenities : amenities.slice(0, 4)).map(
              (amenity) => {
                const actualIndex = amenities.findIndex((a) => a === amenity);
                return (
                  <label
                    key={actualIndex}
                    className="flex items-center gap-2 cursor-pointer hover:text-[#59344F] transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={amenity.checked}
                      onChange={() => onAmenityChange(actualIndex)}
                      className="w-4 h-4 text-[#59344F] border-gray-300 rounded focus:ring-[#59344F] focus:ring-2"
                    />
                    <span className="text-sm">{amenity.name}</span>
                  </label>
                );
              }
            )}
            {amenities.length > 4 && (
              <button
                onClick={() => setShowAllAmenities(!showAllAmenities)}
                className="text-[#59344F] text-sm font-medium hover:underline"
              >
                {showAllAmenities ? "see less" : "see more"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
