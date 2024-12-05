import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FcRating } from "react-icons/fc";

function ViewDetails() {
  // Load the specific product data
  const product = useLoaderData();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container  mx-auto py-8">
      <div
        className="flex flex-col h-[700px] lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {/* Left Side: Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={product.image}
            alt={product.itemName}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="lg:w-1/2 w-full p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.itemName}
          </h1>
          <p className="text-lg text-gray-600 italic mb-6">
            <strong>Description:</strong>{" "}
            {product.description || "No description available."}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Category:</strong> {product.categoryName}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Stock:</strong> {product.stockStatus}
          </p>
          <p className="text-lg text-gray-600 mb-2 items-center space-x-2 flex">
            <strong>Rating:</strong> <p>{product.rating} / 5</p><p className="text-2xl">★</p>
          </p>

          <Link
            to="/allSportsEquipment"
            className="btn bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
