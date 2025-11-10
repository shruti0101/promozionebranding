import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/Project.css";

const projects = [
  { title: "Supplier", img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762338567/project14_povbky.webp" },
  { title: "Supplier", img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1762338567/project15_aqmyuj.webp" },
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
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container-fluid px-4 py-5 project-section">
      <div className="row align-items-center">
        {/* LEFT CONTENT */}
        <div className="col-md-4 order-2 order-md-1 text-center text-md-start">
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

        {/* RIGHT SLIDER */}
        <div className="col-md-8 order-1 order-md-2 mb-4 mb-md-0">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-2">
                <div className="project-card text-center">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="img-fluid rounded shadow-sm project-img"
                  />
                  <div className="project-title mt-2 fs-5" style={{ color: "#2548BD" }}>
                    {project.title}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Project;
