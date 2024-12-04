import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function AllEquipiment() {
    const allProduct = useLoaderData();
    const [products, setProducts] = useState(allProduct)
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Equipments</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
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
              <tr key={product._id} className="hover:bg-gray-50">
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
                <td className="px-4 py-2 border flex space-x-2">
                  {/* View Button */}
                  <Link
                    to={`/products/${product._id}`}
                    className="btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllEquipiment;
