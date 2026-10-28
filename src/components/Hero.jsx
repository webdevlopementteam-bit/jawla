import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[680px] sm:min-h-[640px] md:min-h-[600px] lg:min-h-[580px] overflow-hidden bg-[#55545E] text-white flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 lg:py-12">
      {/* Background Video - Only LG and Above */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden lg:block absolute inset-0 w-full h-full object-cover z-0 brightness-[0.7]"
      >
        <source src="/home/SAMBOY.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay - Only LG and Above */}
      <div className="hidden lg:block absolute inset-0 bg-black/35 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* SEO Kicker (single H1 on the homepage) */}
        <h1 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#EC1C2C] mb-2 sm:mb-3">
          Best Packaging Machine Manufacturer
        </h1>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight leading-tight mb-5 sm:mb-6 lg:mb-8">
          WELCOME TO <span className="text-[#EC1C2C]">JAWLA ADVANCE</span>
          <br />
          <span className="text-[#EC1C2C]">TECHNOLOGY LLP</span>
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
          {/* Left Card */}
          <div className="lg:col-span-5 bg-white rounded-lg p-4 sm:p-5 lg:p-6 shadow-xl text-black">
            {/* Buttons */}
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
              {" "}
              <Link
                href="/contact"
                className="flex-1 bg-zinc-700 hover:bg-[#BB2426] text-white font-medium text-sm sm:text-base py-2 sm:py-2.5 px-3 sm:px-4 rounded transition text-center"
              >
                {" "}
                Get Started{" "}
              </Link>{" "}
              <Link
                href="/products"
                className="flex-1 bg-[#BB2426] hover:bg-[#54595F] text-white font-medium text-sm sm:text-base py-2 sm:py-2.5 px-3 sm:px-4 rounded transition text-center"
              >
                {" "}
                View Products{" "}
              </Link>{" "}
            </div>

            {/* Machine Image */}
            <div className="relative w-full h-44 sm:h-52 md:h-56 lg:h-60 xl:h-64 flex items-center justify-center">
              <Image
                src="/home/hero_product.webp"
                alt="Packaging Machine"
                width={400}
                height={350}
                className="object-contain max-h-full w-auto"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Statistics */}
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-4 border-l-2 border-zinc-700 pl-4 sm:pl-5 md:pl-6 lg:pl-8 mb-5 sm:mb-6 lg:mb-7">
              {/* Stat 1 */}
              <div className="text-left">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  19+
                </p>
                <p className="text-xs sm:text-xs md:text-sm font-semibold text-[#EC1C2C] mt-1 uppercase">
                  Years of Experience
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-left border-t sm:border-t-0 sm:border-l border-zinc-700 pt-3 sm:pt-0 sm:pl-4">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  500+
                </p>
                <p className="text-xs sm:text-xs md:text-sm font-semibold text-[#EC1C2C] mt-1 uppercase">
                  Clients
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-left border-t sm:border-t-0 sm:border-l border-zinc-700 pt-3 sm:pt-0 sm:pl-4">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  25+
                </p>
                <p className="text-xs sm:text-xs md:text-sm font-semibold text-[#EC1C2C] mt-1 uppercase">
                  Countries
                </p>
              </div>
            </div>

            {/* About Text */}
            <p className="text-zinc-200 text-sm sm:text-sm md:text-base leading-relaxed max-w-3xl">
              <strong className="text-white font-semibold">
                Jawla Advance Technology LLP
              </strong>{" "}
              is a trusted Packaging Machines Manufacturer in Delhi NCR,
              offering reliable, efficient, and easy-to-operate packaging
              machines for different industries. As an experienced Packaging
              Machines Manufacturer in Delhi NCR, we understand the changing
              requirements of modern packaging businesses and develop
              machines that deliver consistent performance and productivity.
            </p>
            <p className="text-zinc-200 text-sm sm:text-sm md:text-base leading-relaxed max-w-3xl mt-3">
              With a focus on quality, innovation, and practical machine
              design, our skilled team provides custom packaging machine
              solutions tailored to specific production requirements. We
              continuously adopt new technologies and industry advancements
              to improve machine efficiency and ease of operation. From
              standard packaging equipment to customized solutions, Jawla
              Advance Technology LLP serves businesses across India and
              international markets, helping them achieve smoother and more
              efficient packaging operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
