import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function AllEquipiment() {
  const allProduct = useLoaderData();
  function handleDelete(id) {
  }
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Equipments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProduct.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img
              src={product.image}
              alt={product.itemName}
              className="h-48 w-full object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.itemName}</h2>
            <p className="text-gray-600 mb-2">
              Category: {product.categoryName}
            </p>
            <p className="text-gray-600 mb-2">Price: ${product.price}</p>
            <p className="text-gray-600 mb-4">Stock: {product.stockStatus}</p>
            <div className="flex space-x-2">
              <p className="text-gray-600 mb-4">Rating: {product.rating}</p>
              <div className="rating ">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
            </div>
            </div>
            
            <div className="flex justify-between gap-4">
              <Link
                className="btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                View
              </Link>
              <Link
                to={`/products/${product._id}`}
                className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Update
              </Link>
              <Link
                onClick={() => handleDelete(product._id)}
                className="btn bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllEquipiment;
