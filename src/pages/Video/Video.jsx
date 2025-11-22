import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";
import Process from "../Process/Process";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import video from "../../assets/services/video (2).webp";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import SEO from "../../components/helmet/Helmet";
const Video = () => {
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
    title: "Brand Story Videos",
    icon: "🎬", // Clapperboard — classic symbol of storytelling and video production
  },
  {
    title: "Promo & Product Videos",
    icon: "📣", // Megaphone — great for promotions and announcements
  },
  {
    title: "Social Media Reels & Shorts",
    icon: "📱", // Mobile phone — ideal for short-form vertical content
  },
  {
    title: "Testimonial & Case Study Videos",
    icon: "🗣️", // Speaking head — represents real people talking, ideal for testimonials
  },
  {
    title: "Explainer & How-To Videos",
    icon: "💡", // Light bulb — symbolizing ideas and simplified explanations
  },
  {
    title: "Corporate & Company Profile Videos",
    icon: "🏢", // Office building — suits company and corporate intros
  },
];


  const funnelData = [
    {
      title: "Step 1: Concept & Scripting",
      services: [
        "  We understand your brand, target audience, and goals to write the perfect script.",
      ],
      color: "#2563eb",
    },
    {
      title: "Step 2: Video Production / Animation",
      services: [
        " Whether it’s live shoot or animated graphics, our creative team brings it to life.",
      ],
      color: "#16a34a",
    },
    {
      title: "Step 3: Editing & Optimization",
      services: [
        "   Color grading, subtitles, music, and formats for every platform.",
      ],
      color: "#f59e0b",
    },
    {
      title: "Step 4: Distribution & Promotion",
      services: [
        "   We help you publish & promote videos across YouTube, Meta, LinkedIn & more.",
      ],
      color: "#ec4899",
    },
    {
      title: "Step 5: Reporting & Analysis",
      services: [
        "   Track performance, views, engagement, and leads. We optimize what works best.",
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
    icon: "bi-camera-reels", // 🎥 for storytelling
    title: "Brand Story Videos",
    description:
      "Share your “Why” with a cinematic touch. Great for homepages, ads & presentations.",
  },
  {
    icon: "bi-megaphone", // 📢 for promos
    title: "Promo & Product Videos",
    description:
      "Launch new products or offers with engaging, scroll-stopping visuals.",
  },
  {
    icon: "bi-phone-landscape", // 📱 for reels/shorts
    title: "Social Media Reels & Shorts",
    description:
      "Short-form content designed for virality on Instagram, YouTube, and LinkedIn.",
  },
  {
    icon: "bi-chat-square-quote", // 💬 for testimonials
    title: "Testimonial & Case Study Videos",
    description:
      "Let happy customers sell for you. Real people = real impact.",
  },
  {
    icon: "bi-lightbulb", // 💡 for explainers
    title: "Explainer & How-To Videos",
    description:
      "Break down your service/product in easy, snackable, highly engaging ways.",
  },
  {
    icon: "bi-building", // 🏢 for corporate videos
    title: "Corporate & Company Profile Videos",
    description:
      "Introduce your team, culture, or mission with a professional, polished tone.",
  },
  {
    icon: "bi-play-circle", // ▶️ for ad-ready content
    title: "Video Ads (YouTube, Meta, Google)",
    description:
      "Script to screen – we create ad-ready video content for maximum ROI.",
  },
];


  const points = [
    " Startups launching new products",
    "Coaches & consultants building personal brands",
    "eCommerce brands boosting product sales",
    "B2B companies explaining complex services",
    "SaaS platforms with features to demo",
    "Local businesses building trust in their city",
  ];
  const note = [
    "We don’t just create videos — we tell stories that sell,If you want more visibility, trust, and conversions — video is your shortcut.",
  ];

  const features = [
    "In-house scripting, voiceover, & editing",
    "High-quality production + quick delivery",
    " Video SEO optimization for YouTube & Google",
    " Platform-specific formats (9:16 for Insta, 16:9 for YouTube)",
    " Custom solutions – not one-size-fits-all",
    "  Hindi + English + Hinglish content options",
  
  ];

  return (
    <>

  <SEO
        title="video marketing services in delhi|video marketing agency in delhi"
        description="Promozione Branding is video marketing agency in Delhi,Professional video marketing services in Delhi to boost brand visibility and engagement with creative, high-quality video content."
      />



      <Tiltcard
        heading="Video Marketing Services in India – Tell Your Story, Sell Your Brand



"
        paragraph="Scroll karte-karte sab dekhta hai… par rukte sirf video par hai!
 That’s the power of video marketing – attention-grabbing, emotion-driving, and conversion-boosting content your brand needs in 2025.
At Promozione Branding Pvt. Ltd., we create and promote high-impact videos they drive ROI




"
        cardItems={cardItems}
      />

      {/* what is */}
<section className="position-relative">
  <div className="container p-3 p-md-4">
    <div className="row align-items-center">
      {/* Text Column */}
      <div className="col-12 col-md-7  " data-aos="fade-up">
        <h1 className="fw-bold display-6 display-md-4 text-center text-md-start px-2">
          Why Video Marketing?
        </h1>
   


         <ul className="php-points">
                {[
                  " 92% of internet users watch videos online.",
                  "Brands using video grow revenue 49% faster.",
                  "Video content boosts conversions by up to 80%.",
                  "It builds emotional connection faster than any other format.",
                  "People retain 90% of a message when seen in a video (vs 10% in text)."
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
        <p className="fw-bold text-center text-md-start px-2">
          If you’re not doing video, you’re invisible.
        </p>
      </div>

      {/* Image Column */}
      <div className="col-12 col-md-5  " data-aos="zoom-in">
        <img src={video} alt="social-ads" className="img-fluid " />
      </div>
    </div>
  </div>
</section>





{/* why choose */}


<WhyChoose
  title="Why  choose?"
  highlightedText="Promozione's Video Marketing
"
  features={features}
  ctaTitle="Ready to Be Seen, Heard & Remembered?

"
  ctaSubtext="Stop guessing. Start scaling."
  ctaParagraph="If your content isn't performing, it might be time to add motion, emotion, and action to your brand.
 With Promozione’s Video Marketing Services, you get scroll-stopping content that converts viewers into customers."
  ctaButtonText="Let’s Get Started"
/>


      {/* our services*/}

      <Service
        title="Our Video Marketing Services Include:"
        subtitle="Who Should Use Video Marketing?




      "
        points={points}
        note={note}
        services={services}
        image={video}
      />

      <Process
title="Our Video Marketing Process " image={funnel} data={funnelData} 

></Process>

<Story></Story>
    <Form2
            heading="Let's Build Your Success Story Together"
            price="Your Growth is Our Guarantee."
            buttonText="Book Your Free Consultation Now!"
            image={ctaImage}
          ></Form2>

    </>




  );
};

export default Video;
