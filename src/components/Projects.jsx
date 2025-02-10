import React from "react";
import Projectbox from "./component/Projectbox";
const projectData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for project 1",
    url: "https://fascinating-alfajores-410ed9.netlify.app/",
    // Add more fields as needed
  },

];

export default function Projects() {
  return (
    <>
      <div className="projects py-4 px-4 max-width">
        <h1 className="text-4xl md:text-6xl font-semibold text-white">
          Projects
        </h1>
        <div className="containbox flex justify-between">
          {projectData.map((project) => (
            <Projectbox
              key={project.id}
              webUrl={project.url}
              title={project.title}
              description={project.description}
              // Pass more fields as needed
            />
          ))}
        </div>
      </div>
    </>
  );
}
