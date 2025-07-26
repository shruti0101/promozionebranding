import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";
import Process from "../Process/Process";
import { FaCheckCircle } from "react-icons/fa";

import Tiltcard from "../../TiltCardHome/Tiltcard";
import b2bweb1 from "../../assets/services/b2b.webp";

import WhyChoose from "../WHYCHOOSE/WhyChoose";
import b2bweb from "../../assets/services/b2bweb1.webp";

const B2bweb = () => {


  const cardItems = [
    {
      title: "SEO-Optimized Structure",
      icon: "💼", // Briefcase – Professional service-based work
    },
    {
      title: "Industry-Specific Development",
      icon: "🛒", // Shopping cart – Directly represents e-commerce
    },
    {
      title: "Conversion-Driven CTAs",
      icon: "📍", // Location pin – Ideal for local targeting
    },
    {
      title: "Custom Dashboards & Reports",
      icon: "🤝", // Handshake – Business partnerships/lead generation
    },
    {
      title: "Data Cleanup & Migration",
      icon: "📅", // Calendar – Great for promoting events
    },
    {
      title: "Content Strategy Support",
      icon: "🎓", // Graduation cap – Education, courses, webinars
    },
  ];
const funnelData = [
  {
    title: "Step 1: Business & Goal Understanding",
    services: [
      "Aapka target customer, product/service aur campaign objective samajhna.",
    ],
    color: "#2563eb",
  },
  {
    title: "Step 2: Keyword & Competitor Research",
    services: [
      "Jo log aapka product Google pe search kar rahe hain, unko target karte hain.",
    ],
    color: "#16a34a",
  },
  {
    title: "Step 3: Campaign Setup & Ad Design",
    services: [
      "Search ads, display banners, YouTube videos – sab create karke launch karte hain.",
    ],
    color: "#f59e0b",
  },
  {
    title: "Step 4: Conversion Tracking Setup",
    services: [
      "Lead forms, WhatsApp clicks, calls – sab track hota hai with proper tools.",
    ],
    color: "#ec4899",
  },
  {
    title: "Step 5: Optimization & Scaling",
    services: [
      "Low CTR? High CPC? We fix it. High performance? We scale it.",
    ],
    color: "#0ea5e9",
  },
  {
    title: "Step 6: Reporting & ROI Analysis",
    services: [
      "Aapko milta hai clear, easy-to-read report with results that matter.",
    ],
    color: "#222",
  },

];


  const services = [
    {
      icon: "bi-journal-text",
      title: "Industry-Specific Development & UX",
      description:
        "Custom layouts that align with your niche (tech, finance, logistics, etc.) and audience expectations.",
    },
    {
      icon: "bi-bullseye",
      title: "User Journey Mapping",
      description:
        "We plan every page to guide decision-makers from curiosity to conversion.",
    },
    {
      icon: "bi-geo-alt",
      title: "SEO-Optimized Structure",
      description:
        "Get found on Google by companies looking for your services.",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Mobile-Responsive, Fast-Loading",
      description:
        "Professional, polished experience across all screens & devices.",
    },
    {
      icon: "bi-gear",
      title: "Conversion-Driven CTAs",
      description:
        "Developmented to capture leads – think forms, chat, calendar integration, gated content, etc.",
    },
    {
      icon: "bi-sliders",
      title: "Data Cleanup & Migration",
      description:
        "Fix duplicates, outdated data, and migrate to a cleaner structure.",
    },
    {
      icon: "bi-graph-up",
      title: "Content Strategy Support",
      description:
        "Need help with messaging? We craft content that builds authority and trust.",
    },
  ];

  const points = [
    " SaaS & Tech Startups",
    "Manufacturing & Industrial Businesses",
    "Consultants & Agencies",
    "Financial Services & Insurance Firms",
    "Enterprise Software Providers",
    "Logistics & B2B eCommerce",
    "Healthcare & Education Solutions"
  ];
  const note = [
    "Whether you're into SaaS, manufacturing, consulting, or enterprise services — our Developments speak your client’s language.",
  ];

  const features = [
    "We speak “business-to-business” – not just code",
    "  Development + strategy = real lead generation",
    " Clear communication, timely delivery, and post-launch support",
    "  India-based pricing with global quality",
    " Developmented to impress decision-makers (CXOs, procurement heads, etc.)",
 
  ];

  return (
    <>
      <Tiltcard
        heading="B2B Website Development Services – Where Development Meets Business Growth 




"
        paragraph="Your website isn’t just a digital brochure — it’s your #1 salesperson in the B2B world.
 At Promozione Branding Pvt. Ltd., we Development B2B websites that are not only sleek and modern, but also strategically built to generate leads, close deals, and build trust.






"
        cardItems={cardItems}
      />

      {/* what is section */}

      <section className="php-section py-5 ">
       
        <div className="blob-bg"></div>

        <div className="container">
          <div className="row align-items-center flex-wrap-reverse">
           
            <div className="col-md-6">
              <h2 className="php-heading">
                Why is Different (and Important)
                <span style={{ color: "#2548BD" }}>
                  B2B Website Development
                </span>{" "}
              </h2>
              <p className="php-desc">
                Unlike B2C, B2B buyers are more research-driven and ROI-focused.{" "}
                <strong>
                  And yes — Development matters just as much as logic!
                </strong>
                Your website must:
              </p>
              <ul className="php-points">
                {[
                  "Educate clearly",
                  "Build instant credibility",
                  "Demonstrate expertise",
                  " Offer easy CTAs (Request a Demo, Book a Call, Download PDF)",
                  " Support longer sales cycles",
                ].map((item, index) => (
                  <li
                 
                   
                    key={index}
                  >
                    <span className="icon">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              data-aos="zoom-in"
            >
              <div className="php-illustration tilt">
                <img src={b2bweb} alt="google adword" className="svg-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}

      <WhyChoose
        title="Why Choose
"
        highlightedText="Promozione for B2B Web Development?"
        features={features}
        para="A strong B2B website should clearly communicate value, build trust, and drive conversions through user-centric design and strategic content.
"
        ctaTitle="Let’s Build a B2B Website That Works as Hard as You Do


"
        
        ctaParagraph="Your next deal could start with a visit to your website. Let’s make sure it delivers the right impression and action.

 "
        ctaButtonText="Let’s Get Started"
      />

      {/* our process */}
      <Process
        title="Our B2B Web Development Process"
        image={funnel}
        data={funnelData}
      ></Process>

      {/* our services */}

      <Service
        title="What’s Included in Our B2B Website Development Services?
"
        subtitle="Who We Develop For:




      "
        points={points}
        note={note}
        services={services}
        image={b2bweb1}
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

export default B2bweb;
