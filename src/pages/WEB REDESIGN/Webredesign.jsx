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
import webdesign1 from "../../assets/services/webdesign1.jpg";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import webdesign from "../../assets/services/webdesign.jpg";

const Webredesign = () => {
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
    title: "Website Audit & Strategy",
    icon: "📝", // Clipboard with pencil – represents audits and planning
  },
  {
    title: "Modern UI/UX Design",
    icon: "🎨", // Palette – represents creative yet professional design
  },
  {
    title: "Mobile-First Responsive Design",
    icon: "📱", // Mobile phone – clearly indicates mobile responsiveness
  },
  {
    title: "SEO-Friendly Structure",
    icon: "🔍", // Magnifying glass – represents SEO/search visibility
  },
  {
    title: "CMS Upgrade or Migration",
    icon: "🔄", // Arrows in a circle – migration or platform upgrade
  },
  {
    title: "Conversion-Driven Approach",
    icon: "🚀", // Rocket – symbolizes growth, performance, conversions
  },
];

const funnelData = [
  {
    title: "Step 1: Website Audit & Goal Setting",
    services: [
      "We start by reviewing your current website: performance, content, SEO, and user flow.",
      "Next, we define clear business goals and outline the redesign strategy accordingly.",
    ],
    color: "#2563eb", // Blue
  },
  {
    title: "Step 2: Wireframing & New Design Mockups",
    services: [
      "We sketch layout wireframes for major pages and design UI/UX mockups based on brand guidelines.",
      "These mockups ensure a smooth and modern experience across all screen sizes.",
    ],
    color: "#16a34a", // Green
  },
  {
    title: "Step 3: Development & Content Migration",
    services: [
      "We build the new site using clean, performance-optimized code on WordPress or your preferred CMS.",
      "All your existing content is migrated safely, with enhancements wherever needed.",
    ],
    color: "#f59e0b", // Amber
  },
  {
    title: "Step 4: SEO Optimization + Speed Tuning",
    services: [
      "SEO essentials like meta tags, image alt texts, schema markup & redirects are all handled.",
      "We compress assets and fine-tune code so your site loads in under 3 seconds.",
    ],
    color: "#ec4899", // Pink
  },
  {
    title: "Step 5: Testing on All Devices",
    services: [
      "We rigorously test the website across devices (mobile, tablet, desktop) and all major browsers.",
      "Our QA ensures no broken links, alignment issues, or responsiveness bugs.",
    ],
    color: "#0ea5e9", // Sky blue
  },
  {
    title: "Step 6: Launch + Ongoing Support",
    services: [
      "We go live after your final approval, ensuring a seamless transition with zero downtime.",
      "You get post-launch support, bug fixes, and ongoing assistance as your site grows.",
    ],
    color: "#222", // Dark
  },
];


const services = [
  {
    icon: "bi-search", // For audit & analysis
    title: "Website Audit & Strategy",
    description:
      "We review your current site, understand your goals, and create a smart redesign plan.",
  },
  {
    icon: "bi-easel", // For design/layout
    title: "Modern UI/UX Design",
    description:
      "Fresh, user-friendly layouts that wow visitors and guide them to action.",
  },
  {
    icon: "bi-phone", // For mobile/responsive
    title: "Mobile-First Responsive Design",
    description:
      "No matter the device, your site will look stunning and work flawlessly.",
  },
  {
    icon: "bi-speedometer2", // For performance
    title: "Speed & Performance Optimization",
    description:
      "Slow websites = lost sales. We fix that with clean code and faster load times.",
  },
  {
    icon: "bi-diagram-3", // For structure/SEO
    title: "SEO-Friendly Structure",
    description:
      "Redesign without hurting rankings — we handle redirects, meta tags, and sitemaps.",
  },
  {
    icon: "bi-cursor", // For conversions
    title: "Conversion-Driven Approach",
    description:
      "From better CTAs to smarter page flow — we make your site work like a salesperson.",
  },
  {
    icon: "bi-cloud-arrow-up", // For migration
    title: "CMS Upgrade or Migration",
    description:
      "Stuck on outdated platforms? We’ll move you to WordPress or another modern CMS.",
  },
];


  const points = [
    " Your site looks outdated or unprofessional",
    "It’s not mobile responsive",
    "You’re not getting leads or sales",
    "It’s hard to update or manage",
    "Your competitors’ sites look better ",
    "Google rankings have dropped",
    "You’re launching a rebrand or new services",
  ];
  const note = [
    "If you nodded yes to any of these, it's redesign time.",
  ];

const features = [
  "Custom design tailored to your brand",
  "SEO-safe migration",
  "In-house UI/UX + SEO + Dev team",
  "Fast turnaround for urgent projects",
  "Post-launch support & training",
  "Affordable packages for Indian businesses",
];


  return (
    <>
      <Tiltcard
        heading="Website Redesigning Services – Makeover That Means Business 



"
        paragraph="Is your current website feeling outdated, slow, or just... boring?
At Promozione Branding Pvt. Ltd., we help you revamp your existing website into a modern, mobile-friendly, and conversion-focused experience that works for your business. Because let’s face it — your website is your digital storefront, and first impressions are everything.
If your website is older than your Instagram account, it's time for a redesign.





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
                Why Websites{" "}
                <span style={{ color: "#2548BD" }}>Redesign is Important?</span>{" "}
              </h2>
              <p className="php-desc">
                A simple redesign can lead to: Better user experience Improved
                SEO rankings Higher conversion rates Faster loading speed
                Stronger brand image Mobile & tablet optimization Your business
                has grown. Your goals have evolved. So should your website,A well-executed redesign can significantly improve user experience through modern layouts, intuitive navigation, and faster load times. It enhances SEO performance by optimizing structure, content, and mobile responsiveness 
              </p>
            </div>

            {/* Tilted SVG */}
            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              data-aos="zoom-in"
            >
              <div className="php-illustration tilt">
                <img src={webdesign} alt="google adword" className="svg-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}

      <WhyChoose
        title="Why Choose
"
        highlightedText="Promozione for Website Redesign?"
        features={features}
        para="We don’t just “change colors” — we transform websites to meet today’s digital standards.
"
        ctaTitle="Let’s Redesign Your Website – The Smart Way


"
        ctaSubtext="Let’s Run Ads That Work"
        ctaParagraph="Don’t let your outdated site hold your business back. Let’s give it the fresh, functional, and future-ready upgrade it deserves.

 "
        ctaButtonText="Let’s Get Started"
      />

      {/* our process */}
      <Process
        title="Our Website Redesign Process"
        image={funnel}
        data={funnelData}
      ></Process>

      {/* our services */}

      <Service
        title="What’s Included in Our Website Redesign Services?
"
        subtitle="Who Needs Website Redesign?

"
        points={points}
        note={note}
        services={services}
        image={webdesign1}
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

export default Webredesign;
