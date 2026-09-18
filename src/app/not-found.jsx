import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* 404 */}
        <div className="mb-6">
          <h1 className="text-[100px] sm:text-[130px] md:text-[160px] font-extrabold leading-none tracking-tight text-[#e53935]">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Page Not Found
          </h2>

          <p className="max-w-md mx-auto text-sm sm:text-base text-gray-600 leading-relaxed">
            Sorry, the page you are looking for doesn't exist or may have been
            moved to another location.
          </p>
        </div>

        {/* Home Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#e53935] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition duration-200"
          >
            <FaHouse className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
