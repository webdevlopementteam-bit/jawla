import React from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F1F1F] text-gray-300 font-sans pt-16 pb-2 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full mx-auto">
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 mb-14">
          {/* Column 1: Company Info */}
          <div className="md:col-span-1 lg:col-span-4 xl:col-span-4 pr-0 lg:pr-6">
            <h3 className="text-white font-extrabold text-xl sm:text-2xl uppercase tracking-wide mb-7">
              JAWLA ADVANCE TECHNOLOGY
            </h3>

            <p className="text-gray-300 text-base leading-7 max-w-xl">
              Jawla Advance Technology LLP is a trusted Indian name in
              best-in-class packaging machines, offering durable, reliable, and
              customized solutions built to international standards.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-white font-extrabold text-lg sm:text-xl uppercase tracking-wide mb-7">
              QUICK LINKS
            </h3>

            <ul className="space-y-4 text-sm sm:text-base">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Products", href: "/products" },
                { name: "Applications", href: "/applications" },
                { name: "Services & Spares", href: "/services-spares" },
                { name: "Our Clients", href: "/our-clients" },
                { name: "News/Exhibition", href: "/news-exhibition" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2.5 hover:text-red-500 transition-colors duration-200"
                  >
                    <FaSignOutAlt className="text-red-500 text-sm flex-shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="text-white font-extrabold text-lg sm:text-xl uppercase tracking-wide mb-7">
              PRODUCTS
            </h3>

            <ul className="space-y-5 text-sm sm:text-base">
              {[
                {
                  name: "Normal FFS Packaging Machine (JAT-301)",
                  href: "/normal-ffs-packaging-machine-jat-301",
                },
                {
                  name: "FFS High Speed Packaging Machine (JAT-302)",
                  href: "/ffs-high-speed-packaging-machine",
                },
                {
                  name: "FFS D-Motion Type Packaging Machine (JAT-303)",
                  href: "/ffs-d-motion-type-packaging-machine",
                },
                {
                  name: "FFS Half Pneumatic Packaging Machine (JAT-304)",
                  href: "/ffs-half-pneumatic-packaging-machine",
                },
              ].map((product, idx) => (
                <li key={idx}>
                  <Link
                    href={product.href}
                    className="flex items-start gap-2.5 hover:text-red-500 transition-colors duration-200"
                  >
                    <FaSignOutAlt className="text-red-500 text-sm flex-shrink-0 mt-1" />
                    <span className="leading-6">{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="md:col-span-2 lg:col-span-4 xl:col-span-4 pl-0 lg:pl-4">
            <h3 className="text-white font-extrabold text-lg sm:text-xl uppercase tracking-wide mb-7">
              CONTACT US
            </h3>

            <div className="space-y-6 text-sm sm:text-base">
              {/* Factory Address */}
              <div className="flex items-start gap-4 min-h-16">
                <div className="p-2.5 border border-red-700/60 rounded-full text-red-600 flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-sm" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-base leading-tight mb-1.5">
                    Factory
                  </h4>

                  <p className="text-gray-300 text-sm leading-6">
                    Plot No.51/A, Gali No.1, Sarurpur Industrial Area, Sohna
                    Road, Ballabgarh Faridabad (Haryana)-121004, INDIA.
                  </p>
                </div>
              </div>

              {/* Landline */}
              <div className="flex items-start gap-4 min-h-14">
                <div className="p-2.5 border border-red-700/60 rounded-full text-red-600 flex-shrink-0 mt-0.5">
                  <FaPhoneAlt className="text-sm" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-base leading-tight mb-1.5">
                    Landline
                  </h4>

                  <a
                    href="tel:01292231053"
                    className="text-gray-300 hover:text-white transition-colors text-sm block"
                  >
                    0129 - 2231 053
                  </a>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex items-start gap-4 min-h-14">
                <div className="p-2.5 border border-red-700/60 rounded-full text-red-600 flex-shrink-0 mt-0.5">
                  <FaMobileAlt className="text-sm" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-base leading-tight mb-1.5">
                    Mobile
                  </h4>

                  <p className="text-gray-300 text-sm leading-6">
                    <a
                      href="tel:9990033381"
                      className="hover:text-red-600 transition-colors"
                    >
                      9990033381
                    </a>
                    ,{" "}
                    <a
                      href="tel:9212526784"
                      className="hover:text-red-600 transition-colors"
                    >
                      9212526784
                    </a>
                    ,{" "}
                    <a
                      href="tel:9212526785"
                      className="hover:text-red-600 transition-colors"
                    >
                      9212526785
                    </a>
                    ,{" "}
                    <a
                      href="tel:9743660324"
                      className="hover:text-red-600 transition-colors"
                    >
                      9743660324
                    </a>
                    ,{" "}
                    <a
                      href="tel:9990178413"
                      className="hover:text-red-600 transition-colors"
                    >
                      9990178413
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 min-h-14">
                <div className="p-2.5 border border-red-700/60 rounded-full text-red-600 flex-shrink-0 mt-0.5">
                  <FaEnvelope className="text-sm" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-base leading-tight mb-1.5">
                    Email
                  </h4>

                  <a
                    href="mailto:sales@jawlatechnology.in"
                    className="text-gray-300 hover:text-white transition-colors text-sm block"
                  >
                    sales@jawlatechnology.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-600 pt-7 text-center text-xs sm:text-sm md:text-base text-gray-300">
          <p>
            Copyright © 2026 JAWLA ADVANCE TECHNOLOGY LLP All Right Reserved |
            Powered by{" "}
            <a
              href="https://www.cybertricksmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-[#D4AF37] font-semibold hover:no-underline"
            >
              CYBERTRICKS Media Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
