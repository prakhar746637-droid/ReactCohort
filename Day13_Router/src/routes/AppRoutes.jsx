import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contect from "../pages/Contect";
import Details from "../pages/Details";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} >
        <Route path="details" element={<Details/>}/>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
