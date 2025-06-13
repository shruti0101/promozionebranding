import Tiltcard from "../../TiltCardHome/Tiltcard";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import shopify from "../../assets/services/shopify.webp";
import Service from "../Servicecomponent/Service";
import image from "../../assets/services/shopify1.png"
import Process from "../Process/Process";
import funnel from "../../assets/services/funnel.webp"
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import ctaImage from "../../assets/formimg.webp"
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
const Shopify = () => {
  const cardItems = [
    {
      title: "Custom Shopify Store Design",
      icon: "🧪", // Lab flask — symbolizes analysis/testing
    },
    {
      title: "Product Page Design",
      icon: "🛠️", // Tools — perfect for tech/configuration
    },
    {
      title: "Mobile-Responsive Design",
      icon: "🎯", // Target — keyword precision and strategy
    },
    {
      title: "Theme Setup & Customization",
      icon: "📊", // Bar chart — content strategy and performance
    },
    {
      title: "Payment & Shipping Integration",
      icon: "🌍", // Globe — perfect for geographic/multi-location SEO
    },
    {
      title: "SEO Optimization",
      icon: "🔗", // Link — directly represents link building
    },
  ];

  const services = [
  {
    icon: "bi-bullseye",
    title: "Advanced SEO Audits",
    description:
      "Deep technical + content audits using enterprise-grade tools like SEMrush, Ahrefs, Screaming Frog, and Google Search Console.",
  },
  {
    icon: "bi-search",
    title: "Scalable Technical SEO",
    description:
      "Crawl budget optimization, site architecture planning, mobile-friendliness, indexation fixes & Core Web Vitals improvement.",
  },
  {
    icon: "bi-envelope-paper",
    title: "Keyword Strategy for Scale",
    description:
      "Target long-tail, transactional, branded & local keywords across hundreds of pages.",
  },
  {
    icon: "bi-person-plus",
    title: "Enterprise Content Strategy",
    description:
      "Content hubs, pillar pages, product content, localization, and programmatic SEO.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Multi-location SEO",
    description:
      "Rank your brand in 10, 50, or 100+ cities using smart local SEO strategies + Google Business Profiles.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Data-Driven Reporting",
    description:
      "Track keyword movement, ROI, traffic behavior, conversions & technical health—delivered monthly.",
  },
  {
    icon: "bi-diagram-3",
    title: "White Hat Link Building at Scale",
    description:
      "Authority-building via content outreach, PR, guest posts, and high DA backlinks.",
  },
];



const points=[
 " D2C & Fashion Brands",
"Home-Bakers & Boutique Stores",
"Gift Shops & Custom Products",
"Beauty, Wellness & Ayurvedic Brands",
"Digital & Downloadable Product Sellers",
"B2B or Niche Shopify Stores",

]
const note=[
  "Hum sirf design nahi karte — hum aapke Shopify store ko revenue machine banate hain."
] 

const funnelData = [
  {
    title: "Step 1: Discovery & Audit",
    services: [
      " We analyze your site structure, content depth, backlinks & competitor landscape.",
  
    ],
    color: "#2563eb",
  },
  {
    title: "Step 2: Strategy Blueprint",
    services: [
      " We create a page-level SEO roadmap based on priority, difficulty, and revenue opportunity.",
    ],
    color: "#16a34a",
  },
  {
    title: "Step 3: Technical Implementation",
    services: [
      " Fix crawling, speed, indexation, schema, and more – backed by dev collaboration.",
    ],
    color: "#f59e0b",
  },
  {
    title: "Step 4: Content Optimization",
    services: [
      " Refresh & expand existing content + add high-performance pages.",
    ],
    color: "#ec4899",
  },
  {
    title: "Step 5:Link Building & Authority Growt",
    services: [
      " Earn backlinks from premium, relevant sources – at scale.",
    ],
    color: "#0ea5e9",
  },

   {
    title: "Step 6: Monitoring & Scaling",
    services: [
      " Track performance, adapt, and grow into new markets or verticals.",
    ],
    color: "#222",
  },
];

const features = [
  "100% In-house UI/UX + eCommerce ",
  " 100% mobile-first, SEO-ready Shopify design",
  " Store setup with marketing & conversion in mind",
  "Multi-language, multi-currency store options",
  "Post-launch support for upgrades, fixes & marketing",
  "Dedicated SEO manager & regular strategy reviews",
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
        heading="Shopify Web Designing Services in India – Launch Your Online Store with Style

"
        paragraph="Chahti hai aapki online store bhi ekdum premium dikhe aur sales laaye?
 Welcome to Promozione Branding Pvt. Ltd., where we turn your eCommerce dreams into high-converting, beautiful Shopify stores 
Whether you're starting fresh or revamping your old store, our Shopify Web Designing Services in India are built to impress both Google aur customers.
"
        cardItems={cardItems}
        services="Social Media Management Services "
      />

      {/* what is shopify */}

      <section className="php-section py-5 position-relative overflow-hidden">
        {/* Background Blob */}
        <div className="blob-bg"></div>

        <div className="container-fluid">
          <div className="row align-items-center flex-wrap-reverse">
            {/* Text Content */}
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="php-heading">
                What is{" "}
                <span style={{ color: "#2548BD" }}>Web Designing?</span>{" "}
              </h2>
              <p className="php-desc">
                Shopify is the #1 platform for eCommerce businesses – trusted by
                over 4 million stores worldwide. It's fast, secure, scalable,
                and super easy to manage.
              </p>
              <ul className="php-points">
                {[
                  "No Coding Required – Manage products, orders & customers with zero tech stress",
                  "Mobile-First Design – 80% log phone se shopping karte hain, hum uska bhi dhyan rakhte hain",
                  "Built-In SEO Features – Better visibility = more organic traffic",
                  " Fast & Secure Checkout – Payment gateway se leke SSL tak – sab kuch included",
                  " Scalable Infrastructure – Grow from 10 to 10,000 products without breaking",
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
                <img
                  src={shopify}
                  alt="PHP Development"
                  className="svg-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* services */}

 <Service
      title="Our Shopify Web Designing Services Include:"
      subtitle="Hum sirf design nahi karte — hum aapke Shopify store ko revenue machine banate hain.



      "
        points={points}
        note={note}
    
    
      services={services}
      image={image }
    />

{/* our process */}
<Process
title="Our  Shopify Web Designing Process" image={funnel} data={funnelData} 

></Process>


{/* why choose us */}

<WhyChoose
  title="Why  Store Design?"
  highlightedText="Promozione for Shopify"
  features={features}
  ctaTitle="Ready to Launch Your Shopify Store?
"
  ctaSubtext="Stop guessing. Start scaling."
  ctaParagraph="Whether you're a first-time founder or an existing business going online, our Shopify Web Designing Services will give your brand the edge to stand out and sell more."
  ctaButtonText="Let’s Get Started"
/>


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

export default Shopify;
