import React from "react";
import {
  FaGear,
  FaUserGear,
  FaGears,
  FaUser,
  FaHeadphones,
} from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    icon: FaGear,
    title: "Packaging Machine Sales",
    description:
      "We manufacture and supply high-performance packaging machines designed for speed, precision, and durability across industries.",
  },
  {
    icon: FaUserGear,
    title: "Installation & Commissioning",
    description:
      "Professional installation and commissioning services to ensure smooth machine setup and optimal performance.",
  },
  {
    icon: BsPeopleFill, // or a similar custom gear+group icon
    title: "Maintenance & Repair Services",
    description:
      "Preventive and breakdown maintenance services to minimize downtime and extend machine life.",
  },
  {
    icon: FaGears,
    title: "Spare Parts Supply",
    description:
      "Genuine spare parts availability to maintain machine efficiency and consistent packaging quality.",
  },
  {
    icon: FaUser,
    title: "Operator Training",
    description:
      "On-site and remote training programs to help operators run machines safely and efficiently.",
  },
  {
    icon: FaHeadphones,
    title: "After-Sales Support",
    description:
      "Reliable after-sales assistance with quick response times, technical guidance, and service support.",
  },
];

export default function HomeServicesSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div className="lg:col-span-6 lg:flex lg:items-center">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight leading-tight">
              Reliable Packaging Solutions
            </h1>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <span className="text-red-700 font-bold tracking-wider uppercase text-md md:text-lg block mb-2 ">
              OUR SERVICES
            </span>
            <p className="text-[#2E2E2E] text-base leading-relaxed">
              Jawla Advance Technology LLP provides end-to-end packaging machine
              solutions backed by expert engineering, reliable service support,
              and customer-focused execution. Our services are designed to
              maximize efficiency, accuracy, and long-term performance.
            </p>
          </div>
        </div>

        {/* Cards Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="border border-gray-400 rounded-2xl p-8 bg-gray-50/30 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <div className="text-red-700 text-4xl mb-6">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[#2E2E2E] text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                <div>
                  <Link
                    href="/services-spares"
                    className="bg-[#69727D] hover:bg-[#BB2426] text-white font-medium text-sm py-2.5 px-5 rounded-md transition-colors duration-200 inline-block"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
