import React from "react";
import { image } from "../data/data";

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Nothin'</p>
      <img src={image} alt="I made this" />
    </div>
  );
};

// function About() {
//   return <div>About</div>;
// }

export default About;
