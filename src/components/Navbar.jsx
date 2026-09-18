"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const pathname = usePathname();

  const productsList = [
    {
      name: "Normal FFS Packaging Machine (JAT-301)",
      slug: "normal-ffs-packaging-machine-jat-301",
    },
    {
      name: "FFS Liquid Packaging Machine (JAT-301A)",
      slug: "ffs-liquid-packaging-machine",
    },
    {
      name: "FFS High Speed Packaging Machine (JAT-302)",
      slug: "ffs-high-speed-packaging-machine",
    },
    {
      name: "FFS D-Motion Type Packaging Machine (JAT-303)",
      slug: "ffs-d-motion-type-packaging-machine",
    },
    {
      name: "FFS Half Pneumatic Packaging Machine (JAT-304)",
      slug: "ffs-half-pneumatic-packaging-machine",
    },
    {
      name: "Horizontal Rotary Machine (JAT-305)",
      slug: "horizontal-rotary-machine",
    },
    {
      name: "Fully Automatic Multi-head Weighing, Packaging Machine (JAT-306)",
      slug: "fully-automatic-multi-head-weighing-packaging-machine-jat-306",
    },
    {
      name: "Collar Auger Filling Packaging Machine (JAT-307)",
      slug: "collar-auger-filling-packaging-machine",
    },
    {
      name: "Horizontal Flow Wrape Pillopack Machine (JAT-308)",
      slug: "horizontal-flow-wrap-pillow-pack-machine",
    },
    {
      name: "Hotel Pack Packaging Machine (JAT-309)",
      slug: "hotel-pack-packaging-machine",
    },
    {
      name: "Horizontal Flow Wrape Pillow Pack High Speed Packaging Machine (JAT-310)",
      slug: "horizontal-flow-wrap-pillow-pack-high-speed-packaging-machine",
    },
    {
      name: "One-edge Biscuit Packaging Machine with Dual Feeder for 50gm, 75gm & 100gm (JAT-311)",
      slug: "one-edge-biscuit-packaging-machine",
    },
    {
      name: "Automatic Family Pack Biscuit or Rusk Packaging Machine (JAT-312)",
      slug: "best-automatic-family-pack-rusk-packaging-machine",
    },
    {
      name: "One-edge Packaging Machine with Cream Biscuit Feeder (JAT-313)",
      slug: "one-edge-packaging-machine-with-cream-biscuit-feeder",
    },
    {
      name: "Collar Type Cup Filler Packaging Machine (JAT-314)",
      slug: "collar-type-cup-filler-packaging-machine",
    },
  ];

  // Desktop hover underline completely removed
  const navLinkClass =
    "relative py-5 flex items-center uppercase tracking-wide transition-colors duration-200 hover:text-[#E13538]";

  const mobileLinkClass =
    "block w-full px-3 py-3 rounded-lg text-[15px] sm:text-[16px] md:text-base font-bold text-white hover:bg-white/10 transition-all duration-200";

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  return (
    <nav className="relative z-50 w-full bg-white border-b border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)] font-sans">
      {/* MAIN NAVBAR */}
      <div className="w-full mx-auto h-[76px] sm:h-[84px] md:h-[90px] min-[1020px]:h-[100px] flex items-center px-4 sm:px-6 min-[1020px]:px-2 xl:px-8">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="Jawla Advance Technology LLP"
              width={145}
              height={30}
              priority
              className="w-auto h-[55px] sm:h-[42px] md:h-[72px] min-[1020px]:h-auto min-[1020px]:w-[85px] xl:w-[98px] object-contain"
            />
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden min-[1020px]:flex flex-1 justify-center">
          <ul className="flex items-center min-[1020px]:gap-x-3.5 xl:gap-x-6 h-full">
            <li>
              <Link
                href="/"
                className={`${navLinkClass} min-[1020px]:text-[11px] xl:text-[14px] font-semibold ${
                  pathname === "/" ? "text-[#FF474A]" : "text-gray-800"
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about-us"
                className={`${navLinkClass} min-[1020px]:text-[11px] xl:text-[14px] font-semibold ${
                  pathname === "/about-us" ? "text-[#FF474A]" : "text-gray-800"
                }`}
              >
                About Us
              </Link>
            </li>

            {/* PRODUCTS */}
            <li className="relative group h-full flex items-center">
              <Link
                href="/products"
                className={`${navLinkClass} gap-1 min-[1020px]:text-[11px] xl:text-[14px] font-semibold ${
                  pathname === "/products" ? "text-[#FF474A]" : "text-gray-800"
                }`}
              >
                Products
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* PRODUCT DROPDOWN */}
              <div className="absolute top-[90%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-[60]">
                <div className="w-[650px] xl:w-[750px] bg-white border border-gray-200 rounded-b-xl shadow-2xl overflow-hidden">
                  <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                    <p className="text-[11px] font-bold text-[#E13538] uppercase tracking-widest">
                      Our Products
                    </p>
                  </div>

                  <ul className="grid grid-cols-2 gap-1 p-3">
                    {productsList.map((product) => {
                      const productPath = `/${product.slug}`;
                      const isActive = pathname === productPath;

                      return (
                        <li key={product.slug}>
                          <Link
                            href={productPath}
                            className={`group/item flex items-start gap-2 px-4 py-2.5 rounded-md text-[13px] leading-5 normal-case transition-all duration-150 font-medium ${
                              isActive
                                ? "text-[#FF474A]"
                                : "text-gray-700 hover:bg-red-50 hover:text-[#E13538]"
                            }`}
                          >
                            <span
                              className={`mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                isActive
                                  ? "bg-[#FF474A]"
                                  : "bg-[#E13538] opacity-0 group-hover/item:opacity-100"
                              }`}
                            />
                            <span>{product.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/applications"
                className={`${navLinkClass} min-[1020px]:text-[11px] xl:text-[14px] font-semibold ${
                  pathname === "/applications"
                    ? "text-[#FF474A]"
                    : "text-gray-800"
                }`}
              >
                Applications
              </Link>
            </li>

            <li>
              <Link
                href="/services-spares"
                className={`${navLinkClass} min-[1020px]:text-[11px] xl:text-[14px] font-semibold ${
                  pathname === "/services-spares"
                    ? "text-[#FF474A]"
                    : "text-gray-800"
                }`}
              >
                Services & Spares
              </Link>
            </li>

            <li>
              <Link
                href="/our-clients"
                className={`${navLinkClass} min-[1020px]:text-[11px] xl:text-[14px] font-semibold ${
                  pathname === "/our-clients"
                    ? "text-[#FF474A]"
                    : "text-gray-800"
                }`}
              >
                Our Clients
              </Link>
            </li>

            <li>
              <Link
                href="/news-exhibition"
                className={`${navLinkClass} min-[1020px]:text-[11px] xl:text-[14px] font-semibold ${
                  pathname === "/news-exhibition"
                    ? "text-[#FF474A]"
                    : "text-gray-800"
                }`}
              >
                News/Exhibition
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className={`${navLinkClass} min-[1020px]:text-[11px] xl:text-[14px] font-semibold ${
                  pathname === "/blog" ? "text-[#FF474A]" : "text-gray-800"
                }`}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className={`${navLinkClass} min-[1020px]:text-[11px] xl:text-[14px] font-semibold ${
                  pathname === "/contact-us"
                    ? "text-[#FF474A]"
                    : "text-gray-800"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ENQUIRY NOW */}
        <div className="hidden min-[1020px]:flex flex-shrink-0 ml-2 xl:ml-6">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center bg-[#E13538] text-white min-[1020px]:px-4 xl:px-6 min-[1020px]:py-2.5 xl:py-3 rounded-full min-[1020px]:text-[11px] xl:text-[13px] font-semibold uppercase tracking-wide shadow-md hover:bg-[#c92c30] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Enquiry Now
          </Link>
        </div>

        {/* MOBILE / MD HAMBURGER */}
        <div className="relative z-[9999] flex-shrink-0 ml-auto min-[1020px]:hidden">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="relative z-[100] w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-800 hover:border-[#E13538] hover:text-[#E13538] active:bg-gray-50 transition-all duration-200 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-5 h-5 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE / MD SLIDE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="min-[1020px]:hidden fixed inset-0 bg-black/50 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMobileMenu}
            />

            <motion.div
              className="min-[1020px]:hidden fixed top-0 right-0 h-screen w-[80%] max-w-[500px] bg-black text-white z-[70] shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
            >
              {/* MENU HEADER */}
              <div className="sticky top-0 z-10 flex items-center justify-end px-4 sm:px-6 py-4 bg-black border-b border-white/10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeMobileMenu();
                  }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-[#E13538] hover:text-[#E13538] active:bg-white/20 transition-all duration-200 cursor-pointer"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="px-4 sm:px-6 py-5">
                <ul className="space-y-1 text-[15px] sm:text-[16px] md:text-base font-bold uppercase">
                  {/* HOME */}
                  <li>
                    <Link
                      href="/"
                      onClick={closeMobileMenu}
                      className={`${mobileLinkClass} ${
                        pathname === "/" ? "!text-[#FF474A] bg-white/10" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>

                  {/* ABOUT */}
                  <li>
                    <Link
                      href="/about-us"
                      onClick={closeMobileMenu}
                      className={`${mobileLinkClass} ${
                        pathname === "/about-us"
                          ? "!text-[#FF474A] bg-white/10"
                          : ""
                      }`}
                    >
                      About Us
                    </Link>
                  </li>

                  {/* MOBILE PRODUCTS */}
                  <li>
                    <div
                      className={`flex items-center w-full rounded-lg transition-all duration-200 ${
                        pathname === "/products"
                          ? "bg-white/10"
                          : "hover:bg-white/10"
                      }`}
                    >
                      {/* PRODUCTS LINK */}
                      <Link
                        href="/products"
                        onClick={closeMobileMenu}
                        className={`flex-1 px-3 py-3 text-[15px] sm:text-[16px] md:text-base font-bold ${
                          pathname === "/products"
                            ? "!text-[#FF474A]"
                            : "text-white"
                        }`}
                      >
                        Products
                      </Link>

                      {/* DROPDOWN ARROW */}
                      <button
                        type="button"
                        onClick={() =>
                          setIsMobileProductsOpen(!isMobileProductsOpen)
                        }
                        className="flex items-center justify-center w-12 h-12 text-white"
                        aria-label="Toggle products dropdown"
                        aria-expanded={isMobileProductsOpen}
                      >
                        <motion.svg
                          animate={{
                            rotate: isMobileProductsOpen ? 180 : 0,
                          }}
                          transition={{ duration: 0.25 }}
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isMobileProductsOpen && (
                        <motion.ul
                          className="mt-1 ml-3 space-y-1"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                        >
                          {productsList.map((product, index) => {
                            const productPath = `/${product.slug}`;
                            const isActive = pathname === productPath;

                            return (
                              <motion.li
                                key={product.slug}
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: index * 0.025,
                                }}
                              >
                                <Link
                                  href={productPath}
                                  onClick={closeMobileMenu}
                                  className={`flex items-start gap-2 px-2 py-2 text-[14px] sm:text-[15px] md:text-[15px] leading-5 normal-case font-semibold rounded-md transition-all duration-200 ${
                                    isActive
                                      ? "!text-[#FF474A]"
                                      : "text-white hover:bg-white/10"
                                  }`}
                                >
                                  <span
                                    className={`mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                      isActive ? "bg-[#FF474A]" : "bg-[#E13538]"
                                    }`}
                                  />
                                  <span>{product.name}</span>
                                </Link>
                              </motion.li>
                            );
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* APPLICATIONS */}
                  <li>
                    <Link
                      href="/applications"
                      onClick={closeMobileMenu}
                      className={`${mobileLinkClass} ${
                        pathname === "/applications"
                          ? "!text-[#FF474A] bg-white/10"
                          : ""
                      }`}
                    >
                      Applications
                    </Link>
                  </li>

                  {/* SERVICES */}
                  <li>
                    <Link
                      href="/services-spares"
                      onClick={closeMobileMenu}
                      className={`${mobileLinkClass} ${
                        pathname === "/services-spares"
                          ? "!text-[#FF474A] bg-white/10"
                          : ""
                      }`}
                    >
                      Services & Spares
                    </Link>
                  </li>

                  {/* CLIENTS */}
                  <li>
                    <Link
                      href="/our-clients"
                      onClick={closeMobileMenu}
                      className={`${mobileLinkClass} ${
                        pathname === "/our-clients"
                          ? "!text-[#FF474A] bg-white/10"
                          : ""
                      }`}
                    >
                      Our Clients
                    </Link>
                  </li>

                  {/* NEWS */}
                  <li>
                    <Link
                      href="/news-exhibition"
                      onClick={closeMobileMenu}
                      className={`${mobileLinkClass} ${
                        pathname === "/news-exhibition"
                          ? "!text-[#FF474A] bg-white/10"
                          : ""
                      }`}
                    >
                      News/Exhibition
                    </Link>
                  </li>

                  {/* BLOG */}
                  <li>
                    <Link
                      href="/blog"
                      onClick={closeMobileMenu}
                      className={`${mobileLinkClass} ${
                        pathname === "/blog"
                          ? "!text-[#FF474A] bg-white/10"
                          : ""
                      }`}
                    >
                      Blog
                    </Link>
                  </li>

                  {/* CONTACT */}
                  <li>
                    <Link
                      href="/contact-us"
                      onClick={closeMobileMenu}
                      className={`${mobileLinkClass} ${
                        pathname === "/contact-us"
                          ? "!text-[#FF474A] bg-white/10"
                          : ""
                      }`}
                    >
                      Contact Us
                    </Link>
                  </li>

                  {/* ENQUIRY */}
                  <li className="pt-4">
                    <Link
                      href="/contact-us"
                      onClick={closeMobileMenu}
                      className="flex items-center justify-center w-full bg-[#E13538] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-md hover:bg-[#c92c30] transition-all"
                    >
                      Enquiry Now
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
