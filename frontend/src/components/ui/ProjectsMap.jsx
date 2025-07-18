import React from "react";
import { Link } from "react-router-dom";

const ProjectsMap = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {projects.map((project, index) =>
        project.isShowMore ? (
          <div
            key={"showMore"}
            className="w-[370px] px-4 py-4"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xl text-orange uppercase -mb-2">Projects</p>
              <h2 className="md:text-4xl text-2xl font-bold">
                Selected Work From Us
              </h2>
            </div>
            <Link to="/projects">
              <button className="button mt-2 text-purple-button hover:text-white active:text-white">
                Show More
              </button>
            </Link>
          </div>
        ) : (
          <div key={index} className="p-4 border rounded h-[280px]">
            <h2 className="text-xl font-bold">{project.title}</h2>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectsMap;
