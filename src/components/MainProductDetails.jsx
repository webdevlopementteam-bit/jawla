import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

function MainProductDetails({
  MachineImage,
  sampleImage,
  productTitle,
  productDescription,
  productTagline,
}) {
  return (
    <>
      {/* Main Details Section */}
      <div className="w-full max-w-7xl mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-6 lg:gap-10 xl:gap-12 items-start">
          {/* Left Machine Card */}
          <div className="md:col-span-5 w-full h-[350px] sm:h-[360px] md:h-auto border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-5 lg:p-6 shadow-sm bg-white flex items-center justify-center">
            {" "}
            <Link
              className="relative w-full h-[340px] sm:h-[400px] md:h-[440px] lg:h-[520px]"
              href={"/contact-us"}
            >
              <Image
                src={MachineImage}
                alt="ffs-liquid-packaging-machine"
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1024px) 42vw, 42vw"
                className="object-contain"
              />
            </Link>
          </div>

          {/* Right Product Specifications */}
          <div className="md:col-span-7 w-full space-y-3 sm:space-y-4 md:space-y-3 lg:space-y-4">
            {/* Product Title */}
            <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-[#bd2a2a] tracking-tight leading-snug">
              {productTitle}
            </h2>
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            {/* Packing Products */}
            <h3 className="text-black font-bold text-sm sm:text-base md:text-base lg:text-lg pt-1 sm:pt-2">
              Packing Products
            </h3>
            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed max-w-2xl">
              {productDescription}
            </p>
            <p className="text-gray-500 font-bold text-sm sm:text-base md:text-sm lg:text-base leading-relaxed pt-1">
              {productTagline}
            </p>
            {/* Sample Products Image */}{" "}
            <div className="pt-2 sm:pt-4">
              {" "}
              <div className="relative w-full max-w-2xl h-64 sm:h-72 md:h-68 lg:h-80">
                {" "}
                <Image
                  src={sampleImage}
                  alt="Sample Packaging Products"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 60vw, 650px"
                  className="object-contain object-left"
                />{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainProductDetails;
