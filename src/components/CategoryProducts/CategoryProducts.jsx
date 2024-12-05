import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function categorycategorys() {
  const categories = useLoaderData();
  console.log(categories);

  return (
    <div>
      <h2 className="text-center rounded-md my-8 block bg-blue-200 text-2xl font-bold text-gray-700 py-3 ">
        Available categorys:({categories.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 my-14">
        {categories.map((category) => (
          <div
            className="transition-shadow duration-300 w-full card bg-base-100 shadow-xl"
            key={category._id}
          >
            <figure>
            <img className="w-full h-60 object-cover rounded-t-lg mb-4" src={category.image} alt={category.categoryName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {category.itemName}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="text-gray-600">
                Processing Time: {category.processingTime}
              </p>
              <p className="text-gray-600">category: {category.categoryName}</p>
              <p className="text-blue-500 font-bold mt-2">
                Price: ${category.price}
              </p>
              <p
                className={`mt-2 ${
                  category.stockStatus === "In Stock"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                Stock Status: {category.stockStatus}
              </p>
              <p className="text-yellow-500 font-bold mt-2">
                Rating: {category.rating}★
              </p>
              <Link
                to={`/products/${category._id}`}
                className="w-full btn mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default categorycategorys;
