import React from "react";
import Banner from "../../components/Banner/Banner";
import OurProduct from "../../components/OurProducts/OurProducts";
import Categorories from "../../components/Categories/Categoreis";
import { Outlet, useLoaderData } from "react-router-dom";
import SportsBlog from "../../components/SportsBlog/SportsBlog";
import WhyEquipify from "../../components/WhyChoose/WhyChoose";
import PageTitle from "../../components/PageTitle/PageTitle";

function Home() {
  const products = useLoaderData();

  return (
    <div>
      <PageTitle title={"Home"}></PageTitle>
      <div>
        <Banner />
        <OurProduct products={products} />
        <div className="px-4 md:px-8 lg:px-16 py-6">
          <h1 className="text-center font-bold text-blue-500 text-3xl mb-6">
            Equipment Category
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
            {/* Left Column (Categories) */}
            <div className="md:col-span-1 lg:col-span-3">
              <Categorories products={products} />
            </div>
            {/* Right Column (Product Details / Outlet) */}
            <div className="md:col-span-2 lg:col-span-9">
              <Outlet />
            </div>
          </div>
        </div>
        <SportsBlog></SportsBlog>
        <WhyEquipify></WhyEquipify>
      </div>
    </div>
  );
}

export default Home;
