import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/Project.css";

const projects = [
  { title: "Supplier", img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762338567/project14_povbky.webp" },

  { title: "Trader", img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762338564/project9_wkz4sc.webp" },
  { title: "Manufacturer", img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762338564/project12_hfshmj.webp" },
  { title: "Manufacturer", img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762338564/project11_c4nc00.webp" },
  { title: "Manufacturer", img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762338565/project13_lyhpgh.webp" },
  { title: "Service Provider", img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762338564/project10_hjf0vf.webp" },
  { title: "Manufacturer", img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762338564/project4_hdshqf.webp" },
  { title: "Trader", img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762338563/project2_iyyszx.webp" },
  { title: "Service Provider", img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762338564/project8_hx0zmh.webp" },
];

const Project = () => {
  return (
    <div className="container-fluid  px-5 py-5 project-section">
      <div className="row align-items-center">
        {/* LEFT CONTENT */}
        <div className="col-md-6 order-2 order-md-1 text-center text-md-start">
          <h2 className="fw-bold mb-3" style={{ color: "#2548BD" }}>
            Our Work Speaks for Itself
          </h2>

          <div className="d-flex gap-2 mb-3 justify-content-center justify-content-md-start">
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

          <Link to="/Contact">
            <button className="nav-btn">Schedule An Appointment</button>
          </Link>
        </div>

        {/* RIGHT SIDE BOOTSTRAP CAROUSEL */}
        <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
          <Carousel interval={2500} fade controls={true} indicators={false}>
            {projects.map((project, index) => (
              <Carousel.Item key={index}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="d-block w-100 rounded shadow-sm"
                />
            
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Project;
