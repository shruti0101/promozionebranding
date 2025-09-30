import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";
import Process from "../Process/Process";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import crm2 from "../../assets/services/B2C.webp";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import b2c1 from "../../assets/services/b2c1_1.webp";

const B2c = () => {
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
      title: "Social Media Marketing",
      icon: "📱", // Mobile phone – represents social platforms and digital engagement
    },
    {
      title: "Performance Ads (Meta + Google)",
      icon: "🎯", // Bullseye – symbolizes precision targeting in ads
    },
    {
      title: "SEO & Content Marketing",
      icon: "🔍", // Magnifying glass – directly represents search and discovery
    },
    {
      title: "Influencer & Creator Campaigns",
      icon: "📸", // Camera – captures influencer content and personal branding
    },
    {
      title: "Email & WhatsApp Marketing",
      icon: "✉️", // Envelope – clearly represents messaging and email communication
    },
    {
      title: "Product & Brand Video Creation",
      icon: "🎬", // Clapperboard – represents video production and storytelling
    },
  ];

  const funnelData = [
    {
      title: "Step 1: Audience Research & Persona Building",
      services: [
        " We start by diving deep into your market. Using customer data, surveys, and behavioral insights, we create detailed buyer personas that reflect your ideal customers — their needs, motivations, and buying triggers. This ensures that all future marketing efforts are precisely targeted.",
      ],
      color: "#2563eb",
    },
    {
      title: "Step 2: Platform & Campaign Strategy",
      services: [
        " Not every channel works for every brand. We analyze where your audience spends time — whether it's Instagram, Facebook, Google, or elsewhere — and craft a platform-specific strategy that aligns with your goals, budget, and customer journey stage.",
      ],
      color: "#16a34a",
    },
    {
      title: "Step 3: Creative + Ad Execution",
      services: [
        " Next, our creative team develops compelling visuals and persuasive copy tailored to your audience personas. From static ads to motion graphics, every piece is optimized for performance. We ensure each ad speaks directly to your customers’ needs and pushes them to take action.",
      ],
      color: "#f59e0b",
    },
    {
      title: "Step 4: Daily Optimization & Retargeting",
      services: [
        " Once your ads are live, we don’t just sit back. We monitor performance daily — testing, tweaking, and optimizing campaigns in real-time. Smart retargeting ensures we stay in front of interested prospects and recover abandoned conversions.",
      ],
      color: "#ec4899",
    },
    {
      title: "Step 5: Reporting, Feedback, Scale",
      services: [
        "  We provide transparent and easy-to-understand reports with key metrics that matter most to your business. Regular feedback loops allow us to align closely with your evolving goals. Once we identify what works, we scale the campaign to maximize your ROI.",
      ],
      color: "#0ea5e9",
    },

    {
      title: "Step 6: Continuous Growth & Innovation",
      services: [
        " Marketing is never a one-time effort. We stay ahead of industry trends, audience behavior shifts, and new platform features. Our team continuously innovates and experiments with fresh ideas to keep your brand relevant, competitive, and consistently growing in a fast-changing digital landscape.",
      ],
      color: "#222",
    },
  ];

  const services = [
    {
      icon: "bi-megaphone", // Loudspeaker – suitable for marketing announcements
      title: "Social Media Marketing",
      description:
        "Create content that stops the scroll & sparks the buy – reels, stories, ads & more.",
    },
    {
      icon: "bi-bullseye", // Target – ideal for performance-focused ads
      title: "Performance Ads (Meta + Google)",
      description:
        "Get your products in front of the right people at the right time with laser-targeted ads.",
    },
    {
      icon: "bi-search", // Search icon – fits SEO and discoverability
      title: "SEO & Content Marketing",
      description:
        "Get found on Google when consumers are searching for what you offer.",
    },
    {
      icon: "bi-person-video3", // Person on video – matches influencer/creator campaigns
      title: "Influencer & Creator Campaigns",
      description:
        "Build trust & virality through influencer-led product storytelling.",
    },
    {
      icon: "bi-envelope-open", // Open envelope – great for email/WhatsApp messaging
      title: "Email & WhatsApp Marketing",
      description:
        "Engage your audience with updates, offers & abandoned cart reminders.",
    },
    {
      icon: "bi-camera-reels", // Reels icon – perfect for video creation
      title: "Product & Brand Video Creation",
      description: "Tell your story in a way people remember – and share!",
    },
  ];

  const points = [
    " B2C & Ecommerce Brands",
    "Beauty, Fashion, Lifestyle & Food Brands",
    "Startups launching new B2C products",
    "Mobile apps & consumer tech brands",
    "Retailers going online",
    "B2C service-based brands (e.g., coaching, events, wellness)",
  ];
  const note = [
    "If your end customer is a consumer, you need B2C marketing that connects & converts.",
  ];

  const features = [
    "Special focus on consumer behavior & trends",
    "  Creative + performance mix for max ROI",
    " Content in English, Hindi & Hinglish",
    " E-commerce-friendly strategies (D2C ready)",
    " Custom solutions – not one-size-fits-all",
    "  Complete marketing funnel setup (TOFU → BOFU)",
    "Transparent reporting & KPIs",
  ];

  return (
    <>


<Helmet>
  <title>B2C Marketing Service in New Delhi</title>
  <meta
    name="description"
    content="Promozione Branding is a B2C marketing agency that offers a wide range of services to help businesses grow and achieve their marketing goals."
  />
</Helmet>

      <Tiltcard
        heading="B2C Marketing Services in India – Turn Viewers into Buyers


"
        paragraph="B2C marketing ka funda simple hai:
 Jo dikhta hai, woh bikta hai… par jo connect karta hai, woh repeat bhi hota hai.
At Promozione Branding Pvt. Ltd., we help brands connect directly with consumers using creative, performance-driven B2C marketing strategies. 
 Let’s turn browsers into buyers and clicks into customers.



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
                What is <span style={{ color: "#2548BD" }}>B2C Marketing?</span>{" "}
              </h2>
              <p className="php-desc">
                B2C (Business-to-Consumer) Marketing is all about promoting your
                product or service directly to end-users using channels like:
              </p>
              <ul className="php-points">
                {[
                  "Social Media (Instagram, Facebook, YouTube)",
                  "Google Ads & SEO",
                  "Influencer Collaborations",
                  "Email & SMS Marketing",
                  "Video & Content Campaigns",
                  "Product Launch Promotions",
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
              <p>
                It focuses on{" "}
                <strong>emotion, attention, convenience & trust</strong> –
                everything your customers need to say "YES" to your brand.
              </p>
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
        highlightedText="Promozione for B2C Marketing?"
        features={features}
        para="We don’t just help you market — we help you sell.

"
        ctaTitle="Ready to Win in the B2C Market?


"
        ctaSubtext="Let’s Run Ads That Work"
        ctaParagraph="Your audience is waiting. Let’s show up where they scroll, shop, and trust.
"
        ctaButtonText="Let’s Get Started"
      />

      {/* our process */}
      <Process
        title="Our   B2C Marketing Process"
        image={funnel}
        data={funnelData}
      ></Process>

      {/* our services */}

      <Service
        title="Our B2C Marketing Services Include:
"
        subtitle="Who needs a B2C marketing agency in India?



      "
        points={points}
        note={note}
        services={services}
        image={b2c1}
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

export default B2c;
