
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from '../../TiltCardHome/Tiltcard';
import "./Style.css"
import VanillaTilt from "vanilla-tilt";
import php from "../../assets/services/php.webp"
import { FaCheckCircle } from "react-icons/fa";
import { FaLaptopCode, FaPencilRuler, FaServer, FaPlug, FaMobileAlt, FaRocket } from "react-icons/fa";
import Story from '../Story/Story';
import ctaImage from "../../assets/ctaweb.webp"
import { Link } from 'react-router-dom';
import Form2 from '../../components/Home/Landingpage/Form2';
import { Helmet } from "react-helmet";

const Php = () => {

const steps = [
  {
    icon: <FaLaptopCode />, title: "Step 1: Briefing & Planning",
    desc: "Aapke goals, audience, aur business model ko samajhna – sabse pehla step."
  },
  {
    icon: <FaPencilRuler />, title: "Step 2: Wireframe & Design",
    desc: "Custom UI banate hain with modern layouts and easy navigation."
  },
  {
    icon: <FaServer />, title: "Step 3: PHP Backend Development",
    desc: "Core PHP, Laravel, ya CodeIgniter ka use karke secure backend create karte hain."
  },
  {
    icon: <FaPlug />, title: "Step 4: API Integrations",
    desc: "Need WhatsApp? Booking engine? CRM? Sab kuch connect karte hain seamlessly."
  },
  {
    icon: <FaMobileAlt />, title: "Step 5: Testing on Real Devices",
    desc: "Mobile, tablet, laptop – sab par test karte hain before launch."
  },
  {
    icon: <FaRocket />, title: "Step 6: Launch & Handover",
    desc: "Live hone ke baad proper training bhi dete hain – so you’re always in control."
  },
];

    
const cardItems = [
  {
    title: "100% Custom Code ",
    icon: "🧩", // Puzzle piece = modular, clean code
  },
  {
    title: "Scalable Development ",
    icon: "📈", // Growth chart
  },
  {
    title: "Ultra-Fast Delivery ",
    icon: "🚀", // Rocket = speed
  },
  {
    title: "Affordable Pricing ",
    icon: "💰", // Money bag = budget-friendly
  },
  {
    title: "Reliable Support ",
    icon: "🛠️", // Wrench/hammer = fixing bugs
  },
  {
    title: "AI Chatbots & WhatsApp Integrations",
    icon: "🤖", // Robot = AI chatbot
  },
];


    useEffect(() => {
    AOS.init({ duration: 300, once: true });

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


<Helmet>
  <title>PHP Development Company: Custom PHP Services</title>
  <meta
    name="description"
    content="We provide custom PHP development services to design, develop, and deploy custom web applications using the PHP programming language."
  />
</Helmet>


 <Tiltcard
        heading="PHP Website Development Services in India – Fast, Secure & Fully Custom
"
        paragraph="Looking for a powerful, fast, and scalable website for your business? Our PHP Website Development Services are tailor-made to deliver just that – no slow-loading, buggy websites allowed!
At Promozione Branding Pvt. Ltd., we build dynamic, SEO-friendly websites using core PHP and modern PHP frameworks like Laravel, CodeIgniter
"
        cardItems={cardItems}
        services="php web services"
      />


{/* scetion 2 */}

 <section className="php-section py-5 position-relative overflow-hidden">
      {/* Background Blob */}
      <div className="blob-bg"></div>

      <div className="container">
        <div className="row align-items-center flex-wrap-reverse">
          {/* Text Content */}
          <div className="col-md-6" data-aos="fade-right">
            <h2 className="php-heading">What is <span style={{color:"#2548BD"}}>PHP Website Development?</span> </h2>
            <p className="php-desc">
              PHP (Hypertext Preprocessor) is a server-side scripting language jo duniya ke most powerful web applications ko run karta hai – like Facebook, Wikipedia, and WordPress!
            </p>
            <ul className="php-points">
              {[
                "Tailor-made features (jo aapki business needs se match karein)",
                "Clean and scalable code (future upgrades? No problem!)",
                "Superfast performance (Google bhi impress ho jaaye)",
                "High-level security and data protection",
              ].map((item, index) => (
                <li data-aos="fade-left" data-aos-delay={index * 200} key={index}>
                  <span className="icon">✅</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="php-note">
              <strong>Yeh website aapki digital army ban jaati hai – ready to attract, engage, and convert.</strong>
            </p>
          </div>

          {/* Tilted SVG */}
          <div className="col-md-6 text-center mb-4 mb-md-0" data-aos="zoom-in">
            <div className="php-illustration tilt">
              <img
                src={php}
                alt="PHP Development"
                className="svg-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>


{/* section 3 why choose*/}

     <section className="demand-section py-5 position-relative text-white">
      {/* Background Shape */}
      <div className="background-shape"></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-7">
            <h2 className="display-6 fw-bold mb-4">
              Why Choose Our<span className="text-highlight"> PHP Development </span>Services?
            </h2>
            
         <p className="fw-semibold">We don’t do cookie-cutter websites. We build smart solutions that deliver real results.
            We code it like it's 2025 — future-ready, scalable, and smooth!
         </p>

            <ul className="list-unstyled fs-5">
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
       Custom PHP architecture & logic

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
              Unique UI/UX design aligned with your brand

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
              Admin panels to manage everything easily

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
              Mobile-friendly layouts that look great everywhere

              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
           API integrations (payment gateway, WhatsApp, CRM, etc.)

              </li>
               <li className="mb-2">
                <FaCheckCircle className="text-success me-2" />
      SEO-ready structure with lightning-fast load time

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
     Let’s Build Something Amazing with PHP
      </h4>
      <p className="mb-3 text-dark fs-6">Call us now, ya bas form bhar do – hum aapko call back karenge... bina “hold music” ke </p>
      <p className="mb-4 text-secondary">
       Chahe aap startup ho ya growing brand – aapke liye ek strong PHP website game-changer ban sakti hai.
      </p>
   <Link to="/Contact" >
<button  className="btn btn-primary w-100 fw-semibold"
        style={{
          borderRadius: "12px",
          fontSize: "16px",
          padding: "12px 20px",
        }}>

        🚀Boost Your Digital Karma
</button>
      
   
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
            Our <span style={{ color: "#2548BD" }}>PHP Development</span> Process
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
        buttonText="Book Your Free Consultation Now!"
        image={ctaImage}
      ></Form2>

    </div>
  )
}

export default Php;