"use client";

import React, { useMemo, useState } from "react";
import { dummyProperties, type Property } from "../../../data/properties";
import FilterSidebar from "./FilterSidebar";
import Pagination from "./Pagination";
import PropertyCard from "./PropertyCard";
import PropertyModal from "./PropertyModal";

const Property = () => {
  // Calculate min and max price from dummy data
  const priceRange = useMemo(() => {
    const prices = dummyProperties.map((p) => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return [minPrice, maxPrice] as [number, number];
  }, []);

  // Extract unique filter options from properties data
  const filterOptions = useMemo(() => {
    // Get unique suburbs
    const uniqueSuburbs = [
      ...new Set(dummyProperties.map((p) => p.suburb)),
    ].sort();

    // Get unique property types
    const uniquePropertyTypes = [
      ...new Set(dummyProperties.map((p) => p.propertyType)),
    ].sort();

    // Get unique amenities (flatten all amenities arrays)
    const allAmenities = dummyProperties.flatMap((p) => p.amenities);
    const uniqueAmenities = [...new Set(allAmenities)].sort();

    return {
      suburbs: uniqueSuburbs.map((name) => ({ name, checked: false })),
      propertyTypes: uniquePropertyTypes.map((name) => ({
        name,
        checked: false,
      })),
      amenities: uniqueAmenities.map((name) => ({ name, checked: false })),
    };
  }, []);

  const [rentBudget, setRentBudget] = useState<[number, number]>(priceRange);
  const [suburbs, setSuburbs] = useState(filterOptions.suburbs);
  const [propertyTypes, setPropertyTypes] = useState(
    filterOptions.propertyTypes
  );
  const [amenities, setAmenities] = useState(filterOptions.amenities);
  const [sortBy, setSortBy] = useState<"low-to-high" | "high-to-low">(
    "low-to-high"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Filter and sort properties
  const filteredAndSortedProperties = useMemo(() => {
    const filtered = dummyProperties.filter((property) => {
      // Rent budget filter
      if (property.price < rentBudget[0] || property.price > rentBudget[1]) {
        return false;
      }

      // Suburb filter
      const selectedSuburbs = suburbs
        .filter((s) => s.checked)
        .map((s) => s.name);
      if (
        selectedSuburbs.length > 0 &&
        !selectedSuburbs.includes(property.suburb)
      ) {
        return false;
      }

      // Property type filter
      const selectedTypes = propertyTypes
        .filter((t) => t.checked)
        .map((t) => t.name);
      if (
        selectedTypes.length > 0 &&
        !selectedTypes.includes(property.propertyType)
      ) {
        return false;
      }

      // Amenities filter
      const selectedAmenities = amenities
        .filter((a) => a.checked)
        .map((a) => a.name);
      if (selectedAmenities.length > 0) {
        const hasAllAmenities = selectedAmenities.every((amenity) =>
          property.amenities.includes(amenity)
        );
        if (!hasAllAmenities) {
          return false;
        }
      }

      return true;
    });

    // Sort properties
    filtered.sort((a, b) => {
      if (sortBy === "low-to-high") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    return filtered;
  }, [rentBudget, suburbs, propertyTypes, amenities, sortBy]);

  // Pagination
  const totalPages = Math.ceil(
    filteredAndSortedProperties.length / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProperties = filteredAndSortedProperties.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset current page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [rentBudget, suburbs, propertyTypes, amenities]);

  const handleResetFilters = () => {
    setRentBudget(priceRange);
    setSuburbs(filterOptions.suburbs);
    setPropertyTypes(filterOptions.propertyTypes);
    setAmenities(filterOptions.amenities);
  };

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setSelectedImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-6 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Left Sidebar - Filters */}
          <aside className="md:sticky md:top-20 md:h-fit md:w-80 lg:w-80">
            <FilterSidebar
              rentBudget={rentBudget}
              onRentBudgetChange={setRentBudget}
              minPrice={priceRange[0]}
              maxPrice={priceRange[1]}
              suburbs={suburbs}
              onSuburbChange={(index) => {
                const newSuburbs = [...suburbs];
                newSuburbs[index].checked = !newSuburbs[index].checked;
                setSuburbs(newSuburbs);
              }}
              propertyTypes={propertyTypes}
              onPropertyTypeChange={(index) => {
                const newTypes = [...propertyTypes];
                newTypes[index].checked = !newTypes[index].checked;
                setPropertyTypes(newTypes);
              }}
              amenities={amenities}
              onAmenityChange={(index) => {
                const newAmenities = [...amenities];
                newAmenities[index].checked = !newAmenities[index].checked;
                setAmenities(newAmenities);
              }}
              onResetFilters={handleResetFilters}
            />
          </aside>

          {/* Right Section - Property Listings */}
          <main className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="sticky top-0 z-10 bg-white flex border border-[#E6E9ED] rounded-lg px-3 py-1 flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-2 md:gap-4">
              <div className="text-gray-700 shrink-0 md:hidden lg:block">
                <span className="font-bold text-gray-900">Property</span>
                <span className="text-gray-500 text-sm whitespace-nowrap">
                  {" "}
                  — Showing result- ({filteredAndSortedProperties.length})
                </span>
              </div>
              <div className="relative bg-[#E6E9ED] p-2 rounded-lg shrink-0">
                <label
                  htmlFor="sort"
                  className="block text-xs  text-gray-500 mb-0 leading-tight"
                >
                  Sort By
                </label>
                <div className="relative bg-[#E6E9ED]">
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value as "low-to-high" | "high-to-low")
                    }
                    className="appearance-none bg-[#E6E9ED] border border-gray-300 rounded-lg px-2.5 py-0.5 pr-6 text-gray-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#59344F] cursor-pointer min-w-[140px]"
                  >
                    <option value="low-to-high">Low to High</option>
                    <option value="high-to-low">High to Low</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-900"
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
                  </div>
                </div>
              </div>
            </div>

            {/* Property Grid */}
            {paginatedProperties.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  {paginatedProperties.map((property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      onClick={() => handlePropertyClick(property)}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No properties found matching your filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-4 text-[#59344F] hover:text-[#4a2a3f] font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          selectedImageIndex={selectedImageIndex}
          onClose={handleCloseModal}
          onImageSelect={handleImageSelect}
        />
      )}
    </div>
  );
};

export default Property;
