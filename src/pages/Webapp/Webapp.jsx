import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";
import Process from "../Process/Process";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import { Helmet } from "react-helmet";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import webapp from "../../assets/services/web-app.webp";
import webapp2 from "../../assets/services/web-app2.webp";

const Webapp = () => {
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
    title: "Project Strategy & Planning",
    icon: "🧠", // Brain – strategy, planning, thinking
  },
  {
    title: "UI/UX Design",
    icon: "🎨", // Artist palette – creative design
  },
  {
    title: "Full-Stack Development",
    icon: "💻", // Laptop – coding, full-stack dev
  },
  {
    title: "Testing & Quality Assurance",
    icon: "🧪", // Test tube – QA, testing process
  },
  {
    title: "Security Implementation",
    icon: "🔒", // Lock – security, protection
  },
  {
    title: "API Integration",
    icon: "🔗", // Link – connections, integrations
  },
];


  const funnelData = [
    {
      title: "Step 1: Discovery & Planning",
      services: [
        " We begin by understanding your business goals, target users, and technical requirements to outline a strategic roadmap.",
      ],
      color: "#2563eb",
    },
    {
      title: "Step 2: UI/UX Wireframing",
      services: [
        " Low- and high-fidelity wireframes are created to visualize the user journey, ensuring a seamless and intuitive experience.",
      ],
      color: "#16a34a",
    },
    {
      title: "Step 3: Frontend + Backend Development",
      services: [
        "  Modern frameworks (like React, Vue, Node.js, Django) are used to build a robust, scalable, and high-performing application.",
      ],
      color: "#f59e0b",
    },
    {
      title: "Step 4: Testing, QA & Feedback Loops",
      services: [
        "  Comprehensive testing is done to catch bugs, validate functionality, and incorporate your feedback at every stage.",
      ],
      color: "#ec4899",
    },
    {
      title: "Step 5:  Deployment & Hosting",
      services: [
        "  We set up secure, scalable hosting with CI/CD pipelines for smooth and reliable deployments on platforms like AWS, Vercel, or DigitalOcean.",
      ],
      color: "#0ea5e9",
    },

    {
      title: "Step 6: Maintenance & Support",
      services: [
        " Post-launch, we handle updates, performance tuning, and tech support — so you can focus on growth.",
      ],
      color: "#222",
    },
  ];


const services = [


  // Web App Dev Services
  {
    icon: "bi-lightbulb", // Idea or strategy
    title: "Project Strategy & Planning",
    description:
      "We understand your goals, user journey, and business logic before writing a single line of code.",
  },
  {
    icon: "bi-columns-gap", // UI/UX
    title: "UI/UX Design",
    description:
      "Sleek, intuitive, and responsive designs — optimized for mobile, desktop, and tablet.",
  },
  {
    icon: "bi-code-slash", // Development
    title: "Full-Stack Development",
    description:
      "We use the latest technologies like React, Node.js, PHP, Python, Laravel, and more.",
  },
  {
    icon: "bi-patch-check", // Quality assurance
    title: "Testing & Quality Assurance",
    description:
      "No bugs, no surprises. Every feature is thoroughly tested before going live.",
  },
  {
    icon: "bi-shield-lock", // Security
    title: "Security Implementation",
    description:
      "Role-based access, data encryption, and GDPR compliance — safety first!",
  },
  {
    icon: "bi-link-45deg", // API integration
    title: "API Integration",
    description:
      "Connect your app with third-party tools like Razorpay, WhatsApp, Zoho, Mailchimp, etc.",
  },
  {
    icon: "bi-cloud-arrow-up", // Deployment
    title: "Deployment & Ongoing Support",
    description:
      "Cloud-based hosting, DevOps, and continuous updates post-launch.",
  },
];



 const points = [
  "Startups building MVPs",
  "Businesses needing internal tools (HR, CRM, Sales)",
  "E-commerce platforms with custom features",
  "EdTech, HealthTech, and FinTech companies",
  "SaaS platforms & customer dashboards",
  "Real estate, travel, and logistics businesses",
];

  const note = [
    "If it can be built on the web — we’ll build it.",
  ];

  const features = [
    "Custom-built apps – no templates, fully tailored to your use case",
    "  Clean code + beautiful UI – tech meets design",
    " Agile & scalable architecture – grow without limits",
    " 100% data ownership – it’s your app, your control",
    "  Post-launch support & training",
    " Made in India, built for the world",
 
  ];

  return (
    <>

  <Helmet>
  <title>Web Application Development Company</title>
  <meta
    name="description"
    content="Achieve your business goals with web development solutions. Our battle-tested developers specialize in a wide range of web development services"
  />
</Helmet>

      <Tiltcard
        heading="Web Application Development Services – Powerful, Scalable & Custom-Built 



"
        paragraph="Looking to build a smart, scalable, and secure web application that solves real problems?
 At Promozione Branding Pvt. Ltd., we turn your business ideas into high-performance web apps that are fast, functional, and future-ready.





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
                  Web Application Development?
                </span>{" "}
              </h2>
              <p className="php-desc">
                A web application is a dynamic, browser-based software that
                users can access anytime, anywhere. Unlike static websites, web
                apps are interactive, database-driven, and built to perform
                specific tasks, like: User logins & dashboards Online forms &
                payments Booking or inventory systems Customer or employee
                portals Admin management panels SaaS platforms In short, web
                apps automate workflows and improve customer experiences.
              </p>
            
            </div>

            {/* Tilted SVG */}
            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              data-aos="zoom-in"
            >
              <div className="php-illustration tilt">
                <img src={webapp} alt="google adword" className="svg-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}

      <WhyChoose
        title="Why Choose Us for
"
        highlightedText="Web Application Development"
        features={features}
        para="From idea to launch – we’re your tech partner, not just developers.
"
        ctaTitle="Let’s Make Your Web Application Work Like a Sales Pro

"
        ctaSubtext="Let’s Run Ads That Work"
        ctaParagraph="Your Web Application should work for you – not the other way around. With Promozione’s Web Application Development Services, you’ll get the most out of your investment and help your sales team convert more leads, faster.
"
        ctaButtonText="Let’s Get Started"
      />

      {/* our process */}
      <Process
        title="Our  Web Application Development Process"
        image={funnel}
        data={funnelData}
      ></Process>

      {/* our services */}

      <Service
        title="Our Web Application Development Services Include:"
        subtitle="Signs You Need Web Application Development



      "
        points={points}
        note={note}
        services={services}
        image={webapp2}
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

export default Webapp;
