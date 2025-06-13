import React from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";
import "./Service.css"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = ({ title, subtitle, points, note, services, image }) => {
   useEffect(() => {
     AOS.init({
       duration: 1000,
       once: true,
       easing: "ease-in-out",
     });
   }, []);

  return (
    <section className="revenue-section py-5 bg-white">
      <div className="container-fluid">
        <div className="row align-items-start">
          {/* Left Column */}
          <div className="col-lg-4 mb-4 mb-lg-0 mt-5" data-aos="fade-left">
            <h1 className="fw-bold mb-3">{title}</h1>
            <h5 className="text-primary mb-3">{subtitle}</h5>

            <ul className="list-unstyled px-3">
              {points.map((point, index) => (
                <li className="d-flex align-items-start mb-2" key={index}>
                  <span className="check-icon me-2 mt-1 text-success">
                    <i className="bi bi-check-circle-fill fs-5"></i>
                  </span>
                  <span className="text-muted">{point}</span>
                </li>
              ))}
            </ul>

            {note && (
              <p className="text-muted small fst-italic px-3 mt-4">{note}</p>
            )}
          
              <div className="" data-aos="fade-up">
                <img src={image} alt="" className=" img-fluid mt-5" />
              </div>
          
          </div>

          {/* Right Column */}
          <div className="col-lg-8" data-aos="fade-right">
            <div className="service-stack">
              {services.map((service, index) => (
                <div key={index} className="service-item d-flex mb-4">
                  <div className="service-icon text-primary me-3 fs-3">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <div className="service-text">
                    <h5 className="fw-semibold">{service.title}</h5>
                    <p className="text-muted mb-0">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
