import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from "../layoutes/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layoutes/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import ProductsPage from "../pages/ProductsPage";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "main",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children:[
            {
                path:'',
                element:<HomePage/>
            },
            {
                path:'users',
                element:<UsersPage/>
            },
            {
                path:'products',
                element:<ProductsPage/>
            },
          ]
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
