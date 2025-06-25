import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import cms from "../../assets/services/cms.png";
import ctaImage from "../../assets/formimg.webp"
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import {
  FaCogs,

  FaMobileAlt,


  FaPaintBrush,
  FaSearch,
  FaPlug,

} from "react-icons/fa";

import { FaCode, FaRocket, FaUsers, FaServer, FaGlobe, FaShieldAlt } from "react-icons/fa";

const CustomWeb = () => {
  const cardItems = [
    { title: "Custom Dashboards & Admin Panels", icon: "📊" },
    { title: "Multi-language Support", icon: "🌐" },
    { title: "Secure Payment Gateways", icon: "💳" },
    { title: "Booking Systems", icon: "📅" },
    { title: "Lead Management Systems", icon: "📇" },
    { title: "AI Chatbots,WhatsApp Integrations", icon: "🤖" },
  ];

const benefits = [
  { icon: <FaCode />, title: "100% Custom Design", desc: "No themes, no copies." },
  { icon: <FaUsers />, title: "India-based Team", desc: "Fast support & better market understanding." },
  { icon: <FaRocket />, title: "Conversion-Focused", desc: "More leads, better user experience." },
  { icon: <FaGlobe />, title: "Latest Technologies", desc: "React, Node, WordPress & more." },
  { icon: <FaServer />, title: "End-to-End Delivery", desc: "From domain to deployment – all done here." },
  { icon: <FaShieldAlt />, title: "Security & Speed", desc: "Built with performance & protection in mind." },
];

const floatingIcons = [
  { icon: <FaRocket />, style: { top: "10%", left: "5%" } },
  { icon: <FaCode />, style: { top: "20%", right: "10%" } },
  { icon: <FaShieldAlt />, style: { bottom: "15%", left: "10%" } },
  { icon: <FaUsers />, style: { bottom: "10%", right: "5%" } },
];

  const features = [
    {
      icon: <FaPaintBrush className="text-primary fs-3" />,
      title: "Custom UI/UX Design",
      desc: "Your brand, your story, your style.",
      aos: "fade-up",
    },
    {
      icon: <FaCode className="text-success fs-3" />,
      title: "Clean & Scalable Code",
      desc: "Built for future upgrades.",
      aos: "fade-up",
    },
    {
      icon: <FaRocket className="text-warning fs-3" />,
      title: "Fast-Loading Website",
      desc: "Better user experience + SEO.",
      aos: "fade-up",
    },
    {
      icon: <FaMobileAlt className="text-danger fs-3" />,
      title: "100% Mobile Responsive",
      desc: "Works on all screen sizes.",
      aos: "zoom-in",
    },
    {
      icon: <FaSearch className="text-info fs-3" />,
      title: "On-Page SEO Optimization",
      desc: "So Google bhi pasand kare.",
      aos: "zoom-in",
    },
    {
      icon: <FaPlug className="text-primary fs-3" />,
      title: "API Integrations",
      desc: "Payment, CRM, ERP, WhatsApp & more.",
      aos: "zoom-in",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Tilt Card Section */}
      <Tiltcard
        heading="Custom Web Development & Design Services in India – Tailored for Your Business"
        paragraph="Aapka business unique hai – toh aapki website bhi unique honi chahiye! At Promozione Branding Pvt. Ltd., we offer Custom Web Development & Design Services jo banaye aapke brand ki ek high-performing digital identity. !"
        cardItems={cardItems}
        services="custom web services"
      />

      {/* What is Custom Web Dev Section */}
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-5" data-aos="fade-right">
            <img
              src={cms}
              className="img-fluid "
              alt="content-marketing"
            />
          </div>
          <div className="col-md-7 pt-4" data-aos="fade-left">
            <h1 className="text-center">
              What is{" "}
              <span className="text-black">Custom Web Development?</span>
            </h1>
            <p className="pt-4 lh-lead fs-5">
              Custom web development ka matlab hai aisi website jo{" "}
              <strong>
                aapke business ke goals, audience aur brand personality
              </strong>{" "}
              ke according banayi jaati hai – bina kisi pre-made theme ke. Chahe
              aapko chahiye ek business website, e-commerce store,{" "}
              <strong>CRM-integrated system,</strong> ya custom portal – hum sab
              kuch from <strong>scratch</strong> design aur develop karte hain.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
<section
  className="py-5 position-relative text-dark"
  id="why-choose-us"
  style={{
    background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
    overflow: "hidden",
  }}
>
  {/* Decorative Blur Circles */}
  <div
    style={{
      position: "absolute",
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      background: "rgba(0, 188, 212, 0.2)",
      top: "-50px",
      left: "-50px",
      filter: "blur(60px)",
      zIndex: 0,
    }}
  />
  <div
    style={{
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "rgba(139, 195, 74, 0.2)",
      bottom: "-100px",
      right: "-100px",
      filter: "blur(80px)",
      zIndex: 0,
    }}
  />

  {/* Section Content */}
  <div className="container position-relative" style={{ zIndex: 1 }}>
    <h2 className="text-center fw-bold mb-4" data-aos="fade-down">
      Why Choose Our <strong style={{color:"#2548BD"}}>Custom Web Design Services?</strong> 
    </h2>
    <p
      className="text-center text-muted mb-5"
      data-aos="fade-in"
      style={{ maxWidth: "700px", margin: "0 auto" }}
    >
      We don’t believe in one-size-fits-all. Har project ke liye hum banate
      hain unique UI/UX, write clean code, aur integrate karte hain smart
      features jo aapko market mein standout banayein.
    </p>

    <div className="row g-4">
      {features.map((feature, idx) => (
        <div
          className="col-md-6 col-lg-4"
          key={idx}
          data-aos="fade-up"
          data-aos-delay={idx * 100}
        >
          <div className="p-4 border rounded shadow-sm bg-white h-100 text-center">
            <div className="mb-3">{feature.icon}</div>
            <h5 className="fw-semibold">{feature.title}</h5>
            <p className="text-muted small">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* section why need */}
<section
      className="position-relative py-5 text-dark"
      style={{
        background: "linear-gradient(135deg,rgb(226, 225, 225), #e9ecf3)",
        overflow: "hidden",
      }}
    >
      {/* SVG Background */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="position-absolute top-0 start-0 w-100"
        style={{ zIndex: 0, transform: "rotate(180deg)" }}
      >
        <path
          fill="#ffffff"
          fillOpacity="0.4"
          d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,112C840,107,960,117,1080,144C1200,171,1320,213,1380,234.7L1440,256V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
        ></path>
      </svg>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="position-absolute text-dark"
          style={{
            ...item.style,
            zIndex: 0,
            fontSize: "2rem",
            opacity: 0.4,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Heading */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold display-6">
            Why <span style={{ color: "#2548BD" }}>Promozione</span> is Your Ideal Web Development Partner
          </h2>
        </div>

        {/* Benefit Items - Alternate Layout */}
        <div className="row g-5 justify-content-center text-center" style={{ zIndex: 1 }}>
          {benefits.map((item, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div style={{ padding: "1rem" }}>
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    margin: "0 auto 1rem",
                    borderRadius: "50%",
                    background: "#f9a82622",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "#333",
                  }}
                >
                  {item.icon}
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom SVG Wave */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="position-absolute bottom-0 start-0 w-100"
        style={{ zIndex: 0 }}
      >
        <path
          fill="#ffffff"
          fillOpacity="0.4"
          d="M0,160L80,176C160,192,320,224,480,229.3C640,235,800,213,960,181.3C1120,149,1280,107,1360,85.3L1440,64V320H0Z"
        ></path>
      </svg>
    </section>


<Story></Story>
 <Form2
        heading="Let's Build Your Success Story Together"
        price="Your Growth is Our Guarantee."
        buttonText="Schedule a Free Demo Call!"
        image={ctaImage}
      ></Form2>
    </div>
  );
};

export default CustomWeb;
