import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../NavRoute/Home/Home";
import SignUp from "./../accounts/SignUp.jsx/SignUp";
import SignIn from "./../accounts/SignIn/SignIn";
import AddEquipmentForm from "../components/AddEquipment/AddEquipment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CategoryProducts from "../components/CategoryProducts/CategoryProducts";
import AllEquipiment from "../NavRoute/AllEquipiment/AllEquipiment";
import UpdateEquipmentForm from "../components/EquipmentUpdate/EquipmentUpdate";
import ViewDetails from "./../components/ViewDetails/Viewdetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/category",
            element: <CategoryProducts></CategoryProducts>,
          },
        ],
      },
      {
        path: "/allSportsEquipment",
        element: <AllEquipiment></AllEquipiment>,
        // loader: () => fetch(`https://equipify-server-side.vercel.app/products`),
        loader: () => fetch(`https://equipify-server-side.vercel.app/products`),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/addEquipment",
        element: (
          <PrivateRoute>
            <AddEquipmentForm></AddEquipmentForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://equipify-server-side.vercel.app/products/${params.id}`
          ),
      },
      // {
      //   path: "/products/:id",
      //   element: (
      //     <PrivateRoute>
      //       <UpdateEquipmentForm></UpdateEquipmentForm>
      //     </PrivateRoute>
      //   ),
      //   loader: ({params}) => fetch(`https://equipify-server-side.vercel.app/products/${params.id}`),
      // },
    ],
  },
]);
export default router;
