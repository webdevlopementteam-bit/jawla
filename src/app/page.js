import Hero from "@/components/Hero";
import HomeAboutSection from "@/sections/HomeAbout";
import OurClientsSection from "@/sections/HomeOurClients";
import HomeServicesSection from "@/sections/HomeServices";
import TestimonialsSection from "@/sections/Testimonial";
import HomeSeoContent from "@/sections/HomeSeoContent";
import React from "react";

export const metadata = {
  alternates: { canonical: "/" },
  title: {
    absolute: "Best Packaging Machine Manufacturer | Jawla Advance Technology",
  },
  description:
    "Jawla Advance Technology is the best packaging machine manufacturer in Delhi NCR & India. Leading supplier of automatic FFS, pouch packing, liquid, powder & flow wrap packaging machines.",
  keywords: [
    "Best Packaging Machine Manufacturer",
    "Jawla Advance Technology",
    "Packaging Machine",
    "Liquid Packaging Machine",
    "Powder Packaging Machine",
    "Fully Automatic Packaging Machine",
    "Semi Automatic Packaging Machine",
    "Best Packaging Machine Manufacturer in Delhi NCR",
  ],
};

function page() {
  return (
    <>
      <Hero />
      <HomeAboutSection />
      <HomeServicesSection />
      <TestimonialsSection />
      <OurClientsSection />
      <HomeSeoContent />
    </>
  );
}

export default page;
