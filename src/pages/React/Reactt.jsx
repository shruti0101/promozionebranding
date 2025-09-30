import Tiltcard from "../../TiltCardHome/Tiltcard";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Style.css";
import { Helmet } from "react-helmet";
import {
  FaLaptopCode,
  FaPencilRuler,
  FaServer,
  FaPlug,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ctaImage from "../../assets/ctaweb.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import react from "../../assets/services/react.webp";
const Reactt = () => {
  const cardItems = [
    {
      title: "Custom React UI Design",
      icon: "🖌️", // Paintbrush = precision design
    },
    {
      title: "Full Stack React Development",
      icon: "🧑‍💻", // Developer emoji = coding both frontend & backend
    },
    {
      title: "Custom API Integration",
      icon: "🧬", // DNA = data connection, integration logic
    },
    {
      title: "Progressive Web App (PWA) Development",
      icon: "📲", // Phone with arrow = installable web apps
    },
    {
      title: "React Migration Services",
      icon: "🔄", // Circular arrows = transition/migration
    },
    {
      title: "Maintenance & Support",
      icon: "🛡️", // Shield = protection, support, uptime
    },
  ];

  const steps = [
    {
      icon: <FaLaptopCode />,
      title: "Step 1: Project Discovery & Planning",
      desc: "  Understanding your product goals, users, and technical needs.",
    },
    {
      icon: <FaPencilRuler />,
      title: "Step 2: UI/UX Designing",
      desc: " Crafting a sleek and intuitive interface (Figma or Adobe XD).",
    },
    {
      icon: <FaServer />,
      title: "Step 3: React Frontend Development",
      desc: "  Component-based, scalable code using React.js.",
    },
    {
      icon: <FaPlug />,
      title: "Step 4: API & Backend Integration",
      desc: "  Connecting your app to the world—securely and efficiently.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Step 5: Testing & QA",
      desc: "  Bug-hunting + performance optimization for smooth launch.",
    },
    {
      icon: <FaRocket />,
      title: "Step 6: Deployment & Support",
      desc: "  Go live with confidence. We’re here for post-launch support too.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>


<Helmet>
  <title>Trusted React JS Development Company</title>
  <meta
    name="description"
    content="Promozione Branding is a leading ReactJS development company known for providing ultimate solutions with virtual DOM, reusable components, JSK, and server-side rendering."
  />
</Helmet>

      <Tiltcard
        heading="React Web Development Services – Build Fast, Scalable & Modern Web Apps

"
        paragraph="Want a lightning-fast, user-friendly, and scalable web app? React is the answer — and Promozione Branding Pvt. Ltd. is your expert development partner!
We offer custom React Web Development Services in India that combine speed, performance, and stunning UI to help your business shine online.
Let’s make your website or web app modern AF.

"
        cardItems={cardItems}
      />


      

      {/* section 2 what is  */}
      <section className="react-hero-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-7 text-content" data-aos="fade-right">
              <h2>
                Why <span className="highlight">React</span> for Web
                Development?
              </h2>
              <p>
                React (by Facebook) is one of the most powerful JavaScript
                libraries for building interactive,{" "}
                <strong>high-performance frontends.</strong>
                Yeh technology hai developers ki duniya ka Shah Rukh Khan —
                evergreen & crowd favourite.
              </p>
              <ul className="features">
                {[
                  "Superfast UI – Load times lightning jaisi",
                  " Reusable Components – Code once, use everywhere",
                  " Stable & Secure – Regular updates by a huge community",
                  " Mobile-Friendly – React works well on all devices",
                  "Custom-built SEO-Friendly (when optimized properly!) CMS for niche needs",
                  " Easy Integration with APIs, CMS & Databases",
                ].map((item, i) => (
                  <li key={i}> {item}</li>
                ))}
              </ul>
            </div>

            {/* React Logo */}
            <div
              className="col-md-5 text-center logo-wrapper"
              data-aos="zoom-in"
            >
              <div className="react-logo-glow">
                <img src={react} alt="React Logo" className="react-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

   
      {/* section 5 our process */}

      <section
        className="position-relative py-5 text-dark"
        style={{
          background: "linear-gradient(135deg, #e7f0fd, #ffffff)",
          overflow: "hidden",
        }}
      >
        <div className="container position-relative">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-6">
              Our <span style={{ color: "#2548BD" }}>React Development</span>{" "}
              Process
            </h2>
          </div>

          <div className="row gx-5 gy-5 w-100 justify-content-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="col-md-4 d-flex flex-column align-items-center text-center"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "#1e3c72",
                    fontSize: "2rem",
                    color: "#fff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  {step.icon}
                </div>
                <h5 className="fw-bold mb-2 text-primary">{step.title}</h5>
                <p className="text-muted small">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
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

export default Reactt;
