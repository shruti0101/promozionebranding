import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/Project.css"
import project1 from "../../../assets/projects/project-1.webp"
import project2 from "../../../assets/projects/project-2.webp"
import project3 from"../../../assets/projects/project-5.webp"
import project4 from "../../../assets/projects/project-4.webp"
import project5 from "../../../assets/projects/project-7.webp"
const projects = [
  {
    title: "E-commerce Website",
    image: project1,
    description: "A modern online store built with React & Stripe.",
  },
  {
    title: "Corporate Branding",
    image: project2,
    description: "Branding and design system for a fintech startup.",
  },
  {
    title: "Real Estate Platform",
    image: project3,
    description: "A property listing site with search filters and admin panel.",
  },
  {
    title: "Mobile App UI/UX",
    image: project4,
    description: "Sleek and intuitive mobile app design for a food delivery company.",
  },
    {
    title: "Mobile App UI/UX",
    image: project5,
    description: "Sleek and intuitive mobile app design for a food delivery company.",
  },
];

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="project-gallery-section">
      <div className="container text-center">
        <h2 className="section-title" data-aos="fade-up">
          Our Projects
        </h2>
        <div className="underline" />
        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
