import Image from "next/image";
import React from "react";
import { Testimonial } from "../../../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:min-w-[500px] lg:min-w-[600px] xl:min-w-[700px] min-h-[450px] sm:min-h-[480px] md:h-[500px] lg:h-[400px]">
      {/* Left Section - Video Thumbnail */}
      <div className="w-full lg:w-1/2 shrink-0 h-[200px] sm:h-[220px] md:h-[240px] lg:h-full">
        <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-gray-200">
          <Image
            src={testimonial.videoThumbnail}
            alt={`${testimonial.name} video thumbnail`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800 ml-0.5 sm:ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Testimonial Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between h-full min-h-0">
        {/* Profile Section */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0">
              <Image
                src={testimonial.profileImage}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-sm sm:text-base text-black truncate">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    {testimonial.title}
                  </p>
                </div>
                {/* Star Rating */}
                <div className="flex items-center gap-0.5 shrink-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {testimonial.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white text-black text-[10px] sm:text-xs font-medium rounded-full border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="text-black text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-4 sm:line-clamp-none">
            {testimonial.testimonial}
          </p>
        </div>

        {/* Bottom Section - Achievement & Logo */}
        <div className="flex items-end justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-200 shrink-0">
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-0.5 sm:mb-1">
              {testimonial.achievement.amount}
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 font-medium uppercase tracking-wide">
              {testimonial.achievement.period}
            </div>
          </div>
          {testimonial.companyLogo && (
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0">
              <Image
                src={testimonial.companyLogo}
                alt="Company logo"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
