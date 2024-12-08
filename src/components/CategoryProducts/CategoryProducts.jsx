import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";

function CategoryProducts() {
  const categories = useLoaderData();
  // console.log(categories);

  return (
    <div>
      {/* <Fade direction="down">
        <h2 className="text-center rounded-md my-8 block bg-blue-200 text-2xl font-bold text-gray-700 py-3 ">
          Available Equipment:({categories.length})
        </h2>
      </Fade> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 my-14">
        {categories.map((category) => (
          <div
          className="group p-5  bg-gradient-to-r  shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-80"
          key={category._id}
          >
            <figure>
              <img
              className="w-full rounded-md h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              src={category.image}
                alt={category.categoryName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {category.itemName}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="">
                Processing Time: {category.processingTime}
              </p>
              <p className="">category: {category.categoryName}</p>
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
              id={`category-${category._id}`}
                to={`/products/${category._id}`}
                className="w-full btn mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
            <Tooltip anchorSelect={`#category-${category._id}`}  content="Your can see all details" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
