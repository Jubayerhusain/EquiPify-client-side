import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroAbout = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative py-20 bg-gray-900 text-white  flex items-center justify-center"
      data-aos="fade-up"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 opacity-30"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          We are committed to delivering innovative, user-centric solutions that make a difference. Join us in shaping the future.
        </p>
        <button
          className="mt-8 px-8 py-3 bg-teal-500 hover:bg-teal-600 rounded text-lg font-semibold transition-all duration-300 shadow-lg"
          onClick={() => alert("Learn More clicked!")}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroAbout;
