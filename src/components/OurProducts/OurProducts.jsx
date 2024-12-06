import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";

function OurProduct({ products }) {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS animation initialization
  }, []);
  return (
    <div className="p-4">
      <Fade direction="down">
        <h1 className="text-4xl my-5 text-gray-700 font-bold mb-4 text-center">
          Popular Products
        </h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
        {products.slice(0, 6).map((product, index) => (
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
              id="view"
              to={`/products/${product._id}`}
              className=" w-full btn mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              View Details
            </Link>
            <Tooltip anchorSelect="#view" content="Your can see all details" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProduct;
