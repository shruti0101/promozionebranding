import React from "react";
import content from "../../assets/services/content.png";
import { useRef, useEffect } from "react";
import bg from "../../assets/approach/wrapper-bg.png";
import { Container, Row, Col } from "react-bootstrap";
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
import ctaImage from "../../assets/formimg.webp";
import Form2 from "../../components/Home/Landingpage/Form2";
import AOS from "aos";
import "aos/dist/aos.css";

const cardItems = [
  {
    // Reflects mobile & social platforms
    title: "Website Content Writing ",
    description: " Engaging website copy that connects with your audience.",
  },
  {
    // Reflects mobile & social platforms
    title: "Email Marketing Content",
    description: "Personalized email campaigns that increase conversions.",
  },
  {
    // Represents targeting (remarketing precision)
    title: "SEO Blog Writing",
    description: "SEO-friendly blog content that ranks and drives traffic.",
  },
  {
    // Suggests analytics & conversion improvements
    title: "Social Media Content ",
    description: "Creative posts that boost brand awareness.",
  },
  {
    // Classic e-commerce icon
    title: "Landing Page Content",
    description: "Persuasive content that converts visitors into leads.",
  },

  {
    // Classic e-commerce icon
    title: "Product Descriptions ",
    description: "SEO-rich product descriptions for eCommerce websites.",
  },
];

const TiltCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    cardRef.current.classList.add("card-hovered");
    document.querySelector(".tilt-container")?.classList.add("bg-tilt");
  };

  const handleMouseLeave = () => {
    cardRef.current.classList.remove("card-hovered");
    document.querySelector(".tilt-container")?.classList.remove("bg-tilt");
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / 10).toFixed(2);
    const rotateY = ((x - rect.width / 2) / 10).toFixed(2);
    card.style.transform = `translateY(-4px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <div
      className="col-md-6 mb-4 d-flex justify-content-center"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="custom-card text-center p-3" ref={cardRef}>
        <h5 className="mb-2 ">{title}</h5>
        <p className="text-muted small">{description}</p>
      </div>
    </div>
  );
};

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const wrapperRef = useRef(null);

  const handleWrapperMove = (e) => {
    const wrapper = wrapperRef.current;
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / 20).toFixed(2);
    const rotateY = ((x - rect.width / 2) / 20).toFixed(2);
    wrapper.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleWrapperLeave = () => {
    wrapperRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div>
      {/* hero */}

      <section className="svg-section position-relative">
        <svg
          className="pathfinder-svg  d-none d-lg-block"
          width="1658"
          height="2062"
          viewBox="0 0 1458 1362"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path-animate color-svg "
            d="M146.963 34C68.8835 119.852 -35.7659 309.427 170.27 380.906C376.305 452.385 577.757 309.427 652.728 229.013L445.056 655.556C680.718 473.621 940.183 270.58 1161.6 433.738C1413.69 619.498 1151.24 937.204 940.183 919.717C738.576 903.012 761.883 668.375 940.183 628.751C1173.6 576.878 1569.6 809.302 1337.57 1160.18C1225.31 1329.94 977.475 1345.09 838.797 1265.85"
            stroke="#CDE9DE"
            strokeWidth="100"
            strokeLinejoin="round"
          />
        </svg>

        <div
          className="content-overlay container py-5 position-absolute top-0 start-50 translate-middle-x"
          data-aos="fade-up"
        >
          <div className="row align-items-center mt-4">
            <div className="col-md-6 mb-4">
              <h1 className="fw-bold mb-3">
                Content Marketing Services in India – Drive Engagement &
                Guaranteed Results with Promozione Branding Pvt. Ltd.
              </h1>
              <p className="text-black" data-aos="fade-up" data-aos-delay="200">
                Content is not just king – it’s the heartbeat of your brand. At
                Promozione Branding Pvt. Ltd., we offer 100% Guaranteed Content
                Marketing Services in India that captivate your audience, boost
                your brand presence, and drive qualified leads. We create
                content that doesn't just rank – it sells, engages, and
                converts.
              </p>
              <button className="nav-btn text-capitalize" data-aos="zoom-in">
                lets get started
              </button>
            </div>

            <div
              className="col-md-6 d-flex justify-content-center"
              onMouseMove={handleWrapperMove}
              onMouseLeave={handleWrapperLeave}
              data-aos="fade-up"
            >
              <div className="tilt-skew-wrapper d-none d-md-block">
                <div
                  className="tilt-container"
                  ref={wrapperRef}
                  style={{ backgroundImage: `url(${bg})` }}
                  data-aos="zoom-in-left"
                >
                  <div className="container-fluid p-4">
                    <div className="row">
                      {cardItems.map((item, index) => (
                        <TiltCard key={index} {...item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-5">
            <img
              src={content}
              className="img-fluid rounded mb-4"
              alt="content-marketing"
            />
          </div>

          <div className="col-md-7 mt-5 pt-5">
            <h1>
              {" "}
              What is <span className="text-black">
                Content Marketing?
              </span>{" "}
            </h1>

            <p className=" pt-4 lh-lead fs-5">
              Content Marketing is the art of telling your brand story in a way
              that drives engagement, trust, and conversions. Whether it’s blog
              articles, social media posts, or video content – great content
              makes your brand stand out in a crowded digital landscape. At
              Promozione, we blend creativity with data-driven strategies to
              create content that delivers measurable results.
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
              "100% Guaranteed Results in 6 Months",
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
            <button className="nav-btn">Talk to Our Experts</button>
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
