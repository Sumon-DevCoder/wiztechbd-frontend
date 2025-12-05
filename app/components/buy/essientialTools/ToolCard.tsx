import React from 'react';

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
  isEnterprise = false 
}) => {
  return (
    <div
      className={`rounded-xl p-6 transition-shadow hover:shadow-lg ${
        isEnterprise
          ? 'bg-[#2d1b3d] text-white'
          : 'bg-white'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3
          className={`font-bold text-lg flex-1 ${
            isEnterprise ? 'text-yellow-400' : 'text-gray-800'
          }`}
        >
          {title}
        </h3>
        <div className="flex-shrink-0 ml-3">{icon}</div>
      </div>
      <p
        className={`text-sm mb-4 ${
          isEnterprise ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        {description}
      </p>
      <a
        href="#"
        className={`text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all ${
          isEnterprise ? 'text-yellow-400' : 'text-orange-500'
        }`}
      >
        Learn more →
      </a>
    </div>
  );
};

export default ToolCard;

