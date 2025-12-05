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
  gradientColors = "from-[#59344F] to-[#42232B]",
  showLaptop = false,
}: FeatureDetailProps) => {
  // Extract colors from gradientColors string (format: "from-[#color1] to-[#color2]")
  const colorMatch = gradientColors.match(/from-\[(#[\w\d]+)\] to-\[(#[\w\d]+)\]/);
  const color1 = colorMatch ? colorMatch[1] : "#59344F";
  const color2 = colorMatch ? colorMatch[2] : "#42232B";

  return (
    <div className="relative mt-12 overflow-hidden">
      {/* Organic curved background shape - curves up from bottom left */}
      <div
        style={{
          background: `linear-gradient(to bottom right, ${color1}, ${color2})`,
          clipPath: "polygon(0 15%, 100% 0%, 100% 100%, 0% 100%)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Panel - Text Content */}
            <div className="text-white space-y-6 z-10">
              <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
              {description.map((text, index) => (
                <p key={index} className="text-white/90 text-lg leading-relaxed">
                  {text}
                </p>
              ))}
              <button className="bg-[#59344F] hover:bg-[#4a2a3f] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                {buttonText}
              </button>
            </div>

            {/* Right Panel - Laptop or Image */}
            <div className="relative z-10">
              {showLaptop ? (
                <LaptopMockup />
              ) : imageUrl ? (
                <img
                  src={imageUrl}
                  alt={title}
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

