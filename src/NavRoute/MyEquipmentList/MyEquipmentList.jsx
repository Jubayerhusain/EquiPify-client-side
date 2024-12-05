import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function MyEquipmentList() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (user && user.email) {
      fetch(
        `https://equipify-server-side.vercel.app/products/email/${user.email}`
      )
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div class="flex items-center justify-center h-screen ">
        <div class="spinner animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No equipment found for your email.</div>;
  }

  return (
    <div className="min-h-[620px] p-4">
      <h1 className="text-xl font-bold">My Equipment List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            data-aos="fade-up"
            className="flex flex-col justify-between h-full bg-white card shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.itemName}
              className="w-full h-60 object-cover rounded-t-lg mb-4"
            />
            <p className="text-lg text-gray-600 italic mb-6">
              <strong>Description:</strong>{" "}
              {product.description || "No description available."}
            </p>
            <p className="text-gray-600">
              Customization: {product.customization}
            </p>
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
            <div className="flex justify-between items-center">
              <Link
                to={`/products/${product._id}`}
                className="btn mt-4 bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
              <Link
                to={`/products/${product._id}`}
                className="btn mt-4 bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition-colors"
              >
                Update
              </Link>
              <Link
                to={`/products/${product._id}`}
                className="btn mt-4 bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 transition-colors"
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

export default MyEquipmentList;
