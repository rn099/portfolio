import React from "react";

const Experience = () => {
  const experience_array = [
    {
      sl_no: "1",
      duration: "2019 - 2022",
      position: "Software Developer",
      organisation: "TATA Consultancy Services",
      tech_stack: ["React", "Node.js"],
    },
  ];
  return (
    <div id="experience">
      {experience_array.map((list) => (
        <div key={list.sl_no}>
          <span>{list.duration}</span>
          <span>{list.organisation}</span>
          <span>{list.position}</span>
          <span>{list.tech_stack}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;
