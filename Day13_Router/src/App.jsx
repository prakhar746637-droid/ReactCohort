import React, { useState } from "react";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Home from "./pages/Home";
import { NavLink, Route, Routes } from "react-router";
import AppRoutes from "./routes/AppRoutes";
/**
 
const App = () => {
  const [toggle, setToggle] = useState("home")
  return (
    <div className='h-screen'>
    <nav className='flex items-center justify-between p-2 bg-amber-500'>
        <h1>Logo</h1>
        <div className='flex gap-5 items-center'>
          <p onClick={()=>setToggle("home")}>Home</p>
          <p onClick={()=>setToggle("about")}>About</p>
          <p onClick={()=>setToggle("contect")}>Contect</p>
        </div>
        <button>Login</button>
      </nav>
      <div>
        
          {toggle === "home"&&<Home/>}
          {toggle === "about"&&<About/>}
          {toggle === "contect"&&<Contect/>}
        
          </div>
    </div>
  )
}

export default App

  */

const App = () => {
  
  return (
    <div className="h-screen">
      <nav className="flex items-center justify-between p-2 bg-amber-500">
        <h1>Logo</h1>
        <div className="flex gap-5 items-center">
          <NavLink to={'/home'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/contect'}>contect</NavLink>
        </div>
        <button>Login</button>
      </nav>
      <div>
        <AppRoutes/>
      </div>
    </div>
  );
};

export default App;
