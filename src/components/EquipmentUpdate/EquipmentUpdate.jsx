import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import PageTitle from './../PageTitle/PageTitle';

function UpdateEquipmentForm() {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  // console.log(product);
  useEffect(() => {
    AOS.init();
  }, []);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedEquipment = {
      image: form.image.value,
      itemName: form.itemName.value,
      categoryName: form.categoryName.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      rating: parseFloat(form.rating.value),
      customization: form.customization.value,
      processingTime: form.processingTime.value,
      stockStatus: form.stockStatus.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    // Validate the form
    if (
      !updatedEquipment.image ||
      !updatedEquipment.itemName ||
      !updatedEquipment.categoryName ||
      !updatedEquipment.description ||
      !updatedEquipment.price ||
      !updatedEquipment.rating ||
      !updatedEquipment.stockStatus
    ) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    // Send PUT request to update the product
    fetch(`https://equipify-server-side.vercel.app/products/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Equipment Update successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Success!",
            text: "Equipment Update successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div>
      <PageTitle title={'Update'}></PageTitle>
      <div
        className="min-h-screen py-36 flex items-center justify-center bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-5"
        data-aos="fade-up"
      >
        <div
          className="bg-white rounded-lg shadow-md p-10 w-full max-w-4xl"
          data-aos="zoom-in"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Update Now Equipment
          </h2>
          <form onSubmit={handleSubmitForm} className="space-y-6">
            {/* Image URL */}
            <div className="space-y-2">
              <label htmlFor="image" className="text-gray-600">
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                defaultValue={product.image}
                placeholder="Enter the image URL"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Item Name */}
            <div className="space-y-2">
              <label htmlFor="itemName" className="text-gray-600">
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                defaultValue={product.itemName}
                placeholder="Enter the item name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Category Name */}
            <div className="space-y-2">
              <label htmlFor="categoryName" className="text-gray-600">
                Category Name
              </label>
              <select
                id="categoryName"
                name="categoryName"
                defaultValue={product.categoryName}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="swimming">Swimming</option>
                <option value="badminton">Badminton</option>
                <option value="volleyball">Volleyball</option>
                <option value="hockey">Hockey</option>
              </select>
            </div>
            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="text-gray-600">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                defaultValue={product.description}
                placeholder="Enter a brief description"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="3"
                required
              ></textarea>
            </div>
            {/* Price */}
            <div className="space-y-2">
              <label htmlFor="price" className="text-gray-600">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={product.price}
                placeholder="Enter the price"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Rating */}
            <div className="space-y-2">
              <label htmlFor="rating" className="text-gray-600">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                defaultValue={product.rating}
                placeholder="Enter the rating (1-5)"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                min="1"
                max="5"
                required
              />
            </div>
            {/* Customization */}
            <div className="space-y-2">
              <label htmlFor="customization" className="text-gray-600">
                Customization
              </label>
              <input
                type="text"
                id="customization"
                name="customization"
                defaultValue={product.customization}
                placeholder="e.g., Bat with extra grip"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Processing Time */}
            <div className="space-y-2">
              <label htmlFor="processingTime" className="text-gray-600">
                Processing Time
              </label>
              <input
                type="text"
                id="processingTime"
                name="processingTime"
                defaultValue={product.processingTime}
                placeholder="e.g., 3-5 days"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Stock Status */}
            <div className="space-y-2">
              <label htmlFor="stockStatus" className="text-gray-600">
                Stock Status
              </label>
              <input
                type="text"
                id="stockStatus"
                name="stockStatus"
                defaultValue={product.stockStatus}
                placeholder="Available quantity"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* User Info */}
            <div className="space-y-2">
              <label className="text-gray-600">User Email</label>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="w-full px-4 py-2 border rounded-lg bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-600">User Name</label>
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="w-full px-4 py-2 border rounded-lg bg-gray-100"
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                data-aos="fade-up"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateEquipmentForm;
