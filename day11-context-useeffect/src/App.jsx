import React, { useContext, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contect from "./components/Contect";
import { ContextProvider, MyStore } from "./context/MyContext";

const App = () => {
  let { count, setCount } = useContext(MyStore);

  return (
    <div className="p-5 flex flex-col gap-5">
      <h1>count - {count}</h1>
      <button
        className="bg-black text-white p-2 rounded cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {/*
      <ContextProvider>
      <Home />
      </ContextProvider>
      */}
      <Home />
      <About />
      <Contect />
    </div>
  );
};

export default App;
