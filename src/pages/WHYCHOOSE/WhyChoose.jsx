import React from "react";
import { FaCheckCircle } from "react-icons/fa";



const WhyChoose = ({
  title,
  highlightedText,
  features, // <-- renamed from points to features
  ctaTitle,
  ctaSubtext,
  ctaParagraph,
  ctaButtonText,
  para,
  ctaButtonLink = "#contact",
}) => {
  return (
    <section className="demand-section py-5 position-relative text-white">
      <div className="background-shape"></div>

      <div className="container position-relative" data-aos="fade-down">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-7">
            <h2 className="display-5 fw-bold mb-4">
              {title}{" "}
              {highlightedText && (
                <span className="text-highlight">{highlightedText}</span>
              )}
            </h2>
            <p className="fw-semibold">{para}</p>

            <ul className="list-unstyled fs-5">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - CTA */}
          <div
            className="col-md-5 mt-5 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div
              className="p-5 rounded-4 shadow-sm cta-enhanced text-dark position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #f9fafb, #e0e7ff)",
                border: "1px solid #e0e0e0",
              }}
            >
              <div style={{ zIndex: 2, position: "relative" }}>
                <h4 className="fw-bold mb-3 text-primary">{ctaTitle}</h4>
                <p className="mb-3 text-dark fs-6">{ctaSubtext}</p>
                <p className="mb-4 text-secondary">{ctaParagraph}</p>
                <a
                  href={ctaButtonLink}
                  className="btn btn-primary w-100 fw-semibold"
                  style={{
                    borderRadius: "12px",
                    fontSize: "16px",
                    padding: "12px 20px",
                  }}
                >
                  🚀 {ctaButtonText}
                </a>
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
