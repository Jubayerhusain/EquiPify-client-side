import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLoaderData } from "react-router-dom";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 my-14">
        {products.slice(0, 10).map((product, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.itemName}
              className="w-full h-60 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.itemName}</h2>
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
              to={`/products/${product._id}`}
              className=" w-full btn mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
