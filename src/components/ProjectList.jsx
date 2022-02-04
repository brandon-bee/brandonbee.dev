import React from "react";
import "../styles/ProjectList.css";
import Project from "./Project";
import { projects } from "../data";

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <div className="ProjectList-texts">
        <h2 className="ProjectList-title">My Works</h2>
        <p className="ProjectList-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="ProjectList-list">
        {
          projects.map ((project) => {
            return (
              <Project key={project.id} img={project.img} link={project.link} alt={project.alt} />
            )
          })
        }
      </div>
    </div>
  );
};

export default ProjectList;
