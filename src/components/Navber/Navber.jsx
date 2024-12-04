import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navber() {
  //     Home
  // All Sports Equipment
  // Add Equipment (Private Route)
  // My Equipment List (Private Route)

  const link_center = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold text-blue-500"
              : "text-xl text-gray-700"
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
              ? "text-xl font-bold text-blue-500"
              : "text-xl text-gray-700"
          }
        >
          All Sports Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addEquipment"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold text-blue-500"
              : "text-xl text-gray-700"
          }
        >
          Add Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myEquipmentList"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold text-blue-500"
              : "text-xl text-gray-700"
          }
        >
          My Equipment List
        </NavLink>
      </li>
    </>
  );
  const link_right = (
    <>
      <Link className="btn">SignIn</Link>
      <Link className="btn">SignUp</Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 space-x-7 p-2 shadow"
            >
              {link_center}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">EquiPify</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link_center}</ul>
        </div>
        <div className="navbar-end space-x-3">{link_right}</div>
      </div>
    </div>
  );
}

export default Navber;
