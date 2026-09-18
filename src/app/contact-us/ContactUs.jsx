"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  FaPhone,
  FaMobileScreenButton,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

import React from "react";

function ContactUs() {
  const mapRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    numbers: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="bg-gray-50/50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* ================= 1. CONTACT INFO CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Landline */}
            <a
              href="tel:01292231053"
              className="group bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 min-h-[110px] hover:shadow-md transition-all duration-300"
            >
              <div className="bg-[#e53935] text-white p-3 rounded-md shrink-0">
                <FaPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#e53935] transition-colors duration-300">
                  Landline
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-[#e53935] transition-colors duration-300">
                  0129 - 2231 053
                </p>
              </div>
            </a>

            {/* Mobile */}
            <div className="group bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 min-h-[110px] hover:shadow-md transition-all duration-300">
              <div className="bg-[#e53935] text-white p-3 rounded-md shrink-0">
                <FaMobileScreenButton className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#e53935] transition-colors duration-300">
                  Mobile
                </h3>

                <div className="text-gray-600 text-sm leading-relaxed">
                  <a
                    href="tel:9990033381"
                    className="hover:text-[#e53935] hover:underline"
                  >
                    9990033381
                  </a>
                  ,{" "}
                  <a
                    href="tel:9212526784"
                    className="hover:text-[#e53935] hover:underline"
                  >
                    9212526784
                  </a>
                  <br />
                  <a
                    href="tel:9212526785"
                    className="hover:text-[#e53935] hover:underline"
                  >
                    9212526785
                  </a>
                  ,{" "}
                  <a
                    href="tel:9743660324"
                    className="hover:text-[#e53935] hover:underline"
                  >
                    9743660324
                  </a>
                  <br />
                  <a
                    href="tel:9990178413"
                    className="hover:text-[#e53935] hover:underline"
                  >
                    9990178413
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:sales@jawlatechnology.in"
              className="group bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 min-h-[110px] hover:shadow-md transition-all duration-300"
            >
              <div className="bg-[#e53935] text-white p-3 rounded-md shrink-0">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#e53935] transition-colors duration-300">
                  Email
                </h3>
                <span className="text-gray-600 text-sm break-all group-hover:text-[#e53935] transition-colors duration-300">
                  sales@jawlatechnology.in
                </span>
              </div>
            </a>

            {/* Factory */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jawla+Advance+Technology+LLP,+Plot+No.51%2FA,+Gali+No.1,+Sarurpur+Industrial+Area,+Sohna+Road,+Ballabgarh,+Faridabad,+Haryana+121004"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4 min-h-[110px] hover:shadow-md transition-all duration-300 text-left"
            >
              <div className="bg-[#e53935] text-white p-3 rounded-md shrink-0">
                <FaLocationDot className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#e53935] transition-colors duration-300">
                  Factory
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-[#e53935] transition-colors duration-300">
                  Plot No.51/A, Gali No.1,
                  <br />
                  Sarurpur Industrial Area, Sohna Road, Ballabgarh Faridabad
                  <br />
                  (Haryana)-121004, INDIA.
                </p>
              </div>
            </a>
          </div>

          {/* ================= 2. FORM & IMAGE SECTION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Image Banner Box */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center min-h-[450px]">
              <div className="relative w-full h-full min-h-[380px]">
                <Image
                  src="/contact-us/p1.png"
                  alt="Customer Support Representative"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>

            {/* Send Us a Message Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Fields */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 bg-gray-50/30 text-sm"
                      />
                      <span className="text-[11px] text-gray-400 mt-0.5 block">
                        First
                      </span>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 bg-gray-50/30 text-sm"
                      />
                      <span className="text-[11px] text-gray-400 mt-0.5 block">
                        Last
                      </span>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 bg-gray-50/30 text-sm"
                  />
                </div>

                {/* Phone / Numbers Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Numbers <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="numbers"
                    value={formData.numbers}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 bg-gray-50/30 text-sm"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 bg-gray-50/30 text-sm resize-y"
                  ></textarea>
                </div>

                {/* Mock reCAPTCHA Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-md p-3 w-fit flex items-center gap-6 my-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-6 h-6 border-gray-300 rounded focus:ring-0"
                    />

                    <span className="text-xs text-gray-700 font-medium">
                      I'm not a robot
                    </span>
                  </label>

                  <div className="flex flex-col items-center justify-center pl-4 border-l border-gray-200">
                    <div className="w-6 h-6 relative">
                      <img
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                        alt="reCAPTCHA"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <span className="text-[9px] text-gray-400 mt-0.5">
                      reCAPTCHA
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#e53935] hover:bg-red-700 text-white font-semibold py-2.5 rounded-md transition duration-200 text-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. UPDATED GOOGLE MAP EMBED ================= */}
      <div
        ref={mapRef}
        className="w-full rounded-xl overflow-hidden shadow-sm border border-gray-200 h-[450px] scroll-mt-24"
      >
        <iframe
          title="Jawla Advance Technology LLP Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.2753467161124!2d77.2773036!3d28.3505239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd952f81adb33%3A0xf202b7c92a16ccbf!2sJawla%20Advance%20Technology%20LLP!5e0!3m2!1sen!2sin!4v1788873200058!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </>
  );
}

export default ContactUs;
