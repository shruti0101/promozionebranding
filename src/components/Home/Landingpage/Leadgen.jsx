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
      title: "B2B Lead Generation",
      icon: "bi-briefcase-fill",
      content:
        "In the B2B landscape, trust, authority, and long-term value matter most. Our strategies are built to nurture leads, build relationships, and drive high-value conversions. From LinkedIn marketing to whitepapers, email automation, and targeted campaigns — we help you connect with decision-makers and position your brand as a trusted industry partner.",
    },
    {
      title: "B2C Lead Generation",
      icon: "bi-people-fill",
      content:
        "B2C marketing is all about creating emotional connections and instant engagement. We design vibrant campaigns that speak directly to your audience’s needs and desires — whether it's through social media, influencer collaborations, or eye-catching ad creatives. Our goal is simple: spark interest, drive action, and turn browsers into loyal customers.",
    },
    {
      title: "D2C Lead Generation",
      icon: "bi-bag-heart-fill",
      content:
        "In the D2C world, your brand’s voice is everything. We help you build a strong digital presence that goes straight to your audience—no middlemen. From Shopify and WooCommerce setups to powerful storytelling, performance ads, and personalized content, we empower your brand to build loyalty, scale fast, and own the customer relationship.",
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
          High‑performing campaigns for <strong>B2B</strong>, <strong>B2C</strong>, and <strong>D2C</strong>—engineered to convert.
        </p>

        <div className="row g-4">
          {types.map((t, i) => (
            <div className="col-md-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="leadgen-card h-100 text-center p-4 shadow-lg border-0">
                <div className="icon-wrapper mx-auto mb-3">
                  <i className={`bi ${t.icon}`}></i>
                </div>
                <h5 className="fw-semibold mb-2">{t.title}</h5>
                <p className="text-black small lh-base">{t.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadgen;
