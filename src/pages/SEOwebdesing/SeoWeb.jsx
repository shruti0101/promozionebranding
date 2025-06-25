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
import crm2 from "../../assets/services/ads2.webp";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import crm from "../../assets/services/ads.png";
import seoweb1 from "../../assets/services/seoweb1.png";
import seoweb from "../../assets/services/seoweb.png";

import { FaArrowRight } from "react-icons/fa";

const Smo = () => {
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
    title: "Custom UI/UX Design",
    icon: "🎨", // Paint palette – Visual creativity, design
  },
  {
    title: "On-Page SEO Integration",
    icon: "⚙️", // Gear – Optimization/settings, perfect for on-page SEO
  },
  {
    title: "Technical SEO Foundations",
    icon: "🧱", // Bricks – Foundation, structure of a website
  },
  {
    title: "Responsive & Mobile-First Design",
    icon: "📱", // Smartphone – Mobile-first design
  },
  {
    title: "Speed Optimization",
    icon: "🚀", // Rocket – Speed and performance
  },
  {
    title: "SEO-Friendly URL & Site Structure",
    icon: "🧭", // Compass – Navigation, site structure
  },
];


const funnelData = [
 {
    title: "Step 1: Discovery & Keyword Research",
    services: [
      "Ham aapke business goals aur target audience ke basis par detailed keyword research karte hain.",
      "Market aur competitor analysis ke zariye identify karte hain high-potential keywords.",
    ],
    color: "#4f46e5", // Indigo
  },
  {
    title: "Step 2: Sitemap & Wireframe Planning",
    services: [
      "SEO-friendly sitemap banaya jata hai jo user journey ko streamline kare.",
      "Page layout aur wireframes tayar kiye jate hain to ensure clarity & navigation ease.",
    ],
    color: "#059669", // Emerald
  },
  {
    title: "Step 3: UI/UX + SEO Copy Integration",
    services: [
      "Attractive, mobile-responsive design ke saath search-optimized copy integrate kiya jata hai.",
      "Har page par proper heading tags, meta tags aur keyword-rich content hota hai.",
    ],
    color: "#d97706", // Amber Dark
  },
  {
    title: "Step 4: Development & Technical SEO Setup",
    services: [
      "Clean coding practices ke sath fast-loading, mobile-first site develop ki jati hai.",
      "Technical SEO (schema, alt tags, indexing rules) sab ensure kiya jata hai.",
    ],
    color: "#dc2626", // Red
  },
  {
    title: "Step 5: Speed Optimization & Launch",
    services: [
      "Site ko compress, cache aur CDN ke zariye lightning-fast banaya jata hai.",
      "Testing ke baad site ko securely host karke go-live kiya jata hai with performance tracking setup.",
    ],
    color: "#10b981", // Green Teal
  },
];
const services = [
  {
    icon: "bi-easel", // For custom UI/UX design
    title: "Custom UI/UX Design",
    description:
      "Tailored layouts designed to keep users engaged and reduce bounce rates.",
  },
  {
    icon: "bi-file-earmark-code", // For content/SEO integration
    title: "On-Page SEO Integration",
    description:
      "Keyword-optimized content, headings, alt tags, internal linking – sab kuch included!",
  },
  {
    icon: "bi-diagram-3", // Represents structure/foundations
    title: "Technical SEO Foundations",
    description:
      "We set up schema markup, XML sitemaps, robots.txt, and canonical tags.",
  },
  {
    icon: "bi-phone", // Perfect for mobile-first design
    title: "Responsive & Mobile-First Design",
    description:
      "Your site will look perfect on phones, tablets, and laptops – no excuses!",
  },
  {
    icon: "bi-lightning-charge", // For speed/performance
    title: "Speed Optimization",
    description:
      "From image compression to clean code, we make sure your site loads in under 3 seconds.",
  },
  {
    icon: "bi-link-45deg", // URL & linking structure
    title: "SEO-Friendly URL & Site Structure",
    description:
      "Logical navigation and clean URLs that help users (and Google) find everything easily.",
  },
  {
    icon: "bi-pencil-square", // Writing/copywriting
    title: "SEO Copywriting (Optional)",
    description:
      "We can write your website content in a tone that’s both user-friendly & Google-friendly.",
  },
];



 const points = [
  "Perfect for small businesses & startups",
  "Ideal for service providers & consultants",
  "Built for e-commerce stores & D2C brands",
  "Trusted by agencies & local businesses",
  "Tailored for education, healthcare & hospitality",
];

  const note = [
    "From landing pages to full websites – if it needs traffic, we’ll build it for SEO.",
  ];

const features = [
  "Designed by UI experts, optimized by SEO specialists",
  "Built for conversions — not just views or traffic",
  "Compliant with Google Core Web Vitals standards",
  "Fully responsive across mobile, desktop & tablet",
  "Fast-loading, functional, and future-ready websites",
  "Affordable packages for Indian startups & businesses",
];



  return (
    <>
      <Tiltcard
        heading="SEO Web Design Services – Design That Looks Good & Ranks Better



"
        paragraph="What’s the point of a beautiful website if no one can find it on Google?
At Promozione Branding Pvt. Ltd., we don’t just design websites — we create SEO-friendly websites that look amazing, load fast, and rank high in search results.
 Because let’s be honest — a pretty site without traffic is like a showroom with no customers.


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
                What is <span style={{ color: "#2548BD" }}>SEO Web Design?</span>{" "}
              </h2>
              <p className="php-desc">
                <strong>SEO Web Design</strong> is the perfect mix of creativity + technicality.
 It means building your website to:
                <strong>
                  In short: It’s design with Google (and your customers) in mind.
                  </strong>


  <ul className="php-points">
                {[
                  "Look visually stunning",
                  "Be crawlable by search engines",
                  "Load lightning-fast on all devices",
                  " Be mobile-friendly and responsive",
                  " Include all the right meta tags,schema & structure",
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
               
                
              </p>
           
            </div>

            {/* Tilted SVG */}
            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              data-aos="zoom-in"
            >
              <div className="php-illustration tilt">
                <img src={seoweb} alt="google adword" className="svg-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

  

   


      {/* our process */}
      <Process
        title="Our Seo Web Design Process"
        image={funnel}
        data={funnelData}
      ></Process>

      {/* why choose */}

      <WhyChoose
        title="Why Choose
"
        highlightedText="Promozione for SEO Web Design?
"
        features={features}
        para="With us, your website becomes your 24/7 sales rep – not just a digital brochure.


"
        ctaTitle="Want a Website That Brings Traffic and Converts?



"
        ctaSubtext="Don't just settle for pretty — go for powerful, purposeful SEO web design that delivers results. "
        ctaParagraph=" Let Promozione build you a website Google will love — and your customers will trust.



 "
        ctaButtonText="Let’s Get Started"
      />

      {/* our services */}

      <Service
        title="What’s Included in Our SEO Web Design Services?
"
        subtitle="Why Your Business Needs  SEO Web Design
"
        points={points}
        note={note}
        services={services}
        image={seoweb1}
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

export default Smo;
