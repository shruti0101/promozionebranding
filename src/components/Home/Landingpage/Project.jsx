import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Project.css";

import img1 from "../../../assets/projects/project1.webp";
import img2 from "../../../assets/projects/project2.webp";
import img3 from "../../../assets/projects/project3.webp";
import img4 from "../../../assets/projects/project4.webp";
import img5 from "../../../assets/projects/project5.webp";
import img6 from "../../../assets/projects/project6.webp";
import img7 from "../../../assets/projects/project7.webp";
import img8 from "../../../assets/projects/project8.webp";
import img9 from "../../../assets/projects/project9.webp";
import img10 from "../../../assets/projects/project10.webp";
import img11 from "../../../assets/projects/project11.webp";
import img12 from "../../../assets/projects/project12.webp";
import img13 from "../../../assets/projects/project13.webp";
import img14 from "../../../assets/projects/project14.webp";
import img15 from "../../../assets/projects/project15.webp";

const projects = [
  { title: "Supplier", img: img1 },
  { title: "Supplier", img: img2 },
  { title: "Trader", img: img3 },
  { title: "Manufacturer", img: img4 },
  { title: "Manufacturer", img: img5 },
  { title: "Manufacturer", img: img6 },
  { title: "Service Provider", img: img7 },
  { title: "Manufacturer", img: img8 },
  { title: "Trader", img: img9 },
  { title: "Service Provider", img: img10 },
  { title: "Trader", img: img11 },
  { title: "Manufacturer", img: img12 },
  { title: "Manufacturer", img: img13 },
  { title: "Manufacturer", img: img14 },
  { title: "Service Provider", img: img15 },
];

// Offset rotation to avoid side-by-side duplicates
const rotateArray = (arr, offset) => {
  return [...arr.slice(offset), ...arr.slice(0, offset)];
};

const leftSeq = projects;
const rightSeq = rotateArray([...projects].reverse(), 3); // Rotate reversed list by 3

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.img} alt={project.title} />
    <div className="project-title fs-5" style={{ color: "#2548BD" }}>
      {project.title}
    </div>
  </div>
);

const Project = () => (
  <div className="container-fluid py-4">
    <div className="row align-items-center">
      {/* Scrolling columns */}
      <div className="col-md-7 mb-4 mb-md-0 d-flex gap-3 order-2 order-md-1">
        {/* LEFT column */}
        <div className="vertical-scroll-wrapper">
          <div className="vertical-scroll scroll-down">
            {[...leftSeq, ...leftSeq].map((p, i) => (
              <ProjectCard key={`L-${i}`} project={p} />
            ))}
          </div>
        </div>

        {/* RIGHT column */}
        <div className="vertical-scroll-wrapper">
          <div className="vertical-scroll scroll-up">
            {[...rightSeq, ...rightSeq].map((p, i) => (
              <ProjectCard key={`R-${i}`} project={p} />
            ))}
          </div>
        </div>
      </div>

      {/* ─── right-side copy & CTA ─── */}
      <div className="col-md-5 order-1 order-md-2">
        <h2 className="fw-bold mb-3" style={{ color: "#2548BD" }}>
          Our Work Speaks for Itself
        </h2>
        <div className="d-flex gap-2 mb-3 ">
          <span className="triangle triangle-blue" />
          <span className="triangle triangle-gray" />
          <span className="triangle triangle-lightgray" />
        </div>
        <p className="mb-3">
          We craft exceptional <strong>Web designs</strong> and{" "}
          <strong>SEO strategies</strong> that turn clicks into customers.
        </p>
        <p className="mb-3">
          From sleek landing pages to full-scale ecommerce, our builds attract,
          engage, and convert.
        </p>
        <p className="mb-4">
          Brands in <strong>education</strong>, <strong>healthcare</strong>, and{" "}
          <strong>real estate</strong> trust us to boost visibility and revenue{" "}
          <i className="text-primary font-bold"> — explore our few wins </i>
        </p>
        <div className="d-flex justify-content-center justify-content-md-start mb-3">
          <Link to="/Contact">
            <button className="nav-btn">Schedule An Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
