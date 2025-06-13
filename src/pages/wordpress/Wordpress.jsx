import React, { useRef } from "react";
import "./Wordpress.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import wp1 from "../../assets/services/wp1.png";
import themesImg from "../../assets/services/themes-img.png";
import { FaCheckCircle } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/formimg.webp"
import Service from "../Servicecomponent/Service";
import wordpress from "../../assets/services/wordpress.webp"
const cardItems = [
  {
    icon: "🎨", // UI/UX Design
    title: "Custom UI/UX Design",
  },
  {
    icon: "⚡", // Speed & Performance
    title: "Speed & Performance Optimization",
  },
  {
    icon: "🔍", // SEO
    title: "Basic SEO Setup",
  },
  {
    icon: "🛒", // E-Commerce
    title: "E-Commerce Integration",
  },
  {
    icon: "🎓", // Training
    title: "Training & Handover",
  },
  {
    icon: "📱", // Responsive Design
    title: "Responsive Development",
  },
];


const steps = [
  {
    title: "Business Understanding",
    desc: "Sabse pehle hum aapke business, target audience, aur competition ko samajhte hain.",
  },
  {
    title: "Design Planning",
    desc: "Wireframes aur layout banake aapke approval ke liye bhejte hain.",
  },
  {
    title: "Website Development",
    desc: "WordPress CMS par SEO-friendly aur fast website build karte hain.",
  },
  {
    title: "Content Integration",
    desc: "Text, images, videos – sab kuch structured tarike se integrate karte hain.",
  },
  {
    title: "Speed & Device Testing",
    desc: "Website ko mobile, tablet, desktop par test karke bugs fix karte hain.",
  },
  {
    title: "Final Launch & Training",
    desc: "Site live hone ke baad hum aapko proper training dete hain for easy management.",
  },
];



// services
const services = [
  {
    icon: "bi-easel2", // Design
    title: "Custom UI/UX Design",
    description:
      "Har website ka design unique hota hai, built from scratch according to your business type and customer journey.",
  },
  {
    icon: "bi-phone", // Mobile / responsive
    title: "Responsive Development",
    description:
      "Chahe mobile ho ya tablet, aapki site har device par smoothly chalegi.",
  },
  {
    icon: "bi-speedometer2", // Performance
    title: "Speed & Performance Optimization",
    description:
      "Hum pages ko optimize karte hain taaki loading super fast ho – better SEO + better user experience.",
  },
  {
    icon: "bi-bar-chart-line", // SEO
    title: "Basic SEO Setup",
    description:
      "Meta tags, sitemaps, schema markup – sab kuch pre-installed hota hai taaki aapki site Google ke liye ready ho.",
  },
  {
    icon: "bi-ui-checks-grid", // Forms
    title: "Contact & Lead Forms",
    description:
      "Ham custom lead forms setup karte hain jo customer queries aur sales leads capture kar sakein.",
  },
  {
    icon: "bi-bag", // E-commerce
    title: "E-Commerce Integration",
    description:
      "Agar aap products sell karna chahte hain, to hum aapke liye WooCommerce store setup bhi karte hain.",
  },
];


const note=[
  "If your brand’s online footprint is huge, Enterprise SEO is your most powerful growth channel."

] 
const points=[
 " Aapka online presence strong banata hai",
"New customers attract karta hai",
"Search engines se free traffic laata hai",
"Lead generation aur conversions boost karta hai",
"Brand credibility is built karta hai"

]




