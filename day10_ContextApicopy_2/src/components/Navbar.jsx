import React from "react";

const Navbar = ({setIsCartOpen}) => {
  return (
    <div className="h-15 flex items-center justify-between bg-amber-400 text-slate-900 shadow-md p-2 rounded">
      <div>LOGO</div>
      <div className="flex gap-2">
        <a
          className="text-slate-900 font-medium hover:text-white transition"
          href="https://github.com/prakhar746637-droid?tab=repositories"
        >
          Repo
        </a>
        <a
          className="text-slate-900 font-medium hover:text-white transition"
          href="https://github.com/prakhar746637-droid"
        >
          Overview
        </a>
        <a
          onClick={()=>{setIsCartOpen(false)}}
          className="text-slate-900 font-medium hover:text-white transition"
          href="#"
        >
          Home
        </a>
        <a
          onClick={()=>{setIsCartOpen(true)}}
          className="text-slate-900 font-medium hover:text-white transition"
          href="#"
        >
          Cart
        </a>
      </div>
      <button
      className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition"
      >Login</button>
    </div>
  );
};

export default Navbar;
