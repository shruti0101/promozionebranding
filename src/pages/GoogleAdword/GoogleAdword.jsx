import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";
import Process from "../Process/Process";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";

import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";

import ad2 from "../../assets/services/ad2.webp"
import ad1 from "../../assets/services/googlead.webp"

const GoogleAdword = () => {
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

  const cardItems = [
    {
      title: "CRM Audit & Health Check",
      icon: "💼", // Briefcase – Professional service-based work
    },
    {
      title: "Workflow & Automation Setup",
      icon: "🛒", // Shopping cart – Directly represents e-commerce
    },
    {
      title: "Lead & Pipeline Optimization",
      icon: "📍", // Location pin – Ideal for local targeting
    },
    {
      title: "Custom Dashboards & Reports",
      icon: "🤝", // Handshake – Business partnerships/lead generation
    },
    {
      title: "CRM Integration",
      icon: "📅", // Calendar – Great for promoting events
    },
    {
      title: "Data Cleanup & Migration",
      icon: "🎓", // Graduation cap – Education, courses, webinars
    },
  ];

  const funnelData = [
    {
      title: "Step 1: Business & Goal Understanding",
      services: [
        " Aapka target customer, product/service aur campaign objective samajhna.",
      ],
      color: "#2563eb",
    },
    {
      title: "Step 2: Keyword & Competitor Research",
      services: [
        " Jo log aapka product Google pe search kar rahe hain, unko target karte hain.",
      ],
      color: "#16a34a",
    },
    {
      title: "Step 3: Campaign Setup & Ad Design",
      services: [
        "  Search ads, display banners, YouTube videos – sab create karke launch karte hain.",
      ],
      color: "#f59e0b",
    },
    {
      title: "Step 4: Conversion Tracking Setup",
      services: [
        "  Lead forms, WhatsApp clicks, calls – sab track hota hai with proper tools.",
      ],
      color: "#ec4899",
    },
    {
      title: "Step 5: Optimization & Scaling",
      services: [
        "  Low CTR? High CPC? We fix it. High performance? We scale it.",
      ],
      color: "#0ea5e9",
    },

    {
      title: "Step 6: Reporting & ROI Analysis",
      services: [
        " Aapko milta hai clear, easy-to-read report with results that matter.",
      ],
      color: "#222",
    },
  ];

const services = [
  {
    icon: "bi-search",
    title: "Google Search Ads",
    description:
      "Capture high-intent users searching for your services with keyword-targeted text ads on Google’s search results.",
  },
  {
    icon: "bi-image-alt",
    title: "Google Display Ads",
    description:
      "Reach a wider audience with visually engaging banner ads across millions of websites and apps in the Display Network.",
  },
  {
    icon: "bi-cart-check",
    title: "Google Shopping Ads",
    description:
      "Showcase product images, prices, and reviews directly in search results to drive clicks and boost eCommerce sales.",
  },
  {
    icon: "bi-play-btn-fill",
    title: "YouTube Video Ads",
    description:
      "Deliver impactful video ads on YouTube to build brand awareness, explain products, and increase engagement.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Remarketing Campaigns",
    description:
      "Reconnect with previous website visitors through strategic remarketing ads that follow them across the web.",
  },
  {
    icon: "bi-stars",
    title: "Performance Max Campaigns",
    description:
      "Run AI-powered ads across all Google channels — Search, Display, YouTube, Gmail & more — to maximize performance.",
  },
  {
    icon: "bi-geo-alt",
    title: "Local Search Ads",
    description:
      "Boost visibility in your area with ads on Google Maps and location-based search results — ideal for local businesses.",
  },

];




  const points = [
    " Service businesses (plumber, CA, clinic, agency, etc.)",
    "E-commerce stores (sell more, faster)",
    "Local businesses (Google Map Ads + Search Ads combo)",
    "B2B lead generation (targeted audience = high ticket sales)",
    "Event promotions, webinars, and course launches.",
  ];
  const note = [
    "Jo bhi business ho, PPC ads se instant push milta hai.",
  ];

  const features = [
    "Laser-targeted keyword planning",
    " High-converting ad copy & creatives",
    " Search, Display, Shopping, Video & Remarketing Ads",
    " Conversion tracking setup (Google Tag Manager + Analytics)",
    " A/B Testing & Budget Optimization",
    " Weekly reports + ROI analysis",
    "Results within days – not months!",
  ];

  return (
    <>
      <Tiltcard
        heading="Google Ads / PPC Services in India – Get Instant Leads & ROI-Driven Results




"
        paragraph="Thak gaye ho wait karke? With our Google Ads / PPC (Pay-Per-Click) Services, you can start getting qualified leads and real customers from Day 1.
At Promozione Branding Pvt. Ltd., hum banate hain high-converting PPC campaigns jo sirf traffic nahi, results laate hain – fast!




"
        cardItems={cardItems}
      />

      {/* what is section */}

      <section className="php-section py-5 position-relative overflow-hidden">
        {/* Background Blob */}
        <div className="blob-bg"></div>

        <div className="container-fluid">
          <div className="row align-items-center flex-wrap-reverse">
            {/* Text Content */}
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="php-heading">
                What is{" "}
                <span style={{ color: "#2548BD" }}>
                  Google Ads / PPC Advertising?
                </span>{" "}
              </h2>
              <p className="php-desc">
                Google Ads ya PPC ek paid advertising method hai jahan aap{" "}
                <strong>Google search results, YouTube, Gmail,</strong> aur
                partner websites par apni ad dikha sakte ho – aur
                <strong>sirf clicks ke liye pay karte ho.</strong>
                Agar aapko chahiye:
              </p>
              <ul className="php-points d-none d-lg-block">
                {[
                  "Quick visibility",
                  "Instant ROI",
                  "Fast lead generation",
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
              <p className="d-none d-lg-block">
                {" "}
                <strong >Toh Google Ads aapka shortcut hai success tak.</strong>
              </p>
            </div>

            {/* Tilted SVG */}
            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              data-aos="zoom-in"
            >
              <div className="php-illustration tilt">
                <img src={ad2} alt="google adword" className="svg-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}

      <WhyChoose
        title="Why Choose
"
        highlightedText="Our PPC Management Services?
"
        features={features}
        para="Chahe aapka budget ₹5K ho ya ₹5L – hum har rupee ka maximum return laate hain.
.
"
        ctaTitle="Want results-driven PPC for your business? Let’s talk.


"
        ctaSubtext="Let’s Run Ads That Work"
        ctaParagraph="Google Ads mein paisa daalna easy hai... lekin paisa wapas lana strategy se hota hai.

 "
        ctaButtonText="Let’s Get Started"
      />

      {/* our process */}
      <Process
        title="Our Google Ads Process
"
        image={funnel}
        data={funnelData}
      ></Process>

      {/* our services */}

      <Service
        title="Our Google Ads Services Include:"
        subtitle="Who Should Run Google Ads?




      "
        points={points}
        note={note}
        services={services}
        image={ad1}
      />

      {/*  other parts*/}
      <Story></Story>
      <Form2
        heading="Let's Build Your Success Story Together"
        price="Your Growth is Our Guarantee."
        buttonText="Click Now, Thank Us Later."
        image={ctaImage}
      ></Form2>
    </>
  );
};

export default GoogleAdword;

//  GoogleAdword
