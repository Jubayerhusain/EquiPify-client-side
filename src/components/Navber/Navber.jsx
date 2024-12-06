import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

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
        console.log("ERROR", error.message);
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
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
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
          <div className="relative w-14 h-14">
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
            className="btn btn-ghost lg:hidden"
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
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-60 space-y-2 p-2 shadow-lg"
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
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center space-x-5">{linkCenter}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end space-x-3">{linkRight}</div>
    </div>
  );
}

export default Navbar;
