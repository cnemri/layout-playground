import React from "react";
import Footer from "../ui/layout/Footer";
import Header from "../ui/layout/Header";
import PricingSection from "../ui/pricing/PricingSection";
import FAQ from "../ui/pricing/FAQ";

const PricingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Pricing Cards */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQ />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PricingPage;
