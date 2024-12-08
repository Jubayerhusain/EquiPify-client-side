import React, { useContext } from "react";
import Navber from "./../components/Navber/Navber";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Layout() {
  const { user, loading } = useContext(AuthContext);
  const currentUser = useLoaderData();

  // Loading or invalid data handling
  if (loading || !currentUser || !Array.isArray(currentUser)) {
    return (
      <div class="flex items-center justify-center h-screen ">
        <div class="spinner animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  // Find the matched user
  const matchedUser = currentUser.find((u) => u.email === user?.email) || null;

  return (
    <div className="">
      <Navber matchedUser={matchedUser || { name: "Guest User" }}></Navber>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default Layout;
