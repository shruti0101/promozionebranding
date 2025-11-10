import "./Style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ctaImage from "../../assets/ctaweb.webp";
import { Helmet } from "react-helmet";
import hello from "../../assets/about/hello.svg";
import line from "../../assets/about/line.svg";
import office from "../../assets/about/right-img.webp";
import video from "../../assets/about/playvideo.svg";
import img1 from "../../assets/about/img1.webp";
import img2 from "../../assets/about/img2.webp";
import shape from "../../assets/about/shapeabout.webp";
import OurMission from "./Ourmission";
import Testimonial from "../../components/Home/Landingpage/Testimonials";
import Form2 from "../../components/Home/Landingpage/Form2";
import Project from "../../components/Home/Landingpage/Project";

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
      "We help brands stand out through bold identities, compelling creative assets, and consistent visual storytelling across all platforms. From logos to brand kits, every element is crafted to communicate your unique value. Our web and app development services focus on speed, performance, and seamless user experience — ensuring your digital presence looks and works flawlessly on every device. With PromozioneBranding, you get design precision backed by powerful tech, We blend creativity with functionality to build digital experiences that not only look great but convert. Whether you're a startup or an established brand, we craft solutions tailored to your goals.",
    digital:
      "From 'Web Se Vyapaar Tak', we create intelligent digital campaigns that drive measurable ROI and strategically position your brand in front of your target audience. Our performance-driven approach blends creativity with data, helping you build visibility, engagement, and trust across platforms.With PromozioneBranding, you also get future-ready web and app development services that ensure lightning-fast speed, mobile responsiveness, and a seamless user experience across all devices. Whether you're launching a new product or scaling your business, we deliver digital solutions that grow with you.",
    development:
      "Our web and app development services are built for performance, scalability, and exceptional user experience across all devices. Whether it’s a dynamic website or a powerful mobile app, we ensure fast loading speeds, mobile responsiveness, and seamless functionality. With PromozioneBranding, you get a tech-driven approach that blends sleek design with clean code — tailored to your business goals. We don’t just build platforms; we craft digital experiences that engage users and convert traffic into results.",

    content:
      "We craft compelling content strategies, engaging videos, informative blogs, and striking visuals that connect with your audience and communicate real value. Every piece of content is designed to strengthen your brand voice and drive meaningful engagement across platforms. With PromozioneBranding, we ensure your content not only looks great — but also performs. From storytelling to SEO-focused writing, we help you build authority, trust, and conversions through smart, consistent content delivery.",
  };

  return (
    <>


    <Helmet>
  <title>Who We Are | Promozione Branding – Digital Marketing Experts</title>
  <meta
    name="description"
    content="Meet Promozione Branding: experts in SEO and digital marketing, committed to brand growth with data-driven results and proven client success stories."
  />
</Helmet>

      <div className="whoweare-section ">
    
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
          <h1 className="cinzel">
            <span className="text-white">Branding</span> <br />
               <span className="agency-heading">Agency</span>
          </h1>
       
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

      <div className="container py-2 mt-3">
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
              <Link to="/Contact" className="hover-link btn btn-outline ">
                Start Generating Leads in Just 7 Days!
                <span className="arrow-icon">→</span>
              </Link>
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
          <div className="marquee-content cinzel">
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
      <Project></Project>
      {/* <Founder></Founder> */}
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
