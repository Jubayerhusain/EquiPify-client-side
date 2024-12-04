import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]); // State to hold categories data

  useEffect(() => {
    fetch("categories.json") // Fetching categories data
      .then((res) => res.json())
      .then((data) => setCategories(data)) // Setting data to state
      .catch((error) => console.error("Error fetching categories:", error)); // Error handling
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">Product Categories</h2>
      <nav className="flex flex-col items-start gap-4">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              `block w-full text-center px-4 py-2 rounded-lg text-white ${
                isActive ? "bg-blue-600" : "bg-gray-400"
              } hover:bg-blue-500 transition duration-200`
            }
          >
            {category.categoryName}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Categories;