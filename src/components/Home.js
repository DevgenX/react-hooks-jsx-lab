import React from "react";
import { name, city } from "../data/data.js";

const Home = () => {
  const fire = {
    color: "firebrick",
  };

  return (
    <div id="home">
      <h1 style={fire}>{`${name} is a Web Developer from ${city}`}</h1>
    </div>
  );
};
// function Home() {
//   // update the JSX being returned!
//   return <div>Home</div>;
// }

export default Home;
