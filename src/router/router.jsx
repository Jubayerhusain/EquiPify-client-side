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
import AllProduct from "../components/AllProduct/AllProduct";
import MyEquipmentList from "../NavRoute/MyEquipmentList/MyEquipmentList";
import ErrorPage from "../components/ErrorPage/Errorpage";
import ContactUs from "../NavRoute/ConatactUs/ContactUs";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Layout></Layout>,
    loader: () => fetch(`https://equipify-server-side.vercel.app/users`),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://equipify-server-side.vercel.app/products`),
        children: [
          {
            path: "/products/category/:categoryName",
            element: <CategoryProducts></CategoryProducts>,
            loader: ({ params }) =>
              fetch(
                `https://equipify-server-side.vercel.app/products/category/${params.categoryName}`
              ),
          },
          {
            path: "/",
            element: <AllProduct></AllProduct>,
            loader: () =>
              fetch(`https://equipify-server-side.vercel.app/products`),
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
        path: "/myEquipmentList",
        element: (
          <PrivateRoute>
            <MyEquipmentList></MyEquipmentList>
          </PrivateRoute>
        ),
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
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
        loader: () => fetch(`https://equipify-server-side.vercel.app/users`),
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
      {
        path: "/productsUpdate/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipmentForm></UpdateEquipmentForm>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://equipify-server-side.vercel.app/products/${params.id}`),
      },
    ],
  },
]);
export default router;
