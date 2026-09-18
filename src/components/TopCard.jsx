import Image from "next/image";

export default function TopCard({ title, image }) {
  return (
    <section className="relative w-full min-h-[180px] sm:min-h-[200px] lg:min-h-[240px]">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Left Overlay Text (50%) */}
      <div className="absolute inset-y-0 left-0 w-[40%] sm:w-1/2 flex items-center justify-center">
        {" "}
        <h2 className="px-6 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-center sm:text-left">
          {title}
        </h2>
      </div>
    </section>
  );
}
