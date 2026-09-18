import React from "react";
import Image from "next/image";
import { FaSquareCheck } from "react-icons/fa6";

export const metadata = {
  title: "Fully & Semi Automatic Packaging Machine - Jawla Advance Technology",
  description:
    "Get Fully Automatic Packaging Machine and Semi Automatic Packaging Machine from Jawla Advance Technology for high performance packaging solutions.",
};

export default function AboutUsSection() {
  const applicationList = [
    "Biscuits",
    "Namkeen & Snacks",
    "Masala & Spices",
    "Chocolates",
    "Rusks",
    "Pulses & Grains",
    "Liquid & Oil-Based Products",
    "Powder & Granular Products",
  ];

  const qualityParameters = [
    "Coating and Surface Finishing",
    "Dimensional Accuracy",
    "Performance Under High Temperature & Pressure",
    "Sealing and Packing Accuracy",
    "Tolerance and Precision Features",
    "Corrosion Resistance",
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 font-sans text-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* ================= TOP ABOUT SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* LEFT IMAGE */}
          <div className="lg:col-span-5 w-full border border-gray-200 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm bg-white">
            <div className="relative w-full h-[420px] sm:h-[520px] md:h-[580px] lg:h-[680px] rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src="/about/p1.png"
                alt="Jawla Packaging Machine and Products"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1023px) 100vw, 42vw"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7 lg:pl-2 xl:pl-5">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-700 font-bold text-base sm:text-lg">
                &rarr;
              </span>
              <span className="text-red-700 font-bold tracking-wider uppercase text-sm sm:text-base md:text-lg">
                About Us
              </span>
            </div>

            {/* Paragraph 1 */}
            <p className="text-gray-700 text-sm sm:text-base leading-7 sm:leading-8 mb-6">
              <strong className="text-gray-900 font-bold">
                Jawla Advance Technology LLP
              </strong>{" "}
              stands as a symbol of dominance, engineering excellence, and
              legacy in the manufacturing of{" "}
              <strong className="text-gray-900 font-bold">
                all kinds of advanced packaging machines
              </strong>
              . Headquartered in{" "}
              <strong className="text-gray-900 font-bold">Delhi NCR</strong>,
              with a strong manufacturing presence in{" "}
              <strong className="text-gray-900 font-bold">
                Faridabad, Haryana
              </strong>
              , we are recognized as one of India's most trusted and established{" "}
              <strong className="text-gray-900 font-bold">
                Packaging Machines Manufacturers and Exporters
              </strong>
              . With decades of industry expertise, we have consistently
              delivered{" "}
              <strong className="text-gray-900 font-bold">
                high-performance, precision-engineered, and user-friendly
                packaging solutions
              </strong>{" "}
              that cater to diverse and demanding industrial verticals. Our
              enduring legacy is built on innovation, reliability, and an
              uncompromising commitment to quality—earning us long-standing
              partnerships with reputed brands across India and international
              markets.
            </p>

            {/* Engineering Excellence */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black tracking-tight mb-3">
              Engineering Excellence with a Global Vision
            </h3>

            <p className="text-gray-700 text-sm sm:text-base leading-7 sm:leading-8 mb-6">
              At Jawla Advance Technology LLP, we proactively adapt to
              technological advancements and evolving market dynamics. Our
              highly skilled workforce enables us to design and manufacture{" "}
              <strong className="text-gray-900 font-bold">
                customized packaging machines
              </strong>{" "}
              that meet exact client specifications—whether for emerging
              start-ups or established global brands. Today, our machines
              operate efficiently across{" "}
              <strong className="text-gray-900 font-bold">
                domestic and international packaging lines
              </strong>
              , reinforcing our position as a globally acknowledged
              manufacturer.
            </p>

            {/* Comprehensive Solutions */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black tracking-tight mb-3">
              Comprehensive Packaging Solutions Across Industries
            </h3>

            <p className="text-gray-700 text-sm sm:text-base leading-7 sm:leading-8">
              We manufacture a wide range of packaging machines engineered to
              meet the highest standards of{" "}
              <strong className="text-gray-900 font-bold">
                integrity, safety, precision, and durability
              </strong>
              . Every machine is designed to eliminate contamination, leakage,
              and inefficiencies, ensuring secure, hygienic, and leak-proof
              packaging with extended shelf life.
            </p>
          </div>
        </div>

        {/* ================= LOWER CONTENT ================= */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 space-y-5 sm:space-y-6 md:space-y-7">
          {" "}
          {/* APPLICATIONS */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-5 sm:mb-6">
              Our machines are widely used for packaging products such as:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4 mb-7">
              {applicationList.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaSquareCheck className="text-green-600 text-base sm:text-lg flex-shrink-0" />
                  <span className="text-black font-medium text-sm sm:text-base md:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base leading-7 sm:leading-8">
              Each solution is developed with{" "}
              <strong className="text-black font-bold">
                high-precision engineering
              </strong>
              , ensuring consistent performance across high-speed and high-load
              packaging operations.
            </p>
          </div>
          {/* LEADERSHIP */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">
              Leadership in Flexible & Retail Packaging
            </h3>

            <p className="text-sm sm:text-base leading-7 sm:leading-8 mb-2">
              With the rapid expansion of organized retail and branded consumer
              goods, packaging standards have become more stringent than ever.
              Secure, flexible, and leak-proof packaging solutions are no longer
              optional—they are essential. Jawla Advance Technology LLP remains
              at the forefront of this evolution, offering{" "}
              <strong className="text-black font-bold">
                future-ready packaging machines
              </strong>{" "}
              that comply with global retail and food safety standards.
            </p>

            <p className="text-sm sm:text-base leading-7 sm:leading-8">
              Whether your requirement is for flexible packaging, form-fill-seal
              machines, or specialized solutions, we deliver machines that
              support{" "}
              <strong className="text-black font-bold">
                efficiency, scalability, and long-term operational excellence
              </strong>
              .
            </p>
          </div>
          {/* CUSTOMIZATION */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">
              Customization as a Core Strength
            </h3>

            <p className="text-sm sm:text-base leading-7 sm:leading-8 mb-2">
              Understanding that no two businesses are the same, we specialize
              in{" "}
              <strong className="text-black font-bold">
                fully customized packaging machines
              </strong>{" "}
              tailored to specific product characteristics, production
              capacities, and budget requirements. Our consultative approach
              ensures that each client receives the most efficient,
              cost-effective, and reliable solution for their packaging needs.
            </p>

            <p className="text-sm sm:text-base leading-7 sm:leading-8">
              Your ideal packaging machine is just a few steps away.
            </p>
          </div>
          {/* QUALITY */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">
              Quality Satisfaction & Manufacturing Integrity
            </h3>

            <p className="text-sm sm:text-base leading-7 sm:leading-8 mb-2">
              As a{" "}
              <strong className="text-black font-bold">
                vertically integrated manufacturer
              </strong>
              , Jawla Advance Technology LLP maintains complete control over
              critical sub-components and assemblies used in our machines. This
              end-to-end control allows us to deliver{" "}
              <strong className="text-black font-bold">
                globally compliant, high-quality packaging solutions
              </strong>{" "}
              with unmatched consistency.
            </p>

            <p className="text-sm sm:text-base leading-7 sm:leading-8 mb-2">
              Our manufacturing infrastructure is continuously upgraded to align
              with the latest technological advancements. Skilled machinists,
              experienced supervisors, and dedicated assembly personnel ensure
              strict adherence to quality standards at every stage of
              production.
            </p>

            <p className="text-sm sm:text-base leading-7 sm:leading-8">
              Each assembly line is monitored meticulously, supported by our
              full{" "}
              <strong className="text-black font-bold">
                electrical and mechanical testing capabilities
              </strong>
              . Our rigorous inspection processes ensure that no defect—however
              minor—goes unnoticed.
            </p>
          </div>
          {/* QUALITY PARAMETERS */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">
              Quality Inspection Parameters
            </h3>

            <p className="text-sm sm:text-base leading-7 sm:leading-8 mb-5 sm:mb-6">
              Every packaging machine undergoes comprehensive testing based on
              the following critical parameters:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4 mb-7">
              {qualityParameters.map((param, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaSquareCheck className="text-green-600 text-base sm:text-lg flex-shrink-0" />
                  <span className="text-black font-medium text-sm sm:text-base md:text-lg">
                    {param}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base leading-7 sm:leading-8">
              Our unwavering focus on quality, innovation, and customer
              satisfaction has established Jawla Advance Technology LLP as a{" "}
              <strong className="text-black font-bold">
                legendary and trusted name in the packaging machinery industry
                across Delhi NCR, India, and global markets
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
