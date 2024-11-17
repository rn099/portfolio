import React from "react";
import Contact from "./Contact";

const HeaderSection = () => {
  return (
    <div className="py-10 px-10 md:px-20 md:py-20 sm:px-5 sm:py-5 sm:mx-3">
      <h1 className="sm:text-5xl text-4xl">Rohit Nair</h1>
      <h2 className="text-2xl">Full Stack Software Developer</h2>
      <p className="text-lg">I solve problems</p>
      <ul className="md:block hidden">
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
