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
  <div className="project-card text-white position-relative">
    <img src={project.img} alt={project.title} className="img-fluid" />
    <div className="card-overlay">
      <h6 className="mb-0">{project.title}</h6>
    </div>
  </div>
);

const Project = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Scrolling Image Columns */}
        <div className="col-md-7 d-flex gap-3 overflow-hidden">
          <div className="scroll-column scroll-down">
            {[...projects, ...projects].map((project, i) => (
              <ProjectCard key={`down-${i}`} project={project} />
            ))}
          </div>
          <div className="scroll-column scroll-up">
            {[...projects, ...projects].map((project, i) => (
              <ProjectCard key={`up-${i}`} project={project} />
            ))}
          </div>
        </div>

        {/* Right Side Content */}
        <div className="col-md-5 mt-4 mt-md-0">
          <h1 className="fw-bold mb-3 text-center">Our Work Speaks for Itself</h1>
          <div className="mb-3 triangle-indicators mx-auto d-flex justify-content-center">
            <span className="triangle orange" />
            <span className="triangle gray" />
            <span className="triangle lightgray" />
          </div>
          <p className="mb-3 text-center">
            We specialize in crafting exceptional web design and SEO services,
            creating high-performing websites that stand out. Along with that,
            we offer a comprehensive range of digital marketing services to support your online presence.
          </p>
          <p className="mb-4 text-center">
            While we understand the technical side of things, we focus on delivering results
            that speak louder than words. Check out some of our recent client successes to see the impact we’ve made:
          </p>
          <Link to="/Contact">
            <button className="nav-btn mx-auto d-block">
              Schedule an Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
