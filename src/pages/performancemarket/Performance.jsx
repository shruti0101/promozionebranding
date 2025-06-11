import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Style.css";
import { FaArrowRight } from "react-icons/fa";
import ctaImage from "../../assets/Formimg.webp";
import Form2 from "../../components/Home/Landingpage/Form2";
import bg from "../../assets/approach/wrapper-bg.png";
import google from "../../assets/specialized/Google-AdWord-course.png"
import Story from "../Story/Story"

import { useRef } from "react";

const cardItems = [
  {
    icon: "📱", // Reflects mobile & social platforms
    title: "Social Media Ads",
    description: "Tool for professional newsletters",
  },
  {
    icon: "🎯", // Represents targeting (remarketing precision)
    title: "Remarketing Campaigns",
    description: "Platform for multichannel marketing automation",
  },
  {
    icon: "📈", // Suggests analytics & conversion improvements
    title: "Conversion Rate Optimization",
    description: "Solutions for press releases and media monitoring",
  },
  {
    icon: "🛒", // Classic e-commerce icon
    title: "E-Commerce Performance Marketing",
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

  return (
    <div
      className="col-md-6 mb-4 d-flex justify-content-center"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="custom-card text-center p-3" ref={cardRef}>
        <div className="icon-wrapper mb-3">{icon}</div>
        <h5 className="mb-2 ">{title}</h5>
        <p className="text-muted small">{description}</p>
      </div>
    </div>
  );
};

const Performance = () => {
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

        <div className="content-overlay container py-5 position-absolute top-0 start-50 translate-middle-x">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h1 className="fw-bold mb-3">
                Performance Marketing Services in India – Unlock Guaranteed
                Growth with Promozione Branding Pvt. Ltd.
              </h1>
              <p className="text-muted">
                Are you tired of investing in marketing campaigns without seeing
                tangible results? At Promozione Branding Pvt. Ltd., we offer
                Performance Marketing Services in India with 100% Guaranteed
                Results. We don’t just promise – we deliver measurable growth,
                leads, and revenue that takes your business to new heights.
              </p>
              <button className="nav-btn text-capitalize">
                lets get started
              </button>
            </div>

            <div
              className="col-md-6 d-flex justify-content-center"
              onMouseMove={handleWrapperMove}
              onMouseLeave={handleWrapperLeave}
            >
              <div className="tilt-skew-wrapper">
                <div
                  className="tilt-container"
                  ref={wrapperRef}
                  style={{ backgroundImage: `url(${bg})` }}
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

      {/* Services Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2
            className="text-center fw-bold fs-2 mb-5"
            style={{ color: "#2548BD" }}
          >
            Our Performance Marketing Services Include
          </h2>
          <div className="row g-4">
            {[
              {
                title: "Google Ads Management",
                desc: "Optimized PPC campaigns to drive traffic & conversions.",
                icon: google,
              },
              {
                title: "Facebook & Instagram Ads",
                desc: "Engaging creatives that target your ideal audience.",
                icon: "https://cdn-icons-png.flaticon.com/512/145/145802.png",
              },
              {
                title: "LinkedIn Ads",
                desc: "B2B lead generation by targeting decision-makers.",
                icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
              },
              {
                title: "YouTube Ads",
                desc: "Boost visibility with video ad campaigns.",
                icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
              },
              {
                title: "Remarketing Campaigns",
                desc: "Re-engage potential customers effectively.",
                icon: "https://cdn-icons-png.flaticon.com/512/1042/1042455.png",
              },
              {
                title: "E-Commerce Marketing",
                desc: "Increase online sales with product-based strategies.",
                icon: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
              },
              {
                title: "Conversion Rate Optimization",
                desc: "Enhance landing pages for higher conversions.",
                icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
              },
            ].map((item, i) => (
              <div
                className="col-md-3"
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
              >
                <div className="p-4 shadow-sm h-100 rounded service-box text-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mb-3"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 my-3 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#2548BD" }}>
            Why Choose Our Performance{" "}
            <span className="text-black">Marketing Services?</span>
          </h2>
          <div className="row text-center g-4">
            {[
              "100% Guaranteed ROI",
              "Transparent Campaign Reporting",
              "Dedicated Marketing Experts",
              "High-Quality Lead Generation",
              "Customized Campaign Strategies",
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

      {/* Execution Steps */}
      <section className="py-5 bg-light execution-section">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#2548BD" }}>
            How We Execute Performance Marketing for Guaranteed Results
          </h2>
          <div className="row g-4">
            {[
              {
                step: "Step 1",
                title: "Understanding Your Business Goals",
                desc: "Our experts conduct in-depth research to understand your business objectives, target audience, and competitive landscape.",
                icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              },
              {
                step: "Step 2",
                title: "Campaign Strategy Development",
                desc: "We design customized performance marketing campaigns tailored to your business goals.",
                icon: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
              },
              {
                step: "Step 3",
                title: "Ad Creation & Setup",
                desc: "Our creative team designs high-converting ad creatives that grab attention and drive action.",
                icon: "https://cdn-icons-png.flaticon.com/512/11393/11393221.png",
              },
              {
                step: "Step 4",
                title: "Campaign Optimization",
                desc: "We continuously monitor, optimize, and adjust campaigns to maximize ROI.",
                icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
              },
              {
                step: "Step 5",
                title: "Performance Reporting",
                desc: "Get detailed weekly and monthly reports with insights into campaign performance.",
                icon: "https://cdn-icons-png.flaticon.com/512/3601/3601030.png",
              },
              {
                step: "Step 6",
                title: "Result Delivery",
                desc: "We don’t just deliver clicks – we deliver leads, sales, and revenue growth.",
                icon: "https://cdn-icons-png.flaticon.com/512/753/753318.png",
              },
            ].map((item, i) => (
              <div
                className="col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
              >
                <div className="d-flex p-4 shadow-sm rounded bg-white h-100 step-box">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="me-3"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">
                      {item.step}: {item.title}
                    </h6>
                    <p className="text-muted small mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="zoom-in">
            <button className="nav-btn">Request Free Audit</button>
          </div>

          {/* Why It Matters */}
          <h2
            className="text-center fw-bold mt-5 mb-4"
            style={{ color: "#2548BD" }}
          >
            Why Performance Marketing Matters for Your Business?
          </h2>
          <div className="row text-center g-4">
            {[
              "Instant Lead Generation",
              "Higher ROI Compared to Traditional Marketing",
              "Targeted Audience Reach",
              "Budget-Friendly Advertising",
              "Measurable Results in Real-Time",
              "Scalability and Flexibility",
            ].map((point, idx) => (
              <div
                className="col-md-4"
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={`${idx * 100}`}
              >
                <div className="px-4 py-3 bg-white rounded shadow-sm h-100 matter-box">
                  <h6 className="fw-bold text-dark">{point}</h6>
                </div>
              </div>
            ))}
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
    </div>
  );
};

export default Performance;
