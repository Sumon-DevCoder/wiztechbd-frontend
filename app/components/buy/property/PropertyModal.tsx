import Image from "next/image";
import React from "react";
import { type Property } from "../../../data/properties";

interface PropertyModalProps {
  property: Property;
  selectedImageIndex: number;
  onClose: () => void;
  onImageSelect: (index: number) => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  selectedImageIndex,
  onClose,
  onImageSelect,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-500 cursor-pointer rounded-full bg-[#F4F6F8] p-2 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Main Image */}
        <div className="relative w-3/4 md:w-[90%] aspect-[4/3] mx-auto rounded-xl overflow-hidden">
          <Image
            src={property.images[selectedImageIndex]}
            alt={property.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Thumbnail Carousel */}
        <div className="p-4">
          <div className="flex gap-2 overflow-x-auto pb-2 justify-center items-center">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => onImageSelect(index)}
                className={`relative flex-shrink-0 w-20 cursor-pointer h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImageIndex === index
                    ? "border-[#59344F]"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <Image
                  src={image}
                  alt={`${property.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
