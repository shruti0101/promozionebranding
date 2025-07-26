import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";
import Process from "../Process/Process";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import adword from "../../assets/services/adword.webp";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import image from "../../assets/services/adword1.webp";
import "./Internet.css";

const Internet = () => {
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
    title: "Search Engine Optimization (SEO)",
    icon: "🔍", // Magnifying glass – Perfect for search and SEO
  },
  {
    title: "Social Media Marketing",
    icon: "📱", // Mobile phone – Represents social apps like Instagram/Facebook
  },
  {
    title: "Pay-Per-Click Advertising",
    icon: "💰", // Money bag – Paid ads and clicks
  },
  {
    title: "Video & Content Marketing",
    icon: "🎬", // Clapperboard – Ideal for video/content creation
  },
  {
    title: "Email Marketing & Automation",
    icon: "✉️", // Envelope – Classic email symbol
  },
  {
    title: "Performance Analytics & Reporting",
    icon: "📊", // Bar chart – Analytics, data, reports
  },
];


  const features = [
    "Laser-targeted keyword planning",
    " High-converting ad copy & creatives",
    "Search, Display, Shopping, Video & Remarketing Ads",
    "Conversion tracking setup (Google Tag Manager + Analytics)",
    "A/B Testing & Budget Optimization",
    "Weekly reports + ROI analysis",
    "Results within days – not months!",
  ];
const funnelData = [
  {
    title: "Step 1: Audit & Strategy",
    services: [
      "We perform a deep audit of your brand’s current presence, competitors, and audience behavior to craft a result-oriented strategy.",
    ],
    color: "#2563eb",
  },
  {
    title: "Step 2: Channel Planning",
    services: [
      "We select the most impactful marketing channels (Google, Meta, LinkedIn, Email, etc.) based on your goals and buyer journey.",
    ],
    color: "#16a34a",
  },
  {
    title: "Step 3: Campaign Execution",
    services: [
      "Our team launches high-performance creatives across selected channels, including SEO content, PPC ads, email workflows, and more.",
    ],
    color: "#f59e0b",
  },
  {
    title: "Step 4: Ongoing Optimization",
    services: [
      "We monitor, test, and tweak campaigns weekly to improve performance metrics like CTR, conversions, and cost per lead/sale.",
    ],
    color: "#ec4899",
  },
  {
    title: "Step 5: Reporting",
    services: [
      "You receive transparent monthly reports covering KPIs, ROI, channel performance, and actionable next steps.",
    ],
    color: "#0ea5e9",
  },
  {
    title: "Step 6: Scaling & Retargeting",
    services: [
      "We double down on what works — scaling high-performing campaigns and re-engaging cold leads with precision retargeting tactics.",
    ],
    color: "#222222",
  },
];



  const services = [
    {
      icon: "bi-journal-text",
      title: "Search Engine Optimization (SEO)",
      description:
        "Rank higher on Google, drive organic traffic & get found by people who are already searching for what you offer.",
    },
    {
      icon: "bi-bullseye",
      title: "Social Media Marketing",
      description:
        "Create buzz, build followers, and boost engagement across Instagram, Facebook, LinkedIn & more.",
    },
    {
      icon: "bi-geo-alt",
      title: "Pay-Per-Click Advertising (PPC)",
      description:
        "Run laser-targeted ads on Google & Meta platforms to get instant traffic & qualified leads.",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Email Marketing & Automation",
      description:
        "Nurture leads, upsell, and keep your customers engaged with personalized email journeys.",
    },
    {
      icon: "bi-gear",
      title: "Video & Content Marketing",
      description:
        "From Reels to blogs – we create content that educates, entertains, and converts.",
    },
  
    {
      icon: "bi-graph-up",
      title: "Monthly Data-Driven Insights",
      description:
        "Use real-time metrics to adjust and scale efforts—covering keywords, traffic, and behavior.",
    },

  ];

  const points = [
    " Startups wanting to scale fast",
    "Local businesses wanting to go national",
    "D2C brands looking for more sales",
    "B2B businesses generating quality leads",
    "Coaches, consultants & solopreneurs building authority",
  ];
  const note = [
    "Hum sirf traffic nahi laate – leads aur results bhi laate hain.",
  ];
  return (
    <div>
      <Tiltcard
        heading="Internet Marketing Services in India – Be Everywhere Your Audience Is 



"
        paragraph="Aaj kal sab kuch online hai… Toh marketing kyun nahi?
 At Promozione Branding Pvt. Ltd., we help businesses like yours grow online visibility, traffic, and sales with result-driven Internet Marketing Services.
From SEO to social media, from paid ads to content our full-stack digital team ensures your brand is always one click away 




"
        cardItems={cardItems}
      />

      {/* section 2 what is */}

  <section className="php-section py-5 position-relative overflow-hidden">
  {/* Background Blob */}
  <div className="blob-bg"></div>

  <div className="container">
    <div className="row align-items-center flex-column-reverse flex-md-row">
      {/* Text Content */}
      <div className="col-md-6 text-center text-md-start" data-aos="fade-right">
        <h2 className="php-heading">
          What is <span style={{ color: "#2548BD" }}>Internet Marketing?</span>
        </h2>
        <p className="php-desc">
          Internet Marketing (a.k.a. Digital Marketing) is promoting your business online through multiple digital channels like: <br />
          <strong>Search Engines</strong> (Google, Bing), <strong>Social Media</strong> (Instagram, Facebook, LinkedIn), <strong>Email Marketing</strong>, <strong>Paid Ads</strong> (Google Ads, Meta Ads), <strong>Content Marketing</strong> (Blogs, Videos, etc.) <br />
          It’s the modern way of reaching your ideal audience – wherever they are scrolling, searching, or shopping.
        </p>
      </div>

      {/* Illustration */}
      <div className="col-md-6 text-center mb-4 mb-md-0" data-aos="zoom-in">
        <div className="php-illustration tilt">
          <img src={adword} alt="google adword" className="img-fluid svg-float" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* section 3 why choose*/}

      <WhyChoose
        title="Why Choose 
"
        highlightedText="Internet Marketing Services?"
        features={features}
        ctaTitle="Ready to Launch Your Shopify Store?
"
        para="Hum PPC campaigns sirf run nahi karte – hum optimize karte hain har click ke value ke liye. From audience targeting to ad creatives, we manage everything end-to-end."
        ctaSubtext="Let’s Run Ads That Work"
        ctaParagraph="Google Ads mein paisa daalna easy hai... lekin paisa wapas lana strategy se hota hai.
Want results-driven PPC for your business? "
        ctaButtonText="Let’s Get Started"
      />

      {/* our process */}
      <Process
        title="  Internet Marketing Process"
        image={funnel}
        data={funnelData}
      ></Process>

      {/* our services */}

      <Service
        title="Our Internet Marketing Services Include:"
        subtitle="We are suitable for




      "
        points={points}
        note={note}
        services={services}
        image={image}
      />

      {/*  other parts*/}
      <Story></Story>
      <Form2
        heading="Let's Build Your Success Story Together"
        price="Your Growth is Our Guarantee."
        buttonText="Click Now, Thank Us Later."
        image={ctaImage}
      ></Form2>
    </div>
  );
};

export default Internet;
