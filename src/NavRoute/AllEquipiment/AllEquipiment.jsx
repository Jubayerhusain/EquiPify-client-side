import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
function AllEquipiment() {
  const allProduct = useLoaderData();
  const [products, setProducts] = useState(allProduct);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  // Sorting function
  const sortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => {
      return isAscending ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
    setIsAscending(!isAscending);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
      <div className="container  mx-auto py-8">
        <Fade direction="down">
        <div className="flex items-center my-10 space-x-3">
          <h1 className="text-3xl font-bold">All Equipments </h1>
          <button
            onClick={sortByPrice}
            className="btn bg-blue-400 hover:bg-blue-600 text-gray-800 hover:text-gray-200 px-4 py-2 rounded-lg"
          >
            {isAscending
              ? "Sort by Price: Low to High"
              : "Sort by Price: High to Low"}
          </button>
        </div>
        </Fade>
        <div className="overflow-x-auto">
          <Fade direction="up" triggerOnce>
            <table className="table-auto w-full text-left border border-gray-300">
              <thead className="bg-blue-200">
                <tr>
                  <th className="px-4 py-2 border">Image</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Price</th>
                  <th className="px-4 py-2 border">Stock</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product._id}
                    className="hover:bg-blue-50 hover:shadow-lg"
                  >
                    {/* Image */}
                    <td className="px-4 py-2 border">
                      <img
                        src={product.image}
                        alt={product.itemName}
                        className="h-16 w-16 object-cover rounded-md"
                      />
                    </td>
                    {/* Name */}
                    <td className="px-4 py-2 border">{product.itemName}</td>
                    {/* Category */}
                    <td className="px-4 py-2 border">{product.categoryName}</td>
                    {/* Price */}
                    <td className="px-4 py-2 border">${product.price}</td>
                    {/* Stock */}
                    <td className="px-4 py-2 border">{product.stockStatus}</td>
                    {/* Actions */}
                    <td className="py-2 border text-center">
                      {/* View Button */}
                      <Link
                      id={`view-${product._id}`}
                        to={`/products/${product._id}`}
                        className="btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      >
                        View Details
                      </Link>
                      <Tooltip anchorSelect={`#view-${product._id}`} content="Can see details on this Equipment" />

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default AllEquipiment;
