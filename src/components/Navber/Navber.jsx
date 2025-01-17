import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ThemeToggler from "./../ThemeToggoler/ThemeToggoler";
import { Tooltip } from "react-tooltip";

function Navbar({ matchedUser }) {
  const { user, signOutUser } = useContext(AuthContext);
  // Check if user or currentUser is null or undefined
  const navigate = useNavigate();
  const hundlesignOutUser = () => {
    signOutUser()
      .then((res) => {
        navigate("/signIn");
      })
      .catch((error) => {
        // console.log("ERROR", error.message);
      });
  };
  const linkCenter = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-500 hover:text-blue-600"
              : "text-lg text-gray-400 font-semibold hover:text-blue-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allSportsEquipment"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-500 hover:text-blue-600"
              : "text-lg text-gray-400 font-semibold hover:text-blue-500"
          }
        >
          All Sports Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myEquipmentList"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-500 hover:text-blue-600"
              : "text-lg text-gray-400 font-semibold hover:text-blue-500"
          }
        >
          My Equipment List
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addEquipment"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-500 hover:text-blue-600"
              : "text-lg text-gray-400 font-semibold hover:text-blue-500"
          }
        >
          Add Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-500 hover:text-blue-600"
              : "text-lg text-gray-400 font-semibold hover:text-blue-500"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-500 hover:text-blue-600"
              : "text-lg text-gray-400 font-semibold hover:text-blue-500"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <p id={`theme`} className="text-lg font-bold">
          <ThemeToggler></ThemeToggler>
        </p>
        <Tooltip anchorSelect={`#theme`} content="Theme Switch" />
      </li>
    </>
  );
  const linkRight = (
    <>
      {!user ? (
        <>
          <Link
            to="/signIn"
            className="btn bg-blue-500 text-white hover:bg-blue-600"
          >
            Sign In
          </Link>
          <Link
            to="/signUp"
            className="btn bg-blue-500 text-white hover:bg-blue-600"
          >
            Sign Up
          </Link>
        </>
      ) : (
        <>
          <div className="relative w-12 h-12 ">
            <img
              src={user?.photoURL || matchedUser?.photo}
              alt={user?.displayName || matchedUser?.name || "User"}
              className="w-full h-full rounded-full border border-gray-300"
            />
            {/* Hover Name */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-70 flex items-center pl-1 justify-center rounded-full opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-white text-xs font-semibold">
                {user.displayName || matchedUser?.name || "User"}
              </span>
            </div>
          </div>
          <Link
            onClick={hundlesignOutUser}
            className="btn bg-blue-500 text-white hover:bg-blue-600 ml-4"
          >
            Sign Out
          </Link>
        </>
      )}
    </>
  );

  return (
    <div className="navbar py-5 sticky top-0 z-50 backdrop-blur-3xl bg-transparent shadow-md lg:px-10">
      <div className="navbar-start">
        {/* Dropdown for smaller screens */}
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost xl:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-900/50 rounded-box z-[1] mt-3 w-60 space-y-2 p-2 shadow-lg"
          >
            {linkCenter}
          </ul>
        </div>
        {/* Brand Name */}
        <Link to="/" className="text-3xl font-bold text-blue-500">
          EquiPify
        </Link>
      </div>

      {/* Center Links for larger screens */}
      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal items-center space-x-2">
          {linkCenter}
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end space-x-3">{linkRight}</div>
    </div>
  );
}

export default Navbar;
