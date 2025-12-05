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
        isEnterprise ? "bg-[#2d1b3d] text-white" : "bg-white"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3
          className={`font-bold text-lg flex-1 ${
            isEnterprise ? "text-yellow-400" : "text-gray-800"
          }`}
        >
          {title}
        </h3>
        <div className="shrink-0 ml-3">{icon}</div>
      </div>
      <p
        className={`text-sm mb-4 ${
          isEnterprise ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {description}
      </p>
      <button
        type="button"
        className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer text-[#CD9D41]"
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
          <g clipPath="url(#clip0_2_4824)">
            <path
              d="M8.12435 1.00146L12.8695 5.74666M12.8695 5.74666L8.12435 10.4929M12.8695 5.74666L1.00555 5.74766"
              stroke="#CD9D41"
              strokeWidth="2.00304"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_4824">
              <rect width="14.0213" height="12.0182" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default ToolCard;
