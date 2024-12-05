import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    fetch("categories.json") 
      .then((res) => res.json())
      .then((data) => setCategories(data)) 
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">Product Categories</h2>
      <nav className="flex flex-col items-start gap-4">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/products/${category.categoryName}`}
            // to={`/category/${category.categoryName}`}
            className={({ isActive }) =>
              `block w-full text-center text-lg capitalize font-semibold px-4 py-2 rounded-lg text-gray-700 bg-blue-200 ${
                isActive ? "bg-blue-500 text-gray-200" : "bg-blue-100"
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
