import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
import { FaDeleteLeft } from "react-icons/fa6";
import PageTitle from "../../components/PageTitle/PageTitle";
function MyEquipmentList() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (user && user.email) {
      setLoading(true);
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
    } else {
      setLoading(false);
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
    return (
      <div className="min-h-[500px] ">
        <Fade direction="down">
          <div className="text-center font-bold  text-3xl mt-10">
            No equipment found for your email.
          </div>
        </Fade>
        <div className="">
          <div className="flex w-96 mx-auto my-10 flex-col gap-4">
            <div className="skeleton h-44 w-full"></div>
            <div className="skeleton h-4 w-32"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex w-96 mx-auto my-10 flex-col gap-4">
            <div className="skeleton h-44 w-full"></div>
            <div className="skeleton h-4 w-32"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    );
  }
  const hundleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://equipify-server-side.vercel.app/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setProducts(products.filter((product) => product._id !== _id));
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch(() => Swal.fire("Error!", "Something went wrong.", "error"));
      }
    });
  };

  return (
    <div>
      <PageTitle title={"My Equipments"}></PageTitle>
      <div className="min-h-[620px] p-4 mx-10">
        <Fade direction="down">
          <h1 className="text-2xl text-blue-500 my-9 font-bold">
            My Equipment List ({products.length})
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
            {products.map((product) => (
              <div
                key={product.id}
                data-aos="fade-up"
                className="flex flex-col justify-between group p-5 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.itemName}
                  className="w-full h-60 rounded-md object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <p className="text-lg mt-5  italic mb-6">
                  <strong>Description:</strong>{" "}
                  {product.description || "No description available."}
                </p>
                <p className="">
                  Customization: {product.customization}
                </p>
                <h2 className="text-lg font-semibold mb-2">
                  {product.itemName}
                </h2>
                <p className="">
                  Processing Time: {product.processingTime}
                </p>
                <p className="">
                  Category: {product.categoryName}
                </p>
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
                    id={`view-${product._id}`}
                    to={`/products/${product._id}`}
                    className="btn mt-4 bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors"
                  >
                    View
                  </Link>
                  <Tooltip
                    anchorSelect={`#view-${product._id}`}
                    content="Your can see all details"
                  />
                  <Link
                    id={`Update-${product._id}`}
                    to={`/productsUpdate/${product._id}`}
                    className="btn mt-4 bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition-colors"
                  >
                    Update
                  </Link>
                  <Tooltip
                    anchorSelect={`#Update-${product._id}`}
                    content="Your can Update this Equipment"
                  />
                  <Link
                    id={`delete-${product._id}`}
                    onClick={() => hundleDelete(product._id)}
                    className="btn mt-4 bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 transition-colors"
                  >
                    {/* Delete */}
                    Delete
                  </Link>
                  <Tooltip
                    anchorSelect={`#delete-${product._id}`}
                    content="Your can delete this Equipment"
                  />
                </div>
                {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div> */}
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default MyEquipmentList;
