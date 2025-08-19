import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";
import Process from "../Process/Process";
import SEO from "../../components/helmet/Helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import crm2 from "../../assets/services/ads2.webp";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import crm from "../../assets/services/ads.webp";
import ads3 from "../../assets/services/ads3.webp";
const Ads = () => {
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
      title: "Market & Audience Research",
      icon: "🔍", // Magnifying glass – Perfect for research/discovery
    },
    {
      title: "Campaign Strategy & Funnel Setup",
      icon: "🧠", // Brain – Strategic thinking, planning funnels
    },
    {
      title: "Ad Copywriting & Creative Design",
      icon: "🖌️", // Paintbrush – Creative work like design and copy
    },
    {
      title: "Retargeting & Remarketing",
      icon: "♻️", // Recycling – Circular process, targeting again
    },
    {
      title: "A/B Testing & Scaling",
      icon: "📊", // Bar chart – Perfect for testing and measuring
    },
    {
      title: "Transparent Reporting & Analytics",
      icon: "📈", // Line chart – Data, growth, reporting
    },
  ];

  const funnelData = [
    {
      title: "Step 1: Business Audit & Strategy Planning",
      services: [
        "Aapka target customer, product/service aur campaign objective samajhkar ek custom plan banate hain.",
        "Hum aapki current marketing efforts ka audit karke improvement areas identify karte hain.",
      ],
      color: "#2563eb", // Blue
    },
    {
      title: "Step 2: Keyword & Competitor Research",
      services: [
        "Jo log aapka product Google pe search kar rahe hain, unko identify aur target karte hain.",
      ],
      color: "#16a34a", // Green
    },
    {
      title: "Step 3: Creative Development & Ad Setup",
      services: [
        "Search ads, display banners, YouTube videos – sab create karke launch karte hain.",
        "High-converting ad copies, visuals & videos – Hindi, English, Hinglish mein.",
      ],
      color: "#f59e0b", // Amber
    },
    {
      title: "Step 4: Launch Campaigns & Monitor KPIs",
      services: [
        "Campaigns launch hone ke baad, daily CTR, CPC, conversion rate monitor kiya jata hai.",
      ],
      color: "#ec4899", // Pink
    },
    {
      title: "Step 5: Optimization & Scaling",
      services: [
        "Low CTR? High CPC? Hum fix karte hain using data-backed decisions.",
        "High-performing ads ko scale karke zyada leads aur ROI generate karte hain.",
      ],
      color: "#0ea5e9", // Sky blue
    },
    {
      title: "Step 6: Reporting & ROI Analysis",
      services: [
        "ROI, CPL, CTR – sab kuch transparent aur actionable hota hai.",
      ],
      color: "#222", // Dark
    },
  ];

  const services = [
    {
      icon: "bi-search", // Magnifying glass for research
      title: "Market & Audience Research",
      description:
        "We start with data-driven research to understand your audience, competitors, and ideal channels.",
    },
    {
      icon: "bi-diagram-3", // Funnel chart for strategy setup
      title: "Campaign Strategy & Funnel Setup",
      description:
        "Custom ad funnels built to match your business goals — whether it’s signups, purchases, or app installs.",
    },
    {
      icon: "bi-megaphone", // Megaphone for ad copy & design
      title: "Ad Copywriting & Creative Design",
      description:
        "High-performing visuals + attention-grabbing ad copy (Hinglish bhi chalega).",
    },
    {
      icon: "bi-rocket-takeoff", // Rocket for launch/optimization
      title: "Campaign Setup & Optimization",
      description:
        "From ad group structure to audience targeting and bidding — fully optimized for ROI.",
    },
    {
      icon: "bi-arrow-repeat", // Circular arrow for retargeting
      title: "Retargeting & Remarketing",
      description: "Bring back warm leads with smart, automated follow-up ads.",
    },
    {
      icon: "bi-sliders2", // Sliders for testing and scaling
      title: "A/B Testing & Scaling",
      description:
        "We test headlines, visuals, CTAs and more — so your best-performing ad always leads the charge.",
    },
    {
      icon: "bi-graph-up-arrow", // Graph for reporting
      title: "Transparent Reporting & Analytics",
      description:
        "Weekly & monthly reports with KPIs, ROI, CPL, CTR, ROAS — sab kuch milega.",
    },
  ];

  const points = [
    " E-commerce & D2C brands",
    "B2B & SMEs Companies, Manufacturers, Traders, Suppliers, Distributers, Dealers, Importers, Exporters",
    "Real estate, education, healthcare",
    "Events, webinars & online coaching",
    "Lead generation for services",
    "App installs & product launches",
  ];
  const note = [
    "If your customer is online — we’ll help you find (and convert) them.",
  ];

  const features = [
    "Multi-platform expertise (Google, Meta, LinkedIn, YouTube)",
    "Full-funnel focus — not just leads, but conversions",
    "Performance + creativity = ads that sell",
    "Hindi, English, Hinglish — your language, your audience",
    "Dedicated ad strategist + 100% transparency",
    "Affordable packages for startups, SMEs & D2C brands",
  ];

  return (
    <>
      <Tiltcard
        heading="Ads Management Services in India – Make Every Click Count 



"
        paragraph="Running ads is easy. Running ads that actually convert? That’s where we come in.
At Promozione Branding Pvt. Ltd., we offer expert Ads Management Services across platforms like Google, Meta (Facebook + Instagram), YouTube, LinkedIn, and more.




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
                <span style={{ color: "#2548BD" }}>Ads Management?</span>{" "}
              </h2>
              <p className="php-desc">
                <strong>Ads Management</strong> is the complete process of
                planning, creating, launching, optimizing, and scaling your
                digital advertising campaigns across different platforms like:
                Whether you’re looking to{" "}
                <strong>get leads, drive sales, or grow brand awareness</strong>{" "}
                — we make sure your ads do the heavy lifting.
              </p>
              <ul className="php-points">
                {[
                  "Google Search & Display Ads",
                  "Facebook & Instagram Ads",
                  "LinkedIn Sponsored Posts",
                  " YouTube Video Ads",
                  " WhatsApp Click-to-Chat Campaigns",
                  "Retargeting & Lookalike Ads",
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
        highlightedText="Promozione for Ad Management?
"
        features={features}
        para="We’re not here to run random ads — we build revenue-driving machines.

"
        ctaTitle="Ready to Maximise ROI from Your Ad Campaigns?

"
        ctaSubtext="Let’s Run Ads That Work"
        ctaParagraph="Let Promozione manage your ads while you focus on your business.
 With us, every rupee spent brings returns you can measure.

 "
        ctaButtonText="Let’s Get Started"
      />

      {/* objective */}
      <section>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <img src={ads3} className="img-fluid" alt="" />
          </div>
        </div>
      </section>

      {/* our process */}
      <Process
        title="Our ADS Management Process"
        image={funnel}
        data={funnelData}
      ></Process>

      {/* our services */}

      <Service
        title="Our Ads Management Services includes:?
"
        subtitle="Who Needs Ads Management?"
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



    <SEO
      title="Top Ads Management Services [25% Lift in Ads Sales] "
      description="Need Ads management services? Trust Promozione to provide Ads services that accelerate your sales and lead generation efforts. Get a free quote now!"
    />
    </>
  );
};

export default Ads;
