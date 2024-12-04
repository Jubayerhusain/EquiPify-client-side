import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const hundlesignOutUser=()=>{
    signOutUser()
    .then(res=>{
      navigate('/signIn')
    })
    .catch(error=>{
      console.log("ERROR", error.message);
    })
  }
  const linkCenter = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold text-blue-500 hover:text-blue-600"
              : "text-xl text-gray-700 hover:text-blue-500"
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
              ? "text-xl font-bold text-blue-500 hover:text-blue-600"
              : "text-xl text-gray-700 hover:text-blue-500"
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
              ? "text-xl font-bold text-blue-500 hover:text-blue-600"
              : "text-xl text-gray-700 hover:text-blue-500"
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
              ? "text-xl font-bold text-blue-500 hover:text-blue-600"
              : "text-xl text-gray-700 hover:text-blue-500"
          }
        >
          Add Equipment
        </NavLink>
      </li>
    </>
  );

  const linkRight = (
    <>
      {
        !user ? (
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
        ) : <Link
              onClick={hundlesignOutUser}
              className="btn bg-blue-500 text-white hover:bg-blue-600"
            >
              Sign Out
            </Link>
      }
    </>
  );
  

  return (
    <div className="navbar bg-gray-100 shadow-md">
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
        <Link to="/" className="text-2xl font-bold text-blue-500">
          EquiPify
        </Link>
      </div>

      {/* Center Links for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-5">{linkCenter}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end space-x-3">{linkRight}</div>
    </div>
  );
}

export default Navbar;
