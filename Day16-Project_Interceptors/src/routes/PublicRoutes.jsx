import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";

const PublicRoutes = () => { 
    console.log("Public rout rendering");
    

  const { loggedInUsers } = useContext(Auth);

  if (loggedInUsers) {
    return <Navigate to={"/main"} />;
  }
  return <Outlet />;

};

export default PublicRoutes;
