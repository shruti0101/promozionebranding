import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Project.css";

import img1 from "../../../assets/projects/project-1.webp";
import img2 from "../../../assets/projects/project-2.webp";
import img3 from "../../../assets/projects/project-4.webp";
import img4 from "../../../assets/projects/project-5.webp";
import img5 from "../../../assets/projects/project-7.webp";

const projects = [
  { title: "Cultural Arts Center", img: img1 },
  { title: "Donaldson Plastic Surgery", img: img2 },
  { title: "Del-Mor Dwellings", img: img3 },
  { title: "CORE HCM", img: img4 },
  { title: "New Project", img: img5 },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.img} alt={project.title} />
    <div className="project-title">{project.title}</div>
  </div>
);

const Project = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Scrolling Columns */}
        <div className="col-md-7 mb-4 mb-md-0 d-flex gap-3 justify-content-center">
          <div className="vertical-scroll-wrapper">
            <div className="vertical-scroll scroll-down">
              {[...projects, ...projects].map((project, idx) => (
                <ProjectCard key={`down-${idx}`} project={project} />
              ))}
            </div>
          </div>
          <div className="vertical-scroll-wrapper">
            <div className="vertical-scroll scroll-up">
              {[...projects, ...projects].map((project, idx) => (
                <ProjectCard key={`up-${idx}`} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="col-md-5">
          <h2 className="fw-bold mb-3">Our Work Speaks for Itself</h2>
          <div className="d-flex gap-2 mb-3">
            <span className="triangle triangle-blue"></span>
            <span className="triangle triangle-gray"></span>
            <span className="triangle triangle-lightgray"></span>
          </div>
          <p className="mb-3">
            We specialize in crafting exceptional web design and SEO services, creating high-performing websites that stand out.
          </p>
          <p className="mb-4">
            Explore a few recent wins below to see real-world results.
          </p>
          <Link to="/Contact">
            <button className="nav-btn ">Schedule An Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
