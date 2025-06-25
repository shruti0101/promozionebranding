import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const WhyChoose = ({
  title,
  highlightedText,
  features,
  ctaTitle,
  ctaSubtext,
  ctaParagraph,
  ctaButtonText,
  para,

}) => {
  return (
    <section className="demand-section py-5 position-relative text-white">
      <div className="background-shape"></div>

      <div className="container position-relative" data-aos="fade-down">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-12 col-md-7 mb-4 mb-md-0">
            <h2 className="display-6 fw-bold mb-3 text-center text-md-start">
              {title}{" "}
              {highlightedText && (
                <span className="text-highlight">{highlightedText}</span>
              )}
            </h2>
            <p className="fw-semibold text-center text-md-start">{para}</p>

            <ul className="list-unstyled fs-6 ps-1 ps-md-0">
              {features.map((feature, index) => (
                <li key={index} className="mb-2 d-flex align-items-start">
                  <FaCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - CTA */}
          <div
            className="col-12 col-md-5"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div
              className="p-4 rounded-4 shadow-sm cta-enhanced text-dark position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #f9fafb, #e0e7ff)",
                border: "1px solid #e0e0e0",
              }}
            >
              <div style={{ zIndex: 2, position: "relative" }}>
                <h4 className="fw-bold mb-2 text-primary text-center text-md-start">
                  {ctaTitle}
                </h4>
                <p className="mb-2 text-dark fs-6 text-center text-md-start">
                  {ctaSubtext}
                </p>
                <p className="mb-3 text-secondary text-center text-md-start">
                  {ctaParagraph}
                </p>
                <Link to="/Contact"
                
                  className="btn btn-primary w-100 fw-semibold"
                  style={{
                    borderRadius: "12px",
                    fontSize: "16px",
                    padding: "12px 20px",
                  }}
                >
                  🚀 {ctaButtonText}
                </Link>
              </div>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(59,130,246,0.1), transparent)",
                  zIndex: 1,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
