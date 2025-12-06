import React from "react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isEnterprise?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  icon,
  isEnterprise = false,
}) => {
  return (
    <div
      className={`rounded-xl p-6 transition-shadow hover:shadow-lg w-full ${
        isEnterprise ? "text-white" : ""
      }`}
      style={{
        background: isEnterprise
          ? `linear-gradient(270deg, #A16A6B 0%, #4D5D69 100%), linear-gradient(98.64deg, #4D5D69 18.46%, #A16A6B 97.93%)`
          : "white",
        boxShadow: "0px 62px 136px 0px #0000001A",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3
          className={`font-bold text-lg flex-1 ${
            isEnterprise ? "text-yellow-400" : "text-gray-800"
          }`}
          style={
            isEnterprise
              ? {
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #FBFD89 24%, #FFD900 87%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
              : {}
          }
        >
          {title}
        </h3>

        <div className="shrink-0 ml-3">{icon}</div>
      </div>
      <p
        className={`text-sm mb-4 ${
          isEnterprise ? "text-[#FFFFFF]" : "text-gray-600"
        }`}
      >
        {description}
      </p>
      <button
        type="button"
        className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
        style={
          isEnterprise
            ? {
                background:
                  "radial-gradient(50% 50% at 50% 50%, #FBFD89 24%, #FFD900 87%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }
            : { color: "#CD9D41" }
        }
      >
        <span>Learn more</span>
        <svg
          width="15"
          height="13"
          viewBox="0 0 15 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-center mt-1 ml-1"
        >
          <defs>
            {isEnterprise && (
              <linearGradient id="buttonGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FBFD89" />
                <stop offset="100%" stopColor="#FFD900" />
              </linearGradient>
            )}
            <clipPath id="clip0_2_4824">
              <rect width="14.0213" height="12.0182" fill="white" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip0_2_4824)">
            <path
              d="M8.12435 1.00146L12.8695 5.74666M12.8695 5.74666L8.12435 10.4929M12.8695 5.74666L1.00555 5.74766"
              stroke={isEnterprise ? "url(#buttonGrad)" : "#CD9D41"}
              strokeWidth="2.00304"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default ToolCard;
