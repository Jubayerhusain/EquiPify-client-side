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
    <div className="p-4 bg-gradient-to-r from-green-50 via-white to-blue-50 py-16">
      <Fade direction="down">
        <h1 className="text-4xl my-5 text-gray-700 font-bold mb-4 text-center">
          Popular Products
        </h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
        {products.slice(0, 6).map((product, index) => (
          <div
            key={product._id}
            data-aos="fade-up"
            className="group p-5 relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.itemName}
              className="w-full h-60 rounded-md object-cover group-hover:scale-110 transition-transform duration-500"
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
              className="mt-2 text-green-500"
            >
              Stock Status: {product.stockStatus}
            </p>
            <p className="text-yellow-500 font-bold mt-2">
              Rating: {product.rating}★
            </p>
            <Link
              id={`view-${product._id}`} 
              to={`/products/${product._id}`}
              className="w-full btn mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              View Details
            </Link>
            <Tooltip
              anchorSelect={`#view-${product._id}`}
              content="You can see all details"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProduct;
