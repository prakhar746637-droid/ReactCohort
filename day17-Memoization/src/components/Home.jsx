import React from "react";

const Home = React.memo(() => {
  console.log("Home rendering....");

  return <div>home</div>;
});

export default Home;
