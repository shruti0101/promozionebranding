import Tiltcard from "../../TiltCardHome/Tiltcard";
import cms from "../../assets/services/cms.avif";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaPencilRuler, FaServer, FaPlug, FaMobileAlt, FaRocket } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import ctaImage from "../../assets/formimg.webp"
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";

const Cms = () => {
const cardItems = [
  {
    title: "Custom UI/UX Design",
    icon: "🎨", // Paint palette for design
  },
  {
    title: "CMS Setup & Configuration",
    icon: "🛠️", // Tools = setup/configuration
  },
  {
    title: "Speed & Performance Optimization",
    icon: "⚡", // Lightning bolt = speed
  },
  {
    title: "Training & Handover",
    icon: "💻", // Laptop = tech training
  },
  {
    title: "Security & Backup Setup",
    icon: "🔐", // Lock = security
  },
  {
    title: "Responsive Development",
    icon: "📱", // Mobile phone = responsive
  },
];


const steps = [
  {
    icon: <FaLaptopCode />, title: "Step 1: Requirement Gathering",
    desc: " Tell us your goals, vision, and must-have features."
  },
  {
    icon: <FaPencilRuler />, title: "Step 2: CMS Recommendation",
    desc: " We suggest the best CMS platform based on your business needs."
  },
  {
    icon: <FaServer />, title: "Step 3: Design & Development",
    desc: " Custom UI + powerful backend. Fully mobile-friendly."
  },
  {
    icon: <FaPlug />, title: "Step 4: Content Migration & Setup",
    desc: " We shift or upload your content, images, blogs, etc."
  },
  {
    icon: <FaMobileAlt />, title: "Step 5: Training & Handover",
    desc: " You’ll get a full walkthrough of how to use your CMS like a pro."
  },
  {
    icon: <FaRocket />, title: "Step 6: Launch & Support",
    desc: " Go live with confidence. We’re here for post-launch fixes too."
  },
];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const tiltElements = document.querySelectorAll(".tilt");
    VanillaTilt.init(tiltElements, {
      max: 15,
      speed: 400,
      scale: 1.05,
      glare: true,
      "max-glare": 0.3,
    });
  }, []);

  return (
    <div>
      <Tiltcard
        heading="CMS Website Development Services in India – Take Control of Your Website Content
"
        paragraph="Why depend on developers every time you want to update your website?
With our CMS Website Development Services, you get a user-friendly, dynamic, and fully manageable website – no coding needed. Bas login karo, update karo, publish karo. 
At Promozione Branding Pvt. Ltd., we build custom CMS websites that are fast, secure, responsive, and made for content-first growth.
"
        cardItems={cardItems}
      />

      {/* section 2 */}

      <section className="php-section py-5 position-relative overflow-hidden">
        {/* Background Blob */}
        <div className="blob-bg"></div>

        <div className="container">
          <div className="row align-items-center flex-wrap-reverse">
            {/* Text Content */}
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="php-heading">
                What is <span style={{ color: "#2548BD" }}> CMS Website?</span>{" "}
              </h2>
              <p className="php-desc">
                CMS (Content Management System) lets you create, update, and
                manage your website content without touching a single line of
                code. Whether you’re a blogger, a business owner, or an
                e-commerce brand – CMS gives you full control over your website.
              </p>
              <ul className="php-points">
                {[
                  "WordPress",
                  "Shopify",
                  "Joomla",
                  "Drupal",
                  "Custom-built CMS for niche needs"
                ].map((item, index) => (
                  <li
                    data-aos="fade-left"
                    data-aos-delay={index * 200}
                    key={index}
                  >
                    <span className="icon">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="php-note">
                <strong>
                  Yeh website aapki digital army ban jaati hai – ready to
                  attract, engage, and convert.
                </strong>
              </p>
            </div>

            {/* Tilted SVG */}
            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              data-aos="zoom-in"
            >
              <div className="php-illustration tilt">
                <img src={cms} alt="PHP Development" className="svg-float" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* section 3 why choose */}

         <section className="demand-section py-5 position-relative text-white">
            {/* Background Shape */}
            <div className="background-shape"></div>
      
            <div className="container position-relative">
              <div className="row align-items-center">
                {/* Left Column */}
                <div className="col-md-7">
                  <h2 className="display-6 fw-bold mb-4">
                    Why Choose Our<span className="text-highlight"> CMS Development </span>Services?
                  </h2>
                  
               <p className="fw-semibold">
                 If you can use MS Word, you can use a CMS. Itna easy hai.
                 Update content, images, and blogs from your laptop or mobile. No dev dependency.
               </p>
      
                  <ul className="list-unstyled fs-5">
                    <li className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
       Edit Anytime, Anywhere
      
                    </li>
                    <li className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
               User-Friendly Admin Panel
      
                    </li>
                    <li className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
             Secure & Scalable

      
                    </li>
                    <li className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
              SEO-Ready Framework
      
                    </li>
                    <li className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
               Plugin & Integration Friendly
      
                    </li>
                     <li className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
       Cost-Effective Maintenance
      
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
        Let’s Make Website Management Easy for You 

            </h4>
            <p className="mb-3 text-dark fs-6">Tired of saying “developer ko bolna padega”?
 Ab apni website ka full control aapke haath mein.
 </p>
            <p className="mb-4 text-secondary">
            Smart. Simple. Scalable. That’s CMS with Promozione.

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
              🚀Boost Your Digital Karma
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


          {/* section 4 process */}


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
            Our <span style={{ color: "#2548BD" }}>CMS Development</span> Process
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
        heading="Ready to Own Your Website Like a Pro?"
        price="Your Growth is Our Guarantee."
        buttonText="Book Your Free Consultation Now!"
        image={ctaImage}
      ></Form2>
    </div>
  );
};

export default Cms;
