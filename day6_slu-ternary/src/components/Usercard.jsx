import React from "react";

const Usercard = ({ user }) => {
  return (
    <div className="p-4 flex flex-col gap-4 border-gray-400 border rounded bg-white">
      <div className="w-50 h-50 rounded overflow-hidden">
        <img className="h-full w-full" src={user.image} alt="" />
      </div>
      <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </div>
      <button className="bg-red-600 text-white p-2 pointer-coursor border rounded-2xl">
        Delete
      </button>
    </div>
  );
};

export default Usercard;
