import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Project.css";

import img1 from "../../../assets/projects/project1.png";
import img2 from "../../../assets/projects/project2.png";
import img3 from "../../../assets/projects/project3.png";
import img4 from "../../../assets/projects/project4.png";
import img5 from "../../../assets/projects/project5.png";
import img6 from "../../../assets/projects/project6.png";
import img7 from "../../../assets/projects/project7.png";
import img8 from "../../../assets/projects/project8.png";
import img9 from "../../../assets/projects/project9.png";
import img10 from "../../../assets/projects/project10.png";
import img11 from "../../../assets/projects/project11.png";
import img12 from "../../../assets/projects/project12.png";

const projects = [
  { title: "Trader", img: img1 },
  { title: "Manufacturer", img: img2 },
  { title: "Manufacturer", img: img3 },
  { title: "Manufacturer", img: img4 },
  { title: "Manufacturer", img: img5 },
  { title: "Manufacturer ", img: img6 },
  { title: "Company Registration Consultant", img: img7 },
  { title: "Manufacturer", img: img8 },
  { title: "Manufacturer", img: img9 },
  { title: "Trader", img: img10 },
  { title: "Trader", img: img11 },
  { title: "Decor", img: img12 },
];

/* left column = original order | right column = reversed order  */
const leftSeq  = projects;
const rightSeq = [...projects].reverse();

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.img} alt={project.title} />
    <div className="project-title">{project.title}</div>
  </div>
);

const Project = () => (
  <div className="container py-4">
    <div className="row align-items-center">
      {/* ─── scrolling columns ─── */}
      <div className="col-md-7 mb-4 mb-md-0 d-flex gap-3 justify-content-center">
        {/* LEFT: scrolls down, original order */}
        <div className="vertical-scroll-wrapper">
          <div className="vertical-scroll scroll-down">
            {[...leftSeq, ...leftSeq].map((p, i) => (
              <ProjectCard key={`L-${i}`} project={p} />
            ))}
          </div>
        </div>
        {/* RIGHT: scrolls up, reversed order */}
        <div className="vertical-scroll-wrapper">
          <div className="vertical-scroll scroll-up">
            {[...rightSeq, ...rightSeq].map((p, i) => (
              <ProjectCard key={`R-${i}`} project={p} />
            ))}
          </div>
        </div>
      </div>

      {/* ─── right-side copy & CTA ─── */}
      <div className="col-md-5">
        <h2 className="fw-bold mb-3">Our Work Speaks for Itself</h2>
        <div className="d-flex gap-2 mb-3">
          <span className="triangle triangle-blue" />
          <span className="triangle triangle-gray" />
          <span className="triangle triangle-lightgray" />
        </div>
        <p className="mb-3">
          We craft exceptional <strong>web designs</strong> and{" "}
          <strong>SEO strategies</strong> that turn clicks into customers.
        </p>
        <p className="mb-3">
          From sleek landing pages to full-scale ecommerce, our builds attract,
          engage, and convert.
        </p>
        <p className="mb-4">
          Brands in <strong>education</strong>, <strong>healthcare</strong>, and{" "}
          <strong>real estate</strong> trust us to boost visibility and
          revenue—explore a few wins below.
        </p>
        <Link to="/Contact">
          <button className="nav-btn">Schedule An Appointment</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Project;
