// alert ke liye react tostify naam ka pakege instaall karo
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  let { registeredUsers, loggedInUsers, setLoggedInUsers } = useContext(Auth);
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if(!user){
        toast.error("invalid creds or user not found")

        return
    }
    setLoggedInUsers(user)
    localStorage.setItem('loggedInUsers', JSON.stringify(user))
    toast.success('user Logged in')
    navigate("/main")
    reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Username */}
         

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              {...register("email", {
                required: "email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-900">{errors.email.message}</p>
            )}
          </div>

          

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              {...register("password", {
                required: "password is Required",
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-900">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <div className="text-center mt-6 text-gray-600">
          <span>Don't have an account? </span>

          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
