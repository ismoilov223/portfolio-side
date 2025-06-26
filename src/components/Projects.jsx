import React from "react";
import Projectbox from "./component/Projectbox";
const projectData = [
  {
    id: 1,
    title: "Project 1",
    description:
      " lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://fascinating-alfajores-410ed9.netlify.app/",
    // Add more fields as needed
  },
  {
    id: 2,
    title: "Project 1",
    description:
      " lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://ditionary-app-ismoilov223.netlify.app",
    // Add more fields as needed
  },
  {
    id: 3,
    title: "Project 1",
    description:
      " lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://todo-list-223.netlify.app/",
    // Add more fields as needed
  },
  {
    id: 4,
    title: "Project 1",
    description:
      " lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://random-sum.netlify.app",
    // Add more fields as needed
  },
];

export default function Projects() {
  return (
    <>
      <div className="projects py-10 px-4 max-width">
        <h1 className="text-2xl pb-5 md:text-4xl font-semibold text-white md:mb-8">
          Projects
        </h1>
        <div className="containbox lg:px-28 flex justify-between flex-wrap gap-1 gap-y-12">
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
