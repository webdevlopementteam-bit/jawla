import Hero from "@/components/Hero";
import HomeAboutSection from "@/sections/HomeAbout";
import OurClientsSection from "@/sections/HomeOurClients";
import HomeServicesSection from "@/sections/HomeServices";
import TestimonialsSection from "@/sections/Testimonial";
import HomeSeoContent from "@/sections/HomeSeoContent";
import React from "react";

export const metadata = {
  alternates: { canonical: "/" },
  title: "Best Packaging Machine Manufacturer | Jawla Advance Technology",
  description:
    "Jawla Advance Technology LLP is a best packaging machine manufacturer in Faridabad & Delhi NCR. Offers FFS, flow wrap, auger & multi-head machines. Contact us now!",
  keywords: [
    "Best Packaging Machine Manufacturer",
    "Best Packaging Machine Manufacturer in Faridabad",
    "Jawla Advance Technology LLP",
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
