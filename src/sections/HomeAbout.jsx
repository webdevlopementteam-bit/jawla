"use client";
import Image from "next/image";
import { HOME_OUR_PRODUCTS } from "@/lib/data";
import { sealData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCogs, FaMedal } from "react-icons/fa";
import Link from "next/link";

export default function HomeAboutSection() {
  const progressData = [
    { label: "Manufacturing Excellence", value: 100 },
    { label: "Customer Satisfaction", value: 100 },
    { label: "Technical Support & Service", value: 100 },
  ];
  const progressRef = useRef(null);
  const isProgressInView = useInView(progressRef, { once: true, amount: 0.3 });

  return (
    <>
      <section className="bg-white text-black py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-16 mx-auto w-full">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 md:gap-8 mb-8 sm:mb-10 md:mb-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-[#0E0C1B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Innovative Packaging Machinery,{" "}
              <span className="text-[#BB2426] block sm:inline">
                Delivering Precision & Performance
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-gray-600 text-sm leading-relaxed">
            <p className="text-[#BB2426] font-bold mb-1 flex items-center gap-1 uppercase tracking-wider text-sm sm:text-md">
              <span>&rarr;</span> ABOUT US
            </p>

            <p>
              Jawla Advance Technology LLP is a leading{" "}
              <i className="text-[#E13538] hover:text-[#BB2426] font-bold text-sm sm:text-md">
                Packaging Machine Manufacturer in Faridabad
              </i>
              , specializing in high-performance, easy-to-operate packaging
              solutions for diverse industries. With years of experience and a
              commitment to quality, we deliver advanced and custom packaging
              machines that enhance productivity and ensure product safety.
            </p>
          </div>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Left Column: Top Image & Bottom Feature Cards */}
          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6">
            {/* Top Machine Card */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 md:p-6 flex items-center justify-center border border-gray-100 min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
              <Image
                src="/home/home_about/p1.png"
                alt="Flow Wrap Packaging Machine"
                width={350}
                height={200}
                className="object-contain max-h-40 sm:max-h-44 md:max-h-48 w-full"
              />
            </div>

            {/* Bottom 2 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Feature 1 */}
              <div className="border border-gray-200 rounded-2xl p-4 sm:p-5 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 text-red-600 mb-3">
                    <FaCogs className=" w-8 h-8" />
                  </div>

                  <h3 className="font-bold text-sm sm:text-md text-gray-900 mb-1">
                    Advanced Packaging Machines
                  </h3>
                </div>

                <p className="text-[11px] sm:text-xs text-gray-500 leading-normal">
                  Premium quality FFS, Flow Wrap, Auger Filler & multi-head
                  weighing machines for different product types.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border border-gray-200 rounded-2xl p-4 sm:p-5 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 text-red-600 mb-3">
                    <FaMedal className="w-8 h-8" />
                  </div>

                  <h3 className="font-bold text-sm sm:text-md text-gray-900 mb-1">
                    Trusted Industry Expertise
                  </h3>
                </div>

                <p className="text-[11px] sm:text-xs text-gray-500 leading-normal">
                  Years of manufacturing excellence with rigorous quality
                  testing and global client satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Center Red Card: Featured Machine Image */}
          <div className="lg:col-span-4 bg-[#BB2426] rounded-2xl p-4 sm:p-5 md:p-6 flex items-center justify-center min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[420px] relative overflow-hidden shadow-xl">
            <Image
              src="/home/home_about/p2.png"
              alt="Auger Filler Packaging Machine"
              width={380}
              height={400}
              className="object-contain relative z-10 max-h-[280px] sm:max-h-[320px] md:max-h-[350px] lg:max-h-[380px] w-full"
              priority
            />
          </div>

          {/* Right Column: Progress Bars & Bottom Machine Image */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-5 sm:gap-6">
            {/* Progress Bars Block */}
            <div
              ref={progressRef}
              className="space-y-5 sm:space-y-6 pt-1 sm:pt-2"
            >
              {progressData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2 gap-2">
                    <span className="font-bold text-xs sm:text-sm lg:text-xs text-gray-800">
                      {item.label}
                    </span>

                    <div className="bg-[#BB2426] text-white font-bold text-[10px] rounded-full px-2 py-0.5 flex items-center justify-center flex-shrink-0">
                      {isProgressInView ? item.value : 0}%
                    </div>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-[#BB2426] h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{
                        width: isProgressInView ? `${item.value}%` : "0%",
                      }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Machine Card */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 md:p-6 flex items-center justify-center border border-gray-100 min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
              <Image
                src="/home/home_about/p3.png"
                alt="Horizontal Flow Packaging Machine"
                width={350}
                height={200}
                className="object-contain max-h-40 sm:max-h-44 md:max-h-48 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ================= PRODUCTS SECTION ================= */}{" "}
      <section className="w-full bg-[#FBFBFB] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-16">
        {" "}
        <div className="mx-auto w-full max-w-[1600px] text-center">
          {" "}
          <p className="mb-2 text-md font-bold uppercase tracking-[0.2em] text-[#BB2426] sm:text-lg">
            {" "}
            OUR PRODUCTS{" "}
          </p>{" "}
          <h2 className="mx-auto mb-4 max-w-5xl text-xl font-bold leading-tight tracking-tight text-black sm:text-2xl md:text-3xl ">
            {" "}
            Packaging Machinery That Drives Business Growth{" "}
          </h2>{" "}
          <p className="mx-auto mb-6 text-sm leading-6 text-gray-700 sm:mb-8 sm:text-base sm:leading-7 md:mb-10 md:text-[15px] md:leading-7 lg:mb-12 lg:text-[16px] lg:leading-8">
            Jawla Advance Technology LLP is a leading{" "}
            <span className="font-bold text-[#E13538]">
              Packaging Machine Manufacturer in Delhi
            </span>
            , specializing in high-performance, easy-to-operate packaging
            solutions for diverse industries. With years of experience and a
            commitment to quality, we deliver advanced and custom packaging
            machines that enhance productivity and ensure product safety.
          </p>
          {/* Product Cards */}{" "}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-7 lg:grid-cols-4">
            {" "}
            {HOME_OUR_PRODUCTS.map((product, index) => (
              <Link
                key={index}
                href={`/${product.slug}`}
                className="group flex min-w-0 flex-col items-center justify-between overflow-hidden rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-4"
              >
                <div className="relative my-1 h-56 w-full sm:h-64 md:h-72 lg:h-72 xl:h-80">
                  <Image
                    src={product.path}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-h-[46px] w-full items-center justify-center rounded-lg bg-[#BB2426] px-3 py-2 text-center text-xs font-medium leading-5 text-white sm:text-lg">
                  {product.name}
                </div>
              </Link>
            ))}
          </div>{" "}
        </div>{" "}
      </section>
      {/* SEAL */}
      <section className="w-full bg-[#BB2426] px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:gap-6 lg:grid-cols-6 lg:gap-4">
            {sealData.map((seal, index) => (
              <div
                key={index}
                className="group mx-auto w-full overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:w-[94%]"
              >
                <div className="relative h-44 w-full sm:h-48 md:h-52 lg:h-56">
                  <Image
                    src={seal.path}
                    alt={seal.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-contain  transition-transform duration-300 group-hover:scale-105 "
                  />
                </div>

                <div className="flex min-h-[48px] items-center justify-center border-t border-gray-100 px-2 py-2 text-center sm:min-h-[52px]">
                  <p className="text-sm font-bold leading-5 text-black sm:text-base">
                    {seal.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
