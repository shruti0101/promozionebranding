import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/formimg.webp";
import Process from "../Process/Process";
import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import adword from "../../assets/services/adword.webp";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import image from "../../assets/services/adword1.webp"


const GoogleAds = () => {
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
      title: "Service businesses",
      icon: "💼", // Briefcase – Professional service-based work
    },
    {
      title: "E-commerce stores",
      icon: "🛒", // Shopping cart – Directly represents e-commerce
    },
    {
      title: "Local businesses",
      icon: "📍", // Location pin – Ideal for local targeting
    },
    {
      title: "B2B lead generation",
      icon: "🤝", // Handshake – Business partnerships/lead generation
    },
    {
      title: "Event promotions",
      icon: "📅", // Calendar – Great for promoting events
    },
    {
      title: "Course launches & Webinars",
      icon: "🎓", // Graduation cap – Education, courses, webinars
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
  icon: "bi-journal-text",
  title: "Strategic Content Planning",
  description:
    "Create high-impact content calendars aligned with SEO goals to attract and convert your audience consistently.",
},
  {
    icon: "bi-bullseye",
    title: "Targeted ROI Strategy",
    description:
      "Maximize returns with data-driven campaigns focused on low CPC and high conversion value.",
  },
  {
    icon: "bi-geo-alt",
    title: "Local & International SEO",
    description:
      "Build visibility across regions with optimized campaigns for local maps and global search reach.",
  },
  {
    icon: "bi-bar-chart-line",
    title: "Transparent Performance Reports",
    description:
      "Get clear, concise monthly reports on traffic, conversions, rankings, and technical health.",
  },
  {
    icon: "bi-gear",
    title: "Conversion Tracking & Analytics",
    description:
      "Implement accurate tracking via Google Tag Manager and Analytics to measure real ROI.",
  },
  {
    icon: "bi-sliders",
    title: "A/B Testing & Budget Scaling",
    description:
      "Refine strategies with experiments and optimize budget allocation for best performing channels.",
  },
  {
    icon: "bi-graph-up",
    title: "Monthly Data-Driven Insights",
    description:
      "Use real-time metrics to adjust and scale efforts—covering keywords, traffic, and behavior.",
  },
  {
    icon: "bi-shield-check",
    title: "No Long-Term Contracts",
    description:
      "Flexible engagement based on performance—proving results without lock-in commitments.",
  },
];


const points=[
 " National or global brands with large websites",
"SaaS companies with feature-based landing pages",
"E-commerce sites with 500+ SKUs",
"News/media publishers with massive content libraries",
"Enterprises switching to headless CMS or React-based frameworks"

]
const note=[
  "Chahe aapka budget ₹5K ho ya ₹5L – hum har rupee ka maximum return laate hain."

] 
  return (
    <div>
      <Tiltcard
        heading="Google Ads / PPC Services in India – Get Instant Leads & ROI-Driven Results


"
        paragraph="Thak gaye ho wait karke? With our Google Ads / PPC (Pay-Per-Click) Services, you can start getting qualified leads and real customers from Day 1.
At Promozione Branding Pvt. Ltd., hum banate hain high-converting PPC campaigns jo sirf traffic nahi, results laate hain – fast!



"
        cardItems={cardItems}
      />

      {/* section 2 what is */}

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
                Google Ads ya PPC ek paid advertising method hai jahan aap
                Google search results, YouTube, Gmail, aur partner websites par
                apni ad dikha sakte ho – aur sirf clicks ke liye pay karte ho.
                Agar aapko chahiye: Quick visibility Instant ROI Fast lead
                generation Toh Google Ads aapka shortcut hai success tak.
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
            </div>

            {/* Tilted SVG */}
            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              data-aos="zoom-in"
            >
              <div className="php-illustration tilt">
                <img src={adword} alt="google adword" className="svg-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 why choose*/}

      <WhyChoose
        title="Why Choose Our 
"
        highlightedText="PPC Management Services?"
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
title="Our  Shopify Web Designing Process" image={funnel} data={funnelData} 

></Process>


{/* our services */}

 <Service
      title="Our  PPC Management Services includes:"
      subtitle="Hum PPC campaigns sirf run nahi karte – hum optimize karte hain har click ke value ke liye. From audience targeting to ad creatives, we manage everything end-to-end.




      "
        points={points}
        note={note}
    
    
      services={services}
      image={image }
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

export default GoogleAds;
