import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

const UsersPage = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const getUsersData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/users");

      console.log(res);

      setUsersData(res.data);
      setIsLoading(false)
    } catch (error) {
      console.log("errors in users api", error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);
  if (isLoading) return <h1 className="text-4xl p-10">Loding....</h1>

  return (
    <div className="h-screen overflow-y-auto bg-gray-100 px-4 sm:px-6 lg:px-10 py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Dashboard
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-1">
              Users
            </h1>

            <p className="text-gray-500 mt-2">
              Manage and view all registered users
            </p>
          </div>

          {/* User Count */}
          <div className="bg-white px-5 py-4 rounded-xl shadow-sm border border-gray-200">
            <p className="text-sm text-gray-500">Total Users</p>

            <p className="text-2xl font-bold text-gray-800">
              {usersData.length}
            </p>
          </div>
        </div>
      </div>

      {/* Users Grid */}
      <div className="max-w-7xl mx-auto">
        {usersData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {usersData.map((val) => (
              <UserCard key={val.id} user={val} />
            ))}
          </div>
        ) : (
          /* Loading */
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>

              <p className="text-gray-500">Loading users...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
