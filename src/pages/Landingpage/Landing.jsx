import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/formimg.webp";
import Process from "../Process/Process";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import landing1 from "../../assets/services/landing1.webp";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import landing from "../../assets/services/landing.webp";

const Landing = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const tiltElements = document.querySelectorAll(".tilt");
    VanillaTilt.init(tiltElements, {
      max: 15,
      speed: 500,
      scale: 1.09,
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
    title: "Step 1: Strategy & Audience Targeting",
    services: [
      "We first understand your product, audience, and campaign goals.",
      "Then define the exact audience to target – based on demographics, interests & behavior.",
    ],
    color: "#2563eb", // Blue
  },
  {
    title: "Step 2: Copy & Layout Drafting",
    services: [
      "We write persuasive copy that drives action — headlines, CTAs, and everything in between.",
      "A wireframe is created to map out content flow and user journey.",
    ],
    color: "#16a34a", // Green
  },
  {
    title: "Step 3: Creative Design & Development",
    services: [
      "We design a responsive, conversion-optimized landing page matching your brand.",
      "Development includes animations, form validations, and mobile-first structure.",
    ],
    color: "#f59e0b", // Amber
  },
  {
    title: "Step 4: Integrations (Forms, Calendars, Payments, etc.)",
    services: [
      "We connect lead forms, payment gateways, WhatsApp, Google Calendar, and other tools.",
      "Automation and CRM integrations are also set up where required.",
    ],
    color: "#ec4899", // Pink
  },
  {
    title: "Step 5: Testing & Launch",
    services: [
      "Before launch, we test responsiveness, speed, forms, and tracking.",
      "Once everything passes QA, we go live with post-launch support included.",
    ],
    color: "#0ea5e9", // Sky Blue
  },
];

const services = [
  {
    icon: "bi-vector-pen",
    title: "Conversion-Optimized Design",
    description:
      "Layout, colors, and page flow are tailored to guide visitors straight to action and boost conversions.",
  },
  {
    icon: "bi-phone",
    title: "Mobile-First, Responsive Design",
    description:
      "Ensures a seamless experience across devices — phones, tablets, and desktops alike.",
  },
  {
    icon: "bi-chat-left-text",
    title: "Copywriting That Sells",
    description:
      "Emotional, action-oriented messaging that increases urgency and improves click-through rates.",
  },
  {
    icon: "bi-speedometer2",
    title: "SEO & Speed Optimization",
    description:
      "Search-engine-friendly setup that also loads in seconds — for better visibility and user experience.",
  },
  {
    icon: "bi-camera-video",
    title: "Multimedia Integration",
    description:
      "Videos, icons, testimonials, countdowns – everything needed to boost engagement and trust.",
  },
  {
    icon: "bi-diagram-3",
    title: "A/B Testing Ready",
    description:
      "We configure multiple versions to help you make smarter, data-driven design decisions.",
  },
  // Existing CRM-related services below


  {
    icon: "bi-graph-up",
    title: "Team Training & Adoption",
    description:
      "CRM toh powerful hai… but only if your team actually uses it. We train, onboard, and guide.",
  },
];


  const points = [
  "Lead Generation Pages",
  "Product or Offer Pages",
  "App Download Pages",
  "Webinar/Workshop Sign-up Pages",
  "E-commerce Pre-Sell or Checkout Pages",
  "Booking & Appointment Pages",
  "Google & Facebook Ads Landing Pages",
];

  const note = [
    "Landing pages are focused, goal-specific web pages designed to drive conversions like sign-ups, downloads, or sales.",
  ];

const features = [
  "Custom-built (no boring templates)",
  "Designed for Ads + Organic Traffic",
  "UI/UX + Copy + Tech – all under one roof",
  "Ideal for Indian & global audiences",
  "Fast delivery & affordable pricing for SMEs, coaches & brands",
];


  return (
    <>
      <Tiltcard
        heading="Landing Page Design Services – One Page. One Goal. Unlimited Conversions 



"
        paragraph="Tired of traffic that doesn’t convert?
 With our high-performance landing page design services, you get a focused, results-driven page that turns visitors into customers fast.
At Promozione Branding Pvt. Ltd., we design landing pages that look great, load fast, and sell smarter. Whether it’s for lead gen, product launch, or ads – your page will do one thing REALLY well: convert.




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
                What is <span style={{ color: "#2548BD" }}>Landing Page?</span>{" "}
              </h2>
              <p className="php-desc">
                A landing page is a standalone web page built with one purpose:
                Capture leads Sell a product Promote an offer Get signups Book
                appointments No distractions. No multiple menus. Just a powerful
                headline, compelling visuals, and a strong CTA. <strong>Ek page, ek kaam  – full focus, full results.</strong>
               try, more deals closed Less manual
                work, more automation
              </p>
              <ul className="php-points">
                {[
                  "Focused Conversion Tool ",
                  "Targeted Content ",
                  "Minimal Distractions ",
                  " Campaign-Specific ",
                  " Boosts ROI ",
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
                <img src={landing} alt="google adword" className="svg-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}

      <WhyChoose
        title="Why Choose
"
        highlightedText="Promozione for  Landing Page Design"
        features={features}
        para="We don’t just improve landing pages – we optimize outcomes.
Landing Page Design = More Conversions, Less Effort
"
        ctaTitle="Let’s Make Your Landing Page Work Like a Sales Pro

"
        ctaSubtext="Let’s Run Ads That Work"
        ctaParagraph="Your Landing Page should work for you – not the other way around. With Promozione’s Landing Page Design Services, you’ll get the most out of your investment and help your sales team convert more leads, faster.
"
        ctaButtonText="Let’s Get Started"
      />

      {/* our process */}
      <Process
        title="Our  Landing Page Design Process"
        image={funnel}
        data={funnelData}
      ></Process>

      {/* our services */}

      <Service
        title="Our Landing Page Design Services Include:
"
        subtitle="Types of Landing Pages We Create:




      "
        points={points}
        note={note}
        services={services}
        image={landing1}
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

export default Landing;
