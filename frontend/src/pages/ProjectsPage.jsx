import React from "react";
import { projects } from "../assets/assests.js";
import ProjectsMap from "../components/ui/ProjectsMap";

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl pt-7 mx-auto md:my-[30px] my-3 px-4">
      <div className="flex flex-col gap-4">
        <h2 className="md:text-4xl text-2xl font-bold">All Projects</h2>
        <ProjectsMap projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsPage;
