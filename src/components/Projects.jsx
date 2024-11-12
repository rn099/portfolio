import React from "react";

const Projects = () => {
  const project_list = [
    {
      id: 1,
      name: "E-Commerce Application",
      tech_stack: ["React, Node.js"],
      github_link: "https://github.com/rn099/Leetcode",
      live_link: "",
    },
    {
      id: 2,
      name: "Chat Application",
      tech_stack: ["React, Express.js"],
      github_link: "",
      live_link: "",
    },
  ];

  return (
    <div id="projects">
      {project_list.map((list) => (
        <div key={list.id}>
          <span>{list.name}</span>
          <span>{list.tech_stack}</span>
          <span>{list.github_link}</span>
        </div>
      ))}
    </div>
  );
};

export default Projects;
