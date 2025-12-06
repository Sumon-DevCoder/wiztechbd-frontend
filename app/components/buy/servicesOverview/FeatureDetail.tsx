import Image from "next/image";

interface FeatureDetailProps {
  title: string;
  description: string[];
  buttonText?: string;
  imageUrl?: string;
  gradientColors?: string;
}

const FeatureDetail = ({
  title,
  description,
  buttonText = "Learn More",
  imageUrl = "https://res.cloudinary.com/dfcshnwyr/image/upload/v1765002132/DALL_E_2024-08-21_22.58.08_-_A_realistic_image_of_a_virtual_coaching_session_taking_place_via_video_call._The_scene_shows_a_professional_coach_on_a_laptop_screen_engaged_in_a_one_1_wrdfmp.png",
}: FeatureDetailProps) => {
  return (
    <div className="relative mt-4 overflow-hidden max-w-5xl mx-auto">
      {/* Organic curved background shape - smooth wave on left */}
      <div
        className="clip-path-ellipse"
        style={{
          background:
            "linear-gradient(280.28deg, rgba(42, 0, 25, 0.46) 29.3%, #4C002D 98.92%)",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Left Panel - Text Content */}
            <div className="text-white space-y-2 z-10 lg:pl-12 xl:pl-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {title}
              </h2>
              {description.map((text, index) => (
                <p
                  key={index}
                  className="text-white/90 text-sm sm:text-base leading-relaxed"
                >
                  {text}
                </p>
              ))}
              <button className="bg-[#2A0019] cursor-pointer rounded-full hover:bg-[#4a2a3f] text-white font-semibold px-4 py-2 transition-colors text-sm sm:text-base mt-2">
                {buttonText}
              </button>
            </div>

            {/* Right Panel - Image */}
            <div className="relative z-10">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={title || "Feature image"}
                  width={350}
                  height={350}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <div className="w-full aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/50 text-xs">
                    Image Placeholder
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for responsive clip-path */}
      <style jsx>{`
        .clip-path-ellipse {
          clip-path: none;
        }

        @media (min-width: 1024px) {
          .clip-path-ellipse {
            clip-path: ellipse(99% 100% at 100% 50%);
          }
        }
      `}</style>
    </div>
  );
};

export default FeatureDetail;
