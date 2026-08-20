import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'

const Form = ({setUsers,users, setToggle, updatedData}) => {

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode:"onChange",
    defaultValues:updatedData,
  });
  let formSubmit = (data) => {
    if(updatedData){
      setUsers((prev)=>{
        return prev.map((val)=>{
          return val.id === updatedData.id ? {...data} : val
        })
      })

    }
      else{
        let arr = [...users,{...data, id: nanoid(),}]
        setUsers(arr)
        localStorage.setItem("users", JSON.stringify(arr))
      }
    reset()
    setToggle((prev)=>!prev)
  };
  return (
    <div className="flex flex-col gap-6 bg-black items-center p-4 rounded">
      <h1 className="text-yellow-700 text-xl font-bold">Create user</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col gap-3 p-4 rounded border-2 border-yellow-600 text-white"
      >
        <input
          {...register("name", { required: "name is requared" })}
          className="p-2 rounded-xl outline-0 border border-yellow-700"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", { required: "Email is requared",
            pattern:{
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "plz enter valid email",

            }
           })}
          className="p-2 rounded-xl outline-0 border border-yellow-700"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: "Mobile is requared",
            minLength: {
              value: 10,
              message: "Mobile number must be 10 digits",
            },
            maxLength: {
              value: 10,
              message: "Mobile number must be 10 digits",
            },
          })}
          className="p-2 rounded-xl outline-0 border border-yellow-700"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", { required: "imageURL is requared" })}
          className="p-2 rounded-xl outline-0 border border-yellow-700"
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button className="bg-yellow-700 w-80 text-white p-2 rounded-xl">
          Add User +
        </button>
      </form>
    </div>
  );
};

export default Form;
