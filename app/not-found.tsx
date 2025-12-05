import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#59344F] opacity-20 leading-none">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
        </div>

        {/* Illustration or Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-64 h-64 relative">
            <svg
              className="w-full h-full text-[#59344F] opacity-30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="bg-[#59344F] text-white px-8 py-3 rounded-lg hover:bg-[#4a2a3f] transition-colors font-medium text-lg shadow-md hover:shadow-lg"
          >
            Go Back Home
          </Link>
          <Link
            href="/properties"
            className="border-2 border-[#59344F] text-[#59344F] px-8 py-3 rounded-lg hover:bg-[#59344F] hover:text-white transition-colors font-medium text-lg"
          >
            Browse Properties
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/buy"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors"
            >
              Buy
            </Link>
            <Link
              href="/rent"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors"
            >
              Rent
            </Link>
            <Link
              href="/sell"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors"
            >
              Sell
            </Link>
            <Link
              href="/agents"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors"
            >
              Agents
            </Link>
            <Link
              href="/blogs"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