const Wordpress = () => {
   useEffect(() => {
     AOS.init({
       duration: 1000,
       once: true,
       easing: "ease-in-out",
     });
   }, []);
 

  return (
    <div>
      <Tiltcard
        heading="WordPress Website Designing Services in India – Bilkul Business-Ready!
"
        paragraph="Apne business ke liye ek modern, fast aur SEO-friendly website chahiye? At Promozione Branding Pvt. Ltd., hum aapko provide karte hain Best WordPress website designing services jo sirf sundar nahi, balki smart bhi hoti hain – specially made for Indian SMEs.
Chahe aapka business service-based ho ya product-based, hum aapke liye ek aisi website banate hain jo leads laaye, customers banaye, aur brand ko boost kare. 

"
        cardItems={cardItems}
        services="our wordpress services"
      />

      {/* sestion 1  what is */}
      <section className="position-relative">
        <div className="container p-4">
          <div className="row mt-4">
            {/* <img src={dots} alt="" className="position-absolute" /> */}

    <div className="col-md-7" data-aos="fade up">
              <h1 className="fw-bold fs-1 p-2 ">
                {" "}
                What is WordPress Website design?
              </h1>
              <p className="text-black p-2" style={{ fontSize: "1.2rem" }}>
                WordPress is a world-famous CMS (content management system) hai
                – jisme aapki website banana easy, scalable aur secure hota hai.
                Hum WordPress par fully custom websites banate hain – bina kisi
                readymade theme ke. Hamare design ka focus hota hai: Stylish
                Look + Strong Backend Fast Loading Speed SEO-Ready Setup Mobile
                & Tablet Friendly Aapke Brand ke Hisab Se Look & Feel Aur haan –
                aap khud bhi website easily manage kar sakte hain, bina kisi
                coding ke!
              </p>
            </div>



            <div className="col-md-5" data-aos="zoom-in">
              <img src={wp1} alt="social-ads" className="img-fluid" />
            </div>
        
          </div>
        </div>
      </section>

      {/* section 2 why choose */}


      <section className="demand-section py-5 position-relative text-white">
      {/* Background Shape */}
      <div className="background-shape"></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-7" data-aos="fade-right">
            <h2 className="display-6 fw-bold mb-4">
              Why Choose Our < span className="text-highlight">WordPress Website </span>  Services ?
            </h2>
            <p className="lead mb-4">
              Har business alag hota hai, isliye uske liye website bhi unique honi chahiye. Hum deliver karte hain customized WordPress websites jo aapke business ke goals ke saath match karti hain.
            </p>

            <ul className="list-unstyled fs-5">
              <li className="mb-1">
                <FaCheckCircle className="text-success me-2" />
                Custom design jo aapke brand se match kare

              </li>
              <li className="mb-1">
                <FaCheckCircle className="text-success me-2" />
               Fast loading website jo Google aur users dono ko pasand aaye

              </li>
              <li className="mb-1">
                <FaCheckCircle className="text-success me-2" />
               Fully responsive design – desktop se mobile tak perfect

              </li>
              <li className="mb-1">
                <FaCheckCircle className="text-success me-2" />
              Basic SEO setup – so aapki site rank kare

              </li>
              <li className="mb-1">
                <FaCheckCircle className="text-success me-2" />
               Secure, spam-protected structure

              </li>
                <li className="mb-1">
                <FaCheckCircle className="text-success me-2" />
              Easy-to-update backend – no tech knowledge required


              </li>
                <li className="mb-1">
                <FaCheckCircle className="text-success me-2" />
               E-commerce support with WooCommerce


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
 Ready to Build Your WordPress Website?

      </h4>
      <p className="mb-3 text-dark fs-6">Aapka business deserves karta hai ek strong digital presence.
 Let’s make a website that delivers results!</p>
      <p className="mb-4 text-secondary">
     We’re not just designers—we’re your digital growth partners. Our project focus is on ROI, conversion, and customer trust.

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

    {/* our services */}

       <Service
      title="Our  wordpress services includes"
      subtitle="Why a WordPress Website is Important for Your Business
      "
        note={note}
      points={points}
    
      services={services}
      image={wordpress}
    />


    {/* process section */}
<section className="process-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5" data-aos="fade-down">
          Our <span>WordPress</span> Design Process
        </h2>
        <div className="row align-items-center">
          {/* Left Side: Steps */}
          <div className="col-md-6" data-aos="fade-right">
            <div className="steps-wrapper">
              {steps.map((step, index) => (
                <div className="step-item" key={index}>
                  <div className="step-num">{index + 1}</div>
                  <div className="step-content">
                    <h5>{step.title}</h5>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src={themesImg}
              alt="WordPress Themes"
              className=" img-mockup"
            />
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

    </div>
  );
};

export default Wordpress;
