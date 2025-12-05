import Image from "next/image";
import LaptopMockup from "./LaptopMockup";

interface FeatureDetailProps {
  title: string;
  description: string[];
  buttonText?: string;
  imageUrl?: string;
  gradientColors?: string;
  showLaptop?: boolean;
}

const FeatureDetail = ({
  title,
  description,
  buttonText = "Learn More",
  imageUrl,
  showLaptop = false,
}: FeatureDetailProps) => {
  return (
    <div className="relative mt-12 overflow-hidden">
      {/* Organic curved background shape - curves up from bottom left */}
      <div
        style={{
          background:
            "linear-gradient(270.28deg, rgba(42, 0, 25, 0.46) 29.3%, #4C002D 98.92%)",
          // clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left Panel - Text Content */}
            <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {title}
              </h2>
              {description.map((text, index) => (
                <p
                  key={index}
                  className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed"
                >
                  {text}
                </p>
              ))}
              <button className="bg-[#59344F] hover:bg-[#4a2a3f] text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg transition-colors text-sm sm:text-base">
                {buttonText}
              </button>
            </div>

            {/* Right Panel - Laptop or Image */}
            <div className="relative z-10">
              {showLaptop ? (
                <LaptopMockup />
              ) : imageUrl ? (
                <Image
                  src={imageUrl || ""}
                  alt={title || ""}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              ) : (
                <div className="w-full aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/50">Image Placeholder</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;
