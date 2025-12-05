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
      className={`flex flex-row items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full transition-all cursor-pointer ${
        isActive ? "text-white" : "text-gray-700 hover:bg-gray-100"
      }`}
      style={
        isActive
          ? {
              background:
                "linear-gradient(214.18deg, #2A0019 20.22%, #5C0639 77.53%)",
            }
          : undefined
      }
    >
      <div className={`${isActive ? "text-white" : "text-gray-600"}`}>
        {icon}
      </div>
      <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap">
        {label}
      </span>
    </button>
  );
};

export default FeatureNavItem;
