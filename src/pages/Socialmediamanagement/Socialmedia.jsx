
import youtube from "../../assets/specialized/youtube.webp";
import instagram from "../../assets/specialized/instagram-icon-1.webp";
import facebook from "../../assets/specialized/facebook.webp";
import google from "../../assets/specialized/Google-AdWord-Course.webp";
import smo from "../../assets/services/smo.webp"
// import dots from "../../assets/bg/light-blue-top-dots.png"
import social from "../../assets/services/social.webp"
import social2 from "../../assets/services/social2.webp"
import funnel from "../../assets/services/funnel.webp"
import ctaImage from "../../assets/ctaweb.webp"
import Form2 from "../../components/Home/Landingpage/Form2"
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css"
import Tiltcard from "../../TiltCardHome/Tiltcard";
import { useEffect } from "react";
import Story from "../Story/Story";
import { Helmet } from "react-helmet";
const cardItems = [
  {
    icon: <img src={google} alt="Google Ads" style={{ height: 40 }} />,
    title: "Google Ads",
    description: "Tool for professional newsletters",
  },
  {
    icon: <img src={youtube} alt="YouTube Ads" style={{ height: 40 }} />,
    title: "Youtube Ads",
    description: "Platform for multichannel marketing automation",
  },
  {
    icon: <img src={instagram} alt="Instagram Ads" style={{ height: 40 }} />,
    title: "Instagram Ads",
    description: "Solutions for press releases and media monitoring",
  },
  {
    icon: <img src={facebook} alt="Facebook Ads" style={{ height: 40 }} />,
    title: "Facebook Ads",
    description: "Scalable websites and profitable online stores",
  },
];



