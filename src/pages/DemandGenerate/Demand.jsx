import React from "react";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import demand from "../../assets/services/demand.png";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaSearch,
  FaProjectDiagram,
  FaPenNib,
  FaShareAlt,
  FaChartLine,
  FaRedo,
} from "react-icons/fa";
import './Demand.css'
import { FaCheckCircle } from "react-icons/fa";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/formimg.webp"
const Demand = () => {
  const cardItems = [
    {
      title: "Content Marketing ",
      description: "  Blogs, guides, videos that answer real customer.",
    },
    {
      title: "Account-Based Marketing (ABM)",
      description: "Targeted campaigns for high-value B2B clients",
    },
    {
      title: "Email Marketing & Automation",
      description: "Nurture leads smartly, without sounding robotic.",
    },
    {
      title: "SEO & Paid Ads",
      description: "Rank organically & run performance-driven PPC campaigns",
    },
    {
      title: "LinkedIn Outreach Campaigns",
      description: "Especially for B2B demand generation",
    },
    {
      title: "Video Marketing & Webinars",
      description: "Engage, educate, and excite",
    },
  ];

  return (
    <>
      <Tiltcard
        heading="Demand Generation Services in India – Drive Real Interest, Real Leads, Real Growth."
        paragraph="Tired of chasing cold leads? With our Demand Generation Services, we help you create the demand first – so customers come looking for you, not the other way around!
At Promozione Branding Pvt. Ltd., we combine the power of content, ads, automation, and strategy to generate high-intent leads that convert into paying customers.
"
        cardItems={cardItems}
      />

      {/* section 2 */}

      <div className="container-fluid p-5 " style={{backgroundColor:"#F2F7F2"}}>
        <div className="row">
          <div className="col-md-5">
            <img
              src={demand}
              className=" img-fluid mb-4"
              alt="content-marketing"
            />
          </div>

          <div className="col-md-7 ">
            <h1>
              {" "}
              What is <span className="text-black">
                Demand Generation?
              </span>{" "}
            </h1>

            <p className=" pt-4 lh-lead fs-5">
              Demand Generation is a strategic marketing process to build
              awareness, interest, and trust in your brand – long before a
              customer even thinks of buying. Iska matlab? Educating your
              audience Creating engaging content Running smart campaigns
              Nurturing leads until they’re sales-ready It’s not about
              pushing... it’s about{" "}
              <strong>attracting the right buyers at the right time.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* section 3 */}

<div className="bg-light">

      <section className="container py-5 ">
        <h1 className="text-center mb-5 fw-bold">
          Our Proven <span className="text-black">Demand Generation </span>Process
        </h1>
        <div className="leadgen-timeline position-relative">
          <div className="leadgen-step leadgen-left">
            <div className="leadgen-box">
              <div className="leadgen-icon">1</div>
              <h5>Step 1: Buyer Persona Research</h5>
              <p>
                We understand your ideal customer – their pain points, goals &
                journey.
              </p>
            </div>
          </div>
          <div className="leadgen-step leadgen-right">
            <div className="leadgen-box">
              <div className="leadgen-icon">2</div>
              <h5>Step 2: Strategy Creation
</h5>
              <p>
                Custom campaigns designed to attract and engage your specific audience.
              </p>
            </div>
          </div>
          <div className="leadgen-step leadgen-left">
            <div className="leadgen-box">
              <div className="leadgen-icon">3</div>
              <h5>Step 3: Content & Campaign Execution</h5>
              <p>
                 We create & launch blogs, ads, emails, videos, or webinars – as per your growth plan.
              </p>
            </div>
          </div>
          <div className="leadgen-step leadgen-right">
            <div className="leadgen-box">
              <div className="leadgen-icon">4</div>
              <h5>Step 4: Lead Nurturing & Automation</h5>
              <p>
                 Automated workflows that convert interest into intent, and intent into sales.

              </p>
            </div>
          </div>
          <div className="leadgen-step leadgen-left">
            <div className="leadgen-box">
              <div className="leadgen-icon">5</div>
              <h5>Step 5: Analytics & Optimization</h5>
              <p>
                 Track KPIs, score leads, and scale what's working.
              </p>
            </div>
          </div>
      
        </div>
   
      </section>
</div>

      {/* section4  */}

      <section className="demand-section py-5 position-relative text-white">
      {/* Background Shape */}
      <div className="background-shape"></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-7">
            <h2 className="display-5 fw-bold mb-4">
              Why Choose <span className="text-highlight">Promozione</span> for Demand Generation?
            </h2>
            <p className="lead mb-4">
              Because we don’t just run campaigns – we build demand that leads to actual revenue.
            </p>

            <ul className="list-unstyled fs-5">
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                Full-funnel marketing expertise
              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                Team of content + ad + automation pros
              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                Custom strategy for every business
              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                Transparent reporting & real ROI
              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                Proven success across India’s top industries
              </li>
            </ul>
          </div>

          {/* Right Column - CTA Box */}
          <div className="col-md-5 mt-5 mt-md-0">
            <div className="cta-box p-4 shadow rounded-4 bg-white text-dark">
              <h4 className="fw-bold mb-3">Ready to Build Demand, Not Just Awareness?</h4>
              <p className="mb-4">Stop guessing. Start scaling.</p>
              <p className="mb-4">Let’s create a demand generation engine for your brand that runs 24/7 – and delivers real results.</p>
              <a href="#contact" className="btn btn-primary w-100">Let’s Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  


      {/* section 5 */}

          <section className="py-5  bg-light">
        <div className="container ">
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#2548BD" }}>
            Why <span className="text-black">Demand Generation Matters?</span>
          </h2>

          <h5 className="text-center w-75 mb-4 mx-auto">
            Stop wasting money on random ads and cold data. Start building{" "}
            <strong>awareness + trust + leads</strong> in one smart flow.
          </h5>
          <div className="row text-center g-4">
            {[
              "More qualified leads",
              "Shorter sales cycles",
              "Better ROI on every campaign",
              "Brand authority and customer trust",
              "Consistent pipeline of warm prospects",
              "Market Analysis scalable growth.",
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
          <div className="text-center mt-5" data-aos="zoom-in">
            <button className="nav-btn">Talk to Our Experts</button>
          </div>
        </div>
      </section>

      <Story></Story>

       <Form2
        heading=" Still using cold emails? Bro, it's 2025.."
        price=" Chat With a Strategist Today."
        buttonText=" [Request a Custom Plan!"
        image={ctaImage}
      ></Form2>


    </>
  );
};

export default Demand;
