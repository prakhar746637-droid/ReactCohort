import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300">

      {/* Profile */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-600">
            {user.name.firstname.charAt(0).toUpperCase()}
          </span>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-gray-500 text-sm">
            @{user.username}
          </p>
        </div>
      </div>

      {/* User Details */}
      <div className="space-y-4">

        {/* Email */}
        <div>
          <p className="text-xs text-gray-400 uppercase font-semibold">
            Email
          </p>
          <p className="text-gray-700">
            {user.email}
          </p>
        </div>

        {/* Phone */}
        <div>
          <p className="text-xs text-gray-400 uppercase font-semibold">
            Phone
          </p>
          <p className="text-gray-700">
            {user.phone}
          </p>
        </div>

        {/* Address */}
        <div>
          <p className="text-xs text-gray-400 uppercase font-semibold">
            Address
          </p>

          <p className="text-gray-700 capitalize">
            {user.address.number}, {user.address.street},{" "}
            {user.address.city} - {user.address.zipcode}
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          User ID: {user.id}
        </span>

        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
          View Profile
        </button>
      </div>

    </div>
  );
};

export default UserCard;

