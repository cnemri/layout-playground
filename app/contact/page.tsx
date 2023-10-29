import React from "react";
import Header from "../ui/layout/Header";
import Footer from "../ui/layout/Footer";
import ContactForm from "../ui/contact/ContactForm";
import ContactDetails from "../ui/contact/ContactDetails";
import MapSection from "../ui/contact/MapSection";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <div className="flex flex-col md:flex-row">
        {/* Contact Form */}
        <section className="mt-10 px-6 flex flex-col items-center justify-start flex-grow">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <ContactForm />
        </section>
        <div className="flex flex-col flex-grow mt-10">
          {/* Contact Details */}
          <ContactDetails />
          {/* Map */}
          <MapSection />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
