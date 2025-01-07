import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="py-16 text-center">
      <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center  mb-12">
          Frequently Asked <span className="text-blue-500">with Equipify</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Equipify makes it easy to find the perfect equipment for your needs.  
          Compare, decide, and equip yourself with confidence.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to={'/signUp'} className="bg-white text-purple-600 px-6 py-3 font-semibold rounded-lg shadow hover:scale-105 transition-transform">
            Sign Up Now
          </Link>
          <Link to={'/allSportsEquipment'} className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-lg shadow hover:scale-105 transition-transform">
            Browse Categories
          </Link>
          <Link to={'signUp'} className="bg-white text-green-600 px-6 py-3 font-semibold rounded-lg shadow hover:scale-105 transition-transform">
            Get Started for Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
