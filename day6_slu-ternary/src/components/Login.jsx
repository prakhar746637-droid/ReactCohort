import React from "react";

const Login = ({setToggle}) => {
  return (
    <div className="bg-gray-400 w-90 p-4 rounded-2xl flex flex-col gap-4">
      <form className="flex flex-col gap-4 p-3" action="">
        <h1>Login...</h1>
        <input className="p-2 border border-gray-600 rounded-2xl" type="text" placeholder="Email" />
        <input className="p-2 border border-gray-600 rounded-2xl" type="password" placeholder="Password" />
        <button className="bg-black text-white rounded-2xl cursor-pointer p-2">Login</button>
      </form>
      <p>Didn't have an Account? <span onClick={
        ()=>{setToggle((prev)=> !prev)}
      } className="text-blue-700 cursor-pointer" >Login here</span></p>
    </div>
  );
};

export default Login;
