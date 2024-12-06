import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <Fade direction="down">
      <h2 className="text-2xl font-bold text-center mb-8">Product Categories</h2>
      </Fade>
      <nav className="flex flex-col items-start gap-4">
        <NavLink to={'/'} className={({ isActive }) =>
              `block w-full text-center text-lg capitalize font-semibold px-4 py-2 rounded-lg ${
                isActive 
                  ? "bg-blue-500 text-gray-200"
                  : "bg-blue-100 text-gray-700"
              } hover:bg-blue-300 hover:text-gray-600 transition duration-200`
            }>
          All Product
        </NavLink>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/products/category/${category.categoryName}`}
            className={({ isActive }) =>
              `block w-full text-center text-lg capitalize font-semibold px-4 py-2 rounded-lg ${
                isActive 
                  ? "bg-blue-500 text-gray-200"
                  : "bg-blue-100 text-gray-700"
              } hover:bg-blue-300 hover:text-gray-600 transition duration-200`
            }
          >
            <Fade direction="up" triggerOnce>
            {category.categoryName}
            </Fade>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Categories;
