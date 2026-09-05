import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from '../layoutes/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainLayout from '../layoutes/MainLayout';

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout/>,
            children:[{
                path:"",
                element:<Login/>,
            },
            {
                path:"register",
                element:<Register/>
            }
        ]
            
        },
        {
            path:'main',
            element:<MainLayout/>,
        }
    ])
  return <RouterProvider router={router}/>
}
export default AppRoutes;