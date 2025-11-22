import React from "react";
import content from "../../assets/services/content.webp";
import { useRef, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SEO from "../../components/helmet/Helmet";
import {
  FaSearch,
  FaProjectDiagram,
  FaPenNib,
  FaShareAlt,
  FaChartLine,
  FaRedo,
} from "react-icons/fa";
import "./Content.css";
import { FaCheckCircle } from "react-icons/fa";
import Story from "../Story/Story";
import ctaImage from "../../assets/ctaweb.webp";
import Form2 from "../../components/Home/Landingpage/Form2";
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";

const cardItems = [
  {
    title: "Website Content Writing",
    icon: "🖋️", // Fountain pen – professional writing
  },
  {
    title: "Email Marketing Content",
    icon: "📧", // Email – direct communication
  },
  {
    title: "SEO Blog Writing",
    icon: "📈", // Chart increasing – SEO performance
  },
  {
    title: "Social Media Content",
    icon: "📱", // Mobile phone – social platforms
  },
  {
    title: "Landing Page Content",
    icon: "🧲", // Magnet – conversion pull
  },
  {
    title: "Product Descriptions",
    icon: "🛍️", // Shopping bag – ecommerce & products
  },
];

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>


  <SEO
        title="content marketing services in delhi|content marketing agency in delhi"
        description="Promozione Branding is content marketing agency in Delhi,Professional content marketing services in Delhi to build brand authority, boost engagement, and drive qualified leads with strategic content creation."
      />


      {/* hero */}
      <Tiltcard
        heading="Content Marketing Services in India – Get Results with Promozione Branding Pvt. Ltd."
        paragraph="Content is not just king – it’s the heartbeat of your brand. At Promozione Branding Pvt. Ltd., we offer Content Marketing Services in India that captivate your audience, boost your brand presence, and drive qualified leads.


"
// 100% Guaranteed
        cardItems={cardItems}
        services="content marketing services"
      />

      {/* section 2 */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <img
              src={content}
              className="img-fluid rounded mb-4 "
              alt="content-marketing"
            />
          </div>

          <div className="col-md-7 ">
            <h1>
              {" "}
              <span className="text-black">What is</span> Content Marketing
            </h1>

            <p className="   " style={{ fontSize: "1.1rem" }}>
              Content Marketing is the art of telling your brand story in a way
              that{" "}
              <strong>
                sparks engagement, builds trust, and drives meaningful
                conversions. In today’s noisy digital world, content isn’t just
                king—it’s the entire kingdom.
              </strong>
              Whether it’s informative blog articles, compelling social media
              posts, attention-grabbing videos, or interactive infographics,
              great content makes your brand stand out and stay memorable. It’s
              not just about words and visuals — it’s about crafting experiences
              that resonate with your audience. At{" "}
              <strong>
                {" "}
                Promozione Branding, we don’t just create content; we create
                impact.
              </strong>{" "}
              By blending creativity with data-backed insights, our team ensures
              every piece of content is aligned with your business goals and
              speaks directly to your audience. From brand awareness to lead
              generation, we deliver content that not only tells your story —
              but drives results you can measure.
            </p>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <section className="content-strategy-section py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={10}>
              <h3 className="strategy-title" style={{ color: "#2548BD" }}>
                How Our{" "}
                <span className="text-black">Content Marketing Strategy</span>{" "}
                Works
              </h3>
              <p className="strategy-subtitle">
                A well-defined and results-driven process to turn your brand
                story into customer engagement and measurable growth.
              </p>
            </Col>
          </Row>

          <div className="strategy-flow">
            <div className="strategy-step">
              <FaSearch className="strategy-icon" />
              <h5 className="step-title">
                Step 1: Understanding Your Brand Voice
              </h5>
              <p className="step-desc">
                We dive deep into your business to understand your brand story,
                target audience, and objectives.
              </p>
            </div>

            <div className="strategy-step">
              <FaProjectDiagram className="strategy-icon" />
              <h5 className="step-title">
                Step 2: Content Strategy Development
              </h5>
              <p className="step-desc">
                Our experts craft a customized content marketing plan aligned
                with your business goals.
              </p>
            </div>

            <div className="strategy-step">
              <FaPenNib className="strategy-icon" />
              <h5 className="step-title">Step 3: Content Creation</h5>
              <p className="step-desc">
                Our creative team produces high-quality, SEO-optimized content
                that engages your audience.
              </p>
            </div>

            <div className="strategy-step">
              <FaShareAlt className="strategy-icon" />
              <h5 className="step-title">Step 4: Content Distribution</h5>
              <p className="step-desc">
                We publish content across your website, social media, and other
                platforms for maximum reach.
              </p>
            </div>

            <div className="strategy-step">
              <FaChartLine className="strategy-icon" />
              <h5 className="step-title">Step 5: Performance Tracking</h5>
              <p className="step-desc">
                Every piece of content is tracked with detailed performance
                reports.
              </p>
            </div>

            <div className="strategy-step">
              <FaRedo className="strategy-icon" />
              <h5 className="step-title">Step 6: Continuous Optimization</h5>
              <p className="step-desc">
                We analyze performance and optimize the content strategy for
                better results.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* section 4 */}

      <section className=" pt-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#2548BD" }}>
            Why Choose Our Content{" "}
            <span className="text-black">Marketing Services?</span>
            in India?
          </h2>
          <div className="row text-center g-4">
            {[
              // "100% Guaranteed Results in 6 Months",
              "Proven Content Marketing Framework",
              "SEO-Optimized Content That Ranks & Converts",
              "Dedicated Content Strategists & Writers",
              "Data-Driven Content Strategies",
              "Transparent Reporting & Performance Tracking",
              "Cost-Effective Marketing Strategy",
            ].map((item, index) => (
              <div
                className="col-md-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="p-4 bg-light rounded shadow h-100">
                  <h5 className="fw-semibold">{item}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 pb-4" data-aos="zoom-in">
            <Link to="/Contact">
              <button className="nav-btn">Talk to Our Experts</button>
            </Link>
          </div>
        </div>
      </section>

      {/* section 5 */}

      <section className="why-content-marketing-section py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={10}>
              <h3 className="strategy-title" style={{ color: "#2548BD" }}>
                Why <span className="text-black">Content Marketing</span>{" "}
                Matters for Your Business
              </h3>
              <p className="strategy-subtitle">
                Content marketing isn’t just a buzzword – it’s a long-term,
                scalable strategy that empowers your brand and drives meaningful
                engagement.
              </p>
            </Col>
          </Row>

          <Row className="why-benefits-list gx-4 gy-4 justify-content-center">
            <Col md={6} className="d-flex align-items-start">
              <FaCheckCircle className="benefit-icon" />
              <div>
                <h5 className="benefit-title">
                  Builds Brand Authority & Trust
                </h5>
                <p className="benefit-text">
                  Position your business as a thought leader through valuable
                  content.
                </p>
              </div>
            </Col>

            <Col md={6} className="d-flex align-items-start">
              <FaCheckCircle className="benefit-icon" />
              <div>
                <h5 className="benefit-title">
                  Drives Organic Website Traffic
                </h5>
                <p className="benefit-text">
                  Attract high-intent visitors via SEO-optimized content.
                </p>
              </div>
            </Col>

            <Col md={6} className="d-flex align-items-start">
              <FaCheckCircle className="benefit-icon" />
              <div>
                <h5 className="benefit-title">
                  Boosts Lead Generation & Conversions
                </h5>
                <p className="benefit-text">
                  Turn readers into customers with targeted, informative
                  content.
                </p>
              </div>
            </Col>

            <Col md={6} className="d-flex align-items-start">
              <FaCheckCircle className="benefit-icon" />
              <div>
                <h5 className="benefit-title">Improves SEO Rankings</h5>
                <p className="benefit-text">
                  Enhance your visibility on search engines naturally over time.
                </p>
              </div>
            </Col>

            <Col md={6} className="d-flex align-items-start">
              <FaCheckCircle className="benefit-icon" />
              <div>
                <h5 className="benefit-title">
                  Cost-Effective Marketing Strategy
                </h5>
                <p className="benefit-text">
                  Achieve sustainable growth without high ad spend.
                </p>
              </div>
            </Col>

            <Col md={6} className="d-flex align-items-start">
              <FaCheckCircle className="benefit-icon" />
              <div>
                <h5 className="benefit-title">
                  Strengthens Customer Relationships
                </h5>
                <p className="benefit-text">
                  Educate, inform, and retain your audience with consistent
                  value.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Story></Story>

      <Form2
        heading=" Ready to Boost Your Brand with Powerful Content?"
        price=" you get content that drives revenue."
        buttonText=" Start your journey today!"
        image={ctaImage}
      ></Form2>


      
             
    </div>
  );
};

export default Content;
