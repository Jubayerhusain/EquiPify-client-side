import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function AllProduct() {
  const products = useLoaderData();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-center rounded-md my-8 block bg-blue-200 text-2xl font-bold text-gray-700 py-3 ">
        All Equipments ({products.length})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 my-14">
        {products.slice(0, 10).map((product, index) => (
          <div
            key={index}
            
            data-aos="fade-up"
            className="group p-5 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.itemName}
              className="w-full rounded-md h-60 object-cover group-hover:scale-110 transition-transform duration-500"

            />
            <h2 className="text-lg mt-5 font-semibold mb-2">{product.itemName}</h2>
            <p className="text-gray-600">
              Processing Time: {product.processingTime}
            </p>
            <p className="text-gray-600">Category: {product.categoryName}</p>
            <p className="text-blue-500 font-bold mt-2">
              Price: ${product.price}
            </p>
            <p
              className={`mt-2 ${
                product.stockStatus === "In Stock"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              Stock Status: {product.stockStatus}
            </p>
            <p className="text-yellow-500 font-bold mt-2">
              Rating: {product.rating}★
            </p>
            <Link
              id={`view-${product._id}`}
              to={`/products/${product._id}`}
              className=" w-full btn mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              View Details
            </Link>
            <Tooltip anchorSelect={`#view-${product._id}`}  content="Your can see all details" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
