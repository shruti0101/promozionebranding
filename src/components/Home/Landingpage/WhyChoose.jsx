import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/Whychoose.css";

// Images
import img1 from "../../../assets/about/img1.webp";
import img2 from "../../../assets/about/img2.webp";
import img4 from "../../../assets/about/img4.webp";
import img3 from "../../../assets/about/img3.webp";

import dots from "../../../assets/bg/light-blue-top-dots.png";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    AOS.init({ duration: 200, once: true });
  }, []);

  const stats = [
    {
      label: "Rank on Google",
      end: 6,
      note: "Months - Guaranteed",
      bg: "#eaf7f8",
      img: img1
    },
    {
      label: "Industries Served",
      end: 50,
      note: "Optimized Campaign Execution",
      bg: "#fff6eb",
      img: img2
    },
    {
      label: "Digital Services",
      end: 360,
      note: "° Full Funnel Marketing",
      bg: "#eef5ff",
      img: img3
    },
    {
      label: "Transparent Reports",
      end: 100,
      note: "% Visibility",
      bg: "#f1fff1",
      img: img4
    }
  ];

  return (
    <div style={{ overflowX: "hidden" }}>
      <section className="whychooseus-section position-relative" ref={ref}>
        <img src={dots} alt="dots" className="whychooseus-dots" />

        <Container fluid>
          <h2  className="text-center heading text-dark" data-aos="zoom-in">
            Why Choose <span style={{ color: "#2548BD" }}>Us?</span>
          </h2>
          <div className="divider mx-auto mb-4"></div>

          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h3 className="fw-bold text-dark">
                100% <span className="text-primary">GUARANTEED DIGITAL SUCCESS</span>
              </h3>
              <p className="text-muted mt-3">
                We know what you're thinking — “Every agency makes big claims, why should I trust Promozione?”
              </p>
              <p className="fw-semibold text-dark mt-4">
                Here's why we're different – We don't just promise results... <br />
                <span className="text-primary fw-bold">We deliver 100% Guaranteed Success!</span>
              </p>
              <ul className="mt-4 ps-3 list-unstyled">
                <li className="mb-2">✅ Get Ranked on Google in 6 Months – Guaranteed!</li>
                <li className="mb-2">✅ Qualified Leads in Just 7 Days – No Waiting!</li>
                <li className="mb-2">✅ 360° Digital Solutions – From Website to Google Ads</li>
                <li className="mb-2">✅ Dedicated Project Manager – Your personal growth partner</li>
                <li className="mb-2">✅ 100% Transparent Reporting – Know where every penny goes</li>
                <li className="mb-2">✅ Turning SMEs into digital powerhouses without breaking the bank</li>
              </ul>
            </Col>

            <Col lg={6}>
              <Row className="g-4">
                {stats.map((item, idx) => (
                  <Col sm={6} key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                    <div
                      className="stat-box position-relative p-4 rounded h-100"
                      style={{
                        backgroundColor: item.bg,
                        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                        overflow: "hidden",
                        borderRadius: "20px"
                      }}
                    >
                      <h3 className="fw-bold text-dark mb-1">
                        {inView && (
                          item.label === "Rank on Google" ? (
                            <CountUp start={100} end={item.end} duration={5} />
                          ) : (
                            <CountUp start={0} end={item.end} duration={5} />
                          )
                        )}
                        +
                      </h3>
                      <p className="text-secondary fw-medium mb-1">{item.label}</p>
                      <small className="text-muted">{item.note}</small>
                      <img
                        src={item.img}
                        alt="stat"
                        className="stat-img"
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default WhyChooseUs;
