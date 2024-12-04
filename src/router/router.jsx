import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../NavRoute/Home/Home";
import SignUp from "./../accounts/SignUp.jsx/SignUp";
import SignIn from "./../accounts/SignIn/SignIn";
import AddEquipmentForm from "../components/AddEquipment/AddEquipment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CategoryProducts from "../components/CategoryProducts/CategoryProducts";
import AllEquipiment from "../NavRoute/AllEquipiment/AllEquipiment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children:[
          {
            path:"/category",
            element: <CategoryProducts></CategoryProducts>
          }
        ]
      },
      {
        path:'/allSportsEquipment',
        element: <AllEquipiment></AllEquipiment>,
        loader: ()=> fetch(`http://localhost:8000/products`)
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
    ],
  },
]);
export default router;
