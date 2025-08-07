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
import crm2 from "../../assets/services/crm1.webp";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import crm from "../../assets/services/CRM.webp"

const Crm = () => {

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
  icon: "bi-journal-text",
  title: "CRM Audit & Health Check",
  description:
    "Full review of current setup, usage gaps, data quality, and user behavior.",
},
  {
    icon: "bi-bullseye",
    title: "Workflow & Automation Setup",
    description:
      "Smart automations for lead scoring, follow-ups, reminders, and task flows.",
  },
  {
    icon: "bi-geo-alt",
    title: "Lead & Pipeline Optimization",
    description:
      "Customize stages, filters, deal flows, and contact segmentation.",
  },
  {
    icon: "bi-bar-chart-line",
    title: "Custom Dashboards & Reports",
    description:
      "Real-time insights into sales, revenue, deals, and agent performance.",
  },
  {
    icon: "bi-gear",
    title: "CRM Integration",
    description:
      "Connect your CRM to marketing tools, WhatsApp, email platforms, landing pages, etc.",
  },
  {
    icon: "bi-sliders",
    title: "Data Cleanup & Migration",
    description:
      "Fix duplicates, outdated data, and migrate to a cleaner structure.",
  },
  {
    icon: "bi-graph-up",
    title: "Team Training & Adoption",
    description:
      "CRM toh powerful hai… but only if your team actually uses it. We train, onboard, and guide.",
  },
 
];


const points=[
 " Sales team not updating data?",
"Leads falling through cracks?",
"Reporting takes forever?",
"You’re using only 20% of CRM features?",
"CRM feels like a burden, not a solution?"

]
const note=[
  "CRM toh powerful hai… but only if your team actually uses it. We train, onboard, and guide."

] 

    const features = [
    "Business-First Approach (not tech-first)",
    " Automation + Sales Process Experts",
    " Affordable for Indian startups & SMEs",
    " Post-optimization support & troubleshooting",
    " Custom solutions – not one-size-fits-all",
    " Increase lead conversion Save time with automation",
    "Reduce manual work Increase lead conversion",
  ];


 
  return (
    <>
      <Tiltcard
        heading="CRM Optimization Services – Boost Sales, Streamline Operations & Grow Smarter



"
        paragraph="Your CRM isn’t just a database – it’s your sales engine. But if it feels slow, messy, or underused, it's time for a serious upgrade.
At Promozione Branding Pvt. Ltd., we specialize in CRM Optimization Services that transform your CRM from “just a tool” into a revenue-driving machine 





"
        cardItems={cardItems}
      />

      {/* what is section */}

      <section className="php-section py-5 position-relative overflow-hidden">
        {/* Background Blob */}
        <div className="blob-bg"></div>

        <div className="container">
          <div className="row align-items-center flex-wrap-reverse">
            {/* Text Content */}
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="php-heading">
                What is{" "}
                <span style={{ color: "#2548BD" }}>
                  CRM Optimization?
                </span>{" "}
              </h2>
              <p className="php-desc">
                CRM Optimization means improving how your CRM works for your
                business — from setup to workflows, automation, user adoption,
                and integration with your marketing + sales. In simple terms:
                Less chaos, more clarity Less data entry, more deals closed Less
                manual work, more automation
              </p>
              <ul className="php-points">
                {[
                  "Less chaos, more clarity",
                  "Less data entry, more deals closed",
                  "Less manual work, more automation",
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
                <img src={crm2} alt="google adword" className="svg-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}

       <WhyChoose
        title="Why Choose
"
        highlightedText="Promozione for CRM Optimization"
        features={features}
        para="We don’t just improve CRM tools – we optimize outcomes.
CRM Optimization = More Sales, Less Effort
"
        ctaTitle="Let’s Make Your CRM Work Like a Sales Pro

"
        ctaSubtext="Let’s Run Ads That Work"
        ctaParagraph="Your CRM should work for you – not the other way around. With Promozione’s CRM Optimization Services, you’ll get the most out of your investment and help your sales team convert more leads, faster.
 "
        ctaButtonText="Let’s Get Started"
      />

      {/* our process */}
<Process
title="Our  CRM Optimization Process" image={funnel} data={funnelData} 

></Process>


{/* our services */}

 <Service
      title="Our CRM Optimization Services Include:"
      subtitle="Signs You Need CRM Optimization



      "
        points={points}
        note={note}
    
    
      services={services}
      image={crm }
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

export default Crm;
