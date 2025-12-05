interface FeatureNavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const FeatureNavItem = ({
  icon,
  label,
  isActive = false,
  onClick,
}: FeatureNavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg transition-all ${
        isActive
          ? "bg-[#59344F] text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <div className={`${isActive ? "text-white" : "text-gray-600"}`}>
        {icon}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
};

export default FeatureNavItem;

