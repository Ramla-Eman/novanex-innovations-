import React from "react";
import { projects } from "../assets/assests.js";
import ProjectsMap from "./ui/ProjectsMap";

const HomeProjects = () => {
  const topProjects = [...projects.slice(0, 5), { isShowMore: true }];

  return (
    <div className="h-screen max-w-7xl pt-7 mx-auto md:my-[30px] my-3 px-4">
      <div className="w-full h-full overflow-x-auto scroll-smooth scrollbar-hide">
        <ProjectsMap projects={topProjects} />
      </div>
    </div>
  );
};

export default HomeProjects;
