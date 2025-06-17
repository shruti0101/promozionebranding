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
import d2c1 from "../../assets/services/d2c1.png";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import crm from "../../assets/services/d2c.png";

const D2c = () => {
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
      title: "Brand Strategy & Positioning",
      icon: "🧠", // Brain – represents strategic thinking and brand planning
    },
    {
      title: "Performance Marketing",
      icon: "📈", // Chart increasing – shows growth and performance
    },
    {
      title: "Shopify / WooCommerce Optimization",
      icon: "🛍️", // Shopping bags – perfectly suited for eCommerce platforms
    },
    {
      title: "Creative Content & UGC Campaigns",
      icon: "🎨", // Artist palette – for creative content and visual storytelling
    },
    {
      title: "Full-Funnel Analytics & CRO",
      icon: "📊", // Bar chart – ideal for analytics, performance tracking, and CRO
    },
    {
      title: "Email, WhatsApp & SMS Automation",
      icon: "📬", // Mailbox – perfect for automated messaging and communication
    },
  ];

  const funnelData = [
    {
      title: "Step 1: Brand Discovery & Funnel Audit",
      services: [
        " We begin by understanding your brand's DNA — mission, audience, and unique selling points. Simultaneously, we audit your current marketing funnel, identifying leaks, drop-offs, and missed opportunities. This gives us a clear roadmap for where we can drive impactful change.",
      ],
      color: "#2563eb",
    },
    {
      title: "Step 2: Ad Campaign + Landing Page Strategy",
      services: [
        " Next, we design a holistic campaign strategy — not just the ads, but the entire journey. From high-converting ad angles to personalized landing pages, we align messaging, design, and UX to convert cold traffic into loyal customers.",
      ],
      color: "#16a34a",
    },
    {
      title: "Step 3: Creative Production (Graphics, Reels, Ads)",
      services: [
        "  Our creative team produces scroll-stopping content tailored for D2C audiences. From product explainers and lifestyle reels to dynamic carousels and static ads — we focus on high-performing creatives optimized for each platform.",
      ],
      color: "#f59e0b",
    },
    {
      title: "Step 4: Campaign Execution & Optimization",
      services: [
        " We launch your campaigns across selected platforms (Meta, Google, YouTube, etc.) and monitor them closely. We A/B test creatives, placements, and copy to find the best-performing combinations — adjusting daily for maximum ROAS.",
      ],
      color: "#ec4899",
    },
    {
      title: "Step 5: Retargeting + Retention Automation",
      services: [
        "  We don’t stop at acquisition. Using smart retargeting, WhatsApp flows, and email automation, we re-engage users who showed interest but didn’t convert. We also build retention systems to increase LTV and drive repeat purchases.",
      ],
      color: "#0ea5e9",
    },

    {
      title: "Step 6: Analytics, Reporting & Scale Plan",
      services: [
        " Every decision is backed by data. We deliver actionable reports and dashboards, clearly showing what’s working. Based on insights, we build a scale-up roadmap ",
      ],
      color: "#222",
    },
  ];
