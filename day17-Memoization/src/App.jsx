// React.Memo ---> functional components ko memoiz kar lete hai
// when yo need to memoize any functional components use React.memo() hook

import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App rendering....");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({name:"Pulkit", id:321})

  return (
    <div>
      <h1>Count is -{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Name is :-{users.name}</h2>
      <button onClick={()=>setUsers({...users,name:"prakhar"})}>Change name</button>
      <Home/>
      <About users={users}/>
    </div>
  );
};
export default App;
