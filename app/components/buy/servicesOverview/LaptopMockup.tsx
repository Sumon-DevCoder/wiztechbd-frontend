const LaptopMockup = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Laptop Frame */}
      <div className="relative bg-gray-200 rounded-lg p-2 shadow-2xl">
        {/* Screen */}
        <div className="bg-gray-900 rounded overflow-hidden aspect-video relative">
          {/* Video Call Interface */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100">
            {/* Top Bar */}
            <div className="absolute top-2 left-2 flex items-center gap-2">
              <span className="text-xs text-gray-600 font-semibold">Logo</span>
            </div>

            {/* Main Video Feed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gradient-to-br from-blue-100 to-gray-200 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden">
                {/* Person in video - placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">Video Call</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Video Feed - Top Right */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Subscribe Button Overlay */}
            <div className="absolute bottom-20 right-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg text-sm shadow-lg">
                Subscribe for $5.00/mo
              </button>
            </div>

            {/* Course Information Card */}
            <div className="absolute bottom-4 right-8 left-8 bg-white rounded-lg p-3 shadow-xl flex items-center gap-3">
              <div className="bg-[#59344F] text-white px-3 py-1 rounded text-xs font-bold">
                PT 01
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-gray-800">
                  Lady Dentaa Amoateng MBE
                </p>
                <p className="text-xs text-gray-500">54 min • Oct 17 2026</p>
              </div>
              <button className="bg-[#59344F] text-white p-2 rounded-full hover:bg-[#4a2a3f] transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base */}
      <div className="h-2 bg-gray-300 rounded-b-lg mx-auto w-[95%]"></div>
    </div>
  );
};

export default LaptopMockup;

