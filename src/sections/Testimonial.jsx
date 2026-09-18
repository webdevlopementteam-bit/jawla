"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import { testimonialsData } from "@/lib/data";
import "swiper/css";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Image + Testimonial Card */}
          <div className="lg:col-span-6 relative">
            {/* Background Image */}
            <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/home/TESTIMONIALS/t1.jpg"
                alt="Customer Review Background"
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 100vw,  1200px"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Testimonial Card */}
            <div className="absolute bottom-[-55px] left-3 right-3 sm:left-8 sm:right-8 lg:left-16 lg:-right-6 bg-white rounded-2xl p-5 sm:p-7 shadow-xl border border-gray-100 z-10">
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="w-full"
              >
                {testimonialsData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="flex flex-col gap-2.5">
                      {/* Author Image */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 overflow-hidden rounded-lg">
                        <Image
                          src="/home/TESTIMONIALS/t2.png"
                          alt={item.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Author Name */}
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                        {item.name}
                      </h4>

                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 text-yellow-400 text-sm">
                        {[...Array(5)].map((_, index) =>
                          index < item.rating ? (
                            <FaStar key={index} />
                          ) : (
                            <FaRegStar key={index} />
                          ),
                        )}
                      </div>

                      {/* Review */}
                      <p className="text-gray-600 italic text-xs sm:text-sm leading-relaxed mt-1">
                        &quot;{item.review}&quot;
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 lg:pl-10 mt-20 sm:mt-24 lg:mt-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-red-700 font-bold">&rarr;</span>
              <span className="text-red-700 font-extrabold tracking-wider uppercase text-sm">
                TESTIMONIALS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-none mb-6">
              Customer Stories <br />
              <span className="text-red-700">of Success</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              At{" "}
              <strong className="text-gray-900 font-bold">
                Jawla Advance Technology LLP
              </strong>
              , we believe in delivering reliable, innovative, and
              performance-driven technology solutions. Our commitment to
              quality, timely delivery, and customer satisfaction has helped
              businesses achieve smooth operations and long-term growth.
              Here&apos;s what our clients say about working with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
