import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";
import Process from "../Process/Process";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import Helmet from "../../components/helmet/Helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";

import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import aimarket from "../../assets/services/aimarket.webp";
import aimarket2 from "../../assets/services/aimarket2.webp";
const AiPerformance = () => {
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
    title: " Predictive Targeting",
    icon: "🎯", // Target — for strategic planning and audience targeting
  },
  {
    title: "Smart Ad Creative Testing",
    icon: "🧪", // Test tube — symbolizes experimentation and testing
  },
  {
    title: "Real-Time Budget Allocation",
    icon: "💸", // Money with wings — dynamic use of budget
  },
  {
    title: "Dynamic Retargeting",
    icon: "🔁", // Repeat — represents retargeting cycles
  },
  {
    title: "A/B & Multivariate Testing",
    icon: "⚖️", // Balance scale — comparing variations fairly
  },
  {
    title: "AI Keyword & Audience Insights",
    icon: "🤖", // Robot — AI-driven decisions
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
      title: "Campaign Planning + Predictive Targeting",
      description:
        "AI identifies which audience is most likely to convert – before you even spend.",
    },
    {
      icon: "bi-bullseye",
      title: "Smart Ad Creative Testing",
      description:
        "Let AI test 3 ad versions in a day and pick the 1 that actually work. No more guessing!",
    },
    {
      icon: "bi-geo-alt",
      title: "Real-Time Budget Allocation",
      description:
        "Shift your ad budget automatically to the top-performing platforms & creatives.",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Dynamic Retargeting",
      description:
        "Hit the right people, at the right time, with the right message – automatically.",
    },
    {
      icon: "bi-gear",
      title: "A/B & Multivariate Testing",
      description:
        "Test headlines, CTAs, visuals, and offers at scale, without lifting a finger.",
    },
    {
      icon: "bi-sliders",
      title: "AI Keyword & Audience Insights",
      description:
        "We uncover untapped keywords & micro-audiences your competitors haven’t found.",
    },
    {
      icon: "bi-graph-up",
      title: "Performance Dashboards with Actionable Data",
      description:
        "All your metrics, simplified and visualized in one smart dashboard.",
    },
  ];

  const points = [
    " Google Ads (Search, Display, YouTube)",
    "Meta Ads (Facebook & Instagram)",
    "LinkedIn Ads (Perfect for B2B)",
    "Programmatic Display Ads",
    "Amazon & Flipkart Ads",
    "OTT / YouTube Performance Campaigns",
  ];
  const note = [
    "AI-Powered, Human-Crafted. Best of Both Worlds,AI-Powered, Human-Crafted. Best of Both Worlds.",
  ];

  const features = [
    "AI-powered + human-verified results",
    " 24/7 campaign optimization – even while you sleep ",
    " Transparent reporting with real-time dashboards",
    " Zero ad budget wastage – sab paisa ka hisaab milega",
    " More conversions, less cost, faster scale",
    " Real estate or education brands needing qualified leadsn",
   
  ];

  return (
    <>


  <SEO
      title="Top Ads Management Services [25% Lift in Ads Sales] "
      description="Need Ads management services? Trust Promozione to provide Ads services that accelerate your sales and lead generation efforts. Get a free quote now!"
    />


      <Tiltcard
        heading="AI Performance Marketing Services in India – Smarter Ads, Better Results 



"
        paragraph="Marketing budget ud gaya par result zero?
 It’s time to ditch guesswork and switch to AI-Powered Performance Marketing with Promozione Branding Pvt. Ltd.
We combine artificial intelligence + human expertise to deliver ads that convert, campaigns that scale, and ROAS that actually makes sense.
Get 10x smarter with your marketing. 




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
                  AI Performance Marketing?
                </span>{" "}
              </h2>
              <p className="php-desc">
                AI Performance Marketing uses machine learning and data
                analytics to optimize your ad campaigns in real-time, so you get
                better ROI, faster conversions, and smarter targeting with less
                waste. Think of it as: AI doing the heavy data crunching
                Real-time audience insights Hyper-personalized ads Maximum
                returns from every rupee spent Whether it’s Google Ads, Meta
                (Facebook/Instagram), YouTube, or LinkedIn – our AI tools work
                across platforms.
              </p>
            </div>

            {/* Tilted SVG */}
            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              data-aos="zoom-in"
            >
              <div className="php-illustration tilt">
                <img
                  src={aimarket}
                  alt="aimarket"
                  className="svg-float img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}

      <WhyChoose
        title="Why Choose
"
        highlightedText=" Promozione’s AI Marketing Services?"
        features={features}
        para="We don’t just boost your impressions — we boost your income,If you care about ROI, ROAS, and results, you’re in the right place.


"
        ctaTitle="Ready to Supercharge Your Ads with AI?


"
        ctaSubtext="Let’s Run Ads That Work"
        ctaParagraph="Join the future of advertising with AI Performance Marketing Services by Promozione.
 Lower your CPL. Boost your ROI. Run ads that think faster than your competition.

 "
        ctaButtonText="Let’s Get Started"
      />

      {/* our process */}
      <Process
        title=" AI Performance Marketing"
        image={funnel}
        data={funnelData}
      ></Process>

      {/* our services */}

      <Service
        title="Our AI-Powered Services Include:"
        subtitle="Platforms We Run AI-Powered Ads On:




      "
        points={points}
        note={note}
        services={services}
        image={aimarket2}
      />

      {/*  other parts*/}
      <Story></Story>
      <Form2
        heading="Let's Build Your Success Story Together"
        price="Your Growth is Our Guarantee."
        buttonText="Talk to Our AI Ad Strategist."
        image={ctaImage}
      ></Form2>


 

    </>
  );
};

export default AiPerformance;
