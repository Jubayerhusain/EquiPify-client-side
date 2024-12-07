import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";

const ErrorPage = () => {
  return (
   <div>
      <PageTitle title={'Error'}></PageTitle>
     <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 text-center">
      <div className="bg-white p-10 rounded-lg shadow-2xl max-w-md">
        <h1 className="text-8xl font-extrabold text-orange-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Oops! You’re Lost!
        </h2>
        <p className="text-gray-600 mb-6">
          Looks like you took a wrong turn. Don’t worry, it happens to the best
          of us.
        </p>
        <img
          src="https://celtathens.com/wp-content/uploads/2024/02/errors.jpg"
          alt="Funny Lost Robot"
          className="w-64 mx-auto mb-6"
        />
        <p className="text-lg text-gray-700 italic mb-4">
          "Wait, where’s the internet?!" - Someone lost, probably you.
        </p>
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          🏠 Take Me Home
        </Link>
      </div>
    </div>
   </div>
  );
};

export default ErrorPage;
