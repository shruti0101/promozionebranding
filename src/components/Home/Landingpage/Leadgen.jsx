import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../../styles/Leadgen.css"

/**
 * Revamped Lead Generation showcase section
 * - Fresh glass‑morphism card style
 * - Gradient decorated background
 * - Hover lift & glow
 * - Fully responsive
 */
const Leadgen = () => {
  const types = [
    {
      title: "B2C Lead Generation",
      icon: "bi-people-fill",
      content:
        "Target individual consumers with storytelling ads, social campaigns, and high‑conversion landing pages—ideal for eCommerce, education, travel, and more.",
    },
    {
      title: "D2C Lead Generation",
      icon: "bi-bag-heart-fill",
      content:
        "Own the buyer relationship through performance marketing, influencer collabs, and CRM automation. Perfect for D2C brands selling on their own sites.",
    },
    {
      title: "B2B Lead Generation",
      icon: "bi-briefcase-fill",
      content:
        "Reach decision‑makers with precision: cold email, LinkedIn outreach, and industry funnels—built for SaaS, professional services, and enterprise products.",
    },
  ];

  return (
    <section className="leadgen-section py-5 position-relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="leadgen-blob position-absolute rounded-circle bg-primary-subtle opacity-25"></div>

      <div className="container position-relative">
        <h2 className="text-center fw-bold display-6 mb-3">
          <span className="text-gradient">Lead Generation</span> Solutions for Every Business Model
        </h2>
        <p className="text-center text-muted mb-5 fs-5">
          High‑performing campaigns for <strong>B2C</strong>, <strong>D2C</strong>, and <strong>B2B</strong>—engineered to convert.
        </p>

        <div className="row g-4">
          {types.map((t, i) => (
            <div className="col-md-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="leadgen-card h-100 text-center p-4 shadow-lg border-0">
                <div className="icon-wrapper mx-auto mb-3">
                  <i className={`bi ${t.icon}`}></i>
                </div>
                <h5 className="fw-semibold mb-2">{t.title}</h5>
                <p className="text-muted small lh-base">{t.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadgen;
