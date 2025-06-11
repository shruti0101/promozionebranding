import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./style.css";

const Story = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="success-stories py-5" ref={ref}>
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col lg={10}>
            <h3 className="section-title">
              <span className="highlight">Our Success Stories</span>
            </h3>
            <p className="section-text">
              We’ve helped businesses in <span className="bold">Delhi NCR, Gurgaon, Noida</span> and across India achieve <span className="bold">100% growth in organic traffic</span> and generate <span className="bold">qualified leads</span> through content marketing.
            </p>
          </Col>
        </Row>

        <Row className="stats-row justify-content-center text-center">
          <Col xs={12} sm={6} md={3} className="stat mb-4">
            <h2 className="stat-number">
              {inView && <CountUp end={100} duration={2} suffix="%" />}
            </h2>
            <p className="stat-label">Organic Traffic Growth</p>
          </Col>
          <Col xs={12} sm={6} md={3} className="stat mb-4">
            <h2 className="stat-number">
              {inView && <CountUp end={30} duration={2} suffix="+" />}
            </h2>
            <p className="stat-label">Monthly Qualified Leads</p>
          </Col>
          <Col xs={12} sm={6} md={3} className="stat mb-4">
            <h2 className="stat-number">
              {inView && <CountUp end={4} duration={2} suffix="X" />}
            </h2>
            <p className="stat-label">Content ROI</p>
          </Col>
          <Col xs={12} sm={6} md={3} className="stat mb-4">
            <h2 className="stat-number">Pan-India</h2>
            <p className="stat-label">Reach & Visibility</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Story;
