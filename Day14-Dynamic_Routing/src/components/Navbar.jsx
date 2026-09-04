import React from "react";
import {NavLink} from "react-router"

const Navbar = () => {
  return (
    <div className="bg-black text-white rounded p-5 flex items-center justify-between">
      <div>Logo</div>
      <div className="flex gap-10 text-xl">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/products'}>Products</NavLink>
      </div>
      <button>Create</button>
    </div>
  );
};

export default Navbar;
