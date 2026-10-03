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

const quickAnswers = {
  "/products":
    "Jawla Advance Technology LLP is a packaging machine manufacturer in Ballabgarh, Faridabad, serving Delhi NCR, India and export markets. It makes 15 models covering vertical FFS, liquid, auger, cup filler, multi-head weighing and horizontal flow wrap machines for pack sizes from 2 ml and 2 g sachets up to 10 kg bags.",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Breadcrumb sirf pageNames mein defined pages par show hoga
  const pageTitle = pageNames[pathname];

  // Baaki sab pages par breadcrumb hide
  if (!pageTitle) return null;

  const quickAnswer = quickAnswers[pathname];

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

        {/* Quick Answer */}
        {quickAnswer && (
          <p className="max-w-4xl text-sm sm:text-base leading-relaxed text-white/90">
            <span className="font-bold text-white">Quick answer: </span>
            {quickAnswer}
          </p>
        )}
      </div>
    </section>
  );
}
