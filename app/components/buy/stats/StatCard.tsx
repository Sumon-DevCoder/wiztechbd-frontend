import React from "react";

interface StatCardProps {
  label: string;
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, description }) => {
  return (
    <div className="border border-white/20 rounded-lg p-4 sm:p-5 md:p-6 flex flex-col">
      <div className="text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-wide mb-1 sm:mb-2">
        {label}
      </div>
      <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
        {value}
      </div>
      <div className="text-white/70 text-xs sm:text-sm">{description}</div>
    </div>
  );
};

export default StatCard;
