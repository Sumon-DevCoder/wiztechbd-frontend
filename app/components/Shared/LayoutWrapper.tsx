"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide navbar and footer on login and register pages
  const hideNavbarFooter = pathname === "/login" || pathname === "/register";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
}
