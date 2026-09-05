import React from "react";
import { NavLink, useLocation } from "react-router";

const Navbar = () => {
    
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col border-r border-gray-700">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wide">
          Prakhar's <span className="text-blue-500">Store</span>
        </h1>
        <p className="text-xs text-gray-400 mt-1">Admin Dashboard</p>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6">
        <p className="text-xs uppercase tracking-wider text-gray-500 px-3 mb-3">
          Menu
        </p>

        <div className="flex flex-col gap-2">
          <NavLink
            to={"/main"}
            end
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            🏠 <span className="ml-2">Home</span>
          </NavLink>

          <NavLink
            to={"/main/products"}
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            🛍️ <span className="ml-2">Products</span>
          </NavLink>

          <NavLink
            to={"/main/users"}
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            👥 <span className="ml-2">Users</span>
          </NavLink>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 p-4">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
            P
          </div>

          <div>
            <h3 className="text-sm font-semibold">Prakhar</h3>

            <p className="text-xs text-gray-400">User</p>
          </div>
        </div>

        <button className="w-full mt-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
