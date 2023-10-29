import React from "react";
import Link from "next/link";
import HeroSection from "./ui/home/HeroSection";
import FeatureSection from "./ui/home/FeatureSection";
import TestimonialSection from "./ui/home/TestimonialSection";
import Header from "./ui/layout/Header";
import Footer from "./ui/layout/Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Testimonials Section */}
      <TestimonialSection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