const services = [
  {
    icon: "bi-flag", // Represents brand identity and positioning
    title: "Brand Strategy & Positioning",
    description:
      "We help you define your brand voice, identify your ideal audience, and carve out a niche that stands out in the market.",
  },
  {
    icon: "bi-bullseye", // Target icon – precise for performance ads
    title: "Performance Marketing (Meta & Google Ads)",
    description:
      "From cold audiences to hot buyers – we craft campaigns that drive conversions and deliver measurable ROI.",
  },
  {
    icon: "bi-bag-check", // Shopping bag with check – suitable for optimized eCommerce
    title: "Shopify / WooCommerce Optimization",
    description:
      "We design high-converting online stores, fix funnel leaks, and reduce cart abandonment with seamless UX improvements.",
  },
  {
    icon: "bi-camera-reels", // Reels icon – perfect for video and UGC content
    title: "Creative Content & UGC Campaigns",
    description:
      "We create scroll-stopping visuals – from reels and product videos to authentic influencer content that builds trust.",
  },
  {
    icon: "bi-graph-up-arrow", // Represents tracking and optimization
    title: "Full-Funnel Analytics & CRO",
    description:
      "We monitor every step of the funnel – analyzing what works, fixing what doesn't, and optimizing conversions throughout.",
  },
 {
  icon: "bi-chat-dots", // Chat/message bubbles – represents messaging automation
  title: "Email, WhatsApp & SMS Automation",
  description:
    "Automate retention and re-engagement – from welcome emails to abandoned carts and cross-sell campaigns.",
}

];


  const points = [
    " Skincare & beauty brands",
    "Personal wellness & nutrition",
    "Apparel, fashion & lifestyle",
    "Fitness, gadgets & home essentials",
    "Digital-first product launches",
    "Subscription boxes & gift brands",
  ];
  const note = [
    "If you have a product + website, we'll help you sell it — directly and smartly.",
  ];

  const features = [
    "Experts in scaling Indian D2C brands",
    " In-house team of strategists, designers, copywriters, and ad buyers",
    "  Data-backed decision-making (not guesswork)",
    " Content in English + Hindi + Hinglish",
    " Transparent monthly reporting & growth tracking",
    "  Flexible packages for startups to scaling brands",
  ];

  return (
    <>
      <Tiltcard
        heading="D2C Marketing Services in India – Scale Fast, Sell Direct, Grow Smart 



"
        paragraph="Middleman hatao, customer se direct judo.
 That’s the D2C (Direct-to-Consumer) way – and we help you master it.
At Promozione Branding Pvt. Ltd., we specialize in crafting full-funnel, ROI-driven D2C marketing strategies that help your brand build awareness, drive sales, and create loyal customers — all without relying on marketplaces.
Launch. Scale. Repeat. 




"
        cardItems={cardItems}
      />

      {/* what is section */}

      <section className="php-section bg-light py-5 position-relative overflow-hidden">
        {/* Background Blob */}
        <div className="blob-bg"></div>

        <div className="container">
          <div className="row align-items-center flex-wrap-reverse">
            {/* Text Content */}
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="php-heading">
                What is
                <span style={{ color: "#2548BD" }}>D2C Marketing?</span>{" "}
              </h2>
              <p className="php-desc">
                <strong>D2C Marketing</strong> is all about taking your brand
                directly to your customer via your own platforms – your{" "}
                <strong>website, social media, ads, and email/SMS.</strong> It
                puts you in control of: It’s a game-changer for startups,
                personal care, fashion, wellness, food, and lifestyle brands
                that want to <strong>own their audience.</strong>
              </p>
              <ul className="php-points">
                {[
                  "Branding",
                  "Pricing",
                  "Customer experience",
                  " And most importantly, customer data",
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
                <img src={d2c1} alt="google adword" className="svg-float img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}

      <WhyChoose
        title="Why Choose 

"
        highlightedText="Promozione for D2C Marketing?"
        features={features}
        para="We're not here to just run ads – we're your digital growth partner.

"
        ctaTitle="Ready to Grow Your D2C Brand?


"
        ctaSubtext="Let’s Run Ads That Work"
        ctaParagraph="Your product is amazing — now let’s take it to the people.
 With Promozione’s D2C Marketing Services, you’ll get results that scale and stories that sell.

 "
        ctaButtonText="Let’s Get Started"
      />

      {/* our process */}
      <Process
        title="Our D2C Growth Process
"
        image={funnel}
        data={funnelData}
      ></Process>

      {/* our services */}

      <Service
        title="Our D2C Marketing Services Include:"
        subtitle="Signs You Need D2C Marketing Services
"
        points={points}
        note={note}
        services={services}
        image={crm}
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

export default D2c;
