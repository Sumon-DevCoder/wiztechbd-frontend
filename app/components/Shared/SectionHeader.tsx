import React from "react";

interface SectionHeaderProps {
  badgeText: string;
  badgeGradient?: string;
  badgeBackground?: string;
  badgeTextColor?: string;
  title: string | React.ReactNode;
  titleGradient?: string;
  titleColor?: string;
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description: string;
  descriptionColor?: string;
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeGradient,
  badgeBackground,
  badgeTextColor = "text-black",
  title,
  titleGradient,
  titleColor,
  titleAs = "h2",
  description,
  descriptionColor,
  className = "",
  badgeClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}) => {
  const TitleTag = titleAs;

  // Badge style
  const badgeStyle: React.CSSProperties = {};
  if (badgeGradient) {
    badgeStyle.background = badgeGradient;
  } else if (badgeBackground) {
    badgeStyle.backgroundColor = badgeBackground;
  }

  // Title style
  const titleStyle: React.CSSProperties = {};
  if (titleGradient) {
    titleStyle.background = titleGradient;
    titleStyle.WebkitBackgroundClip = "text";
    titleStyle.WebkitTextFillColor = "transparent";
    titleStyle.backgroundClip = "text";
  }

  return (
    <div className={`text-center mb-8 sm:mb-10 md:mb-12 ${className}`}>
      {/* Pill Badge */}
      <div
        className={`inline-block px-3 sm:px-4 py-1 sm:py-1.5 ${badgeTextColor} text-[10px] sm:text-xs font-bold rounded-full mb-3 sm:mb-4 ${badgeClassName}`}
        style={badgeStyle}
      >
        {badgeText}
      </div>

      {/* Title */}
      <TitleTag
        className={`text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2 ${
          titleGradient ? "" : titleColor || "text-gray-800"
        } ${titleClassName}`}
        style={titleStyle}
      >
        {title}
      </TitleTag>

      {/* Description */}
      <p
        className={`${
          descriptionColor || "text-gray-700"
        } text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
