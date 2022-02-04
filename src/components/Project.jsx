import React from "react";
import "../styles/Project.css";

const Project = ({ img, link, alt }) => {
  return (
    <div className="Project">
      <div className="Project-browser">
        <div className="Project-circle"></div>
        <div className="Project-circle"></div>
        <div className="Project-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={alt} className="Project-img" />
      </a>
    </div>
  );
};

export default Project;