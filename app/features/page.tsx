import React from "react";
import Header from "../ui/layout/Header";
import Footer from "../ui/layout/Footer";
import MainFeaturesContent from "../ui/features/MainFeaturesContent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
};

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <MainFeaturesContent />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FeaturesPage;
