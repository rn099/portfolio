import React from "react";
import Contact from "./Contact";

const HeaderSection = () => {
  return (
    <div>
      <h1>Rohit Nair</h1>

      <h2>Full Stack Software Developer</h2>
      <h3>I solve problems</h3>
      <ul>
        <li>
          <a href="#about">{"<ABOUT/>"}</a>
        </li>
        <li>
          <a href="#experience">{"<EXPERIENCE/>"}</a>
        </li>
        <li>
          <a href="#projects">{"<PROJECTS/>"}</a>
        </li>
      </ul>
      <Contact />
    </div>
  );
};

export default HeaderSection;
