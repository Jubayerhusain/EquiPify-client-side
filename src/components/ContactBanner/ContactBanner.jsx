import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactBanner = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative bg-gray-900 text-white py-20"
      data-aos="fade-down"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Contact Us
        </h1>
        <p className="mt-4 text-center text-lg md:text-xl text-gray-300">
          Have any questions or need assistance? Feel free to reach out to us!
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
