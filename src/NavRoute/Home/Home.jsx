import React from "react";
import Banner from "../../components/Banner/Banner";
import OurProduct from "../../components/OurProducts/OurProducts";
import Categorories from "../../components/Categories/Categoreis";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Banner></Banner>
      <OurProduct></OurProduct>
      <div>
        <h1 className="text-center font-bold text-gray-600 text-3xl">Product Category</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <Categorories></Categorories>
          </div>
          <div className="col-span-9">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
