import React from "react";
import Banner from "../../components/Banner/Banner";
import OurProduct from "../../components/OurProducts/OurProducts";
import Categorories from "../../components/Categories/Categoreis";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Banner />
      <OurProduct />
      <div className="px-4 md:px-8 lg:px-16 py-6">
        <h1 className="text-center font-bold text-gray-600 text-3xl mb-6">Product Category</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Left Column (Categories) */}
          <div className="md:col-span-1 lg:col-span-3">
            <Categorories />
          </div>
          {/* Right Column (Product Details / Outlet) */}
          <div className="md:col-span-2 lg:col-span-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
