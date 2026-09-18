import Hero from "@/components/Hero";
import HomeAboutSection from "@/sections/HomeAbout";
import OurClientsSection from "@/sections/HomeOurClients";
import HomeServicesSection from "@/sections/HomeServices";
import TestimonialsSection from "@/sections/Testimonial";
import React from "react";

export const metadata = {
  alternates: { canonical: "/" },
};

function page() {
  return (
    <>
      <Hero />
      <HomeAboutSection />
      <HomeServicesSection />
      <TestimonialsSection />
      <OurClientsSection />
    </>
  );
}

export default page;
