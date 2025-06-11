import React, { useRef } from "react";
import bg from "../../assets/approach/wrapper-bg.png";
import youtube from "../../assets/specialized/youtube.png";
import instagram from "../../assets/specialized/instagram-icon-1.png";
import facebook from "../../assets/specialized/facebook.png";
import google from "../../assets/specialized/Google-AdWord-Course.png";
import smo from "../../assets/services/smo.jpg"
// import dots from "../../assets/bg/light-blue-top-dots.png"
import social from "../../assets/services/social.png"
import social2 from "../../assets/services/social2.webp"
import funnel from "../../assets/services/funnel.webp"
import ctaImage from "../../assets/formimg.webp"
import Form2 from "../../components/Home/Landingpage/Form2"
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css"
import { useEffect } from "react";
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
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div
      className="col-sm-6 col-lg-6 mb-4 d-flex justify-content-center"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="custom-card text-center p-3" ref={cardRef}>
        <div className="icon-wrapper mb-3">{icon}</div>
        <h5 className="mb-2">{title}</h5>
        <p className="text-muted small">{description}</p>
      </div>
    </div>
  );
};

const Socialmedia = () => {
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



  const points = [
  "100% Guaranteed Social Media Growth in 6 Months",
  "Custom Content Strategy for Every Business",
  "Dedicated Social Media Manager",
  "Creative Content Creation (Graphics + Videos)",
  "Performance Tracking & Reporting",
  "Audience Engagement & Community Building",
  "Affordable Packages for SMEs",
  "We don't just post – we create content that drives action!",
];
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
 
    title: "Drive website traffic",
    services: ["SEO Services", "Local SEO Services", "Ecommerce SEO Services", "Content Marketing Services"],
  },
  {
   
    title: "Create and manage powerful ad campaigns",
    services: ["PPC Management Services", "Social Advertising Services", "Programmatic Advertising Services", "Geofencing Advertising Services"],
  },
  {
    
    title: "Collect, analyze, and deploy marketing data",
    services: ["RevenueCloudFX", "Nutshell", "Website Call Tracking", "Lead Management"],
  },
  {
   
    title: "Improve brand messaging and conversion",
    services: ["Website Design Services", "CRO Services", "Landing Page Design Services", "Social Media Management Services"],
  },
];

  return (
    <>
      <section className="svg-section position-relative ">
        <svg
          className="pathfinder-svg d-none d-lg-block"
          width="1658"
          height="2062"
          viewBox="0 0 1458 1362"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path-animate color-svg"
            d="M146.963 34C68.8835 119.852 -35.7659 309.427 170.27 380.906C376.305 452.385 577.757 309.427 652.728 229.013L445.056 655.556C680.718 473.621 940.183 270.58 1161.6 433.738C1413.69 619.498 1151.24 937.204 940.183 919.717C738.576 903.012 761.883 668.375 940.183 628.751C1173.6 576.878 1569.6 809.302 1337.57 1160.18C1225.31 1329.94 977.475 1345.09 838.797 1265.85"
            stroke="#CDE9DE"
            strokeWidth="100"
            strokeLinejoin="round"
          />
        </svg>

        <div className="content-overlay container py-5 position-absolute top-0 start-50 translate-middle-x">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h1 className="fw-bold mb-3" data-aos="fade-up">
                Elevate Your Brand with 100% Guaranteed Social Media Management
                Services in India
              </h1>
              <p className="text-black" data-aos="fade-up" data-aos-delay="200">
                Looking to make your brand the next big thing on social media?
                At Promozione Branding Pvt. Ltd., we offer 100% Guaranteed
                Social Media Management Services in India designed to help SMEs
                boost brand awareness, drive engagement, and generate qualified
                leads through social media platforms. Our expert social media
                strategies don't just increase followers – we turn your social
                media into a revenue-generating powerhouse.
              </p>
              <button className="nav-btn text-capitalize" data-aos="zoom-in">
                Let's get started
              </button>
            </div>

            {/* Hide Tilt Container on small screens */}
            <div
              className="col-md-6 d-none d-md-block d-flex justify-content-center"
              onMouseMove={handleWrapperMove}
              onMouseLeave={handleWrapperLeave}
              data-aos="fade-up"
            >
              <div className="tilt-skew-wrapper">
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

      <section className="position-relative">
        <div className="container">
          <div className="row mt-4">
{/* <img src={dots} alt="" className="position-absolute" /> */}
            <div className="col-md-5">
                <img src={smo} alt="social-ads" className="img-fluid"/>
            </div>
            <div className="col-md-7">
              <h2 className="mb-3 fw-bold fs-1 pt-5">What is Social Media Management?</h2>
              <p className="text-black"style={{fontSize:"1.1rem"}}>
                Social Media Management is the process of managing your
                business's online presence on social media platforms like
                Instagram, Facebook, LinkedIn, Twitter, and YouTube. It involves
                creating, publishing, and analyzing content, as well as engaging
                with your audience. With Promozione, we not only manage your
                social media – we guarantee visible growth and engagement within
                6 months!
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
                <li>100% Guaranteed Social Media Growth in 6 Months</li>
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
          <path fill="#fff" fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,138.7C384,160,480,192,576,176C672,160,768,96,864,85.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </section>

      {/* Section 2: Our Services */}

<section className="revenue-section py-5 bg-white">
      <div className="container">
        <div className="row align-items-start">
          {/* Left Column */}
          <div className="col-lg-4 mb-4 mb-lg-0">
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
          <div className="col-lg-8">
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

<section className="revenue-funnel-section py-5">
      
      <div className="container-fluid m-0 p-0 d-flex flex-column flex-md-row align-items-start">
      <img src={funnel} alt="" className="img-fluid" width={"18%"} />
      

        {/* Content Column */}
        <div className="content-col ms-4 w-100">
          {funnelData.map((step, index) => (
            <div key={index} className="step-block">
              <h5 className="fw-bold mb-2">{step.title}</h5>
              <div className="row">
                {step.services.map((service, i) => (
                  <div key={i} className="col-md-6 mb-1 fw-semibold">
                  
                      {service} 
                   
                  </div>
                ))}
              </div>
              {index !== funnelData.length - 1 && (
                <hr style={{ borderTop: `2px solid ${step.color}`  }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>



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
