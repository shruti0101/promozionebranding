
import "./style.css";
// import { useEffect } from "react";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import aiseo from "../../assets/services/aiseo.webp";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaSearch,
  FaProjectDiagram,
  FaPenNib,
  FaShareAlt,
  FaChartLine,
  FaRedo,
} from "react-icons/fa";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Story from "../Story/Story";
import ctaImage from "../../assets/ctaweb.webp";
import Form2 from "../../components/Home/Landingpage/Form2";
import AOS from "aos";
import "aos/dist/aos.css";
const cardItems = [
  {
    title: "On-Page SEO",
    icon: "📝", // Document/edit – content and meta optimizations
  },
  {
    title: "Off-Page SEO",
    icon: "🔗", // Link – backlinks and external signals
  },
  {
    title: "Technical SEO",
    icon: "⚙️", // Gear – performance and infrastructure
  },
  {
    title: "eCommerce SEO, Local SEO",
    icon: "🛒📍", // Cart + location pin – eCommerce and local visibility
  },
  {
    title: "SEO Audit & Reporting",
    icon: "📊", // Bar chart – audit and tracking performance
  },
  {
    title: "Competitor Analysis",
    icon: "🕵️‍♂️", // Detective – spying/analyzing competitors
  },
];

const Seoservices = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out",
      });
    }, []);

  return (
    <>
      <Tiltcard
        heading="Best AI SEO Services in India –  6 Month Guaranteed Google Ranking with Promozione Branding Pvt. Ltd."
        paragraph="Struggling to rank your website on Google? At Promozione Branding Pvt. Ltd., we offer 100% Guaranteed SEO Services in India that help your business rank higher, drive traffic, and generate qualified leads.
We don't just promise results – we guarantee them in 6 months, or you get your money back!"
        cardItems={cardItems}
         services="AI Seo services"
      />

      {/* section2 */}

      <section className="position-relative">
        <div className="container">
          <div className="row mt-4">
            {/* <img src={dots} alt="" className="position-absolute" /> */}
            <div className="col-md-5">
              <img src={aiseo} alt="social-ads" className="img-fluid" />
            </div>
            <div className="col-md-7">
              <h1 className="fw-bold fs-1 p-5 "> What Are AI SEO Services?</h1>
              <p className="text-black " style={{ fontSize: "1.1rem" }}>
                Search Engine Optimization (SEO) is the process of optimizing
                your website to improve its visibility on search engines like
                Google. It helps businesses increase their organic traffic,
                improve rankings, and boost conversions without spending heavily
                on paid ads. At Promozione, we blend technical SEO, content
                strategy, and data-driven execution to help businesses in Delhi
                NCR, Gurgaon, Noida, and PAN India dominate search engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* why choose  */}

      <section className="content-strategy-section py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={10}>
              <h3 className="strategy-title" style={{ color: "#2548BD" }}>
                How Our <span className="text-black">AI SEO Strategy</span> Works
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
                Step 1: SEO Audit & Competitor Analysis
              </h5>
              <p className="step-desc">
                We start by analyzing your website, identifying gaps, and
                researching competitors to create a{" "}
                <strong>customized SEO roadmap.</strong>
              </p>
            </div>

            <div className="strategy-step">
              <FaProjectDiagram className="strategy-icon" />
              <h5 className="step-title">
                Step 2: Keyword Research & Strategy
              </h5>
              <p className="step-desc">
                We identify the most profitable{" "}
                <strong>
                  keywords with high search volume and low competition
                </strong>{" "}
                that align with your business goals.
              </p>
            </div>

            <div className="strategy-step">
              <FaPenNib className="strategy-icon" />
              <h5 className="step-title">Step 3: On-Page Optimization</h5>
              <p className="step-desc">
                Our experts optimize your website's content, meta tags, and
                structure to improve relevance and ranking potential.
              </p>
            </div>

            <div className="strategy-step">
              <FaShareAlt className="strategy-icon" />
              <h5 className="step-title">
                Step 4: Link Building & Off-Page SEO
              </h5>
              <p className="step-desc">
                We create high-quality backlinks from{" "}
                <strong>reputable websites</strong> to boost your domain
                authority and rankings.
              </p>
            </div>

            <div className="strategy-step">
              <FaChartLine className="strategy-icon" />
              <h5 className="step-title">
                Step 5: Performance Tracking & Reporting
              </h5>
              <p className="step-desc">
                We track your SEO campaign with{" "}
                <strong>detailed weekly reports</strong> and make necessary
                adjustments to maximize performance.
              </p>
            </div>

            <div className="strategy-step">
              <FaRedo className="strategy-icon" />
              <h5 className="step-title">
                Step 6: Guaranteed Results in 6 Months
              </h5>
              <p className="step-desc">
                With our proven SEO strategies, we guarantee{" "}
                <strong>first-page rankings on Google</strong> – or your money
                back!.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* why important  */}

      <section className="why-content-marketing-section py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={10}>
              <h3 className="strategy-title" style={{ color: "#2548BD" }}>
                Why <span className="text-black">AI Seo Strategies</span>{" "}
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
            heading="Let's Build Your Success Story Together"
            price="Your Growth is Our Guarantee."
            buttonText="Book Your Free Consultation Now!"
            image={ctaImage}
          ></Form2>
    </>
  );
};

export default Seoservices;
