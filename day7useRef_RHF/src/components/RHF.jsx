// npm i react-hook-form

import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit =(data)=>{
    console.log(data);
    reset()
  }

  return (
    <div className="w-80 h-screen">
      <h1>React hook form</h1>
      <form onSubmit={handleSubmit(formSubmit)}
       className="p-6 rounded-2xl flex flex-col bg-gray-300 gap-4">
        <input {...register("productName")}
          className="p-2 border border-gray-600 rounded-2xl"
          type="text"
          placeholder="Product name"
        />
        <input {...register("price")}
          className="p-2 border border-gray-600 rounded-2xl"
          type="text"
          placeholder="price"
        />
        <input {...register("catagory")}
          className="p-2 border border-gray-600 rounded-2xl"
          type="text"
          placeholder="Category"
        />
        <input {...register("imgUrl")}
          className="p-2 border border-gray-600 rounded-2xl"
          type="text"
          placeholder="Image URL"
        />
        <button className="bg-black text-white rounded-2xl p-1">Create</button>
      </form>
    </div>
  );
};

export default RHF;
