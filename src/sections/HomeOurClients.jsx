"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import "swiper/css";

const clientLogos = [
  { id: 1, src: "/home/OUR CLIENTS/c1.png", alt: "SBM Group" },
  { id: 2, src: "/home/OUR CLIENTS/c2.jpg", alt: "Nathu's" },
  { id: 3, src: "/home/OUR CLIENTS/c3.jpg", alt: "Priyagold" },
  { id: 4, src: "/home/OUR CLIENTS/c4.png", alt: "Pankaj's" },
  { id: 5, src: "/home/OUR CLIENTS/c5.jpg", alt: "Richlite" },
  { id: 6, src: "/home/OUR CLIENTS/c6.jpg", alt: "A1 Bakery" },
  { id: 7, src: "/home/OUR CLIENTS/c7.jpg", alt: "Client Logo 7" },
];

export default function OurClientsSection() {
  const swiperRef = useRef(null);

  return (
    <section className="w-full bg-[#f9f9f9] py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 font-sans overflow-hidden">
      <div className="w-full max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <span className="block text-red-700 font-bold tracking-wider uppercase text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2">
          OUR CLIENTS
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-7 sm:mb-9 md:mb-10 lg:mb-12">
          Companies we&apos;ve Partnered
        </h2>

        {/* Carousel Area */}
        <div className="relative w-full mb-8 sm:mb-10 md:mb-11">
          {/* Previous Button */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 sm:left-0 md:left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md text-gray-600 hover:text-[#be2a2a] hover:border-[#be2a2a] transition-all duration-200"
          >
            <FaChevronLeft className="text-sm sm:text-base md:text-lg" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 sm:right-0 md:right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md text-gray-600 hover:text-[#be2a2a] hover:border-[#be2a2a] transition-all duration-200"
          >
            <FaChevronRight className="text-sm sm:text-base md:text-lg" />
          </button>

          {/* Swiper */}
          <div className="w-full px-10 sm:px-11 md:px-12 lg:px-0">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 14,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 16,
                },
              }}
              className="w-full"
            >
              {clientLogos.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className="w-full h-32 sm:h-34 md:h-36 lg:h-32 bg-white rounded-lg sm:rounded-xl border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={client.src}
                        alt={client.alt}
                        fill
                        className="object-contain scale-[1.35] sm:scale-[1.25] md:scale-[1.2] lg:scale-100"
                        sizes="(max-width: 639px) 48vw, (max-width: 767px) 42vw, (max-width: 1023px) 30vw, 16vw"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* View All Button */}
        <div>
          <Link
            href="/our-clients"
            className="inline-flex items-center justify-center gap-2 bg-[#be2a2a] hover:bg-[#a62323] text-white text-xs sm:text-sm md:text-base font-semibold py-2.5 sm:py-3 px-5 sm:px-6 md:px-7 rounded-md transition-colors duration-200"
          >
            <span>View All</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