const Socialmedia = () => {
 





const services = [
  {
    icon: "bi-bullseye",
    title: "Paid Advertising",
    description: "Strategic ad placements on Google, Meta, and LinkedIn to drive targeted traffic.",
  },
  {
    icon: "bi-search",
    title: "SEO & Content Marketing",
    description: "Rank higher organically and provide value with high-converting content.",
  },
  {
    icon: "bi-envelope-paper",
    title: "Email Marketing Campaigns",
    description: "Automated email flows and newsletters that nurture leads and re-engage users.",
  },
  {
    icon: "bi-person-plus",
    title: "Lead Generation & Nurturing",
    description: "Capture quality leads and convert them through multi-touch engagement.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Conversion Rate Optimization (CRO)",
    description: "Optimize landing pages and user journeys to increase conversion performance.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Retargeting Campaigns",
    description: "Stay top-of-mind and re-engage potential customers through retargeting ads.",
  },
  {
    icon: "bi-diagram-3",
    title: "Revenue Funnel Setup",
    description: "Build a scalable funnel tailored to your sales process and buyer stages.",
  },
  {
    icon: "bi-bar-chart-line",
    title: "Performance Tracking & Reporting",
    description: "Custom dashboards and analytics for real-time performance insights.",
  },
];


    const funnelData = [
  {
    title: "Step 1: Business & Goal Understanding",
    services: [
      " We understand your business goals, target audience, and brand voice.",
  
    ],
    color: "#2563eb",
  },
  {
    title: "Step 2: Custom Social Media Strategy",
    services: [
      " We craft a personalized social media strategy tailored to your business niche.",
    ],
    color: "#16a34a",
  },
  {
    title: "Step 3: Content Creation & Scheduling",
    services: [
      "  Our creative team designs engaging graphics, videos, and captions.",
    ],
    color: "#f59e0b",
  },
  {
    title: "Step 4: Community Engagement",
    services: [
      " We interact with your followers, respond to comments, and build a loyal community.",
    ],
    color: "#ec4899",
  },
  {
    title: "Step 5: Performance Tracking & Reporting",
    services: [
      "Track your social media growth with our weekly and monthly performance reports.",
    ],
    color: "#0ea5e9",
  },

   {
    title: "Step 6: Guaranteed Social Media Growth in 6 Months",
    services: [
      " we deliver guaranteed growth.",
    ],
    color: "#222",
  },
];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

 
  }, []);

  return (
    <>
    {/* 100% Guaranteed */}
    <Helmet>
  <title>Best Social Media Management Services India | #1 Company</title>
  <meta
    name="description"
    content="A top social media management company and agency. We offer social media marketing, social media management, and social media advertising"
  />
</Helmet>


      <Tiltcard
        heading="Elevate Your Brand with Social Media Management Services in India
"
        paragraph="Looking to make your brand the next big thing on social media? At Promozione Branding Pvt. Ltd., we offer  Social Media Management Services in India designed to help SMEs boost brand awareness, drive engagement, and generate qualified leads through social media platforms.

"
// 100% Guaranteed
        cardItems={cardItems}
        services="Social Media Management Services "
      />
      {/* section 2 */}

      <section className="position-relative">
        <div className="container">
          <div className="row mt-4">
{/* <img src={dots} alt="" className="position-absolute" /> */}
            <div className="col-md-5" data-aos="fade-up">
                <img src={smo} alt="social-ads" className="img-fluid"/>
            </div>
            <div className="col-md-7" data-aos="fade-up">
              <h2 className="mb-3 fw-bold fs-1 pt-5">What is Social Media Management?</h2>
              <p className="text-black"style={{fontSize:"1.1rem"}}>
                Social Media Management is the process of managing your
                business's online presence on social media platforms like
                Instagram, Facebook, LinkedIn, Twitter, and YouTube. It involves
                creating, publishing, and analyzing content, as well as engaging
                with your audience. With Promozione, we not only manage your
                social media accounts but also create a tailored strategy to help you
              </p>
            </div>
          </div>
        </div>
      </section>







{/* section 3 */}


 <section className="why-choose-section text-black mt-4">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <h2 className="fw-bold display-6 text-black mb-4">
                Why Choose Our <span className="text-accent">Social Media Management</span> Services?
              </h2>
              <ul className="list-style-custom ">
                {/* <li>100% Guaranteed Social Media Growth in 6 Months</li> */}
                <li>Custom Content Strategy for Every Business</li>
                <li>Dedicated Social Media Manager</li>
                <li>Creative Content Creation (Graphics + Videos)</li>
                <li>Performance Tracking & Reporting</li>
                <li>Audience Engagement & Community Building</li>
                <li>Affordable Packages for SMEs</li>
                <li>We don't just post – we create content that drives action!</li>
              </ul>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <img
                src={social}
                className="img-fluid"
                alt="Social Media"
              />
            </div>
          </div>
        </div>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path fill="#5fb7dfff" fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,138.7C384,160,480,192,576,176C672,160,768,96,864,85.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </section>

      {/* Section 2: Our Services */}

<section className="revenue-section py-5 bg-white">
      <div className="container">
        <div className="row align-items-start">
          {/* Left Column */}
          <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-left">
            <h1 className="fw-bold mb-2">Our Revenue Marketing Services</h1>
            <h5 className="text-primary">Fueling measurable growth at every funnel stage</h5>
            <p className="text-muted mt-3 p-3">
              We offer full-funnel marketing services focused on one goal — driving consistent, scalable revenue.
              From top-of-funnel awareness to final conversions, we align your marketing with business outcomes.
             <div className="mt-4">
                <p className="text-muted small fst-italic">
                  Whether you're launching a new campaign or scaling existing efforts, our team helps you turn strategy into revenue.
                </p>
              </div>

            </p>

            <img src={social2} alt="" className="img-fluid mt-3" />
          </div>

          {/* Right Column */}
          <div className="col-lg-8" data-aos="fade-right">
            <div className="service-stack">
              {services.map((service, index) => (
                <div key={index} className="service-item d-flex">
                  <div className="service-icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <div className="service-text">
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            
            </div>
          </div>
        </div>
      </div>
    </section>



{/* funeel  */}

<section className="revenue-funnel-section py-4 bg-white">
  <div className="container-fluid m-0 p-0">
    <h1 className="text-center text-capitalize mb-5">
      Our Process of Social Media Management
    </h1>

    <div className="row align-items-start">
      {/* Funnel Image Column */}
      <div className="col-lg-3 d-none d-lg-block text-center" data-aos="fade-up">
        <img
          src={funnel}
          alt="Funnel"
          className="img-fluid funnel-image"
        />
      </div>

      {/* Content Column */}
      <div className="col-12 col-lg-9 mt-5" data-aos="fade-down">
        {funnelData.map((step, index) => (
          <div key={index} className="mb-4 step-block">
            <h5 className="fw-bold mb-2">{step.title}</h5>
            <div className="row">
              {step.services.map((service, i) => (
                <div key={i} className="col-sm-12 col-md-6 mb-2 fw-semibold">
                  {service}
                </div>
              ))}
            </div>
            {index !== funnelData.length - 1 && (
              <hr style={{ borderTop: `2px solid ${step.color}` }} />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
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

export default Socialmedia;
