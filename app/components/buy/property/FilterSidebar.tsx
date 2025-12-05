"use client";

import React, { useState } from "react";

interface FilterSidebarProps {
  rentBudget: [number, number];
  onRentBudgetChange: (range: [number, number]) => void;
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
    <div className="w-full md:w-80 space-y-4">
      {/* Property Preference */}
      <div className="bg-gray-50 rounded-lg border border-[#E6E9ED] px-4 py-3 mb-4 flex items-center justify-between">
        <span className="text-gray-700 font-medium text-sm">
          Property Preference
        </span>
        <button
          onClick={onResetFilters}
          className="bg-[#F4F6F8] border border-gray-300 rounded-md px-3 py-1.5 hover:bg-[#F4F6F8] transition-colors text-sm font-medium flex items-center gap-2 text-gray-700"
        >
          Reset Filter
          <svg
            className="w-4 h-4 text-gray-600"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
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
            className={`w-5 h-5 text-gray-600 transition-transform ${
              isRentBudgetOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isRentBudgetOpen && (
          <div className="space-y-4">
            <div className="relative">
              <input
                type="range"
                min="300"
                max="670000"
                value={rentBudget[0]}
                onChange={(e) => handleSliderChange(e, 0)}
                className="w-full h-2 bg-[#59344F]/20 rounded-lg appearance-none cursor-pointer accent-[#59344F]"
              />
              <input
                type="range"
                min="300"
                max="670000"
                value={rentBudget[1]}
                onChange={(e) => handleSliderChange(e, 1)}
                className="w-full h-2 bg-[#59344F]/20 rounded-lg appearance-none cursor-pointer accent-[#59344F] mt-2"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs text-gray-600 mb-1">
                  Minimum
                </label>
                <input
                  type="number"
                  min="300"
                  max="670000"
                  value={rentBudget[0]}
                  onChange={(e) => {
                    const value = Math.max(
                      300,
                      Math.min(670000, parseInt(e.target.value) || 300)
                    );
                    onRentBudgetChange([value, rentBudget[1]]);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59344F] text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-600 mb-1">
                  Maximum
                </label>
                <input
                  type="number"
                  min="300"
                  max="670000"
                  value={rentBudget[1]}
                  onChange={(e) => {
                    const value = Math.max(
                      rentBudget[0],
                      Math.min(670000, parseInt(e.target.value) || 670000)
                    );
                    onRentBudgetChange([rentBudget[0], value]);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#59344F] text-sm"
                />
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
            className={`w-5 h-5 text-gray-600 transition-transform ${
              isSuburbOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isSuburbOpen && (
          <div className="space-y-2">
            {suburbs.map((suburb, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer hover:text-[#59344F] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={suburb.checked}
                  onChange={() => onSuburbChange(index)}
                  className="w-4 h-4 text-[#59344F] border-gray-300 rounded focus:ring-[#59344F] focus:ring-2"
                />
                <span className="text-sm text-gray-700">{suburb.name}</span>
              </label>
            ))}
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
            className={`w-5 h-5 text-gray-600 transition-transform ${
              isPropertyTypeOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isPropertyTypeOpen && (
          <div className="space-y-2">
            {propertyTypes.map((type, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer hover:text-[#59344F] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={type.checked}
                  onChange={() => onPropertyTypeChange(index)}
                  className="w-4 h-4 text-[#59344F] border-gray-300 rounded focus:ring-[#59344F] focus:ring-2"
                />
                <span className="text-sm text-gray-700">{type.name}</span>
              </label>
            ))}
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
            className={`w-5 h-5 text-gray-600 transition-transform ${
              isAmenitiesOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isAmenitiesOpen && (
          <div className="space-y-2">
            {(showAllAmenities ? amenities : amenities.slice(0, 4)).map(
              (amenity, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 cursor-pointer hover:text-[#59344F] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={amenity.checked}
                    onChange={() => onAmenityChange(index)}
                    className="w-4 h-4 text-[#59344F] border-gray-300 rounded focus:ring-[#59344F] focus:ring-2"
                  />
                  <span className="text-sm text-gray-700">{amenity.name}</span>
                </label>
              )
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
