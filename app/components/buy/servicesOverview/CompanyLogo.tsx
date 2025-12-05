interface CompanyLogoProps {
  name: string;
  className?: string;
}

const CompanyLogo = ({ name, className = "" }: CompanyLogoProps) => {
  return (
    <div
      className={`flex items-center justify-center h-12 grayscale opacity-60 hover:opacity-100 transition-opacity ${className}`}
    >
      <span className="text-gray-600 font-semibold text-sm">{name}</span>
    </div>
  );
};

export default CompanyLogo;

