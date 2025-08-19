import Tiltcard from "../../TiltCardHome/Tiltcard";
import enterprise from "../../assets/services/enterprise.webp";
import image from "../../assets/services/social2.webp"
import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp"
import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Process from "../Process/Process";
import SEO from "../../components/helmet/Helmet";
const Enterpriseseo = () => {


     useEffect(() => {
    AOS.init({ duration: 800, once: true });

 
  }, []);
  const cardItems = [
    {
      title: "Advanced SEO Audits",
      icon: "🧪", // Lab flask — symbolizes analysis/testing
    },
    {
      title: "Scalable Technical SEO",
      icon: "🛠️", // Tools — perfect for tech/configuration
    },
    {
      title: "Keyword Strategy for Scale",
      icon: "🎯", // Target — keyword precision and strategy
    },
    {
      title: "Enterprise Content Strategy",
      icon: "📊", // Bar chart — content strategy and performance
    },
    {
      title: "Multi-location SEO",
      icon: "🌍", // Globe — perfect for geographic/multi-location SEO
    },
    {
      title: "White Hat Link Building at Scale",
      icon: "🔗", // Link — directly represents link building
    },
  ];



const services = [
  {
    icon: "bi-bullseye",
    title: "Advanced SEO Audits",
    description:
      "Deep technical + content audits using enterprise-grade tools like SEMrush, Ahrefs, Screaming Frog, and Google Search Console.",
  },
  {
    icon: "bi-search",
    title: "Scalable Technical SEO",
    description:
      "Crawl budget optimization, site architecture planning, mobile-friendliness, indexation fixes & Core Web Vitals improvement.",
  },
  {
    icon: "bi-envelope-paper",
    title: "Keyword Strategy for Scale",
    description:
      "Target long-tail, transactional, branded & local keywords across hundreds of pages.",
  },
  {
    icon: "bi-person-plus",
    title: "Enterprise Content Strategy",
    description:
      "Content hubs, pillar pages, product content, localization, and programmatic SEO.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Multi-location SEO",
    description:
      "Rank your brand in 10, 50, or 100+ cities using smart local SEO strategies + Google Business Profiles.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Data-Driven Reporting",
    description:
      "Track keyword movement, ROI, traffic behavior, conversions & technical health—delivered monthly.",
  },
  {
    icon: "bi-diagram-3",
    title: "White Hat Link Building at Scale",
    description:
      "Authority-building via content outreach, PR, guest posts, and high DA backlinks.",
  },
];

const points=[
 " National or global brands with large websites",
"SaaS companies with feature-based landing pages",
"E-commerce sites with 500+ SKUs",
"News/media publishers with massive content libraries",
"Enterprises switching to headless CMS or React-based frameworks"

]
const note=[
  "If your brand’s online footprint is huge, Enterprise SEO is your most powerful growth channel."

] 

const funnelData = [
  {
    title: "Step 1: Discovery & Audit",
    services: [
      " We analyze your site structure, content depth, backlinks & competitor landscape.",
  
    ],
    color: "#2563eb",
  },
  {
    title: "Step 2: Strategy Blueprint",
    services: [
      " We create a page-level SEO roadmap based on priority, difficulty, and revenue opportunity.",
    ],
    color: "#16a34a",
  },
  {
    title: "Step 3: Technical Implementation",
    services: [
      " Fix crawling, speed, indexation, schema, and more – backed by dev collaboration.",
    ],
    color: "#f59e0b",
  },
  {
    title: "Step 4: Content Optimization",
    services: [
      " Refresh & expand existing content + add high-performance pages.",
    ],
    color: "#ec4899",
  },
  {
    title: "Step 5:Link Building & Authority Growt",
    services: [
      " Earn backlinks from premium, relevant sources – at scale.",
    ],
    color: "#0ea5e9",
  },

   {
    title: "Step 6: Monitoring & Scaling",
    services: [
      " Track performance, adapt, and grow into new markets or verticals.",
    ],
    color: "#222",
  },
];


  return (
    <div>
      <Tiltcard
        heading="Enterprise SEO Services in India – Dominate Search, Drive Conversions at Scale

"
        paragraph="When you're managing a large business, basic SEO just won’t cut it.
You need an Enterprise SEO Strategy that scales across hundreds (or thousands) of pages, boosts rankings across multiple locations or services, and brings in high-converting traffic—without breaking.



"
        cardItems={cardItems}
      />

      {/* section 2 */}

      <div className="container p-5">
        <div className="row">
          <div className="col-md-7 ">
            <h1 className="text-black">
              {" "}
              Why{" "}
              <span className="" style={{ color: "#2548BD" }}>
                Enterprise Brands
              </span>{" "}
              Choose Us
            </h1>

            <p className=" pt-4 lh-lead fs-5">
              Proven track record with large websites 100% white-hat,
              Google-friendly practices Cross-team collaboration (we work with
              your in-house team too) Seamless CMS + tech stack integration
              Tailored strategies for B2B, B2C, SaaS, eCom & Multi-location
              brands Dedicated SEO manager & regular strategy reviews We’re not
              just an agency. We’re your
              <strong>search strategy partner.</strong>
            </p>
          </div>

          <div className="col-md-5">
            <img
              src={enterprise}
              className=" img-fluid mb-4"
              alt="content-marketing"
            />
          </div>
        </div>
      </div>

      {/* our services */}

  
       <Service
      title="Our Enterprise Seo services includes"
      subtitle="Who Needs Enterprise SEO?

      "
        points={points}
        note={note}
    
    
      services={services}
      image={image }
    />


{/* why choose */}

   <section className="demand-section py-5 position-relative text-white">
      {/* Background Shape */}
      <div className="background-shape"></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-7">
            <h2 className="display-5 fw-bold mb-4">
              Why Choose <span className="text-highlight">Promozione</span> for Enterprise Seo
            </h2>
           

            <ul className="list-unstyled fs-5">
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
             100% white-hat, Google-friendly practices

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
             Proven track record with large websites

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
               Cross-team collaboration (we work with your in-house team too)

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
              Seamless CMS + tech stack integration

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
              Tailored strategies for B2B, B2C, SaaS & Multi-location brands

              </li>

               <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
              Dedicated SEO manager & regular strategy reviews


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
   Ready to Build Demand, Not Just Awareness?

      </h4>
      <p className="mb-3 text-dark fs-6">Stop guessing. Start scaling.</p>
      <p className="mb-4 text-secondary">
     Let’s create a demand generation engine for your brand that runs 24/7 – and delivers real results.

      </p>
      <a
        href="#contact"
        className="btn btn-primary w-100 fw-semibold"
        style={{
          borderRadius: "12px",
          fontSize: "16px",
          padding: "12px 20px",
        }}
      >
        🚀 Let’s Get Started
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



    {/* our process */}

<Process
title="Our Enterprise SEO Process" image={funnel} data={funnelData} 

></Process>


<Story></Story>
   <Form2
        heading=" Still using cold emails? Bro, it's 2025.."
        price=" Chat With a Strategist Today."
        buttonText=" Request a Custom Plan!"
        image={ctaImage}
      ></Form2>



        <SEO
        title="Enterprise SEO Services: Grow With Corporate SEO Services "
        description="Enterprise SEO services from Promozione help brands like yours maximize search visibility, increase brand awareness, and drive revenue. Learn more now!"
      />

    </div>
  );
};

export default Enterpriseseo;
