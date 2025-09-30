import React from "react";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import b2b from "../../assets/services/b2b-marketing.webp";
import funnel from "../../assets/services/funnel.webp";
import "./B2b.css"
import { Helmet } from "react-helmet";
import { FaCheckCircle } from "react-icons/fa";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp"
import { Link } from "react-router-dom";

const B2b = () => {

const funnelData = [
  {
    title: "Step 1: B2B Strategy Planning",
    services: [
      "Deep dive into your Ideal Customer Profile (ICP)",
      "Define your goals & business offerings clearly",
    ],
    color: "#2563eb",
  },
  {
    title: "Step 2: Funnel Design & Messaging",
    services: [
      "Craft a compelling B2B value proposition",
      "Build a complete full-funnel marketing roadmap",
    ],
    color: "#16a34a",
  },
  {
    title: "Step 3: Campaign Execution",
    services: [
      "Launch content, ads, emails & automation in sync",
      "Drive high-quality engagement and conversions",
    ],
    color: "#f59e0b",
  },
  {
    title: "Step 4: Lead Nurturing & Scoring",
    services: [
      "Use smart tools to track & score leads",
      "Move leads from awareness to sales-readiness",
    ],
    color: "#ec4899",
  },
  {
    title: "Step 5: Analytics & Optimization",
    services: [
      "Track CPL, SQLs, MQLs, CAC, ROI",
      "Optimize performance monthly for growth",
    ],
    color: "#0ea5e9",
  },
];




const cardItems = [
  {
    title: "Targeted Lead Generation",
    icon: "🎯", // Bullseye emoji
  },
  {
    title: "Content Marketing",
    icon: "✍️", // Writing hand emoji
  },
  {
    title: "Account-Based Marketing",
    icon: "🔗", // Link emoji (represents connections)
  },
  {
    title: "LinkedIn Marketing",
    icon: "💼", // Briefcase emoji (professional network)
  },
  {
    title: "Email Nurturing",
    icon: "📧", // Email emoji
  },
  {
    title: "Brand Strategy",
    icon: "💡", // Lightbulb emoji (ideas/strategy)
  },
];



  return (
    <div>
<Helmet>
  <title>Top Marketing Agency for SaaS | Best B2B SaaS PPC Agency</title>
  <meta
    name="description"
    content="Explore our SEO, Branding, and Digital Marketing B2B Marketing provides actionable intelligence, data, events and training to help marketers maximize business performance and realize their potential."
  />
</Helmet>



      <Tiltcard
        heading="B2B Marketing Services in India – Generate Quality Leads & Close Bigger Deals"
        paragraph="B2B marketing is not about massive reach — it’s about reaching the right decision-makers at the right time.
At Promozione Branding Pvt. Ltd., we specialize in B2B Marketing Services in India that help businesses create trust-based relationships, generate high-quality leads, and drive long-term growth.


"
        cardItems={cardItems}
      />

      <section className="position-relative">
        <div className="container p-4">
          <div className="row mt-4">
            {/* <img src={dots} alt="" className="position-absolute" /> */}
            <div className="col-md-5">
              <img src={b2b} alt="social-ads" className="img-fluid" />
            </div>
            <div className="col-md-7">
              <h1 className="mb-3 fw-bold fs-1 pt-5">What is B2B Marketing?</h1>
              <p className="text-black " style={{ fontSize: "1.1rem" }}>
                B2B (Business-to-Business) Marketing is the art of promoting
                your products/services to other businesses — not individual
                customers. Yeh B2C se thoda alag hota hai: Logic-driven buying
                decisions Longer sales cycles More stakeholders in the
                decision-making Bigger ticket-size, long-term contracts So, your
                marketing needs to be <strong>smarter, strategic, and sales-focused.</strong> 
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* scetion 3 */}

         <section className=" pt-5  " style={{backgroundColor:"#E4F6F1"}}>
        <div className="container p-5">
          <h2 className="text-center mb-3 fw-bold" style={{ color: "#2548BD" }}>
            Why{" "}
            <span className="text-black"> B2B Marketing Matters </span>
         (More Than Ever)
          </h2>
          <p className="mx-auto text-center mb-4 ">In 2025, <strong> businesses don’t want salespeople—they want solutions.</strong>
 B2B marketing helps you:</p>
          <div className="row text-center g-4">
            {[
              "Build brand trust over time",
              "Reach top-level decision makers",
              " Generate warm, sales-ready leads",
              " Educate your audience (not just sell to them)",
              "Create a consistent inbound lead engine",
              "Outshine competitors with value-first marketing",
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


      {/* section 4 */}

<section className="py-5" style={{ backgroundColor: "#f9f9ff" }}>
      <div className="container-fluid m-0 p-0">
        <h2 className="fw-bold text-center fs-1 mb-4  " style={{ color: "#2548BD" }}>
          Our B2B Marketing Process
        </h2>
        <div className="row align-items-start">
          {/* Funnel image on the left */}
          <div className="col-md-3 text-start mb-4 mb-md-0 d-none d-lg-block">
            <img src={funnel} alt="B2B Funnel" className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
          </div>

          {/* Steps on the right */}
          <div className="col-md-9 mt-5">
            {funnelData.map((step, index) => (
              <div key={index} className="mb-4">
                <h5 className="fw-semibold" style={{ color: step.color }}>
                  {step.title}
                </h5>
                <ul className="ps-3 mb-2">
                  {step.services.map((item, i) => (
                    <li key={i} className="mb-1 text-secondary">{item}</li>
                  ))}
                </ul>
                {index < funnelData.length - 1 && (
                  <hr style={{ borderTop: `2px dashed ${step.color}`, opacity: 0.5 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Who Needs This Section */}
    
<div className="mt-5">
  <h4 className="fw-bold text-center text-dark mb-4">
    Who Needs <span style={{ color: "#2563eb" }}>B2B Marketing?</span>
  </h4>
  <div className="row g-3">
    {[
      "SMEs Companies , Manufacturers, Traders, Suppliers, Distributers, Dealers, Importers, Exporters, targeting global clients",
      "IT & Tech Service Providers",
      "B2B Startups & Enterprise Vendors",
      "Industrial Product Manufacturers",
      "Consultants, Agencies & Training Firms",
      "Logistics, Export, Finance & Infrastructure Brands",
    ].map((text, i) => (
      <div key={i} className="col-md-4">
        <div className="d-flex align-items-start p-3 shadow-sm rounded-3 bg-white h-100">
          <div
            className="me-3 d-flex justify-content-center align-items-center"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#2563eb",
              borderRadius: "50%",
            }}
          >
            <i className="fas fa-check text-white"></i>
          </div>
          <span className="text-dark fw-medium">{text}</span>
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>


    {/* section - 5 why choose*/}


     <section className="demand-section py-5 position-relative text-white">
      {/* Background Shape */}
      <div className="background-shape"></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-7">
            <h2 className="display-6 fw-bold mb-4">
              Why Choose <span className="text-highlight">Promozione</span> for  B2B Marketing?
            </h2>
            
         <p className="fw-semibold">With us, you don’t just “do marketing.” You build real B2B relationships that convert.</p>

            <ul className="list-unstyled fs-5">
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
               100% Custom Strategies – No cookie-cutter plans

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                India + Global Targeting Expertise

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
               ROI-Driven Execution

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
                In-House Team of Writers, Designers, and Marketers

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
              End-to-End Funnel Setup (CRM, automation, nurturing)

              </li>
               <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
            Performance Reports with Real KPIs

              </li>
            </ul>
          </div>

          {/* Right Column - CTA Box */}
        <div className="col-md-5 mt-5 mt-md-0" data-aos="fade-up" data-aos-delay="150">
  <div
    className="p-5 rounded-4 shadow-sm cta-enhanced text-dark position-relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #f9fafb, #e0e7ff)",
      border: "1px solid #e0e0e0",
    }}
  >
    <div style={{ zIndex: 2, position: "relative" }}>
      <h4 className="fw-bold mb-3 text-primary">
       Ready to Fuel Your B2B Growth?
      </h4>
      <p className="mb-3 text-dark fs-6">Partner with Promozione Branding Pvt. Ltd.</p>
      <p className="mb-4 text-secondary">
       Chhoti baatein nahi. Big-picture results chahiye? Then your B2B marketing must be strategic, data-backed, and customer-focused.
      </p>
      <Link to="/Contact"
       
        className="btn btn-primary w-100 fw-semibold"
        style={{
          borderRadius: "12px",
          fontSize: "16px",
          padding: "12px 20px",
        }}
      >
        🚀 Let’s Get Started
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

    <Story></Story>

  <Form2
        heading="  Get Your B2B Marketing Plan"
        price= " Schedule a Consultation Now"
        buttonText= "Talk to a Strategist Today"
        image={ctaImage}
      ></Form2>

    </div>
  );
};

export default B2b;
