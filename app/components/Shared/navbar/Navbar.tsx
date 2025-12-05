"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-auto h-8">
              <Image
                src="/images/logo/logo.png"
                alt="WiztecBD Logo"
                width={600}
                height={600}
                className="h-8 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/buy"
              className={`transition-colors ${
                isActive("/buy")
                  ? "text-[#59344F] font-bold"
                  : "text-gray-700 hover:text-[#59344F] font-medium"
              }`}
            >
              Buy
            </Link>
            <Link
              href="/rent"
              className={`transition-colors ${
                isActive("/rent")
                  ? "text-[#59344F] font-bold"
                  : "text-gray-700 hover:text-[#59344F] font-medium"
              }`}
            >
              Rent
            </Link>
            <Link
              href="/sell"
              className={`transition-colors ${
                isActive("/sell")
                  ? "text-[#59344F] font-bold"
                  : "text-gray-700 hover:text-[#59344F] font-medium"
              }`}
            >
              Sell
            </Link>
            <Link
              href="/agents"
              className={`transition-colors ${
                isActive("/agents")
                  ? "text-[#59344F] font-bold"
                  : "text-gray-700 hover:text-[#59344F] font-medium"
              }`}
            >
              Agents
            </Link>
            <Link
              href="/blogs"
              className={`transition-colors ${
                isActive("/blogs")
                  ? "text-[#59344F] font-bold"
                  : "text-gray-700 hover:text-[#59344F] font-medium"
              }`}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-[#59344F] font-bold"
                  : "text-gray-700 hover:text-[#59344F] font-medium"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/favourite"
              className="flex items-center gap-2 text-gray-700 hover:text-[#59344F] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="hidden sm:inline">Favourite</span>
            </Link>
            <Link
              href="/login"
              className="bg-[#59344F] text-white px-6 py-2 rounded-full hover:bg-[#4a2a3f] transition-colors font-medium"
            >
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
