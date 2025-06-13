import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Process = ({ title, image, data }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-5 " style={{ backgroundColor: "#f9f9ff" }}>
      <div className="container-fluid m-0 p-0">
        <h2
          className="fw-bold text-center fs-1 mb-4"
          style={{ color: "#2548BD" }}
          data-aos="fade-down"
        >
          {title}
        </h2>
        <div className="row">
          {/* Funnel Image (Hidden on smaller screens) */}
          <div className="col-lg-3 d-none d-lg-block" data-aos="fade-up">
            <img
              src={image}
              alt="Funnel"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* Steps Content */}
          <div className="col-lg-9 mt-5">
            {data.map((step, index) => (
              <div key={index} className="mb-4" data-aos="fade-left" data-aos-delay={index * 100}>
                <h5 className="fw-semibold" style={{ color: step.color }}>
                  {step.title}
                </h5>
                <ul className="ps-3 mb-2">
                  {step.services.map((item, i) => (
                    <li key={i} className="mb-1 text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
                {index < data.length - 1 && (
                  <hr
                    style={{
                      borderTop: `2px dashed ${step.color}`,
                      opacity: 0.5,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
