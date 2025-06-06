import "./Style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";

import ctaImage from "../../assets/formimg.webp";
import star from "../../assets/about/star.svg";
import hello from "../../assets/about/hello.svg";
import line from "../../assets/about/line.svg";
import office from "../../assets/about/right-img.webp";
import video from "../../assets/about/playvideo.svg";
import img1 from "../../assets/about/img1.webp";
import img2 from "../../assets/about/img2.jpg";
import shape from "../../assets/about/shapeabout.webp";
import OurMission from "./Ourmission";
import Founder from "./Founder";
import Testimonial from "../../components/Home/Landingpage/Testimonials";
import Form2 from "../../components/Home/Landingpage/Form2";


const Whoweare = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const [activeTab, setActiveTab] = useState("branding");

  const tabData = {
    branding:
      "We help brands stand out with bold identities, creative assets, and consistent visual storytelling across platforms.Our web and app development services ensure performance, responsiveness, and seamless user experience across all devices. with PromozioneBranding Our web and app development services ensure performance, responsiveness, and seamless user experience across all devices. with PromozioneBranding",
    digital:
      "From SEO to social media marketing, we run intelligent campaigns that drive ROI and position your brand in front of the right audience.,Our web and app development services ensure performance, responsiveness, and seamless user experience across all devices ensure performance, responsiveness, and seamless user experience across all devices. with PromozioneBranding.",
    development:
      "Our web and app development services ensure performance, responsiveness, and seamless user experience across all devices,Our web and app development services ensure performance, responsiveness, and seamless user experience across all devices ensure performance, responsiveness, and seamless user experience across all devices. with PromozioneBranding.",
    content:
      "We create compelling content strategies, videos, blogs, and visuals that truly resonate with your customers and communicate value.,Our web and app development services ensure performance, responsiveness, and seamless user experience across all devices ensure performance, responsiveness, and seamless user experience across all devices. with PromozioneBranding.",
  };

  return (
    <>
      <div className="whoweare-section">
        <img
          src={star}
          className="star top-left"
          alt="star"
          data-aos="fade-down"
        />
        <img
          src={star}
          className="star top-right"
          alt="star"
          data-aos="fade-down-left"
        />
        <img
          src={hello}
          className="hello-img star"
          alt="hello"
          data-aos="zoom-in"
        />
        <img
          src={line}
          className="dashed-line"
          alt="dashed line"
          data-aos="fade-left"
        />
        <img src={video} className="video" alt="video" data-aos="fade-up" />

        <div className="text-section" data-aos="fade-right">
          <h1>
            <span className="text-white">Branding</span>
          </h1>
          <h1 className="agency-heading">Agency</h1>
          <p className="description">
            We are a dynamic motion, digital, and{" "}
            <strong>branding agency</strong>
            <br />
            based in <strong>Delhi</strong>, dedicated to crafting innovative
          </p>
        </div>

        <div className="image-section" data-aos="fade-left">
          <img src={office} className="office-img img-fluid" alt="Office" />
        </div>
      </div>

      <div className="container py-2">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6">
            <div className="about-text">
              <h1>
                Empowering Businesses with 100% Guaranteed Digital Success
              </h1>
              <p>
                At Promozione Branding Pvt. Ltd., we are not just another
                digital agency — we are your growth partners. With a mission to
                revolutionize the digital landscape, we specialize in turning
                brands into market leaders through our result-driven digital
                marketing services. Our journey began with a simple vision – to
                provide 100% guaranteed digital growth to small and medium
                businesses without false promises or excuses. Today, we've
                helped 120+ brands achieve their business goals through our
                proven digital strategies across Delhi NCR, Gurugram, Noida,
                Faridabad, and Ghaziabad.
              </p>
              <a href="#contact" className="hover-link">
                Start Generating Leads in Just 7 Days!
                <span className="arrow-icon">→</span>
              </a>
            </div>
          </div>

          {/* Image Section - Side by Side */}
          <div className="col-md-6">
            <div className="image-row">
              <img src={img1} alt="Creative 1" className="side-image" />
              <img src={img2} alt="Creative 2" className="side-image" />
            </div>
          </div>
        </div>
      </div>

      {/* slider */}

      <div className="marquee-wrapper ">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>Design your future with Promozione Branding!</span>
            <span>Design your future with Promozione Branding!</span>
            <span>Design your future with Promozione Branding!</span>
            <span>Design your future with Promozione Branding! </span>
          </div>
        </div>
      </div>

      {/* tabs */}

      <div className="whatwedo-section position-relative">
        <h2>What We Do</h2>

        <img
          src={shape}
          className="position-absolute "
          style={{ top: 0, left: 0 }}
        ></img>
        <div className="tabs">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="tab-content">{tabData[activeTab]}</div>
      </div>

      {/* form */}



      <OurMission></OurMission>
      <Founder></Founder>
      <Testimonial></Testimonial>
      <Form2
        heading="Let's Build Your Success Story Together"
        price="Your Growth is Our Guarantee."
        buttonText="Book Your Free Consultation Now!"
        image={ctaImage}
      ></Form2>
    </>
  );
};

export default Whoweare;
