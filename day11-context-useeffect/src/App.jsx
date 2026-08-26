import React, { useContext, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contect from "./components/Contect";
import { MyStore } from "./context/MyContext";

const App = () => {
  let data = useContext(MyStore)
  console.log(data);
  
  return (
    <div className="p-5 flex flex-col gap-5">
      <button
        className="bg-black text-white p-2 rounded cursor-pointer"
      >
        Increment
      </button>
      <Home />
      <About />
      <Contect />
    </div>
  );
};

export default App;
