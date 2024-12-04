import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../NavRoute/Home/Home";
import SignUp from './../accounts/SignUp.jsx/SignUp';
import SignIn from './../accounts/SignIn/SignIn';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/signUp',
        element: <SignUp></SignUp>
      },
      {
        path:'/signIn',
        element: <SignIn></SignIn>
      },
    ],
  },
]);
export default router;
