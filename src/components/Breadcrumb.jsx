"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

const pageNames = {
  "/about": "About Us",
  "/about-us": "About Us",
  "/products": "Products",
  "/applications": "Applications",
  "/services-spares": "Services & Spares",
  "/services-and-spares": "Services & Spares",
  "/our-clients": "Our Clients",
  "/news-exhibition": "News/Exhibition",
  "/blog": "Blog",
  "/contact-us": "Contact Us",
  "/category/blog": "Category Blog",
  "/category/uncategorized": "Category Uncategorized",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Breadcrumb sirf pageNames mein defined pages par show hoga
  const pageTitle = pageNames[pathname];

  // Baaki sab pages par breadcrumb hide
  if (!pageTitle) return null;

  return (
    <section className="w-full bg-[#8C0013] text-white py-12 sm:py-16 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-3">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase leading-tight">
          {pageTitle}
        </h1>

        {/* Breadcrumb Links */}
        <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-normal text-white/90">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-white/70 transition-colors duration-200"
          >
            <FaHome className="text-sm" />
            <span>Home</span>
          </Link>

          <span className="text-white/80 font-bold">&raquo;</span>

          <span className="text-white">{pageTitle}</span>
        </div>
      </div>
    </section>
  );
}
