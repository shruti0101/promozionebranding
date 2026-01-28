import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";
import Process from "../Process/Process";
// import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import SEO from "../../components/helmet/Helmet";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import crm2 from "../../assets/services/crm1.webp";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import digital2 from "../../assets/services/digital2.webp"

const Aidigital = () => {

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
    title: "SEO (Search Engine Optimization)",
    icon: "🔍", // Magnifying glass — best fit for SEO/discovery
  },
  {
    title: "Paid Ads (Google, Meta, YouTube)",
    icon: "💰", // Money bag — represents ad spend, ROI
  },
  {
    title: "Social Media Marketing",
    icon: "📱", // Mobile phone — represents social platforms
  },
  {
    title: "E-commerce & D2C Marketing",
    icon: "🛍️", // Shopping bags — ecommerce & online shopping
  },
  {
    title: "Content Marketing",
    icon: "📝", // Memo — writing, blogs, website copy
  },
  {
    title: "Email, SMS & WhatsApp Automation",
    icon: "📬", // Inbox — messaging & automation
  },
];

const funnelData = [
  {
    title: "Step 1: Brand & Market Analysis",
    services: [
      "We study your brand, competitors, industry benchmarks, and current digital presence.",
    ],
    color: "#2563eb",
  },
  {
    title: "Step 2: Channel & Audience Strategy",
    services: [
      "We choose the right mix of SEO, social, ads, and content based on your audience behavior.",
    ],
    color: "#16a34a",
  },
  {
    title: "Step 3: Campaign Execution",
    services: [
      "SEO, Google Ads, Meta Ads, Social Media – all executed with custom creatives & copy.",
    ],
    color: "#f59e0b",
  },
  {
    title: "Step 4: Analytics, Tracking & Reporting",
    services: [
      "We set up tracking for leads, clicks, conversions and share detailed monthly reports.",
    ],
    color: "#ec4899",
  },
  {
    title: "Step 5: Optimization & Scale-Up",
    services: [
      "What works is scaled. What doesn’t is improved — all based on real performance data.",
    ],
    color: "#0ea5e9",
  },
  {
    title: "Step 6: Continuous Support & Growth Planning",
    services: [
      "We stay with you post-launch to support, tweak, and strategize your next growth phase.",
    ],
    color: "#6366f1", // Indigo
  },
];


const services = [
  {
    icon: "bi-search", // Magnifying glass = Search/SEO
    title: "SEO (Search Engine Optimization)",
    description:
      "Rank higher on Google and get organic traffic that actually converts.",
  },
  {
    icon: "bi-badge-ad", // Ad badge = Paid marketing
    title: "Paid Ads (Google, Meta, YouTube)",
    description:
      "Performance-driven campaigns designed to bring in leads and sales at the lowest CPA.",
  },
  {
    icon: "bi-people", // Community = Social Media
    title: "Social Media Marketing",
    description:
      "Daily content, reels, and strategies to grow your audience and build brand loyalty.",
  },
  {
    icon: "bi-bag-check", // Shopping bag = E-commerce
    title: "E-commerce & D2C Marketing",
    description:
      "Product ads, retargeting, and funnels that directly boost your online store sales.",
  },
  {
    icon: "bi-file-earmark-text", // Document = Blog & content
    title: "Content Marketing",
    description:
      "Website content, blogs, and infographics crafted to inform, engage, and rank well.",
  },
  {
    icon: "bi-chat-dots", // Chat bubble = Messaging platforms
    title: "Email, SMS & WhatsApp Automation",
    description:
      "Smart automation to follow up, nurture leads, and stay in touch where it matters most.",
  },
  {
    icon: "bi-graph-up-arrow", // Graph = Analytics
    title: "Analytics & Performance Tracking",
    description:
      "Get full visibility into what’s working — and what needs scaling.",
  },
];



const points=[
 " Local businesses & SMEs",
"E-commerce & D2C startups",
"Coaching, consulting & service providers",
"B2B & SaaS companies",
"Personal brands & influencers",
"Healthcare, real estate, education & more"

]
const note=[
  "If your business wants more leads, traffic, visibility or sales — we’ve got the roadmap."

] 

    const features = [
    "Results, not just reports – every campaign we run is ROI-focused",
    " Pan-India audience expertise – we speak the language of Bharat",
    " Creative + analytical approach – killer visuals + data-backed strategy",
    " Affordable plans for startups, SMEs, and fast-growing D2C brands",
    " End-to-end services – strategy, execution, tracking, and optimization",

  ];


 
  return (
    <>
 
  <SEO
        title="ai digital marketing services in delhi|ai digital marketing agency in delhi"
        description="Promozione Branding is ai digital marketing agency in Delhi,AI digital marketing services in Delhi to boost ROI with data-driven automation, smarter targeting, and optimized customer engagement."
      />



      <Tiltcard
        heading="AI Digital Marketing Services in India – Drive Growth, Not Just Clicks 




"
        paragraph="Your customers are online — the question is: are you visible to them?
 At Promozione Branding Pvt. Ltd., we offer full-suite Digital Marketing Services to help you attract, engage, and convert your ideal audience — consistently, creatively, and cost-effectively.
From startups to scaling brands, our campaigns are crafted to deliver real ROI, not just vanity metrics.




"
        cardItems={cardItems}
      />

      {/* what is section */}

      <section className="php-section bg-white py-5 position-relative overflow-hidden">
        {/* Background Blob */}
        <div className="blob-bg"></div>

        <div className="container">
          <div className="row align-items-center flex-wrap-reverse">
            {/* Text Content */}
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="php-heading">
                What is{" "}
                <span style={{ color: "#2548BD" }}>
                 AI Digital Marketing?

                </span>{" "}
              </h2>
              <p className="php-desc">
              <strong>Digital Marketing</strong>   is the art (and science) of promoting your business online using:
Search engines like Google
Social media platforms like Facebook, Instagram, and LinkedIn
Email, SMS & WhatsApp marketing
Websites, content, videos & more
It’s not just about running ads — it’s about building a brand that grows in traffic, leads, and sales — <strong>month after month.</strong> 

              </p>
           
            </div>

            {/* Tilted SVG */}
            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              data-aos="zoom-in"
            >
              <div className="php-illustration tilt">
                <img src={digital2} alt="google adword" className="svg-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}

       <WhyChoose
        title="Why Choose
"
        highlightedText=" Promozione for AI Digital Marketing?"
        features={features}
        para="We don’t do jugaad. We do digital the right way — with strategy, skill, and speed.
"
        ctaTitle="Ready to Go Digital with Promozione?

"
        ctaSubtext="Let’s Run Ads That Work"
        ctaParagraph="Whether you’re launching a startup, scaling your ecommerce store, or just wanting more qualified leads, our Digital Marketing Services are built to grow your business confidently.

 "
        ctaButtonText="Let’s Get Started"
      />

      {/* our process */}
<Process
title="Our AI Digital Marketing Process" image={funnel} data={funnelData} 

></Process>


{/* our services */}

 <Service
      title="Our Core AI Digital Marketing Services:
"
      subtitle="Signs You Need AI Digital Marketing Services



      "
        points={points}
        note={note}
    
    
      services={services}
      image={crm2 }
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

export default Aidigital;
