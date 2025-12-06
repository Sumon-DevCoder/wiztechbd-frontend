"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [hideNavbarFooter, setHideNavbarFooter] = useState(false);

  useEffect(() => {
    // Only check pathname after component mounts to avoid hydration mismatch
    setHideNavbarFooter(pathname === "/login" || pathname === "/register");
  }, [pathname]);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
}
