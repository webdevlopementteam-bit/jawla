"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl text-center"
      >
        {" "}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 sm:p-12">
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 border-2 border-red-500"
          >
            {" "}
            <span className="text-4xl font-bold text-red-600">✓</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-8">
            Your message has been successfully submitted. Our team will contact
            you shortly.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          We appreciate you contacting us.
        </p>
      </motion.div>
    </main>
  );
}
