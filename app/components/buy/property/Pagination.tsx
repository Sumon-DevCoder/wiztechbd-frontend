import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = (isMobile: boolean = false) => {
    const pages: (number | string)[] = [];
    const maxPages = isMobile ? 5 : 10;

    if (totalPages <= maxPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (isMobile) {
        // Mobile: Show current page and adjacent pages only
        if (currentPage === 1) {
          pages.push(1, 2, "...", totalPages);
        } else if (currentPage === totalPages) {
          pages.push(1, "...", totalPages - 1, totalPages);
        } else {
          pages.push(1, "...", currentPage, "...", totalPages);
        }
      } else {
        // Desktop: Show more pages
        pages.push(1);

        if (currentPage > 3) {
          pages.push("...");
        }

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }

        if (currentPage < totalPages - 2) {
          pages.push("...");
        }

        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between gap-1 sm:gap-2 mt-6 sm:mt-8 relative">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors font-medium flex items-center gap-1 sm:gap-2 min-w-[40px] sm:min-w-auto"
        aria-label="Previous page"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8334 9.99996H4.16669M4.16669 9.99996L10 15.8333M4.16669 9.99996L10 4.16663"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers - Mobile */}
      <div className="flex items-center gap-0.5 sm:gap-1 absolute left-1/2 -translate-x-1/2 sm:hidden">
        {getPageNumbers(true).map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-mobile-${index}`}
                className="px-1 text-gray-500 text-sm"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`min-w-[32px] h-8 px-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentPage === pageNum
                  ? "bg-[#59344F] text-white"
                  : "border border-gray-300 hover:bg-gray-50 text-gray-700"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Page Numbers - Desktop */}
      <div className="hidden sm:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
        {getPageNumbers(false).map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-desktop-${index}`}
                className="px-2 text-gray-500"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                currentPage === pageNum
                  ? "bg-[#59344F] text-white"
                  : "border border-gray-300 hover:bg-gray-50 text-gray-700"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors font-medium flex items-center gap-1 sm:gap-2 min-w-[40px] sm:min-w-auto"
        aria-label="Next page"
      >
        <span className="hidden sm:inline">Next</span>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16666 9.99996H15.8333M15.8333 9.99996L9.99999 4.16663M15.8333 9.99996L9.99999 15.8333"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
